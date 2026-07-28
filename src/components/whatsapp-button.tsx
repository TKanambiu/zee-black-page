import { COMPANY } from "@/data/catalogue";

export function WhatsAppButton({
  text,
  label = "Order via WhatsApp",
  size = "md",
  className = "",
  badge = "Fast",
}: {
  text?: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  badge?: string | null;
}) {
  const href = `https://wa.me/${COMPANY.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
  const sizes = {
    sm: "px-4 py-2 text-xs gap-2",
    md: "px-6 py-3 text-sm gap-2.5",
    lg: "px-7 py-3.5 text-base gap-3",
  }[size];
  const iconSize = size === "sm" ? "h-6 w-6" : size === "lg" ? "h-8 w-8" : "h-7 w-7";
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-r from-[#25D366] via-[#22c55e] to-[#128C7E] font-semibold text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.55)] ring-2 ring-white/25 transition hover:scale-[1.03] hover:shadow-[0_14px_40px_-8px_rgba(37,211,102,0.75)] ${sizes} ${className}`}
    >
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className={`relative grid ${iconSize} place-items-center rounded-full bg-white/20 ring-1 ring-white/40 backdrop-blur-sm`}>
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-white" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.03 2C6.494 2 2 6.494 2 12.03c0 1.771.462 3.502 1.34 5.026L2 22l5.09-1.334a10.02 10.02 0 004.93 1.256h.004c5.532 0 10.026-4.494 10.026-10.03C22.05 6.494 17.56 2 12.03 2z"/>
        </svg>
      </span>
      <span className="relative whitespace-nowrap tracking-wide">{label}</span>
      {badge && (
        <span className="relative rounded-full bg-white/25 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white ring-1 ring-white/40">
          {badge}
        </span>
      )}
    </a>
  );
}