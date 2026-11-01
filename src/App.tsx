import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Brand } from "@/components/Brand";
import Index from "./pages/Index";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import type { ReactNode } from "react";
function Legal({ children }: { children: ReactNode }) {
  return <><header className="wrap legal-nav"><Link to="/" aria-label="ERCA Startseite"><Brand /></Link><Link to="/">Zur Startseite →</Link></header><main>{children}</main><footer className="wrap legal-nav"><Link to="/impressum">Impressum</Link><Link to="/datenschutz">Datenschutz</Link></footer></>;
}
export default function App() {
  return <BrowserRouter><ScrollToTop /><Routes>
    <Route path="/" element={<Index />} />
    <Route path="/impressum" element={<Legal><Impressum /></Legal>} />
    <Route path="/datenschutz" element={<Legal><Datenschutz /></Legal>} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes></BrowserRouter>;
}
