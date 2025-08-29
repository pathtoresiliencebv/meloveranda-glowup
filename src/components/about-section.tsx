import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Clock, Shield, Award } from "lucide-react";

export const AboutSection = () => {
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

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-warm/10 border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary">OVER ONS</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Luxe overkapping laten plaatsen?
            </h2>
            
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
                Waarom MeloVeranda
              </Badge>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Wij zijn de veranda specialist in Limburg. Bij MeloVeranda vinden wij het belangrijk 
                dat u goed geholpen wordt en tevreden bent, daarom denken wij altijd graag met u mee.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Doordat wij met verschillende leveranciers werken, kunnen wij u de beste prijs-kwaliteit 
                verhouding aanbieden. De regio waarin wij voornamelijk bezig zijn is Limburg maar natuurlijk 
                monteren wij onze producten door heel Nederland en ook België.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-warm transition-all duration-300">
              Meer Informatie
            </Button>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-card/80 backdrop-blur-sm border-primary/10 hover:shadow-warm transition-all duration-500 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-warm/10 flex items-center justify-center mb-4">
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

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-hero border-primary/20 backdrop-blur-sm">
            <CardContent className="p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Geniet optimaal het hele jaar van uw tuin
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                Met onze overkappingen en veranda's kunt u het hele jaar door buiten genieten. Zo kunt u met de 
                glazen schuifwanden zelfs wanneer het regent en waait onbezorgd genieten van het buitenleven. 
                Daarnaast kunt u ook met dimbare led verlichting op afstandbediening in de avond genieten van uw overkapping.
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                Een overkapping geeft u een extra levensruimte waarin u heerlijk tot rust kunt komen, 
                gezellig samen kunt zijn en jarenlang veel plezier aan beleeft.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-warm transition-all duration-300">
                Plan Uw Droomveranda
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};