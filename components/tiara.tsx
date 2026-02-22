"use client"

export function Tiara({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 120 60" className="w-full h-full">
        {/* Base da tiara */}
        <path d="M10 55 Q60 45 110 55" fill="none" stroke="var(--gold)" strokeWidth="4" />

        {/* Arcos da tiara */}
        <path d="M20 55 Q30 25 40 55" fill="none" stroke="var(--gold)" strokeWidth="3" />
        <path d="M35 55 Q50 15 65 55" fill="none" stroke="var(--gold)" strokeWidth="3" />
        <path d="M50 55 Q60 5 70 55" fill="none" stroke="var(--gold)" strokeWidth="3" />
        <path d="M65 55 Q75 15 85 55" fill="none" stroke="var(--gold)" strokeWidth="3" />
        <path d="M80 55 Q90 25 100 55" fill="none" stroke="var(--gold)" strokeWidth="3" />

        {/* Pedras roxas */}
        <circle cx="30" cy="35" r="5" fill="var(--primary)" className="animate-twinkle" />
        <circle cx="50" cy="20" r="7" fill="var(--primary)" className="animate-twinkle delay-200" />
        <circle cx="70" cy="25" r="6" fill="var(--primary)" className="animate-twinkle delay-500" />
        <circle cx="90" cy="35" r="5" fill="var(--primary)" className="animate-twinkle delay-700" />

        {/* Pedra central rosa (como a da Sofia) */}
        <circle cx="60" cy="12" r="6" fill="var(--pink)" className="animate-pulse" />

        {/* Brilhos */}
        <circle cx="30" cy="32" r="2" fill="white" opacity="0.5" />
        <circle cx="50" cy="17" r="2" fill="white" opacity="0.5" />
        <circle cx="60" cy="9" r="2" fill="white" opacity="0.5" />
      </svg>
    </div>
  )
}
