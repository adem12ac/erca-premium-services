import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactForm } from "@/components/ContactForm";
import { Building2, FileText, Clock, Users, CheckCircle2 } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import heroImg from "@/assets/hero-geschaeftskunden.webp";

const benefits = [
  { icon: FileText, title: "Rahmenverträge & SLAs", desc: "Individuelle Service-Level-Agreements nach Ihren Anforderungen." },
  { icon: Clock, title: "Priorisierter Notdienst", desc: "Garantierte Reaktionszeiten für Ihre Objekte – 24/7." },
  { icon: Users, title: "Fester Ansprechpartner", desc: "Ein dedizierter Projektleiter für alle Ihre Objekte." },
  { icon: Building2, title: "Multi-Objekt-Betreuung", desc: "Effiziente Betreuung mehrerer Liegenschaften gleichzeitig." },
];

const targets = [
  "Hausverwaltungen",
  "Wohnungsbaugesellschaften",
  "Immobilieninvestoren",
  "Pflegeheim-Betreiber",
  "Studentenwohnheim-Betreiber",
  "Gewerbliche Vermieter",
];

const Geschaeftskunden = () => {
  useSEO({
    title: "Geschäftskunden – ERCA Dienstleistungen Essen | Objektbetreuung & Facility Management",
    description: "ERCA für Geschäftskunden: Rahmenverträge, priorisierter Notdienst, Multi-Objekt-Betreuung für Hausverwaltungen, Pflegeheime & Investoren in Essen & NRW.",
    canonical: "https://erca-service.de/geschaeftskunden",
  });

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy/70" />
      </div>
      <div className="container relative text-center">
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Geschäftskunden</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-white sm:text-5xl">Partner für Großprojekte</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Als strategischer Dienstleistungspartner betreuen wir Wohnanlagen, Pflegeheime, Gewerbeobjekte und ganze Immobilienportfolios.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <AnimatedSection key={b.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card h-full">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <b.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-section-alt py-20">
      <div className="container">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-3xl font-extrabold text-foreground">Unsere Zielgruppen</h2>
        </AnimatedSection>
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {targets.map((t, i) => (
            <AnimatedSection key={t} delay={i * 0.05}>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-card">
                <CheckCircle2 className="h-5 w-5 text-green shrink-0" />
                <span className="font-medium text-foreground">{t}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container max-w-2xl">
        <AnimatedSection className="text-center mb-10">
          <h2 className="font-display text-3xl font-extrabold text-foreground">Partnerschaft anfragen</h2>
          <p className="mt-3 text-muted-foreground">Wir erstellen Ihnen ein maßgeschneidertes Angebot.</p>
        </AnimatedSection>
        <ContactForm />
      </div>
    </section>
  </div>
);

export default Geschaeftskunden;
