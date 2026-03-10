"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black font-sans min-h-screen pb-32">
      
      {/* Cinematic Header */}
      <section className="pt-48 pb-16 px-6 md:px-12 lg:px-24 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px w-12 bg-white/50" />
            <span className="text-white/50 font-bold uppercase tracking-[0.4em] text-[10px]">Secure Channel</span>
          </div>
          <h1 className="text-6xl md:text-[8rem] font-bold tracking-tighter uppercase leading-[0.85]">
            Contact <br/> <span className="text-white/40">Operations</span>
          </h1>
        </div>
      </section>

      {/* Form Area */}
      <section className="px-6 md:px-12 lg:px-24 py-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          <div className="space-y-12">
             <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-tight">
               Establish <br/> Direct Uplink
             </h2>
             <p className="text-white/60 font-light leading-relaxed max-w-lg">
               For defense contracts, commercial telemetry requests, or media inquiries, please initiate a request below. Our operations center will route your transmission to the appropriate sector.
             </p>

             <div className="border-t border-white/20 pt-12 space-y-8">
                <div>
                   <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-2">Global Headquarters</p>
                   <p className="text-lg font-light tracking-widest uppercase">Bangalore, India</p>
                </div>
                <div>
                   <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-2">Encrypted Channel</p>
                   <p className="text-lg font-light tracking-widest uppercase">operations@susanfuture.com</p>
                </div>
             </div>
          </div>

          <form className="space-y-8 flex flex-col">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Entity / Organization</label>
              <input type="text" className="w-full bg-transparent border border-white/20 p-4 font-mono text-xs focus:border-white transition-colors outline-none" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-2">
                 <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Clearance ID (Optional)</label>
                 <input type="text" className="w-full bg-transparent border border-white/20 p-4 font-mono text-xs focus:border-white transition-colors outline-none" />
               </div>
               <div className="space-y-2">
                 <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Email Address</label>
                 <input type="email" className="w-full bg-transparent border border-white/20 p-4 font-mono text-xs focus:border-white transition-colors outline-none" required />
               </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Transmission Payload</label>
              <textarea rows={6} className="w-full bg-transparent border border-white/20 p-4 font-mono text-xs focus:border-white transition-colors outline-none resize-none" required />
            </div>

            <button type="button" className="group flex items-center justify-between border border-white p-6 hover:bg-white hover:text-black transition-all duration-300 w-full mt-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] group-hover:text-black">Transmit Data</span>
              <span className="h-2 w-2 bg-white group-hover:bg-black transition-colors" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
