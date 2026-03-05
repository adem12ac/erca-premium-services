import { useState, useEffect, useCallback, useRef, TouchEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { AnimatedSection } from "./AnimatedSection";
import hausmeisterImg from "@/assets/hausmeister.jpg";
import entruempelungImg from "@/assets/entruempelung.jpg";
import renovationImg from "@/assets/renovation.jpeg";

const slides = [
  {
    image: hausmeisterImg,
    headline: "Ihr zuverlässiger Partner für erstklassige Immobilienbetreuung",
    sub: "Objektbetreuung, Sanierung, Entrümpelung und mehr – ERCA Dienstleistungen liefert Handwerksqualität auf höchstem Niveau. Alles aus einer Hand in Essen & Region.",
    cta: "Holen Sie sich jetzt Ihr Angebot",
    alt: "ERCA Hausmeister bei der professionellen Objektbetreuung im Gebäudeflur",
  },
  {
    image: entruempelungImg,
    headline: "Professionelle Entrümpelung & Entsorgung",
    sub: "Wir entrümpeln fachgerecht und entsorgen umweltgerecht – für Privat, Hausverwaltungen und Gewerbetreibende.",
    cta: "Jetzt Angebot anfordern",
    alt: "ERCA Mitarbeiter bei einer professionellen Entrümpelung mit Transporter",
  },
  {
    image: renovationImg,
    headline: "Sanierungen, Renovierungen & barrierefreie Umbauten",
    sub: "Von der Komplettsanierung über barrierefreie Umbauten bis zum kleinen Umzugsservice – termingerecht und budgettreu.",
    cta: "Kostenloses Angebot anfordern",
    alt: "Professionelle Sanierungsarbeiten in einer Wohnung",
  },
];

export const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
  }, []);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    resetTimer();
  }, [resetTimer]);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    resetTimer();
  }, [resetTimer]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    resetTimer();
  }, [resetTimer]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (Math.abs(diff) > threshold) {
      if (diff > 0) next();
      else prev();
    }
  };

  return (
    <section
      className="relative flex min-h-[90vh] items-center overflow-hidden pt-20"
      aria-label="Hero-Bildergalerie"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 -z-10 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="h-full w-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
        </div>
      ))}

      {/* Arrow buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-background/20 p-2 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-background/40"
        aria-label="Vorheriger Slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-background/20 p-2 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-background/40"
        aria-label="Nächster Slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="container relative z-10 py-20">
        <AnimatedSection key={current}>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm">
            <Award className="h-4 w-4" /> Über 30 Jahre Expertise · Essen & NRW
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.1] text-primary-foreground sm:text-5xl lg:text-6xl">
            {slides[current].headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            {slides[current].sub}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              {slides[current].cta} <ArrowRight className="h-4 w-4" />
            </Link>
            <WhatsAppButton label="WhatsApp Chat" />
            <Link
              to="/leistungen"
              className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 px-7 py-3.5 font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/10"
            >
              Leistungen entdecken
            </Link>
          </div>
        </AnimatedSection>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-accent" : "w-2 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
