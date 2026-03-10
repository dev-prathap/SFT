"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Radar, Thermometer, Map, Cpu, Share, Lock, ArrowRight } from "lucide-react";

export default function BorderSecurityPage() {
  const stats = [
    { label: "Detection Range", value: "10km+" },
    { label: "Latency", value: "< 0.05s" },
    { label: "Uptime", value: "99.9%" },
    { label: "Encryption", value: "AES-256" },
  ];

  const sensors = [
    {
      title: "Thermal Imaging",
      description: "Cryogenically cooled mid-wave infrared sensors capable of detecting heat signatures from personnel at 10km and vehicles at 25km.",
      icon: Thermometer,
    },
    {
      title: "LiDAR Mapping",
      description: "Real-time 3D terrain mapping generating 2.5 million points per second for autonomous patrol navigation and cover analysis.",
      icon: Map,
    },
    {
      title: "Long-Range Optical",
      description: "Ultra-high resolution 8K optical sensors with 120x zoom for positive identification and facial recognition integration.",
      icon: Visibility,
    }
  ];

  return (
    <main className="bg-black min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center grayscale opacity-40 group-hover:grayscale-0 transition-all duration-700" 
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,1)), url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")` 
          }} 
        />
        <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center rounded-none border border-primary/30 bg-primary/5 px-4 py-1 text-[10px] font-bold text-primary uppercase tracking-[0.4em] backdrop-blur-sm"
          >
            Defense Application Suite
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none max-w-4xl"
          >
            Autonomous <br /> <span className="text-primary italic">Border Security</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg md:text-xl max-w-2xl font-light uppercase tracking-widest"
          >
            Deploy next-generation surveillance networks with integrated AI threat detection and autonomous response coordination.
          </motion.p>
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.3 }}
             className="flex flex-col sm:flex-row gap-6 mt-4"
          >
            <Button size="lg" className="px-12">Start Simulation</Button>
            <Button variant="outline" size="lg" className="px-12 border-white/10 hover:border-primary/50">Technical Specs</Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-white/10 bg-nearblack/50 backdrop-blur-sm relative z-20">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-12">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center md:items-start gap-2 border-l border-primary/20 pl-6">
                <span className="text-3xl font-bold text-white tracking-tighter">{stat.value}</span>
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em]">{stat.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Sensor Integration Grid */}
      <Section padding="xl">
        <Container>
          <div className="flex flex-col gap-6 mb-20 text-center lg:text-left">
            <h2 className="text-primary text-[10px] font-bold uppercase tracking-[0.4em]">Sensor Integration</h2>
            <h3 className="text-white text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none max-w-3xl">Multi-Spectrum Surveillance Architecture</h3>
            <p className="text-gray-500 text-lg max-w-2xl font-sans leading-relaxed">
              Our integrated sensor suite combines thermal, optical, and radar data to provide uncompromised visibility in all weather conditions, day or night.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sensors.map((sensor, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden bg-nearblack p-10 border border-white/5 hover:border-primary/30 transition-all"
              >
                <div className="mb-8 inline-flex size-14 items-center justify-center bg-primary/5 text-primary border border-primary/10">
                   <sensor.icon className="w-8 h-8" />
                </div>
                <h4 className="mb-4 text-2xl font-bold text-white uppercase tracking-tight">{sensor.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-sans mb-8">
                  {sensor.description}
                </p>
                <div className="flex items-center gap-3 text-[10px] font-bold text-primary uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3 translate-y-[1px]" />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Data Processing Section */}
      <Section padding="xl" className="bg-nearblack/30 border-t border-white/5">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="flex flex-col gap-12">
              <div>
                <h2 className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-6">Neural Processing</h2>
                <h3 className="text-white text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none mb-6">Autonomous Threat Classification</h3>
                <p className="text-gray-500 text-lg font-sans leading-relaxed">
                  Our proprietary edge-computing nodes process sensor data locally, identifying threats in microseconds without reliance on cloud connectivity.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { title: "Edge AI Compute", desc: "Dedicated neural processing units analyze video feeds in real-time.", icon: Cpu },
                  { title: "Mesh Network Sync", desc: "Automatic target handoff between sensor towers and drone units.", icon: Share },
                  { title: "Quantum-Resistant Comms", desc: "Military-grade encryption for all data transmission channels.", icon: Lock }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="flex-shrink-0 size-12 bg-white/5 flex items-center justify-center text-primary border border-white/10 group-hover:border-primary/30 transition-colors">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-tight text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm font-sans leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
               {/* UI Overlay Mockup from Stitch */}
               <div className="relative rounded-none border border-white/10 bg-black overflow-hidden p-2 aspect-video">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
                  <img 
                    src="https://images.unsplash.com/photo-1544391682-17ef1f24ff3a?auto=format&fit=crop&q=80" 
                    className="w-full h-full object-cover opacity-60 grayscale"
                    alt="Digital Terrain"
                  />
                  
                  {/* Digital HUD Overlay */}
                  <div className="absolute top-6 left-6 right-6 flex justify-between">
                    <div className="bg-black/80 backdrop-blur border border-primary/40 px-3 py-1 text-[10px] text-primary font-mono tracking-widest">
                      LIVE FEED // SECTOR 7G
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-[10px] text-red-500 font-mono font-bold tracking-tighter">DETECTING ACTIVITY</span>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2">
                    <div className="h-[2px] w-full bg-white/10 overflow-hidden">
                      <motion.div 
                        initial={{ width: "30%" }} 
                        animate={{ width: "70%" }} 
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                        className="h-full bg-primary" 
                      />
                    </div>
                    <div className="flex justify-between text-[8px] text-primary/70 font-mono uppercase tracking-widest">
                      <span>Processor Load: 67%</span>
                      <span>Active Targets: 3</span>
                    </div>
                  </div>

                  {/* Reticle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 border border-primary/40 border-dashed rounded-full animate-spin [animation-duration:10s]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-2 bg-primary animate-pulse" />
               </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="border-t border-white/5 bg-gradient-to-b from-nearblack to-black">
        <Container className="text-center py-20">
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter uppercase leading-none">
            Secure Your <br /> <span className="text-primary italic">Borders Today</span>
          </h2>
          <p className="text-xl text-gray-500 font-sans uppercase tracking-[0.2em] mb-12 max-w-2xl mx-auto">
            Schedule a classified briefing to discuss how Susan Future Technologies can enhance your sovereign defense capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="px-16 py-8 text-lg uppercase tracking-[0.2em]">Contact Sales</Button>
            <Button variant="outline" size="lg" className="px-16 py-8 text-lg border-white/10 hover:border-primary/50 uppercase tracking-[0.2em]">Download Whitepaper</Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}

// Map Lucide icons to expected names if needed, though they already mostly match
const Visibility = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);
