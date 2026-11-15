export const CONTACT = {
  phoneDisplay: "+49 1521 6399326",
  phoneHref: "tel:+4915216399326",
  whatsappNumber: "4915216399326",
} as const;

export const whatsappHref = (message: string) =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
