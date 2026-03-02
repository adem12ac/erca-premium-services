import { AnimatedSection } from "@/components/AnimatedSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ContactForm } from "@/components/ContactForm";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, Award, Wrench, Building2, Thermometer, Home, CheckCircle2, Phone } from "lucide-react";
import renovationImg from "@/assets/renovation.jpeg";
import heatingImg from "@/assets/heating.jpeg";
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
    title: "Sanierung & Renovierung",
    desc: "Von der Schönheitsrenovierung bis zur Komplettsanierung – termingerecht und budgettreu.",
    image: renovationImg,
  },
  {
    icon: Thermometer,
    title: "Heizung & Sanitär",
    desc: "Heizungsinstallation, Badsanierung und 24h-Notdienst. Qualifiziert und normgerecht.",
    image: heatingImg,
  },
  {
    icon: Home,
    title: "Objektbetreuung",
    desc: "Technisches Gebäudemanagement, Begehungen und Dokumentation – transparent und zuverlässig.",
    image: buildingImg,
  },
  {
    icon: Wrench,
    title: "Gebäudeservice",
    desc: "Grünanlagenpflege, Winterdienst, Kleinreparaturen und Sicherheitskontrollgänge.",
    image: buildingImg,
  },
];

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          <img src={renovationImg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
        </div>
        <div className="container relative z-10 py-20">
          <AnimatedSection>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm">
              <Award className="h-4 w-4" /> Über 30 Jahre Expertise · Essen & Region
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.1] text-primary-foreground sm:text-5xl lg:text-6xl">
              Ihr zuverlässiger Partner für erstklassige Immobilienbetreuung
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
              Von Sanierung über Heizung & Sanitär bis zur Objektbetreuung – ERCA Dienstleistungen liefert Handwerksqualität auf höchstem Niveau. Alles aus einer Hand.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Kostenloses Angebot <ArrowRight className="h-4 w-4" />
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
      </section>

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
              Vier Fachbereiche. Ein kompetenter Partner.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Wir bieten ein vollständiges Dienstleistungsportfolio rund um Ihre Immobilie – von der täglichen Betreuung bis zur umfassenden Sanierung.
            </p>
          </AnimatedSection>
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.1}>
                <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:shadow-card-hover">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={s.image} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-primary/10 p-2.5">
                      <s.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
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
              <Link to="/referenzen" className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-7 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10">
                Referenzen ansehen
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
                Wir freuen uns auf Ihre Anfrage
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Haben Sie Fragen zu unseren Dienstleistungen oder möchten Sie ein individuelles Angebot? Wir sind für Sie da.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+4915216399326" className="font-medium hover:underline">+49 152 16 39 93 26</a>
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
