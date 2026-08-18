import Link from "next/link";
import { CalendlyLink } from "@/components/CalendlyLink";
import { LocalPresence } from "@/components/sections/LocalPresence";
import { siteConfig } from "@/lib/site-config";

const footerNav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/new-homes", label: "New Homes" },
  { href: "/sellers", label: "Sell Your Home" },
  { href: "/neighborhoods", label: "Neighborhoods" },
  { href: "/luxury", label: "Luxury Homes" },
  { href: "/55-plus", label: "55+ Communities" },
  { href: "/relocation", label: "Relocation Guide" },
  { href: "/market-report", label: "Market Report" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const { agent, siteUrl, realscoutUrl } = siteConfig;
  const monthYear = new Date().toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <footer className="mt-auto">
      <LocalPresence />
      <div className="border-t border-cabernet-dark bg-espresso px-4 py-10 text-rose">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <p className="font-semibold text-white">{agent.name}</p>
            <p className="mt-1 text-sm">
              License {agent.license} | {agent.brokerage}
            </p>
            <CalendlyLink className="mt-3 inline-block text-sm font-medium text-blush hover:text-white">
              Book a 15-minute call
            </CalendlyLink>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm" aria-label="Footer">
            <a
              href={realscoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Search Homes for Sale
            </a>
            {footerNav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mx-auto mt-8 max-w-6xl text-xs text-dove">
          Neighborhood guides, relocation notes, and market pages are reviewed for
          California-to-Las-Vegas buyers. Last updated: {monthYear} |{" "}
          {siteUrl.replace("https://", "")} – {agent.brokerage}. Equal Housing
          Opportunity.
        </p>
      </div>
    </footer>
  );
}
