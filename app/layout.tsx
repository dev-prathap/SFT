import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/JsonLd";
import { CustomCursor } from "@/components/ui/CustomCursor";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Susan Future Technologies | Aerial Intelligence",
  description: "HAWKE Aerostats for high-altitude persistent surveillance and monitoring.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        inter.variable, 
        spaceGrotesk.variable, 
        "font-sans bg-black text-white antialiased selection:bg-primary/30 selection:text-primary"
      )}>
        <CustomCursor />
        <JsonLd />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
