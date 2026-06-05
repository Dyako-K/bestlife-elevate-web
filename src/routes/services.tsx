import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, HeartPulse, Stethoscope, Baby, Brain, Bone, Activity, Microscope, Syringe, Pill } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "خزمەتگوزارییەکانمان | نەخۆشخانەی بێست لایف" },
      { name: "description", content: "ئاشنابوون بە کۆمەڵە خزمەتگوزاریی پزیشکی پایەبەرزەکانمان لە نەخۆشخانەی بێست لایف." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
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
              <ArrowRight className="h-4 w-4" />
              گەڕانەوە بۆ سەرەکی
            </Link>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-navy md:text-5xl">
              خزمەتگوزارییەکانمان
            </h1>
            <p className="mt-4 max-w-xl text-base text-muted-foreground">
              چاودێرییەکی تەواو و نەخۆش-ناوەند لە هەموو بەشە پزیشکییەکاندا. هەر خزمەتگوزارییەک
              پێشکەش دەکرێت بە هەمان پابەندبوون بە نایابی کە بێست لایف پێناسە دەکات.
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
                    زانیاری زیاتر
                    <ArrowRight className="h-3.5 w-3.5 rotate-180" />
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
    title: "نەخۆشییەکانی دڵ",
    description: "چاودێریی پێشکەوتووی دڵ بە دەستنیشانکردنی ورد، نەشتەرگەری و بەرنامەکانی چاکبوونەوەی دڵ لەلایەن پسپۆڕانی پایەبەرزەوە.",
    icon: HeartPulse,
  },
  {
    title: "پزیشکیی گشتی",
    description: "چاودێریی سەرەکی تەواو، پشکنینی پاراستن و بەڕێوەبردنی نەخۆشییە درێژخایەنەکان بەپێی پێداویستی تەندروستی تۆ.",
    icon: Stethoscope,
  },
  {
    title: "نەخۆشییەکانی منداڵان",
    description: "چاودێرییەکی بەزەییانە و خێزانی بۆ ساوا، منداڵ و گەنجان لە ژینگەیەکی گەرم و دڵنیادا.",
    icon: Baby,
  },
  {
    title: "نەخۆشییەکانی دەماروو",
    description: "دەستنیشانکردن و چارەسەری پسپۆڕانە بۆ نەخۆشییەکانی دەماروو بە تەکنەلۆژیای پێشکەوتوو و وێنەگرتنی پێشکەوتوو.",
    icon: Brain,
  },
  {
    title: "نەشتەرگەری ئێسک و جومگە",
    description: "گەڕاندنەوەی جوڵە بە جێگرتنەوەی جومگە، پزیشکیی وەرزشی و نەشتەرگەری بڕبڕە لەلایەن نەشتەرگەرە بەناوبانگەکانەوە.",
    icon: Bone,
  },
  {
    title: "چاودێریی فریاکەوتن",
    description: "خزمەتگوزاریی فریاکەوتن ٢٤ کاتژمێر بە تیمی وەڵامدانەوەی خێرا و ناوەندی فریاکەوتنی تەواو.",
    icon: Activity,
  },
  {
    title: "تاقیگە و دەستنیشانکردن",
    description: "پاتۆلۆجی، میکرۆبیۆلۆجی، خوێن و دەستنیشانکردنی مۆلیکولی بە خێرایی و وردیی بێ کۆتایی.",
    icon: Microscope,
  },
  {
    title: "کوتانی پارێزەری",
    description: "بەرنامەی کوتانی تەواو بۆ هەموو تەمەنەکان، لەوانە کوتانی گەشت و کوتانی وەرزی.",
    icon: Syringe,
  },
  {
    title: "خزمەتگوزاریی دەرمانخانە",
    description: "دەرمانخانەی ناوەوە بە دەرمانی فراوان، ڕێنمایی دەرمانی و بەڕێوەبردنی تایبەتیی نووسراوەکان.",
    icon: Pill,
  },
];
