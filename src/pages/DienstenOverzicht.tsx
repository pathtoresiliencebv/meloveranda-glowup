import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, Wind, Sun, Home, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "spie-op-schutting",
    title: "Spie op schutting",
    description: "Dicht uw overkapping af aan de zijkant voor meer privacy of tegen wind, regen en zon.",
    icon: Shield,
    features: ["Meer privacy", "Bescherming tegen wind en regen", "Zonbescherming"]
  },
  {
    id: "glazen-schuifwanden",
    title: "Glazen schuifwanden",
    description: "Sluit uw veranda af wanneer het fris wordt, open ze weer wanneer het warm wordt.",
    icon: Wind,
    features: ["Flexibel open en dicht", "Bescherming bij koud weer", "Optimaal genieten van mooi weer"]
  },
  {
    id: "onder-zonwering",
    title: "Onder zonwering",
    description: "Op maat gemaakte zonwering van tuinmaximaal voor uw overkapping.",
    icon: Sun,
    features: ["Op maat gemaakt", "Inkorten in lengte en breedte mogelijk", "Europese kwaliteit"]
  },
  {
    id: "zijwand",
    title: "Zijwand",
    description: "Dicht uw veranda af aan de zijkanten met verschillende materiaalopties.",
    icon: Home,
    features: ["Polycarbonaat zijwanden", "Sandwichpaneel met spie", "Aluminium rabat zijwanden"]
  },
  {
    id: "losse-montage",
    title: "Losse montage",
    description: "Professionele montage en service voor al uw veranda-oplossingen.",
    icon: Wrench,
    features: ["Professionele montage", "Service en onderhoud", "Expertise in Limburg"]
  }
];

const DienstenOverzicht = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-muted-foreground mb-6">
              Onze Diensten
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Van spie op schutting tot complete montage - wij bieden alle oplossingen 
              voor uw perfecte veranda-ervaring in Limburg.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <ArrowRight className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-warm transition-all duration-300">
                      <Link to={`/diensten/${service.id}`}>
                        Meer informatie
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Klaar voor uw droomveranda?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Neem contact met ons op voor een vrijblijvende offerte en persoonlijk advies.
          </p>
          <Button size="lg" variant="secondary" asChild className="bg-gradient-to-r from-primary to-accent hover:shadow-warm transition-all duration-300">
            <Link to="/contact">Contact opnemen</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DienstenOverzicht;