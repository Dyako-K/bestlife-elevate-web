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

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">پەڕە نەدۆزرایەوە</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          ئەم پەڕەیە بوونی نییە یان گواستراوەتەوە.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            گەڕانەوە بۆ سەرەکی
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          ئەم پەڕەیە بار نەبوو
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          هەڵەیەک ڕوویدا. تکایە دووبارە هەوڵبدەرەوە یان بگەڕێوە بۆ سەرەکی.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            دووبارە هەوڵدانەوە
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            گەڕانەوە بۆ سەرەکی
          </a>
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
      { title: "نەخۆشخانەی بێست لایف | چاودێریی تەندروستی پایەبەرز" },
      { name: "description", content: "نەخۆشخانەی بێست لایف چاودێریی پزیشکی لە ئاستی جیهانیدا پێشکەش دەکات بە بەزەیی و وردی." },
      { name: "author", content: "Best Life Hospital" },
      { property: "og:title", content: "نەخۆشخانەی بێست لایف | چاودێریی تەندروستی پایەبەرز" },
      { property: "og:description", content: "نەخۆشخانەی بێست لایف چاودێریی پزیشکی لە ئاستی جیهانیدا پێشکەش دەکات بە بەزەیی و وردی." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@BestLifeHospital" },
      { name: "twitter:title", content: "نەخۆشخانەی بێست لایف | چاودێریی تەندروستی پایەبەرز" },
      { name: "twitter:description", content: "نەخۆشخانەی بێست لایف چاودێریی پزیشکی لە ئاستی جیهانیدا پێشکەش دەکات بە بەزەیی و وردی." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d26ad03f-8a69-4115-bee2-5905b3918c9a/id-preview-964a22b5--c1436965-52b0-4916-a009-d686940f0a90.lovable.app-1781431660330.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d26ad03f-8a69-4115-bee2-5905b3918c9a/id-preview-964a22b5--c1436965-52b0-4916-a009-d686940f0a90.lovable.app-1781431660330.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
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
    <html lang="ckb" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Kufi+Arabic:wght@400;500;600;700;800&display=swap"
        />
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
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
