import { AnimatedSection } from "@/components/AnimatedSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ContactForm } from "@/components/ContactForm";
import { HeroSlider } from "@/components/HeroSlider";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, Award, Wrench, Building2, Trash2, Accessibility, Truck, CheckCircle2, Phone } from "lucide-react";
import renovationImg from "@/assets/renovation.jpeg";
import buildingImg from "@/assets/building.jpeg";

const stats = [
  { value: "30+", label: "Jahre Erfahrung" },
  { value: "500+", label: "Projekte realisiert" },
  { value: "25+", label: "Zertifikate" },
  { value: "24h", label: "Notdienst" },
];

const trustBadges = [
  { icon: Shield, text: "TÜV-zertifiziert" },
  { icon: CheckCircle2, text: "Versichert & haftpflichtgeschützt" },
  { icon: Clock, text: "Schnelle Reaktionszeiten" },
  { icon: Award, text: "Alles aus einer Hand" },
];

const services = [
  {
    icon: Building2,
    title: "Objektbetreuung / Hausmeisterservice",
    desc: "Technisches Gebäudemanagement, regelmäßige Begehungen, Winterdienst und Grünanlagenpflege – zuverlässig und dokumentiert.",
    image: buildingImg,
  },
  {
    icon: Wrench,
    title: "Sanierungen & Renovierungen",
    desc: "Von der Schönheitsrenovierung bis zur Komplettsanierung – termingerecht und budgettreu. Alles aus einer Hand.",
    image: renovationImg,
  },
  {
    icon: Trash2,
    title: "Entsorgung & Entrümpelung",
    desc: "Fachgerechte Entrümpelung und Entsorgung für Privat und Gewerbe – schnell, sauber und umweltgerecht.",
    image: buildingImg,
  },
  {
    icon: Accessibility,
    title: "Barrierefreie Sanierungen",
    desc: "Barrierefreie Umbauten nach DIN 18040 – für Pflegeheime, Seniorenwohnanlagen und Privatimmobilien.",
    image: renovationImg,
  },
  {
    icon: Truck,
    title: "Kleiner Umzugsservice",
    desc: "Unkomplizierter Umzugsservice für Privatkunden – innerhalb Essen und Umgebung.",
    image: buildingImg,
  },
];

const Index = () => {
  return (
    <div className="flex flex-col">
      <HeroSlider />

      {/* Stats */}
      <section className="border-b border-border bg-background">
        <div className="container grid grid-cols-2 gap-6 py-12 md:grid-cols-4">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1} className="text-center">
              <p className="font-display text-3xl font-extrabold text-primary sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Trust */}
      <section className="bg-section-alt">
        <div className="container flex flex-wrap items-center justify-center gap-6 py-8 md:gap-10">
          {trustBadges.map((b) => (
            <div key={b.text} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <b.icon className="h-5 w-5 text-green" />
              {b.text}
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <AnimatedSection className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-green">Unser Leistungsspektrum</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
              Fünf Fachbereiche. Ein kompetenter Partner.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Wir bieten ein vollständiges Dienstleistungsportfolio rund um Ihre Immobilie – von der täglichen Betreuung bis zur umfassenden Sanierung.
            </p>
          </AnimatedSection>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.1}>
                <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:shadow-card-hover h-full flex flex-col">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-primary/10 p-2.5 w-fit">
                      <s.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                    <Link to="/leistungen" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                      Mehr erfahren <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA For Business */}
      <section className="bg-navy py-20">
        <div className="container text-center">
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Für Geschäftskunden</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-primary-foreground sm:text-4xl">
              Großprojekte verdienen Großkunden-Service
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/70">
              Hausverwaltungen, Investoren, Pflegeheim-Betreiber – wir sind Ihr strategischer Partner mit individuellen Rahmenverträgen und priorisiertem Notdienst.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/geschaeftskunden" className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground transition-opacity hover:opacity-90">
                Partnerschaft anfragen <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-20 lg:py-28 bg-section-alt">
        <div className="container">
          <AnimatedSection className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-green">Qualitätssicherung</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground sm:text-4xl">Zertifiziert & Qualifiziert</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Über 30 Jahre kontinuierliche Weiterbildung bei TÜV, Würth Akademie, BGW und weiteren renommierten Institutionen.
            </p>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {["TÜV Rheinland", "Würth Akademie", "BGW", "DSGVO-konform"].map((cert, i) => (
              <AnimatedSection key={cert} delay={i * 0.1}>
                <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-8 text-center shadow-card">
                  <Shield className="mb-3 h-10 w-10 text-primary" />
                  <p className="font-display text-sm font-bold text-foreground">{cert}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Zertifiziert</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <p className="text-sm font-semibold uppercase tracking-widest text-green">Kontakt</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
                Holen Sie sich jetzt Ihr Angebot
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Haben Sie Fragen zu unseren Dienstleistungen oder möchten Sie ein individuelles Angebot? Wir sind für Sie da.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+4915212971388" className="font-medium hover:underline">+49 152 1297 1388</a>
                </div>
                <WhatsAppButton label="Über WhatsApp kontaktieren" />
              </div>
            </AnimatedSection>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
