import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "پەیوەندیمان پێوە بکە | نەخۆشخانەی بێست لایف" },
      { name: "description", content: "پەیوەندیمان پێوە بکە بۆ تۆمارکردنی ژوان، پرسیار یان سەردانی بنکەکانمان." },
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
              <ArrowRight className="h-4 w-4" />
              گەڕانەوە بۆ سەرەکی
            </Link>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-navy md:text-5xl">
              پەیوەندیمان پێوە بکە
            </h1>
            <p className="mt-4 max-w-xl text-base text-muted-foreground">
              ئێمە لێرەین بۆ یارمەتیدانت. پەیوەندیمان پێوە بکە بۆ تۆمارکردنی ژوان، پرسیار یان
              هەر یارمەتییەک کە پێویستت پێیەتی. تیمەکەمان بە بەزەییەوە وەڵامت دەداتەوە.
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
                  <h3 className="mt-5 text-lg font-bold text-navy">ژمارەی پەیوەندی</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    لە هەر کاتێکدا پەیوەندیمان پێوە بکە بۆ تۆمارکردنی ژوان یان پرسیار.
                  </p>
                  <p dir="ltr" className="mt-3 text-base font-semibold text-teal text-left">07709510001</p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-7 transition-all hover:border-teal/20 hover:shadow-lg hover:shadow-teal/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
                    <Mail className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">ئیمەیڵ</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    ئیمەیڵمان بۆ بنێرە و لە ماوەی ٢٤ کاتژمێردا وەڵامت دەدەینەوە.
                  </p>
                  <p dir="ltr" className="mt-3 text-base font-semibold text-teal text-left">info@bestlifehospital.com</p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-7 transition-all hover:border-teal/20 hover:shadow-lg hover:shadow-teal/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">شوێن</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    سەردانی بنکەی سەرەکیمان بکە بۆ پشکنین و خزمەتگوزاریی ڕووبەڕوو.
                  </p>
                  <p className="mt-3 text-base font-semibold text-navy">
                    سلێمانی - ڕاپەڕین، بەرامبەر فڕۆکەخانە
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-7 transition-all hover:border-teal/20 hover:shadow-lg hover:shadow-teal/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">کاتژمێرەکانی کارکردن</h3>
                  <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <p>دووشەممە - هەینی: <span className="font-medium text-navy">٨:٠٠ بەیانی - ٨:٠٠ ئێوارە</span></p>
                    <p>شەممە: <span className="font-medium text-navy">٩:٠٠ بەیانی - ٥:٠٠ ئێوارە</span></p>
                    <p>یەکشەممە: <span className="font-medium text-navy">تەنها فریاکەوتن</span></p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-navy">نامەیەک بنێرە</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  ئەم فۆڕمە پڕ بکەرەوە و ئێمە بە زووترین کات وەڵامت دەدەینەوە.
                </p>
                <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-navy">
                        ناوی یەکەم
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        placeholder="ناوەکەت"
                        className="mt-2 block w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-navy">
                        نازناو
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        placeholder="نازناوەکەت"
                        className="mt-2 block w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy">
                      ئیمەیڵ
                    </label>
                    <input
                      id="email"
                      type="email"
                      dir="ltr"
                      placeholder="name@example.com"
                      className="mt-2 block w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-navy">
                      ژمارەی مۆبایل
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      dir="ltr"
                      placeholder="07XX XXX XXXX"
                      className="mt-2 block w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy">
                      نامە
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="چۆن دەتوانین یارمەتیت بدەین؟"
                      className="mt-2 block w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-pulse inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-teal/20 transition-all hover:bg-teal-dark"
                  >
                    <Send className="h-4 w-4" />
                    ناردنی نامە
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
