import { COMPANY } from "@/data/catalogue";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello Zentramed Health, I'd like to inquire about your products.")}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg hover:brightness-95"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
