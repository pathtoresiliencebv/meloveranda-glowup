import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  details: string[];
  location?: string;
  year?: string;
}

const portfolioProjects: PortfolioProject[] = [
  {
    id: "1",
    title: "Moderne Glazen Veranda met Schuifwanden",
    category: "glazen-schuifwanden",
    description: "Complete glazen veranda met elektrische schuifwanden voor optimaal comfort",
    image: "/placeholder.svg",
    details: ["Helder glas 8mm gehard", "Aluminium profielen RAL 7016", "Elektrische bediening", "Automatische drainage"],
    location: "Eindhoven",
    year: "2024"
  },
  {
    id: "2",
    title: "Luxe Terrasoverkapping met Zonwering",
    category: "onder-zonwering",
    description: "Stijlvolle overkapping met geïntegreerde zonwering en LED verlichting",
    image: "/placeholder.svg",
    details: ["Motorische zonwering Somfy", "Dimbare LED strips", "Regensensor", "Windmeter"],
    location: "Helmond",
    year: "2024"
  },
  {
    id: "3",
    title: "Elegante Zijwand Constructie",
    category: "zijwand",
    description: "Strakke zijwand voor windbreking en privacy",
    image: "/placeholder.svg",
    details: ["Windwering tot 6 bft", "Gehard veiligheidsglas", "Minimale onderhoudsprofielen", "5 jaar garantie"],
    location: "Tilburg",
    year: "2023"
  },
  {
    id: "4",
    title: "Grote Tuinkamer met Panorama Glas",
    category: "glazen-schuifwanden",
    description: "Ruime tuinkamer voor jaarrond gebruik met panoramische glaspartijen",
    image: "/placeholder.svg",
    details: ["Groot glasoppervlak", "Thermische breking", "Triple glas optie", "Volledige opening mogelijk"],
    location: "Best",
    year: "2024"
  },
  {
    id: "5",
    title: "Moderne Overkapping met Sfeerverlichting",
    category: "overkapping",
    description: "Eigentijdse overkapping met geïntegreerde verlichting",
    image: "/placeholder.svg",
    details: ["Waterdichte LED strips", "Dimmer bediening", "Moderne vormgeving", "Onderhoudsvrij materiaal"],
    location: "Veldhoven",
    year: "2024"
  },
  {
    id: "6",
    title: "Glazen Schuifsysteem op Maat",
    category: "glazen-schuifwanden",
    description: "Op maat gemaakte schuifwanden voor perfecte aansluiting",
    image: "/placeholder.svg",
    details: ["Maatwerk oplossing", "Minimale bodemrails", "RVS hardware", "Gladde bediening"],
    location: "Eersel",
    year: "2023"
  },
  {
    id: "7",
    title: "Terrasoverkapping met Zijwanden",
    category: "overkapping",
    description: "Complete terrassen oplossing met zijwanden voor extra bescherming",
    image: "/placeholder.svg",
    details: ["Gecombineerde oplossing", "Optimale bescherming", "Strak design", "Modulaire opbouw"],
    location: "Geldrop",
    year: "2024"
  },
  {
    id: "8",
    title: "Onder Zonwering Installatie",
    category: "onder-zonwering",
    description: "Professionele zonwering installatie onder bestaande overkapping",
    image: "/placeholder.svg",
    details: ["Bestaande constructie", "Perfecte pasvorm", "Kwaliteits doek", "Lange levensduur"],
    location: "Son",
    year: "2024"
  }
];

const categories = [
  { value: "alle", label: "Alle Projecten" },
  { value: "glazen-schuifwanden", label: "Glazen Schuifwanden" },
  { value: "onder-zonwering", label: "Onder Zonwering" },
  { value: "zijwand", label: "Zijwanden" },
  { value: "overkapping", label: "Overkappingen" }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("alle");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "alle" 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredProjects.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? filteredProjects.length - 1 : selectedImageIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Portfolio
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Onze Gerealiseerde Projecten
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ontdek de kwaliteit en het vakmanschap in onze uitgevoerde projecten. 
            Van moderne glazen veranda's tot stijlvolle overkappingen - elk project wordt op maat gemaakt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Gratis Offerte Aanvragen
            </Button>
            <Button variant="outline" size="lg">
              Bekijk Onze Diensten
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
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

          {/* Project Count */}
          <div className="text-center mb-8">
            <p className="text-muted-foreground">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 'en' : ''} gevonden
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group cursor-pointer hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90 text-foreground">
                      {categories.find(cat => cat.value === project.category)?.label}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                    <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                    {project.location && project.year && (
                      <p className="text-sm text-white/80">{project.location} • {project.year}</p>
                    )}
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white"
              onClick={prevImage}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white"
              onClick={nextImage}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Image */}
            <div className="max-w-6xl max-h-[90vh] w-full h-full flex flex-col">
              <img
                src={filteredProjects[selectedImageIndex].image}
                alt={filteredProjects[selectedImageIndex].title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              
              {/* Image Info */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mt-4 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    {categories.find(cat => cat.value === filteredProjects[selectedImageIndex].category)?.label}
                  </Badge>
                  {filteredProjects[selectedImageIndex].location && filteredProjects[selectedImageIndex].year && (
                    <span className="text-white/80 text-sm">
                      {filteredProjects[selectedImageIndex].location} • {filteredProjects[selectedImageIndex].year}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-3">{filteredProjects[selectedImageIndex].title}</h3>
                <p className="text-white/90 mb-4">{filteredProjects[selectedImageIndex].description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {filteredProjects[selectedImageIndex].details.map((detail, index) => (
                    <Badge key={index} variant="outline" className="text-xs bg-white/10 border-white/20 text-white">
                      {detail}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
              {selectedImageIndex + 1} / {filteredProjects.length}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Geïnspireerd door onze projecten?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Laat ons ook voor u een unieke veranda, overkapping of glazen constructie realiseren. 
            Elk project wordt op maat gemaakt met de hoogste kwaliteit materialen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Gratis Offerte Aanvragen
            </Button>
            <Button variant="outline" size="lg">
              Contact Opnemen
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;