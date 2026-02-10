"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const stats = [
  { label: "Altitude", value: "1000+ Feet" },
  { label: "Flight Duration", value: "72 Hours" },
  { label: "Coverage", value: "360°" },
  { label: "Monitoring", value: "24/7" },
];

export function Stats() {
  return (
    <div className="bg-black border-y border-white/5 py-12">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center md:text-left"
            >
              <p className="text-3xl md:text-4xl font-display font-bold text-primary">
                {stat.value}
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
