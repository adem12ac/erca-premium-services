import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactForm } from "@/components/ContactForm";
import { ArrowRight } from "lucide-react";

const products = [
  { name: "Hausmeister-Paket Basis", desc: "Regelmäßige Begehungen, Winterdienst, Grünanlagenpflege und Kleinreparaturen für Ihre Liegenschaft.", price: "ab 299€/Monat" },
  { name: "Hausmeister-Paket Premium", desc: "Basis-Paket plus technisches Management, Brandschutzprüfung, Aufzugswartung und priorisierter Notdienst.", price: "ab 599€/Monat" },
  { name: "Sanierung Komplett", desc: "Vollständige Wohnungssanierung nach Mieterwechsel inkl. Malerarbeiten, Böden und Bad.", price: "ab 2.999€" },
  { name: "Barrierefreie Badsanierung", desc: "Kompletter barrierefreier Badumbau nach DIN 18040 – von der Planung bis zur schlüsselfertigen Übergabe.", price: "ab 4.999€" },
  { name: "Entrümpelung & Entsorgung", desc: "Fachgerechte Entrümpelung und umweltgerechte Entsorgung – für Privat und Gewerbe.", price: "auf Anfrage" },
  { name: "Kleiner Umzugsservice", desc: "Unkomplizierter Umzugsservice für Privatkunden innerhalb Essen und Umgebung.", price: "auf Anfrage" },
  { name: "Objektbetreuung", desc: "Full-Service-Betreuung für Ihr Immobilienportfolio mit dokumentierter Berichterstattung.", price: "auf Anfrage" },
];

const Produkte = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <div className="pt-20">
      <section className="bg-section-alt py-20 lg:py-28">
        <div className="container text-center">
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-widest text-green">Produkte & Preise</p>
            <h1 className="mt-3 font-display text-4xl font-extrabold text-foreground sm:text-5xl">Transparente Leistungspakete</h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Klare Preise, keine versteckten Kosten. Alle Pakete sind individuell anpassbar.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-card-hover">
                  <h3 className="font-display text-lg font-bold text-foreground">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <p className="mt-4 font-display text-2xl font-extrabold text-primary">{p.price}</p>
                  <button
                    onClick={() => setSelectedProduct(p.name)}
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Holen Sie sich jetzt Ihr Angebot <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <section className="border-t border-border bg-section-alt py-20" id="anfrage">
          <div className="container max-w-2xl">
            <AnimatedSection className="text-center mb-10">
              <h2 className="font-display text-3xl font-extrabold text-foreground">Angebot anfragen</h2>
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
