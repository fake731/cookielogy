import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Truck, MapPin } from "lucide-react";
import heroImg from "@/assets/products/hero.jpg";
import { LabDecor } from "@/components/site/LabDecor";
import { Menu } from "@/components/site/Menu";
import { DISPLAY_PHONE } from "@/lib/store/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cookielogy Lab — Luxury Artisan Cookies in Jordan" },
      { name: "description", content: "Order premium handcrafted cookies, miniature collections and signature dips. Delivery across Jordan, 2 JD flat." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <LabDecor />
        <div className="container mx-auto px-4 pt-12 pb-24 md:pt-20 md:pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs tracking-[0.3em] font-semibold text-primary">
              EST. 2026 · AMMAN
            </span>
            <h1 className="font-display text-5xl md:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight">
              <span className="block text-gradient-primary">COOKIELOGY</span>
              <span className="block text-foreground/90">LAB</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              مختبر الكوكيز الفاخر <span className="inline-block animate-float-slow">🍪</span>
              <br />
              نكهات مبتكرة ومكونات عالية الجودة تُحضَّر يومياً لتجربة لا تُنسى.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/checkout"
                className="group inline-flex items-center gap-2 h-13 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-luxe hover:scale-105 transition-transform"
              >
                اطلب الآن
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 h-13 px-7 py-3.5 rounded-full border-2 border-primary/30 hover:border-primary font-semibold transition-colors"
              >
                استكشف القائمة
              </Link>
            </div>
            <div className="flex flex-wrap gap-5 pt-6 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> توصيل لكل المملكة</span>
              <span className="inline-flex items-center gap-2"><Truck className="h-4 w-4 text-primary" /> رسوم التوصيل 2 د.أ</span>
              <span className="inline-flex items-center gap-2"><MessageCircle className="h-4 w-4 text-primary" /> {DISPLAY_PHONE}</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-tr from-primary/20 via-[var(--gold)]/20 to-transparent blur-3xl rounded-full" />
            <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-luxe border-4 border-card">
              <img src={heroImg} alt="Stack of luxury cookies" width={1536} height={1024} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-5 py-3 shadow-card-luxe">
              <p className="text-[10px] tracking-[0.3em] text-muted-foreground">FRESHLY BAKED</p>
              <p className="font-display text-xl font-bold text-gradient-primary">DAILY</p>
            </div>
          </div>
        </div>

        {/* Info strip */}
        <div className="border-y bg-primary/95 text-primary-foreground">
          <div className="container mx-auto px-4 py-4 grid sm:grid-cols-3 gap-2 text-center text-sm font-medium">
            <span>🇯🇴 نوصل لجميع أنحاء المملكة الأردنية الهاشمية</span>
            <span>🚚 رسوم التوصيل: 2 د.أ</span>
            <span>📱 الطلب عبر واتساب · {DISPLAY_PHONE}</span>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="relative py-20 lab-bg">
        <div className="container mx-auto px-4">
          <Menu />
        </div>
      </section>
    </>
  );
}
