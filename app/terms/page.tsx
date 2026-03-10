export default function TermsPage() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black font-sans min-h-screen pt-48 pb-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="flex items-center gap-4 mb-16">
          <span className="h-px w-12 bg-white/50" />
          <span className="text-white/50 font-bold uppercase tracking-[0.4em] text-[10px]">Legal // Protocol</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-24">Terms of Service</h1>
        
        <div className="space-y-12 font-light text-white/70 leading-relaxed max-w-2xl tracking-wide">
          <section className="space-y-6">
             <h2 className="text-xl font-bold uppercase tracking-widest text-white">1. Ground Station Protocol</h2>
             <p>By accessing this terminal, you agree to comply with SFT operational guidelines. Reverse engineering of posted specifications, payload capacities, or mesh network latency markers is explicitly forbidden.</p>
          </section>
          
          <section className="space-y-6">
             <h2 className="text-xl font-bold uppercase tracking-widest text-white">2. Launch Liability</h2>
             <p>SFT assumes no liability for atmospheric interference, solar flares, or rapid unscheduled disassembly resulting from non-compliant payloads. All defense and commercial payloads must pass pre-flight qualification testing at our Mojave Ground Station.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
