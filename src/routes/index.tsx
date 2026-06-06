import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle, Truck, MapPin } from "lucide-react";
import heroImg from "@/assets/products/hero.jpg";
import { LabDecor } from "@/components/site/LabDecor";
import { Menu } from "@/components/site/Menu";
import { DISPLAY_PHONE, WHATSAPP_NUMBER } from "@/lib/store/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "كوكيلوجي — كوكيز فاخر في الأردن 🇯🇴" },
      { name: "description", content: "اطلب الكوكيز الفاخر المصنوع يدوياً، البوكسات المنوعة، والصوصات المميزة. توصيل لجميع أنحاء المملكة الأردنية الهاشمية 🇯🇴." },
    ],
  }),
  component: Home,
});

function Home() {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}`;
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <LabDecor />
        <div className="container mx-auto px-4 pt-12 pb-24 md:pt-20 md:pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up relative z-10 order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs tracking-[0.25em] font-semibold text-primary">
              🇯🇴 المملكة الأردنية الهاشمية · عمّان
            </span>
            <h1 className="font-display text-5xl md:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight">
              <span className="block text-gradient-primary">COOKIELOGY</span>
              <span className="block text-foreground/90 text-3xl md:text-4xl mt-2">مختبر الكوكيز الفاخر</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              نكهات مبتكرة ومكونات عالية الجودة <span className="inline-block animate-float-slow">🍪</span>
              <br />
              تُحضَّر يومياً لتجربة لا تُنسى.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/الطلب"
                className="group inline-flex items-center gap-2 h-13 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-luxe hover:scale-105 transition-transform"
              >
                اطلب الآن
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/المنتجات"
                className="inline-flex items-center gap-2 h-13 px-7 py-3.5 rounded-full border-2 border-primary/30 hover:border-primary font-semibold transition-colors"
              >
                استكشف القائمة
              </Link>
            </div>
            <div className="flex flex-wrap gap-5 pt-6 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> توصيل لكل المملكة 🇯🇴</span>
              <span className="inline-flex items-center gap-2"><Truck className="h-4 w-4 text-primary" /> ابتداءً من 2 د.أ</span>
              <a href={waHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                <MessageCircle className="h-4 w-4 text-primary" /> {DISPLAY_PHONE}
              </a>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-8 bg-gradient-to-tr from-primary/20 via-[var(--gold)]/20 to-transparent blur-3xl rounded-full" />
            <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-luxe border-4 border-card">
              <img src={heroImg} alt="مجموعة الكوكيز الفاخر" width={1536} height={1024} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-5 py-3 shadow-card-luxe">
              <p className="text-[10px] tracking-[0.25em] text-muted-foreground">طازج يومياً</p>
              <p className="font-display text-xl font-bold text-gradient-primary">DAILY FRESH</p>
            </div>
          </div>
        </div>

        {/* Info strip */}
        <div className="border-y bg-primary/95 text-primary-foreground">
          <div className="container mx-auto px-4 py-4 grid sm:grid-cols-3 gap-2 text-center text-sm font-medium">
            <span>🇯🇴 توصيل لجميع أنحاء المملكة الأردنية الهاشمية</span>
            <span>🚚 بنفس اليوم 3 د.أ · خلال يومين 2 د.أ</span>
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="hover:underline">📱 اطلب عبر واتساب · {DISPLAY_PHONE}</a>
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
