"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const newsItems = [
  {
    date: "MAR 12, 2026",
    category: "Deployment",
    title: "HAWKE V4 FLEET DEPLOYED FOR ARCTIC OVERWATCH",
    excerpt: "New arctic-grade aerostats reach successful persistent flight in extreme sub-zero conditions. Telemetry confirms all systems are nominal and the solar array deployment has commenced, solidifying our global footprint.",
    image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80",
    featured: true,
  },
  {
    date: "FEB 28, 2026",
    category: "Award",
    title: "Global Aerospace Innovation Award",
    excerpt: "Susan Future Technologies recognized for breakthroughs in atmospheric buoyancy propulsion systems and stratospheric longevity.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
  },
  {
    date: "JAN 15, 2026",
    category: "Product",
    title: "Thermal Edge: Processing At 60K Feet",
    excerpt: "Our new edge computing suite allows for real-time tactical threat detection without ground-station lag.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
  },
  {
    date: "DEC 10, 2025",
    category: "Technical",
    title: "Avionics Core Static Test Success",
    excerpt: "Preliminary data shows the new flight control hardware performing above nominal efficiency targets.",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80",
  },
  {
    date: "NOV 02, 2025",
    category: "Deployment",
    title: "Mesh Network Ping Achieves 120ms Latency",
    excerpt: "SFT successfully bridges high-speed optical datalinks between two HAWKE platforms separated by 500KM of airspace.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80",
  }
];

export default function NewsPage() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Deployment", "Award", "Product", "Technical"];

  const filteredItems = filter === "All" 
    ? newsItems 
    : newsItems.filter(item => item.category === filter);

  const featuredItem = filteredItems.find(item => item.featured) || filteredItems[0];
  const gridItems = filter === "All" ? filteredItems.filter(item => item !== featuredItem) : filteredItems;

  return (
    <main className="bg-black text-white selection:bg-white selection:text-black font-sans pb-32">
      
      {/* Cinematic Header Block */}
      <section className="pt-48 pb-16 px-6 md:px-12 lg:px-24 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-white/50" />
              <span className="text-white/50 font-bold uppercase tracking-[0.4em] text-[10px]">Media Hub & Archives</span>
            </div>
            <h1 className="text-6xl md:text-[8rem] font-bold tracking-tighter uppercase leading-[0.85]">
              Press <br/> <span className="text-white/40">Releases</span>
            </h1>
          </div>
          
          <p className="text-white/60 text-lg md:text-xl font-light max-w-md leading-relaxed tracking-wide pb-4">
            Official announcements, telemetry reports, and mission-critical updates from Susan Future Technologies.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="border-b border-white/10 px-6 md:px-12 lg:px-24 py-8 sticky top-0 bg-black/80 backdrop-blur-md z-40">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-8 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "group relative pb-2 transition-all",
                  filter === cat ? "text-white" : "text-white/40 hover:text-white"
                )}
              >
                <span className="font-bold text-[10px] uppercase tracking-[0.3em] font-display">
                  {cat === "All" ? "All Stories" : cat}
                </span>
                <span className={cn(
                  "absolute bottom-0 left-0 h-[2px] transition-all duration-300",
                  filter === cat ? "w-full bg-white" : "w-0 group-hover:w-full bg-white/20"
                )} />
              </button>
            ))}
          </div>

          {/* SFT Terminal Search */}
          <div className="relative w-full md:w-80 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-white transition-colors" />
            <input 
              type="text" 
              placeholder="QUERY ARCHIVE..."
              className="w-full bg-transparent border border-white/20 py-3 pl-12 pr-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white focus:border-white outline-none transition-all placeholder:text-white/30"
            />
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <section className="px-6 md:px-12 lg:px-24 py-24">
        <div className="max-w-[1400px] mx-auto space-y-24">

          {/* Featured Epic Post (Only if viewing All) */}
          {filter === "All" && featuredItem && (
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative w-full border border-white/10 group cursor-pointer"
            >
              <Link href="/news" className="flex flex-col lg:flex-row min-h-[600px]">
                
                {/* Visual Half */}
                <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
                  <Image 
                    src={featuredItem.image}
                    alt={featuredItem.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-80"
                  />
                  {/* Brutalist Tag */}
                  <div className="absolute top-8 left-8 bg-white text-black px-4 py-2 flex items-center gap-3">
                     <span className="flex h-1.5 w-1.5 bg-black animate-pulse" />
                     <span className="text-[10px] uppercase font-bold tracking-[0.3em]">Featured Update</span>
                  </div>
                </div>

                {/* Content Half */}
                <div className="lg:w-1/2 flex flex-col justify-between p-8 md:p-16 lg:p-24 bg-[#0a0a0a] group-hover:bg-[#111] transition-colors duration-500">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">
                      <span>{featuredItem.category}</span>
                      <span>//</span>
                      <span>{featuredItem.date}</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.9] text-white">
                      {featuredItem.title}
                    </h2>

                    <p className="text-white/60 text-lg font-light leading-relaxed pt-8 hidden md:block">
                      {featuredItem.excerpt}
                    </p>
                  </div>

                  <div className="pt-16 mt-auto">
                    <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] uppercase border border-white/20 px-8 py-4 w-fit group-hover:bg-white group-hover:text-black transition-all duration-300">
                      Read Full Briefing
                      <ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

              </Link>
            </motion.article>
          )}

          {/* Standard Grid Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {gridItems.map((item, index) => (
              <motion.article 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group flex flex-col border-t-2 border-white/20 pt-8"
              >
                <Link href="/news" className="space-y-8 flex flex-col h-full">
                  
                  {/* Aspect Ratio Image with inverted hover effect */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <Image 
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                    />
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center justify-between text-white/50 text-[10px] font-bold uppercase tracking-[0.3em]">
                    <span className="text-white">{item.category}</span>
                    <span>{item.date}</span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight leading-[1.1] text-white group-hover:text-white/80 transition-colors">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-white/50 font-light leading-relaxed flex-grow">
                    {item.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-white pt-4 transition-colors">
                    <span>View Record</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
