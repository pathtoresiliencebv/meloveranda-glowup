import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message: string;
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

Deno.serve(async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405, headers: corsHeaders });
  }

  let client: SMTPClient | null = null;

  try {
    const { name, email, phone, subject, message }: ContactEmailRequest = await req.json();

    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ error: "Alle verplichte velden moeten ingevuld zijn" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    const hostname = Deno.env.get("SMTP_HOST");
    const port = parseInt(Deno.env.get("SMTP_PORT") || "465", 10);
    const username = Deno.env.get("SMTP_USER");
    const password = Deno.env.get("SMTP_PASSWORD");

    if (!hostname || !username || !password) {
      console.error("SMTP configuration missing");
      return new Response(
        JSON.stringify({ error: "E-mailservice is niet geconfigureerd" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    const onderwerp = subject?.trim() || "Geen onderwerp opgegeven";
    const datum = new Date().toLocaleString("nl-NL", { timeZone: "Europe/Amsterdam" });

    client = new SMTPClient({
      connection: {
        hostname,
        port,
        tls: port === 465,
        auth: { username, password },
      },
    });

    const plain = `[MELOVERANDA] Ingevuld contactformulier

Naam: ${name}
Email: ${email}
Telefoon: ${phone}
Onderwerp: ${onderwerp}

Bericht:
${message}

---
Verzonden via het contactformulier op meloveranda.nl
Datum: ${datum}`;

    const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f7f7f7;">
      <div style="background: #ffffff; padding: 28px; border-radius: 8px;">
        <h2 style="color:#2c5aa0; border-bottom:2px solid #2c5aa0; padding-bottom:10px; margin-top:0;">
          [MELOVERANDA] Ingevuld contactformulier
        </h2>
        <table style="width:100%; border-collapse:collapse; margin:20px 0;">
          <tr><td style="padding:8px 0; font-weight:bold; width:120px;">Naam:</td><td style="padding:8px 0;">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:8px 0; font-weight:bold;">Email:</td><td style="padding:8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding:8px 0; font-weight:bold;">Telefoon:</td><td style="padding:8px 0;"><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></td></tr>
          <tr><td style="padding:8px 0; font-weight:bold;">Onderwerp:</td><td style="padding:8px 0;">${escapeHtml(onderwerp)}</td></tr>
        </table>
        <div style="background:#f8f9fa; border-left:4px solid #2c5aa0; padding:16px;">
          <h4 style="margin:0 0 8px; color:#2c5aa0;">Bericht</h4>
          <div style="white-space:pre-wrap; line-height:1.6;">${escapeHtml(message)}</div>
        </div>
        <p style="font-size:12px; color:#666; text-align:center; margin-top:28px;">
          Verzonden via het contactformulier op meloveranda.nl<br>${datum}
        </p>
      </div>
    </div>`;

    await client.send({
      from: `MeloVeranda Website <${username}>`,
      to: "info@meloveranda.nl",
      replyTo: email,
      subject: `[MELOVERANDA] ${onderwerp}`,
      content: plain,
      html,
    });

    // Bevestiging naar de klant
    await client.send({
      from: `MeloVeranda <${username}>`,
      to: email,
      subject: "Bedankt voor uw bericht - MeloVeranda",
      content: `Bedankt voor uw bericht, ${name}!

We hebben uw bericht ontvangen en nemen binnen 24 uur contact met u op.

Uw bericht:
Onderwerp: ${onderwerp}
${message}

Contactgegevens:
Telefoon: +31 6 27 34 42 88
Email: info@meloveranda.nl
Adres: Jan Campertstraat 13 GB 41, 6416SG Heerlen

Met vriendelijke groet,
Team MeloVeranda`,
      html: `
      <div style="font-family: Arial, Helvetica, sans-serif; max-width:600px; margin:0 auto; padding:20px;">
        <h2 style="color:#2c5aa0;">Bedankt voor uw bericht, ${escapeHtml(name)}!</h2>
        <p>We hebben uw bericht ontvangen en nemen binnen 24 uur contact met u op.</p>
        <div style="background:#f8f9fa; padding:16px; border-radius:8px;">
          <p style="margin:0 0 8px;"><strong>Onderwerp:</strong> ${escapeHtml(onderwerp)}</p>
          <div style="white-space:pre-wrap;">${escapeHtml(message)}</div>
        </div>
        <div style="background:#e3f2fd; padding:16px; border-radius:8px; margin-top:16px;">
          <p style="margin:4px 0;"><strong>Telefoon:</strong> <a href="tel:+31627344288">+31 6 27 34 42 88</a></p>
          <p style="margin:4px 0;"><strong>Email:</strong> <a href="mailto:info@meloveranda.nl">info@meloveranda.nl</a></p>
          <p style="margin:4px 0;"><strong>Adres:</strong> Jan Campertstraat 13 GB 41, 6416SG Heerlen</p>
        </div>
        <p>Met vriendelijke groet,<br><strong>Team MeloVeranda</strong></p>
      </div>`,
    });

    await client.close();
    client = null;

    return new Response(
      JSON.stringify({ success: true, message: "Bericht succesvol verzonden!" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } },
    );
  } catch (error) {
    console.error("send-contact-email error:", error);
    try {
      await client?.close();
    } catch (_) {
      // ignore
    }
    return new Response(
      JSON.stringify({
        error: "Er is een fout opgetreden bij het verzenden van uw bericht. Probeer het opnieuw of bel ons direct.",
      }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } },
    );
  }
});
