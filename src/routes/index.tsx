import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { CATEGORIES, COMPANY } from "@/data/catalogue";
import aboutImg from "@/assets/about.jpg";
import { ArrowRight, Sparkles, Briefcase, Users, Globe, ClipboardCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CategoryMarquee } from "@/components/category-marquee";


const SLIDES = [
  {
    img: "/hero1.webp",
    eyebrow: "Molecular Diagnostics",
    title: "Yuanzan VQ-200",
    accent: "qPCR System.",
    body: "True diagnostic freedom — a high-precision, 96-well real-time PCR system that is completely open and affordable.",
    bullets: [
      "Consumable freedom: works with any brand of tubes, strips and plates",
      "Built-in 9\" touchscreen with embedded computer — no external PC",
      "Elite thermal uniformity ≤ ± 0.15°C, beating industry standards",
      "Motorized lid & auto-loading chamber — ready for robotic integration",
    ],
    waText: "Hello Zentramed Health, I'd like to order the Yuanzan VQ-200 qPCR System.",
  },
  {
    img: "/hero2.webp",
    eyebrow: "Ophthalmic Solutions",
    title: "Ophthalmic Refraction",
    accent: "Unit — Eye Exam Workshop.",
    body: "Complete ophthalmic refraction workstations for hospitals, clinics and optical centres — accurate, ergonomic and clinic-ready.",
    bullets: [
      "Integrated chair, stand and instrument arms for full eye exams",
      "Precision refraction, tonometry and slit-lamp mounting",
      "Smooth motorised height and positioning controls",
      "Installation, calibration and operator training included",
    ],
    waText: "Hello Zentramed Health, I'd like to order the Ophthalmic Refraction Unit.",
  },
  {
    img: "/hero3.webp",
    eyebrow: "Rapid Diagnostics",
    title: "HIV Rapid",
    accent: "Test Kit.",
    body: "Laboratory-grade accuracy right at the point of care — rapid, reliable and equipment-free screening.",
    bullets: [
      "100% accuracy — certified sensitivity and specificity",
      "Ultra-fast results in 15–25 minutes",
      "Micro sample: only 40µl whole blood, serum or plasma",
      "WHO PQ & CE IVDR compliant · stable 24 months at 4–30°C",
    ],
    waText: "Hello Zentramed Health, I'd like to order the HIV Rapid Test Kits.",
  },
  {
    img: "/hero4.webp",
    eyebrow: "Renal Care",
    title: "Wesley W-T6008S",
    accent: "Hemodialysis Machine.",
    body: "Advanced blood purification for acute and chronic renal failure — intelligent automation with rigorous real-time monitoring.",
    bullets: [
      "All-in-one therapy: HD, on-line HDF and isolated ultrafiltration",
      "Closed volume balance chamber for hyper-accurate fluid control",
      "15\" touchscreen with guided visual and audible alarms",
      "30-minute backup battery keeps the blood pump running on power loss",
    ],
    waText: "Hello Zentramed Health, I'd like to order the Wesley W-T6008S Hemodialysis Machine.",
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
            <div key={idx} className="relative h-full shrink-0 bg-brand" style={{ width: `${100 / SLIDES.length}%` }}>
              <img src={s.img} alt="" className="h-full w-full object-contain md:object-cover object-center" />
              <div className="pointer-events-none absolute inset-y-0 left-0 w-full md:w-2/3" style={{ background: "var(--gradient-hero)" }} />
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
              <div>
                <div className="font-display text-2xl font-bold text-brand">15+ Years</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Industry expertise</div>
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
          <div className="mt-10">
            <CategoryMarquee categories={CATEGORIES} />
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
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Equipment Installation", body: "Professional installation of hospital, laboratory and imaging equipment." },
            { title: "Maintenance & Repair", body: "Preventive maintenance contracts and rapid on-site repair services." },
            { title: "Training & Commissioning", body: "Operator training and commissioning to get your team confident from day one." },
            { title: "Humanitarian Supply", body: "Bulk supply to NGOs and government programs with reliable logistics." },
            { title: "Custom Sourcing", body: "Can't find what you need? We source certified products globally on request." },
            { title: "Regional Delivery", body: "Timely and secure delivery across Kenya and East Africa." },
          ].map((s, idx) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-background p-7 shadow-sm transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
            >
              <div className="flex items-baseline justify-between border-b border-border pb-3">
                <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-accent">
                  0{idx + 1}
                </span>
                <span className="font-display text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Service
                </span>
              </div>
              <div className="mt-5">
                <h3 className="font-display text-lg font-bold text-brand">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Why Choose Us — stats layout */}
      <WhyChooseUsSection />

      {/* Brand Partnerships */}
      <PartnershipsSection />

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
            <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer" className="rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground hover:brightness-95">
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
  // Duplicate for seamless marquee loop
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];
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

        {/* Animated marquee of client "passports" */}
        <div
          className="group relative mt-14 overflow-hidden"
          style={{
            maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="flex w-max gap-6 animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused]">
            {loop.map((t, i) => (
              <article
                key={i}
                className="w-[320px] shrink-0 rounded-2xl bg-background p-6 shadow-sm ring-1 ring-border md:w-[380px]"
              >
                <div className="flex items-center gap-3 border-b border-dashed border-border pb-3">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-brand font-display text-base font-bold text-brand-foreground">
                    {t.initials}
                  </div>
                  <div className="flex-1">
                    <div className="font-display text-sm font-semibold text-brand">{t.name}</div>
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{t.role}</div>
                  </div>
                  <span className="rounded border border-accent/40 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-accent">
                    Verified
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{t.quote}"</p>
              </article>
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

const PARTNERS = [
  { name: "3M", domain: "3m.com" },
  { name: "Omron", domain: "omronhealthcare.com" },
  { name: "Mindray", domain: "mindray.com" },
  { name: "Olympus", domain: "olympus-global.com" },
  { name: "Sritrang", domain: "sritranggloves.com" },
  { name: "Polymed", domain: "polymedicure.com" },
  { name: "Medica", domain: "medicagroup.com" },
  { name: "Haier", domain: "haiermedical.com" },
];

function PartnershipsSection() {
  return (
    <section className="bg-muted/30 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-accent">
            <span className="h-px w-10 bg-accent" /> Global Manufacturers <span className="h-px w-10 bg-accent" />
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand md:text-4xl">Our Brand Partnerships</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            We partner with ISO-certified global manufacturers to bring you trusted medical technology.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
          {PARTNERS.map((p) => (
            <div
              key={p.name}
              className="group relative flex aspect-[5/3] items-center justify-center overflow-hidden rounded-2xl border-4 border-brand bg-background shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)] ring-1 ring-brand/20 transition hover:-translate-y-1.5 hover:border-accent hover:shadow-[0_18px_40px_-14px_rgba(0,0,0,0.35)]"
              title={p.name}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-accent/5" />
              <div className="relative flex h-full w-full flex-col items-center justify-center px-4">
                <img
                  src={`https://logo.clearbit.com/${p.domain}`}
                  alt={`${p.name} logo`}
                  loading="lazy"
                  className="max-h-16 max-w-[80%] object-contain transition duration-300 group-hover:scale-105"
                  onError={(e) => {
                    const el = e.currentTarget;
                    el.replaceWith(Object.assign(document.createElement("span"), {
                      className: "font-display text-2xl font-extrabold tracking-tight text-brand",
                      textContent: p.name,
                    }));
                  }}
                />
                <span className="mt-3 text-xs font-bold uppercase tracking-widest text-brand/80">
                  {p.name}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-brand via-accent to-brand" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  const stats = [
    { icon: Briefcase, value: 15, suffix: "+", label: "Years" },
    { icon: Users, value: 2500, suffix: "+", label: "Happy Clients" },
    { icon: ClipboardCheck, value: 500, suffix: "+", label: "Products" },
    { icon: Globe, value: 5, suffix: "", label: "Countries" },
  ];
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="font-display text-3xl font-bold text-accent md:text-4xl">Why Choose Us</h2>
        <p className="mt-6 max-w-5xl text-muted-foreground md:text-lg">
          As a trusted supplier of{" "}
          <span className="font-semibold text-accent">end-to-end medical equipment and solutions</span>{" "}
          across East Africa, Zentramed Health is your comprehensive source for healthcare supplies.
          Whether you're outfitting a rural clinic, equipping a referral hospital or managing a
          humanitarian program, our depth of experience and adaptability allow us to meet healthcare
          demands at every scale. With operations reaching five countries and a dedicated team of
          specialists and biomedical engineers, we strive to be your trusted partner in delivering
          superior care through timely, high-quality solutions.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="text-center">
                <div className="font-display text-5xl font-extrabold text-foreground md:text-6xl">
                  <CountUp end={s.value} />{s.suffix}
                </div>
                <div className="mt-3 font-display text-lg font-bold text-foreground">{s.label}</div>
                <div className="mt-5 grid place-items-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-accent/10 text-accent">
                    <Icon className="h-8 w-8" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

