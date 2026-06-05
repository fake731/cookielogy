import { Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { useCart } from "@/lib/store/cart";
import { DELIVERY_FEE } from "@/lib/store/products";

export function CartDrawer() {
  const { open, setOpen, enriched, setQty, remove, subtotal } = useCart();
  const total = subtotal + (subtotal > 0 ? DELIVERY_FEE : 0);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-card border-l shadow-luxe transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="font-display text-xl font-bold">Your Cart</h2>
          <button onClick={() => setOpen(false)} className="h-9 w-9 grid place-items-center rounded-full hover:bg-accent" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {enriched.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-sm">Your cart is empty.</p>
            </div>
          ) : (
            enriched.map((item) => (
              <div key={item.id} className="flex gap-3 rounded-xl border p-3 bg-background">
                <img src={item.product.image} alt="" className="h-20 w-20 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-semibold text-sm leading-tight">{item.product.name}</h4>
                    <button onClick={() => remove(item.id)} className="text-muted-foreground hover:text-destructive" aria-label="Remove">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground">{item.product.price.toFixed(2)} JD</p>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center rounded-full border">
                      <button onClick={() => setQty(item.id, item.qty - 1)} className="h-7 w-7 grid place-items-center" aria-label="Decrease">
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-6 text-center text-xs font-semibold">{item.qty}</span>
                      <button onClick={() => setQty(item.id, item.qty + 1)} className="h-7 w-7 grid place-items-center" aria-label="Increase">
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <span className="text-sm font-bold text-primary">{item.line.toFixed(2)} JD</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {enriched.length > 0 && (
          <div className="border-t p-5 space-y-3 bg-background/50">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-semibold">{subtotal.toFixed(2)} JD</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Delivery</span>
              <span className="font-semibold">{DELIVERY_FEE.toFixed(2)} JD</span>
            </div>
            <div className="flex justify-between text-base pt-2 border-t">
              <span className="font-display font-bold">Total</span>
              <span className="font-display font-bold text-primary">{total.toFixed(2)} JD</span>
            </div>
            <Link
              to="/checkout"
              onClick={() => setOpen(false)}
              className="block w-full text-center h-12 leading-[3rem] rounded-full bg-primary text-primary-foreground font-semibold hover:bg-[var(--cocoa)] transition-colors"
            >
              Checkout →
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
