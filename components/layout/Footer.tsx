import Link from "next/link";
import { Container } from "../ui/Container";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-display font-bold tracking-tighter text-white">
              SUSAN <span className="text-primary">FUTURE</span>
            </Link>
            <p className="mt-6 text-gray-500 max-w-sm font-sans text-sm leading-relaxed">
              Pioneering persistent aerial intelligence for a safer, more sustainable world through HAWKE aerostats.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-white text-xs mb-6">Product</h4>
            <ul className="space-y-4">
              <li><Link href="/hawke" className="text-gray-500 hover:text-primary text-xs uppercase tracking-wider transition-colors">HAWKE Platform</Link></li>
              <li><Link href="/#applications" className="text-gray-500 hover:text-primary text-xs uppercase tracking-wider transition-colors">Applications</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-white text-xs mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-500 hover:text-primary text-xs uppercase tracking-wider transition-colors">Our Mission</Link></li>
              <li><Link href="/awards" className="text-gray-500 hover:text-primary text-xs uppercase tracking-wider transition-colors">Recognition</Link></li>
              <li><Link href="/news" className="text-gray-500 hover:text-primary text-xs uppercase tracking-wider transition-colors">Updates</Link></li>
              <li><Link href="/contact" className="text-gray-500 hover:text-primary text-xs uppercase tracking-wider transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] uppercase tracking-widest">
            © 2026 Susan Future Technologies Pvt Ltd. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <Link href="/privacy" className="text-gray-600 hover:text-white text-[10px] uppercase tracking-widest transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-600 hover:text-white text-[10px] uppercase tracking-widest transition-colors">Terms of Use</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
