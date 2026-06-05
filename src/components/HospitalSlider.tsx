import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slide1 from "@/assets/hospital-1.jpg.asset.json";
import slide2 from "@/assets/hospital-2.jpg.asset.json";
import slide3 from "@/assets/hospital-3.jpg.asset.json";
import slide4 from "@/assets/hospital-4.jpg.asset.json";
import slide5 from "@/assets/hospital-5.jpg.asset.json";
import slide6 from "@/assets/hospital-6.jpg.asset.json";
import slide7 from "@/assets/hospital-7.jpg.asset.json";

const slides = [
  {
    image: slide7.url,
    title: "Best Life Hospital",
    description:
      "A modern facility designed for healing, comfort, and trusted care — open 24 hours a day, 7 days a week.",
    alt: "Best Life Hospital building exterior",
  },
  {
    image: slide1.url,
    title: "Physical Therapy & Rehabilitation",
    description:
      "Personalized rehabilitation programs guided by expert therapists to restore strength and mobility.",
    alt: "Physical therapy session with specialist",
  },
  {
    image: slide5.url,
    title: "Women & Maternity Clinic",
    description:
      "Compassionate maternal care with specialized doctors supporting every stage of pregnancy and beyond.",
    alt: "Maternity and women's health clinic",
  },
  {
    image: slide6.url,
    title: "Advanced Ultrasound Imaging",
    description:
      "State-of-the-art ultrasound diagnostics available throughout the week for precise, timely results.",
    alt: "Advanced ultrasound imaging equipment",
  },
  {
    image: slide3.url,
    title: "Nephrology & Urology Clinic",
    description:
      "Dedicated specialists protecting your kidney and urinary health with comprehensive treatment plans.",
    alt: "Nephrology clinic visual",
  },
  {
    image: slide4.url,
    title: "Breast Cancer Awareness & Care",
    description:
      "Early detection, screening, and supportive care guided by our specialized medical team.",
    alt: "Breast cancer awareness",
  },
  {
    image: slide2.url,
    title: "Best Life Pharmacy",
    description:
      "A fully stocked in-house pharmacy offering trusted brands and seasonal offers for our patients.",
    alt: "Best Life pharmacy products",
  },
];

export function HospitalSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (index: number, dir: "next" | "prev") => {
      if (isTransitioning) return;
      setDirection(dir);
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, "next");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, "prev");
  }, [current, goTo]);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
    touchStartX.current = null;
  };

  const slideVariant =
    direction === "next" ? "animate-slide-enter-next" : "animate-slide-enter-prev";

  return (
    <section className="relative overflow-hidden bg-secondary/20 py-16 md:py-24">
      {/* Decorative top fade from hero */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-teal">
            Inside Our Hospital
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
            Where Healing Meets Innovation
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Take a glimpse into the spaces, people, and technology that make Best Life Hospital
            a leader in premium healthcare.
          </p>
        </div>

        {/* Slider */}
        <div
          ref={containerRef}
          className="group relative mx-auto max-w-5xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main image container */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl shadow-navy/10 md:aspect-[21/9]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  index === current
                    ? "opacity-100 translate-x-0 scale-100"
                    : direction === "next" && index < current
                    ? "opacity-0 -translate-x-full scale-95"
                    : direction === "next" && index > current
                    ? "opacity-0 translate-x-full scale-95"
                    : direction === "prev" && index > current
                    ? "opacity-0 translate-x-full scale-95"
                    : "opacity-0 -translate-x-full scale-95"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="h-full w-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />

                {/* Caption */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-6 md:p-10 ${
                    index === current ? slideVariant : "opacity-0 translate-y-4"
                  }`}
                >
                  <h3 className="text-xl font-bold text-white md:text-2xl">
                    {slide.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/80 md:text-base">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prev}
              className="absolute top-1/2 left-4 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white hover:scale-110 group-hover:opacity-100 md:left-6 md:h-12 md:w-12"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>
            <button
              onClick={next}
              className="absolute top-1/2 right-4 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white hover:scale-110 group-hover:opacity-100 md:right-6 md:h-12 md:w-12"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="mt-6 flex items-center justify-center gap-2.5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index, index > current ? "next" : "prev")}
                className={`relative h-2.5 rounded-full transition-all duration-500 ${
                  index === current
                    ? "w-8 bg-teal"
                    : "w-2.5 bg-border hover:bg-teal/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden rounded-t-2xl">
            <div
              className={`h-full bg-teal transition-all ${
                isPaused ? "" : "animate-progress"
              }`}
              style={{
                width: isPaused ? `${((current + 1) / slides.length) * 100}%` : undefined,
                animationPlayState: isPaused ? "paused" : "running",
              }}
            />
          </div>
        </div>
      </div>

      {/* Decorative bottom fade to next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
