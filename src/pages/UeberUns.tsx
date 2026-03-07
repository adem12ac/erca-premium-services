import { AnimatedSection } from "@/components/AnimatedSection";
import { Shield, Award, Users, Clock } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import heroImg from "@/assets/hero-ueberuns.jpeg";

const UeberUns = () => {
  useSEO({
    title: "Über uns – ERCA Dienstleistungen Essen | 30+ Jahre Erfahrung",
    description: "Lernen Sie ERCA Dienstleistungen kennen: Inhabergeführt, über 30 Jahre Erfahrung, 25+ Zertifikate. Ihr zuverlässiger Partner für Gebäudeservice in Essen & NRW.",
    canonical: "https://erca-service.de/ueber-uns",
  });

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy/70" />
      </div>
      <div className="container relative text-center">
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Über uns</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-white sm:text-5xl">Qualität durch Kompetenz</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">Vertrauen durch Erfahrung – seit über 30 Jahren.</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-20">
      <div className="container max-w-3xl">
        <AnimatedSection>
          <p className="text-lg leading-relaxed text-muted-foreground">
            ERCA Dienstleistungen ist ein inhabergeführtes Fachunternehmen aus Essen mit über 30 Jahren Branchenerfahrung. Gegründet und geführt von Erkan Catak, der 1993 mit einer fundierten technischen Ausbildung in den Bereichen Metallbau und Sanitärtechnik begann.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Heute betreuen wir Seniorenwohnanlagen, betreutes Wohnen, Studentenwohnheime und privatgenutzte Immobilien in Essen und der gesamten Region. Unser Anspruch: Jeder Auftrag wird mit der gleichen Sorgfalt ausgeführt – ob Routine-Begehung oder komplexe Sanierung.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="bg-section-alt py-20">
      <div className="container">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { icon: Clock, value: "30+", label: "Jahre Erfahrung" },
            { icon: Award, value: "500+", label: "Projekte" },
            { icon: Shield, value: "25+", label: "Zertifikate" },
            { icon: Users, value: "100+", label: "Zufriedene Kunden" },
          ].map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1}>
              <div className="text-center">
                <s.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                <p className="font-display text-3xl font-extrabold text-foreground">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-green">Qualitätssicherung</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground">Unsere Zertifikate</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 max-w-3xl mx-auto">
          {["TÜV Rheinland", "Würth Akademie", "BGW Zertifikat", "DSGVO-konform", "Brandschutz", "Arbeitssicherheit", "Hygiene", "Erste Hilfe"].map((cert, i) => (
            <AnimatedSection key={cert} delay={i * 0.05}>
              <div className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center shadow-card">
                <Shield className="mb-2 h-8 w-8 text-primary" />
                <p className="text-xs font-bold text-foreground">{cert}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default UeberUns;
