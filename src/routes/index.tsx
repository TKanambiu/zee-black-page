import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { CATEGORIES, COMPANY } from "@/data/catalogue";
import heroImg from "@/assets/hero.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";
import aboutImg from "@/assets/about.jpg";
import { ArrowRight, Wrench, GraduationCap, Truck, Search as SearchIcon, Stethoscope, HeartHandshake, ShieldCheck, Award, Globe2, Headphones, Package, BadgeCheck, Clock, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";


const SLIDES = [
  {
    img: heroImg,
    eyebrow: "Advancing Healthcare & Humanitarian Solutions",
    title: "Leading Medical Equipment",
    accent: "Supplier in East Africa",
    body: "Empowering healthcare professionals with certified global brands, expert technical support, and full-service distribution.",
    cta1: { label: "Shop Products", to: "/products" as const },
    cta2: { label: "Our Services", to: "/services" as const },
  },
  {
    img: hero2,
    eyebrow: "Full-Service Distribution",
    title: "From Wards to Theatres,",
    accent: "we equip every room.",
    body: "Hospital furniture, surgical theatre, imaging, respiratory and neonatal — all under one trusted supplier.",
    cta1: { label: "Explore Catalogue", to: "/products" as const },
    cta2: { label: "Talk to Us", to: "/contact" as const },
  },
  {
    img: hero3,
    eyebrow: "Precision Laboratory Solutions",
    title: "Diagnostics that",
    accent: "professionals trust.",
    body: "Olympus microscopes, hematology analyzers, HemoCue systems, and complete lab consumables.",
    cta1: { label: "View Lab Range", to: "/products/$slug" as const, params: { slug: "laboratory-diagnostics" } },
    cta2: { label: "Request Quote", to: "/contact" as const },
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zentramed Health | Medical Equipment & Supplies in Nairobi, Kenya" },
      { name: "description", content: "Zentramed Health is a trusted Nairobi-based supplier of medical supplies, hospital equipment, laboratory diagnostics and humanitarian healthcare solutions across Africa." },
      { property: "og:title", content: "Zentramed Health | Medical Equipment Supplier in Nairobi" },
      { property: "og:description", content: "Quality medical supplies, hospital equipment and healthcare solutions across Africa." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      <SiteHeader />

      {/* Hero slider — horizontal slide-left with visible imagery */}
      <section className="relative h-[440px] w-full overflow-hidden md:h-[520px]">
        <div
          className="flex h-full transition-transform duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{ width: `${SLIDES.length * 100}%`, transform: `translateX(-${i * (100 / SLIDES.length)}%)` }}
        >
          {SLIDES.map((s, idx) => (
            <div key={idx} className="relative h-full shrink-0" style={{ width: `${100 / SLIDES.length}%` }}>
              <img src={s.img} alt="" className="h-full w-full object-cover brightness-110" />
              <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
              <div className="relative mx-auto flex h-full max-w-7xl items-center px-4">
                <div className="max-w-xl text-white">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/95 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground shadow-lg">
                    <Sparkles className="h-3.5 w-3.5" /> {s.eyebrow}
                  </div>
                  <h1 className="font-display text-4xl font-bold leading-tight drop-shadow-lg md:text-6xl">
                    {s.title}
                    <br />
                    <span className="text-accent">{s.accent}</span>
                  </h1>
                  <p className="mt-5 max-w-lg text-white/95 drop-shadow md:text-lg">{s.body}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      to={s.cta1.to as "/products"}
                      params={"params" in s.cta1 ? (s.cta1 as { params: { slug: string } }).params : undefined}
                      className="rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground shadow-lg transition hover:brightness-95"
                    >
                      {s.cta1.label}
                    </Link>
                    <Link to={s.cta2.to} className="rounded-md border-2 border-white/80 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm hover:bg-white/20">
                      {s.cta2.label} <ArrowRight className="ml-1 inline h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all ${idx === i ? "w-10 bg-accent" : "w-2 bg-white/60 hover:bg-white/90"}`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Trust bar — animated counters */}
      <section className="border-y border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border md:grid-cols-4">
          {[
            { value: 500, suffix: "+", label: "Products in catalogue" },
            { value: 9, suffix: "", label: "Specialised categories" },
            { value: 24, suffix: "/7", label: "WhatsApp response" },
            { value: 100, suffix: "%", label: "Certified sourcing" },
          ].map((f) => (
            <div key={f.label} className="group px-6 py-8 transition hover:bg-muted/40">
              <div className="font-display text-3xl font-bold text-brand md:text-4xl">
                <CountUp end={f.value} />{f.suffix}
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{f.label}</div>
            </div>
          ))}
        </div>
      </section>


      {/* About — editorial, professional */}
      <section className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-2xl border-2 border-accent/40 md:block" />
            <img src={aboutImg} alt="Healthcare professional with instruments" className="relative rounded-2xl shadow-2xl" loading="lazy" />
            <div className="absolute -bottom-8 -right-6 hidden rounded-xl bg-background p-5 shadow-2xl ring-1 ring-border md:block">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-brand text-brand-foreground">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-brand">15+ Years</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Industry expertise</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-accent">
              <span className="h-px w-10 bg-accent" /> About Zentramed Health
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-brand md:text-5xl">
              Advancing healthcare, <span className="italic text-accent">together.</span>
            </h2>
            <div className="mt-6 border-l-2 border-accent/60 pl-5">
              <p className="text-muted-foreground md:text-lg">
                Zentramed Health is a trusted supplier of high-quality medical supplies, equipment and
                solutions to hospitals, clinics, NGOs, government institutions and humanitarian organizations
                across Africa. Our mission is to improve health outcomes by delivering quality, innovation
                and exceptional service.
              </p>
            </div>
            <dl className="mt-8 grid gap-x-6 gap-y-5 sm:grid-cols-2">
              {[
                { t: "Quality Assured Sourcing", d: "ISO-certified suppliers only." },
                { t: "Wide Product Range", d: "9 categories, 500+ SKUs." },
                { t: "Reliable Delivery", d: "Nationwide, cold-chain ready." },
                { t: "Customer-First Support", d: "Dedicated account managers." },
              ].map((v) => (
                <div key={v.t} className="border-t border-border pt-3">
                  <dt className="font-display text-sm font-bold uppercase tracking-wider text-brand">{v.t}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{v.d}</dd>
                </div>
              ))}
            </dl>
            <Link to="/about" className="mt-10 inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-md transition hover:brightness-110">
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories grid */}
      <section className="bg-muted/40 py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-accent">
                <span className="h-px w-10 bg-accent" /> What We Supply
              </div>
              <h2 className="mt-3 font-display text-3xl font-bold text-brand md:text-4xl">Explore Our Categories</h2>
            </div>
            <Link to="/products" className="text-sm font-semibold text-brand hover:text-accent">
              View all products <ArrowRight className="ml-1 inline h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                to="/products/$slug"
                params={{ slug: c.slug }}
                className="group relative overflow-hidden rounded-xl bg-background shadow-sm ring-1 ring-border transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)] hover:ring-brand"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover brightness-110 transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h3 className="font-display text-xl font-bold leading-tight">{c.name}</h3>
                    <p className="mt-1 text-sm text-white/80">{c.tagline}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between px-5 py-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {c.subcategories.reduce((n, s) => n + s.products.length, 0)} items
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-bold text-brand group-hover:text-accent">
                    Browse <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-accent">
            <span className="h-px w-10 bg-accent" /> Our Services <span className="h-px w-10 bg-accent" />
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand md:text-5xl">
            Beyond supply — <span className="text-accent">end-to-end support</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From procurement to installation, training and maintenance — we stand behind every product we deliver.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Wrench, title: "Equipment Installation", body: "Professional installation of hospital, laboratory and imaging equipment." },
            { icon: Stethoscope, title: "Maintenance & Repair", body: "Preventive maintenance contracts and rapid on-site repair services." },
            { icon: GraduationCap, title: "Training & Commissioning", body: "Operator training and commissioning to get your team confident from day one." },
            { icon: HeartHandshake, title: "Humanitarian Supply", body: "Bulk supply to NGOs and government programs with reliable logistics." },
            { icon: SearchIcon, title: "Custom Sourcing", body: "Can't find what you need? We source certified products globally on request." },
            { icon: Truck, title: "Regional Delivery", body: "Timely and secure delivery across Kenya and East Africa." },
          ].map((s, idx) => (
            <div
              key={s.title}
              className="relative overflow-hidden rounded-xl border border-border bg-background p-6 shadow-sm"
            >
              <div className="flex items-baseline justify-between border-b border-border pb-3">
                <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-accent">
                  0{idx + 1}
                </span>
                <span className="font-display text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Service
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-brand">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand via-brand to-topbar text-brand-foreground">
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1.5px, transparent 1.5px), radial-gradient(circle at 80% 60%, white 1.5px, transparent 1.5px)", backgroundSize: "48px 48px" }} />
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-accent">
              <span className="h-px w-10 bg-accent/70" /> Why Zentramed Health <span className="h-px w-10 bg-accent/70" />
            </div>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
              A partner your facility <span className="italic text-accent">can rely on.</span>
            </h2>
            <p className="mt-5 text-brand-foreground/85 md:text-lg">
              From certification to commissioning, we bring world-class standards,
              transparent sourcing and dedicated after-sales support to every order.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: BadgeCheck, t: "Licensed Distributor", d: "Fully registered by the Pharmacy and Poisons Board and Kenya Medical Devices framework." },
              { icon: Award, t: "Certified Global Brands", d: "Direct partnerships with ISO-certified manufacturers in Europe, Asia and North America." },
              { icon: Truck, t: "Nationwide Logistics", d: "Same-day Nairobi dispatch and countrywide delivery — including cold-chain where required." },
              { icon: Wrench, t: "Technical Support", d: "In-house biomedical engineers for installation, calibration, training and on-site service." },
              { icon: HeartHandshake, t: "Humanitarian Ready", d: "Proven track record supplying NGOs, UN programs and government tenders across East Africa." },
              { icon: ShieldCheck, t: "Transparent Pricing", d: "Institutional discounts, itemised quotations and no hidden markups on bulk orders." },
              { icon: Globe2, t: "Custom Sourcing", d: "Global procurement desk sources certified alternatives within 48 hours." },
              { icon: Clock, t: "24/7 Order Line", d: "Dedicated WhatsApp and phone response, seven days a week — including emergency supply." },
            ].map((f, idx) => (
              <div
                key={f.t}
                className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm"
              >
                <div className="flex items-baseline justify-between border-b border-white/10 pb-3">
                  <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-accent">
                    0{idx + 1}
                  </span>
                  <span className="font-display text-[10px] font-semibold uppercase tracking-widest text-brand-foreground/50">
                    Advantage
                  </span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold">{f.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-foreground/75">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA */}
      <section className="bg-topbar text-topbar-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 py-14 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Ready to equip your facility?</h2>
            <p className="mt-2 text-brand-foreground/80">Talk to our team for tailored quotes, bulk orders and technical advice.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={`https://wa.me/${COMPANY.whatsapp}`} className="rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground">
              Order via WhatsApp
            </a>
            <Link to="/contact" className="rounded-md border border-white/70 px-6 py-3 font-semibold hover:bg-white/10">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}

const TESTIMONIALS = [
  {
    quote:
      "Zentramed has been our go-to partner for theatre consumables for over three years. Their response time and product quality are simply unmatched in the region.",
    name: "Dr. Aisha Wanjiru",
    role: "Medical Director, Nairobi Surgical Centre",
    initials: "AW",
  },
  {
    quote:
      "We equipped a 60-bed county hospital with Zentramed — from beds to imaging. Installation was seamless and their after-sales support is world-class.",
    name: "Eng. Peter Kimani",
    role: "Biomedical Lead, County Health Services",
    initials: "PK",
  },
  {
    quote:
      "Reliable, transparent and fast. Zentramed supplied a full humanitarian PPE order for our field mission in under a week. A truly professional team.",
    name: "Sarah Odhiambo",
    role: "Logistics Coordinator, International NGO",
    initials: "SO",
  },
  {
    quote:
      "Their lab team helped us specify, install and train our staff on new hematology analyzers. The precision and follow-through is exceptional.",
    name: "Dr. Michael Otieno",
    role: "Head of Laboratory, Regional Referral Hospital",
    initials: "MO",
  },
];

function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((v) => (v + 1) % TESTIMONIALS.length), 6500);
    return () => clearInterval(t);
  }, []);
  const active = TESTIMONIALS[idx];

  return (
    <section className="relative overflow-hidden bg-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-accent">
            <span className="h-px w-10 bg-accent" /> Trusted by Healthcare Leaders <span className="h-px w-10 bg-accent" />
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand md:text-5xl">
            What our clients say
          </h2>
        </div>

        <div className="relative mt-14">
          <div className="relative overflow-hidden rounded-2xl bg-background p-8 shadow-[var(--shadow-card)] ring-1 ring-border md:p-14">
            <svg
              viewBox="0 0 24 24"
              className="absolute right-8 top-8 h-24 w-24 text-brand/5 md:h-40 md:w-40"
              fill="currentColor"
              aria-hidden
            >
              <path d="M7.17 6C4.32 6 2 8.32 2 11.17V18h6.83V11.17H5.17c0-1.65 1.35-3 3-3V6h-1zm10 0c-2.85 0-5.17 2.32-5.17 5.17V18H19V11.17h-3.83c0-1.65 1.35-3 3-3V6h-1z" />
            </svg>
            <div className="relative">
              <p className="font-display text-xl leading-relaxed text-foreground md:text-3xl md:leading-snug">
                "{active.quote}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-brand font-display text-lg font-bold text-brand-foreground shadow-md">
                  {active.initials}
                </div>
                <div>
                  <div className="font-display font-semibold text-brand">{active.name}</div>
                  <div className="text-sm text-muted-foreground">{active.role}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setIdx(i)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                  i === idx
                    ? "bg-brand text-brand-foreground shadow"
                    : "bg-background text-muted-foreground ring-1 ring-border hover:text-brand"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${i === idx ? "bg-accent" : "bg-muted-foreground/40"}`}
                />
                {t.initials}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 border-t border-border pt-10 sm:grid-cols-3">
          {[
            { value: 150, suffix: "+", label: "Hospitals & clinics served" },
            { value: 40, suffix: "+", label: "NGO & humanitarian partners" },
            { value: 98, suffix: "%", label: "On-time delivery rate" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl font-bold text-brand md:text-6xl">
                <CountUp end={s.value} />{s.suffix}
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({ end, duration = 1800 }: { end: number; duration?: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(end * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return <span ref={ref} className="tabular-nums">{n.toLocaleString()}</span>;
}

