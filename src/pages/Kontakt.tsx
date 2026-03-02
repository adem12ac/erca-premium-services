import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Phone, Mail, MapPin, Clock, AlertCircle } from "lucide-react";

const Kontakt = () => (
  <div className="pt-20">
    <section className="bg-section-alt py-20 lg:py-28">
      <div className="container text-center">
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-widest text-green">Kontakt</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-foreground sm:text-5xl">Wir freuen uns auf Ihre Anfrage</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Haben Sie Fragen oder möchten ein individuelles Angebot? Wir sind für Sie da.</p>
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
                { icon: Phone, label: "Telefon", value: "+49 152 16 39 93 26", href: "tel:+4915216399326" },
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
                  <a href="tel:+4915216399326" className="font-bold text-foreground">+49 152 16 39 93 26</a>
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
  </div>
);

export default Kontakt;
