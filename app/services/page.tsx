import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { pageSeo } from "@/lib/seo";
import { CalendlyLink } from "@/components/CalendlyLink";

export const metadata: Metadata = pageSeo("/services", {
  title: "Real Estate Services | Buy, Sell & Relocate to Las Vegas",
  description:
    "Buy, sell, relocate, new construction, 55+, VA, and probate. Las Vegas native selling since 1987. Dr. Jan Duffy, license S.0197614.LLC. Call (949) 776-3527.",
});

const services = [
  { title: "Home Buying", href: "/", description: "Street comps, not zip-code averages. If the payment will not feel good in year three, I will tell you." },
  { title: "California Relocators", href: "/relocation", description: "Your California agent keeps the relationship and earns a referral fee. I hold the Nevada license." },
  { title: "Home Selling", href: "/sellers", description: "Your actual number before you list. Three prices. Cancel anytime. No fee, no argument." },
  { title: "Luxury Homes", href: "/luxury", description: "The Ridges, The Summit, Red Rock Country Club, and Stonebridge. Same read other agents call for." },
  { title: "55+ & Active Adult", href: "/55-plus", description: "Sun City Summerlin, Del Webb North Ranch, Heritage at Stonebridge. Compare HOA rules and lots before you tour." },
  { title: "New Construction", href: "/new-homes", description: "Century, KB, Lennar, Pulte, Toll. I represent you at the builder’s table, not the builder." },
  { title: "Divorce and probate", href: "/sellers", description: "Handled quietly, handled fast. License S.0197614.LLC." },
  { title: "Investors", href: "/contact", description: "Real cap-rate math on North Las Vegas and Henderson. Call (949) 776-3527." },
  { title: "Veterans", href: "/contact", description: "VA loan certified. Same-day call, ten minutes, no pitch." },
  { title: "Market Insights", href: "/market-report", description: "Median price, days on market, and inventory for Las Vegas and Henderson. Ask for street comps before you use a zip-code average." },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-espresso mb-6">
        Real Estate Services
      </h1>

      <p className="text-lg text-earth mb-10">
        Las Vegas native. Selling homes here since 1987. Buying, selling, or
        relocating from California — one license, S.0197614.LLC, Berkshire
        Hathaway HomeServices Nevada Properties.
      </p>

      <section className="grid gap-6 mb-10">
        {services.map(({ title, href, description }) => (
          <Link
            key={href}
            href={href}
            className="block p-6 bg-pearl border border-rose rounded-lg hover:border-dove hover:bg-rose transition-colors"
          >
            <h2 className="text-xl font-bold text-espresso mb-2">{title}</h2>
            <p className="text-earth">{description}</p>
            <span className="inline-block mt-2 text-cabernet font-medium">
              Learn more →
            </span>
          </Link>
        ))}
      </section>

      <section className="border-t border-rose pt-8">
        <p className="text-earth mb-4">
          Ready to get started? Search homes, read our relocation guide, or schedule a call with Dr. Jan Duffy.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={siteConfig.realscoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cabernet text-white px-5 py-2 rounded font-medium hover:bg-cabernet-dark"
          >
            Search homes for sale
          </a>
          <CalendlyLink className="inline-block border border-cabernet text-espresso px-5 py-2 rounded font-medium hover:bg-cabernet hover:text-white">
            Schedule a call
          </CalendlyLink>
          <Link
            href="/contact"
            className="inline-block border border-cabernet text-espresso px-5 py-2 rounded font-medium hover:bg-cabernet hover:text-white"
          >
            Contact
          </Link>
        </div>
      </section>
    </div>
  );
}
