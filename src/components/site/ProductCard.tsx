import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/store/cart";
import type { Product } from "@/lib/store/products";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  return (
    <article
      className="group relative overflow-hidden rounded-2xl bg-card border shadow-card-luxe hover:shadow-luxe transition-all duration-500 hover:-translate-y-1 animate-fade-up"
      style={{ animationDelay: `${Math.min(index * 60, 400)}ms` }}
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.nameAr}
          loading="lazy"
          width={768}
          height={768}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur text-xs font-bold text-primary">
          {product.price.toFixed(2)} د.أ
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold leading-tight">{product.nameAr}</h3>
        <p className="text-xs text-muted-foreground mt-0.5">{product.name}</p>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2 min-h-10">{product.desc}</p>

        <div className="mt-4 flex items-center gap-3">
          <div className="flex items-center rounded-full border bg-background">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="h-8 w-8 grid place-items-center hover:text-primary"
              aria-label="إنقاص"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="w-6 text-center text-sm font-semibold">{qty}</span>
            <button
              onClick={() => setQty((q) => q + 1)}
              className="h-8 w-8 grid place-items-center hover:text-primary"
              aria-label="زيادة"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>
          <button
            onClick={() => add(product.id, qty)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 h-9 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:bg-[var(--cocoa)] transition-colors"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            أضف إلى السلة
          </button>
        </div>
      </div>
    </article>
  );
}
