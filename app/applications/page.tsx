"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

const applications = [
  {
    id: "defense",
    title: "Defense & Security",
    subtitle: "Persistent Tactical ISR",
    description:
      "Uninterrupted surveillance of remote borders, maritime zones, and sensitive tactical areas. HAWKE provides a highly elevated, unblinking eye that integrates directly into existing defense networks.",
    features: ["Object Tracking", "Thermal Imaging", "Encrypted Comms", "Radar Integration"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80",
    href: "/applications/border-security",
  },
  {
    id: "disaster",
    title: "Disaster Relief",
    subtitle: "Rapid Response Infrastructure",
    description:
      "When terrestrial infrastructure fails, HAWKE instantly restores communication networks and provides real-time situational awareness to coordinate complex rescue and recovery operations.",
    features: ["Mesh Networking", "High-res Mapping", "Heat Signature Detection", "Search & Rescue Support"],
    image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?auto=format&fit=crop&q=80",
    href: "/applications/disaster-relief",
  },
  {
    id: "environment",
    title: "Climate & Environmental",
    subtitle: "Atmospheric Analytics",
    description:
      "Persistent monitoring of atmospheric conditions, chemical compositions, and shifting environmental patterns from the stratosphere, providing invaluable data for climate research and weather prediction.",
    features: ["Multispectral Analysis", "Gas Detection", "Weather Patterns", "Forest Fire Early Warning"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80",
    href: "/applications/environmental",
  },
  {
    id: "telecom",
    title: "Global Connectivity",
    subtitle: "Bridging The Digital Divide",
    description:
      "Functioning as cellular towers in the sky, a mesh network of HAWKE platforms can deliver high-speed, low-latency broadband to the most remote and underserved regions of the planet.",
    features: ["5G/6G Relays", "IoT Backhaul", "Low Latency", "Massive Area Coverage"],
    image: "https://images.unsplash.com/photo-1516383274281-444fc5f27fe5?auto=format&fit=crop&q=80",
    href: "/applications/telecommunications",
  },
];

export default function ApplicationsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="bg-black text-white font-sans selection:bg-white selection:text-black" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[100svh] w-full flex flex-col justify-end pb-32 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1559297434-fae8a1016aeb?auto=format&fit=crop&q=80"
            alt="Applications Atmosphere"
            fill
            className="object-cover opacity-40 grayscale"
            priority
          />
        </div>

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="relative z-20 max-w-5xl space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-primary font-bold uppercase tracking-[0.3em] text-xs"
          >
            Multi-Domain Capabilities
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[8rem] font-bold tracking-tight uppercase leading-[0.9]"
          >
            Platform <br /> Applications
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl font-light max-w-2xl leading-relaxed tracking-wide pt-4"
          >
            HAWKE is fundamentally payload-agnostic. Its modular architecture supports mission-critical deployments across defense, scientific, and commercial sectors.
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

      {/* Advanced Application Sections */}
      <div className="relative w-full bg-black">
        {applications.map((app, index) => {
          return (
            <ApplicationSection key={app.id} app={app} index={index} />
          );
        })}
      </div>

      {/* Outro CTA */}
      <section className="relative h-[60svh] w-full flex flex-col items-center justify-center border-t border-white/10 overflow-hidden text-center px-6">
        <div className="relative z-20 space-y-10 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white leading-[0.9]">
            Custom Integration
          </h2>
          <p className="text-white/50 font-light tracking-widest uppercase text-sm">
            Discuss payload specifications with our engineering team.
          </p>
          <button className="px-14 py-4 border-2 border-white text-white text-sm font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300">
            Request Specs
          </button>
        </div>
      </section>
    </main>
  );
}

function ApplicationSection({ app, index }: { app: any; index: number }) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.8, 1], [0, 1, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] w-full flex items-center border-b border-white/10 overflow-hidden py-24">
      {/* Background Parallax Image */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0 hidden lg:block w-1/2 left-1/2"
      >
        <Image
          src={app.image}
          alt={app.title}
          fill
          className="object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </motion.div>

      {/* Mobile Image Backing */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <Image
          src={app.image}
          alt={app.title}
          fill
          className="object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-white/30 font-bold text-xl md:text-2xl tracking-tighter">0{index + 1}</span>
                <span className="h-[2px] w-12 bg-white/20" />
                <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
                  {app.subtitle}
                </span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[0.9]">
                {app.title}
              </h2>
            </div>

            <p className="text-white/60 text-lg font-light tracking-wide leading-relaxed max-w-lg">
              {app.description}
            </p>

            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
              {app.features.map((feature: string, i: number) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-1 h-1 bg-white rounded-full" />
                  <span className="text-xs font-bold tracking-[0.1em] uppercase text-white/80">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <Link href={app.href} className="group flex items-center space-x-4 text-xs font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors duration-300">
                <span>View Full Briefing</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>

          {/* Desktop Image Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1 }}
            className="hidden lg:block relative aspect-[4/5] w-full max-w-md ml-auto border border-white/10 group overflow-hidden"
          >
            <Image
              src={app.image}
              alt={app.title}
              fill
              className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
            />
            {/* HUD Overlay */}
            <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-colors duration-1000 p-6 flex flex-col justify-between pointer-events-none">
              <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-4 h-4 border-t-2 border-l-2 border-white/50" />
                <div className="w-4 h-4 border-t-2 border-r-2 border-white/50" />
              </div>
              <div className="flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-4 h-4 border-b-2 border-l-2 border-white/50" />
                <div className="w-4 h-4 border-b-2 border-r-2 border-white/50" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
