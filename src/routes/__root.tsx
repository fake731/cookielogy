import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { CartProvider } from "@/lib/store/cart";
import { ThemeProvider } from "@/lib/store/theme";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CartDrawer } from "@/components/site/CartDrawer";
import { WhatsAppFAB } from "@/components/site/WhatsAppFAB";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-gradient-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This experiment didn't yield a result.
        </p>
        <Link to="/" className="mt-6 inline-flex h-11 px-6 items-center rounded-full bg-primary text-primary-foreground font-semibold">
          Back to lab
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Something fizzed wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try again or head back home.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="h-10 px-5 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
            Try again
          </button>
          <a href="/" className="h-10 px-5 rounded-full border text-sm font-semibold leading-10">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Cookielogy" },
      { name: "description", content: "متجر الكوكيز  في الأردن. نكهات مبتكرة ومكونات عالية الجودة تُحضَّر يومياً. توصيل لجميع المملكة. الاردنية الهاشمية" },
      { name: "author", content: "Cookielogy Lab" },
      { name: "theme-color", content: "#3a1740" },
      { property: "og:title", content: "Cookielogy" },
      { property: "og:description", content: "متجر الكوكيز  في الأردن. نكهات مبتكرة ومكونات عالية الجودة تُحضَّر يومياً. توصيل لجميع المملكة. الاردنية الهاشمية" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Cookielogy" },
      { name: "twitter:description", content: "متجر الكوكيز  في الأردن. نكهات مبتكرة ومكونات عالية الجودة تُحضَّر يومياً. توصيل لجميع المملكة. الاردنية الهاشمية" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/77255b22-bf6c-46f2-a6c1-a6ce38c4a0a1/id-preview-e44a25e7--4c82e364-eebe-4183-a824-7e6c9b872c34.lovable.app-1780682998518.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/77255b22-bf6c-46f2-a6c1-a6ce38c4a0a1/id-preview-e44a25e7--4c82e364-eebe-4183-a824-7e6c9b872c34.lovable.app-1780682998518.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Cairo:wght@300;400;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Outlet />
            </main>
            <Footer />
          </div>
          <CartDrawer />
          <WhatsAppFAB />
        </CartProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
