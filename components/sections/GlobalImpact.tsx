"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

import Image from "next/image";

const regions = [
  { name: "Western Ghats", status: "Active", applications: "Wildfire Monitoring", coords: "12.97° N, 77.59° E" },
  { name: "Arctic Circle", status: "Operational", applications: "Glacier Tracking", coords: "66.57° N, 0.00° E" },
  { name: "Sahara Perimeter", status: "Standby", applications: "Desertification Mapping", coords: "23.41° N, 25.06° E" },
  { name: "South China Sea", status: "Monitoring", applications: "Maritime Intelligence", coords: "12.00° N, 113.00° E" }
];

export function GlobalImpact() {
  return (
    <Section className="bg-obsidian">
      <Container>
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-12">
            <div className="max-w-2xl">
              <h2 className="text-primary font-mono text-[10px] uppercase tracking-[0.5em] mb-4">Tactical Operations Network</h2>
              <p className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase">
                Global <span className="text-primary font-serif italic lowercase">Operational</span> footprint
              </p>
            </div>
            <div className="flex gap-12">
              <div className="text-right">
                <p className="text-primary font-mono text-[20px] font-bold">14</p>
                <p className="text-gray-500 text-[8px] uppercase tracking-[0.2em]">Active Nodes</p>
              </div>
              <div className="text-right">
                <p className="text-white font-mono text-[20px] font-bold">99.8%</p>
                <p className="text-gray-500 text-[8px] uppercase tracking-[0.2em]">Coverage Rate</p>
              </div>
            </div>
          </div>

          {/* Map Overlay Area */}
          <div className="relative aspect-[21/9] w-full border border-white/10 overflow-hidden group">
            {/* Satellite View Background */}
            <div className="absolute inset-0 z-0">
              <Image 
                src="/global_network_satellite_view_1771612172874.png"
                alt="Global Network"
                fill
                className="object-contain opacity-60 grayscale hover:grayscale-0 transition-all duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian opacity-80" />
            </div>

            {/* Tactical Grid Overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none opacity-20" 
                 style={{ backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            {/* Region Markers with Meta Info */}
            <div className="absolute inset-0 z-20">
              {regions.map((region, index) => (
                <motion.div 
                  key={region.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.3 }}
                  className="absolute p-3 bg-black/80 backdrop-blur-md border border-primary/20 flex flex-col gap-2 min-w-[150px]"
                  style={{ 
                    top: `${25 + (index * 12)}%`, 
                    left: `${10 + (index * 22)}%` 
                  }}
                >
                  <div className="flex justify-between items-center border-b border-white/10 pb-1">
                    <span className="text-[8px] font-mono text-primary font-bold">{region.name}</span>
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[7px] text-gray-500 uppercase tracking-tighter">MODE: {region.status}</p>
                    <p className="text-[7px] text-white uppercase tracking-tighter">{region.applications}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* HUD Elements */}
            <div className="absolute bottom-6 left-6 z-30 font-mono text-[8px] text-primary/40 leading-relaxed hidden lg:block uppercase tracking-widest">
              SYSTEM_LATENCY: 14MS<br />
              UPLINK: ENCRYPTED_TRIPLE_PATH<br />
              THROUGHPUT: 12.4 GB/S
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
