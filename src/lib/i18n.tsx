import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "de" | "en";
const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: "de", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => (typeof window !== "undefined" && localStorage.getItem("erca-lang") === "en" ? "en" : "de"));
  useEffect(() => {
    localStorage.setItem("erca-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);

export function LangSwitch() {
  const { lang, setLang } = useLang();
  return (
    <div className="lang-switch" role="group" aria-label={lang === "de" ? "Sprache wählen" : "Choose language"}>
      {(["de", "en"] as Lang[]).map((l) => (
        <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
