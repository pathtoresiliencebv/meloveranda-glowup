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

    // Validation
    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ error: "Alle verplichte velden moeten ingevuld zijn" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send email to MeloVeranda
    const emailResponse = await resend.emails.send({
      from: "MeloVeranda Contact <onboarding@resend.dev>",
      to: ["info@meloveranda.nl"],
      subject: subject || `Nieuwe contactaanvraag van ${name}`,
      html: `
        <h2>Nieuwe contactaanvraag via website</h2>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefoon:</strong> ${phone}</p>
        <p><strong>Onderwerp:</strong> ${subject || 'Geen onderwerp opgegeven'}</p>
        <h3>Bericht:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        
        <hr>
        <p><em>Dit bericht is verzonden via het contactformulier op meloveranda.nl</em></p>
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