import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Logo size="lg" linkTo="/" />
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Uw specialist in luxe overkappingen en veranda's. 
              Vakwerk met een persoonlijke touch voor heel Nederland en België.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0 hover:bg-primary/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0 hover:bg-primary/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0 hover:bg-primary/10">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Snelle Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Over Ons</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Diensten</a></li>
              <li><a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Onze Diensten</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Luxe Overkappingen</li>
              <li>Glazen Veranda's</li>
              <li>Terrasoverkappingen</li>
              <li>Pergola's</li>
              <li>Maatwerk Oplossingen</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">+31 6 27 34 42 88</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">info@meloveranda.nl</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-muted-foreground text-sm">
                  <div>Jan Campertstraat 13 GB 41</div>
                  <div>6416SG Heerlen</div>
                  <div className="mt-2 space-y-1">
                    <div>BTW: NL003652289B56</div>
                    <div>KVK: 81453787</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Melo Montage Service. Alle rechten voorbehouden.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacybeleid</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Algemene Voorwaarden</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Cookie Beleid</a>
          </div>
        </div>
      </div>
    </footer>
  );
};