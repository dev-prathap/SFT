import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { ApplicationsGrid } from "@/components/sections/ApplicationsGrid";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { RevealSection } from "@/components/interactive/RevealSection";
import { TechnicalAnatomy } from "@/components/sections/TechnicalAnatomy";
import { GlobalImpact } from "@/components/sections/GlobalImpact";

export default function Home() {
  return (
    <main className="bg-black">
      {/* Hero Section */}
      <Hero 
        title="The Future of Aerial Intelligence"
        subtitle="Persistent surveillance from the edge of space"
        ctaText="Explore Hawke"
        ctaLink="/hawke"
        secondaryCtaText="Request Demo"
        secondaryCtaLink="/contact"
        imageSrc="https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80"
      />

      {/* Stats Section */}
      <Stats />

      {/* HAWKE Intro Section */}
      <RevealSection>
        <Section padding="xl">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 border-l-4 border-primary pl-8">
                  Unmatched <br /> <span className="text-primary italic">Persistence</span>
                </h2>
                <p className="text-lg text-gray-400 font-sans leading-relaxed mb-8">
                  The HAWKE aerostat platform redefines altitude-based intelligence. By leveraging atmospheric buoyancy, HAWKE provides stable, uninterrupted surveillance for days—not hours—at a fraction of the cost of traditional drones or satellites.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button variant="outline">Technical Specifications</Button>
                  <Button variant="ghost" className="group">
                    Watch Deployment <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-nearblack border border-white/10 overflow-hidden relative">
                  <Image 
                    src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80" 
                    alt="Aerostat Deployment"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-80"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-primary p-8 hidden md:block">
                  <p className="text-black font-display font-bold text-5xl">72H</p>
                  <p className="text-black/60 font-display font-bold text-xs uppercase tracking-tighter">Max Flight Duration</p>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </RevealSection>

      <TechnicalAnatomy />

      {/* Applications Grid */}
      <ApplicationsGrid />

      <GlobalImpact />

      {/* Final CTA Section */}
      <Section padding="xl" className="bg-gradient-to-b from-nearblack to-black border-t border-white/5">
        <Container className="text-center">
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter uppercase">
            Ready for <span className="text-primary">Takeoff?</span>
          </h2>
          <p className="text-xl text-gray-400 font-sans uppercase tracking-[0.3em] mb-12 max-w-2xl mx-auto">
            Contact our engineering team to schedule a live demonstration.
          </p>
          <Button size="lg" className="px-16">
            Contact Us
          </Button>
        </Container>
      </Section>
    </main>
  );
}
