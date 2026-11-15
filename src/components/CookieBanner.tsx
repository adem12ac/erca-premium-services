import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Check, ChevronDown, ShieldCheck, X } from "lucide-react";
import { needsAnswer, readChoice, saveChoices } from "@/lib/consent";
import { useLang } from "@/lib/i18n";

const OPEN_EVENT = "erca:privacy-settings";

export function openPrivacySettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export const CookieBanner = () => {
  const { lang } = useLang();
  const de = lang === "de";
  const [visible, setVisible] = useState(false);
  const [settings, setSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [gpc, setGpc] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const open = () => {
      setAnalytics(readChoice("analytics") === "granted");
      setGpc((navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true);
      setSettings(true);
      setVisible(true);
    };
    window.addEventListener(OPEN_EVENT, open);
    void needsAnswer(["analytics"]).then((needed) => {
      if (needed) setVisible(true);
    });
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  useEffect(() => {
    if (visible) panelRef.current?.focus();
  }, [visible]);

  const close = () => {
    setVisible(false);
    setSettings(false);
  };
  const answer = (choice: "granted" | "denied") => {
    saveChoices({ analytics: choice });
    close();
  };
  const saveSelection = () => {
    saveChoices({ analytics: analytics ? "granted" : "denied" });
    close();
  };

  if (!visible) return null;

  return (
    <aside className="consent-panel" aria-label={de ? "Datenschutz-Einstellungen" : "Privacy settings"}>
      <div className="consent-card" ref={panelRef} tabIndex={-1}>
        <div className="consent-heading">
          <span className="consent-icon"><ShieldCheck size={20} aria-hidden="true" /></span>
          <div>
            <h2>{de ? "Ihre Privatsphäre" : "Your privacy"}</h2>
            <p>
              {de
                ? "Wir zählen Besuche ohne Cookies. Wenn Sie zustimmen, messen wir auch Klicks."
                : "We count visits without cookies. If you accept, we also measure clicks."}
            </p>
          </div>
          <button className="consent-close" type="button" onClick={close} aria-label={de ? "Schließen, ohne Auswahl zu speichern" : "Close without saving a choice"}>
            <X size={18} />
          </button>
        </div>

        {settings && (
          <div className="consent-settings">
            <div className="consent-row">
              <span><strong>{de ? "Notwendig" : "Necessary"}</strong><small>{de ? "Speichert Sprache und Ihre Datenschutz-Auswahl." : "Stores language and your privacy choices."}</small></span>
              <span className="consent-always"><Check size={15} />{de ? "Immer aktiv" : "Always on"}</span>
            </div>
            <div className="consent-row">
              <span><strong>{de ? "Analyse, bereitgestellt von Lovable" : "Analytics, provided by Lovable"}</strong><small>{de ? "Hilft uns, die Nutzung der Website zu verstehen." : "Helps us understand how the website is used."}</small></span>
              <button
                type="button"
                role="switch"
                aria-checked={analytics}
                aria-label={de ? "Analyse erlauben" : "Allow analytics"}
                className={`consent-switch${analytics ? " is-on" : ""}`}
                disabled={gpc}
                onClick={() => setAnalytics((value) => !value)}
              ><span /></button>
            </div>
            {gpc && <p className="consent-gpc">{de ? "Das Datenschutzsignal Ihres Browsers ist aktiv; Analyse bleibt deaktiviert." : "Your browser's privacy signal is active; analytics remains off."}</p>}
            <button className="button consent-save" type="button" onClick={saveSelection}>{de ? "Auswahl speichern" : "Save choices"}</button>
          </div>
        )}

        <div className="consent-actions">
          <button className="button consent-choice" type="button" onClick={() => answer("granted")}>{de ? "Alle akzeptieren" : "Accept all"}</button>
          <button className="button consent-choice consent-reject" type="button" onClick={() => answer("denied")}>{de ? "Alle ablehnen" : "Reject all"}</button>
          <button className="consent-settings-toggle" type="button" aria-expanded={settings} onClick={() => setSettings((value) => !value)}>
            {de ? "Cookie-Einstellungen" : "Cookie settings"}<ChevronDown size={16} className={settings ? "is-open" : ""} />
          </button>
        </div>
        <p className="consent-legal">
          {de ? "Details stehen in der" : "Read more in our"} <Link to="/datenschutz" onClick={close}>{de ? "Datenschutzerklärung" : "privacy policy"}</Link>.
        </p>
      </div>
    </aside>
  );
};
