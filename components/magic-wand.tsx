"use client"

export function MagicWand({ className = "" }: { className?: string }) {
  return (
    <div className={`relative animate-wand ${className}`}>
      <svg viewBox="0 0 60 100" className="w-full h-full">
        {/* Varinha */}
        <rect x="27" y="30" width="6" height="65" rx="3" fill="var(--gold)" />

        {/* Estrela no topo */}
        <polygon
          points="30,5 33,15 44,15 35,22 38,33 30,26 22,33 25,22 16,15 27,15"
          fill="var(--gold)"
          className="animate-twinkle"
        />

        {/* Brilhos saindo da varinha */}
        <circle cx="15" cy="20" r="2" fill="var(--primary)" className="animate-sparkle" />
        <circle cx="45" cy="15" r="2" fill="var(--primary)" className="animate-sparkle delay-300" />
        <circle cx="40" cy="30" r="1.5" fill="var(--gold)" className="animate-sparkle delay-500" />
        <circle cx="20" cy="35" r="1.5" fill="var(--gold)" className="animate-sparkle delay-700" />
      </svg>
    </div>
  )
}
