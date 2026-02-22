"use client"

export function Amulet({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Amuleto de Avalor - o amuleto mágico da Sofia */}
      <svg viewBox="0 0 100 120" className="w-full h-full">
        {/* Corrente */}
        <ellipse cx="50" cy="25" rx="35" ry="15" fill="none" stroke="var(--gold)" strokeWidth="3" />

        {/* Moldura dourada do amuleto */}
        <ellipse cx="50" cy="70" rx="30" ry="35" fill="var(--gold)" className="drop-shadow-lg" />

        {/* Pedra roxa do amuleto */}
        <ellipse cx="50" cy="70" rx="22" ry="27" fill="var(--primary)" className="animate-pulse" />

        {/* Brilho na pedra */}
        <ellipse cx="42" cy="60" rx="6" ry="8" fill="white" opacity="0.4" />

        {/* Detalhes dourados */}
        <circle cx="50" cy="40" r="4" fill="var(--gold)" />
        <circle cx="30" cy="70" r="3" fill="white" opacity="0.3" />
      </svg>

      {/* Brilho mágico ao redor */}
      <div className="absolute inset-0 animate-pulse">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-primary/20 blur-xl" />
      </div>
    </div>
  )
}
