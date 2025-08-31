import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { 
      status: 405, 
      headers: corsHeaders 
    });
  }

  try {
    const { name, email, phone, subject, message }: ContactEmailRequest = await req.json();

    console.log('Received contact form data:', { name, email, phone, subject: subject || 'geen onderwerp' });

    // Check if RESEND_API_KEY is available
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not configured');
      throw new Error('Email service is not configured');
    }

    console.log('RESEND_API_KEY is configured');

    // Validation
    if (!name || !email || !phone || !message) {
      console.error('Validation failed:', { name: !!name, email: !!email, phone: !!phone, message: !!message });
      return new Response(
        JSON.stringify({ error: "Alle verplichte velden moeten ingevuld zijn" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log('Validation passed, sending email...');

    // Send email to MeloVeranda in Contact Form 7 style
    const emailResponse = await resend.emails.send({
      from: "MeloVeranda Contact Form <onboarding@resend.dev>",
      replyTo: email,
      to: ["info@meloveranda.nl"],
      subject: `[MELOVERANDA] ${subject || 'Ingevulde Contact Formulier'}`,
      text: `[MELOVERANDA] Ingevulde Contact Formulier

From: ${name} <${email}>
Subject: ${subject || 'Geen onderwerp opgegeven'}

Bericht:

Naam: ${name}
Email: ${email}
Telefoon: ${phone}
Onderwerp: ${subject || 'Geen onderwerp opgegeven'}

Bericht:
${message}

---
Dit bericht is verzonden via het contactformulier op meloveranda.nl
Datum: ${new Date().toLocaleString('nl-NL', { timeZone: 'Europe/Amsterdam' })}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #2c5aa0; margin-bottom: 20px; border-bottom: 2px solid #2c5aa0; padding-bottom: 10px;">
              [MELOVERANDA] Ingevulde Contact Formulier
            </h2>
            
            <div style="margin-bottom: 20px;">
              <p style="margin: 5px 0;"><strong>From:</strong> ${name} &lt;${email}&gt;</p>
              <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject || 'Geen onderwerp opgegeven'}</p>
            </div>

            <div style="background-color: #f8f9fa; padding: 20px; border-left: 4px solid #2c5aa0; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #2c5aa0;">Bericht Details:</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid #ddd;">
                  <td style="padding: 8px 0; font-weight: bold; width: 100px;">Naam:</td>
                  <td style="padding: 8px 0;">${name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                  <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                  <td style="padding: 8px 0; font-weight: bold;">Telefoon:</td>
                  <td style="padding: 8px 0;"><a href="tel:${phone}">${phone}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                  <td style="padding: 8px 0; font-weight: bold;">Onderwerp:</td>
                  <td style="padding: 8px 0;">${subject || 'Geen onderwerp opgegeven'}</td>
                </tr>
              </table>
            </div>

            <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 4px;">
              <h4 style="margin-top: 0; color: #2c5aa0;">Bericht:</h4>
              <div style="white-space: pre-wrap; line-height: 1.6;">${message}</div>
            </div>

            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
            <p style="font-size: 12px; color: #666; text-align: center;">
              Dit bericht is verzonden via het contactformulier op meloveranda.nl<br>
              Datum: ${new Date().toLocaleString('nl-NL', { timeZone: 'Europe/Amsterdam' })}
            </p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to customer
    await resend.emails.send({
      from: "MeloVeranda <onboarding@resend.dev>",
      to: [email],
      subject: "Bedankt voor uw bericht - MeloVeranda",
      html: `
        <h2>Bedankt voor uw bericht, ${name}!</h2>
        <p>We hebben uw bericht ontvangen en nemen binnen 24 uur contact met u op.</p>
        
        <h3>Uw bericht:</h3>
        <p><strong>Onderwerp:</strong> ${subject || 'Geen onderwerp opgegeven'}</p>
        <p><strong>Bericht:</strong> ${message.replace(/\n/g, '<br>')}</p>
        
        <h3>Contactgegevens:</h3>
        <p>📞 <strong>Telefoon:</strong> +31 6 27 34 42 88</p>
        <p>📧 <strong>Email:</strong> info@meloveranda.nl</p>
        <p>📍 <strong>Adres:</strong> Jan Campertstraat 13 GB 41, 6416SG Heerlen</p>
        
        <p>Met vriendelijke groet,<br>
        <strong>Team MeloVeranda</strong><br>
        <em>Specialist in overkappingen & veranda's</em></p>
      `,
    });

    console.log("Contact email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Bericht succesvol verzonden! We nemen binnen 24 uur contact met u op." 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: "Er is een fout opgetreden bij het verzenden van uw bericht. Probeer het opnieuw of bel ons direct." 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);