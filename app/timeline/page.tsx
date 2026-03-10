"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { 
  CheckCircle,
  Flag,
  Rocket,
  Flame,
  Satellite,
  Globe,
  Crosshair
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const milestones = [
  {
    year: "2022",
    title: "Project Inception",
    description: "Susan Future Technologies established in Bangalore with a vision for persistent high-altitude operations.",
    icon: Flag,
    image: null
  },
  {
    year: "2023",
    title: "HAWKE v1 Subscale Flight",
    description: "Successful first-flight of the HAWKE scale-model achieving stable hovering, telemetry broadcast, and structural validation in extreme crosswinds.",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80"
  },
  {
    year: "2024",
    title: "Avionics Core Integration",
    description: "The proprietary autonomous flight computer successfully completes a full-duration simulation test, proving the reinforced learning algorithms.",
    icon: Flame,
    image: null
  },
  {
    year: "2025",
    title: "Maiden Stratospheric Deployment",
    description: "Commercial operations begin. SFT deploys the first full-scale HAWKE platform to 60,000 feet, maintaining station for 7 consecutive days.",
    icon: Satellite,
    success: true,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
  },
  {
    year: "2026",
    title: "Tactical Defense Contract",
    description: "SFT secures a pivotal contract for persistent border surveillance using a synchronized HAWKE fleet mesh network.",
    icon: Crosshair,
    image: null
  },
];

export default function TimelinePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="bg-black text-white selection:bg-white selection:text-black font-sans pb-32" ref={containerRef}>
      
      {/* Cinematic Header Block */}
      <section className="pt-48 pb-24 px-6 md:px-12 lg:px-24 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-white/50" />
              <span className="text-white/50 font-bold uppercase tracking-[0.4em] text-[10px]">Mission History // Log</span>
            </div>
            <h1 className="text-6xl md:text-[8rem] font-bold tracking-tighter uppercase leading-[0.85]">
              System <br/> <span className="text-white/40">Timeline</span>
            </h1>
          </div>
          
          <p className="text-white/60 text-lg md:text-xl font-light max-w-md leading-relaxed tracking-wide pb-4">
            A chronological log of engineering milestones, hardware deployments, and mission-critical achievements in the stratosphere.
          </p>
        </div>
      </section>

      {/* Vertical Mission Timeline */}
      <section className="px-6 md:px-12 lg:px-24 py-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
          
          {/* SFT Purpose Sticky Sidebar */}
          <div className="lg:col-span-5 h-full">
            <div className="sticky top-40 bg-black/50 backdrop-blur-md border border-white/10 p-12 lg:p-16">
               <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.9] mb-8">
                 Persistent <br/> Presence
               </h2>
               <p className="text-white/60 font-light leading-relaxed tracking-wide text-lg">
                 Our roadmap is focused on stretching the boundaries of endurance, payload capacity, and autonomous mesh networking. Every iteration of our hardware pushes us closer to total global coverage.
               </p>

               <div className="mt-16 flex items-center justify-between border-t border-white/20 pt-8">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">Current Phase</span>
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white px-3 py-1 bg-white/10">Commercial Scale</span>
               </div>
            </div>
          </div>

          {/* Chronological List */}
          <div className="lg:col-span-7 relative flex flex-col pt-12">
            
            {/* Minimal vertical line */}
            <div className="absolute left-6 md:left-[39px] top-0 bottom-0 w-px bg-gradient-to-b from-white via-white/20 to-transparent opacity-30" />

            {milestones.map((milestone, index) => (
              <TimelineEvent key={index} milestone={milestone} index={index} />
            ))}

          </div>
        </div>
      </section>

    </main>
  );
}

function TimelineEvent({ milestone, index }: { milestone: any; index: number }) {
  const ref = useRef(null);
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8 }}
      className="relative pl-20 md:pl-32 pb-32 group"
    >
      {/* Hardware Node */}
      <div className="absolute left-0 md:left-[16px] top-2 w-12 h-12 bg-black border-2 border-white/20 flex items-center justify-center group-hover:border-white transition-colors duration-500 z-10">
        <milestone.icon className="w-4 h-4 text-white/50 group-hover:text-white transition-colors duration-500" />
      </div>

      <div className="flex flex-col space-y-6">
        <div className="flex items-center gap-6">
          <span className="text-4xl md:text-7xl font-bold tracking-tighter text-white/20 group-hover:text-white/90 transition-colors duration-700">
            {milestone.year}
          </span>
          {milestone.success && (
            <div className="hidden md:flex items-center gap-2 border border-white/20 px-3 py-1">
              <CheckCircle className="w-3 h-3 text-white" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Mission Success</span>
            </div>
          )}
        </div>

        <h3 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-[1.1]">
          {milestone.title}
        </h3>

        <p className="text-white/60 text-lg font-light leading-relaxed max-w-xl">
          {milestone.description}
        </p>

        {milestone.image && (
          <div className="relative w-full aspect-video border border-white/20 mt-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
            <Image 
              src={milestone.image} 
              alt={milestone.title} 
              fill 
              className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
            />
            {/* Terminal Tab */}
            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md border border-white/20 px-4 py-2">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/80">Flight Log // Archive</span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
