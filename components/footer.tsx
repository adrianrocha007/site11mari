import { Heart, Sparkles } from "lucide-react"
import { Tiara } from "./tiara"
import { Amulet } from "./amulet"

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorações */}
      <div className="absolute top-4 left-4 opacity-30">
        <Tiara className="w-16 h-8" />
      </div>
      <div className="absolute bottom-4 right-4 opacity-30">
        <Amulet className="w-10 h-14" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Sparkles className="w-5 h-5 text-gold animate-twinkle" />
          <span className="font-serif text-3xl">Maria Clara</span>
          <Sparkles className="w-5 h-5 text-gold animate-twinkle delay-200" />
        </div>

        <p className="text-primary-foreground/80 mb-6 text-lg">
          Contamos com a sua presença para celebrar esse momento tão especial!
        </p>

        <div className="flex items-center justify-center gap-2 text-sm text-primary-foreground/70">
          <span>Feito com</span>
          <Heart className="w-4 h-4 fill-current text-pink-300 animate-pulse" />
          <span>para nossa princesinha</span>
        </div>

        <div className="mt-8 pt-6 border-t border-primary-foreground/20">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Tiara className="w-12 h-6 opacity-70" />
          </div>
          <p className="font-serif text-xl">04 de Abril - 15:00h</p>
          <p className="text-sm text-primary-foreground/70 mt-2">Tema: Princesinha Sofia</p>
        </div>
      </div>
    </footer>
  )
}
