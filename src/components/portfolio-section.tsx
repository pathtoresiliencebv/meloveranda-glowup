import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  details: string[];
}

const portfolioProjects: PortfolioProject[] = [
  {
    id: "1",
    title: "Moderne Glazen Veranda",
    category: "glazen-schuifwanden",
    description: "Strak design met helder glas en aluminium framewerk",
    image: "/lovable-uploads/38b48f40-0d5d-40d4-9f25-de854a8ea3d6.png",
    details: ["Helder glas 8mm", "Aluminium profiel", "Automatische drainage"]
  },
  {
    id: "2", 
    title: "Luxe Overkapping met Zonwering",
    category: "onder-zonwering",
    description: "Volledig geïntegreerde zonwering oplossing",
    image: "/lovable-uploads/89d4c57d-bc6a-4a05-a26e-7b858f292143.png",
    details: ["Motorische zonwering", "LED verlichting", "Regensensor"]
  },
  {
    id: "3",
    title: "Elegante Zijwand Constructie",
    category: "zijwand", 
    description: "Windbreking met design elementen",
    image: "/lovable-uploads/c52a7d95-1bd4-4147-856e-79124a2a4ef0.png",
    details: ["Windwering tot 6 bft", "Gehard veiligheidsglas", "Strakke lijnen"]
  },
  {
    id: "4",
    title: "Tuinkamer met Schuifwanden",
    category: "glazen-schuifwanden",
    description: "Complete tuinkamer oplossing jaar rond gebruik",
    image: "/lovable-uploads/c4c8b06b-6ba3-4ac7-ad05-de2eec71d425.png", 
    details: ["4-seizoenen gebruik", "Volledige opening mogelijk", "Geïsoleerde profielen"]
  },
  {
    id: "5",
    title: "Terrasoverkapping met Verlichting",
    category: "overkapping",
    description: "Sfeervolle avond beleving gegarandeerd",
    image: "/lovable-uploads/9015fa2c-4545-4112-85cf-e90a951633c9.png",
    details: ["Dimbare LED strips", "Waterdichte connectoren", "Moderne vormgeving"]
  },
  {
    id: "6",
    title: "Glazen Schuifwand Systeem",
    category: "glazen-schuifwanden", 
    description: "Naadloze overgang binnen en buiten",
    image: "/lovable-uploads/d68edfdd-983b-4d75-8ad9-be0b11f4ca11.png",
    details: ["Minimale bodemrails", "Maximale glasoppervlak", "Eenvoudige bediening"]
  }
];

const categories = [
  { value: "alle", label: "Alle Projecten" },
  { value: "glazen-schuifwanden", label: "Glazen Schuifwanden" },
  { value: "onder-zonwering", label: "Onder Zonwering" },
  { value: "zijwand", label: "Zijwanden" },
  { value: "overkapping", label: "Overkappingen" }
];

export const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("alle");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filteredProjects = selectedCategory === "alle" 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Onze Gerealiseerde Projecten
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ontdek de kwaliteit en vakmanschap in onze uitgevoerde projecten. 
            Van moderne glazen veranda's tot stijlvolle overkappingen.
          </p>
        </div>

        {/* Category Filter */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-4xl mx-auto h-auto">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.value} 
                value={category.value}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm p-3"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <Link to="/portfolio" key={project.id}>
              <Card className="group cursor-pointer hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge variant="secondary" className="mb-2">
                    {categories.find(cat => cat.value === project.category)?.label}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.details.slice(0, 2).map((detail, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {detail}
                    </Badge>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80">
                  Bekijk Details
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-subtle rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Geïnspireerd door onze projecten?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Laat ons ook voor u een unieke veranda, overkapping of glazen constructie realiseren. 
            Vraag een vrijblijvende offerte aan.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <Link to="/portfolio">Bekijk Ons Werk</Link>
          </Button>
        </div>

        {/* Project Detail Modal - Simple version for now */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-background/80 hover:bg-background"
                  onClick={() => setSelectedProject(null)}
                >
                  ×
                </Button>
              </div>
              <div className="p-6">
                <Badge variant="outline" className="mb-3">
                  {categories.find(cat => cat.value === selectedProject.category)?.label}
                </Badge>
                <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                <p className="text-muted-foreground mb-6">{selectedProject.description}</p>
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold">Specificaties:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {selectedProject.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
                          <Button 
                            className="w-full"
                            onClick={() => window.location.href = '/contact'}
                          >
                            Vergelijkbaar Project Aanvragen
                          </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};