import { MessageCircle } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function WhatsAppFloat() {
  const { lang } = useLang();
  const msg = encodeURIComponent(lang === "de" ? "Hallo, ich möchte ein Projekt anfragen." : "Hello, I would like to enquire about a project.");
  return (
    <a className="wa-float" href={`https://wa.me/4915212971388?text=${msg}`} target="_blank" rel="noopener noreferrer" aria-label={lang === "de" ? "WhatsApp Chat öffnen" : "Open WhatsApp chat"}>
      <MessageCircle size={28} />
      <span>WhatsApp</span>
    </a>
  );
}
