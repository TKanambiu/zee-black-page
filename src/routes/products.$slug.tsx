import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { PageHero } from "./about";
import { getCategory, COMPANY, CATEGORIES } from "@/data/catalogue";
import { ChevronRight, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
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
  const { category } = Route.useLoaderData();
  return (
    <div>
      <SiteHeader />
      <PageHero title={category.name} subtitle={category.tagline} />
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-6 flex items-center gap-1 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-brand">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/products" className="hover:text-brand">Products</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{category.name}</span>
        </div>

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
            <p className="text-muted-foreground">{category.description}</p>
            {category.subcategories.map((sub) => (
              <div key={sub.name} className="mt-10">
                <h2 className="font-display text-xl font-semibold text-brand">{sub.name}</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {sub.products.map((p) => (
                    <div key={p} className="rounded-lg border border-border bg-background p-4 transition hover:border-brand hover:shadow-[var(--shadow-card)]">
                      <div className="font-medium text-foreground">{p}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{category.name}</div>
                      <a
                        href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(`Hi Zentramed Health, please send me a quote for: ${p}`)}`}
                        target="_blank" rel="noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:brightness-90"
                      >
                        <MessageCircle className="h-3.5 w-3.5" /> Request quote
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
