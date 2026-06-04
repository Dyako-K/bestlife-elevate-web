import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, HeartPulse, Stethoscope, Baby, Brain, Bone, Activity, Microscope, Syringe, Pill } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | Best Life Hospital" },
      { name: "description", content: "Explore our comprehensive range of premium medical services at Best Life Hospital." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-24">
        {/* Header */}
        <section className="border-b border-border/40 pb-16 pt-10">
          <div className="mx-auto max-w-7xl px-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-teal"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-navy md:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 max-w-xl text-base text-muted-foreground">
              Comprehensive, patient-centered care across every medical specialty. Every service is
              delivered with the same commitment to excellence that defines Best Life Hospital.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {allServices.map((service, i) => (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:shadow-teal/5 hover:border-teal/20"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-primary-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-navy">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-teal opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more
                    <ArrowLeft className="h-3.5 w-3.5 rotate-180" />
                  </div>
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

const allServices = [
  {
    title: "Cardiology",
    description: "Advanced heart care with state-of-the-art diagnostics, interventional procedures, and cardiac rehabilitation programs led by board-certified cardiologists.",
    icon: HeartPulse,
  },
  {
    title: "General Medicine",
    description: "Comprehensive primary care, preventive screenings, and chronic disease management tailored to your unique health profile and lifestyle.",
    icon: Stethoscope,
  },
  {
    title: "Pediatrics",
    description: "Gentle, family-centered care for infants, children, and adolescents from birth through young adulthood in a warm, welcoming environment.",
    icon: Baby,
  },
  {
    title: "Neurology",
    description: "Expert diagnosis and treatment of neurological conditions with cutting-edge imaging, neurophysiology, and therapeutic techniques.",
    icon: Brain,
  },
  {
    title: "Orthopedics",
    description: "Restoring mobility through advanced joint replacement, sports medicine, and minimally invasive spine surgery by renowned orthopedic surgeons.",
    icon: Bone,
  },
  {
    title: "Emergency Care",
    description: "Round-the-clock emergency services with rapid response teams, fully equipped trauma centers, and ambulance services.",
    icon: Activity,
  },
  {
    title: "Laboratory & Diagnostics",
    description: "Full-service pathology, microbiology, hematology, and molecular diagnostics with rapid turnaround times and uncompromising accuracy.",
    icon: Microscope,
  },
  {
    title: "Vaccination & Immunization",
    description: "Complete immunization programs for all ages, including travel vaccines, seasonal flu shots, and specialized vaccination schedules.",
    icon: Syringe,
  },
  {
    title: "Pharmacy Services",
    description: "On-site pharmacy with an extensive formulary, medication counseling, and personalized prescription management for optimal therapeutic outcomes.",
    icon: Pill,
  },
];
