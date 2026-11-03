import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Brand } from "@/components/Brand";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { LangProvider, LangSwitch, useLang } from "@/lib/i18n";
import Index from "./pages/Index";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import type { ReactNode } from "react";
function Legal({ children }: { children: ReactNode }) {
  const { lang } = useLang();
  const de = lang === "de";
  return <><header className="wrap legal-nav"><Link to="/" aria-label="ERCA"><Brand /></Link><div className="legal-actions"><LangSwitch /><Link to="/">{de ? "Zur Startseite →" : "Back to home →"}</Link></div></header><main>{children}</main><footer className="wrap legal-nav"><Link to="/impressum">{de ? "Impressum" : "Legal notice"}</Link><Link to="/datenschutz">{de ? "Datenschutz" : "Privacy policy"}</Link></footer></>;
}
export default function App() {
  return <LangProvider><BrowserRouter><ScrollToTop /><Routes>
    <Route path="/" element={<Index />} />
    <Route path="/impressum" element={<Legal><Impressum /></Legal>} />
    <Route path="/datenschutz" element={<Legal><Datenschutz /></Legal>} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes><WhatsAppFloat /></BrowserRouter></LangProvider>;
}
