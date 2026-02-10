"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Cpu, Battery, Radio, ShieldCheck } from "lucide-react";

const components = [
  {
    icon: <Battery className="w-8 h-8" />,
    name: "Solar Integration",
    description: "Highly efficient thin-film solar arrays covering the upper envelope, providing continuous power for flight and sensors."
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    name: "Edge AI Suite",
    description: "On-board GPU-accelerated processing for real-time object detection, thermal analysis, and autonomous station-keeping."
  },
  {
    icon: <Radio className="w-8 h-8" />,
    name: "Encrypted Comms",
    description: "Multi-band encrypted satellite and line-of-sight data links ensuring data integrity in hostile signal environments."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    name: "Resilient Envelope",
    description: "Multi-layered ripstop polymer with helium-retention liners, designed for 2,500+ operational hours before maintenance."
  }
];

export function TechnicalAnatomy() {
  return (
    <Section className="bg-black border-y border-white/5">
      <Container>
        <div className="flex flex-col lg:flex-row gap-24">
          <div className="lg:w-1/3">
            <h2 className="text-gray-500 font-display font-bold text-xs uppercase tracking-[0.4em] mb-4">Precision Engineering</h2>
            <p className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter uppercase leading-none">
              The Anatomy <br /> of <span className="text-primary italic">Persistance</span>
            </p>
            <p className="text-gray-400 font-sans leading-relaxed mb-12">
              Every HAWKE platform is a marvel of materials science and autonomous systems, optimized for the extreme conditions of the upper atmosphere.
            </p>
            <div className="p-8 border border-primary/20 bg-primary/5">
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">Build Quality</p>
              <p className="text-white text-sm font-sans">99.9% Reliability Rating in Sub-Zero Conditions</p>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {components.map((comp, index) => (
              <motion.div
                key={comp.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 p-10 border border-white/10 hover:border-primary/50 transition-all group"
              >
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-500 origin-left">
                  {comp.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{comp.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{comp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
