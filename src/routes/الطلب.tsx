import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useCart } from "@/lib/store/cart";
import { DELIVERY_FEE, WHATSAPP_NUMBER } from "@/lib/store/products";
import { MessageCircle } from "lucide-react";

export const Route = createFileRoute("/الطلب")({
  head: () => ({
    meta: [
      { title: "Checkout · Cookielogy Lab" },
      { name: "description", content: "Complete your order and we'll confirm via WhatsApp." },
    ],
  }),
  component: Checkout,
});

const GOVERNORATES = [
  "Amman", "Zarqa", "Irbid", "Aqaba", "Mafraq", "Karak", "Madaba", "Ajloun", "Jerash", "Balqa", "Tafilah", "Ma'an",
];

function Checkout() {
  const { enriched, subtotal, clear } = useCart();
  const total = subtotal + (subtotal > 0 ? DELIVERY_FEE : 0);

  const [form, setForm] = useState({
    name: "", phone: "", gov: "Amman", city: "", address: "", notes: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (enriched.length === 0) return;
    const lines = enriched
      .map((i) => `• ${i.product.name} × ${i.qty} — ${(i.product.price * i.qty).toFixed(2)} JD`)
      .join("\n");
    const msg =
      `مرحباً COOKIELOGY LAB 👋\n` +
      `أرغب بطلب:\n\n${lines}\n\n` +
      `المجموع الفرعي: ${subtotal.toFixed(2)} JD\n` +
      `التوصيل: ${DELIVERY_FEE.toFixed(2)} JD\n` +
      `الإجمالي النهائي: ${total.toFixed(2)} JD\n\n` +
      `الاسم: ${form.name}\n` +
      `رقم الهاتف: ${form.phone}\n` +
      `المحافظة: ${form.gov}\n` +
      `المدينة: ${form.city}\n` +
      `العنوان: ${form.address}\n` +
      (form.notes ? `ملاحظات: ${form.notes}\n` : "") +
      `\nشكراً لكم ❤️`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    clear();
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
            <Field label="المدينة" required value={form.city} onChange={(v) => setForm({ ...form, city: v })} />
          </div>
          <Field label="العنوان بالتفصيل" required value={form.address} onChange={(v) => setForm({ ...form, address: v })} textarea />
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
                  <span className="truncate pr-2">{i.product.name} × {i.qty}</span>
                  <span className="font-semibold whitespace-nowrap">{i.line.toFixed(2)} JD</span>
                </div>
              ))}
            </div>
          )}
          <div className="mt-5 pt-4 border-t space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">المجموع الفرعي</span><span>{subtotal.toFixed(2)} JD</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">التوصيل</span><span>{DELIVERY_FEE.toFixed(2)} JD</span></div>
            <div className="flex justify-between font-bold text-base pt-2 border-t"><span>الإجمالي</span><span className="text-primary">{total.toFixed(2)} JD</span></div>
          </div>
          <button
            type="submit"
            disabled={enriched.length === 0}
            className="mt-5 w-full inline-flex items-center justify-center gap-2 h-12 rounded-full bg-[#25D366] text-white font-semibold hover:scale-[1.02] transition-transform disabled:opacity-40 disabled:hover:scale-100"
          >
            <MessageCircle className="h-4 w-4" />
            تأكيد الطلب عبر واتساب
          </button>
          <p className="text-[11px] text-muted-foreground text-center mt-3">
            سيتم فتح واتساب لإتمام التأكيد على الرقم {WHATSAPP_NUMBER}
          </p>
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
