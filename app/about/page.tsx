import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Hero } from "@/components/sections/Hero";

export default function AboutPage() {
  return (
    <main className="bg-black">
      <Hero 
        title="About Us"
        subtitle="The architects of persistent intelligence"
        imageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
        fullHeight={false}
      />

      <Section padding="xl">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 border-l-4 border-primary pl-8 uppercase tracking-tighter">
                Our <span className="text-primary italic">Mission</span>
              </h2>
              <p className="text-xl text-gray-300 font-sans leading-relaxed mb-8">
                At Susan Future Technologies, we believe that the most critical environmental and security challenges of our time require a new perspective. Satellite data is too distant; drones are too fleeting.
              </p>
              <p className="text-xl text-gray-500 font-sans leading-relaxed">
                We are building the infrastructure for persistent, high-altitude presence—bridging the gap between space and earth to protect our forests, our borders, and our future.
              </p>
            </div>
            <div className="bg-nearblack border border-white/10 p-12">
              <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-tighter">Innovation at every altitude</h3>
              <p className="text-gray-400 font-sans leading-relaxed mb-8">
                Based in Bangalore, India, our team of aerospace engineers, data scientists, and environmental specialists are rethinking how we interact with the upper atmosphere.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-3xl font-bold text-primary italic">2022</p>
                  <p className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Founded</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary italic">15+</p>
                  <p className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Engineers</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Partners Section Placeholder */}
      <Section className="bg-nearblack border-y border-white/5" padding="md">
        <Container>
          <p className="text-center text-xs font-bold uppercase tracking-[0.4em] text-gray-600 mb-12">Collaborating with the best</p>
          <div className="flex flex-wrap justify-center items-center gap-16 grayscale opacity-40">
            {["ISRO", "DRDO", "Forest Dept", "NDRF"].map((partner) => (
              <span key={partner} className="text-2xl md:text-4xl font-display font-bold text-white">/{partner}</span>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
