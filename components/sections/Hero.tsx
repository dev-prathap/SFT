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
            className="h-full w-full object-cover opacity-60"
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
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <Container className="relative z-10 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-8xl font-display font-bold text-white leading-[1.1] tracking-tighter">
              {title}
            </h1>
          </motion.div>
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-8 text-xl md:text-2xl text-gray-400 font-sans uppercase tracking-[0.2em] max-w-2xl leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-12 flex flex-wrap gap-4"
          >
            {ctaText && (
              <Button size="lg" variant="primary">
                {ctaText}
              </Button>
            )}
            {secondaryCtaText && (
              <Button size="lg" variant="outline">
                {secondaryCtaText}
              </Button>
            )}
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      {fullHeight && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent animate-pulse" />
        </motion.div>
      )}
    </div>
  );
}
