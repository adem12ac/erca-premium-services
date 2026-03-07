import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Phone, Mail, MapPin, Clock, AlertCircle } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import heroImg from "@/assets/hero-kontakt.webp";

const Kontakt = () => {
  useSEO({
    title: "Kontakt – ERCA Dienstleistungen Essen | Jetzt Angebot anfordern",
    description: "Kontaktieren Sie ERCA Dienstleistungen in Essen. Kostenlose Beratung, schnelle Angebotserstellung. ☎ +49 152 1297 1388. Wir sind für Sie da!",
    canonical: "https://erca-service.de/kontakt",
  });

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy/70" />
      </div>
      <div className="container relative text-center">
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Kontakt</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-white sm:text-5xl">Holen Sie sich jetzt Ihr Angebot</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">Haben Sie Fragen oder möchten ein individuelles Angebot? Wir sind für Sie da.</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <AnimatedSection>
              {[
                { icon: MapPin, label: "Adresse", value: "Juliusstraße 21, 45128 Essen" },
                { icon: Phone, label: "Telefon", value: "+49 152 1297 1388", href: "tel:+4915212971388" },
                { icon: Mail, label: "E-Mail", value: "info@erca-service.de", href: "mailto:info@erca-service.de" },
                { icon: Clock, label: "Öffnungszeiten", value: "Mo–Fr: 08:00–17:00 Uhr" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 shadow-card">
                  <div className="rounded-lg bg-primary/10 p-2.5">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-medium text-foreground hover:underline">{item.value}</a>
                    ) : (
                      <p className="font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-4 rounded-xl border border-accent bg-accent/10 p-4">
                <div className="rounded-lg bg-accent/20 p-2.5">
                  <AlertCircle className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">24h Notdienst</p>
                  <a href="tel:+4915212971388" className="font-bold text-foreground">+49 152 1297 1388</a>
                </div>
              </div>
              <WhatsAppButton label="Über WhatsApp kontaktieren" className="w-full justify-center" />
            </AnimatedSection>
          </div>
          <div className="lg:col-span-3">
            <AnimatedSection className="mb-6">
              <h2 className="font-display text-2xl font-bold text-foreground">Nachricht senden</h2>
              <p className="mt-2 text-sm text-muted-foreground">Wir antworten innerhalb von 24 Stunden.</p>
            </AnimatedSection>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-section-alt">
      <div className="container">
        <AnimatedSection className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-green">Standort</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground sm:text-4xl">So finden Sie uns</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Juliusstraße 21, 45128 Essen – zentral gelegen und gut erreichbar.</p>
        </AnimatedSection>
        <div className="overflow-hidden rounded-2xl border border-border shadow-card">
          <iframe
            title="ERCA Dienstleistungen Standort – Juliusstraße 21, 45128 Essen"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.5!2d7.0069!3d51.4484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8c2c0e0e0e0e1%3A0x0!2sJuliusstra%C3%9Fe%2021%2C%2045128%20Essen!5e0!3m2!1sde!2sde!4v1700000000000"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>
    </section>
  </div>
);

export default Kontakt;
