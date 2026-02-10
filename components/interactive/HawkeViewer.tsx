"use client";

import * as React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export function HawkeViewer() {
  const x = useMotionValue(0);
  const rotateY = useTransform(x, [-300, 300], [-180, 180]);
  const smoothRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  return (
    <div className="relative w-full aspect-square bg-nearblack border border-white/5 flex items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden group">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #00f0ff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Rotation Visual */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x, rotateY: smoothRotateY }}
        className="relative w-64 h-64 preserve-3d"
      >
        {/* Front Face - Simplified Aerostat Concept */}
        <div className="absolute inset-0 bg-primary/20 border-2 border-primary flex items-center justify-center">
          <span className="font-display font-bold text-primary text-xs tracking-[0.5em] uppercase">Hawke v4</span>
        </div>
        
        {/* Sides for 3D Feel */}
        <div className="absolute inset-0 bg-primary/10 border border-primary/30 origin-left" style={{ transform: 'rotateY(90deg) translateZ(32px)' }} />
        <div className="absolute inset-0 bg-primary/10 border border-primary/30 origin-right" style={{ transform: 'rotateY(-90deg) translateZ(32px)' }} />
      </motion.div>

      {/* Interaction Help */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-primary">Drag to rotate platform</p>
      </div>

      {/* Measurement Overlays */}
      <div className="absolute top-8 left-8 border-l border-t border-primary/50 w-12 h-12 p-2">
        <span className="text-[10px] text-primary/50 font-mono">X-882</span>
      </div>
      <div className="absolute bottom-8 right-8 border-r border-b border-primary/50 w-12 h-12 flex items-end justify-end p-2">
        <span className="text-[10px] text-primary/50 font-mono">Z-110</span>
      </div>
    </div>
  );
}
