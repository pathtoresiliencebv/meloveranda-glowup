import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Wind, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const GlazenSchuifwanden = () => {
  const features = [
    "Flexibel open en dicht schuiven",
    "Bescherming bij koud weer",
    "Optimaal genieten van mooi weer",
    "Helder glas voor vrij uitzicht",
    "Eenvoudige bediening",
    "Duurzame constructie"
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
              <BreadcrumbPage>Glazen schuifwanden</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <Wind className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Glazen schuifwanden
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Met de schuifdeuren kunt u uw veranda dichtmaken wanneer het buiten fris 
              begint te worden, maar ook open zetten wanneer het warm wordt.
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
                Het beste van beide werelden
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Glazen schuifwanden bieden u de ultieme flexibiliteit. Geniet van de warmte 
                en frisse lucht wanneer het mooi weer is, en sluit uw veranda af wanneer het 
                kouder wordt. Zo kunt u het hele jaar door optimaal genieten van uw buitenruimte.
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
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Offerte aanvragen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/diensten">Alle diensten</Link>
                </Button>
              </div>
            </div>

            {/* Image Placeholder */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/60 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Wind className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Afbeelding van glazen schuifwanden</p>
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
              Specificaties
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Glas & Constructie</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Veiligheidsglas voor optimale veiligheid</li>
                    <li>• Helder zicht naar buiten</li>
                    <li>• Robuuste aluminium frames</li>
                    <li>• Weerbestendige afwerking</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Bediening & Onderhoud</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Soepel schuifsysteem</li>
                    <li>• Minimaal onderhoud vereist</li>
                    <li>• Eenvoudig te reinigen</li>
                    <li>• Lange levensduur</li>
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

export default GlazenSchuifwanden;