import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { whatsappLink } from "@/lib/whatsapp";
import { COMPANY, formatKES } from "@/data/catalogue";

export const Route = createFileRoute("/featured-products")({
  head: () => ({
    meta: [
      { title: "Featured Products | Dialysis, qPCR, HIV Kits & Ophthalmic" },
      {
        name: "description",
        content:
          "Zentramed Health featured equipment: free WT-T6000S hemodialysis machine placement programme, VQ200 qPCR system, HIV 1+2 rapid test kits and the AST-1000 ophthalmic workstation.",
      },
      { property: "og:title", content: "Featured Products — Zentramed Health" },
      {
        property: "og:description",
        content:
          "Flagship medical equipment from Zentramed Health, including our free hemodialysis machine placement programme.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FeaturedProductsPage,
});

/** Image that simply disappears if the file has not been uploaded yet. */
function SafeImg({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [ok, setOk] = useState(true);
  if (!ok) return null;
  return <img src={src} alt={alt} loading="lazy" onError={() => setOk(false)} className={className} />;
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-featured px-3 py-1 text-xs font-bold uppercase tracking-wider text-featured-foreground">
      {children}
    </span>
  );
}

function Tick({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-featured" />
      <span>{children}</span>
    </li>
  );
}

function Enquire({ product, className = "" }: { product: string; className?: string }) {
  return (
    <a
      href={whatsappLink(`Hello ${COMPANY.name}, I would like more information on the ${product}.`)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-featured px-6 py-3 text-sm font-bold text-featured-foreground shadow-md transition hover:brightness-105 ${className}`}
    >
      Enquire on WhatsApp →
    </a>
  );
}

function FeaturedProductsPage() {
  return (
    <div>
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-topbar text-topbar-foreground">
        <div className="absolute inset-0 opacity-25 [background:radial-gradient(circle_at_20%_20%,var(--featured),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-20">
          <Badge>Featured</Badge>
          <h1 className="mt-4 font-display text-3xl font-bold md:text-5xl">Featured Products & Programmes</h1>
          <p className="mt-4 max-w-2xl text-white/75">
            Our flagship equipment lines — dialysis, molecular diagnostics, rapid testing and eye care —
            available with placement programmes, financing options and full technical support.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
            <a href="#dialysis" className="rounded-full border border-white/30 px-4 py-2 hover:bg-white/10">Hemodialysis Placement</a>
            <a href="#qpcr" className="rounded-full border border-white/30 px-4 py-2 hover:bg-white/10">VQ200 qPCR System</a>
            <a href="#hiv" className="rounded-full border border-white/30 px-4 py-2 hover:bg-white/10">HIV 1+2 Rapid Test</a>
            <a href="#ophthalmic" className="rounded-full border border-white/30 px-4 py-2 hover:bg-white/10">AST-1000 Workstation</a>
          </div>
        </div>
      </section>

      {/* 1. Dialysis placement programme */}
      <section id="dialysis" className="scroll-mt-24 bg-featured-soft">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Badge>Free Placement Programme</Badge>
              <h2 className="mt-4 font-display text-3xl font-bold text-brand md:text-4xl">
                Free Hemodialysis Machine Placement Program
              </h2>
              <p className="mt-2 text-lg font-semibold text-foreground">
                Hemodialysis Device — Model WT-T6000S (Online HDF)
              </p>
              <p className="mt-4 text-muted-foreground">
                Increase your dialysis capacity without the burden of a large upfront investment. We
                place the WT-T6000S (Online HDF) hemodialysis device in eligible hospitals and dialysis
                centres at no initial cost through our Equipment Placement Program.
              </p>
              <div className="mt-6 rounded-xl border-2 border-featured bg-background p-5">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Equipment cost to your facility</div>
                <div className="mt-1 font-display text-3xl font-bold text-brand">KES 0 upfront</div>
                <div className="mt-1 text-sm text-muted-foreground">Ownership transfers after 5 years · consumables agreement applies</div>
              </div>
              <Enquire product="WT-T6000S Hemodialysis Placement Program" className="mt-6" />
            </div>

            <div className="grid gap-6 lg:col-span-7 lg:grid-cols-2">
              <SafeImg
                src="/featured/dialysis-wt-t6000s.jpg"
                alt="WT-T6000S Online HDF hemodialysis machine"
                className="col-span-full h-64 w-full rounded-xl bg-white object-contain p-4 shadow-[var(--shadow-card)]"
              />
              <div className="rounded-xl bg-background p-6 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-lg font-semibold text-brand">Program Benefits</h3>
                <ul className="mt-4 space-y-3">
                  <Tick>No upfront equipment purchase cost.</Tick>
                  <Tick>Certified medical device meeting applicable quality and regulatory standards.</Tick>
                  <Tick>Flexible payment arrangements for approved hospitals, within mutually agreed timelines.</Tick>
                  <Tick>Reliable supply of premium dialysis consumables.</Tick>
                  <Tick>Professional installation, training and technical support (where applicable).</Tick>
                  <Tick>Full ownership transferred to your facility after five (5) years, subject to the consumables supply agreement.</Tick>
                </ul>
              </div>
              <div className="rounded-xl bg-background p-6 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-lg font-semibold text-brand">How the Program Works</h3>
                <ol className="mt-4 space-y-4">
                  {[
                    "Your hospital receives a WT-T6000S (Online HDF) hemodialysis machine at no upfront cost.",
                    "The facility agrees to purchase its dialysis consumables from us for the duration of the agreement.",
                    "Approved hospitals may benefit from flexible payment terms for consumables based on agreed credit arrangements.",
                    "On successful completion of the five-year agreement, ownership of the machine transfers to your hospital at no additional cost.",
                  ].map((s, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-featured font-display text-sm font-bold text-featured-foreground">
                        {i + 1}
                      </span>
                      <span className="text-sm leading-relaxed text-muted-foreground">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="col-span-full rounded-xl border border-border bg-background p-6">
                <h3 className="font-display text-lg font-semibold text-brand">Ideal For</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Public Hospitals", "Private Hospitals", "Dialysis Centres", "Renal Care Clinics", "Institutions expanding dialysis services"].map((t) => (
                    <span key={t} className="rounded-full border border-featured/50 bg-featured-soft px-4 py-1.5 text-sm font-medium text-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                  Contact us today to discuss eligibility, financing arrangements and how your facility can
                  benefit from our Dialysis Machine Placement Program. Terms and conditions apply —
                  eligibility, credit approval and contractual requirements are subject to assessment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. qPCR VQ200 */}
      <section id="qpcr" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Badge>Molecular Diagnostics</Badge>
              <h2 className="mt-4 font-display text-3xl font-bold text-brand md:text-4xl">
                VQ200 Digital PCR / qPCR System
              </h2>
              <p className="mt-4 text-muted-foreground">
                A compact, fully integrated quantitative PCR platform for laboratories running infectious
                disease, oncology and molecular screening workloads. Absolute quantification without
                standard curves, with a walk-away workflow that frees up bench time.
              </p>
              <ul className="mt-6 space-y-3">
                <Tick>Droplet-based absolute quantification — no standard curve required.</Tick>
                <Tick>High sensitivity for low-copy targets and rare-variant detection.</Tick>
                <Tick>Multi-channel fluorescence detection for multiplex assays.</Tick>
                <Tick>Integrated droplet generation, amplification and reading in one workflow.</Tick>
                <Tick>Intuitive analysis software with exportable, audit-ready reports.</Tick>
                <Tick>Installation, operator training and ongoing service support included.</Tick>
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Enquire product="VQ200 qPCR System" />
                <a
                  href="/featured/qPCR-VQ200-EN.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-brand px-6 py-3 text-sm font-bold text-brand hover:bg-brand hover:text-brand-foreground"
                >
                  Download brochure (PDF)
                </a>
              </div>
              <p className="mt-3 text-sm font-semibold text-muted-foreground">Price on request — configuration dependent.</p>
            </div>
            <SafeImg
              src="/featured/vq200-qpcr.jpg"
              alt="VQ200 qPCR digital PCR system"
              className="h-80 w-full rounded-xl bg-white object-contain p-6 shadow-[var(--shadow-card)]"
            />
          </div>
        </div>
      </section>

      {/* 3. HIV rapid test */}
      <section id="hiv" className="scroll-mt-24 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <img
              src="/Diagnostic_Kit.png"
              alt="Diagnostic Kit for HIV 1+2 antibody rapid test"
              loading="lazy"
              className="order-2 h-80 w-full rounded-xl bg-white object-contain p-6 shadow-[var(--shadow-card)] lg:order-1"
            />
            <div className="order-1 lg:order-2">
              <Badge>Rapid Testing</Badge>
              <h2 className="mt-4 font-display text-3xl font-bold text-brand md:text-4xl">
                Diagnostic Kit for HIV (1+2) Antibody — Colloidal Gold
              </h2>
              <p className="mt-4 text-muted-foreground">
                A rapid, single-use immunochromatographic test for the qualitative detection of antibodies
                to HIV-1 and HIV-2 in human serum, plasma or whole blood. Designed for clinics, outreach
                screening programmes and laboratory settings where results are needed on the spot.
              </p>
              <ul className="mt-6 space-y-3">
                <Tick>Results in roughly 15 minutes — no instrumentation required.</Tick>
                <Tick>Works with serum, plasma or whole blood samples.</Tick>
                <Tick>Colloidal gold immunochromatography with a built-in procedural control line.</Tick>
                <Tick>Room-temperature storage; long shelf life for field and outreach programmes.</Tick>
                <Tick>Individually foil-pouched with desiccant, buffer and disposable dropper.</Tick>
                <Tick>Suitable for NGO, humanitarian and mass-screening deployments — bulk pricing available.</Tick>
              </ul>
              <div className="mt-6 rounded-xl border border-border bg-background p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Catalogue price</span>
                <div className="font-display text-2xl font-bold text-brand">{formatKES(9500)}</div>
                <div className="text-sm text-muted-foreground">Reseller / trade: {formatKES(8500)} · bulk quotes on request</div>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Enquire product="HIV (1+2) Antibody Diagnostic Kit" />
                <a
                  href="/featured/HIV-1-2-Antibody-Colloidal-Gold.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-brand px-6 py-3 text-sm font-bold text-brand hover:bg-brand hover:text-brand-foreground"
                >
                  Download insert (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AST-1000 */}
      <section id="ophthalmic" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <Badge>Eye Care</Badge>
              <h2 className="mt-4 font-display text-3xl font-bold text-brand md:text-4xl">
                AST-1000 Ophthalmic Workstation
              </h2>
              <p className="mt-4 text-muted-foreground">
                Enhance your eye care services with a modern ophthalmic workstation designed for efficient
                and accurate patient examinations.
              </p>
              <h3 className="mt-8 font-display text-lg font-semibold text-brand">Features</h3>
              <ul className="mt-4 space-y-3">
                <Tick>Ergonomic workstation design.</Tick>
                <Tick>Smooth electric table controls.</Tick>
                <Tick>Integrated ophthalmic examination equipment.</Tick>
                <Tick>User-friendly touchscreen interface.</Tick>
                <Tick>Ideal for hospitals, eye clinics and optical practices.</Tick>
                <Tick>Built for reliability and everyday clinical use.</Tick>
              </ul>
              <h3 className="mt-8 font-display text-lg font-semibold text-brand">Why choose the AST-1000?</h3>
              <p className="mt-2 text-muted-foreground">
                Deliver accurate eye examinations with equipment designed to improve workflow, patient
                comfort and diagnostic efficiency.
              </p>
              <p className="mt-4 text-sm font-semibold text-muted-foreground">Price on request — configuration dependent.</p>
              <Enquire product="AST-1000 Ophthalmic Workstation" className="mt-6" />
            </div>
            <div className="overflow-hidden rounded-xl bg-topbar shadow-[var(--shadow-card)]">
              <video
                src="/featured/ast-1000.mp4"
                controls
                playsInline
                muted
                loop
                preload="metadata"
                poster="/featured/ast-1000-poster.jpg"
                className="h-full max-h-[520px] w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="rounded-2xl bg-brand p-8 text-brand-foreground">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-bold">Talk to a specialist about these programmes</h3>
              <p className="mt-1 text-brand-foreground/80">
                Eligibility, financing, installation and training — we handle it end to end.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Enquire product="featured products range" />
              <Link to="/contact" className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-bold hover:bg-white/10">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}