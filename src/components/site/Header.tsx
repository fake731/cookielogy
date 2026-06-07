import { Link, useRouterState } from "@tanstack/react-router";
import { Moon, ShoppingBag, Sun, Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/store/cart";
import { useTheme } from "@/lib/store/theme";
import logo from "@/assets/products/logo.png";

const LINKS = [
  { to: "/", label: "الرئيسية" },
  { to: "/المنتجات", label: "المنتجات" },
  { to: "/الاسئلة", label: "الأسئلة الشائعة" },
  { to: "/تواصل", label: "تواصل معنا" },
] as const;

export function Header() {
  const { count, setOpen } = useCart();
  const { dark, toggle } = useTheme();
  const [mobile, setMobile] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 glass border-b">
      <div className="container mx-auto flex h-18 items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="كوكيلوجي" className="h-12 w-12 transition-transform group-hover:rotate-6" />
          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-gradient-primary">COOKIELOGY</div>
            <div className="text-[10px] tracking-[0.25em] text-muted-foreground">متجر الكوكيز</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all relative ${
                  active
                    ? "bg-primary text-primary-foreground shadow-card-luxe"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="تبديل الوضع"
            className="h-10 w-10 grid place-items-center rounded-full hover:bg-accent transition-colors"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setOpen(true)}
            aria-label="فتح السلة"
            className="relative h-10 w-10 grid place-items-center rounded-full bg-primary text-primary-foreground hover:scale-105 transition-transform shadow-card-luxe"
          >
            <ShoppingBag className="h-4 w-4" />
            {count > 0 && (
              <span className="absolute -top-1 -left-1 h-5 min-w-5 px-1 grid place-items-center rounded-full bg-[var(--gold)] text-[10px] font-bold text-cocoa">
                {count}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobile((v) => !v)}
            className="md:hidden h-10 w-10 grid place-items-center rounded-full hover:bg-accent"
            aria-label="القائمة"
          >
            {mobile ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobile && (
        <div className="md:hidden border-t glass">
          <div className="container mx-auto flex flex-col px-4 py-2">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMobile(false)}
                className="py-3 text-sm font-semibold border-b border-border/40 last:border-0"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
