"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">
      
      {/* Immersive Mission Hero */}
      <section className="relative min-h-[100svh] w-full flex flex-col justify-end pb-32 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-white/10 pt-32">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" 
            alt="Earth From Space" 
            fill 
            className="object-cover opacity-40 grayscale"
            priority
          />
        </div>
        
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <div className="relative z-20 max-w-5xl space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4 border-l-2 border-white pl-4 mb-16"
          >
            <span className="text-white font-bold uppercase tracking-[0.4em] text-[10px]">The Foundation // 2026</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-[8rem] font-bold tracking-tight uppercase leading-[0.9]"
          >
            Securing <br /> The Sky
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white/60 text-lg md:text-2xl font-light max-w-3xl leading-relaxed tracking-wide pt-4"
          >
            At Susan Future Technologies, we believe that the most critical environmental and security challenges of our time require a radically new perspective.
          </motion.p>
        </div>
      </section>

      {/* Philosophy Manifesto Block */}
      <section className="py-32 md:py-48 px-6 lg:px-24 bg-black border-b border-white/10 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto space-y-16">
          <p className="text-3xl md:text-5xl font-light leading-tight tracking-tight text-white/90">
            "SATELLITE DATA IS TOO DISTANT. DRONES ARE TOO FLEETING. <span className="font-bold text-white">THE STRATOSPHERE IS THE FINAL TACTICAL FRONTIER.</span>"
          </p>
          <div className="w-full flex justify-center">
            <span className="h-[2px] w-24 bg-white/30" />
          </div>
        </div>
      </section>

      {/* Technical Heritage */}
      <section className="min-h-[100svh] w-full flex items-center bg-black border-b border-white/10 px-6 lg:px-24 py-32">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <div className="space-y-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight leading-[1]">
                Innovation At <br/> Every Altitude
              </h2>
            </div>
            
            <p className="text-white/60 text-lg font-light leading-relaxed max-w-lg tracking-wide">
              Based in Bangalore, India, our team of aerospace engineers, data scientists, and environmental specialists are rethinking how humanity interacts with the upper atmosphere. We are building the infrastructure for persistent presence.
            </p>

            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/20">
               <div>
                  <p className="text-6xl font-bold tracking-tighter text-white">2022</p>
                  <p className="text-[10px] text-white/50 uppercase tracking-[0.3em] mt-3 font-bold">Year Founded</p>
               </div>
               <div>
                  <p className="text-6xl font-bold tracking-tighter text-white">40+</p>
                  <p className="text-[10px] text-white/50 uppercase tracking-[0.3em] mt-3 font-bold">Aerospace Engineers</p>
               </div>
            </div>
          </div>

          <div className="relative aspect-square md:aspect-[4/3] w-full border border-white/20 group overflow-hidden">
             <Image 
                src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?auto=format&fit=crop&q=80" 
                alt="Engineering Bay" 
                fill 
                className="object-cover opacity-40 grayscale group-hover:scale-105 transition-all duration-1000"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
             <div className="absolute top-6 right-6 text-[10px] font-bold tracking-[0.3em] uppercase border border-white/20 px-4 py-2 text-white/80 bg-black/60 backdrop-blur-md">
                Lab // 04
             </div>
          </div>

        </div>
      </section>

      {/* Massive Callout CTA */}
      <section className="py-48 px-6 flex flex-col items-center text-center bg-black">
        <h2 className="text-6xl md:text-[8rem] lg:text-[10rem] tracking-tighter font-bold uppercase mb-16 flex flex-wrap justify-center items-center gap-4 md:gap-8">
          <span className="text-white">JOIN THE</span>
          <span className="bg-white text-black px-4 md:px-8 py-2 md:py-4 leading-none">MISSION</span>
        </h2>
        <button className="px-12 py-5 border border-white text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300">
          View Open Roles
        </button>
      </section>
    </main>
  );
}
