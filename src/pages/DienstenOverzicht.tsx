import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, Wind, Sun, Home, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { HeroBackground } from "@/components/ui/hero-background";

const services = [
  {
    id: "spie-op-schutting",
    title: "Spie op schutting",
    description: "Dicht uw overkapping af aan de zijkant voor meer privacy of tegen wind, regen en zon.",
    icon: Shield,
    image: "/lovable-uploads/5df3681b-7547-43cf-a296-c1f77daafbb0.png",
    features: ["Meer privacy", "Bescherming tegen wind en regen", "Zonbescherming"]
  },
  {
    id: "glazen-schuifwanden",
    title: "Glazen schuifwanden",
    description: "Sluit uw veranda af wanneer het fris wordt, open ze weer wanneer het warm wordt.",
    icon: Wind,
    image: "/lovable-uploads/38b48f40-0d5d-40d4-9f25-de854a8ea3d6.png",
    features: ["Flexibel open en dicht", "Bescherming bij koud weer", "Optimaal genieten van mooi weer"]
  },
  {
    id: "onder-zonwering",
    title: "Onder zonwering",
    description: "Op maat gemaakte zonwering van tuinmaximaal voor uw overkapping.",
    icon: Sun,
    image: "/lovable-uploads/89d4c57d-bc6a-4a05-a26e-7b858f292143.png",
    features: ["Op maat gemaakt", "Inkorten in lengte en breedte mogelijk", "Europese kwaliteit"]
  },
  {
    id: "zijwand",
    title: "Zijwand",
    description: "Dicht uw veranda af aan de zijkanten met verschillende materiaalopties.",
    icon: Home,
    image: "/lovable-uploads/c52a7d95-1bd4-4147-856e-79124a2a4ef0.png",
    features: ["Polycarbonaat zijwanden", "Sandwichpaneel met spie", "Aluminium rabat zijwanden"]
  },
  {
    id: "losse-montage",
    title: "Losse montage",
    description: "Professionele montage en service voor al uw veranda-oplossingen.",
    icon: Wrench,
    image: "/lovable-uploads/9015fa2c-4545-4112-85cf-e90a951633c9.png",
    features: ["Professionele montage", "Service en onderhoud", "Expertise in Limburg"]
  }
];

const DienstenOverzicht = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <HeroBackground>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Onze Diensten
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Van spie op schutting tot complete montage - wij bieden alle oplossingen 
              voor uw perfecte veranda-ervaring in Limburg.
            </p>
          </div>
        </div>
      </HeroBackground>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardHeader className="text-center pb-4">
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