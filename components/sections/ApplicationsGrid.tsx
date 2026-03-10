"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const applications = [
  {
    title: "Defense & Border Security",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80",
  },
  {
    title: "Disaster Relief",
    image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?auto=format&fit=crop&q=80",
  },
  {
    title: "Weather & Environmental",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80",
  }
];

export function ApplicationsGrid() {
  return (
    <section className="bg-black py-32 md:py-48 px-6 md:px-24 border-b border-white/10 text-white min-h-[100svh] flex flex-col justify-center">
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight uppercase mb-24 leading-[0.9]"
        >
          Platform <br /> Applications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="relative aspect-[3/4] group overflow-hidden bg-white/5"
            >
              <Image
                src={app.image}
                alt={app.title}
                fill
                className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 bg-gradient-to-t from-black via-black/50 to-transparent">
                <h3 className="text-2xl md:text-4xl font-bold tracking-tight uppercase leading-[1.1]">
                  {app.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
