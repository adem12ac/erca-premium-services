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
import { LangSwitch, useLang } from "@/lib/i18n";

const servicesDe = [
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
const navDe = [
  ["Leistungen", "#leistungen"],
  ["Über ERCA", "#geschichte"],
  ["Netzwerk", "#netzwerk"],
  ["Ablauf", "#ablauf"],
];

const servicesEn = [
  { id: "ladenbau", n: "01", title: "Shop fitting", lead: "Retail spaces that bring your brand to life.", image: imgLaden, alt: "Modern shop fitting with illuminated wooden shelves and a sales counter", text: "From the first spatial concept to opening day: we align design, fit-out and furnishing so your space works – for customers and staff.", details: ["Space planning & design", "Coordination of fit-out work", "Interior furnishing with partner companies"] },
  { id: "innenausbau", n: "02", title: "Interior fit-out", lead: "Turning floor space into a well-thought-out room.", image: imgInnen, alt: "Interior fit-out with drywall and a glass partition in an office", text: "We combine your ideas with thoughtful interior design. Each step of the fit-out is planned together and coordinated with the right partner companies.", details: ["Interior planning", "Coordination of all partners involved", "Matching materials & furnishings"] },
  { id: "renovierungen", n: "03", title: "Renovations", lead: "Rethinking existing spaces – with respect for what is there.", image: imgReno, alt: "Freshly renovated living room with herringbone parquet and stucco", text: "Rethinking existing rooms: together we decide what stays and what may change. We then accompany the renovation through to completion.", details: ["Discuss the existing space & your wishes", "Plan scope and schedule", "Support the work through to completion"] },
];
const navEn = [["Services", "#leistungen"], ["About ERCA", "#geschichte"], ["Network", "#netzwerk"], ["Process", "#ablauf"]];

export default function Home() {
  const { lang } = useLang();
  const de = lang === "de";
  const T = (d: string, e: string) => (de ? d : e);
  const services = de ? servicesDe : servicesEn;
  const nav = de ? navDe : navEn;
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
        {T("Zum Inhalt springen", "Skip to content")}
      </a>
      <div className="topline">
        <div className="wrap">
          <span>{T("ESSEN · EUROPAWEIT VERNETZT", "ESSEN · CONNECTED ACROSS EUROPE")}</span>
          <a href="tel:+4915212971388">
            +49 152 12971388 <ArrowUpRight size={13} />
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
          <div className="header-tools"><LangSwitch />
          <a href="#kontakt" className="button button-small header-cta">
            {T("Projekt besprechen", "Discuss a project")} <ArrowUpRight size={17} />
          </a></div>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? T("Menü schließen","Close menu") : T("Menü öffnen","Open menu")}
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
            {[...nav, [T("Kontakt","Contact"), "#kontakt"]].map(([label, href]) => (
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
              <span /> {T("LADENBAU · INNENAUSBAU · RENOVIERUNGEN", "SHOP FITTING · INTERIOR FIT-OUT · RENOVATIONS")}
            </p>
            <h1 className="anim-in" style={{ animationDelay: "0.25s" }}>
              {T("Räume, die wirken.", "Spaces that make an impact.")}
              <br />
              <em>{T("Von der Idee bis zur Übergabe.", "From idea to handover.")}</em>
            </h1>
            <p className="banner-lead anim-in" style={{ animationDelay: "0.45s" }}>
              {T("30 Jahre Erfahrung, ein europaweites Netzwerk und ein persönlicher Ansprechpartner – Erkan Catak begleitet Ihr Projekt von der ersten Skizze bis zum letzten Detail.", "30 years of experience, a Europe-wide network and one personal contact – Erkan Catak guides your project from the first sketch to the last detail.")}
            </p>
            <div className="hero-actions anim-in" style={{ animationDelay: "0.6s" }}>
              <a href="#kontakt" className="button">
                {T("Projekt unverbindlich anfragen", "Request a free consultation")} <ArrowUpRight size={19} />
              </a>
              <a href="#leistungen" className="banner-link">
                {T("Leistungen ansehen", "View services")} <ArrowRight size={17} />
              </a>
            </div>
            <div className="banner-stats anim-in" style={{ animationDelay: "0.8s" }}>
              <div><strong>30</strong><span>{T("Jahre Erfahrung", "years of experience")}</span></div>
              <div><strong>3</strong><span>{T("Schwerpunkte", "core services")}</span></div>
              <div><strong>1</strong><span>{T("Ansprechpartner", "personal contact")}</span></div>
            </div>
          </div>
          <BrandWave />
        </section>
        <section id="leistungen" className="section services-section">
          <div className="wrap">
            <div className="section-heading reveal">
              <div>
                <p className="eyebrow">{T("UNSERE LEISTUNGEN", "OUR SERVICES")}</p>
                <h2>
                  {T("Drei Schwerpunkte.", "Three core services.")}
                  <br />
                  {T("Ein Ansprechpartner.", "One contact.")}
                </h2>
              </div>
              <p>
                {T("Planung, Ausbau und Einrichtung aus einer Hand – klar abgestimmt und persönlich begleitet. So bleibt Ihr Projekt übersichtlich, auch wenn viele Gewerke beteiligt sind.", "Planning, fit-out and furnishing from a single source – clearly coordinated and personally supported. Your project stays manageable, even when many trades are involved.")}
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
                      {T(`${service.title} anfragen`, `Enquire about ${service.title}`)} <ArrowUpRight size={18} />
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
              <p className="eyebrow">{T("ERFAHRUNG HAT EINEN NAMEN.", "EXPERIENCE HAS A NAME.")}</p>
              <div>
                30<span>Jahre</span>
              </div>
              <p>
                {T("Menschen. Räume.", "People. Spaces.")}
                <br />
                {T("Gewachsene Verbindungen.", "Lasting connections.")}
              </p>
              <span className="story-rule" />
            </div>
            <div className="story-copy">
              <p className="eyebrow">ERKAN CATAK & ERCA</p>
              <h2>
                {T("Erfahrung im Blick.", "Experience in view.")}
                <br />
                {T("Ihr Projekt im Mittelpunkt.", "Your project at the centre.")}
              </h2>
              <p className="large-copy">
                {T("Hinter ERCA steht Erkan Catak – mit 30 Jahren Erfahrung und der Überzeugung, dass gute Räume mit einem persönlichen Gespräch beginnen.", "Behind ERCA is Erkan Catak – with 30 years of experience and the conviction that good spaces begin with a personal conversation.")}
              </p>
              <p>
                {T("Über die Jahre ist ein weitreichendes Netzwerk aus Kontakten, Beziehungen und Partnerschaften in ganz Europa gewachsen. Dieses Zusammenspiel aus Erfahrung und verlässlichen Verbindungen prägt die Arbeit von ERCA.", "Over the years, an extensive network of contacts, relationships and partnerships has grown across Europe. This combination of experience and reliable connections shapes ERCA's work.")}
              </p>
              <p>
                {T("Ob Ladenausbau, Innenausbau oder Renovierung: Erkan Catak bringt die passenden Menschen und Ideen zusammen. Mit einem Blick für Ihre Wünsche und einer persönlichen Begleitung von der Planung bis zur Fertigstellung.", "Whether shop fitting, interior fit-out or renovation: Erkan Catak brings the right people and ideas together – with an eye for your wishes and personal support from planning to completion.")}
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
                <p className="eyebrow">{T("UNSER NETZWERK", "OUR NETWORK")}</p>
                <h2>
                  {T("In Essen zu Hause.", "At home in Essen.")}
                  <br />
                  <em>{T("In Europa verbunden.", "Connected across Europe.")}</em>
                </h2>
              </div>
              <p>
                {T("Gute Zusammenarbeit kennt keine Grenzen. Unser Netzwerk verbindet Erfahrung vor Ort mit den Möglichkeiten europaweiter Partnerschaften.", "Good collaboration knows no borders. Our network combines local experience with the possibilities of Europe-wide partnerships.")}
              </p>
            </div>
            <div className="network-grid">
              <figure className="network-photo">
                <img src={imgNetwork} alt="Zwei Geschäftspartner reichen sich in einem hellen Verkaufsraum die Hand" width={1200} height={1200} loading="lazy" />
                <figcaption>{T("Europaweit vernetzt · Symbolbild", "Connected across Europe · illustrative image")}</figcaption>
              </figure>
              <div className="network-details">
                {[
                  [
                    T("Kontakte, die verbinden.", "Contacts that connect."),
                    T("Langjährig gewachsene Beziehungen erleichtern die Abstimmung und bringen die richtigen Ansprechpartner für Ihr Vorhaben zusammen.", "Long-standing relationships make coordination easier and bring the right people together for your project."),
                  ],
                  [
                    T("Partner, die ergänzen.", "Partners that complement."),
                    T("Je nach Projekt beziehen wir passende Partnerfirmen ein und koordinieren die Zusammenarbeit für Ladenbau, Innenausbau und Renovierungen.", "Depending on the project, we involve suitable partner companies and coordinate the collaboration for shop fitting, interior fit-out and renovations."),
                  ],
                  [
                    T("Einrichtung, die passt.", "Furnishing that fits."),
                    T("Inneneinrichtung und Möblierung denken wir von Anfang an mit – gemeinsam mit Partnerfirmen und passend zu Ihrem Raumkonzept.", "We consider interior design and furnishing from the start – together with partner companies and matching your spatial concept."),
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
                <p className="eyebrow">{T("SO ARBEITEN WIR", "HOW WE WORK")}</p>
                <h2>
                  {T("Von der ersten Idee.", "From the first idea.")}
                  <br />
                  {T("Bis zum letzten Detail.", "To the last detail.")}
                </h2>
              </div>
              <a href="#kontakt" className="text-link">
                {T("Lassen Sie uns sprechen", "Let's talk")} <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="process-grid">
              {[
                [
                  T("Zuhören.", "Listen."),
                  T("Wir besprechen Ihre Wünsche, den Raum und den Umfang Ihres Vorhabens.", "We discuss your wishes, the space and the scope of your project."),
                ],
                [
                  T("Planen.", "Plan."),
                  T("Wir stimmen Konzept, Materialien und den Ablauf gemeinsam mit Ihnen ab.", "We agree on concept, materials and schedule together with you."),
                ],
                [
                  T("Verbinden.", "Connect."),
                  T("Wir bringen passende Partnerfirmen zusammen und koordinieren die nächsten Schritte.", "We bring suitable partner companies together and coordinate the next steps."),
                ],
                [T("Umsetzen.", "Deliver."), T("Wir begleiten Ausbau und Einrichtung bis zur Fertigstellung.", "We support fit-out and furnishing through to completion.")],
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
                {T("Ihr nächstes Projekt?", "Your next project?")}
                <br />
                <em>{T("Fängt mit uns an.", "Starts with us.")}</em>
              </h2>
              <p className="contact-intro">
                {T("Erzählen Sie uns, was Sie vorhaben.", "Tell us what you have in mind.")}
                <br />
                {T("Erkan Catak freut sich auf Ihre Ideen.", "Erkan Catak looks forward to your ideas.")}
              </p>
              <div className="contact-links">
                <a href="tel:+4915212971388">
                  <Phone size={20} />
                  <span>
                    <small>{T("Telefon & WhatsApp","Phone & WhatsApp")}</small>+49 152 12971388
                  </span>
                  <ArrowUpRight size={20} />
                </a>
                <a href="mailto:info@erca-service.de">
                  <Mail size={20} />
                  <span>
                    <small>Email</small>info@erca-service.de
                  </span>
                  <ArrowUpRight size={20} />
                </a>
              </div>
              <a
                href="https://wa.me/4915212971388"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-link"
              >
                <MessageCircle size={20} /> {T("Direkt über WhatsApp schreiben", "Message us on WhatsApp")}{" "}
                <ArrowUpRight size={17} />
              </a>
            </div>
            <form className="contact-form" onSubmit={prepareEmail}>
              <h3>{T("Was haben Sie vor?", "What are you planning?")}</h3>
              <p>
                {T("Bereiten Sie Ihre Anfrage vor und senden Sie sie anschließend in Ihrem E-Mail-Programm.", "Prepare your enquiry and then send it from your email program.")}
              </p>
              <div className="form-grid">
                <label>
                  {T("Ihr Name *", "Your name *")}
                  <input
                    name="name"
                    autoComplete="name"
                    required
                    maxLength={100}
                    placeholder={T("Vor- und Nachname","First and last name")}
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
                    placeholder={T("ihre@email.de","you@email.com")}
                  />
                </label>
                <label>
                  {T("Telefon", "Phone\n")}
                  <input
                    name="phone"
                    autoComplete="tel"
                    type="tel"
                    maxLength={50}
                    placeholder={T("Für einen Rückruf","For a call back")}
                  />
                </label>
                <label>
                  {T("Ihr Vorhaben", "Your project")}
                  <select name="service" key={lang}>
                    {services.map((sv) => <option key={sv.id}>{sv.title}</option>)}
                    <option>{T("Mehrere Leistungen","Several services")}</option>
                  </select>
                </label>
              </div>
              <label>
                {T("Ihre Idee *", "Your idea *")}
                <textarea
                  name="message"
                  required
                  rows={4}
                  maxLength={2500}
                  placeholder={T("Was möchten Sie verändern? Wo befindet sich das Projekt?","What would you like to change? Where is the project located?")}
                />
              </label>
              <p className="form-privacy">
                {T("Ihre Angaben werden erst versendet, wenn Sie die E-Mail abschicken. Hinweise zur Verarbeitung finden Sie im", "Your details are only sent when you send the email. Information on processing can be found in our")} <Link to="/datenschutz">{T("Datenschutz","privacy policy")}</Link>.
              </p>
              <button type="submit" className="button">
                {T("E-Mail-Anfrage vorbereiten", "Prepare email enquiry")} <ArrowUpRight size={18} />
              </button>
              {emailPrepared && (
                <p role="status" className="form-status">
                  {T("Die Anfrage wurde für Ihr E-Mail-Programm vorbereitet. Bitte senden Sie sie dort ab. Falls sich kein Programm öffnet, schreiben Sie direkt an", "Your enquiry has been prepared in your email program. Please send it there. If no program opens, write directly to")}{" "}
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
            {T("Ladenbau · Innenausbau · Renovierungen","Shop fitting · Interior fit-out · Renovations")}
            <br />
            <strong>{T("Von der Planung bis zur Fertigstellung.", "From planning to completion.")}</strong>
          </p>
          <a href="https://www.erca-service.de">
            www.erca-service.de <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="wrap footer-bottom">
          <span>© {new Date().getFullYear()} ERCA Dienstleistungen · Erkan Catak</span>
          <div>
            <Link to="/impressum">{T("Impressum","Legal notice")}</Link>
            <Link to="/datenschutz">{T("Datenschutz","Privacy policy")}</Link>
            <a href="#">{T("Nach oben ↑", "Back to top ↑")}</a>
          </div>
        </div>
      </footer>
    </>
  );
}
