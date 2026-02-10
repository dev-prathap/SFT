import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Hero } from "@/components/sections/Hero";
import { Award, Star, Trophy, Target } from "lucide-react";

const awards = [
  {
    title: "Global Aerospace Innovation",
    org: "Aerospace Summit 2026",
    description: "Awarded for breakthroughs in HAWKE aerostat persistent flight technology.",
    icon: Trophy,
  },
  {
    title: "Environmental Impact Award",
    org: "EcoWatch Foundation",
    description: "Recognizing SFT's commitment to early wildfire detection and prevention.",
    icon: Star,
  },
  {
    title: "National Defense Excellence",
    org: "Ministry of Defense",
    description: "For outstanding contribution to remote border surveillance infrastructure.",
    icon: ShieldCheck,
  },
  {
    title: "Tech Startup of the Year",
    org: "Global Tech Expo",
    description: "Acknowledged as the most promising deep-tech aerospace startup in the region.",
    icon: Award,
  },
];

// Reusing icon helper since Lucide imports need careful mapping sometimes in blocks
import { ShieldCheck } from "lucide-react";

export default function AwardsPage() {
  return (
    <main className="bg-black">
      <Hero 
        title="Awards & Recognition"
        subtitle="Excellence in the upper atmosphere"
        imageSrc="https://images.unsplash.com/photo-1569928245585-797378f5664d?auto=format&fit=crop&q=80"
        fullHeight={false}
      />

      <Section padding="xl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((item, index) => (
              <div key={index} className="bg-nearblack border border-white/5 p-12 hover:border-primary/30 transition-all group">
                <item.icon className="w-12 h-12 text-primary mb-8" />
                <h3 className="text-gray-500 font-display font-medium text-xs uppercase tracking-[0.4em] mb-4">
                  {item.org}
                </h3>
                <h2 className="text-3xl font-bold text-white uppercase tracking-tighter mb-4">
                  {item.title}
                </h2>
                <p className="text-gray-400 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Press Mentions */}
      <Section className="bg-nearblack border-t border-white/5" padding="lg">
        <Container>
          <h2 className="text-center text-xs font-bold uppercase tracking-[0.4em] text-gray-600 mb-16">In the Press</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale saturate-0">
            {["TechCrunch", "Forbes", "Defense News", "BBC Tech", "Wired"].map((press) => (
              <span key={press} className="text-2xl font-display font-bold text-white tracking-widest">{press}</span>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
