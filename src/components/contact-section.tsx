import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useContactForm } from "@/hooks/use-contact-form";

export const ContactSection = () => {
  const { submitForm, isSubmitting } = useContactForm();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const contactData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    const result = await submitForm(contactData);
    if (result.success) {
      form.reset();
    }
  };
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-warm/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">CONTACT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Neem contact op
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Heeft u vragen of wilt u een vrijblijvende offerte? We helpen u graag verder!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card/80 backdrop-blur-sm border-primary/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Stuur ons een bericht</h3>
              
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Naam *</label>
                    <Input name="name" placeholder="Uw naam" className="border-primary/20 focus:border-primary" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Telefoon</label>
                    <Input name="phone" placeholder="Uw telefoonnummer" className="border-primary/20 focus:border-primary" required />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                  <Input name="email" type="email" placeholder="uw.email@example.com" className="border-primary/20 focus:border-primary" required />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Onderwerp</label>
                  <Input name="subject" placeholder="Waar kunnen we u mee helpen?" className="border-primary/20 focus:border-primary" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Bericht *</label>
                  <Textarea 
                    name="message"
                    placeholder="Vertel ons over uw project..." 
                    className="border-primary/20 focus:border-primary min-h-[120px]" 
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-warm transition-all duration-300"
                >
                  {isSubmitting ? "Verzenden..." : "Verstuur Bericht"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border-primary/10 hover:shadow-warm transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-warm/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telefoon</h4>
                    <p className="text-muted-foreground">+31 6 27 34 42 88</p>
                    <p className="text-sm text-muted-foreground mt-1">Ma-Vr: 08:00 - 18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-primary/10 hover:shadow-warm transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-warm/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">info@meloveranda.nl</p>
                    <p className="text-sm text-muted-foreground mt-1">We reageren binnen 24 uur</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-primary/10 hover:shadow-warm transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-warm/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Locatie</h4>
                    <p className="text-muted-foreground">Jan Campertstraat 13 GB 41</p>
                    <p className="text-sm text-muted-foreground mt-1">6416SG Heerlen - Ook heel Nederland & België</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-primary/10 hover:shadow-warm transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-warm/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Openingstijden</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Maandag - Vrijdag: 08:00 - 18:00</p>
                      <p>Zaterdag: 09:00 - 16:00</p>
                      <p>Zondag: Op afspraak</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="bg-gradient-hero border-primary/20">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-foreground mb-2">Gratis Inmeet Service</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Na uw offerte aanvraag komen wij gratis langs voor een professionele inmeting
                </p>
                <Button 
                  variant="outline" 
                  className="border-primary/30 hover:bg-primary/5"
                  onClick={() => window.location.href = '/contact'}
                >
                  Plan Afspraak
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};