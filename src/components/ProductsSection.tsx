import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import breadImage from "@/assets/bread-assortment.jpg";
import pastriesImage from "@/assets/pastries-display.jpg";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "Ciabatta 'Italia'",
      description: "Farina tipo 1, senza grassi - la nostra specialità",
      image: breadImage,
      specialty: "Specialità della casa",
      price: "€ 5,20/kg"
    },
    {
      id: 2,
      name: "Pane di Grano Duro",
      description: "A lievitazione naturale",
      image: breadImage,
      specialty: "Lievitazione naturale",
      price: "€ 5,20/kg"
    },
    {
      id: 3,
      name: "Grissini stirati a Mano",
      description: "Secondo la tradizione piemontese, anche ai 5 cereali",
      image: breadImage,
      specialty: "Tradizione piemontese",
      price: "€ 9,80/kg"
    },
    {
      id: 4,
      name: "Croissant",
      description: "Cioccolato, albicocca, frutti di bosco, pistacchio, e crema pasticcera fresca artigianale,  - freschi ogni mattina",
      image: pastriesImage,
      specialty: "Lievitazione 12h",
      price: "€ 1,20 cad"
    },
    {
      id: 5,
      name: "Panettone Artigianale",
      description: "Panettoni artigianali per le festività natalizie",
      image: pastriesImage,
      specialty: "Solo a Natale",
      price: "€ 23,00/kg"
    },  
    {
      id: 6,
      name: "Focaccia Artigianale",
      description: "Focaccia normale, stracchino, gorgonzola e noci, cipolle, olive, farcita con prosciutto e formaggio",
      image: pastriesImage,
      specialty: "Ricetta originale",
      price: "€ 13,50/kg"
    }
  ];

  return (
    <section id="prodotti" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            I Nostri Prodotti
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dalle ricette tradizionali alle specialità di stagione, ogni prodotto è realizzato con ingredienti selezionati
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-warm transition-all duration-300 border-border bg-card overflow-hidden">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-warm-gold/90 text-rich-brown font-medium">
                    {product.specialty}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-lg font-bold text-primary">
                    {product.price}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-warm rounded-2xl p-8 border border-border">
            <h4 className="text-2xl font-semibold text-foreground mb-4">
              Altri Prodotti Disponibili
            </h4>
            <p className="text-muted-foreground text-lg mb-6 max-w-3xl mx-auto">
              Pane normale e integrale, crackers, salatini, biscotti, melighe, savoiardi, 
              torte, crostate, salami dolci, muffins, colombe e molto altro.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="text-sm py-2 px-4">
                Biscotti artigianali
              </Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">
                Torte su ordinazione
              </Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">
                Pasticceria secca
              </Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">
                Prodotti stagionali
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;