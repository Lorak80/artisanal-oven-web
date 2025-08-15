import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-bakery.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-rich-brown/80 via-rich-brown/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center lg:text-left max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Lo Staio
              </h1>
              <p className="text-xl lg:text-2xl text-warm-gold font-medium">
                Pane e dolci artigianali a Cuneo dal 1985
              </p>
              <p className="text-lg text-white/90 max-w-lg">
                Ogni giorno produciamo con passione pane fresco, focacce croccanti e dolci tradizionali seguendo ricette tramandate di generazione in generazione.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                size="lg"
                onClick={() => scrollToSection("contatti")}
                className="bg-gradient-hero hover:opacity-90 transition-opacity text-rich-brown font-semibold shadow-warm"
              >
                <Clock className="w-5 h-5 mr-2" />
                Orari & Contatti
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                asChild
                className="border-white text-white hover:bg-white hover:text-rich-brown transition-colors"
              >
                <a href="tel:+390171123456" className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Chiama Ora
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                asChild
                className="border-white text-white hover:bg-white hover:text-rich-brown transition-colors"
              >
                <a 
                  href="https://maps.google.com/?q=Lo+Staio+Cuneo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Come Arrivare
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-8 text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-warm-gold rounded-full" />
                <span>Materie prime di qualità</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-warm-gold rounded-full" />
                <span>Produzione giornaliera</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-warm-gold rounded-full" />
                <span>Tradizione dal 1985</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection("chi-siamo")}
          className="text-white/60 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;