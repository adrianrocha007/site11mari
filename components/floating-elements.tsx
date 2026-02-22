"use client"

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Estrelas brilhantes */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        >
          <svg className="w-4 h-4 text-gold" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41L12 0Z" />
          </svg>
        </div>
      ))}

      {/* Flores caindo (como as glicínias da Sofia) */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`flower-${i}`}
          className="absolute animate-fall opacity-60"
          style={{
            left: `${10 + i * 12}%`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        >
          <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="8" r="3" />
            <circle cx="8" cy="12" r="3" />
            <circle cx="16" cy="12" r="3" />
            <circle cx="10" cy="16" r="3" />
            <circle cx="14" cy="16" r="3" />
            <circle cx="12" cy="12" r="2" fill="var(--gold)" />
          </svg>
        </div>
      ))}

      {/* Brilhos mágicos */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute animate-sparkle"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        >
          <svg className="w-5 h-5 text-gold" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L13.5 9L22 12L13.5 15L12 24L10.5 15L2 12L10.5 9L12 0Z" />
          </svg>
        </div>
      ))}
    </div>
  )
}
