"use client"

import { Gift, PartyPopper, Cake, Sparkles, ShoppingBag, Copy, Check, ChevronDown, Footprints, Shirt } from "lucide-react"
import { MagicWand } from "./magic-wand"
import { Tiara } from "./tiara"
import { useState } from "react"

export function DetailsSection() {
  const [copiedPix, setCopiedPix] = useState(false)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const features = [
    {
      icon: PartyPopper,
      title: "Muita Diversão",
      description: "Venha se divertir, com muitas brincadeiras, músicas e imaginação",
    },
    {
      icon: Cake,
      title: "Bolo & Doces",
      description: "Esqueça a dieta e vamos comer comidas maravilhosas, tudo feito com capricho e muito amor",
    },
    {
      icon: Gift,
      title: "Lembrancinhas",
      description: "Teremos lembrancinhas PARA AS CRIANÇAS. Lembre-se a festa é para eles!",
    },
  ]

  const pixKey = "(11)96354-3293"

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey)
    setCopiedPix(true)
    setTimeout(() => setCopiedPix(false), 2000)
  }

  const handleFeatureClick = (link: string) => {
    if (link.startsWith("#")) {
      const element = document.querySelector(link)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.open(link, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <section className="py-16 px-4 bg-background relative overflow-hidden">
      {/* Decorações */}
      <div className="absolute top-8 left-4 opacity-40">
        <MagicWand className="w-12 h-20" />
      </div>
      <div className="absolute top-12 right-4 opacity-40">
        <Tiara className="w-20 h-10 animate-bounce-gentle" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-gold animate-twinkle" />
          <h3 className="font-serif text-3xl md:text-4xl text-foreground text-center">Vem Comemorar Conosco!</h3>
          <Sparkles className="w-5 h-5 text-gold animate-twinkle delay-200" />
        </div>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Será um dia mágico cheio de encanto, como em um verdadeiro conto de fadas da Princesinha Sofia!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
          {features.map((feature, index) => {
            const isExpanded = expandedCard === index
            return (
              <button
                key={feature.title}
                onClick={() => setExpandedCard(isExpanded ? null : index)}
                className="bg-card rounded-2xl p-6 text-center shadow-lg border-2 border-primary/20 hover:border-primary/40 hover:shadow-2xl transition-all hover:-translate-y-1 group relative overflow-hidden cursor-pointer w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform relative z-10">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-serif text-xl text-foreground mb-2 relative z-10">{feature.title}</h4>
                
                {/* Indicador de clique */}
                <div className="flex items-center justify-center gap-1 text-primary/60 text-xs mb-2 relative z-10">
                  <span>Toque para ver mais</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                </div>

                {/* Descrição expandível */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out relative z-10 ${isExpanded ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                  <div className="bg-secondary/50 rounded-xl p-4 text-left">
                    <p className="text-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>

                {/* Brilho no hover */}
                <Sparkles
                  className="absolute bottom-3 right-3 w-5 h-5 text-gold opacity-0 group-hover:opacity-100 transition-opacity animate-twinkle"
                  style={{ animationDelay: `${index * 150}ms` }}
                />
              </button>
            )
          })}
        </div>

        <div className="mt-8" id="presentes">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Gift className="w-5 h-5 text-gold" />
            <h3 className="font-serif text-2xl md:text-3xl text-foreground text-center">Sugestões de Presentes</h3>
            <Gift className="w-5 h-5 text-gold" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Card de Tamanhos */}
            <div className="bg-card rounded-2xl p-6 text-center shadow-lg border-2 border-gold/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-primary/5" />

              <div className="bg-gradient-to-br from-gold/20 to-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 relative z-10">
                <ShoppingBag className="w-8 h-8 text-gold" />
              </div>
              <h4 className="font-serif text-xl text-foreground mb-2 relative z-10">Tamanhos da Maria Clara</h4>
              <p className="text-muted-foreground text-sm mb-5 relative z-10">
                Caso queira presentear com roupas ou sapatos
              </p>

              <div className="flex items-center justify-center gap-4 relative z-10">
                <div className="bg-secondary/60 rounded-xl px-4 py-3 flex items-center gap-3">
                  <Footprints className="w-5 h-5 text-primary" />
                  <div className="text-left">
                    <span className="block text-xs text-muted-foreground uppercase tracking-wider">{"Calçado"}</span>
                    <span className="font-serif text-lg text-foreground">24/25</span>
                  </div>
                </div>
                <div className="bg-secondary/60 rounded-xl px-4 py-3 flex items-center gap-3">
                  <Shirt className="w-5 h-5 text-primary" />
                  <div className="text-left">
                    <span className="block text-xs text-muted-foreground uppercase tracking-wider">Roupa</span>
                    <span className="font-serif text-lg text-foreground">2/3</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card de Pix */}
            <button
              className="bg-card rounded-2xl p-6 text-center shadow-lg border-2 border-gold/30 hover:border-gold/60 hover:shadow-2xl transition-all hover:-translate-y-2 group relative overflow-hidden cursor-pointer w-full"
              onClick={handleCopyPix}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="bg-gradient-to-br from-gold/20 to-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform relative z-10">
                <Gift className="w-8 h-8 text-gold" />
              </div>
              <h4 className="font-serif text-xl text-foreground mb-2 relative z-10">Pix para Presente</h4>
              <p className="text-muted-foreground text-sm mb-4 relative z-10">Contribua com um presente especial via Pix</p>

              <p className="text-xs text-muted-foreground mb-3 font-mono bg-secondary/50 px-3 py-1 rounded-full inline-block relative z-10">
                {pixKey}
              </p>

              <div className="flex items-center justify-center gap-2 text-primary font-medium relative z-10 group-hover:text-gold transition-colors">
                <span>{copiedPix ? "Copiado!" : "Copiar Pix"}</span>
                {copiedPix ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </div>

              <Sparkles
                className="absolute bottom-3 right-3 w-5 h-5 text-gold opacity-0 group-hover:opacity-100 transition-opacity animate-twinkle"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
