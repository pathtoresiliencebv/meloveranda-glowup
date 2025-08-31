import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Wrench, Check, ArrowRight, Users, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";

const LosseMontage = () => {
  const services = [
    "Professionele montage van veranda's",
    "Plaatsing van overkappingen",
    "Montage van zonwering",
    "Installatie van zijwanden",
    "Service en onderhoud",
    "Reparaties en aanpassingen"
  ];

  const benefits = [
    {
      icon: Users,
      title: "Ervaren monteurs",
      description: "Ons team heeft jarenlange ervaring met veranda montage"
    },
    {
      icon: Clock,
      title: "Snelle service",
      description: "Efficiënte planning en uitvoering van uw project"
    },
    {
      icon: Award,
      title: "Kwaliteitsgarantie",
      description: "Garantie op alle werkzaamheden en materialen"
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
              <BreadcrumbPage>Losse montage</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <Wrench className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Losse montage
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Uiteraard kunnen wij het ook voor u doen. Tuinmaximaal is gestopt met het bieden van montage 
              en service, maar bij Melo veranda in Limburg profiteert u nog wel van deze mogelijkheden.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Volledige montage en service
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Waar Tuinmaximaal is gestopt met montage en service, bieden wij deze diensten 
                nog wel aan. Onze ervaren monteurs zorgen voor een professionele en nette 
                plaatsing van uw veranda-oplossingen.
              </p>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Van complete veranda's tot losse onderdelen - wij monteren het allemaal met 
                de zorgvuldigheid en vakmanschap die u van ons gewend bent.
              </p>
              
              <div className="space-y-4 mb-8">
                {services.map((service, idx) => (
                  <div key={idx} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Montage aanvragen
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
                    <Wrench className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Professionele montage service</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Waarom kiezen voor onze montage?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={idx} className="text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Hoe werkt het?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Contact & Planning</h3>
                <p className="text-muted-foreground">
                  Neem contact op voor een afspraak en planning van de montage
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Professionele Montage</h3>
                <p className="text-muted-foreground">
                  Onze monteurs plaatsen uw veranda vakkundig en netjes
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Oplevering & Service</h3>
                <p className="text-muted-foreground">
                  Controlere en uitleg, plus doorlopende service wanneer nodig
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LosseMontage;