import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-bakery.jpg";
import breadImage from "@/assets/bread-assortment.jpg";
import bakerImage from "@/assets/baker-working.jpg";
import pastriesImage from "@/assets/pastries-display.jpg";

const GallerySection = () => {
  const galleryImages = [
    {
      id: 1,
      src: heroImage,
      alt: "Esterno della panetteria Lo Staio",
      title: "Il nostro negozio"
    },
    {
      id: 2,
      src: breadImage,
      alt: "Assortimento di pane fresco",
      title: "Pane appena sfornato"
    },
    {
      id: 3,
      src: bakerImage,
      alt: "Panettiere al lavoro",
      title: "La lavorazione artigianale"
    },
    {
      id: 4,
      src: pastriesImage,
      alt: "Dolci e pasticceria",
      title: "Le nostre specialità dolci"
    },
    {
      id: 5,
      src: breadImage,
      alt: "Focaccia tradizionale",
      title: "Focaccia ligure"
    },
    {
      id: 6,
      src: pastriesImage,
      alt: "Croissant freschi",
      title: "Paste sfogliate"
    }
  ];

  return (
    <section id="galleria" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Galleria
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Scopri l'atmosfera calda e accogliente della nostra panetteria e la qualità dei nostri prodotti artigianali
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card 
              key={image.id} 
              className={`group overflow-hidden border-border hover:shadow-glow transition-all duration-500 ${
                index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                    index === 0 ? 'h-64 lg:h-80' : 'h-64'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rich-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {image.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {image.alt}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-warm rounded-2xl p-8 border border-border">
            <h4 className="text-2xl font-semibold text-foreground mb-4">
              Seguici sui Social
            </h4>
            <p className="text-muted-foreground text-lg mb-6 max-w-3xl mx-auto">
              Resta aggiornato sulle nostre novità, offerte speciali e prodotti di stagione. 
              Condividiamo quotidianamente foto dei nostri prodotti freschi e delle nostre creazioni speciali.
            </p>
            <div className="flex justify-center space-x-4">
              <Card className="bg-card/60 backdrop-blur border-border p-6 hover:shadow-warm transition-shadow">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary-foreground font-bold">f</span>
                  </div>
                  <p className="text-sm font-medium text-foreground">Facebook</p>
                  <p className="text-xs text-muted-foreground">@LoStaioCuneo</p>
                </div>
              </Card>
              <Card className="bg-card/60 backdrop-blur border-border p-6 hover:shadow-warm transition-shadow">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-rich-brown font-bold">IG</span>
                  </div>
                  <p className="text-sm font-medium text-foreground">Instagram</p>
                  <p className="text-xs text-muted-foreground">@lostaio_cuneo</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;