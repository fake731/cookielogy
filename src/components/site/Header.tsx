import { Link } from "@tanstack/react-router";
import { Moon, ShoppingBag, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/store/cart";
import { useTheme } from "@/lib/store/theme";
import logo from "@/assets/products/logo.png";

export function Header() {
  const { count, setOpen } = useCart();
  const { dark, toggle } = useTheme();
  const [mobile, setMobile] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/faq", label: "FAQ" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header className="sticky top-0 z-40 glass border-b">
      <div className="container mx-auto flex h-18 items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Cookielogy Lab" className="h-12 w-12 transition-transform group-hover:rotate-6" />
          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-gradient-primary">COOKIELOGY</div>
            <div className="text-[10px] tracking-[0.3em] text-muted-foreground">THE SCIENCE OF SWEET</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
            >
              {l.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="h-10 w-10 grid place-items-center rounded-full hover:bg-accent transition-colors"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open cart"
            className="relative h-10 w-10 grid place-items-center rounded-full bg-primary text-primary-foreground hover:scale-105 transition-transform shadow-card-luxe"
          >
            <ShoppingBag className="h-4 w-4" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 h-5 min-w-5 px-1 grid place-items-center rounded-full bg-[var(--gold)] text-[10px] font-bold text-cocoa">
                {count}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobile((v) => !v)}
            className="md:hidden h-10 w-10 grid place-items-center rounded-full hover:bg-accent"
            aria-label="Menu"
          >
            {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobile && (
        <div className="md:hidden border-t glass">
          <div className="container mx-auto flex flex-col px-4 py-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMobile(false)}
                className="py-3 text-sm font-medium border-b border-border/40 last:border-0"
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
