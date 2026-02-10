import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { notFound } from "next/navigation";
import { Globe } from "lucide-react";

const applicationData: Record<string, any> = {
  "forest-fire": {
    title: "Forest Fire & Wildfire Monitoring",
    subtitle: "Early detection saves ecosystems",
    image: "https://images.unsplash.com/photo-1542125387-c71274d94f0a?auto=format&fit=crop&q=80",
    challenge: "Wildfires can spread at uncontrollable speeds. Traditional ground-based or sporadic drone surveillance often detects fires too late for effective containment.",
    solution: "HAWKE provides 24/7 thermal monitoring over 500sq km. Our AI-driven vision systems detect heat signatures and smoke patterns within minutes of ignition.",
    benefits: [
      "Early Detection (8 min average)",
      "Continuous Monitoring through Smoke",
      "Live Data Stream to Command Centers",
      "Autonomous 24/7 Deployment"
    ],
    scenario: {
      type: "Early Warning System",
      value: "8 Min",
      stat: "Detection Response Time"
    }
  },
  "weather": {
    title: "Weather & Environmental Monitoring",
    subtitle: "Persistent data collection from the atmosphere",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80",
    challenge: "Satellite data lacks resolution at specific locales, and weather balloons are single-use, leading to data gaps in critical environmental research.",
    solution: "A tethered HAWKE aerostat station can remain aloft for days, providing continuous meteorological data without the need for constant retrieval and relaunch.",
    benefits: [
      "High-Resolution Local Data",
      "Long-Term Atmospheric Research",
      "Air Quality Monitoring",
      "Sustainable & Reusable Platform"
    ],
    scenario: {
      type: "Atmospheric Precision",
      value: "0.1m",
      stat: "Altitude Stability"
    }
  },
  "defense": {
    title: "Defence & Border Security",
    subtitle: "The ultimate vantage point for security",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80",
    challenge: "Monitoring long stretches of remote borders is manpower-intensive and prone to human error, specially during night-time operations.",
    solution: "HAWKE aerostats act as permanent high-altitude sentinels, providing 360° coverage with integrated night-vision and thermal tracking.",
    benefits: [
      "Persistent Border Surveillance",
      "Encrypted Comms Hub",
      "Automated Threat Detection",
      "Low Operational Signature"
    ],
    scenario: {
      type: "Borer Perimeter",
      value: "50km",
      stat: "Effective Radar Radius"
    }
  },
  "agriculture": {
    title: "Precision Agriculture",
    subtitle: "Revolutionizing field-scale crop management",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80",
    challenge: "Farmers need real-time data on crop health, soil moisture, and pest infestations across thousands of acres without high satellite costs.",
    solution: "HAWKE offers a seasonal monitoring solution that stays above the farm, providing daily multispectral imaging at a fraction of the cost of aviation.",
    benefits: [
      "Daily Multispectral Imaging",
      "Pest & Disease Early Warning",
      "Irrigation Optimization",
      "Yield Prediction Models"
    ],
    scenario: {
      type: "Crop Analysis",
      value: "4K",
      stat: "Per-Plant Multispectral Res"
    }
  },
  "disaster": {
    title: "Disaster Relief Operations",
    subtitle: "Restoring communication when it matters most",
    image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?auto=format&fit=crop&q=80",
    challenge: "Natural disasters often destroy local communication infrastructure, leaving first responders blind and isolated.",
    solution: "HAWKE can be rapidly deployed to act as a temporary cellular tower and observation platform, restoring connectivity in 4G/5G and Radio.",
    benefits: [
      "Rapid Comms Restoration",
      "Real-time Search & Rescue",
      "Hazard Assessment Mapping",
      "First Responder Coordination"
    ],
    scenario: {
      type: "Comms Restoration",
      value: "15 Min",
      stat: "Deployment Connectivity"
    }
  },
  "others": {
    title: "Infrastructure & Mining",
    subtitle: "Monitoring assets in the most remote locations",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80",
    challenge: "Mining sites and oil pipelines often span hundreds of kilometers through hostile terrain where continuous human presence is impossible.",
    solution: "HAWKE provides automated monitoring of remote assets, detecting leaks, security breaches, and ensuring operational compliance.",
    benefits: [
      "Pipeline & Asset Integrity",
      "Security for Remote Mines",
      "Environmental Breach Detection",
      "Automated Compliance Logging"
    ],
    scenario: {
      type: "Leak Detection Simulation",
      value: "99.8% Accuracy",
      stat: "Visual & Chemical Analysis"
    }
  }
};

import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const data = applicationData[params.slug];
  if (!data) return { title: "Not Found" };

  return {
    title: `${data.title} | Susan Future Technologies`,
    description: data.challenge,
  };
}

export default function ApplicationPage({ params }: { params: { slug: string } }) {
  const data = applicationData[params.slug];

  if (!data) {
    notFound();
  }

  return (
    <main className="bg-black">
      <Hero 
        title={data.title}
        subtitle={data.subtitle}
        imageSrc={data.image}
        fullHeight={false}
      />

      <Section padding="xl">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="sticky top-32">
              <h2 className="text-gray-500 font-display font-bold text-xs uppercase tracking-[0.4em] mb-4">The Challenge</h2>
              <p className="text-3xl font-bold text-white mb-8 border-l-2 border-primary pl-8 uppercase tracking-tighter">
                Bridging the Gap in <br /> <span className="text-primary italic">Aerial Intelligence</span>
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-12">
                {data.challenge}
              </p>
              
              <h2 className="text-gray-500 font-display font-bold text-xs uppercase tracking-[0.4em] mb-4">The HAWKE Solution</h2>
              <p className="text-gray-200 text-lg leading-relaxed">
                {data.solution}
              </p>
            </div>

            <div className="space-y-12">
              <h2 className="text-gray-500 font-display font-bold text-xs uppercase tracking-[0.4em] mb-4">Key Benefits</h2>
              <div className="grid grid-cols-1 gap-4">
                {data.benefits.map((benefit: string, index: number) => (
                  <div key={index} className="bg-nearblack border border-white/5 p-8 hover:border-primary/30 transition-all group">
                    <p className="text-white font-bold uppercase tracking-tight text-xl group-hover:text-primary transition-colors">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              {/* Scenario Visualization */}
              {data.scenario && (
                <div className="bg-nearblack border-y-4 border-primary p-12 mt-12 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Globe className="w-32 h-32 text-white" />
                  </div>
                  <h3 className="text-gray-500 font-display font-bold text-xs uppercase tracking-[0.4em] mb-8">Live Simulation Scenario</h3>
                  <div className="flex flex-col md:flex-row gap-12 items-end">
                    <div>
                      <p className="text-7xl font-bold text-white tracking-tighter mb-2">{data.scenario.value}</p>
                      <p className="text-primary font-bold uppercase tracking-widest text-xs">{data.scenario.type}</p>
                    </div>
                    <div className="pb-2">
                       <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mb-1">Observation Metric</p>
                       <p className="text-white font-sans text-sm">{data.scenario.stat}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-primary p-12 mt-12">
                <h3 className="text-black font-display font-bold text-3xl uppercase tracking-tighter mb-6">
                  Ready to deploy?
                </h3>
                <p className="text-black/70 mb-8 font-sans">
                  Get in touch with our specialists to discuss the specific requirements for your {data.title} use case.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="secondary" className="bg-black text-white hover:bg-nearblack">Request Deep-Dive</Button>
                  <Button variant="ghost" className="text-black border-black hover:bg-black hover:text-white">Download Case Study</Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
