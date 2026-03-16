import { useState, useEffect, useCallback, useRef, TouchEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ercaBuildingsImg from "@/assets/hero-erca-buildings.jpeg";
import barrierefreiImg from "@/assets/barrierefrei.jpg";
import renovationImg from "@/assets/renovation.jpeg";

const slides = [
  {
    image: ercaBuildingsImg,
    headline: "Ihr Partner für erstklassige Immobilienbetreuung",
    sub: "Objektbetreuung, Sanierung, Entrümpelung und mehr – ERCA Dienstleistungen liefert Handwerksqualität auf höchstem Niveau.",
    cta: "Kostenloses Angebot anfragen",
    alt: "ERCA Dienstleistungen – professionelle Immobilienbetreuung",
  },
  {
    image: barrierefreiImg,
    headline: "Barrierefreier Umbau – für ein selbstbestimmtes Leben",
    sub: "Barrierefreie Umbauten nach DIN 18040 – einfühlsam geplant, fachgerecht umgesetzt. Für Pflegeheime, Seniorenwohnanlagen und Privat.",
    cta: "Beratung vereinbaren",
    alt: "Barrierefreier Badumbau – barrierefrei und modern",
  },
  {
    image: renovationImg,
    headline: "Alles aus einer Hand – von Sanierung bis Umzug",
    sub: "Von der Komplettsanierung bis zum Umzugsservice – termingerecht, budgettreu und mit über 30 Jahren Erfahrung.",
    cta: "Jetzt Angebot anfordern",
    alt: "Professionelle Sanierungsarbeiten von ERCA",
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
    }, 10000);
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
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const handleTouchStart = (e: TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchMove = (e: TouchEvent) => { touchEndX.current = e.touches[0].clientX; };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); }
  };

  return (
    <section
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-20"
      aria-label="Hero-Bildergalerie"
      aria-roledescription="Karussell"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background images with smooth crossfade */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 -z-10"
          style={{
            opacity: i === current ? 1 : 0,
            transition: "opacity 1.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          aria-hidden={i !== current}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="h-full w-full object-cover object-center"
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/20" />
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-background/10 p-2.5 text-primary-foreground backdrop-blur-md transition-all hover:bg-background/25 focus-visible:ring-2 focus-visible:ring-ring sm:left-5 sm:p-3"
        aria-label="Vorheriger Slide"
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-background/10 p-2.5 text-primary-foreground backdrop-blur-md transition-all hover:bg-background/25 focus-visible:ring-2 focus-visible:ring-ring sm:right-5 sm:p-3"
        aria-label="Nächster Slide"
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>

      {/* Content */}
      <div className="container relative z-10 px-6 py-12 sm:py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/8 px-3 py-1.5 text-xs font-medium text-primary-foreground backdrop-blur-sm sm:mb-5 sm:px-4 sm:py-2 sm:text-sm">
              Über 30 Jahre Expertise · Essen & NRW
            </p>
            <h1 className="max-w-3xl font-display text-3xl font-bold leading-[1.12] text-primary-foreground sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
              {slides[current].headline}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/75 sm:mt-6 sm:text-lg">
              {slides[current].sub}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-semibold text-accent-foreground transition-all hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring sm:px-7 sm:py-4"
              >
                {slides[current].cta} <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+4915212971388"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary-foreground/25 px-6 py-3.5 font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/10 focus-visible:ring-2 focus-visible:ring-ring sm:px-7 sm:py-4"
              >
                <Phone className="h-4 w-4" /> Jetzt anrufen
              </a>
              <Link
                to="/leistungen"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary-foreground/15 px-6 py-3.5 font-semibold text-primary-foreground/80 backdrop-blur-sm transition-colors hover:bg-primary-foreground/10 sm:px-7 sm:py-4"
              >
                Leistungen entdecken
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2.5 sm:bottom-10" role="tablist">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === current ? "w-10 bg-accent" : "w-2.5 bg-primary-foreground/30 hover:bg-primary-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
