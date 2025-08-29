import { Card, CardContent } from "@/components/ui/card";
import { Search, Settings, Smile } from "lucide-react";

export const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      icon: Search,
      title: "Een kijkje nemen",
      description: "We bekijken eerst uw tuin en zullen u daarna adviseren wat wij voor ons zien!"
    },
    {
      number: "2", 
      icon: Settings,
      title: "Voorbereidingen treffen",
      description: "Vervolgens zullen wij ervoor zorgen dat wij alle materialen hebben om te beginnen aan uw overkapping"
    },
    {
      number: "3",
      icon: Smile,
      title: "Service met een lach",
      description: "Nadat wij alle voorbereidingen hebben getroffen, zullen wij overgaan op het plaatsen van uw overkapping!"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-warm/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">HOE WIJ WERKEN</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ons Werk Proces
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            In drie eenvoudige stappen van advies naar uw droomveranda
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-primary/30 to-accent/30 transform -translate-y-1/2"></div>
          <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-accent/30 to-primary/30 transform -translate-y-1/2"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index} 
                className="relative bg-card/80 backdrop-blur-sm border-primary/10 hover:shadow-warm transition-all duration-500 hover:-translate-y-2 group"
              >
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-warm">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mt-8 mb-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-warm/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};