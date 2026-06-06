import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useCart } from "@/lib/store/cart";
import { DELIVERY_FEE, WHATSAPP_NUMBER } from "@/lib/store/products";
import { MessageCircle, MapPin } from "lucide-react";

export const Route = createFileRoute("/الطلب")({
  head: () => ({
    meta: [
      { title: "إتمام الطلب · كوكيلوجي" },
      { name: "description", content: "أتمم طلبك وسنؤكده عبر واتساب." },
    ],
  }),
  component: Checkout,
});

const GOVERNORATES = [
  "عمّان", "الزرقاء", "إربد", "العقبة", "المفرق", "الكرك", "مادبا", "عجلون", "جرش", "البلقاء", "الطفيلة", "معان",
];

const DELIVERY_OPTIONS = [
  { id: "2days", label: "خلال يومين — 2 د.أ", fee: 2 },
  { id: "sameday", label: "بنفس اليوم — 3 د.أ", fee: 3 },
];

function Checkout() {
  const { enriched, subtotal, clear } = useCart();

  const [form, setForm] = useState({
    name: "", phone: "", gov: "عمّان", city: "", address: "", coords: "", notes: "",
    delivery: "2days",
  });

  const fee = DELIVERY_OPTIONS.find((d) => d.id === form.delivery)?.fee ?? DELIVERY_FEE;
  const total = subtotal + (subtotal > 0 ? fee : 0);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (enriched.length === 0) return;
    const lines = enriched
      .map((i) => `• ${i.product.nameAr} × ${i.qty} — ${(i.product.price * i.qty).toFixed(2)} د.أ`)
      .join("\n");
    const deliveryLabel = DELIVERY_OPTIONS.find((d) => d.id === form.delivery)?.label ?? "";
    const msg =
      `مرحباً كوكيلوجي 👋\n` +
      `أرغب بطلب:\n\n${lines}\n\n` +
      `المجموع الفرعي: ${subtotal.toFixed(2)} د.أ\n` +
      `التوصيل (${deliveryLabel}): ${fee.toFixed(2)} د.أ\n` +
      `الإجمالي النهائي: ${total.toFixed(2)} د.أ\n\n` +
      `الاسم: ${form.name}\n` +
      `رقم الهاتف: ${form.phone}\n` +
      `المحافظة: ${form.gov}\n` +
      `المدينة: ${form.city}\n` +
      `العنوان: ${form.address}\n` +
      (form.coords ? `إحداثيات الموقع: ${form.coords}\n` : "") +
      (form.notes ? `ملاحظات: ${form.notes}\n` : "") +
      `\nشكراً لكم ❤️`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    clear();
  };

  const grabLocation = () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition((pos) => {
      const c = `${pos.coords.latitude.toFixed(6)}, ${pos.coords.longitude.toFixed(6)}`;
      setForm((f) => ({ ...f, coords: c }));
    });
  };

  return (
    <section className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.4em] text-[var(--gold)] font-semibold">— CHECKOUT —</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold mt-2 text-gradient-primary">إتمام الطلب</h1>
      </div>

      <form onSubmit={submit} className="grid lg:grid-cols-[1fr_400px] gap-8">
        <div className="space-y-5 bg-card rounded-2xl border p-6 md:p-8 shadow-card-luxe">
          <h2 className="font-display text-xl font-bold mb-4">معلومات التوصيل</h2>
          <Field label="الاسم الكامل" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
          <Field label="رقم الهاتف" required type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold mb-1.5 block">المحافظة *</label>
              <select
                required
                value={form.gov}
                onChange={(e) => setForm({ ...form, gov: e.target.value })}
                className="w-full h-11 px-3 rounded-lg border bg-background focus:border-primary outline-none"
              >
                {GOVERNORATES.map((g) => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>
            <Field label="المدينة / المنطقة" required value={form.city} onChange={(v) => setForm({ ...form, city: v })} />
          </div>
          <Field label="العنوان بالتفصيل" required value={form.address} onChange={(v) => setForm({ ...form, address: v })} textarea />

          <div>
            <label className="text-xs font-semibold mb-1.5 block">إحداثيات الموقع (اختياري)</label>
            <div className="flex gap-2">
              <input
                value={form.coords}
                onChange={(e) => setForm({ ...form, coords: e.target.value })}
                placeholder="مثال: 31.9539, 35.9106"
                className="flex-1 h-11 px-3 rounded-lg border bg-background focus:border-primary outline-none"
              />
              <button
                type="button"
                onClick={grabLocation}
                className="h-11 px-4 inline-flex items-center gap-1.5 rounded-lg border hover:bg-accent text-xs font-semibold"
              >
                <MapPin className="h-4 w-4" /> موقعي
              </button>
            </div>
            <p className="text-[11px] text-muted-foreground mt-1.5">إضافة الإحداثيات يساعد المندوب على الوصول بسرعة أكبر — اختياري.</p>
          </div>

          <div>
            <label className="text-xs font-semibold mb-1.5 block">خيار التوصيل *</label>
            <div className="grid sm:grid-cols-2 gap-2">
              {DELIVERY_OPTIONS.map((opt) => (
                <button
                  type="button"
                  key={opt.id}
                  onClick={() => setForm({ ...form, delivery: opt.id })}
                  className={`h-12 rounded-lg border text-sm font-semibold transition-colors ${
                    form.delivery === opt.id
                      ? "border-primary bg-primary/10 text-primary"
                      : "hover:bg-accent"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <Field label="ملاحظات إضافية" value={form.notes} onChange={(v) => setForm({ ...form, notes: v })} textarea />
        </div>

        <aside className="bg-card rounded-2xl border p-6 shadow-card-luxe h-fit sticky top-24">
          <h2 className="font-display text-xl font-bold mb-4">ملخص الطلب</h2>
          {enriched.length === 0 ? (
            <p className="text-sm text-muted-foreground">السلة فارغة.</p>
          ) : (
            <div className="space-y-3 max-h-72 overflow-y-auto">
              {enriched.map((i) => (
                <div key={i.id} className="flex justify-between text-sm">
                  <span className="truncate pr-2">{i.product.nameAr} × {i.qty}</span>
                  <span className="font-semibold whitespace-nowrap">{i.line.toFixed(2)} د.أ</span>
                </div>
              ))}
            </div>
          )}
          <div className="mt-5 pt-4 border-t space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">المجموع الفرعي</span><span>{subtotal.toFixed(2)} د.أ</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">التوصيل</span><span>{fee.toFixed(2)} د.أ</span></div>
            <div className="flex justify-between font-bold text-base pt-2 border-t"><span>الإجمالي</span><span className="text-primary">{total.toFixed(2)} د.أ</span></div>
          </div>
          <button
            type="submit"
            disabled={enriched.length === 0}
            className="mt-5 w-full inline-flex items-center justify-center gap-2 h-12 rounded-full bg-[#25D366] text-white font-semibold hover:scale-[1.02] transition-transform disabled:opacity-40 disabled:hover:scale-100"
          >
            <MessageCircle className="h-4 w-4" />
            تأكيد الطلب عبر واتساب
          </button>
        </aside>
      </form>
    </section>
  );
}

function Field({
  label, value, onChange, required, type = "text", textarea,
}: {
  label: string; value: string; onChange: (v: string) => void; required?: boolean; type?: string; textarea?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-semibold mb-1.5 block">{label}{required && " *"}</label>
      {textarea ? (
        <textarea
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className="w-full px-3 py-2 rounded-lg border bg-background focus:border-primary outline-none resize-none"
        />
      ) : (
        <input
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-11 px-3 rounded-lg border bg-background focus:border-primary outline-none"
        />
      )}
    </div>
  );
}
