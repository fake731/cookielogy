import { CATEGORIES, PRODUCTS } from "@/lib/store/products";
import { ProductCard } from "./ProductCard";

export function Menu() {
  return (
    <div className="space-y-24">
      {CATEGORIES.map((cat) => {
        const items = PRODUCTS.filter((p) => p.category === cat.id);
        return (
          <section key={cat.id} id={cat.id} className="scroll-mt-24">
            <div className="text-center mb-10">
              <p className="text-xs tracking-[0.4em] text-[var(--gold)] font-semibold">— LAB SECTION —</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 text-gradient-primary">
                {cat.label}
              </h2>
              <p className="text-sm text-muted-foreground mt-1" dir="rtl">{cat.labelAr}</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {items.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
