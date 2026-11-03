import { useLang } from "@/lib/i18n";

const Impressum = () => {
  const de = useLang().lang === "de";
  return (
    <div className="legal-page wrap">
      <h1>{de ? "Impressum" : "Legal notice"}</h1>
      <h2>{de ? "Angaben gemäß § 5 DDG" : "Information pursuant to § 5 DDG (German Digital Services Act)"}</h2>
      <p>ERCA Dienstleistungen<br />{de ? "Inhaber" : "Owner"}: Erkan Catak<br />Juliusstraße 21<br />45128 Essen<br />{de ? "Deutschland" : "Germany"}</p>
      <h2>{de ? "Kontakt" : "Contact"}</h2>
      <p>{de ? "Telefon / WhatsApp" : "Phone / WhatsApp"}: <a href="tel:+4915212971388">+49 152 12971388</a><br />E-Mail: <a href="mailto:info@erca-service.de">info@erca-service.de</a></p>
      <h2>{de ? "Verantwortlich für den Inhalt" : "Responsible for content"}</h2>
      <p>Erkan Catak, Juliusstraße 21, 45128 Essen</p>
      <h2>{de ? "Verbraucherstreitbeilegung" : "Consumer dispute resolution"}</h2>
      <p>{de ? "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen." : "We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board."}</p>
      <h2>{de ? "Haftung für Inhalte" : "Liability for content"}</h2>
      <p>{de ? "Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen." : "As a service provider, we are responsible for our own content on these pages in accordance with general laws. However, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity."}</p>
      <h2>{de ? "Haftung für Links" : "Liability for links"}</h2>
      <p>{de ? "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte übernehmen wir daher keine Gewähr." : "Our website contains links to external third-party websites over whose content we have no control. We therefore accept no liability for such external content."}</p>
      {!de && <p className="legal-note">This English version is provided for convenience. The German version is legally binding.</p>}
    </div>
  );
};

export default Impressum;
