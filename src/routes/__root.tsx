import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/admissions", label: "Admissions" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
] as const;

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="grid size-9 place-items-center rounded-full bg-acacia-deep">
        <span className="size-3.5 rounded-full bg-savanna" />
      </span>
      <span className="font-serif text-xl font-medium tracking-tight text-acacia-deep">
        Mukalwa Academy
      </span>
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md ring-1 ring-black/5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group relative text-sm font-medium text-clay transition-colors hover:text-acacia-deep"
              activeProps={{ className: "text-acacia-deep" }}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-acacia-deep transition-[width] group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/admissions"
            className="hidden rounded-full bg-acacia-deep px-5 py-2 text-sm font-medium text-cream ring-1 ring-acacia-deep transition-transform hover:-translate-y-px sm:inline-flex"
          >
            Apply Now
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-full ring-1 ring-black/10 md:hidden"
          >
            <span className="text-acacia-deep">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-black/5 bg-cream md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-3">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-clay hover:bg-black/5 hover:text-acacia-deep"
                activeProps={{ className: "text-acacia-deep bg-black/5" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/5 bg-cream py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="max-w-[35ch] text-sm text-clay/60">
              Building a brighter future for the children of Tala through quality
              education and community values.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-acacia-deep">
              School Links
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-clay/60">
              <li>
                <Link to="/news" className="transition-colors hover:text-acacia-deep">
                  Academic Calendar
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="transition-colors hover:text-acacia-deep">
                  Uniform Requirements
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="transition-colors hover:text-acacia-deep">
                  Fee Structure 2026
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-acacia-deep">
                  Parent Portal
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-acacia-deep">
              Newsletter
            </h4>
            <p className="text-sm text-clay/60">
              Stay updated with campus news and termly events.
            </p>
            <form className="mt-2 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                aria-label="Your email"
                className="flex-1 rounded-full border-none bg-black/5 px-4 py-2 text-sm placeholder:text-clay/40 focus:ring-1 focus:ring-acacia-deep/20"
              />
              <button
                type="submit"
                className="rounded-full bg-acacia-light px-4 py-2 text-sm font-medium text-cream"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-black/5 pt-8 md:flex-row">
          <p className="text-xs text-clay/40">
            © {new Date().getFullYear()} Mukalwa Junior Academy. All rights reserved.
            Registered with MOE Kenya.
          </p>
          <div className="flex gap-6">
            <Link to="/contact" className="text-xs text-clay/50 hover:text-acacia-deep">
              Facebook
            </Link>
            <Link to="/news" className="text-xs text-clay/50 hover:text-acacia-deep">
              Twitter
            </Link>
            <Link to="/about" className="text-xs text-clay/50 hover:text-acacia-deep">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-acacia-deep">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-clay">Page not found</h2>
        <p className="mt-2 text-sm text-clay/60">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-acacia-deep px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-acacia-deep/90"
          >
            Go home
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
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-clay">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-clay/60">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-acacia-deep px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-acacia-deep/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-black/10 bg-cream px-4 py-2 text-sm font-medium text-clay transition-colors hover:bg-black/5"
          >
            Go home
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
      {
        title: "Mukalwa Junior Academy — Primary School in Tala, Kenya",
      },
      {
        name: "description",
        content:
          "Mukalwa Junior Academy is a primary school in Tala, Machakos County, offering a grounded CBC education that balances academic excellence with community character.",
      },
      { name: "author", content: "Mukalwa Junior Academy" },
      {
        property: "og:title",
        content: "Mukalwa Junior Academy — Primary School in Tala, Kenya",
      },
      {
        property: "og:description",
        content:
          "A grounded primary education in Tala balancing academic excellence with community character.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&family=Instrument+Sans:wght@400;500;600&display=swap",
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
      <div className="flex min-h-screen flex-col bg-cream">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
