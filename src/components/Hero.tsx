import { Link } from "@tanstack/react-router";
import { ArrowRight, Shield, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-teal/5 blur-3xl" />
        <div className="absolute top-60 -left-20 h-[400px] w-[400px] rounded-full bg-teal/3 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:gap-16">
        {/* Text Content */}
        <div className="flex flex-col items-start text-left lg:w-1/2">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/5 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-teal animate-fade-in-up">
            <Shield className="h-3.5 w-3.5" />
            Premium Healthcare Since 1998
          </div>

          <h1 className="max-w-xl text-4xl font-extrabold leading-[1.1] tracking-tight text-navy md:text-5xl lg:text-[3.5rem] animate-fade-in-up delay-100">
            Your Health.{" "}
            <span className="text-teal">Our Lifelong Promise.</span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg animate-fade-in-up delay-200">
            Experience world-class medical care delivered with compassion, precision, and an
            unwavering commitment to your well-being. Your journey to better health starts here.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 animate-fade-in-up delay-300">
            <Link
              to="/contact"
              className="btn-pulse inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-teal/20 transition-all hover:bg-teal-dark hover:shadow-teal/30"
            >
              Book an Appointment
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-secondary"
            >
              Explore Services
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center gap-6 animate-fade-in-up delay-400">
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <Clock className="h-4 w-4 text-teal" />
              24/7 Emergency Care
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <Users className="h-4 w-4 text-teal" />
              200+ Expert Doctors
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full lg:w-1/2 animate-slide-in-right delay-200">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-navy/10">
            <img
              src={heroImage}
              alt="Modern hospital interior with caring medical staff"
              className="h-auto w-full object-cover"
              loading="eager"
            />
            {/* Gradient overlay at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy/30 to-transparent" />
          </div>

          {/* Floating stat card */}
          <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-border bg-card p-4 shadow-xl md:block animate-fade-in-up delay-500">
            <div className="text-2xl font-extrabold text-navy">50K+</div>
            <div className="text-xs font-medium text-muted-foreground">Patients Treated</div>
          </div>

          {/* Floating rating card */}
          <div className="absolute -top-4 -right-4 hidden rounded-xl border border-border bg-card p-4 shadow-xl md:block animate-fade-in-up delay-600">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="h-4 w-4 text-teal" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="mt-1 text-xs font-medium text-muted-foreground">4.9 Patient Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
