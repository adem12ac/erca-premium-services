import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactForm } from "@/components/ContactForm";
import { CheckCircle2, Heart, Euro, Calendar, Wrench, Trash2, Accessibility, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import heroImg from "@/assets/hero-privatkunden.jpeg";

const benefits = [
  { icon: Euro, title: "Faire Preise", desc: "Transparente Kostenvoranschläge ohne versteckte Kosten." },
  { icon: Heart, title: "Persönliche Beratung", desc: "Individuelle Beratung und Vor-Ort-Termine." },
  { icon: CheckCircle2, title: "Qualitätsgarantie", desc: "Ausführung nach höchsten Standards mit Gewährleistung." },
  { icon: Calendar, title: "Flexible Termine", desc: "Wir richten uns nach Ihrem Zeitplan." },
];

const privatServices = [
  { icon: Wrench, title: "Sanierungen & Renovierungen", desc: "Komplettsanierung, Badsanierung, Malerarbeiten und mehr." },
  { icon: Trash2, title: "Entsorgung & Entrümpelung", desc: "Haushaltsauflösungen, Kellerentrümpelung und umweltgerechte Entsorgung." },
  { icon: Accessibility, title: "Barrierefreie Sanierungen", desc: "Barrierefreie Umbauten nach DIN 18040 für mehr Lebensqualität." },
  { icon: Truck, title: "Umzugsservice", desc: "Unkomplizierter Umzugsservice innerhalb Essen und Umgebung." },
];

const Privatkunden = () => (
  <div className="pt-20">
    <section className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy/70" />
      </div>
      <div className="container relative text-center">
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Privatkunden</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-white sm:text-5xl">Premium-Qualität für Ihr Zuhause</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
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
      <div className="container">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-3xl font-extrabold text-foreground">Unsere Leistungen für Privatkunden</h2>
          <p className="mt-3 text-muted-foreground">Alles aus einer Hand – für Ihr Zuhause.</p>
        </AnimatedSection>
        <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
          {privatServices.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.08}>
              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card h-full">
                <div className="rounded-lg bg-primary/10 p-2.5 shrink-0">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection className="mt-8 text-center">
          <Link to="/kontakt" className="inline-flex rounded-lg bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-opacity hover:opacity-90">
            Holen Sie sich jetzt Ihr Angebot
          </Link>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-20">
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
