import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { HeroBackground } from "@/components/ui/hero-background";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <HeroBackground>
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4 bg-white/20 text-white border-white/30">
            Contact & Offerte
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Vraag een Gratis Offerte Aan
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Neem contact met ons op voor een vrijblijvende offerte. 
            Wij komen gratuït bij u langs voor een professioneel inmeetadvies.
          </p>
        </div>
      </HeroBackground>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Stuur ons een bericht</CardTitle>
                  <p className="text-muted-foreground">
                    Vul het formulier in en we nemen binnen 24 uur contact met u op.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Naam *
                      </label>
                      <Input
                        id="name"
                        placeholder="Uw volledige naam"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-foreground">
                        Telefoon *
                      </label>
                      <Input
                        id="phone"
                        placeholder="06 12345678"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="uw.email@voorbeeld.nl"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Onderwerp
                    </label>
                    <Input
                      id="subject"
                      placeholder="Offerte aanvraag glazen veranda"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Bericht *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Beschrijf uw wensen en geef eventueel afmetingen door..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-warm transition-all duration-300" size="lg">
                    Verstuur Bericht
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover:shadow-warm transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Telefoon</h3>
                    <p className="text-muted-foreground">+31 6 27 34 42 88</p>
                    <p className="text-sm text-muted-foreground mt-1">Ma-Vr 8:00-18:00</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-warm transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">E-mail</h3>
                    <p className="text-muted-foreground">info@meloveranda.nl</p>
                    <p className="text-sm text-muted-foreground mt-1">24/7 beschikbaar</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-warm transition-shadow">
                  <CardContent className="p-6 text-center">
                    <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Locatie</h3>
                    <p className="text-muted-foreground">Jan Campertstraat 13 GB 41</p>
                    <p className="text-sm text-muted-foreground mt-1">6416SG Heerlen</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-warm transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Openingstijden</h3>
                    <p className="text-muted-foreground">Ma-Vr: 8:00-18:00</p>
                    <p className="text-sm text-muted-foreground mt-1">Za: Op afspraak</p>
                  </CardContent>
                </Card>
              </div>

              {/* Service Information */}
              <Card className="bg-gradient-subtle border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl">Gratis Inmeet Service</CardTitle>
                  <p className="text-muted-foreground">
                    Wij komen kosteloos bij u langs voor professioneel advies en een nauwkeurige opmeting.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Gratis advies en opmeting</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Vrijblijvende offerte binnen 48 uur</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Persoonlijk advies op maat</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Geen verborgen kosten</span>
                  </div>
                  <Button className="w-full mt-4 bg-gradient-to-r from-primary to-accent hover:shadow-warm transition-all duration-300">
                    Plan Afspraak
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hoe het werkt</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Van eerste contact tot oplevering - ons proces in 4 eenvoudige stappen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Contact & Advies",
                description: "U neemt contact op, wij plannen een gratis adviesgesprek"
              },
              {
                step: "2", 
                title: "Inmeten & Ontwerp",
                description: "Professionele opmeting en 3D visualisatie van uw project"
              },
              {
                step: "3",
                title: "Offerte & Planning",
                description: "Gedetailleerde offerte en planning van de werkzaamheden"
              },
              {
                step: "4",
                title: "Realisatie & Oplevering",
                description: "Vakkundige montage en oplevering van uw droomproject"
              }
            ].map((item) => (
              <Card key={item.step} className="text-center hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;