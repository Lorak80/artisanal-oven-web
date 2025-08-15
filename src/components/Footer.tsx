import { Phone, MapPin, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-rich-brown text-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-warm-gold mb-4">Lo Staio</h3>
            <p className="text-white/80 mb-4 max-w-md">
              Panetteria artigianale nel cuore di Cuneo dal 1985. 
              Pane fresco, dolci tradizionali e specialità piemontesi 
              realizzate con passione e ingredienti di qualità.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-warm-gold/20 rounded-full flex items-center justify-center hover:bg-warm-gold/30 transition-colors cursor-pointer">
                <span className="text-warm-gold font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-warm-gold/20 rounded-full flex items-center justify-center hover:bg-warm-gold/30 transition-colors cursor-pointer">
                <span className="text-warm-gold font-bold text-sm">IG</span>
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-lg font-semibold text-warm-gold mb-4">Contatti</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-warm-gold flex-shrink-0" />
                <a href="tel:+390171123456" className="text-white/80 hover:text-white transition-colors">
                  +39 0171 123 456
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-warm-gold flex-shrink-0" />
                <a href="mailto:info@lostaio.it" className="text-white/80 hover:text-white transition-colors">
                  info@lostaio.it
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-warm-gold flex-shrink-0 mt-1" />
                <div className="text-white/80">
                  <p>Via Roma, 123</p>
                  <p>12100 Cuneo (CN)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Hours */}
          <div>
            <h4 className="text-lg font-semibold text-warm-gold mb-4">Orari</h4>
            <div className="space-y-2 text-white/80 text-sm">
              <div className="flex justify-between">
                <span>Mar-Ven:</span>
                <span>6:30-19:30</span>
              </div>
              <div className="flex justify-between">
                <span>Sabato:</span>
                <span>6:30-20:00</span>
              </div>
              <div className="flex justify-between">
                <span>Domenica:</span>
                <span>7:00-13:00</span>
              </div>
              <div className="flex justify-between">
                <span>Lunedì:</span>
                <span className="text-red-300">Chiuso</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {currentYear} Lo Staio - Panetteria Artigianale. Tutti i diritti riservati.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;