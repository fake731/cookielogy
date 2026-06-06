import { createFileRoute } from "@tanstack/react-router";
import { Menu } from "@/components/site/Menu";

export const Route = createFileRoute("/المنتجات")({
  head: () => ({
    meta: [
      { title: "Menu · Cookielogy Lab" },
      { name: "description", content: "Browse our full menu of cookies, miniature collections, box sets, and signature dips." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <section className="container mx-auto px-4 py-20 lab-bg">
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.4em] text-[var(--gold)] font-semibold">— THE FULL MENU —</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold mt-3 text-gradient-primary">Our Lab Menu</h1>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Pick your favorites, add a dip, and we'll deliver to your door.
        </p>
      </div>
      <Menu />
    </section>
  );
}
