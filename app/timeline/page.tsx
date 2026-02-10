"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const milestones = [
  {
    year: "2022",
    title: "Founding",
    description: "Susan Future Technologies established in Bangalore with a vision for high-altitude persistence.",
  },
  {
    year: "2022",
    title: "HAWKE v1 Prototype",
    description: "Successful first-flight of the HAWKE scale-model achieving stable hovering.",
  },
  {
    year: "2023",
    title: "Defense Partnership",
    description: "First collaboration with border security agencies for pilot surveillance project.",
  },
  {
    year: "2024",
    title: "Karnataka Forest Deployment",
    description: "HAWKE deployed for real-time forest fire monitoring across 1000 sq km.",
  },
  {
    year: "2025",
    title: "AI Integrations",
    description: "Successful implementation of on-board edge processing for autonomous detection.",
  },
  {
    year: "2026",
    title: "Global Expansion",
    description: "Scaling the HAWKE fleet for international environmental monitoring projects.",
  },
];

export default function TimelinePage() {
  return (
    <main className="bg-black min-h-screen pt-40">
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter uppercase italic leading-none">
              Our <span className="text-primary not-italic">Journey</span>
            </h1>
            <p className="text-xl text-gray-500 font-sans uppercase tracking-[0.2em]">
              Architecting the altitude of tomorrow.
            </p>
          </div>

          <div className="max-w-3xl mx-auto relative px-6">
            {/* Center Line */}
            <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={cn(
                  "relative mb-24 md:flex items-center justify-between gap-12",
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Dot */}
                <div className="absolute left-[30px] md:left-1/2 top-4 w-4 h-4 bg-primary rounded-none -translate-x-1/2 z-10" />

                {/* Content */}
                <div className="ml-16 md:ml-0 md:w-[45%]">
                  <span className="text-4xl font-display font-bold text-primary italic mb-2 block">
                    {milestone.year}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed font-sans text-sm uppercase tracking-wider">
                    {milestone.description}
                  </p>
                </div>
                
                {/* Visual Placeholder for other side */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}

// Utility function duplicated for this component as standalone helper if needed
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
