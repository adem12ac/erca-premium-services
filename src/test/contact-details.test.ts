import { describe, expect, it } from "vitest";
import { CONTACT, whatsappHref } from "@/lib/contact";

describe("contact details", () => {
  it("uses only the requested phone number", () => {
    expect(CONTACT.phoneDisplay).toBe("+49 1521 6399326");
    expect(CONTACT.phoneHref).toBe("tel:+4915216399326");
  });

  it("uses the same number for WhatsApp", () => {
    expect(whatsappHref("Hallo")).toBe("https://wa.me/4915216399326?text=Hallo");
  });
});
