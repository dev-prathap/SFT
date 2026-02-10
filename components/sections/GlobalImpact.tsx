"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const regions = [
  { name: "Western Ghats", status: "Active", applications: "Wildfire Monitoring", coords: "12.97° N, 77.59° E" },
  { name: "Arctic Circle", status: "Operational", applications: "Glacier Tracking", coords: "66.57° N, 0.00° E" },
  { name: "Sahara Perimeter", status: "Standby", applications: "Desertification Mapping", coords: "23.41° N, 25.06° E" },
  { name: "South China Sea", status: "Monitoring", applications: "Maritime Intelligence", coords: "12.00° N, 113.00° E" }
];

export function GlobalImpact() {
  return (
    <Section className="bg-black">
      <Container>
        <div className="text-center mb-24">
          <h2 className="text-gray-500 font-display font-bold text-xs uppercase tracking-[0.4em] mb-4">Operational Footprint</h2>
          <p className="text-5xl md:text-8xl font-bold text-white tracking-tighter uppercase leading-none">
            Global <span className="text-primary italic">Presence</span>
          </p>
        </div>

        <div className="relative aspect-[21/9] bg-nearblack border border-white/10 overflow-hidden mb-16 group">
          {/* Faux Map Background */}
          <div className="absolute inset-0 opacity-20 transition-transform duration-[10s] group-hover:scale-110" 
               style={{ backgroundImage: 'radial-gradient(circle, #00f0ff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-center space-y-4">
                <p className="text-white text-xs font-bold uppercase tracking-[0.5em] opacity-40">Tactical Visualization Layer</p>
                <div className="flex gap-4 justify-center">
                   <div className="w-12 h-[1px] bg-primary animate-pulse" />
                   <div className="w-12 h-[1px] bg-primary animate-pulse delay-75" />
                   <div className="w-12 h-[1px] bg-primary animate-pulse delay-150" />
                </div>
             </div>
          </div>

          {/* Region Indicators */}
          {regions.map((region, index) => (
             <motion.div 
               key={region.name}
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: index * 0.2 }}
               className="absolute p-4 flex gap-4 items-start bg-black/40 backdrop-blur-md border border-white/5"
               style={{ 
                 top: `${20 + (index * 15)}%`, 
                 left: `${15 + (index * 20)}%` 
               }}
             >
                <div className="w-2 h-2 bg-primary rounded-full animate-ping mt-1.5" />
                <div>
                   <p className="text-white font-bold text-[10px] uppercase tracking-widest">{region.name}</p>
                   <p className="text-primary/70 text-[8px] uppercase tracking-tighter">{region.status}</p>
                </div>
             </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {regions.map((region) => (
            <div key={region.name} className="border-l border-white/10 pl-8 py-4">
               <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-2">{region.coords}</p>
               <h3 className="text-white font-bold text-lg mb-1 uppercase tracking-tight">{region.name}</h3>
               <p className="text-primary text-[10px] font-bold uppercase tracking-widest">{region.applications}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
