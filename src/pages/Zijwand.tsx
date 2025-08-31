import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Zijwand = () => {
  const options = [
    {
      title: "Polycarbonaat zijwanden",
      description: "Lichtdoorlatende panelen voor een open gevoel",
      features: ["Lichtdoorlatend", "Weerbestendig", "Kosteneffectief", "Eenvoudige montage"]
    },
    {
      title: "Sandwichpaneel zijwanden met spie",
      description: "Geisoleerde panelen voor optimale bescherming",
      features: ["Geïsoleerd", "Stevig en duurzaam", "Goede isolatie", "Strakke afwerking"]
    },
    {
      title: "Aluminium rabat zijwanden met spie",
      description: "Premium aluminium voor een luxe uitstraling",
      features: ["Premium materiaal", "Luxe uitstraling", "Onderhoudsvrij", "Lange levensduur"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <section className="py-4 border-b">
        <div className="container mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/diensten">Diensten</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>Zijwand</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <Home className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-muted-foreground mb-6">
              Zijwand oplossingen
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Wilt u uw veranda afdichten aan de zijkanten? Dan is dat mogelijk met 
              verschillende materiaalopties die perfect passen bij uw wensen en budget.
            </p>
          </div>
        </div>
      </section>

      {/* Options Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Kies uw ideale zijwand
          </h2>
          
          <div className="space-y-8">
            {options.map((option, idx) => (
              <Card key={idx} className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        {option.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {option.description}
                      </p>
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        {option.features.map((feature, featureIdx) => (
                          <div key={featureIdx} className="flex items-center">
                            <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/60 rounded-lg flex items-center justify-center">
                      <div className="text-center p-6">
                        <Home className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                        <p className="text-muted-foreground text-sm">{option.title}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Welke zijwand past bij u?
            </h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Budget vriendelijk</h3>
                    <p className="text-muted-foreground mb-4">
                      Polycarbonaat zijwanden bieden een goede prijs-kwaliteit verhouding
                    </p>
                    <Button variant="outline" size="sm">Polycarbonaat</Button>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Gebalanceerd</h3>
                    <p className="text-muted-foreground mb-4">
                      Sandwichpanelen combineren isolatie met een goede prijs
                    </p>
                    <Button variant="outline" size="sm">Sandwichpaneel</Button>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Premium</h3>
                    <p className="text-muted-foreground mb-4">
                      Aluminium rabat voor de hoogste kwaliteit en uitstraling
                    </p>
                    <Button variant="outline" size="sm">Aluminium</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Advies nodig bij uw keuze?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Onze experts helpen u graag bij het kiezen van de juiste zijwand oplossing 
            voor uw veranda en budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent hover:shadow-warm transition-all duration-300">
              <Link to="/contact">
                Advies aanvragen
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-gradient-to-r from-primary to-accent hover:shadow-warm transition-all duration-300 border-none text-white">
              <Link to="/diensten">Alle diensten</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Zijwand;