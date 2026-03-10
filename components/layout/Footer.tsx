import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black border-t-2 border-white text-white py-16 px-6 md:px-24">
      <div className="mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        
        <div className="flex space-x-8 lg:space-x-12 order-2 md:order-1 flex-wrap justify-center md:justify-start">
          <Link href="/hawke" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-300">
            Vehicles
          </Link>
          <Link href="/about" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-300">
            About
          </Link>
          <Link href="/about" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-300">
            Mission
          </Link>
          <Link href="/news" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-300">
            News
          </Link>
          <Link href="/contact" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-300">
            Contact
          </Link>
        </div>

        <div className="order-1 md:order-2">
          <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter uppercase flex items-center gap-2">
            SUSAN <span className="opacity-60">FUTURE</span>
          </Link>
        </div>

      </div>

      <div className="mx-auto w-full mt-16 flex flex-col items-center justify-center pt-8 border-t border-white/10 gap-4 md:flex-row md:justify-between text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">
        <p>
          © 2026 SUSAN FUTURE TECHNOLOGIES. ALL RIGHTS RESERVED.
        </p>
        <div className="flex space-x-6">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
