"use client"

import { useEffect, useState } from "react"
import { Calendar, Clock, Sparkles } from "lucide-react"
import { Amulet } from "./amulet"

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2026-04-04T15:00:00")

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 px-4 bg-secondary relative overflow-hidden">
      {/* Decoração de amuleto */}
      <div className="absolute top-4 right-8 opacity-30">
        <Amulet className="w-20 h-28 animate-float" />
      </div>
      <div className="absolute bottom-4 left-8 opacity-30">
        <Amulet className="w-16 h-24 animate-float delay-1000" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-6 h-6 text-gold animate-twinkle" />
          <h3 className="font-serif text-3xl md:text-4xl text-foreground">Contagem Regressiva</h3>
          <Sparkles className="w-6 h-6 text-gold animate-twinkle delay-300" />
        </div>
        <p className="text-muted-foreground mb-8">Falta pouco para a magia acontecer!</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
          {[
            { value: timeLeft.days, label: "Dias" },
            { value: timeLeft.hours, label: "Horas" },
            { value: timeLeft.minutes, label: "Minutos" },
            { value: timeLeft.seconds, label: "Segundos" },
          ].map((item, index) => (
            <div
              key={item.label}
              className="bg-card rounded-2xl p-4 md:p-6 shadow-lg border-2 border-primary/20 hover:border-primary/50 transition-all hover:scale-105 hover:shadow-xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="block font-serif text-4xl md:text-5xl text-primary font-bold relative z-10">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="text-muted-foreground text-sm md:text-base uppercase tracking-wider relative z-10">
                {item.label}
              </span>
              {/* Brilho no canto */}
              <Sparkles
                className="absolute top-2 right-2 w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity animate-twinkle"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-3 bg-card rounded-full px-6 py-3 shadow-md border-2 border-primary/20 hover:border-primary/40 transition-colors">
            <Calendar className="w-6 h-6 text-primary" />
            <span className="font-serif text-xl text-foreground">{"04 de Abril (Sábado)"}</span>
          </div>
          <div className="flex items-center gap-3 bg-card rounded-full px-6 py-3 shadow-md border-2 border-primary/20 hover:border-primary/40 transition-colors">
            <Clock className="w-6 h-6 text-primary" />
            <span className="font-serif text-xl text-foreground">15:00h</span>
          </div>
        </div>
      </div>
    </section>
  )
}
