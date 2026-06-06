import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MessageCircle } from "lucide-react";
import { DISPLAY_PHONE, INSTAGRAM_URL, WHATSAPP_NUMBER } from "@/lib/store/products";

export const Route = createFileRoute("/تواصل")({
  head: () => ({
    meta: [
      { title: "تواصل معنا · كوكيلوجي" },
      { name: "description", content: "تواصل معنا عبر واتساب أو انستغرام." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const cards = [
    { icon: MessageCircle, label: "واتساب", value: DISPLAY_PHONE, href: `https://wa.me/${WHATSAPP_NUMBER}` },
    { icon: Instagram, label: "انستغرام", value: "@cooki.elogy", href: INSTAGRAM_URL },
  ];
  return (
    <section className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.4em] text-[var(--gold)] font-semibold">— CONTACT —</p>
        <h1 className="font-display text-5xl font-bold mt-2 text-gradient-primary">تواصل معنا</h1>
        <p className="text-muted-foreground mt-3">نحن هنا للإجابة على أسئلتك ولاستقبال طلباتك الخاصة.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-5 max-w-xl mx-auto">
        {cards.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl border bg-card shadow-card-luxe hover:shadow-luxe hover:-translate-y-1 transition-all text-center"
          >
            <div className="mx-auto h-14 w-14 grid place-items-center rounded-2xl bg-gradient-to-br from-primary to-[var(--cocoa)] text-primary-foreground group-hover:scale-110 transition-transform">
              <c.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold">{c.label}</h3>
            <p className="text-sm text-muted-foreground mt-1">{c.value}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
