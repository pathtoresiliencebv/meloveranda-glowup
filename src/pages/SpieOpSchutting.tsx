import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Shield, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SpieOpSchutting = () => {
  const features = [
    "Optimale privacy voor uw veranda",
    "Bescherming tegen wind en regen",
    "Effectieve zonbescherming",
    "Duurzame materialen",
    "Professionele montage",
    "Op maat gemaakt"
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
              <BreadcrumbPage>Spie op schutting</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-muted-foreground mb-6">
              Spie op schutting
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Met een spie op schutting kunt u de overkapping afdichten aan de zijkant 
              voor meer privacy of tegen wind, regen en zon.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Waarom kiezen voor spie op schutting?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Een spie op schutting is de perfecte oplossing om uw veranda volledig af te dichten 
                aan de zijkanten. Dit biedt niet alleen extra privacy, maar beschermt u ook optimaal 
                tegen weersinvloeden zoals wind, regen en felle zon.
              </p>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent hover:shadow-warm transition-all duration-300">
                  <Link to="/contact">
                    Offerte aanvragen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-gradient-to-r from-primary to-accent hover:shadow-warm transition-all duration-300 border-none text-white">
                  <Link to="/diensten">Alle diensten</Link>
                </Button>
              </div>
            </div>

            {/* Image Placeholder */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/60 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Shield className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Afbeelding van spie op schutting</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Technische details
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Materiaal & Afwerking</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Hoogwaardige materialen</li>
                    <li>• Weerbestendige afwerking</li>
                    <li>• Verschillende kleuren mogelijk</li>
                    <li>• Passend bij uw bestaande schutting</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Montage & Service</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Professionele montage</li>
                    <li>• Op maat gemaakt</li>
                    <li>• Snelle plaatsing</li>
                    <li>• Garantie op werkzaamheden</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpieOpSchutting;