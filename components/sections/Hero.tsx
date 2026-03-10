"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle?: string;
  videoSrc?: string;
  imageSrc?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  fullHeight?: boolean;
}

export function Hero({
  title,
  subtitle,
  videoSrc,
  imageSrc,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  fullHeight = true,
}: HeroProps) {
  return (
    <div className={cn(
      "relative overflow-hidden flex items-center bg-black",
      fullHeight ? "min-h-screen" : "min-h-[70vh]"
    )}>
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {videoSrc ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-70"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            priority
            className="object-cover opacity-60"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-b from-nearblack to-black" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
      </div>

      {/* Hero UI Content */}
      <Container className="relative z-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-primary font-mono text-[10px] uppercase tracking-[0.6em] opacity-80">
                Aerospace Intelligence Platform
              </p>
              <h1 className="text-6xl md:text-[8rem] font-bold text-white leading-[0.9] tracking-tighter uppercase whitespace-pre-line text-balance">
                {title}
              </h1>
            </div>

            {subtitle && (
              <p className="text-lg md:text-xl text-gray-400 font-sans uppercase tracking-[0.3em] max-w-2xl leading-relaxed opacity-70">
                {subtitle}
              </p>
            )}

            <div className="flex flex-wrap gap-6 pt-4">
              <Button size="lg" variant="primary" className="px-12 h-16 text-[10px] tracking-[0.4em] uppercase">
                {ctaText || "Explore"}
              </Button>
              <Button size="lg" variant="outline" className="px-12 h-16 text-[10px] tracking-[0.4em] uppercase bg-white/5 backdrop-blur-sm">
                {secondaryCtaText || "Mission Data"}
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
      
      {/* Ultra-Minimal HUD Footer */}
      <div className="absolute bottom-12 left-0 right-0 z-20">
        <Container>
          <div className="flex justify-between items-end border-t border-white/10 pt-8 opacity-40">
            <p className="font-mono text-[8px] tracking-[0.4em] uppercase">Status: Connected</p>
            <p className="font-mono text-[8px] tracking-[0.4em] uppercase text-right">Coordinate: 12.9716 N / 77.5946 E</p>
          </div>
        </Container>
      </div>
    </div>
  );
}
