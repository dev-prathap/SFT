"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "VEHICLES", href: "/hawke" },
  { name: "APPLICATIONS", href: "/applications" },
  { name: "MISSION", href: "/about" },
  { name: "TIMELINE", href: "/timeline" },
  { name: "NEWS", href: "/news" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-black/90 backdrop-blur-md" : "bg-gradient-to-b from-black/80 to-transparent"
      )}
    >
      <div className="w-full px-6 md:px-12">
        <div className="flex h-24 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="group flex items-center space-x-2">
              <span className="text-2xl font-bold tracking-tighter text-white uppercase leading-none">
                SUSAN <br /> <span className="text-white/60">FUTURE</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-xs font-bold uppercase tracking-[0.2em] transition-all hover:text-white relative pb-1 group",
                  pathname === link.href ? "text-white" : "text-white/60"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute bottom-0 left-0 w-full h-[1px] bg-white transform origin-left transition-transform duration-300",
                  pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )} />
              </Link>
            ))}

            <button className="ml-8 text-xs font-bold uppercase tracking-[0.2em] px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300">
              REQUEST DEMO
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white z-50 relative"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Fullscreen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black flex flex-col justify-center items-center h-[100svh]"
          >
            <div className="flex flex-col items-center space-y-8 w-full px-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-bold uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-8 w-full max-w-xs"
              >
                <button className="w-full py-4 border border-white text-white text-sm font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all">
                  REQUEST DEMO
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
