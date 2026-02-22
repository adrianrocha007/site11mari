"use client"

import { Sparkles } from "lucide-react"
import { Tiara } from "./tiara"
import { Amulet } from "./amulet"
import { MagicWand } from "./magic-wand"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-12">
      {/* Background com padrão de castelo */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-background to-secondary opacity-50" />

      {/* Decorações animadas nos cantos */}
      <div className="absolute top-8 left-8 opacity-70">
        <MagicWand className="w-16 h-24" />
      </div>
      <div className="absolute top-12 right-8 opacity-70">
        <Amulet className="w-14 h-20 animate-float" />
      </div>

      {/* Estrelas brilhantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            <Sparkles className="w-6 h-6 text-gold" />
          </div>
        ))}
      </div>

      {/* Tiara animada */}
      <div className="relative mb-4 animate-bounce-gentle">
        <Tiara className="w-32 md:w-40" />
      </div>

      <div className="relative mb-6 z-10">
        <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-gold shadow-2xl animate-float">
          <Image
            src="/images/img-20260114-wa0108-2.jpg"
            alt="Maria Clara - A princesinha do dia"
            fill
            className="object-cover object-top"
          />
        </div>
        {/* Brilhos ao redor da foto */}
        <div className="absolute -top-2 -left-2 animate-twinkle">
          <Sparkles className="w-6 h-6 text-gold" />
        </div>
        <div className="absolute -top-1 -right-2 animate-twinkle" style={{ animationDelay: "0.3s" }}>
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <div className="absolute -bottom-2 -right-1 animate-twinkle" style={{ animationDelay: "0.5s" }}>
          <Sparkles className="w-6 h-6 text-gold" />
        </div>
        <div className="absolute -bottom-1 -left-2 animate-twinkle" style={{ animationDelay: "0.7s" }}>
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
      </div>

      {/* Main text */}
      <p className="text-primary font-medium text-lg md:text-xl mb-2 tracking-widest uppercase relative z-10">
        Você está convidado para o
      </p>

      <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground text-center mb-4 text-balance relative z-10">
        Aniversário da
      </h1>

      <h2 className="font-disney text-5xl md:text-7xl lg:text-8xl text-primary text-center mb-6 text-balance relative z-10 animate-shimmer bg-clip-text drop-shadow-lg">
        Maria Clara
      </h2>

      {/* Age badge com amuleto */}
      <div className="relative bg-primary text-primary-foreground rounded-full px-10 py-5 shadow-xl mb-8 z-10">
        <span className="font-serif text-3xl md:text-4xl font-bold">1 aninho</span>
        <div className="absolute -top-3 -right-3">
          <Amulet className="w-10 h-12" />
        </div>
      </div>

      {/* Theme card com imagem da Sofia */}
      <div className="bg-card rounded-3xl p-6 shadow-2xl border-2 border-primary/30 relative overflow-hidden z-10 max-w-sm">
        <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gold/10 rounded-full translate-y-1/2 -translate-x-1/2" />

        <p className="text-muted-foreground text-center relative z-10">
          <span className="block text-sm uppercase tracking-wider mb-2">Tema</span>
          <span className="font-serif text-2xl md:text-3xl text-primary">Princesinha Sofia</span>
        </p>
      </div>

      <div className="mt-10 relative z-10">
        <div className="relative">
          <Image
            src="/images/princesinha-sofia-3.jpg"
            alt="Princesinha Sofia"
            width={280}
            height={400}
            className="rounded-3xl shadow-2xl border-4 border-gold/50"
          />
          {/* Brilhos ao redor da imagem */}
          <div className="absolute -top-4 -left-4 animate-twinkle">
            <Sparkles className="w-8 h-8 text-gold" />
          </div>
          <div className="absolute -top-2 -right-4 animate-twinkle" style={{ animationDelay: "0.3s" }}>
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <div className="absolute -bottom-3 -right-3 animate-twinkle" style={{ animationDelay: "0.5s" }}>
            <Sparkles className="w-7 h-7 text-gold" />
          </div>
          <div className="absolute -bottom-4 left-4 animate-twinkle" style={{ animationDelay: "0.7s" }}>
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}
