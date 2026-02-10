"use client";

import * as React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import Link from "next/link";

const newsItems = [
  {
    date: "MAR 12, 2026",
    category: "Deployment",
    title: "HAWKE v4 Fleet Deployed for Arctic Climate Monitoring",
    excerpt: "New arctic-grade aerostats reach successful persistent flight in extreme sub-zero conditions.",
  },
  {
    date: "FEB 28, 2026",
    category: "Award",
    title: "Global Aerospace Innovation Award 2026",
    excerpt: "Susan Future Technologies recognized for breakthroughs in atmospheric buoyancy propulsion systems.",
  },
  {
    date: "JAN 15, 2026",
    category: "Product",
    title: "Introducing Thermal Edge: AI Processing at 1000 Feet",
    excerpt: "Our new edge computing suite allows for real-time threat detection without ground-station lag.",
  },
];

export default function NewsPage() {
  const [filter, setFilter] = React.useState("All");
  const categories = ["All", "Deployment", "Award", "Product"];

  const filteredItems = filter === "All" 
    ? newsItems 
    : newsItems.filter(item => item.category === filter);

  return (
    <main className="bg-black min-h-screen pt-40">
      <Section>
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter uppercase leading-none">
                News <br /> <span className="text-primary italic">Room</span>
              </h1>
              <p className="text-xl text-gray-500 font-sans uppercase tracking-[0.2em]">
                Updates from the edge of aerial innovation.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 border-b border-white/10 pb-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-[0.3em] pb-2 transition-all",
                    filter === cat ? "text-primary border-b-2 border-primary" : "text-gray-500 hover:text-white"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {filteredItems.map((item, index) => (
              <Link 
                key={index}
                href="/news" 
                className="group block bg-nearblack p-8 md:p-12 border border-white/5 hover:border-primary/20 transition-all"
              >
                <div className="flex flex-col md:flex-row justify-between gap-8">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em] font-display">
                        {item.category}
                      </span>
                      <span className="text-gray-600 text-[10px] uppercase tracking-[0.3em] font-display">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold text-white group-hover:text-primary transition-colors uppercase tracking-tight mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 font-sans leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                  <div className="flex items-end">
                    <span className="text-white text-xs font-bold uppercase tracking-[0.3em] border-b border-white/20 pb-2 group-hover:border-primary group-hover:text-primary transition-all">
                      Read Article →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
