import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactForm } from "@/components/ContactForm";
import { CheckCircle2, Heart, Euro, Calendar } from "lucide-react";

const benefits = [
  { icon: Euro, title: "Faire Preise", desc: "Transparente Kostenvoranschläge ohne versteckte Kosten." },
  { icon: Heart, title: "Persönliche Beratung", desc: "Individuelle Beratung und Vor-Ort-Termine." },
  { icon: CheckCircle2, title: "Qualitätsgarantie", desc: "Ausführung nach höchsten Standards mit Gewährleistung." },
  { icon: Calendar, title: "Flexible Termine", desc: "Wir richten uns nach Ihrem Zeitplan." },
];

const Privatkunden = () => (
  <div className="pt-20">
    <section className="bg-section-alt py-20 lg:py-28">
      <div className="container text-center">
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-widest text-green">Privatkunden</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-foreground sm:text-5xl">Premium-Qualität für Ihr Zuhause</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Als Eigentümer oder privater Vermieter verdienen Sie dieselbe professionelle Qualität wie Großkunden.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <AnimatedSection key={b.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card h-full text-center">
                <div className="mx-auto mb-4 inline-flex rounded-lg bg-green/10 p-3">
                  <b.icon className="h-5 w-5 text-green" />
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
      <div className="container max-w-2xl">
        <AnimatedSection className="text-center mb-10">
          <h2 className="font-display text-3xl font-extrabold text-foreground">Kostenlos beraten lassen</h2>
          <p className="mt-3 text-muted-foreground">Schildern Sie uns Ihr Anliegen und wir melden uns schnellstmöglich.</p>
        </AnimatedSection>
        <ContactForm />
      </div>
    </section>
  </div>
);

export default Privatkunden;
