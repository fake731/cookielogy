import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP_NUMBER, DISPLAY_PHONE } from "@/lib/store/products";

export const Route = createFileRoute("/الاسئلة")({
  head: () => ({
    meta: [
      { title: "الأسئلة الشائعة · كوكيلوجي" },
      { name: "description", content: "أسئلة شائعة حول الطلب والتوصيل والمنتجات." },
    ],
  }),
  component: FAQ,
});

const QA = [
  {
    q: "كم تكلفة التوصيل؟",
    a: "التوصيل بنفس اليوم: 3 دنانير أردنية. التوصيل خلال يومين: ديناران أردنيان (2 د.أ).",
  },
  { q: "كم مدة التوصيل؟", a: "نوصل لجميع أنحاء المملكة الأردنية الهاشمية 🇯🇴 خلال يوم أو يومين عمل حسب الخيار الذي تختاره." },
  { q: "كيف أطلب؟", a: "أضف منتجاتك للسلة، انتقل لصفحة إتمام الطلب، وسيتم تأكيد الطلب عبر واتساب مباشرة." },
  { q: "هل الكوكيز طازج؟", a: "نعم، يتم تحضير جميع منتجاتنا يومياً بمكونات عالية الجودة." },
  { q: "هل يمكنني تخصيص بوكس؟", a: "بالتأكيد! تواصل معنا عبر واتساب وسنرتب لك طلبك الخاص." },
];

function FAQ() {
  return (
    <section className="container mx-auto px-4 py-20 max-w-3xl">
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.4em] text-[var(--gold)] font-semibold">— FAQ —</p>
        <h1 className="font-display text-5xl font-bold mt-2 text-gradient-primary">الأسئلة الشائعة</h1>
      </div>
      <div className="space-y-3">
        {QA.map((item, i) => (
          <details
            key={i}
            className="group rounded-2xl border bg-card p-5 shadow-card-luxe open:shadow-luxe transition-shadow"
          >
            <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold">
              <span>{item.q}</span>
              <span className="h-7 w-7 grid place-items-center rounded-full bg-primary/10 text-primary group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {item.a}
              {item.q.includes("تخصيص") && (
                <>
                  {" "}
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold underline"
                  >
                    {DISPLAY_PHONE}
                  </a>
                </>
              )}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
