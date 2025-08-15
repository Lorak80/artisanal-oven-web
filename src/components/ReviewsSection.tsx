import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Marco Bianchi",
      rating: 5,
      text: "La migliore panetteria di Cuneo! Il pane è sempre fresco e croccante, le focacce sono divine. Il personale è cordiale e professionale. Ci vado tutte le mattine per la colazione.",
      date: "2 settimane fa"
    },
    {
      id: 2,
      name: "Giulia Rossi",
      rating: 5,
      text: "Prodotti di qualità eccezionale! Ho ordinato una torta per il compleanno di mia figlia ed è stata perfetta. I grissini sono i migliori che abbia mai assaggiato. Consigliatissimo!",
      date: "1 mese fa"
    },
    {
      id: 3,
      name: "Pietro Alberti",
      rating: 5,
      text: "Tradizione e qualità in ogni prodotto. Si sente che è tutto fatto con passione e ingredienti genuini. Il pane integrale è fantastico e i croissant della domenica mattina sono un rituale imperdibile.",
      date: "3 settimane fa"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating
            ? 'fill-warm-gold text-warm-gold'
            : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Cosa Dicono di Noi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Le recensioni dei nostri clienti sono la nostra migliore pubblicità
          </p>
        </div>

        {/* Overall Rating */}
        <div className="text-center mb-12">
          <Card className="inline-block bg-card/80 backdrop-blur border-border">
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <span className="text-4xl font-bold text-foreground">4.9</span>
                <div className="flex space-x-1">
                  {renderStars(5)}
                </div>
              </div>
              <p className="text-lg text-muted-foreground">
                Media su <span className="font-semibold text-foreground">127 recensioni</span> Google
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-card/80 backdrop-blur border-border hover:shadow-warm transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "{review.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-card/60 backdrop-blur border-border">
            <CardContent className="p-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Hai assaggiato i nostri prodotti?
              </h4>
              <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
                La tua opinione è importante per noi! Condividi la tua esperienza su Google 
                e aiuta altri clienti a scoprire la qualità dei nostri prodotti artigianali.
              </p>
              <div className="flex justify-center space-x-4">
                <Card className="bg-white border border-border p-4 hover:shadow-warm transition-shadow">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-red-500 rounded-sm flex items-center justify-center">
                      <span className="text-white font-bold text-xs">G</span>
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-medium text-foreground">Recensisci su Google</p>
                      <p className="text-xs text-muted-foreground">La tua opinione conta</p>
                    </div>
                  </div>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;