import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { HawkeViewer } from "@/components/interactive/HawkeViewer";
import { Cpu, Shield, Zap, Signal, Globe } from "lucide-react";

export default function HawkePage() {
  const specs = [
    { icon: Globe, label: "Altitude", value: "Up to 5,000 ft" },
    { icon: Zap, label: "Endurance", value: "72+ Continuous Hours" },
    { icon: Shield, label: "Payload", value: "Up to 50kg Sensor Suite" },
    { icon: Signal, label: "Range", value: "100km Line-of-sight" },
    { icon: Cpu, label: "Intelligence", value: "AI-Edge Processing" },
  ];

  return (
    <main className="bg-black">
      <Hero 
        title="HAWKE"
        subtitle="High Altitude Weather & Monitoring Explorer"
        imageSrc="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80"
        fullHeight={false}
      />

      <Section padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tight">
              Persistent aerial presence <br /> <span className="text-primary italic">at scale</span>
            </h2>
            <p className="text-xl text-gray-400 font-sans leading-relaxed">
              HAWKE isn&apos;t just an aerostat; it&apos;s a multi-mission platform designed for extreme reliability in harsh environments. By combining advanced aerodynamics with state-of-the-art sensor integration, HAWKE provides the intelligence you need, exactly where you need it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specs.map((spec) => (
              <div key={spec.label} className="bg-nearblack border border-white/10 p-10 hover:border-primary/50 transition-colors group">
                <spec.icon className="w-8 h-8 text-primary mb-6 transition-transform group-hover:scale-110" />
                <h3 className="text-gray-500 font-display font-bold text-xs uppercase tracking-widest mb-2">
                  {spec.label}
                </h3>
                <p className="text-2xl font-bold text-white uppercase">{spec.value}</p>
              </div>
            ))}
            
            {/* Tech Specs PDF Button Card */}
            <div className="bg-primary p-10 flex flex-col justify-between">
              <h3 className="text-black font-display font-bold text-2xl uppercase tracking-tighter leading-none mb-8">
                Detailed <br /> Technical <br /> Specifications
              </h3>
              <Button variant="secondary" size="md" className="bg-black text-white hover:bg-nearblack">
                Download PDF
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Comparison Table Section */}
      <Section className="bg-nearblack border-y border-white/5" padding="xl">
        <Container>
          <h2 className="text-4xl font-bold text-white mb-16 text-center uppercase tracking-tighter">The HAWKE Advantage</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-widest text-gray-500">
                  <th className="py-6 px-4">Feature</th>
                  <th className="py-6 px-4 text-primary">HAWKE Aerostat</th>
                  <th className="py-6 px-4">Fixed-Wing UAV</th>
                  <th className="py-6 px-4">Satellite</th>
                </tr>
              </thead>
              <tbody className="text-sm font-sans">
                {[
                  ["Endurance", "Days", "Hours", "Permanent"],
                  ["Launch Cost", "Minimal", "High", "Extreme"],
                  ["Operational Cost", "Low", "Extremely High", "Moderate"],
                  ["Station Keeping", "Persistent", "Mobile", "Orbital"],
                  ["Resolution", "Ultra-High", "High", "Low-Moderate"],
                ].map(([feature, hawke, uav, satellite]) => (
                  <tr key={feature} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-6 px-4 font-bold text-gray-400 uppercase text-xs">{feature}</td>
                    <td className="py-6 px-4 text-white font-bold">{hawke}</td>
                    <td className="py-6 px-4 text-gray-500">{uav}</td>
                    <td className="py-6 px-4 text-gray-500">{satellite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* Sensor Suite Highlights */}
      <Section padding="xl">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <HawkeViewer />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-white mb-8 uppercase tracking-tighter leading-none">
                Modular <br /> Sensor <br /> Integration
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-1 bg-primary shrink-0" />
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Electro-Optical / IR</h4>
                    <p className="text-gray-500 text-sm">HD daytime and thermal imaging with long-distance magnification.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-1 bg-white/20 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Comms Relay</h4>
                    <p className="text-gray-500 text-sm">Secure data transmission and cellular range extension in remote areas.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-1 bg-white/20 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Edge Computing</h4>
                    <p className="text-gray-500 text-sm">On-board AI processing for autonomous target tracking and detection.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
