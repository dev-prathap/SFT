"use client";

import { HawkeViewer } from "@/components/interactive/HawkeViewer";
import { motion } from "framer-motion";
import { 
  Rocket, 
  Wind, 
  Clock, 
  Signal, 
  Cpu, 
  ShieldCheck, 
  Download,
  ChevronDown
} from "lucide-react";
import Image from "next/image";

export default function HawkePage() {
  const specs = [
    { label: "Max Payload", value: "500", unit: "KG" },
    { label: "Endurance", value: "30", unit: "DAYS" },
    { label: "Wind Resist", value: "80", unit: "KTS" },
    { label: "Comms Range", value: "400", unit: "KM" },
  ];

  return (
    <main className="bg-black text-white font-sans selection:bg-white selection:text-black min-h-screen">
      
      {/* Cinematic Hero */}
      <section className="relative h-[100svh] w-full flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80" 
            alt="Hawke Launch" 
            fill 
            className="object-cover opacity-40 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
        </div>

        <div className="relative z-10 flex justify-between items-start w-full">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4 mb-4"
            >
              <span className="h-px w-12 bg-white/50" />
              <span className="text-white/50 font-bold uppercase tracking-[0.4em] text-[10px]">System Profile // V4.2</span>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 text-[10px] font-bold text-white/50 uppercase tracking-[0.3em] border border-white/20 px-6 py-2"
          >
            <span className="flex h-1.5 w-1.5 bg-white animate-pulse" />
            Uplink Active
          </motion.div>
        </div>

        <div className="relative z-10 w-full max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter uppercase leading-[0.8] mb-6"
          >
            HAWKE
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-white/80 text-xl md:text-3xl font-light uppercase tracking-widest max-w-3xl leading-relaxed"
          >
            Persistent High-Altitude <br/> Strategic Platform
          </motion.p>
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

      {/* Interactive 3D Section */}
      <section className="relative min-h-[100svh] w-full flex flex-col justify-center items-center py-24 px-6 md:px-12 border-b border-white/10">
        <div className="w-full max-w-[1600px] mb-12 flex justify-between text-[10px] font-bold text-white/40 uppercase tracking-[0.3em]">
          <span>Interactive Telemetry</span>
          <span>Zoom & Drag Enabled</span>
        </div>

        <div className="relative w-full max-w-[1600px] aspect-[16/9] lg:aspect-[21/9] border border-white/20 bg-[#050505] overflow-hidden group">
          {/* Target Overlay HUD */}
          <div className="absolute top-8 left-8 z-20 pointer-events-none">
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-1">Target Altitude</p>
            <p className="text-white text-3xl font-bold tracking-tighter">60K FT</p>
          </div>

          <div className="absolute bottom-8 right-8 z-20 pointer-events-none text-right">
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-1">Status</p>
            <p className="text-white text-3xl font-bold tracking-tighter">NOMINAL</p>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
          
          <div className="w-full h-full object-cover">
            <HawkeViewer />
          </div>

          {/* HUD Brackets */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/40 pointer-events-none" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/40 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/40 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/40 pointer-events-none" />
        </div>
      </section>

      {/* Massive Vertical Stats Grid */}
      <section className="bg-black border-b border-white/10 py-32 px-6 lg:px-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24">
          {specs.map((spec, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="flex flex-col border-t-2 border-white/20 pt-8 group hover:border-white transition-colors duration-500"
            >
              <div className="flex items-baseline space-x-2">
                <span className="text-6xl md:text-8xl font-bold tracking-tighter text-white">{spec.value}</span>
                <span className="text-2xl text-white/50 font-light group-hover:text-white transition-colors duration-500">{spec.unit}</span>
              </div>
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mt-4 group-hover:text-white/70 transition-colors duration-500">{spec.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Systems Detail */}
      <section className="py-32 md:py-48 px-6 lg:px-24 bg-black border-b border-white/10 min-h-[100svh] flex items-center">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-[5rem] font-bold tracking-tight uppercase leading-[0.9]"
            >
              Ultimate <br/> Platform <br/> Dominance
            </motion.h2>

            <div className="space-y-12">
              <div className="space-y-4 pt-12 border-t border-white/20">
                <div className="flex items-center gap-4 text-white">
                  <Cpu className="w-6 h-6" />
                  <h3 className="font-bold uppercase tracking-[0.2em] text-sm">Autonomous Avionics</h3>
                </div>
                <p className="text-white/60 font-light leading-relaxed max-w-lg">
                  Deep-learning flight algorithms analyze atmospheric shifts in real-time, holding stationary coordinates against extreme stratospheric shear.
                </p>
              </div>

              <div className="space-y-4 pt-12 border-t border-white/20">
                <div className="flex items-center gap-4 text-white">
                  <ShieldCheck className="w-6 h-6" />
                  <h3 className="font-bold uppercase tracking-[0.2em] text-sm">Encrypted Defense Link</h3>
                </div>
                <p className="text-white/60 font-light leading-relaxed max-w-lg">
                  Hardened dual-channel satellite datalink broadcasting via quantum-resistant AES-256 for absolute mission security.
                </p>
              </div>
            </div>

            <div className="pt-12">
              <button className="flex items-center gap-4 px-10 py-5 border border-white text-white text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all group">
                Download Telemetry Data
                <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 w-full max-w-md ml-auto">
            <div className="relative aspect-square w-full grayscale hover:grayscale-0 transition-all duration-1000 border border-white/20 hidden md:block group overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
                alt="Hardware detail" 
                fill 
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 text-[10px] text-white/80 font-mono font-bold tracking-[0.2em] border border-white/20 px-4 py-2 bg-black/50 backdrop-blur-sm">
                OPTICS_SUITE_V4
              </div>
            </div>
            <div className="relative aspect-video w-full grayscale hover:grayscale-0 transition-all duration-1000 border border-white/20 group overflow-hidden mt-8 lg:-ml-24 z-10">
              <Image 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" 
                alt="Earth view" 
                fill 
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute bottom-6 left-6 text-[10px] text-white/80 font-mono font-bold tracking-[0.2em] border border-white/20 px-4 py-2 bg-black/50 backdrop-blur-sm">
                ORBITAL_CAM_SYNC
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
