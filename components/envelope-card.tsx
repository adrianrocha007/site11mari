"use client"

import { useState } from "react"
import { Sparkles, Crown } from "lucide-react"
import { Tiara } from "./tiara"
import { Amulet } from "./amulet"

interface EnvelopeCardProps {
  onOpen: () => void
}

export function EnvelopeCard({ onOpen }: EnvelopeCardProps) {
  const [isOpening, setIsOpening] = useState(false)

  const handleClick = () => {
    setIsOpening(true)
    setTimeout(() => {
      onOpen()
    }, 1200)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#2d1b4e] via-[#1a0f2e] to-[#0d0619] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          >
            <Sparkles className="w-3 h-3 text-gold opacity-60" />
          </div>
        ))}
      </div>

      {/* Decorative corners */}
      <div className="absolute top-6 left-6 opacity-30">
        <Tiara className="w-16 h-10 animate-float" />
      </div>
      <div className="absolute top-10 right-6 opacity-30">
        <Amulet className="w-10 h-14 animate-float" style={{ animationDelay: "1s" }} />
      </div>
      <div className="absolute bottom-6 left-10 opacity-30">
        <Crown className="w-8 h-8 text-gold animate-bounce-gentle" />
      </div>
      <div className="absolute bottom-10 right-6 opacity-30">
        <Sparkles className="w-6 h-6 text-primary animate-twinkle" />
      </div>

      <div
        className={`relative cursor-pointer transition-all duration-700 ${
          isOpening ? "scale-150 opacity-0" : "hover:scale-105"
        }`}
        onClick={handleClick}
      >
        <div className="relative w-80 h-72 md:w-96 md:h-80">
          {/* Card inside envelope */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 -top-8 w-64 md:w-72 h-52 md:h-60 bg-gradient-to-br from-white via-[#faf8ff] to-[#f0e8ff] rounded-xl shadow-2xl flex flex-col items-center justify-center p-6 transition-all duration-500 border border-primary/20 ${
              isOpening ? "-translate-y-24 opacity-0" : "hover:-translate-y-4"
            }`}
          >
            {/* Inner border decoration */}
            <div className="absolute inset-3 border-2 border-primary/15 rounded-lg" />
            <div className="absolute inset-4 border border-gold/20 rounded-md" />

            {/* Card content */}
            <Tiara className="w-16 h-12 mb-3" />
            <p className="font-serif text-2xl text-primary font-semibold text-center">Convite Real</p>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold to-transparent my-3 rounded-full" />
            <p className="text-base text-primary/70 font-medium">Maria Clara</p>
            <div className="flex gap-2 mt-3">
              <span className="text-gold text-sm">✦</span>
              <span className="text-primary/50 text-sm">✦</span>
              <span className="text-gold text-sm">✦</span>
            </div>
          </div>

          {/* Envelope body - redesigned */}
          <div className="absolute bottom-0 left-0 right-0 h-52 md:h-56">
            {/* Back flap (triangular) */}
            <div
              className="absolute -top-12 left-0 right-0 h-24 bg-gradient-to-b from-[#c49cef] to-[#a87dd8]"
              style={{
                clipPath: "polygon(0 100%, 50% 10%, 100% 100%)",
              }}
            />

            {/* Envelope main body */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#9b59d0] to-[#7842a8] rounded-b-2xl shadow-xl">
              {/* Side shadows for 3D effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 rounded-b-2xl" />

              {/* Decorative gold lines */}
              <div className="absolute top-8 left-6 right-6 h-px bg-gold/30" />
              <div className="absolute top-12 left-10 right-10 h-px bg-gold/20" />
            </div>

            {/* Wax seal with crown */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-10">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ffd700] via-[#f0c000] to-[#c99700] flex items-center justify-center shadow-lg border-4 border-[#fffacd]/60 animate-pulse">
                <Crown className="w-8 h-8 text-[#8b4513]" />
              </div>
              {/* Seal shine effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-transparent to-transparent" />
            </div>

            {/* Left flap */}
            <div
              className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#8a4aa0] to-[#9b59d0] rounded-bl-2xl"
              style={{
                clipPath: "polygon(0 8%, 100% 15%, 100% 100%, 0 100%)",
              }}
            />
            {/* Right flap */}
            <div
              className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#8a4aa0] to-[#9b59d0] rounded-br-2xl"
              style={{
                clipPath: "polygon(0 15%, 100% 8%, 100% 100%, 0 100%)",
              }}
            />
          </div>
        </div>

        {/* Call to action */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 text-center w-64">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl animate-bounce">👆</span>
          </div>
          <p className="text-white/90 text-lg font-medium animate-pulse">Toque para abrir o convite</p>
          <div className="mt-4 flex justify-center gap-3">
            <Sparkles className="w-4 h-4 text-gold animate-twinkle" />
            <span className="text-gold/50 text-sm">✦</span>
            <Sparkles className="w-4 h-4 text-primary animate-twinkle" style={{ animationDelay: "0.3s" }} />
            <span className="text-gold/50 text-sm">✦</span>
            <Sparkles className="w-4 h-4 text-gold animate-twinkle" style={{ animationDelay: "0.6s" }} />
          </div>
        </div>

        {/* Glow effect behind envelope */}
        <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-primary rounded-full scale-150" />
      </div>

      {/* Opening particles */}
      {isOpening && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-fall"
              style={{
                left: `${35 + Math.random() * 30}%`,
                top: "35%",
                backgroundColor: i % 3 === 0 ? "#ffd700" : i % 3 === 1 ? "#9b59d0" : "#ffffff",
                animationDelay: `${i * 0.05}s`,
                animationDuration: `${0.6 + Math.random() * 0.4}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
