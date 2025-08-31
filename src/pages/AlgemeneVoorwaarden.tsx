import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/footer";
import { HeroBackground } from "@/components/ui/hero-background";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

const AlgemeneVoorwaarden = () => {
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
              <BreadcrumbPage>Algemene Voorwaarden</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Hero Section */}
      <HeroBackground>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Algemene Voorwaarden
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              De algemene voorwaarden van Melo Montage Service
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
                {/* Company Info */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Bedrijfsgegevens</h2>
                  <div className="text-muted-foreground space-y-2">
                    <p><strong>Naam:</strong> Melo Montage Service</p>
                    <p><strong>Adres:</strong> Jan Campertstraat 13 GB 41, 6416SG Heerlen</p>
                    <p><strong>Telefoon:</strong> +31 6 27 34 42 88</p>
                    <p><strong>E-mail:</strong> info@meloveranda.nl</p>
                    <p><strong>BTW-nummer:</strong> NL003652289B56</p>
                    <p><strong>KVK-nummer:</strong> 81453787</p>
                  </div>
                </div>

                {/* Article 1 */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Artikel 1: Definities</h3>
                  <div className="text-muted-foreground space-y-2">
                    <p>1.1. <strong>Opdrachtnemer:</strong> Melo Montage Service, gevestigd te Heerlen.</p>
                    <p>1.2. <strong>Opdrachtgever:</strong> De natuurlijke of rechtspersoon die een overeenkomst aangaat met opdrachtnemer.</p>
                    <p>1.3. <strong>Overeenkomst:</strong> Elke overeenkomst tussen opdrachtnemer en opdrachtgever.</p>
                  </div>
                </div>

                {/* Article 2 */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Artikel 2: Toepasselijkheid</h3>
                  <div className="text-muted-foreground space-y-2">
                    <p>2.1. Deze algemene voorwaarden zijn van toepassing op alle offertes, overeenkomsten en leveringen van opdrachtnemer.</p>
                    <p>2.2. Afwijkingen van deze voorwaarden zijn alleen geldig indien uitdrukkelijk schriftelijk overeengekomen.</p>
                    <p>2.3. Eventuele inkoop- of andere voorwaarden van opdrachtgever zijn uitdrukkelijk uitgesloten.</p>
                  </div>
                </div>

                {/* Article 3 */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Artikel 3: Offertes en Overeenkomsten</h3>
                  <div className="text-muted-foreground space-y-2">
                    <p>3.1. Alle offertes zijn vrijblijvend en geldig gedurende 30 dagen, tenzij anders vermeld.</p>
                    <p>3.2. Een overeenkomst komt tot stand door schriftelijke bevestiging van opdrachtnemer of door aanvang van de werkzaamheden.</p>
                    <p>3.3. Wijzigingen in de overeenkomst zijn alleen geldig indien schriftelijk overeengekomen.</p>
                  </div>
                </div>

                {/* Article 4 */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Artikel 4: Uitvoering</h3>
                  <div className="text-muted-foreground space-y-2">
                    <p>4.1. Opdrachtnemer voert de werkzaamheden uit conform de gemaakte afspraken en volgens de regels van het vak.</p>
                    <p>4.2. Opdrachtgever zorgt voor toegankelijkheid van de werkplek en alle benodigde faciliteiten.</p>
                    <p>4.3. Wijzigingen in de opdracht kunnen leiden tot aanpassing van prijs en/of levertijd.</p>
                  </div>
                </div>

                {/* Article 5 */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Artikel 5: Prijzen en Betaling</h3>
                  <div className="text-muted-foreground space-y-2">
                    <p>5.1. Alle prijzen zijn exclusief BTW en andere heffingen, tenzij anders vermeld.</p>
                    <p>5.2. Betaling dient te geschieden binnen 14 dagen na factuurdatum.</p>
                    <p>5.3. Bij niet-tijdige betaling is opdrachtgever van rechtswege in verzuim en is rente verschuldigd.</p>
                  </div>
                </div>

                {/* Article 6 */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Artikel 6: Garantie</h3>
                  <div className="text-muted-foreground space-y-2">
                    <p>6.1. Opdrachtnemer biedt garantie conform de branchegerichte normen en/of fabrieksgarantie.</p>
                    <p>6.2. Garantie vervalt bij oneigenlijk gebruik, normale slijtage of wijzigingen door derden.</p>
                    <p>6.3. Garantieclaims dienen schriftelijk gemeld te worden binnen de garantieperiode.</p>
                  </div>
                </div>

                {/* Article 7 */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Artikel 7: Aansprakelijkheid</h3>
                  <div className="text-muted-foreground space-y-2">
                    <p>7.1. Opdrachtnemer is alleen aansprakelijk voor directe schade tot maximaal het factuurbedrag.</p>
                    <p>7.2. Opdrachtnemer is niet aansprakelijk voor indirecte schade, gevolgschade of bedrijfsschade.</p>
                    <p>7.3. Opdrachtgever dient schade binnen 8 dagen schriftelijk te melden.</p>
                  </div>
                </div>

                {/* Article 8 */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Artikel 8: Ontbinding</h3>
                  <div className="text-muted-foreground space-y-2">
                    <p>8.1. Bij wanprestatie kan de overeenkomst schriftelijk worden ontbonden na ingebrekestelling.</p>
                    <p>8.2. Reeds verrichte werkzaamheden blijven verschuldigd.</p>
                    <p>8.3. Bij ontbinding door opdrachtgever zijn gemaakte kosten en gederfde winst verschuldigd.</p>
                  </div>
                </div>

                {/* Article 9 */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Artikel 9: Geschillen</h3>
                  <div className="text-muted-foreground space-y-2">
                    <p>9.1. Op alle overeenkomsten is Nederlands recht van toepassing.</p>
                    <p>9.2. Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement waar opdrachtnemer is gevestigd.</p>
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Deze algemene voorwaarden zijn gedeponeerd bij de Kamer van Koophandel en zijn laatst gewijzigd op 1 januari 2024.
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

export default AlgemeneVoorwaarden;