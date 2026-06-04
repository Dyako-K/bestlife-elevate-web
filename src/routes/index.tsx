import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HospitalSlider } from "@/components/HospitalSlider";
import { Footer } from "@/components/Footer";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Best Life Hospital | Premium Healthcare" },
      { name: "description", content: "Best Life Hospital offers world-class medical care with compassion and precision. Book your appointment today." },
      { property: "og:title", content: "Best Life Hospital | Premium Healthcare" },
      { property: "og:description", content: "Your Health. Our Lifelong Promise. Experience world-class medical care delivered with compassion and precision." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />

        {/* Services Preview Section */}
        <section className="relative overflow-hidden border-t border-border/40 bg-secondary/30 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold tracking-widest uppercase text-teal">
                Our Services
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
                Comprehensive Care for Every Stage of Life
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                From preventive checkups to advanced surgical procedures, our multidisciplinary teams
                deliver exceptional outcomes across every medical specialty.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:shadow-lg hover:shadow-teal/5 hover:border-teal/20"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-primary-foreground">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust / Stats Section */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-extrabold text-teal md:text-5xl">{stat.value}</div>
                  <div className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import { Stethoscope, HeartPulse, Baby, Brain, Activity, Bone } from "lucide-react";

const services = [
  {
    title: "Cardiology",
    description: "Advanced heart care with state-of-the-art diagnostics, interventional procedures, and cardiac rehabilitation programs.",
    icon: HeartPulse,
  },
  {
    title: "General Medicine",
    description: "Comprehensive primary care, preventive screenings, and chronic disease management tailored to your unique health profile.",
    icon: Stethoscope,
  },
  {
    title: "Pediatrics",
    description: "Gentle, family-centered care for infants, children, and adolescents from birth through young adulthood.",
    icon: Baby,
  },
  {
    title: "Neurology",
    description: "Expert diagnosis and treatment of neurological conditions with cutting-edge imaging and therapeutic techniques.",
    icon: Brain,
  },
  {
    title: "Orthopedics",
    description: "Restoring mobility through advanced joint replacement, sports medicine, and minimally invasive spine surgery.",
    icon: Bone,
  },
  {
    title: "Emergency Care",
    description: "Round-the-clock emergency services with rapid response teams and fully equipped trauma centers.",
    icon: Activity,
  },
];

const stats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "200+", label: "Specialist Doctors" },
  { value: "50K+", label: "Patients Treated" },
  { value: "99%", label: "Patient Satisfaction" },
];
