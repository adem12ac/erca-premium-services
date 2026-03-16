import { useRef } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactForm } from "@/components/ContactForm";
import { ArrowRight, Trash2, Wrench, Building2, CheckCircle2, Accessibility, Truck, Home } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const pricingTiers = [
  {
    icon: Home,
    name: "Hausmeister-Paket Basis",
    price: "ab 299 €",
    unit: "/ Monat",
    desc: "Regelmäßige Objektkontrollen, Kleinreparaturen, Winterdienst und Pflege der Außenanlagen. Zuverlässige Betreuung für einen reibungslosen Gebäudebetrieb.",
    features: ["Regelmäßige Objektkontrollen", "Kleinreparaturen", "Winterdienst & Streupflicht", "Pflege der Außenanlagen"],
    highlight: false,
  },
  {
    icon: Building2,
    name: "Hausmeister-Paket Premium",
    price: "ab 599 €",
    unit: "/ Monat",
    desc: "Basis-Leistungen plus technische Objektbetreuung, Brandschutzkontrollen, Wartungskoordination sowie Dokumentation der technischen Anlagen.",
    features: ["Alle Basis-Leistungen inklusive", "Technische Objektbetreuung", "Brandschutzkontrollen", "Wartungskoordination", "Dokumentation technischer Anlagen"],
    highlight: true,
  },
  {
    icon: Wrench,
    name: "Komplettsanierung",
    price: "ab 499 €",
    unit: "/ m²",
    desc: "Vollständige Sanierung inkl. aller Gewerke – schlüsselfertig und budgettreu.",
    features: ["Alle Gewerke aus einer Hand", "Barrierefreie Umbauten", "Projektmanagement inklusive", "Detaillierte Dokumentation"],
    highlight: false,
  },
];

const additionalServices = [
  { icon: Accessibility, name: "Barrierefreie Badsanierung", price: "ab 4.999 €", desc: "Kompletter barrierefreier Badumbau nach DIN 18040 – Planung, Umbau und Installation aus einer Hand." },
  { icon: Truck, name: "Umzugsservice", price: "auf Anfrage", desc: "Umzüge, Möbelmontage, Entrümpelung und fachgerechte Entsorgung – zuverlässig in Essen und Umgebung." },
  { icon: Trash2, name: "Entrümpelung", price: "ab 20 €/m²", desc: "Fachgerechte Entrümpelung und umweltgerechte Entsorgung für Privat und Gewerbe." },
];

const Produkte = () => {
  useSEO({
    title: "Preise & Pakete – ERCA Dienstleistungen Essen | Transparente Kosten",
    description: "Transparente Preise: Hausmeister-Paket ab 299€/Monat, Komplettsanierung ab 499€/m², barrierefreie Badsanierung ab 4.999€. Kostenlose Beratung in Essen.",
    canonical: "https://erca-service.de/produkte",
  });

  const formRef = useRef<HTMLDivElement>(null);
  const selectedProductRef = useRef<string>("");

  const scrollToForm = (productName: string) => {
    selectedProductRef.current = productName;
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pt-20">
      <section className="bg-section-alt py-20 lg:py-28">
        <div className="container text-center">
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">Produkte & Preise</p>
            <h1 className="mt-4 font-display text-4xl font-bold text-foreground sm:text-5xl">Transparente Leistungspakete</h1>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground leading-relaxed">
              Klare Preise, keine versteckten Kosten. Alle Pakete sind individuell anpassbar – kontaktieren Sie uns für ein maßgeschneidertes Angebot.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Pricing Cards */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {pricingTiers.map((tier, i) => (
              <AnimatedSection key={tier.name} delay={i * 0.1}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 ${
                    tier.highlight
                      ? "border-primary bg-primary/[0.02] shadow-lg ring-1 ring-primary/20"
                      : "border-border bg-card shadow-card hover:shadow-card-hover"
                  }`}
                >
                  {tier.highlight && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                      Beliebt
                    </span>
                  )}
                  <div className="mb-5 inline-flex items-center justify-center rounded-xl bg-primary/8 p-3 w-fit">
                    <tier.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">{tier.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{tier.desc}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-display text-4xl font-bold text-primary">{tier.price}</span>
                    <span className="text-sm text-muted-foreground">{tier.unit}</span>
                  </div>
                  <ul className="mt-8 space-y-3 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => scrollToForm(tier.name)}
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all ${
                      tier.highlight
                        ? "bg-primary text-primary-foreground hover:opacity-90"
                        : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    Angebot anfragen <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-section-alt py-20 lg:py-28">
        <div className="container">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display text-3xl font-bold text-foreground">Weitere Leistungspakete</h2>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {additionalServices.map((s, i) => (
              <AnimatedSection key={s.name} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:shadow-card-hover">
                  <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-primary/8 p-3 w-fit">
                    <s.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <p className="font-display text-2xl font-bold text-primary">{s.price}</p>
                    <button
                      onClick={() => scrollToForm(s.name)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                    >
                      Anfragen <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form - always visible */}
      <section className="border-t border-border py-20" id="anfrage" ref={formRef}>
        <div className="container max-w-2xl">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-foreground">Angebot anfragen</h2>
            <p className="mt-3 text-muted-foreground">Wählen Sie oben ein Paket oder schildern Sie uns direkt Ihr Anliegen.</p>
          </AnimatedSection>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Produkte;
