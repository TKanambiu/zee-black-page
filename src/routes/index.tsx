import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { CATEGORIES, COMPANY } from "@/data/catalogue";
import heroImg from "@/assets/hero.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";
import aboutImg from "@/assets/about.jpg";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";


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

      {/* Hero slider */}
      <section className="relative h-[560px] w-full overflow-hidden md:h-[640px]">
        {SLIDES.map((s, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
          >
            <img src={s.img} alt="" className="h-full w-full object-cover" />
            <div
              className="absolute inset-0"
              style={{ background: "var(--gradient-hero)" }}
            />
            <div className="relative mx-auto flex h-full max-w-7xl items-center px-4">
              <div className="max-w-2xl text-white">
                <div className="mb-3 inline-block rounded bg-accent/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
                  {s.eyebrow}
                </div>
                <h1 className="font-display text-4xl font-bold leading-tight md:text-6xl">
                  {s.title}
                  <br />
                  <span className="text-accent">{s.accent}</span>
                </h1>
                <p className="mt-5 max-w-xl text-white/85 md:text-lg">{s.body}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to={s.cta1.to as "/products"}
                    params={"params" in s.cta1 ? (s.cta1 as { params: { slug: string } }).params : undefined}
                    className="rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground hover:brightness-95"
                  >
                    {s.cta1.label}
                  </Link>
                  <Link to={s.cta2.to} className="rounded-md border border-white/70 px-6 py-3 font-semibold hover:bg-white/10">
                    {s.cta2.label} <ArrowRight className="ml-1 inline h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 flex gap-2">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-accent" : "w-2 bg-white/60"}`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Trust bar — typographic, no icons */}
      <section className="border-y border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border md:grid-cols-4">
          {[
            { stat: "500+", label: "Products in catalogue" },
            { stat: "9", label: "Specialised categories" },
            { stat: "24/7", label: "WhatsApp response" },
            { stat: "100%", label: "Certified sourcing" },
          ].map((f) => (
            <div key={f.label} className="px-6 py-8">
              <div className="font-display text-3xl font-bold text-brand md:text-4xl">{f.stat}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{f.label}</div>
            </div>
          ))}
        </div>
      </section>


      {/* About */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="text-sm font-semibold uppercase tracking-widest text-accent">About Zentramed Health</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-brand md:text-4xl">
              Advancing healthcare, <span className="text-accent">together.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Zentramed Health is a trusted supplier of high-quality medical supplies, equipment and
              solutions to hospitals, clinics, NGOs, government institutions and humanitarian organizations
              across Africa. Our mission is to improve health outcomes by delivering quality, innovation
              and exceptional service.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Quality Assured Sourcing",
                "Wide Product Range",
                "Reliable Delivery",
                "Customer-First Support",
              ].map((v) => (
                <li key={v} className="flex items-center gap-2 text-sm">
                  <ShieldCheck className="h-4 w-4 text-accent" /> {v}
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground hover:brightness-110">
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <img src={aboutImg} alt="Healthcare professional with instruments" className="rounded-xl shadow-xl" loading="lazy" />
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-brand p-6 text-brand-foreground shadow-xl md:block">
              <div className="font-display text-3xl font-bold">9</div>
              <div className="text-xs uppercase tracking-widest">Product categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories grid */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-sm font-semibold uppercase tracking-widest text-accent">What We Supply</div>
              <h2 className="mt-2 font-display text-3xl font-bold text-brand md:text-4xl">Explore Our Categories</h2>
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
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
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
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center">
          <div className="text-sm font-semibold uppercase tracking-widest text-accent">Our Services</div>
          <h2 className="mt-2 font-display text-3xl font-bold text-brand md:text-4xl">Beyond supply — end-to-end support</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { title: "Equipment Installation", body: "Professional installation of hospital, laboratory and imaging equipment." },
            { title: "Maintenance & Repair", body: "Preventive maintenance contracts and rapid on-site repair services." },
            { title: "Training & Commissioning", body: "Operator training and commissioning to get your team confident from day one." },
            { title: "Humanitarian Supply", body: "Bulk supply to NGOs and government programs with reliable logistics." },
            { title: "Custom Sourcing", body: "Can't find what you need? We source certified products globally on request." },
            { title: "Consultancy", body: "Advisory on facility set-up, equipment planning and workflow design." },
          ].map((s) => (
            <div key={s.title} className="rounded-xl border border-border bg-background p-6">
              <h3 className="font-display text-lg font-semibold text-brand">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="relative overflow-hidden bg-brand text-brand-foreground">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative mx-auto max-w-7xl px-4 py-24">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-widest text-accent">Why Zentramed Health</div>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-5xl">
              A partner your facility <span className="text-accent">can rely on.</span>
            </h2>
            <p className="mt-4 text-brand-foreground/80 md:text-lg">
              From certification to commissioning, we go beyond supply — bringing world-class standards,
              transparent sourcing and dedicated after-sales support to every order.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "01", t: "Licensed Distributor", d: "Fully registered and licensed by the Pharmacy and Poisons Board and Kenya Medical Devices regulatory framework." },
              { k: "02", t: "Certified Global Brands", d: "Direct partnerships with ISO-certified manufacturers in Europe, Asia and North America." },
              { k: "03", t: "Nationwide Logistics", d: "Same-day Nairobi dispatch and reliable countrywide delivery — including cold-chain where required." },
              { k: "04", t: "Technical Support", d: "In-house biomedical engineers for installation, calibration, training and rapid on-site service." },
              { k: "05", t: "Humanitarian Ready", d: "Proven track record supplying NGOs, UN programs and government tenders across East Africa." },
              { k: "06", t: "Transparent Pricing", d: "Institutional discounts, itemised quotations and no hidden markups on bulk orders." },
              { k: "07", t: "Custom Sourcing", d: "Can't find an item? Our global procurement desk sources certified alternatives within 48 hours." },
              { k: "08", t: "24/7 Order Line", d: "Dedicated WhatsApp and phone response, seven days a week — including emergency supply." },
            ].map((f) => (
              <div key={f.k} className="group relative rounded-xl bg-white/5 p-6 backdrop-blur-sm ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-accent">
                <div className="font-display text-4xl font-bold text-accent/70 group-hover:text-accent">{f.k}</div>
                <h3 className="mt-3 font-display text-lg font-semibold">{f.t}</h3>
                <p className="mt-2 text-sm text-brand-foreground/75">{f.d}</p>
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
          <div className="text-sm font-semibold uppercase tracking-widest text-accent">
            Trusted by Healthcare Leaders
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold text-brand md:text-5xl">
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
            { stat: "150+", label: "Hospitals & clinics served" },
            { stat: "40+", label: "NGO & humanitarian partners" },
            { stat: "98%", label: "On-time delivery rate" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-bold text-brand md:text-4xl">{s.stat}</div>
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

