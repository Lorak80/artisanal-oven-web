import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const ContactsSection = () => {
  const openingHours = [
    { day: "Lunedì", hours: "Chiuso" },
    { day: "Martedì - Venerdì", hours: "6:30 - 13:00 / 16:00 - 19:30" },
    { day: "Sabato", hours: "6:30 - 13:00 / 16:00 - 20:00" },
    { day: "Domenica", hours: "7:00 - 13:00" }
  ];

  return (
    <section id="contatti" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Contatti & Orari
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vieni a trovarci in negozio o contattaci per informazioni e ordinazioni
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-card/80 backdrop-blur border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-foreground">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span>Dove Siamo</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-lg font-medium text-foreground">Lo Staio - Panetteria Artigianale</p>
                  <p className="text-muted-foreground">Via Roma, 123</p>
                  <p className="text-muted-foreground">12100 Cuneo (CN)</p>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full"
                  asChild
                >
                  <a 
                    href="https://maps.google.com/?q=Via+Roma+123+Cuneo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Apri in Google Maps</span>
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-foreground">
                  <Phone className="w-6 h-6 text-primary" />
                  <span>Contatti</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-muted-foreground" />
                    <span className="text-foreground">+39 0171 123 456</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                    <span className="text-foreground">info@lostaio.it</span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <Button 
                    className="flex-1"
                    asChild
                  >
                    <a href="tel:+390171123456" className="flex items-center justify-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>Chiama</span>
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    asChild
                  >
                    <a href="mailto:info@lostaio.it" className="flex items-center justify-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Opening Hours */}
          <div>
            <Card className="bg-card/80 backdrop-blur border-border h-fit">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-foreground">
                  <Clock className="w-6 h-6 text-primary" />
                  <span>Orari di Apertura</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {openingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                      <span className="font-medium text-foreground">{schedule.day}</span>
                      <span className={`text-sm font-medium ${
                        schedule.hours === "Chiuso" 
                          ? "text-destructive" 
                          : "text-primary"
                      }`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-warm-gold/10 rounded-lg border border-warm-gold/20">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-warm-gold rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">
                        Nota importante
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Ti consigliamo di chiamare prima di venire per assicurarti che i tuoi prodotti preferiti siano disponibili. Durante le festività gli orari potrebbero subire variazioni.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-12">
          <Card className="overflow-hidden border-border">
            <div className="h-64 bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Mappa interattiva - Via Roma, 123, Cuneo
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  asChild
                >
                  <a 
                    href="https://maps.google.com/?q=Via+Roma+123+Cuneo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Visualizza su Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;