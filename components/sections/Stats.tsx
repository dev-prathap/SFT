"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const stats = [
  { label: "Operation Altitude", value: "65k", unit: "FT", detail: "+0.2% DRIFT" },
  { label: "Uptime Reliability", value: "99.9", unit: "%", detail: "SLO: 99.5" },
  { label: "Data Throughput", value: "12.4", unit: "GB/S", detail: "ENCRYPTED" },
  { label: "Active Deployments", value: "14", unit: "NODES", detail: "GLOBAL" },
];

export function Stats() {
  return (
    <div className="bg-obsidian border-y border-white/5 py-12">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="flex flex-col space-y-2">
                <p className="text-gray-500 text-[9px] font-mono tracking-[0.2em] uppercase">
                  {stat.label}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-mono font-bold text-white tabular-nums tracking-tighter">
                    {stat.value}
                  </span>
                  <span className="text-xs font-mono text-primary font-bold">
                    {stat.unit}
                  </span>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
                  <p className="text-[7px] font-mono text-primary tracking-widest uppercase">
                    {stat.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
