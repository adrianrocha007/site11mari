import { MapPin, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LocationSection() {
  const address = "Estrada Santa Mônica, 1490 - Suzano, SP"
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

  return (
    <section className="py-16 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Local da Festa</h3>
        <p className="text-muted-foreground mb-8">Esperamos você com muito carinho!</p>

        <div className="bg-card rounded-2xl p-8 shadow-xl border border-border mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-8 h-8 text-primary" />
            <span className="font-serif text-xl md:text-2xl text-foreground">Endereço</span>
          </div>

          <p className="text-lg md:text-xl text-foreground mb-6">{address}</p>

          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg shadow-lg"
          >
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
              <Navigation className="w-5 h-5 mr-2" />
              Abrir no Google Maps
            </a>
          </Button>
        </div>

        {/* Map placeholder */}
        <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(address)}`}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da festa"
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}
