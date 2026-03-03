import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.jpg";

export const Footer = () => (
  <footer className="bg-navy text-primary-foreground">
    <div className="container py-16">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logo} alt="ERCA" className="mb-4 h-12 w-auto brightness-0 invert" />
          <p className="text-sm leading-relaxed opacity-70">
            Ihr zuverlässiger Partner für erstklassige Immobilienbetreuung in Essen und Region.
          </p>
          <Link to="/kontakt" className="mt-4 inline-block text-sm font-semibold text-accent hover:underline">
            Holen Sie sich jetzt Ihr Angebot →
          </Link>
        </div>
        <div>
          <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider opacity-50">Leistungen</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/leistungen" className="hover:opacity-100 transition-opacity">Objektbetreuung / Hausmeisterservice</Link></li>
            <li><Link to="/leistungen" className="hover:opacity-100 transition-opacity">Sanierungen & Renovierungen</Link></li>
            <li><Link to="/leistungen" className="hover:opacity-100 transition-opacity">Entsorgung & Entrümpelung</Link></li>
            <li><Link to="/leistungen" className="hover:opacity-100 transition-opacity">Barrierefreie Sanierungen</Link></li>
            <li><Link to="/leistungen" className="hover:opacity-100 transition-opacity">Umzugsservice</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider opacity-50">Kontakt</h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> Juliusstraße 21, 45128 Essen</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /> <a href="tel:+4915212971388" className="hover:opacity-100 transition-opacity">+49 152 1297 1388</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /> <a href="mailto:info@erca-service.de" className="hover:opacity-100 transition-opacity">info@erca-service.de</a></li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 shrink-0" /> Mo–Fr: 08:00–17:00 Uhr</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider opacity-50">Rechtliches</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/impressum" className="hover:opacity-100 transition-opacity">Impressum</Link></li>
            <li><Link to="/datenschutz" className="hover:opacity-100 transition-opacity">Datenschutz</Link></li>
          </ul>
          <div className="mt-6">
            <p className="text-xs font-bold uppercase tracking-wider opacity-50 mb-2">24h Notdienst</p>
            <a href="tel:+4915212971388" className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-bold text-accent-foreground">
              <Phone className="h-4 w-4" /> Jetzt anrufen
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-xs opacity-40">
        © {new Date().getFullYear()} ERCA Dienstleistungen. Alle Rechte vorbehalten.
      </div>
    </div>
  </footer>
);
