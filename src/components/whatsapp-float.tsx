import { WhatsAppButton } from "@/components/whatsapp-button";

export function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <WhatsAppButton
        text="Hello Zentramed Health, I'd like to inquire about your products."
        label="WhatsApp Us"
        size="md"
        badge={null}
      />
    </div>
  );
}
