import { Card, CardContent } from "@/components/ui/card";
import bakerImage from "@/assets/baker-working.jpg";

const AboutSection = () => {
  return (
    <section id="chi-siamo" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Chi Siamo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Una storia di passione e tradizione che si tramanda da generazioni
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                La Nostra Storia
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Portiamo avanti con dedizione l'arte della panificazione artigianale nel cuore di Cuneo. Lo Staio nasce dalla passione per i sapori autentici e dalla volontà di preservare le ricette tradizionali piemontesi.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ogni mattina alle 4:00 iniziamo a impastare con cura i nostri prodotti, utilizzando esclusivamente farine selezionate, lievito madre e ingredienti genuini. La nostra filosofia è semplice: qualità, tradizione e amore per il lavoro ben fatto.
              </p>
            </div>

            <div className="grid sm:grid-cols-1 gap-4">
              
              <Card className="bg-card/80 backdrop-blur border-border">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Artigianale</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-warm">
              <img 
                src={bakerImage} 
                alt="Il nostro panettiere al lavoro"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rich-brown/20 to-transparent" />
            </div>
            
            
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default AboutSection;