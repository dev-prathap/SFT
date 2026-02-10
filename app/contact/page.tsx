import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/sections/ContactForm";

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen pt-40">
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter uppercase leading-none">
                Contact <br /> <span className="text-primary italic">Engineering</span>
              </h1>
              <p className="text-xl text-gray-400 font-sans leading-relaxed mb-12">
                Have specific technical requirements or want to schedule a live demonstration of HAWKE? Fill out the form, and our engineering team will get back to you within 24 hours.
              </p>

              <div className="space-y-8 border-t border-white/10 pt-12">
                <div>
                  <h4 className="text-xs font-display font-bold uppercase tracking-[0.3em] text-gray-500 mb-2">Office</h4>
                  <p className="text-white font-bold">Bangalore, India</p>
                  <p className="text-gray-400 text-sm">Susan Future Technologies Pvt Ltd</p>
                </div>
                <div>
                  <h4 className="text-xs font-display font-bold uppercase tracking-[0.3em] text-gray-500 mb-2">Email</h4>
                  <p className="text-white font-bold">contact@susanfuture.tech</p>
                </div>
              </div>
            </div>

            <div className="bg-nearblack/50 p-8 md:p-12 border border-white/10">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
