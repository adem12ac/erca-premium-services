import { AnimatedSection } from "@/components/AnimatedSection";
import { Building2, Wrench, Trash2, Accessibility, Truck, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import renovationImg from "@/assets/renovation.jpeg";
import hausmeisterImg from "@/assets/hausmeister.jpg";
import entruempelungImg from "@/assets/entruempelung.jpg";
import umzugImg from "@/assets/umzugsservice.jpg";
import barrierefreiImg from "@/assets/barrierefrei.jpg";

const services = [
  {
    icon: Building2,
    title: "Objektbetreuung / Hausmeisterservice",
    desc: "Als erfahrener Objektbetreuer übernehmen wir die Verantwortung für den technischen und infrastrukturellen Betrieb Ihrer Immobilien – transparent, zuverlässig und lückenlos dokumentiert.",
    image: hausmeisterImg,
    features: ["Technisches Gebäudemanagement", "Regelmäßige Begehungen & Dokumentation", "Grünanlagenpflege & Außenanlagen", "Winterdienst & Streupflicht", "Sicherheitskontrollgänge", "Kleinreparaturen & Instandhaltung"],
  },
  {
    icon: Wrench,
    title: "Sanierungen & Renovierungen",
    desc: "Von der Schönheitsrenovierung bis zur Komplettsanierung bieten wir das vollständige Handwerks-Paket. Wir koordinieren alle Gewerke und sind Ihr einziger Ansprechpartner.",
    image: renovationImg,
    features: ["Wohnungssanierung nach Mieterwechsel", "Schimmel- & Feuchtigkeitsbeseitigung", "Malerarbeiten & Bodenbeläge", "Badsanierung komplett", "Küchen- & Innenausbau"],
  },
  {
    icon: Trash2,
    title: "Entsorgung & Entrümpelung",
    desc: "Fachgerechte Entrümpelung und Entsorgung für Privatpersonen, Hausverwaltungen und Gewerbetreibende – schnell, sauber und umweltgerecht.",
    image: entruempelungImg,
    features: ["Haushaltsauflösungen", "Kellerentrümpelung", "Sperrmüllentsorgung", "Gewerbeentrümpelung", "Umweltgerechte Entsorgung"],
  },
  {
    icon: Accessibility,
    title: "Barrierefreie Sanierungen",
    desc: "Wir schaffen barrierefreie Wohn- und Lebensräume nach DIN 18040 – für Pflegeheime, Seniorenwohnanlagen und Privatimmobilien.",
    image: barrierefreiImg,
    features: ["Barrierefreie Badsanierung", "Türverbreiterungen & Rampen", "Bodengleiche Duschen", "Haltegriffe & Stützsysteme", "Beratung nach DIN 18040"],
  },
  {
    icon: Truck,
    title: "Umzugsservice",
    desc: "Unkomplizierter Umzugsservice für Privatkunden innerhalb Essen und Umgebung. Wir packen an, damit Sie es nicht müssen.",
    image: umzugImg,
    features: ["Möbeltransport innerhalb der Region", "Auf- und Abbau von Möbeln", "Transportverpackung", "Seniorenumzüge mit besonderer Sorgfalt", "Flexible Terminvereinbarung"],
  },
];

const Leistungen = () => (
  <div className="pt-20">
    {/* Hero */}
    <section className="bg-section-alt py-20 lg:py-28">
      <div className="container text-center">
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-widest text-green">Leistungen</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-foreground sm:text-5xl">Unser Leistungsspektrum</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Fünf Fachbereiche, ein kompetenter Partner. Alles aus einer Hand für Ihre Immobilie.</p>
        </AnimatedSection>
      </div>
    </section>

    {/* Services */}
    {services.map((s, i) => (
      <section key={s.title} className={`py-20 ${i % 2 === 1 ? "bg-section-alt" : ""}`}>
        <div className="container">
          <div className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
            <AnimatedSection className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
              <div className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 mb-4">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-display text-3xl font-extrabold text-foreground">{s.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="mt-6 space-y-3">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-green" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/kontakt" className="mt-8 inline-flex rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90">
                Holen Sie sich jetzt Ihr Angebot
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
              <div className="overflow-hidden rounded-2xl">
                <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    ))}
  </div>
);

export default Leistungen;
