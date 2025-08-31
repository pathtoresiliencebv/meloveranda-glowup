import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { HeroBackground } from "@/components/ui/hero-background";
import { SEOHead } from "@/components/ui/seo-head";
import { getLocalBusinessSchema, getBreadcrumbSchema } from "@/lib/schema-data";

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
    title: "Moderne Glazen Schuifwand met Zijwanden",
    category: "glazen-schuifwanden",
    description: "Complete glazen veranda met schuifwanden en zijwanden voor optimaal comfort",
    image: "/lovable-uploads/d68edfdd-983b-4d75-8ad9-be0b11f4ca11.png",
    details: ["Helder glas 8mm gehard", "Aluminium profielen RAL 7016", "Elektrische bediening", "Automatische drainage"],
    location: "Eindhoven",
    year: "2024"
  },
  {
    id: "2",
    title: "Terrasoverkapping met Zonwering",
    category: "onder-zonwering",
    description: "Stijlvolle overkapping met geïntegreerde zonwering en privacy screening",
    image: "/lovable-uploads/3766842c-51c3-46d4-b521-da546d44fe5d.png",
    details: ["Motorische zonwering Somfy", "Privacy screening", "Regensensor", "Windbestendig"],
    location: "Helmond",
    year: "2024"
  },
  {
    id: "3",
    title: "Luxe Glazen Veranda met Panorama Zicht",
    category: "glazen-schuifwanden",
    description: "Ruime glazen veranda met panoramische glaspartijen en moderne uitstraling",
    image: "/lovable-uploads/7775a8d3-e8c7-4c1d-9197-04b19435380a.png",
    details: ["Groot glasoppervlak", "Thermische breking", "Triple glas optie", "Volledige opening mogelijk"],
    location: "Best",
    year: "2024"
  },
  {
    id: "4",
    title: "Glazen Schuifsysteem Premium",
    category: "glazen-schuifwanden",
    description: "Premium schuifsysteem met grote glaspanelen en minimale profielen",
    image: "/lovable-uploads/de9a994b-f068-4c56-a403-ca6bfcad7b15.png",
    details: ["Maatwerk oplossing", "Minimale bodemrails", "RVS hardware", "Gladde bediening"],
    location: "Tilburg",
    year: "2024"
  },
  {
    id: "5",
    title: "Moderne Glazen Overkapping",
    category: "glazen-schuifwanden",
    description: "Eigentijdse glazen overkapping met strakke lijnen en perfect zicht",
    image: "/lovable-uploads/c4c8b06b-6ba3-4ac7-ad05-de2eec71d425.png",
    details: ["Gehard veiligheidsglas", "Minimale onderhoudsprofielen", "Windwering tot 6 bft", "5 jaar garantie"],
    location: "Eersel",
    year: "2024"
  },
  {
    id: "6",
    title: "Terrasoverkapping Antraciet",
    category: "overkapping",
    description: "Stijlvolle terrasoverkapping in antraciet met helder glas dak",
    image: "/lovable-uploads/03a1e6f4-ac4f-49b8-9169-fcc086774af5.png",
    details: ["Waterdichte afwerking", "Antraciet aluminium", "Helder glas dak", "Onderhoudsvrij materiaal"],
    location: "Veldhoven",
    year: "2024"
  },
  {
    id: "7",
    title: "Glazen Schuifwand Systeem",
    category: "glazen-schuifwanden",
    description: "Complete glazen schuifwand met optimale opening en sluiting",
    image: "/lovable-uploads/81c0953a-d5f9-4e13-936e-3e3058e6dfed.png",
    details: ["Gecombineerde oplossing", "Optimale bescherming", "Strak design", "Modulaire opbouw"],
    location: "Geldrop",
    year: "2024"
  },
  {
    id: "8",
    title: "Moderne Terrasoverkapping",
    category: "overkapping",
    description: "Moderne terrasoverkapping met geïntegreerde afwatering",
    image: "/lovable-uploads/97da99cc-de0d-4b8e-9f10-2c1514a24a4e.png",
    details: ["Geïntegreerde afwatering", "Perfecte pasvorm", "Kwaliteits materialen", "Lange levensduur"],
    location: "Son",
    year: "2024"
  },
  {
    id: "9",
    title: "Tuinoverkapping met Privacy",
    category: "overkapping",
    description: "Tuinoverkapping met privacy wanden en natuurlijke uitstraling",
    image: "/lovable-uploads/90fb592c-c319-41a6-886f-4a07d2c1ec95.png",
    details: ["Privacy wanden", "Natuurlijke materialen", "Weersbestendig", "Onderhoudsvriendelijk"],
    location: "Nuenen",
    year: "2024"
  },
  {
    id: "10",
    title: "Pergola Overkapping Modern",
    category: "overkapping",
    description: "Moderne pergola overkapping met strakke lijnen en duurzame materialen",
    image: "/lovable-uploads/58f6b838-5d4d-4bbb-b2fb-fe745f155f02.png",
    details: ["Pergola constructie", "Strakke lijnen", "Duurzame materialen", "Weersbestendig"],
    location: "Waalre",
    year: "2024"
  },
  {
    id: "11",
    title: "Terrasoverkapping met LED Verlichting",
    category: "overkapping",
    description: "Stijlvolle terrasoverkapping met sfeervolle LED verlichting voor avondgebruik",
    image: "/lovable-uploads/589b0b90-2c28-4e2b-8535-f5430c348fb3.png",
    details: ["LED verlichting geïntegreerd", "Windscherm wanden", "Sfeervolle avondverlichting", "Weersbestendig"],
    location: "Mierlo",
    year: "2024"
  },
  {
    id: "12",
    title: "Stalen Pergola Constructie",
    category: "overkapping",
    description: "Robuuste stalen pergola constructie in aanbouw fase",
    image: "/lovable-uploads/89d4c57d-bc6a-4a05-a26e-7b858f292143.png",
    details: ["Stalen frame constructie", "Modulaire opbouw", "Duurzame materialen", "Professionele montage"],
    location: "Budel",
    year: "2024"
  },
  {
    id: "13",
    title: "Carport Overkapping Polycarbonaat",
    category: "overkapping",
    description: "Moderne carport overkapping met polycarbonaat platen",
    image: "/lovable-uploads/ad169e18-a427-4a33-b2ce-6a747895e71c.png",
    details: ["Polycarbonaat dakbedekking", "Aluminium frame", "Optimale lichtinval", "Onderhoudsvrij"],
    location: "Leende",
    year: "2024"
  },
  {
    id: "14",
    title: "Avond Terras met Sfeerverlichting",
    category: "overkapping",
    description: "Luxe terrasoverkapping met geïntegreerde avondverlichting",
    image: "/lovable-uploads/9962926a-c14c-4e06-98ba-80513dcc68af.png",
    details: ["Dimbare LED strips", "Avondsfeer creatie", "Weersbestendige verlichting", "Moderne uitstraling"],
    location: "Heeze",
    year: "2024"
  },
  {
    id: "15",
    title: "Grote Terrasoverkapping Antraciet",
    category: "overkapping",
    description: "Ruime terrasoverkapping in antraciet voor grote buitenruimtes",
    image: "/lovable-uploads/9c2348a0-b33e-4556-b6c3-ca500a2a1809.png",
    details: ["Grote overspanning", "Antraciet kleurstelling", "Helder glas dak", "Strakke lijnen"],
    location: "Cranendonck",
    year: "2024"
  },
  {
    id: "16",
    title: "Terrasoverkapping met Bakstenen Details",
    category: "overkapping",
    description: "Eigentijdse overkapping met bakstenen elementen en polycarbonaat",
    image: "/lovable-uploads/cf21e2bb-28a3-4857-aef1-794d23973e74.png",
    details: ["Bakstenen details", "Polycarbonaat dakplaten", "Natuurlijke materialen", "Klassieke uitstraling"],
    location: "Someren",
    year: "2024"
  },
  {
    id: "17",
    title: "Glazen Serre Interieur",
    category: "glazen-schuifwanden",
    description: "Moderne glazen serre met complete glazen wanden en dak",
    image: "/lovable-uploads/d3a0dcfb-6a1d-42d3-ab78-c57a3a2eacaf.png",
    details: ["Volledig glazen constructie", "Natuurlijke lichtinval", "Jaarrond gebruik", "Tuinmeubilair integratie"],
    location: "Asten",
    year: "2024"
  },
  {
    id: "18",
    title: "Moderne Glazen Schuifwand Premium",
    category: "glazen-schuifwanden",
    description: "Luxe glazen schuifwand systeem met grote glaspanelen",
    image: "/lovable-uploads/5e56f360-f749-497c-b501-55f51e197e6a.png",
    details: ["Grote glaspanelen", "Minimale profielen", "Optimale doorkijk", "Premium afwerking"],
    location: "Deurne",
    year: "2024"
  },
  {
    id: "19",
    title: "Avondterras met Pergola Verlichting",
    category: "overkapping",
    description: "Stijlvolle pergola met geïntegreerde LED verlichting voor avondgebruik",
    image: "/lovable-uploads/38b48f40-0d5d-40d4-9f25-de854a8ea3d6.png",
    details: ["Pergola constructie", "LED strips geïntegreerd", "Avondsfeer optimaal", "Modern design"],
    location: "Gemert",
    year: "2024"
  },
  {
    id: "20",
    title: "Glazen Schuifwand Systeem Compleet",
    category: "glazen-schuifwanden",
    description: "Complete glazen schuifwand met optimale opening en sluiting",
    image: "/lovable-uploads/9015fa2c-4545-4112-85cf-e90a951633c9.png",
    details: ["Volledige opening mogelijk", "Minimale bodemrails", "Gehard veiligheidsglas", "Soepele bediening"],
    location: "Laarbeek",
    year: "2024"
  },
  {
    id: "21",
    title: "Polycarbonaat Terrasoverkapping",
    category: "overkapping",
    description: "Stijlvolle polycarbonaat overkapping met antraciet frame",
    image: "/lovable-uploads/2e2aca1d-16ec-4c93-9557-7b5e8ea5e1db.png",
    details: ["Polycarbonaat dakplaten", "Antraciet aluminium frame", "Optimale lichtdoorval", "Weerbestendig"],
    location: "Bergeijk",
    year: "2024"
  },
  {
    id: "22",
    title: "Houten Frame Glazen Serre",
    category: "glazen-schuifwanden",
    description: "Luxe glazen serre met houten frame en complete beglazing",
    image: "/lovable-uploads/c52a7d95-1bd4-4147-856e-79124a2a4ef0.png",
    details: ["Houten frame constructie", "Volledig glazen wanden", "Natuurlijke materialen", "Klassieke uitstraling"],
    location: "Reusel",
    year: "2024"
  },
  {
    id: "23",
    title: "Glazen Veranda met Zonwering",
    category: "glazen-schuifwanden",
    description: "Moderne glazen veranda met geïntegreerde zonwering",
    image: "/lovable-uploads/b0d53456-79f5-4498-af83-901e950d46dc.png",
    details: ["Geïntegreerde zonwering", "Grote glaspartijen", "Optimale ventilatie", "Moderne afwerking"],
    location: "Valkenswaard",
    year: "2024"
  },
  {
    id: "24",
    title: "Premium Glazen Serre Interieur",
    category: "glazen-schuifwanden",
    description: "Luxe glazen serre met zonwering en premium afwerking",
    image: "/lovable-uploads/1c799ad4-c3f3-45a5-b355-5646517f250f.png",
    details: ["Zonwering geïntegreerd", "Premium glaspartijen", "Moderne inrichting", "Optimaal comfort"],
    location: "Waalwijk",
    year: "2024"
  },
  {
    id: "25",
    title: "Grote Glazen Veranda Exterior",
    category: "glazen-schuifwanden",
    description: "Ruime glazen veranda met complete glazen constructie",
    image: "/lovable-uploads/5df3681b-7547-43cf-a296-c1f77daafbb0.png",
    details: ["Grote afmetingen", "Volledig glazen constructie", "Moderne vormgeving", "Tuinintegratie"],
    location: "Bladel",
    year: "2024"
  },
  {
    id: "26",
    title: "Moderne Glazen Uitbouw",
    category: "glazen-schuifwanden",
    description: "Eigentijdse glazen uitbouw met strakke lijnen",
    image: "/lovable-uploads/7856e18f-4202-4711-942a-5ab0bb0526b7.png",
    details: ["Strakke vormgeving", "Glazen gevelpanelen", "Moderne architectuur", "Optimale lichtinval"],
    location: "Oirschot",
    year: "2024"
  },
  {
    id: "27",
    title: "Luxe Glazen Conservatorium",
    category: "glazen-schuifwanden",
    description: "Premium glazen conservatorium met volledige beglazing",
    image: "/lovable-uploads/d6d23688-722e-45c0-b5d1-57f8f26f8743.png",
    details: ["Conservatorium design", "Volledige beglazing", "Elegante afwerking", "Jaarrond comfort"],
    location: "Hapert",
    year: "2024"
  },
  {
    id: "28",
    title: "Terrasoverkapping Polycarbonaat",
    category: "overkapping",
    description: "Praktische terrasoverkapping met polycarbonaat dakbedekking",
    image: "/lovable-uploads/aa7322c4-89a3-4fbc-90d1-915b0a7b7c02.png",
    details: ["Polycarbonaat dakplaten", "Stevig aluminium frame", "Waterafvoer geïntegreerd", "Onderhoudsarm"],
    location: "Eersel",
    year: "2024"
  },
  {
    id: "29",
    title: "Glazen Tuinkamer Premium",
    category: "glazen-schuifwanden",
    description: "Luxe glazen tuinkamer met moderne afwerking",
    image: "/lovable-uploads/c71a925a-958e-4326-9db9-c2df8a4ec36c.png",
    details: ["Premium afwerking", "Grote glaspartijen", "Moderne vormgeving", "Perfecte tuinintegratie"],
    location: "Riethoven",
    year: "2024"
  },
  {
    id: "30",
    title: "Moderne Glazen Veranda Elevated",
    category: "glazen-schuifwanden",
    description: "Verhoogde glazen veranda met panoramisch zicht",
    image: "/lovable-uploads/e157eded-f80b-4af9-a621-f790b138410b.png",
    details: ["Verhoogde constructie", "Panoramisch uitzicht", "Moderne glaspartijen", "Exclusief design"],
    location: "Luyksgestel",
    year: "2024"
  },
  {
    id: "31",
    title: "Moderne Glazen Veranda met Schuifpanelen",
    category: "glazen-schuifwanden",
    description: "Stijlvolle glazen veranda met grote schuifpanelen en moderne afwerking",
    image: "/lovable-uploads/24bece07-24b5-4997-882c-91d89a4c9bcf.png",
    details: ["Grote schuifpanelen", "Moderne vormgeving", "Optimale doorkijk", "Antraciet frame"],
    location: "Steensel",
    year: "2024"
  },
  {
    id: "32",
    title: "Glazen Veranda Interieur met LED",
    category: "glazen-schuifwanden",
    description: "Luxe glazen veranda interieur met geïntegreerde LED verlichting",
    image: "/lovable-uploads/904b10bd-c8e8-4f0d-b74c-0f4c03ea3c81.png",
    details: ["LED verlichting geïntegreerd", "Glazen wanden", "Moderne vloer", "Perfect interieurklimaat"],
    location: "Wintelre",
    year: "2024"
  },
  {
    id: "33",
    title: "Veranda met Polycarbonaat en LED",
    category: "glazen-schuifwanden",
    description: "Moderne veranda met polycarbonaat dak en sfeervolle LED verlichting",
    image: "/lovable-uploads/244aee52-b3e7-44ed-8ebd-eda3362148cf.png",
    details: ["Polycarbonaat dakbedekking", "LED strips", "Glazen zijwanden", "Optimale lichtinval"],
    location: "Vessem",
    year: "2024"
  },
  {
    id: "34",
    title: "Glazen Veranda met Privacy Scherm",
    category: "glazen-schuifwanden",
    description: "Glazen veranda met privacy scherm en polycarbonaat dak",
    image: "/lovable-uploads/65fbe8d9-2647-4a09-bf11-298897af0a7e.png",
    details: ["Privacy scherm", "Polycarbonaat dak", "Glazen schuifwanden", "Moderne vormgeving"],
    location: "Knegsel",
    year: "2024"
  },
  {
    id: "35",
    title: "Premium Glazen Veranda Systeem",
    category: "glazen-schuifwanden",
    description: "Premium glazen veranda met complete schuifwand systeem",
    image: "/lovable-uploads/7e7dfd3e-acc5-4da7-8f14-f98e919047e9.png",
    details: ["Complete schuifwand", "Premium glaspartijen", "Volledige opening", "Elegante afwerking"],
    location: "Hoogeloon",
    year: "2024"
  },
  {
    id: "36",
    title: "Compact Glazen Veranda",
    category: "glazen-schuifwanden",
    description: "Compacte glazen veranda met polycarbonaat dak voor kleinere ruimtes",
    image: "/lovable-uploads/28ffd058-b85e-447c-bdef-a7dacce04d63.png",
    details: ["Compact formaat", "Polycarbonaat dak", "Glazen schuifpanelen", "Ideaal voor kleine tuinen"],
    location: "Duizel",
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

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Portfolio", url: "/portfolio" }
  ]);

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
      <SEOHead
        title="Portfolio & Projecten - MeloVeranda | Bekijk Ons Werk"
        description="Bekijk onze gerealiseerde veranda's en overkappingen in Limburg. Van glazen schuifwanden tot terrasoverkappingen - elk project op maat gemaakt."
        keywords="portfolio MeloVeranda, veranda projecten, glazen schuifwanden voorbeelden, overkapping portfolio, gerealiseerde veranda's Limburg"
        canonicalUrl="/portfolio"
        schemaData={[getLocalBusinessSchema(), breadcrumbSchema]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <HeroBackground>
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4 bg-white/20 text-white border-white/30">
            Portfolio
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Onze Gerealiseerde Projecten
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Ontdek de kwaliteit en het vakmanschap in onze uitgevoerde projecten. 
            Van moderne glazen veranda's tot stijlvolle overkappingen - elk project wordt op maat gemaakt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all duration-300">
              Gratis Offerte Aanvragen
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 transition-all duration-300">
              Bekijk Onze Diensten
            </Button>
          </div>
        </div>
      </HeroBackground>

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