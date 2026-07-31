import { COMPANY } from "@/data/catalogue";

/** Official business number in international format, digits only. */
export const WHATSAPP_NUMBER = (COMPANY.whatsapp || "254722708420").replace(/\D/g, "");

/** Builds a WhatsApp chat link that works on mobile app, desktop app and web. */
export function whatsappLink(text?: string) {
  const base = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`;
  return text ? `${base}&text=${encodeURIComponent(text)}` : base;
}

/** Opens WhatsApp in a new tab; falls back to same-tab if popups are blocked. */
export function openWhatsApp(text?: string) {
  const url = whatsappLink(text);
  const win = window.open(url, "_blank", "noopener,noreferrer");
  if (!win) window.location.href = url;
}
