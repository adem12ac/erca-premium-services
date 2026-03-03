import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";

interface ContactFormProps {
  prefilledProduct?: string;
  variant?: "default" | "product";
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  consent?: string;
}

export const ContactForm = ({ prefilledProduct, variant = "default" }: ContactFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (form: HTMLFormElement): boolean => {
    const data = new FormData(form);
    const newErrors: FormErrors = {};
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!name || name.length < 2) newErrors.name = "Bitte geben Sie Ihren Namen ein (mind. 2 Zeichen).";
    if (name && name.length > 100) newErrors.name = "Name darf maximal 100 Zeichen lang sein.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    if (!message || message.length < 10) newErrors.message = "Bitte schreiben Sie mindestens 10 Zeichen.";
    if (message && message.length > 2000) newErrors.message = "Nachricht darf maximal 2000 Zeichen lang sein.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate(e.currentTarget)) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-xl bg-green/10 p-8 text-center">
        <p className="font-display text-xl font-bold text-foreground">Vielen Dank für Ihre Anfrage!</p>
        <p className="mt-2 text-muted-foreground">Wir melden uns innerhalb von 24 Stunden bei Ihnen unter der von Ihnen angegebenen E-Mail-Adresse oder Telefonnummer.</p>
      </div>
    );
  }

  const inputClass = "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary";
  const errorClass = "text-xs text-destructive mt-1";

  return (
    <AnimatedSection>
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-name" className="mb-1.5 block text-sm font-medium text-foreground">Name *</label>
            <input id="cf-name" name="name" required type="text" className={inputClass} placeholder="Ihr Name" maxLength={100} />
            {errors.name && <p className={errorClass}>{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="cf-email" className="mb-1.5 block text-sm font-medium text-foreground">E-Mail *</label>
            <input id="cf-email" name="email" required type="email" className={inputClass} placeholder="ihre@email.de" maxLength={255} />
            {errors.email && <p className={errorClass}>{errors.email}</p>}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-phone" className="mb-1.5 block text-sm font-medium text-foreground">Telefon</label>
            <input id="cf-phone" name="phone" type="tel" className={inputClass} placeholder="+49 ..." maxLength={30} />
          </div>
          <div>
            <label htmlFor="cf-subject" className="mb-1.5 block text-sm font-medium text-foreground">
              {variant === "product" ? "Produkt" : "Betreff"}
            </label>
            <input
              id="cf-subject"
              name="subject"
              type="text"
              defaultValue={prefilledProduct || ""}
              className={inputClass}
              placeholder={variant === "product" ? "Produktname" : "Betreff"}
              maxLength={200}
            />
          </div>
        </div>
        <div>
          <label htmlFor="cf-message" className="mb-1.5 block text-sm font-medium text-foreground">Nachricht *</label>
          <textarea id="cf-message" name="message" required rows={4} className={`${inputClass} resize-none`} placeholder="Ihre Nachricht..." maxLength={2000} />
          {errors.message && <p className={errorClass}>{errors.message}</p>}
        </div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input required type="checkbox" name="consent" className="mt-1 h-4 w-4 rounded border-input accent-primary" />
          <span className="text-xs text-muted-foreground leading-relaxed">
            Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und für Rückfragen gespeichert werden. Weitere Informationen finden Sie in unserer <a href="/datenschutz" className="underline">Datenschutzerklärung</a>. *
          </span>
        </label>
        <button
          type="submit"
          className="w-full rounded-lg bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
        >
          {variant === "product" ? "Angebot anfragen" : "Holen Sie sich jetzt Ihr Angebot"}
        </button>
      </form>
    </AnimatedSection>
  );
};
