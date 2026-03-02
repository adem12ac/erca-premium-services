import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";

interface ContactFormProps {
  prefilledProduct?: string;
  variant?: "default" | "product";
}

export const ContactForm = ({ prefilledProduct, variant = "default" }: ContactFormProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl bg-green/10 p-8 text-center">
        <p className="font-display text-xl font-bold text-foreground">Vielen Dank für Ihre Anfrage!</p>
        <p className="mt-2 text-muted-foreground">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
      </div>
    );
  }

  return (
    <AnimatedSection>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">Name *</label>
            <input required type="text" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Ihr Name" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">E-Mail *</label>
            <input required type="email" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary" placeholder="ihre@email.de" />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">Telefon</label>
            <input type="tel" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary" placeholder="+49 ..." />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              {variant === "product" ? "Produkt" : "Betreff"}
            </label>
            <input
              type="text"
              defaultValue={prefilledProduct || ""}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder={variant === "product" ? "Produktname" : "Betreff"}
            />
          </div>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Nachricht *</label>
          <textarea required rows={4} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary resize-none" placeholder="Ihre Nachricht..." />
        </div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input required type="checkbox" className="mt-1 h-4 w-4 rounded border-input accent-primary" />
          <span className="text-xs text-muted-foreground leading-relaxed">
            Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und für Rückfragen gespeichert werden. Weitere Informationen finden Sie in unserer <a href="/datenschutz" className="underline">Datenschutzerklärung</a>. *
          </span>
        </label>
        <button
          type="submit"
          className="w-full rounded-lg bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
        >
          {variant === "product" ? "Angebot anfragen" : "Nachricht senden"}
        </button>
      </form>
    </AnimatedSection>
  );
};
