import { useState } from "react";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/90 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary">Lo Staio</h1>
            <span className="text-sm text-muted-foreground hidden sm:block">
              Panetteria Artigianale
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("chi-siamo")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Chi Siamo
            </button>
            <button
              onClick={() => scrollToSection("prodotti")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Prodotti
            </button>
            <button
              onClick={() => scrollToSection("contatti")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contatti
            </button>
            <button
              onClick={() => scrollToSection("galleria")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Galleria
            </button>
          </nav>

          {/* Quick Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => scrollToSection("contatti")}
              className="flex items-center space-x-1"
            >
              <Clock className="w-4 h-4" />
              <span>Orari</span>
            </Button>
            <Button 
              variant="default" 
              size="sm"
              asChild
            >
              <a href="tel:+390171123456" className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>Chiama</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-3 mt-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("chi-siamo")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Chi Siamo
              </button>
              <button
                onClick={() => scrollToSection("prodotti")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Prodotti
              </button>
              <button
                onClick={() => scrollToSection("contatti")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Contatti
              </button>
              <button
                onClick={() => scrollToSection("galleria")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Galleria
              </button>
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => scrollToSection("contatti")}
                  className="flex items-center justify-center space-x-1"
                >
                  <Clock className="w-4 h-4" />
                  <span>Orari</span>
                </Button>
                <Button 
                  variant="default" 
                  size="sm"
                  asChild
                >
                  <a href="tel:+390171123456" className="flex items-center justify-center space-x-1">
                    <Phone className="w-4 h-4" />
                    <span>Chiama Ora</span>
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;