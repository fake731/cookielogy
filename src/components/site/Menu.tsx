import { useState } from "react";
import { CATEGORIES, PRODUCTS, type Category } from "@/lib/store/products";
import { ProductCard } from "./ProductCard";

export function Menu() {
  const [active, setActive] = useState<Category>(CATEGORIES[0].id);
  const items = PRODUCTS.filter((p) => p.category === active);
  const current = CATEGORIES.find((c) => c.id === active)!;

  return (
    <div className="space-y-10">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sticky top-20 z-20 py-3">
        <div className="glass rounded-full p-1.5 flex flex-wrap gap-1 shadow-card-luxe">
          {CATEGORIES.map((cat) => {
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-5 h-10 rounded-full text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-luxe"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {cat.labelAr}
              </button>
            );
          })}
        </div>
      </div>

      <section key={current.id} className="scroll-mt-24">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.4em] text-[var(--gold)] font-semibold">— قسم —</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 text-gradient-primary">
            {current.labelAr}
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
