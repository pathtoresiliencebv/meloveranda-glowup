import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-veranda.jpg";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-4xl">
          {/* Welcome Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-warm/10 border border-primary/20 mb-8">
            <span className="text-sm font-medium text-primary">WELKOM OP MELOVERANDA</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="block text-muted-foreground">PROFESSIONEEL</span>
            <span className="block text-muted-foreground">
              & VAKKUNDIG WERK
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
            Geniet optimaal het hele jaar van uw tuin met onze luxe overkappingen en veranda's. 
            Van advies tot montage, wij zorgen voor vakwerk met een persoonlijke touch.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:shadow-warm transition-all duration-500 text-lg px-8 py-4 group"
              onClick={() => window.location.href = '/contact'}
            >
              Gratis Offerte
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:shadow-warm transition-all duration-300 text-lg px-8 py-4 group backdrop-blur-sm border-none text-white"
              onClick={() => window.location.href = '/portfolio'}
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Bekijk Ons Werk
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">138+</div>
              <div className="text-sm text-muted-foreground">Tevreden Klanten</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground">Jaar Ervaring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10</div>
              <div className="text-sm text-muted-foreground">Jaar Garantie</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Vakwerk</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};