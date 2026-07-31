import { whatsappLink } from "@/lib/whatsapp";

export function WhatsAppButton({
  text,
  label = "Order via WhatsApp",
  size = "md",
  className = "",
  badge = null,
}: {
  text?: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  badge?: string | null;
}) {
  const href = whatsappLink(text);
  const sizes = {
    sm: "px-4 py-2 text-xs gap-2",
    md: "px-5 py-2.5 text-sm gap-2.5",
    lg: "px-6 py-3 text-base gap-3",
  }[size];
  const iconSize = size === "sm" ? "h-4 w-4" : size === "lg" ? "h-6 w-6" : "h-5 w-5";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`group inline-flex items-center rounded-full bg-[#25D366] font-semibold text-white shadow-md ring-1 ring-black/5 transition hover:bg-[#1ebe57] hover:shadow-lg ${sizes} ${className}`}
    >
      {/* Official WhatsApp glyph */}
      <svg viewBox="0 0 32 32" className={`${iconSize} fill-white`} aria-hidden="true">
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.303.245-.687.245-1.017 0-.187-.13-.317-.315-.416-.516-.259-.63-.359-1.36-.674-.144-.058-.317-.087-.489-.087Z"/>
        <path d="M16.005 0C7.234 0 .137 7.099.137 15.87c0 2.973.816 5.762 2.234 8.135L0 32l8.235-2.63a15.826 15.826 0 0 0 7.77 1.976c8.77 0 15.868-7.099 15.868-15.87S24.775 0 16.005 0Zm0 28.86a13.058 13.058 0 0 1-7.084-2.078L4.104 28.32l1.564-4.616a13.062 13.062 0 0 1-2.503-7.706c0-7.245 5.899-13.144 13.144-13.144s13.144 5.899 13.144 13.144-5.9 13.858-13.448 13.858Z"/>
      </svg>
      <span className="whitespace-nowrap tracking-wide">{label}</span>
      {badge && (
        <span className="rounded-full bg-white/25 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white ring-1 ring-white/40">
          {badge}
        </span>
      )}
    </a>
  );
}
