import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const COOKIE_KEY = "erca_cookie_consent";

type ConsentState = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const getStoredConsent = (): ConsentState | null => {
  try {
    const stored = localStorage.getItem(COOKIE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

export const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      // Small delay so banner doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (state: ConsentState) => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(state));
    setVisible(false);
  };

  const acceptAll = () => saveConsent({ necessary: true, analytics: true, marketing: true });
  const acceptNecessary = () => saveConsent({ necessary: true, analytics: false, marketing: false });
  const saveSelection = () => saveConsent(consent);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
      role="dialog"
      aria-label="Cookie-Einstellungen"
    >
      <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-6 shadow-elevated">
        <h3 className="font-display text-lg font-bold text-foreground">🍪 Cookie-Einstellungen</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung zu bieten. Technisch notwendige Cookies sind für den Betrieb der Website erforderlich.
          Mehr dazu in unserer{" "}
          <Link to="/datenschutz" className="underline text-primary">
            Datenschutzerklärung
          </Link>.
        </p>

        {showSettings && (
          <div className="mt-4 space-y-3">
            <label className="flex items-center gap-3 text-sm">
              <input type="checkbox" checked disabled className="h-4 w-4 accent-primary rounded" />
              <span className="font-medium text-foreground">Notwendig</span>
              <span className="text-muted-foreground">– Für den Betrieb der Website erforderlich</span>
            </label>
            <label className="flex items-center gap-3 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={consent.analytics}
                onChange={(e) => setConsent({ ...consent, analytics: e.target.checked })}
                className="h-4 w-4 accent-primary rounded"
              />
              <span className="font-medium text-foreground">Analyse</span>
              <span className="text-muted-foreground">– Hilft uns die Website zu verbessern</span>
            </label>
            <label className="flex items-center gap-3 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={consent.marketing}
                onChange={(e) => setConsent({ ...consent, marketing: e.target.checked })}
                className="h-4 w-4 accent-primary rounded"
              />
              <span className="font-medium text-foreground">Marketing</span>
              <span className="text-muted-foreground">– Für personalisierte Inhalte</span>
            </label>
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            onClick={acceptAll}
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Alle akzeptieren
          </button>
          {showSettings ? (
            <button
              onClick={saveSelection}
              className="rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Auswahl speichern
            </button>
          ) : (
            <button
              onClick={() => setShowSettings(true)}
              className="rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Einstellungen
            </button>
          )}
          <button
            onClick={acceptNecessary}
            className="rounded-lg px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Nur notwendige
          </button>
        </div>
      </div>
    </div>
  );
};
