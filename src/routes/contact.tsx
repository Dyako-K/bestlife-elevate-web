import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Best Life Hospital" },
      { name: "description", content: "Get in touch with Best Life Hospital. Book appointments, ask questions, or visit our facilities." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-32">
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
              Contact Us
            </h1>
            <p className="mt-4 max-w-xl text-base text-muted-foreground">
              We are here to help. Reach out for appointments, inquiries, or any assistance you
              need. Our team is ready to respond with care and professionalism.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Info Cards */}
              <div className="space-y-6">
                <div className="rounded-2xl border border-border bg-card p-7 transition-all hover:border-teal/20 hover:shadow-lg hover:shadow-teal/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
                    <Phone className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">Phone</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Call us anytime for appointments or general inquiries.
                  </p>
                  <p className="mt-3 text-base font-semibold text-teal">07709510001</p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-7 transition-all hover:border-teal/20 hover:shadow-lg hover:shadow-teal/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
                    <Mail className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">Email</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Send us an email and we will get back to you within 24 hours.
                  </p>
                  <p className="mt-3 text-base font-semibold text-teal">info@bestlifehospital.com</p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-7 transition-all hover:border-teal/20 hover:shadow-lg hover:shadow-teal/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">Location</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Visit our main campus for in-person consultations and services.
                  </p>
                  <p className="mt-3 text-base font-semibold text-navy">
                    Best Life Hospital, Main Campus
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-7 transition-all hover:border-teal/20 hover:shadow-lg hover:shadow-teal/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">Working Hours</h3>
                  <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <p>Monday - Friday: <span className="font-medium text-navy">8:00 AM - 8:00 PM</span></p>
                    <p>Saturday: <span className="font-medium text-navy">9:00 AM - 5:00 PM</span></p>
                    <p>Sunday: <span className="font-medium text-navy">Emergency Only</span></p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-navy">Send a Message</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill out the form below and we will respond as soon as possible.
                </p>
                <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-navy">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        className="mt-2 block w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-navy">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                        className="mt-2 block w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      className="mt-2 block w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-navy">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+964 770 123 4567"
                      className="mt-2 block w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="How can we help you today?"
                      className="mt-2 block w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-pulse inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-teal/20 transition-all hover:bg-teal-dark"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
