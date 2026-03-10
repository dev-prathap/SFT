export default function PrivacyPage() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black font-sans min-h-screen pt-48 pb-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="flex items-center gap-4 mb-16">
          <span className="h-px w-12 bg-white/50" />
          <span className="text-white/50 font-bold uppercase tracking-[0.4em] text-[10px]">Legal // Protocol</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-24">Privacy Policy</h1>
        
        <div className="space-y-12 font-light text-white/70 leading-relaxed max-w-2xl tracking-wide">
          <section className="space-y-6">
             <h2 className="text-xl font-bold uppercase tracking-widest text-white">1. Data Telemetry Collection</h2>
             <p>Susan Future Technologies captures specific analytical signatures when interacting with this digital interface. We log standard terrestrial connection data to secure our endpoints against unauthorized surveillance.</p>
          </section>
          
          <section className="space-y-6">
             <h2 className="text-xl font-bold uppercase tracking-widest text-white">2. Stratospheric Data Rights</h2>
             <p>Any optical or telemetry data captured by the HAWKE fleet remains the proprietary asset of SFT or the contracted defense organization. Civilian access to this data is strictly governed by regional aerospace protocols.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
