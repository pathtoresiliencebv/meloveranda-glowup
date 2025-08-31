import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/hero-section";
import { ProcessSection } from "@/components/process-section";
import { AboutSection } from "@/components/about-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { SEOHead } from "@/components/ui/seo-head";
import { getLocalBusinessSchema, getOrganizationSchema, getWebsiteSchema } from "@/lib/schema-data";

const Index = () => {
  const combinedSchema = [
    getLocalBusinessSchema(),
    getOrganizationSchema(), 
    getWebsiteSchema()
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="MeloVeranda - Luxe Overkappingen & Veranda's | Specialist in Limburg"
        description="Professionele veranda's en overkappingen in Limburg. Vakkundig werk, 10 jaar garantie, gratis advies. Actief in heel Nederland en België."
        keywords="veranda, overkapping, glazen schuifwanden, Limburg, Nederland, België, MeloVeranda, terrasoverkapping, tuinkamer"
        canonicalUrl="/"
        schemaData={combinedSchema}
      />
      <Navigation />
      <HeroSection />
      <ProcessSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
