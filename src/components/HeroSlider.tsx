import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { AnimatedSection } from "./AnimatedSection";
import renovationImg from "@/assets/renovation.jpeg";
import heatingImg from "@/assets/heating.jpeg";
import buildingImg from "@/assets/building.jpeg";

const slides = [
  {
    image: renovationImg,
    headline: "Ihr zuverlässiger Partner für erstklassige Immobilienbetreuung",
    sub: "Objektbetreuung, Sanierung, Entrümpelung und mehr – ERCA Dienstleistungen liefert Handwerksqualität auf höchstem Niveau. Alles aus einer Hand in Essen & Region.",
    cta: "Holen Sie sich jetzt Ihr Angebot",
    alt: "Professionelle Sanierungsarbeiten in einer Wohnung",
  },
  {
    image: buildingImg,
    headline: "Professionelle Objektbetreuung & Hausmeisterservice",
    sub: "Wir betreuen Wohnanlagen, Pflegeheime und Gewerbeobjekte – zuverlässig, sauber dokumentiert und immer erreichbar.",
    cta: "Jetzt Angebot anfordern",
    alt: "Modernes Mehrfamilienhaus mit gepflegter Außenanlage",
  },
  {
    image: heatingImg,
    headline: "Sanierungen, Entrümpelung & barrierefreie Umbauten",
    sub: "Von der Komplettsanierung über Entsorgung bis zum barrierefreien Umbau – termingerecht und budgettreu.",
    cta: "Kostenloses Angebot anfordern",
    alt: "Renovierungsarbeiten in einem Gebäude",
  },
];

export const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-20" aria-label="Hero-Bildergalerie">
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
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-accent" : "w-2 bg-primary-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
