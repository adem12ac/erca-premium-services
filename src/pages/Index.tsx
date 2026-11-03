import { Link } from "react-router-dom";
import { useEffect } from "react";
import heroBanner from "@/assets/hero-banner.jpg";
import imgLaden from "@/assets/service-ladenbau.jpg";
import imgInnen from "@/assets/service-innenausbau.jpg";
import imgReno from "@/assets/service-renovierungen.jpg";
import imgNetwork from "@/assets/network-partners.jpg";
import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Phone,
  Mail,
  MessageCircle,
  Ear,
  PencilRuler,
  Handshake,
  Hammer,
  Users,
  Sofa,
} from "lucide-react";
import { Brand, BrandWave } from "../components/Brand";
import { MapEmbed } from "../components/MapEmbed";

const services = [
  {
    id: "ladenbau",
    n: "01",
    title: "Ladenbau",
    lead: "Verkaufsflächen, die Ihre Marke erlebbar machen.",
    image: imgLaden,
    alt: "Moderner Ladenbau mit beleuchteten Holzregalen und Verkaufstheke",
    text: "Vom ersten Raumkonzept bis zur Eröffnung: Wir stimmen Gestaltung, Ausbau und Einrichtung so aufeinander ab, dass Ihre Fläche funktioniert – für Kunden und Team.",
    details: [
      "Raumaufteilung & Gestaltung",
      "Abstimmung der Ausbauarbeiten",
      "Inneneinrichtung & Möblierung mit Partnerfirmen",
    ],
  },
  {
    id: "innenausbau",
    n: "02",
    title: "Innenausbau",
    lead: "Aus Fläche wird ein durchdachter Raum.",
    image: imgInnen,
    alt: "Innenausbau mit Trockenbauwänden und Glastrennwand im Büro",
    text: "Wir verbinden Ihre Vorstellungen mit einer durchdachten Raumgestaltung. Die einzelnen Schritte des Innenausbaus werden gemeinsam geplant und mit den passenden Partnerfirmen abgestimmt.",
    details: [
      "Planung der Innenräume",
      "Koordination der beteiligten Partner",
      "Abgestimmte Materialien & Einrichtung",
    ],
  },
  {
    id: "renovierungen",
    n: "03",
    title: "Renovierungen",
    lead: "Bestehendes neu denken – mit Gefühl für den Bestand.",
    image: imgReno,
    alt: "Frisch renovierter Wohnraum mit Fischgrätparkett und Stuck",
    text: "Bestehende Räume neu denken: Gemeinsam klären wir, was bleiben soll und was sich verändern darf. Anschließend begleiten wir die Renovierung bis zur Fertigstellung.",
    details: [
      "Bestand & Wünsche gemeinsam besprechen",
      "Renovierungsumfang und Ablauf planen",
      "Umsetzung bis zur Fertigstellung begleiten",
    ],
  },
];
const nav = [
  ["Leistungen", "#leistungen"],
  ["Über ERCA", "#geschichte"],
  ["Netzwerk", "#netzwerk"],
  ["Ablauf", "#ablauf"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .section-heading, .story-grid > *, .network-details > div, .process-grid > article, .contact-grid > *");
    els.forEach((el) => el.classList.add("reveal"));
    const io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  const [emailPrepared, setEmailPrepared] = useState(false);
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = `Guten Tag Herr Catak,\n\n${data.get("message")}\n\nLeistung: ${data.get("service")}\nName: ${data.get("name")}\nE-Mail: ${data.get("email")}\nTelefon: ${data.get("phone") || "Nicht angegeben"}`;
    window.location.href = `mailto:info@erca-service.de?subject=${encodeURIComponent(`Projektanfrage: ${data.get("service")}`)}&body=${encodeURIComponent(body)}`;
    setEmailPrepared(true);
  }
  return (
    <>
      <a className="skip-link" href="#inhalt">
        Zum Inhalt springen
      </a>
      <div className="topline">
        <div className="wrap">
          <span>ESSEN · EUROPAWEIT VERNETZT</span>
          <a href="tel:+4920184167404">
            +49 201 8416 7404 <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="wrap header-inner">
          <a href="#" className="brand-link" aria-label="ERCA – zur Startseite">
            <Brand />
          </a>
          <nav className="desktop-nav" aria-label="Hauptnavigation">
            {nav.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <a href="#kontakt" className="button button-small header-cta">
            Projekt besprechen <ArrowUpRight size={17} />
          </a>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav
            id="mobile-menu"
            className="mobile-nav"
            aria-label="Mobile Navigation"
            onKeyDown={(e) => {
              if (e.key === "Escape") setMenuOpen(false);
            }}
          >
            {[...nav, ["Kontakt", "#kontakt"]].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
                <ArrowUpRight size={18} />
              </a>
            ))}
          </nav>
        )}
      </header>
      <main id="inhalt">
        <section className="banner" aria-label="ERCA – Ladenbau, Innenausbau, Renovierungen">
          <div className="banner-media" aria-hidden="true">
            <img src={heroBanner} alt="" width={1920} height={1088} fetchPriority="high" />
          </div>
          <div className="banner-shade" aria-hidden="true" />
          <div className="wrap banner-inner">
            <p className="eyebrow banner-eyebrow anim-in" style={{ animationDelay: "0.1s" }}>
              <span /> LADENBAU · INNENAUSBAU · RENOVIERUNGEN
            </p>
            <h1 className="anim-in" style={{ animationDelay: "0.25s" }}>
              Räume, die wirken.
              <br />
              <em>Von der Idee bis zur Übergabe.</em>
            </h1>
            <p className="banner-lead anim-in" style={{ animationDelay: "0.45s" }}>
              30 Jahre Erfahrung, ein europaweites Netzwerk und ein persönlicher Ansprechpartner –
              Erkan Catak begleitet Ihr Projekt von der ersten Skizze bis zum letzten Detail.
            </p>
            <div className="hero-actions anim-in" style={{ animationDelay: "0.6s" }}>
              <a href="#kontakt" className="button">
                Projekt unverbindlich anfragen <ArrowUpRight size={19} />
              </a>
              <a href="#leistungen" className="banner-link">
                Leistungen ansehen <ArrowRight size={17} />
              </a>
            </div>
            <div className="banner-stats anim-in" style={{ animationDelay: "0.8s" }}>
              <div><strong>30</strong><span>Jahre Erfahrung</span></div>
              <div><strong>3</strong><span>Schwerpunkte</span></div>
              <div><strong>1</strong><span>Ansprechpartner</span></div>
            </div>
          </div>
          <BrandWave />
        </section>
        <section id="leistungen" className="section services-section">
          <div className="wrap">
            <div className="section-heading reveal">
              <div>
                <p className="eyebrow">UNSERE LEISTUNGEN</p>
                <h2>
                  Drei Schwerpunkte.
                  <br />
                  Ein Ansprechpartner.
                </h2>
              </div>
              <p>
                Planung, Ausbau und Einrichtung aus einer Hand – klar abgestimmt und persönlich
                begleitet. So bleibt Ihr Projekt übersichtlich, auch wenn viele Gewerke beteiligt sind.
              </p>
            </div>
            <div className="service-cards">
              {services.map((service, i) => (
                <article className="service-card reveal" style={{ transitionDelay: `${i * 0.12}s` }} key={service.id}>
                  <div className="service-card-media">
                    <img src={service.image} alt={service.alt} width={1200} height={912} loading="lazy" />
                  </div>
                  <div className="service-card-body">
                    <h3>{service.title}</h3>
                    <p className="service-card-lead">{service.lead}</p>
                    <p>{service.text}</p>
                    <ul>
                      {service.details.map((detail) => (
                        <li key={detail}><span /> {detail}</li>
                      ))}
                    </ul>
                    <a className="text-link" href="#kontakt">
                      {service.title} anfragen <ArrowUpRight size={18} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="geschichte" className="section story-section">
          <div className="wrap story-grid">
            <div className="story-number">
              <p className="eyebrow">ERFAHRUNG HAT EINEN NAMEN.</p>
              <div>
                30<span>Jahre</span>
              </div>
              <p>
                Menschen. Räume.
                <br />
                Gewachsene Verbindungen.
              </p>
              <span className="story-rule" />
            </div>
            <div className="story-copy">
              <p className="eyebrow">ERKAN CATAK & ERCA</p>
              <h2>
                Erfahrung im Blick.
                <br />
                Ihr Projekt im Mittelpunkt.
              </h2>
              <p className="large-copy">
                Hinter ERCA steht Erkan Catak – mit 30 Jahren Erfahrung und der Überzeugung, dass
                gute Räume mit einem persönlichen Gespräch beginnen.
              </p>
              <p>
                Über die Jahre ist ein weitreichendes Netzwerk aus Kontakten, Beziehungen und
                Partnerschaften in ganz Europa gewachsen. Dieses Zusammenspiel aus Erfahrung und
                verlässlichen Verbindungen prägt die Arbeit von ERCA.
              </p>
              <p>
                Ob Ladenausbau, Innenausbau oder Renovierung: Erkan Catak bringt die passenden
                Menschen und Ideen zusammen. Mit einem Blick für Ihre Wünsche und einer persönlichen
                Begleitung von der Planung bis zur Fertigstellung.
              </p>
              <div className="story-signoff">
                <strong>Erkan Catak</strong>
                <span>ERCA Dienstleistungen · Essen</span>
              </div>
            </div>
          </div>
        </section>
        <section id="netzwerk" className="section network-section">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">UNSER NETZWERK</p>
                <h2>
                  In Essen zu Hause.
                  <br />
                  <em>In Europa verbunden.</em>
                </h2>
              </div>
              <p>
                Gute Zusammenarbeit kennt keine Grenzen. Unser Netzwerk verbindet Erfahrung vor Ort
                mit den Möglichkeiten europaweiter Partnerschaften.
              </p>
            </div>
            <div className="network-grid">
              <figure className="network-photo">
                <img src={imgNetwork} alt="Zwei Geschäftspartner reichen sich in einem hellen Verkaufsraum die Hand" width={1200} height={1200} loading="lazy" />
                <figcaption>Europaweit vernetzt · Symbolbild</figcaption>
              </figure>
              <div className="network-details">
                {[
                  [
                    "Kontakte, die verbinden.",
                    "Langjährig gewachsene Beziehungen erleichtern die Abstimmung und bringen die richtigen Ansprechpartner für Ihr Vorhaben zusammen.",
                  ],
                  [
                    "Partner, die ergänzen.",
                    "Je nach Projekt beziehen wir passende Partnerfirmen ein und koordinieren die Zusammenarbeit für Ladenbau, Innenausbau und Renovierungen.",
                  ],
                  [
                    "Einrichtung, die passt.",
                    "Inneneinrichtung und Möblierung denken wir von Anfang an mit – gemeinsam mit Partnerfirmen und passend zu Ihrem Raumkonzept.",
                  ],
                ].map(([title, text], i) => (
                  <div key={title}>
                    <span className="icon-badge">{[<Users key="u" size={20} />, <Handshake key="h" size={20} />, <Sofa key="s" size={20} />][i]}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="ablauf" className="section process-section">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">SO ARBEITEN WIR</p>
                <h2>
                  Von der ersten Idee.
                  <br />
                  Bis zum letzten Detail.
                </h2>
              </div>
              <a href="#kontakt" className="text-link">
                Lassen Sie uns sprechen <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="process-grid">
              {[
                [
                  "Zuhören.",
                  "Wir besprechen Ihre Wünsche, den Raum und den Umfang Ihres Vorhabens.",
                ],
                [
                  "Planen.",
                  "Wir stimmen Konzept, Materialien und den Ablauf gemeinsam mit Ihnen ab.",
                ],
                [
                  "Verbinden.",
                  "Wir bringen passende Partnerfirmen zusammen und koordinieren die nächsten Schritte.",
                ],
                ["Umsetzen.", "Wir begleiten Ausbau und Einrichtung bis zur Fertigstellung."],
              ].map(([title, text], i) => (
                <article key={title}>
                  <div className="process-index">
                    <span className="icon-badge">{[<Ear key="e" size={22} />, <PencilRuler key="p" size={22} />, <Handshake key="h" size={22} />, <Hammer key="m" size={22} />][i]}</span>
                    {i < 3 && <ArrowRight size={20} />}
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="kontakt" className="section contact-section">
          <div className="wrap contact-grid">
            <div>
              <p className="eyebrow">KONTAKT</p>
              <h2>
                Ihr nächstes Projekt?
                <br />
                <em>Fängt mit uns an.</em>
              </h2>
              <p className="contact-intro">
                Erzählen Sie uns, was Sie vorhaben.
                <br />
                Erkan Catak freut sich auf Ihre Ideen.
              </p>
              <div className="contact-links">
                <a href="tel:+4915216399326">
                  <Phone size={20} />
                  <span>
                    <small>Mobil</small>+49 152 1639 9326
                  </span>
                  <ArrowUpRight size={20} />
                </a>
                <a href="tel:+4920184167404">
                  <Phone size={20} />
                  <span>
                    <small>Telefon</small>+49 201 8416 7404
                  </span>
                  <ArrowUpRight size={20} />
                </a>
                <a href="mailto:info@erca-service.de">
                  <Mail size={20} />
                  <span>
                    <small>E-Mail</small>info@erca-service.de
                  </span>
                  <ArrowUpRight size={20} />
                </a>
              </div>
              <a
                href="https://wa.me/4915216399326"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-link"
              >
                <MessageCircle size={20} /> Direkt über WhatsApp schreiben{" "}
                <ArrowUpRight size={17} />
              </a>
            </div>
            <form className="contact-form" onSubmit={prepareEmail}>
              <h3>Was haben Sie vor?</h3>
              <p>
                Bereiten Sie Ihre Anfrage vor und senden Sie sie anschließend in Ihrem
                E-Mail-Programm.
              </p>
              <div className="form-grid">
                <label>
                  Ihr Name *
                  <input
                    name="name"
                    autoComplete="name"
                    required
                    maxLength={100}
                    placeholder="Vor- und Nachname"
                  />
                </label>
                <label>
                  E-Mail *
                  <input
                    name="email"
                    autoComplete="email"
                    type="email"
                    required
                    maxLength={150}
                    placeholder="ihre@email.de"
                  />
                </label>
                <label>
                  Telefon
                  <input
                    name="phone"
                    autoComplete="tel"
                    type="tel"
                    maxLength={50}
                    placeholder="Für einen Rückruf"
                  />
                </label>
                <label>
                  Ihr Vorhaben
                  <select name="service" defaultValue="Ladenbau">
                    <option>Ladenbau</option>
                    <option>Innenausbau</option>
                    <option>Renovierungen</option>
                    <option>Mehrere Leistungen</option>
                  </select>
                </label>
              </div>
              <label>
                Ihre Idee *
                <textarea
                  name="message"
                  required
                  rows={4}
                  maxLength={2500}
                  placeholder="Was möchten Sie verändern? Wo befindet sich das Projekt?"
                />
              </label>
              <p className="form-privacy">
                Ihre Angaben werden erst versendet, wenn Sie die E-Mail abschicken. Hinweise zur
                Verarbeitung finden Sie im <Link to="/datenschutz">Datenschutz</Link>.
              </p>
              <button type="submit" className="button">
                E-Mail-Anfrage vorbereiten <ArrowUpRight size={18} />
              </button>
              {emailPrepared && (
                <p role="status" className="form-status">
                  Die Anfrage wurde für Ihr E-Mail-Programm vorbereitet. Bitte senden Sie sie dort
                  ab. Falls sich kein Programm öffnet, schreiben Sie direkt an{" "}
                  <a href="mailto:info@erca-service.de">info@erca-service.de</a>.
                </p>
              )}
            </form>
          </div>
          <MapEmbed />
        </section>
      </main>
      <footer className="site-footer">
        <BrandWave />
        <div className="wrap footer-top">
          <a href="#" aria-label="ERCA – zur Startseite">
            <Brand light />
          </a>
          <p>
            Ladenbau · Innenausbau · Renovierungen
            <br />
            <strong>Von der Planung bis zur Fertigstellung.</strong>
          </p>
          <a href="https://www.erca-service.de">
            www.erca-service.de <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="wrap footer-bottom">
          <span>© {new Date().getFullYear()} ERCA Dienstleistungen · Erkan Catak</span>
          <div>
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutz</Link>
            <a href="#">Nach oben ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}
