import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "4915216399326";
const WHATSAPP_MESSAGE = encodeURIComponent("Hallo, ich möchte ein Angebot anfragen.");

export const WhatsAppFloat = () => (
  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green shadow-elevated transition-transform hover:scale-110"
    aria-label="WhatsApp Chat öffnen"
  >
    <MessageCircle className="h-7 w-7 text-primary-foreground" />
  </a>
);

export const WhatsAppButton = ({ label = "WhatsApp Chat", className = "" }: { label?: string; className?: string }) => (
  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 rounded-lg bg-green px-6 py-3 font-semibold text-primary-foreground transition-all hover:opacity-90 ${className}`}
  >
    <MessageCircle className="h-5 w-5" />
    {label}
  </a>
);
