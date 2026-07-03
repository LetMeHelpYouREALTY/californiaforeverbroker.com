import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { CalendlyLink } from "@/components/CalendlyLink";

export const metadata: Metadata = {
  title: "Real Estate Services | Buy, Sell & Relocate to Las Vegas",
  description:
    "Home buying, California relocation, home selling, luxury homes, 55+ communities, new construction. Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties.",
  alternates: { canonical: "/services" },
};

const services = [
  { title: "Home Buying", href: "/", description: "First-time or repeat buyer—we guide you from search to closing with local market insight and negotiation." },
  { title: "California Relocators", href: "/relocation", description: "Full relocation support: taxes, cost of living, schools, neighborhoods, and a clear checklist for your move to Las Vegas or Henderson." },
  { title: "Home Selling", href: "/sellers", description: "Selling in California before you move, or selling in Nevada. We help you price, stage, and market for the best outcome." },
  { title: "Luxury Homes", href: "/luxury", description: "The Ridges, Southern Highlands, and other premium communities. Custom estates and high-end resale in Las Vegas and Henderson." },
  { title: "55+ & Active Adult", href: "/55-plus", description: "Active adult and 55+ communities in the Las Vegas valley. Amenities, lifestyle, and the right fit for your next chapter." },
  { title: "New Construction", href: "/new-homes", description: "New builds in Summerlin, Henderson, North Las Vegas, and more. Builder incentives, communities, and Realtor representation at no extra cost." },
  { title: "Market Insights", href: "/market-report", description: "Current Las Vegas and Henderson market stats: median price, days on market, inventory. Updated for homebuyers and relocators." },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">
        Real Estate Services
      </h1>

      <p className="text-lg text-slate-700 mb-10">
        Whether you're buying, selling, or relocating from California to Las Vegas or Henderson, we offer full-service support backed by Berkshire Hathaway HomeServices Nevada Properties.
      </p>

      <section className="grid gap-6 mb-10">
        {services.map(({ title, href, description }) => (
          <Link
            key={href}
            href={href}
            className="block p-6 bg-slate-50 border border-slate-200 rounded-lg hover:border-slate-300 hover:bg-slate-100 transition-colors"
          >
            <h2 className="text-xl font-bold text-slate-900 mb-2">{title}</h2>
            <p className="text-slate-700">{description}</p>
            <span className="inline-block mt-2 text-blue-600 font-medium">
              Learn more →
            </span>
          </Link>
        ))}
      </section>

      <section className="border-t border-slate-200 pt-8">
        <p className="text-slate-700 mb-4">
          Ready to get started? Search homes, read our relocation guide, or schedule a call with Dr. Jan Duffy.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={siteConfig.realscoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-slate-900 text-white px-5 py-2 rounded font-medium hover:bg-slate-800"
          >
            Search homes for sale
          </a>
          <CalendlyLink className="inline-block border border-slate-900 text-slate-900 px-5 py-2 rounded font-medium hover:bg-slate-900 hover:text-white">
            Schedule a call
          </CalendlyLink>
          <Link
            href="/contact"
            className="inline-block border border-slate-900 text-slate-900 px-5 py-2 rounded font-medium hover:bg-slate-900 hover:text-white"
          >
            Contact
          </Link>
        </div>
      </section>
    </div>
  );
}
