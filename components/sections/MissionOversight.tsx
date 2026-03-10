"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function MissionOversight() {
  return (
    <section className="relative h-[100svh] w-full flex flex-col justify-end pb-32 px-6 md:px-24 overflow-hidden border-b border-white/10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/mission_oversight_wide.png" 
          alt="Mission Oversight" 
          fill 
          className="object-cover opacity-80"
        />
      </div>
      
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/30 to-transparent" />

      <div className="relative z-20 max-w-3xl space-y-8 text-white">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tight uppercase leading-[0.9]"
        >
          Real-Time <br /> Overview
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white/80 text-lg md:text-xl font-light max-w-2xl leading-relaxed tracking-wide"
        >
          Our proprietary neural link provides zero-latency telemetry and high-definition visual oversight from any location on Earth.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex gap-16 pt-4"
        >
          <div>
            <p className="text-4xl md:text-5xl font-bold tracking-tighter">15<span className="text-xl md:text-2xl text-white/50 font-light ml-1">MS</span></p>
            <p className="text-white/50 text-xs font-bold uppercase tracking-[0.2em] mt-2">Signal Latency</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold tracking-tighter">8<span className="text-xl md:text-2xl text-white/50 font-light ml-1">K</span></p>
            <p className="text-white/50 text-xs font-bold uppercase tracking-[0.2em] mt-2">Optical Resolution</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
