import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/footer";
import { HeroBackground } from "@/components/ui/hero-background";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
              <BreadcrumbPage>Privacybeleid</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Hero Section */}
      <HeroBackground>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacybeleid
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Hoe wij omgaan met uw persoonlijke gegevens
            </p>
          </div>
        </div>
      </HeroBackground>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 space-y-8">
                {/* Introduction */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Inleiding</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>
                      Melo Montage Service hecht grote waarde aan de bescherming van uw persoonlijke gegevens. 
                      In dit privacybeleid leggen wij uit welke persoonsgegevens wij verzamelen, hoe wij deze gebruiken 
                      en welke rechten u heeft.
                    </p>
                    <div className="space-y-2">
                      <p><strong>Verantwoordelijke:</strong> Melo Montage Service</p>
                      <p><strong>Adres:</strong> Jan Campertstraat 13 GB 41, 6416SG Heerlen</p>
                      <p><strong>Telefoon:</strong> +31 6 27 34 42 88</p>
                      <p><strong>E-mail:</strong> info@meloveranda.nl</p>
                      <p><strong>KVK-nummer:</strong> 81453787</p>
                    </div>
                  </div>
                </div>

                {/* Article 1 */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">1. Welke gegevens verzamelen wij?</h3>
                  <div className="text-muted-foreground space-y-2">
                    <p><strong>Contactgegevens:</strong></p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Naam en achternaam</li>
                      <li>E-mailadres</li>
                      <li>Telefoonnummer</li>
                      <li>Adresgegevens</li>
                    </ul>
                    <p className="mt-4"><strong>Projectgegevens:</strong></p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Informatie over uw project</li>
                      <li>Communicatie over offertes</li>
                      <li>Foto's van werkzaamheden (met toestemming)</li>
                    </ul>
                  </div>
                </div>

                {/* Article 2 */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">2. Waarvoor gebruiken wij uw gegevens?</h3>
                  <div className="text-muted-foreground">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Het opstellen en versturen van offertes</li>
                      <li>Communicatie over uw project</li>
                      <li>Uitvoering van de overeenkomst</li>
                      <li>Klantenservice en support</li>
                      <li>Facturatie en boekhouding</li>
                      <li>Wettelijke verplichtingen</li>
                    </ul>
                  </div>
                </div>

                {/* Article 3 */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">3. Rechtsgrond voor verwerking</h3>
                  <div className="text-muted-foreground space-y-2">
                    <p>Wij verwerken uw persoonsgegevens op basis van:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Uitvoering van de overeenkomst</li>
                      <li>Gerechtvaardigd belang (klantenservice)</li>
                      <li>Wettelijke verplichting (boekhouding)</li>
                      <li>Toestemming (marketing, foto's)</li>
                    </ul>
                  </div>
                </div>

                {/* Article 4 */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">4. Delen met derden</h3>
                  <div className="text-muted-foreground space-y-2">
                    <p>Wij delen uw gegevens alleen met:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Leveranciers en onderaannemers (voor projectuitvoering)</li>
                      <li>Administratiekantoor (voor boekhouding)</li>
                      <li>Overheidsinstanties (indien wettelijk verplicht)</li>
                    </ul>
                    <p className="mt-2">Wij verkopen uw gegevens nooit aan derden.</p>
                  </div>
                </div>

                {/* Article 5 */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">5. Bewaartermijnen</h3>
                  <div className="text-muted-foreground space-y-2">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Klantgegevens: 7 jaar na laatste contact</li>
                      <li>Factuurgegevens: 7 jaar (wettelijke verplichting)</li>
                      <li>Projectfoto's: onbeperkt (met toestemming)</li>
                      <li>Marketinggegevens: tot intrekking toestemming</li>
                    </ul>
                  </div>
                </div>

                {/* Article 6 */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">6. Uw rechten</h3>
                  <div className="text-muted-foreground space-y-2">
                    <p>U heeft de volgende rechten:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Recht op inzage van uw gegevens</li>
                      <li>Recht op rectificatie (correctie)</li>
                      <li>Recht op verwijdering ('recht op vergetelheid')</li>
                      <li>Recht op beperking van verwerking</li>
                      <li>Recht op dataportabiliteit</li>
                      <li>Recht van bezwaar</li>
                      <li>Recht om toestemming in te trekken</li>
                    </ul>
                    <p className="mt-4">
                      Voor het uitoefenen van deze rechten kunt u contact opnemen via info@meloveranda.nl
                    </p>
                  </div>
                </div>

                {/* Article 7 */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">7. Beveiliging</h3>
                  <div className="text-muted-foreground space-y-2">
                    <p>
                      Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens 
                      te beschermen tegen verlies, diefstal, ongeautoriseerde toegang en onrechtmatige verwerking.
                    </p>
                  </div>
                </div>

                {/* Article 8 */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">8. Cookies</h3>
                  <div className="text-muted-foreground space-y-2">
                    <p>
                      Onze website gebruikt functionele cookies om de website goed te laten werken. 
                      Wij gebruiken geen tracking cookies zonder uw toestemming.
                    </p>
                  </div>
                </div>

                {/* Article 9 */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">9. Wijzigingen</h3>
                  <div className="text-muted-foreground space-y-2">
                    <p>
                      Wij kunnen dit privacybeleid wijzigen. De meest actuele versie staat altijd op onze website. 
                      Bij belangrijke wijzigingen informeren wij u actief.
                    </p>
                  </div>
                </div>

                {/* Article 10 */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">10. Klachten</h3>
                  <div className="text-muted-foreground space-y-2">
                    <p>
                      Heeft u een klacht over de verwerking van uw persoonsgegevens? Neem dan eerst contact met ons op. 
                      U kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens.
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Dit privacybeleid is laatst gewijzigd op 1 januari 2024.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;