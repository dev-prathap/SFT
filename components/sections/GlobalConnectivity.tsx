"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const World = dynamic(() => import("@/components/interactive/Glob").then((m) => m.World), {
  ssr: false,
});

export function GlobalConnectivity() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#05101a", // Deep dark blue for ocean/base
    showAtmosphere: true,
    atmosphereColor: "#042841",
    atmosphereAltitude: 0.15,
    emissive: "#000000",
    emissiveIntensity: 0.2,
    shininess: 0.9,
    polygonColor: "rgba(0,180,255,0.4)", // Brightly lit cyan continents
    ambientLight: "#ffffff",
    directionalLeftLight: "#00b4ff",
    directionalTopLight: "#ffffff",
    pointLight: "#00b4ff",
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 20, lng: 0 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const colors = ["#00b4ff", "#007acc", "#00f0ff"];
  
  const sampleArcs = [
    { order: 1, startLat: 12.9716, startLng: 77.5946, endLat: 34.0522, endLng: -118.2437, arcAlt: 0.3, color: colors[0] },
    { order: 1, startLat: 12.9716, startLng: 77.5946, endLat: 51.5074, endLng: -0.1278, arcAlt: 0.2, color: colors[1] },
    { order: 2, startLat: 51.5074, startLng: -0.1278, endLat: 40.7128, endLng: -74.0060, arcAlt: 0.3, color: colors[2] },
    { order: 3, startLat: 40.7128, startLng: -74.0060, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.4, color: colors[0] },
    { order: 4, startLat: 1.3521, startLng: 103.8198, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.2, color: colors[1] },
    { order: 5, startLat: 22.3193, startLng: 114.1694, endLat: -22.9068, endLng: -43.1729, arcAlt: 0.5, color: colors[2] }
  ];

  return (
    <section className="bg-black py-32 md:py-48 px-6 md:px-24 min-h-[100svh] relative overflow-hidden flex items-center">
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="space-y-12 z-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight uppercase leading-[0.9]"
          >
            Synchronized <br /> Global Network
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/80 text-lg md:text-xl font-light tracking-wide leading-relaxed max-w-lg"
          >
            SFT's mesh network connects distributed sensors across every major continent, providing a unified tactical picture for global stakeholders.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-16 border-t border-white/20 pt-8"
          >
            <div>
              <p className="text-4xl md:text-5xl font-bold tracking-tighter">14</p>
              <p className="text-white/50 text-xs font-bold uppercase tracking-[0.2em] mt-3">Active Hubs</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold tracking-tighter">150<span className="text-xl md:text-2xl text-white/50 font-light ml-1">MS</span></p>
              <p className="text-white/50 text-xs font-bold uppercase tracking-[0.2em] mt-3">Mesh Latency</p>
            </div>
          </motion.div>
        </div>
        
        <div className="relative h-[600px] lg:h-[800px] w-full z-10 hidden md:block">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </section>
  );
}
