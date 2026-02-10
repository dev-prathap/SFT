"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const applications = [
  {
    title: "Forest Fire Monitoring",
    description: "Early detection of heat signatures and smoke patterns across vast forested areas.",
    href: "/applications/forest-fire",
    image: "https://images.unsplash.com/photo-1542125387-c71274d94f0a?auto=format&fit=crop&q=80",
  },
  {
    title: "Weather & Environmental",
    description: "Persistent monitoring of atmospheric conditions and environmental changes.",
    href: "/applications/weather",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80",
  },
  {
    title: "Disaster Relief",
    description: "Rapid deployment of communication and surveillance during critical response operations.",
    href: "/applications/disaster",
    image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?auto=format&fit=crop&q=80",
  },
  {
    title: "Defense & Border Security",
    description: "Uninterrupted surveillance of remote borders and sensitive tactical areas.",
    href: "/applications/defense",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80",
  },
  {
    title: "Agriculture",
    description: "High-resolution crop monitoring and pest detection for large-scale farming.",
    href: "/applications/agriculture",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80",
  },
  {
    title: "Infrastructure & Mining",
    description: "Automated monitoring of remote infrastructure assets and mining operations.",
    href: "/applications/others",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80",
  },
];

export function ApplicationsGrid() {
  return (
    <Section id="applications" padding="xl" className="bg-nearblack">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Applications
            </h2>
            <p className="text-gray-400 text-lg">
              HAWKE aerostats provide versatile solutions across industries requiring persistent high-altitude presence and data collection.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={app.href}
                className="group relative block aspect-[4/5] overflow-hidden bg-black border border-white/10"
              >
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {app.description}
                  </p>
                  <div className="mt-6 inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-primary border-b border-primary pb-1 group-hover:gap-2 transition-all">
                    Explore Application <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
