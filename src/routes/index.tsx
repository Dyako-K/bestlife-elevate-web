import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HospitalSlider } from "@/components/HospitalSlider";
import { Footer } from "@/components/Footer";
import { Stethoscope, HeartPulse, Baby, Brain, Activity, Bone } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "نەخۆشخانەی بێست لایف | چاودێریی تەندروستی پایەبەرز" },
      { name: "description", content: "نەخۆشخانەی بێست لایف چاودێریی پزیشکی لە ئاستی جیهانیدا پێشکەش دەکات بە بەزەیی و وردی. ژوانەکەت ئەمڕۆ تۆمار بکە." },
      { property: "og:title", content: "نەخۆشخانەی بێست لایف | چاودێریی تەندروستی پایەبەرز" },
      { property: "og:description", content: "تەندروستی تۆ. بەڵێنی ژیانمان." },
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
        <HospitalSlider />

        {/* Services Preview Section */}
        <section className="relative overflow-hidden bg-secondary/30 py-20 md:py-28">
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent" />
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold tracking-widest uppercase text-teal">
                خزمەتگوزارییەکانمان
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
                چاودێرییەکی تەواو بۆ هەموو قۆناغەکانی ژیان
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                لە پشکنینی پاراستنەوە بۆ نەشتەرگەرییە پێشکەوتووەکان، تیمە پسپۆڕەکانمان
                ئەنجامی نایاب پێشکەش دەکەن لە هەموو بەشە پزیشکییەکاندا.
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

const services = [
  {
    title: "نەخۆشییەکانی دڵ",
    description: "چاودێریی پێشکەوتووی دڵ بە دەستنیشانکردنی ورد، نەشتەرگەری و بەرنامەکانی چاکبوونەوەی دڵ.",
    icon: HeartPulse,
  },
  {
    title: "پزیشکیی گشتی",
    description: "چاودێریی سەرەکی تەواو، پشکنینی پاراستن و بەڕێوەبردنی نەخۆشییە درێژخایەنەکان بەپێی پێداویستی تۆ.",
    icon: Stethoscope,
  },
  {
    title: "نەخۆشییەکانی منداڵان",
    description: "چاودێرییەکی بەزەییانە و خێزانی بۆ ساوا، منداڵ و گەنجان لە ژاوەژاوێکی گەرم و دڵنیادا.",
    icon: Baby,
  },
  {
    title: "نەخۆشییەکانی دەماروو",
    description: "دەستنیشانکردن و چارەسەری پسپۆڕانە بۆ نەخۆشییەکانی دەماروو بە تەکنەلۆژیای پێشکەوتوو.",
    icon: Brain,
  },
  {
    title: "نەشتەرگەری ئێسک و جومگە",
    description: "گەڕاندنەوەی جوڵە بە جێگرتنەوەی جومگە، پزیشکیی وەرزشی و نەشتەرگەری بڕبڕە.",
    icon: Bone,
  },
  {
    title: "چاودێریی فریاکەوتن",
    description: "خزمەتگوزاریی فریاکەوتن ٢٤ کاتژمێر، تیمی وەڵامدانەوەی خێرا و ناوەندی فریاکەوتنی تەواو.",
    icon: Activity,
  },
];

const stats = [
  { value: "+٥", label: "ساڵی ئەزموون" },
  { value: "+٢٠٠", label: "پزیشکی پسپۆڕ" },
  { value: "+٥٠ هەزار", label: "نەخۆش چارەسەرکراوە" },
  { value: "٪٩٩", label: "ڕەزامەندیی نەخۆشان" },
];
