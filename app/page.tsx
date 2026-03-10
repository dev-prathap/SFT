"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { TechnicalAnatomy } from "@/components/sections/TechnicalAnatomy";
import { ApplicationsGrid } from "@/components/sections/ApplicationsGrid";
import { GlobalConnectivity } from "@/components/sections/GlobalConnectivity";
import { MissionOversight } from "@/components/sections/MissionOversight";

export default function Home() {
  return (
    <main className="bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* SpaceX Style Fullscreen Hero Section */}
      <section className="relative h-[100svh] w-full flex flex-col justify-end pb-32 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" 
            alt="Earth view from stratosphere" 
            fill 
            className="object-cover opacity-60"
            priority
          />
        </div>
        
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <div className="relative z-20 max-w-5xl space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tight uppercase leading-[0.9]"
          >
            Stratospheric <br /> Surveillance
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl font-light max-w-2xl leading-relaxed tracking-wide"
          >
            Deploying persistent, high-altitude monitoring solutions for global security and environmental resilience.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="pt-4"
          >
            <button className="px-12 py-4 border-2 border-white text-white text-sm font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300">
              Explore Platform
            </button>
          </motion.div>
        </div>

        {/* HUD / Unique Vertical Stats */}
        <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-12 z-20">
          {[
            { label: "Altitude", value: "65", unit: "K FT" },
            { label: "Coverage", value: "360", unit: "DEG" },
            { label: "Duration", value: "45", unit: "DAYS" },
            { label: "Payload", value: "250", unit: "KG" },
          ].map((stat, i) => (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
              key={i} 
              className="flex flex-col items-end text-right border-r-2 border-white/20 pr-6 group hover:border-white transition-colors duration-500"
            >
              <div className="flex items-baseline space-x-1">
                <span className="text-4xl font-bold tracking-tighter text-white">{stat.value}</span>
                <span className="text-sm text-white/50 font-light group-hover:text-white transition-colors duration-500">{stat.unit}</span>
              </div>
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mt-1 group-hover:text-white/70 transition-colors duration-500">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </section>

      {/* Trusted By Strip */}
      <section className="border-b border-white/10 bg-black py-16 px-6 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center">
          <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.3em] mb-10 text-center">Trusted By Global Agencies</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale pointer-events-none select-none">
            {["DEFENSE AGENCY", "GLOBAL SECURITYCOM", "AEROSPACE NAT", "TACTICAL COMMAND"].map((partner) => (
              <span key={partner} className="text-sm md:text-base font-bold tracking-[0.4em] uppercase">{partner}</span>
            ))}
          </div>
        </div>
      </section>

      <MissionOversight />
      
      {/* Launch Protocol Sequence */}
      <section className="bg-black py-32 md:py-48 px-6 md:px-24 border-b border-white/10 min-h-[100svh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80" 
            alt="Space Launch" 
            fill 
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/30" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tight uppercase leading-[0.9]"
            >
              Rapid <br/> Deployment <br /> Sequence
            </motion.h2>

            <div className="space-y-12">
              {[
                { time: "T-MINUS 24:00:00", text: "Pre-flight diagnostics and payload integration verified." },
                { time: "T-MINUS 04:00:00", text: "Helium inflation and envelope pressurization commence." },
                { time: "T-MINUS 00:00:00", text: "Release protocol. Autonomous ascent to stratosphere." },
                { time: "T-PLUS 02:30:00", text: "Station keeping achieved. Surveillance sensors online." }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="relative pl-8 border-l border-white/20 hover:border-white transition-colors duration-500 group cursor-default"
                >
                  <div className="absolute top-1 -left-[5px] w-2 h-2 bg-white/20 group-hover:bg-white rounded-full transition-colors duration-500" />
                  <h3 className="text-white/80 group-hover:text-white transition-colors duration-500 text-xs font-bold uppercase tracking-[0.2em] mb-2">{step.time}</h3>
                  <p className="text-white/50 group-hover:text-white/80 transition-colors duration-500 text-sm tracking-wide leading-relaxed max-w-sm">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TechnicalAnatomy />
      <ApplicationsGrid />
      <GlobalConnectivity />

      {/* SpaceX Style Outro CTA */}
      <section className="relative h-[80svh] w-full flex flex-col items-center justify-center border-t border-white/10 overflow-hidden text-center px-6">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" 
            alt="Deploy Background" 
            fill 
            className="object-cover opacity-20 grayscale"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/80 to-black/40" />
        
        <div className="relative z-20 space-y-10 max-w-3xl">
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-bold uppercase tracking-tight text-white leading-[0.9]">
            Ready To <br/> Deploy
          </h2>
          <button className="px-14 py-4 border-2 border-white text-white text-sm font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300">
            Contact Operations
          </button>
        </div>
      </section>
    </main>
  );
}

