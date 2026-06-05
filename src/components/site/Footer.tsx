import { Instagram, MessageCircle } from "lucide-react";
import { INSTAGRAM_URL, WHATSAPP_NUMBER, DISPLAY_PHONE } from "@/lib/store/products";

export function Footer() {
  return (
    <footer className="mt-32 border-t bg-[color-mix(in_oklab,var(--primary)_4%,transparent)]">
      <div className="container mx-auto px-4 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl font-bold text-gradient-primary">COOKIELOGY LAB</div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            مختبر الكوكيز الفاخر. نكهات مبتكرة ومكونات عالية الجودة تُحضَّر يومياً.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>📱 WhatsApp: {DISPLAY_PHONE}</li>
            <li>🇯🇴 Delivery across Jordan</li>
            <li>🚚 Delivery fee: 2.00 JD</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Follow</h4>
          <div className="flex gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 w-11 grid place-items-center rounded-full bg-card border hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 w-11 grid place-items-center rounded-full bg-card border hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Cookielogy Lab · The Science of Sweet
      </div>
    </footer>
  );
}
