import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactForm } from "@/components/ContactForm";
import { ArrowRight, Trash2, Wrench, Building2, CheckCircle2 } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const pricingTiers = [
  {
    icon: Trash2,
    name: "Entrümpelung",
    price: "ab 20 €",
    unit: "/ m²",
    desc: "Fachgerechte Entrümpelung und umweltgerechte Entsorgung für Privat und Gewerbe.",
    features: ["Kostenlose Vor-Ort-Besichtigung", "Umweltgerechte Entsorgung", "Besenreine Übergabe", "Kurzfristige Termine"],
    highlight: false,
  },
  {
    icon: Wrench,
    name: "Renovierung",
    price: "ab 120 €",
    unit: "/ m²",
    desc: "Von der Schönheitsrenovierung bis zur Teilsanierung – termingerecht und sauber.",
    features: ["Malerarbeiten & Tapezieren", "Bodenbeläge verlegen", "Sanitär-Renovierung", "Festpreisangebot möglich"],
    highlight: true,
  },
  {
    icon: Building2,
    name: "Komplettsanierung",
    price: "ab 800 €",
    unit: "/ m²",
    desc: "Vollständige Sanierung inkl. aller Gewerke – schlüsselfertig und budgettreu.",
    features: ["Alle Gewerke aus einer Hand", "Barrierefreie Umbauten", "Projektmanagement inklusive", "Detaillierte Dokumentation"],
    highlight: false,
  },
];

const additionalServices = [
  { name: "Hausmeister-Paket Basis", price: "ab 299 €/Monat", desc: "Regelmäßige Begehungen, Winterdienst, Grünanlagenpflege" },
  { name: "Hausmeister-Paket Premium", price: "ab 599 €/Monat", desc: "Basis plus technisches Management, Brandschutzprüfung" },
  { name: "Barrierefreie Badsanierung", price: "ab 4.999 €", desc: "Kompletter barrierefreier Badumbau nach DIN 18040" },
  { name: "Umzugsservice", price: "auf Anfrage", desc: "Unkomplizierter Umzugsservice in Essen und Umgebung" },
];

const Produkte = () => {
  useSEO({
    title: "Preise & Pakete – ERCA Dienstleistungen Essen | Transparente Kosten",
    description: "Transparente Preise für Entrümpelung (ab 20€/m²), Renovierung (ab 120€/m²) und Komplettsanierung (ab 800€/m²). Kostenlose Vor-Ort-Besichtigung in Essen.",
    canonical: "https://erca-service.de/produkte",
  });


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
                    onClick={() => setSelectedProduct(tier.name)}
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
          <div className="grid gap-6 sm:grid-cols-2">
            {additionalServices.map((s, i) => (
              <AnimatedSection key={s.name} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:shadow-card-hover">
                  <h3 className="font-display text-lg font-bold text-foreground">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <p className="font-display text-2xl font-bold text-primary">{s.price}</p>
                    <button
                      onClick={() => setSelectedProduct(s.name)}
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

      {selectedProduct && (
        <section className="border-t border-border py-20" id="anfrage">
          <div className="container max-w-2xl">
            <AnimatedSection className="text-center mb-10">
              <h2 className="font-display text-3xl font-bold text-foreground">Angebot anfragen</h2>
              <p className="mt-3 text-muted-foreground">für „{selectedProduct}"</p>
            </AnimatedSection>
            <ContactForm prefilledProduct={selectedProduct} variant="product" />
          </div>
        </section>
      )}
    </div>
  );
};

export default Produkte;
