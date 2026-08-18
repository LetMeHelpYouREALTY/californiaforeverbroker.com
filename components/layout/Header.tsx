import Link from "next/link";
import { Phone } from "lucide-react";
import { CalendlyLink } from "@/components/CalendlyLink";
import { callUrl, siteConfig } from "@/lib/site-config";

const nav = [
  { href: "/", label: "Home" },
  { href: "/neighborhoods", label: "Neighborhoods" },
  { href: "/relocation", label: "Relocation" },
  { href: "/new-homes", label: "New Homes" },
  { href: "/market-report", label: "Market Report" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const { nap, name } = siteConfig;

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="bg-slate-950 px-4 py-2 text-xs text-slate-200">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2">
          <p>
            {nap.street} · {nap.addressLocality}, {nap.addressRegion}{" "}
            {nap.postalCode}
          </p>
          <a
            href={callUrl}
            className="inline-flex items-center gap-1 font-semibold text-white hover:text-sky-200"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden />
            {nap.phoneDisplay}
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="shrink-0 text-lg font-semibold tracking-tight text-slate-900">
          {name}
        </Link>
        <nav
          className="hidden flex-wrap items-center gap-4 text-sm text-slate-700 lg:flex"
          aria-label="Main"
        >
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-sky-800">
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.realscoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-sky-800 hover:text-sky-900"
          >
            Search homes
          </a>
          <CalendlyLink className="rounded-md bg-sky-700 px-4 py-2 font-semibold text-white hover:bg-sky-800">
            Book a call
          </CalendlyLink>
        </nav>
        <details className="relative lg:hidden">
          <summary className="cursor-pointer list-none rounded-md border border-slate-300 px-3 py-2 text-sm font-medium">
            Menu
          </summary>
          <div className="absolute right-0 mt-2 w-56 rounded-md border border-slate-200 bg-white p-3 shadow-lg">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-1.5 text-sm text-slate-700 hover:text-sky-800"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={callUrl}
              className="mt-2 block py-1.5 text-sm font-semibold text-sky-800"
            >
              Call {nap.phoneDisplay}
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
