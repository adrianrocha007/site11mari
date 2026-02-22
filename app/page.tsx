import { HeroSection } from "@/components/hero-section"
import { DetailsSection } from "@/components/details-section"
import { CountdownSection } from "@/components/countdown-section"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"
import { RsvpSection } from "@/components/rsvp-section"
import { MusicPlayer } from "@/components/music-player"
import { InvitationWrapper } from "@/components/invitation-wrapper"

export default function Home() {
  return (
    <InvitationWrapper>
      <main className="min-h-screen bg-background relative">
        <MusicPlayer />
        <FloatingElements />
        <HeroSection />
        <CountdownSection />
        <DetailsSection />
        <RsvpSection />
        <LocationSection />
        <Footer />
      </main>
    </InvitationWrapper>
  )
}
