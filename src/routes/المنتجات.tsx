import { createFileRoute } from "@tanstack/react-router";
import { Menu } from "@/components/site/Menu";

export const Route = createFileRoute("/المنتجات")({
  head: () => ({
    meta: [
      { title: "المنتجات · كوكيلوجي" },
      { name: "description", content: "تصفح قائمة الكوكيز والبوكسات والصوصات الفاخرة." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <section className="container mx-auto px-4 py-20 lab-bg">
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.4em] text-[var(--gold)] font-semibold">— القائمة الكاملة —</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold mt-3 text-gradient-primary">قائمة المنتجات</h1>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          اختر المفضّل لديك، أضف صوصاً مميزاً، وسنوصله لباب بيتك.
        </p>
      </div>
      <Menu />
    </section>
  );
}
