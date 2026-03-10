"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function TechnicalAnatomy() {
  return (
    <section className="bg-black relative py-32 md:py-48 px-6 md:px-24 overflow-hidden border-b border-white/10 w-full min-h-[100svh] flex items-center">
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <div className="space-y-12 z-20 order-2 lg:order-1">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight uppercase leading-[0.9]"
          >
            Engineered <br /> For The Edge
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16 pt-8">
            {[
              { title: "Solar Integration", desc: "Multi-junction thin-film arrays yielding 4.8kW sustained power." },
              { title: "Edge AI Suite", desc: "On-board GPU-accelerated processing for 15ms latency detection." },
              { title: "Encrypted Comms", desc: "Triple-redundant AES-256 encrypted satellite uplink." },
              { title: "Resilient Envelope", desc: "Self-healing thermoplastic elastomer with nano-fiber reinforcement." },
            ].map((comp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-t border-white/20 pt-6"
              >
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4">{comp.title}</h3>
                <p className="text-white/60 text-sm tracking-wide leading-relaxed">{comp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-[60vh] lg:h-[90vh] w-full z-10 order-1 lg:order-2"
        >
          <Image 
            src="/technical_anatomy_core_1771612154723.png"
            alt="Hardware"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
