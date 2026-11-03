import { useLang } from "@/lib/i18n";

const Datenschutz = () => {
  const de = useLang().lang === "de";
  return (
    <div className="legal-page wrap">
      <h1>{de ? "Datenschutzerklärung" : "Privacy policy"}</h1>
      <h2>{de ? "1. Datenschutz auf einen Blick" : "1. Privacy at a glance"}</h2>
      <p>{de ? "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen." : "The following notes give a simple overview of what happens to your personal data when you visit this website."}</p>
      <h2>{de ? "2. Verantwortlicher" : "2. Controller"}</h2>
      <p>ERCA Dienstleistungen<br />Erkan Catak<br />Juliusstraße 21<br />45128 Essen<br />E-Mail: info@erca-service.de<br />{de ? "Telefon" : "Phone"}: +49 152 12971388</p>
      <h2>{de ? "3. Anfrageformular" : "3. Enquiry form"}</h2>
      <p>{de ? "Das Anfrageformular erstellt lokal einen E-Mail-Entwurf in Ihrem E-Mail-Programm. Erst wenn Sie diesen absenden, erhalten wir Ihre Angaben und verwenden sie zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b DSGVO). Die Website selbst speichert keine Formulareingaben." : "The enquiry form creates an email draft locally in your email program. Only when you send it do we receive your details and use them to process your enquiry (Art. 6(1)(b) GDPR). The website itself does not store form entries."}</p>
      <h2>{de ? "4. Google Maps" : "4. Google Maps"}</h2>
      <p>{de ? "Die Karte von Google Maps (Google Ireland Limited) wird erst nach Klick auf „Karte laden“ geladen. Dabei werden Daten wie Ihre IP-Adresse an Google übertragen (Art. 6 Abs. 1 lit. a DSGVO)." : "The Google Maps map (Google Ireland Limited) is only loaded after you click “Load map”. Data such as your IP address is then transmitted to Google (Art. 6(1)(a) GDPR)."}</p>
      <h2>{de ? "5. WhatsApp" : "5. WhatsApp"}</h2>
      <p>{de ? "Über den WhatsApp-Button gelangen Sie zu WhatsApp (Meta Platforms Ireland Ltd.). Daten werden erst übertragen, wenn Sie den Button anklicken." : "The WhatsApp button takes you to WhatsApp (Meta Platforms Ireland Ltd.). Data is only transmitted once you click the button."}</p>
      <h2>{de ? "6. Spracheinstellung" : "6. Language setting"}</h2>
      <p>{de ? "Ihre gewählte Sprache wird ausschließlich lokal in Ihrem Browser gespeichert." : "Your chosen language is stored only locally in your browser."}</p>
      <h2>{de ? "7. Ihre Rechte" : "7. Your rights"}</h2>
      <p>{de ? "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch sowie ein Beschwerderecht bei einer Aufsichtsbehörde." : "You have the right to access, rectification, erasure, restriction of processing, data portability and objection, as well as the right to lodge a complaint with a supervisory authority."}</p>
      {!de && <p className="legal-note">This English version is provided for convenience. The German version is legally binding.</p>}
    </div>
  );
};

export default Datenschutz;
