"use client"

import { MessageCircle, Heart } from "lucide-react"
import Image from "next/image"

export function RsvpSection() {
  const phoneNumber = "5511939364910"
  const message = encodeURIComponent(
    "Olá! Gostaria de confirmar presença no aniversário de 1 aninho da Maria Clara no dia 04/04 às 17h!",
  )
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <section className="py-12 px-4">
      <div className="max-w-lg mx-auto text-center">
        {/* Banner de confirmação */}
        <div className="mb-8">
          <Image
            src="/images/chatgpt-20image-2014-20de-20jan.png"
            alt="Confirme a sua presença - Banner decorativo com tiara e coração"
            width={600}
            height={400}
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>

        {/* Botão WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
          Confirmar pelo WhatsApp
        </a>

        {/* Mensagem com coração */}
        <div className="mt-8 flex items-center justify-center gap-2 text-primary">
          <Heart className="w-5 h-5 animate-pulse fill-primary" />
          <span className="text-sm font-medium">Esperamos você!</span>
          <Heart className="w-5 h-5 animate-pulse fill-primary" />
        </div>
      </div>
    </section>
  )
}
