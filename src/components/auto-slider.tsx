import { useEffect, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  items: ReactNode[];
  intervalMs?: number;
  className?: string;
};

/** One-at-a-time auto-advancing slider. Slides right-to-left, pauses on hover. */
export function AutoSlider({ items, intervalMs = 2600, className = "" }: Props) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = items.length;

  useEffect(() => {
    if (paused || n <= 1) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), intervalMs);
    return () => clearInterval(t);
  }, [paused, n, intervalMs]);

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{ width: `${n * 100}%`, transform: `translateX(-${i * (100 / n)}%)` }}
        >
          {items.map((child, idx) => (
            <div key={idx} className="shrink-0 px-2" style={{ width: `${100 / n}%` }}>
              {child}
            </div>
          ))}
        </div>
      </div>

      <button
        aria-label="Previous"
        onClick={() => setI((v) => (v - 1 + n) % n)}
        className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-background p-2 shadow-lg ring-1 ring-border hover:text-accent md:block"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Next"
        onClick={() => setI((v) => (v + 1) % n)}
        className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-background p-2 shadow-lg ring-1 ring-border hover:text-accent md:block"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="mt-6 flex justify-center gap-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-accent" : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"}`}
          />
        ))}
      </div>
    </div>
  );
}