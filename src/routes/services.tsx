import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { PageHero } from "./about";
import { Wrench, GraduationCap, Truck, Search, Stethoscope, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Zentramed Health" },
      { name: "description", content: "Installation, maintenance, training, humanitarian supply and custom sourcing services from Zentramed Health." },
      { property: "og:title", content: "Zentramed Health Services" },
      { property: "og:description", content: "End-to-end support for hospitals, clinics and NGOs." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  { icon: Wrench, title: "Equipment Installation & Commissioning", body: "Professional installation of medical, laboratory and imaging equipment with full commissioning support." },
  { icon: Stethoscope, title: "Preventive Maintenance & Repair", body: "Scheduled maintenance contracts and rapid on-site repair to keep your equipment running." },
  { icon: GraduationCap, title: "Operator Training", body: "Hands-on training for clinical and lab staff on the equipment we supply." },
  { icon: HeartHandshake, title: "Humanitarian & NGO Supply", body: "Bulk supply to humanitarian organizations and government programs with reliable logistics." },
  { icon: Search, title: "Custom Sourcing", body: "Can't find what you need? We source certified products globally on request." },
  { icon: Truck, title: "Regional Delivery", body: "Timely and secure delivery across Kenya and the wider East African region." },
];

function ServicesPage() {
  return (
    <div>
      <SiteHeader />
      <PageHero title="Our Services" subtitle="End-to-end support for every healthcare facility we serve" />
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="rounded-xl border border-border bg-background p-6">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-accent/15 text-accent">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-brand">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
