import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Clock, Shield, Award, Search, Settings, Smile, MapPin, Phone, Mail, Building } from "lucide-react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/footer";

export default function OverOns() {
  const benefits = [
    "De laagsteprijsgarantie op alle overkappingen",
    "Duurzaam en onderhoudsarme overkappingen", 
    "Modulaire systemen, dus makkelijk uit te breiden",
    "Snelle levering",
    "Ongeëvenaarde kwaliteit dankzij 6063-T6 aluminium",
    "Gratis inmeet service na offerte aanvraag",
    "Gratis maatwerk bij aankoop van een overkapping",
    "10 jaar garantie op de materialen"
  ];

  const features = [
    {
      icon: Star,
      title: "2 jaar ervaring",
      description: "Veel ervaring in het plaatsen van veranda's!"
    },
    {
      icon: Award,
      title: "Deskundig advies", 
      description: "Wensen omzetten in een fantastisch resultaat begint met een deskundig advies!"
    },
    {
      icon: Clock,
      title: "Snelle realisatie",
      description: "Professioneel gereedschap en veel connecties in het vak zorgen ervoor dat uw opdracht snel wordt gerealiseerd!"
    },
    {
      icon: Shield,
      title: "Scherpe offerte",
      description: "Gegarandeerd vakwerk voor een scherpe prijs, dat is waar u op kunt rekenen!"
    }
  ];

  const steps = [
    {
      number: "1",
      icon: Search,
      title: "Een kijkje nemen",
      description: "We bekijken eerst uw tuin en zullen u daarna adviseren wat wij voor ons zien!"
    },
    {
      number: "2", 
      icon: Settings,
      title: "Voorbereidingen treffen",
      description: "Vervolgens zullen wij ervoor zorgen dat wij alle materialen hebben om te beginnen aan uw overkapping"
    },
    {
      number: "3",
      icon: Smile,
      title: "Service met een lach",
      description: "Nadat wij alle voorbereidingen hebben getroffen, zullen wij overgaan op het plaatsen van uw overkapping!"
    }
  ];

  const companyInfo = [
    {
      icon: Building,
      title: "BTW-nummer",
      value: "NL004856147B44"
    },
    {
      icon: Building,
      title: "KVK-nummer", 
      value: "89765893"
    },
    {
      icon: MapPin,
      title: "Adres",
      value: "Beatrixlaan 25, 6041 CS Roermond"
    },
    {
      icon: Phone,
      title: "Telefoon",
      value: "+31 6 12345678"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-warm/10 border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary">OVER ONS</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-muted-foreground mb-6">
              Melo Montage Service
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Uw specialist in luxe overkappingen en veranda's in Limburg en ver daarbuiten. 
              Kwaliteit, betrouwbaarheid en persoonlijke service staan bij ons centraal.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground mb-6">
                Onze Missie
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Wij zijn de veranda specialist in Limburg. Bij MeloVeranda vinden wij het belangrijk 
                dat u goed geholpen wordt en tevreden bent, daarom denken wij altijd graag met u mee.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Doordat wij met verschillende leveranciers werken, kunnen wij u de beste prijs-kwaliteit 
                verhouding aanbieden. De regio waarin wij voornamelijk bezig zijn is Limburg maar natuurlijk 
                monteren wij onze producten door heel Nederland en ook België.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Een overkapping geeft u een extra levensruimte waarin u heerlijk tot rust kunt komen, 
                gezellig samen kunt zijn en jarenlang veel plezier aan beleeft. Met onze overkappingen 
                kunt u het hele jaar door buiten genieten.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {companyInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="bg-card/80 backdrop-blur-sm border-primary/10">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-warm/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                      <p className="text-sm text-muted-foreground">{info.value}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-warm/10 border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary">WAAROM MELO MONTAGE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground mb-4">
              Waarom kiezen voor ons?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ontdek de voordelen van samenwerken met Melo Montage Service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-card/50 rounded-lg border border-primary/10">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-card/80 backdrop-blur-sm border-primary/10 hover:shadow-warm transition-all duration-500 hover:-translate-y-1"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-warm/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-warm/10 border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary">HOE WIJ WERKEN</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground mb-4">
              Ons Werk Proces
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              In drie eenvoudige stappen van advies naar uw droomveranda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-primary/30 to-accent/30 transform -translate-y-1/2"></div>
            <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-accent/30 to-primary/30 transform -translate-y-1/2"></div>

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={index} 
                  className="relative bg-card/80 backdrop-blur-sm border-primary/10 hover:shadow-warm transition-all duration-500 hover:-translate-y-2 group"
                >
                  <CardContent className="p-8 text-center">
                    {/* Step Number */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-warm">
                        {step.number}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mt-8 mb-6">
                      <div className="w-16 h-16 mx-auto rounded-full bg-gradient-warm/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-hero border-primary/20 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-muted-foreground mb-4">
                Klaar om uw droomveranda te realiseren?
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                Neem contact met ons op voor een vrijblijvende offerte. Wij denken graag met u mee 
                om de perfecte overkapping voor uw situatie te vinden.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-warm transition-all duration-300">
                  Offerte Aanvragen
                </Button>
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10">
                  Bekijk Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}