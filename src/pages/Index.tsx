import { AnimatedSection } from "@/components/AnimatedSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ContactForm } from "@/components/ContactForm";
import { HeroSlider } from "@/components/HeroSlider";
import { BeforeAfterSection } from "@/components/BeforeAfterSlider";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, Award, Wrench, Building2, Trash2, Accessibility, Truck, CheckCircle2, Phone } from "lucide-react";
import renovationImg from "@/assets/renovation.jpeg";
import hausmeisterImg from "@/assets/hausmeister.jpg";
import entruempelungImg from "@/assets/entruempelung.jpg";
import umzugImg from "@/assets/umzugsservice.jpg";
import barrierefreiImg from "@/assets/barrierefrei.jpg";
import buildingImg from "@/assets/building.jpeg";

import { useSEO } from "@/hooks/useSEO";

// Certificate thumbnails
import cert01 from "@/assets/imgur/img18.jpeg";
import cert02 from "@/assets/imgur/img16.jpeg";
import cert03 from "@/assets/imgur/img17.jpeg";
import cert04 from "@/assets/imgur/img19.jpeg";

const stats = [
  { value: "30+", label: "Jahre Erfahrung" },
  { value: "25+", label: "Zertifikate" },
  { value: "100+", label: "Zufriedene Kunden" },
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
    image: hausmeisterImg,
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
    image: entruempelungImg,
  },
  {
    icon: Accessibility,
    title: "Barrierefreie Sanierungen",
    desc: "Barrierefreie Umbauten nach DIN 18040 – für Pflegeheime, Seniorenwohnanlagen und Privatimmobilien.",
    image: barrierefreiImg,
  },
  {
    icon: Truck,
    title: "Umzugsservice",
    desc: "Unkomplizierter Umzugsservice für Privatkunden – innerhalb Essen und Umgebung.",
    image: umzugImg,
  },
];

const certPreviews = [
  { img: cert01, label: "TÜV SÜD – Aufzugswärter" },
  { img: cert02, label: "TÜV – Brandschutztüren" },
  { img: cert03, label: "TÜV – Haustechnik B" },
  { img: cert04, label: "Elektrotechnik – EuP" },
];

const Index = () => {
  useSEO({
    title: "ERCA Dienstleistungen Essen – Hausmeisterservice, Sanierung & Gebäudeservice",
    description: "ERCA Dienstleistungen in Essen: Hausmeisterservice, Sanierungen, Entrümpelung, barrierefreie Umbauten & Umzugsservice. Über 30 Jahre Erfahrung. ✓ TÜV-zertifiziert.",
    canonical: "https://erca-service.de/",
  });
  return (
    <div className="flex flex-col">
      <HeroSlider />

      {/* Stats */}
      <section className="border-b border-border bg-background">
        <div className="container grid grid-cols-3 gap-8 py-14">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1} className="text-center">
              <p className="font-display text-4xl font-bold text-primary sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Trust */}
      <section className="bg-section-alt" aria-label="Vertrauenssignale">
        <div className="container flex flex-wrap items-center justify-center gap-8 py-8 md:gap-12">
          {trustBadges.map((b) => (
            <div key={b.text} className="flex items-center gap-2.5 text-sm font-medium text-muted-foreground">
              <b.icon className="h-5 w-5 text-green" aria-hidden="true" />
              {b.text}
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32" aria-labelledby="services-heading">
        <div className="container">
          <AnimatedSection className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">Unser Leistungsspektrum</p>
            <h2 id="services-heading" className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-[2.75rem]">
              Fünf Fachbereiche. Ein kompetenter Partner.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground leading-relaxed">
              Wir bieten ein vollständiges Dienstleistungsportfolio rund um Ihre Immobilie – von der täglichen Betreuung bis zur umfassenden Sanierung.
            </p>
          </AnimatedSection>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.08}>
                <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:shadow-card-hover h-full flex flex-col">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-primary/8 p-3 w-fit">
                      <s.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                    <Link to="/leistungen" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                      Mehr erfahren <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After */}
      <BeforeAfterSection />

      {/* CTA For Business */}
      <section className="relative overflow-hidden py-24" aria-labelledby="business-heading">
        <div className="absolute inset-0 -z-10">
          <img src={buildingImg} alt="" className="h-full w-full object-cover" loading="lazy" aria-hidden="true" />
          <div className="absolute inset-0 bg-foreground/80 backdrop-blur-sm" />
        </div>
        <div className="container text-center">
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Für Geschäftskunden</p>
            <h2 id="business-heading" className="mt-4 font-display text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-[2.75rem]">
              Großprojekte verdienen Großkunden-Service
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-primary-foreground/70 leading-relaxed">
              Hausverwaltungen, Investoren, Pflegeheim-Betreiber – wir sind Ihr strategischer Partner mit individuellen Rahmenverträgen.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/geschaeftskunden"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Partnerschaft anfragen <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Certificates Preview */}
      <section className="py-24 lg:py-32 bg-section-alt" aria-labelledby="cert-heading">
        <div className="container">
          <AnimatedSection className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">Qualitätssicherung</p>
            <h2 id="cert-heading" className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Zertifiziert & Qualifiziert
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground leading-relaxed">
              Über 30 Jahre kontinuierliche Weiterbildung bei TÜV, Würth Akademie, BGW und weiteren renommierten Institutionen.
            </p>
          </AnimatedSection>
          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {certPreviews.map((cert, i) => (
              <AnimatedSection key={cert.label} delay={i * 0.1}>
                <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:shadow-card-hover">
                  <div className="aspect-[3/4] overflow-hidden bg-muted">
                    <img
                      src={cert.img}
                      alt={`Zertifikat ${cert.label}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <p className="font-display text-sm font-bold text-foreground">{cert.label}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">Zertifiziert</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-10 text-center">
            <Link
              to="/zertifikate"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-primary px-7 py-3.5 font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Alle Zertifikate ansehen <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 lg:py-32" aria-labelledby="contact-heading">
        <div className="container">
          <div className="grid gap-14 lg:grid-cols-2">
            <AnimatedSection>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green">Kontakt</p>
              <h2 id="contact-heading" className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                Holen Sie sich jetzt Ihr Angebot
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Haben Sie Fragen zu unseren Dienstleistungen oder möchten Sie ein individuelles Angebot? Wir sind für Sie da.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
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
