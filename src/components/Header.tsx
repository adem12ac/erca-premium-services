import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-new.png";

const navItems = [
  { label: "Startseite", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Geschäftskunden", href: "/geschaeftskunden" },
  { label: "Privatkunden", href: "/privatkunden" },
  { label: "Produkte & Preise", href: "/produkte" },
  { label: "Zertifikate", href: "/zertifikate" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-border/40 bg-background/95 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" aria-label="ERCA Startseite">
          <img src={logo} alt="ERCA Dienstleistungen" className="h-10 w-auto" style={{ filter: "none" }} />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`rounded-lg px-3 py-2 text-[13px] font-medium transition-colors hover:bg-muted ${
                location.pathname === item.href ? "text-primary font-semibold" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+4915212971388"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Jetzt anrufen: +49 152 1297 1388"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Jetzt anrufen · +49 152 1297 1388
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 hover:bg-muted lg:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden" role="navigation" aria-label="Mobile Navigation">
          <nav className="container flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-muted ${
                  location.pathname === item.href ? "text-primary font-semibold bg-muted" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+4915212971388"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              +49 152 1297 1388
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
