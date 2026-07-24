import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Menu, X, Search } from "lucide-react";
import { useState } from "react";
import { COMPANY, CATEGORIES } from "@/data/catalogue";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [cats, setCats] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background">
      <div className="bg-topbar text-topbar-foreground text-xs">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a href={`mailto:${COMPANY.email}`} className="inline-flex items-center gap-1.5 hover:text-accent">
              <Mail className="h-3.5 w-3.5" /> {COMPANY.email}
            </a>
            <a href={`tel:${COMPANY.phones[0].replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 hover:text-accent">
              <Phone className="h-3.5 w-3.5" /> {COMPANY.phones[0]}
            </a>
          </div>
          <div className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" /> {COMPANY.address}
          </div>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-md bg-brand text-brand-foreground font-display font-bold">Z</div>
            <div className="leading-tight">
              <div className="font-display text-xl font-bold text-brand">
                Zentramed<span className="text-accent">Health</span>
              </div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                {COMPANY.tagline}
              </div>
            </div>
          </Link>
          <div className="hidden flex-1 max-w-md md:block">
            <Link to="/products" className="flex items-center gap-2 rounded-md border border-border bg-muted/50 px-3 py-2 text-sm text-muted-foreground hover:border-brand">
              <Search className="h-4 w-4" /> Search products…
            </Link>
          </div>
          <a
            href={`https://wa.me/${COMPANY.whatsapp}`}
            target="_blank" rel="noreferrer"
            className="hidden rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:brightness-95 md:inline-flex"
          >
            Order via WhatsApp
          </a>
          <button className="md:hidden" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <nav className="border-b border-border bg-brand text-brand-foreground">
        <div className="mx-auto hidden max-w-7xl items-center gap-1 px-4 md:flex">
          <div
            onMouseEnter={() => setCats(true)}
            onMouseLeave={() => setCats(false)}
            className="relative"
          >
            <button className="flex items-center gap-2 bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground">
              <Menu className="h-4 w-4" /> Browse Categories
            </button>
            {cats && (
              <div className="absolute left-0 top-full z-50 w-72 bg-background text-foreground shadow-xl">
                {CATEGORIES.map((c) => (
                  <Link
                    key={c.slug}
                    to="/products/$slug"
                    params={{ slug: c.slug }}
                    className="block border-b border-border px-4 py-2.5 text-sm hover:bg-muted hover:text-brand"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-4 py-3 text-sm font-medium hover:text-accent"
              activeProps={{ className: "px-4 py-3 text-sm font-medium text-accent" }}
            >
              {n.label}
            </Link>
          ))}
        </div>

        {open && (
          <div className="md:hidden">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="block border-b border-brand-foreground/10 px-4 py-3 text-sm" onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              className="block bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground"
            >
              Order via WhatsApp
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-topbar text-topbar-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <div className="font-display text-2xl font-bold">
            Zentramed<span className="text-accent">Health</span>
          </div>
          <p className="mt-3 text-sm text-topbar-foreground/70">{COMPANY.tagline}</p>
          <p className="mt-4 text-sm text-topbar-foreground/70">
            Trusted supplier of medical supplies, equipment and healthcare solutions to hospitals,
            clinics, NGOs and humanitarian organizations across Africa.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-topbar-foreground/80">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-accent">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold">Top Categories</h4>
          <ul className="mt-4 space-y-2 text-sm text-topbar-foreground/80">
            {CATEGORIES.slice(0, 5).map((c) => (
              <li key={c.slug}>
                <Link to="/products/$slug" params={{ slug: c.slug }} className="hover:text-accent">{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-topbar-foreground/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5" /> {COMPANY.address}</li>
            {COMPANY.phones.map((p) => (
              <li key={p} className="flex gap-2"><Phone className="h-4 w-4 shrink-0 mt-0.5" /> {p}</li>
            ))}
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 mt-0.5" /> {COMPANY.email}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-4 text-xs text-topbar-foreground/60">
          <div>© {new Date().getFullYear()} Zentramed Health. All rights reserved.</div>
          <div>{COMPANY.social}</div>
        </div>
      </div>
    </footer>
  );
}
