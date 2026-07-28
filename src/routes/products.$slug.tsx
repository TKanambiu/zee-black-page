import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { getCategory, COMPANY, CATEGORIES, type Category } from "@/data/catalogue";
import { ChevronRight, MessageCircle, Search as SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/products/$slug")({
  validateSearch: (s: Record<string, unknown>): { q?: string } => ({
    q: typeof s.q === "string" ? s.q : undefined,
  }),
  loader: ({ params }): { category: Category } => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.category.name} | Zentramed Health` },
          { name: "description", content: loaderData.category.description },
          { property: "og:title", content: `${loaderData.category.name} | Zentramed Health` },
          { property: "og:description", content: loaderData.category.description },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="p-10 text-center">
      Category not found. <Link to="/products" className="text-accent underline">Back to products</Link>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="p-10 text-center">
      Something went wrong. <button onClick={reset} className="text-accent underline">Retry</button>
    </div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData() as { category: Category };
  const { q: initialQ } = Route.useSearch();
  const [q, setQ] = useState(initialQ ?? "");
  useEffect(() => { if (initialQ !== undefined) setQ(initialQ); }, [initialQ]);
  const totalItems = category.subcategories.reduce((n, s) => n + s.products.length, 0);
  const query = q.trim().toLowerCase();

  return (
    <div>
      <SiteHeader />

      {/* Category hero — named after the category itself */}
      <section className="relative overflow-hidden bg-brand text-brand-foreground">
        <img
          src={category.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-accent">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/products" className="hover:text-white">Catalogue</Link>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-6xl">
            {category.name}
          </h1>
          <p className="mt-4 max-w-2xl text-white/85 md:text-lg">{category.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-white/10 px-3 py-1.5 font-semibold backdrop-blur">
              {totalItems} items
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1.5 font-semibold backdrop-blur">
              {category.subcategories.length} ranges
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
          <aside className="hidden lg:block">
            <div className="font-display font-semibold text-brand">All Categories</div>
            <ul className="mt-3 space-y-1 text-sm">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/products/$slug"
                    params={{ slug: c.slug }}
                    className="block rounded px-3 py-2 hover:bg-muted"
                    activeProps={{ className: "block rounded px-3 py-2 bg-brand text-brand-foreground" }}
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          <div>
            <div className="mb-8 flex items-center gap-3 rounded-xl border-2 border-brand bg-background px-4 py-3 shadow-sm ring-4 ring-brand/10 focus-within:ring-brand/25">
              <SearchIcon className="h-5 w-5 text-brand" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={`Search within ${category.name}…`}
                className="w-full bg-transparent text-base font-medium outline-none placeholder:text-muted-foreground"
              />
              {q && (
                <button onClick={() => setQ("")} className="text-xs font-semibold text-muted-foreground hover:text-brand">Clear</button>
              )}
            </div>
            {category.subcategories.map((sub, si) => (
              (() => {
                const items = query ? sub.products.filter((p) => p.toLowerCase().includes(query)) : sub.products;
                if (query && items.length === 0) return null;
                return (
              <div key={sub.name} className={si === 0 ? "" : "mt-14"}>
                <div className="flex items-baseline justify-between gap-4 border-b-2 border-brand/20 pb-3">
                  <h2 className="font-display text-2xl font-bold text-brand">{sub.name}</h2>
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {items.length} products
                  </span>
                </div>
                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((p) => (
                    <div
                      key={p}
                      className="group overflow-hidden rounded-xl border border-border bg-background transition hover:-translate-y-1 hover:border-brand hover:shadow-[var(--shadow-card)]"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                        <img
                          src={category.image}
                          alt={p}
                          loading="lazy"
                          width={800}
                          height={600}
                          className="h-full w-full object-cover brightness-110 transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/35 to-transparent" />
                        <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-brand shadow">
                          {sub.name}
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="font-display text-base font-semibold text-foreground">{p}</div>
                        <div className="mt-1 text-xs text-muted-foreground">{category.name}</div>
                        <a
                          href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(`Hi Zentramed Health, please send me a quote for: ${p}`)}`}
                          target="_blank" rel="noreferrer"
                          className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:brightness-90"
                        >
                          <MessageCircle className="h-3.5 w-3.5" /> Order via WhatsApp
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
                );
              })()
            ))}
            {query && category.subcategories.every((s) => s.products.filter((p) => p.toLowerCase().includes(query)).length === 0) && (
              <div className="rounded-xl border border-border bg-muted/30 p-10 text-center text-muted-foreground">
                No products in {category.name} match "{q}".
              </div>
            )}
          </div>
        </div>
      </section>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
