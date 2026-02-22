"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { EnvelopeCard } from "./envelope-card"
import { Volume2, VolumeX } from "lucide-react"

interface InvitationWrapperProps {
  children: React.ReactNode
}

export function InvitationWrapper({ children }: InvitationWrapperProps) {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [showMusicButton, setShowMusicButton] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const handleOpen = () => {
    setIsEnvelopeOpen(true)
    setIsMusicPlaying(true)
    setShowMusicButton(true)
    setTimeout(() => {
      setShowContent(true)
    }, 100)
  }

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying)
  }

  useEffect(() => {
    const hasOpened = localStorage.getItem("envelope-opened")
    if (hasOpened) {
      setIsEnvelopeOpen(true)
      setShowContent(true)
      setShowMusicButton(true)
      setIsMusicPlaying(true)
    }
  }, [])

  useEffect(() => {
    if (isEnvelopeOpen) {
      localStorage.setItem("envelope-opened", "true")
    }
  }, [isEnvelopeOpen])

  return (
    <>
      {!isEnvelopeOpen && <EnvelopeCard onOpen={handleOpen} />}

      {isMusicPlaying && (
        <iframe
          ref={iframeRef}
          className="hidden"
          width="0"
          height="0"
          src="https://www.youtube.com/embed/hxCKRkc9nzY?autoplay=1&loop=1&playlist=hxCKRkc9nzY&controls=0"
          title="Background Music"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )}

      {showMusicButton && (
        <button
          onClick={toggleMusic}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary/90 backdrop-blur-sm border-2 border-gold/50 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label={isMusicPlaying ? "Pausar música" : "Tocar música"}
        >
          {isMusicPlaying ? (
            <Volume2 className="w-5 h-5 text-primary-foreground animate-pulse" />
          ) : (
            <VolumeX className="w-5 h-5 text-primary-foreground" />
          )}
        </button>
      )}

      <div className={`transition-all duration-1000 ${showContent ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
        {children}
      </div>
    </>
  )
}
