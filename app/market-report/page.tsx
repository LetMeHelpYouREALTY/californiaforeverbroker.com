import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { CalendlyLink } from "@/components/CalendlyLink";

export const metadata: Metadata = {
  title: "Las Vegas & Henderson Market Report | Homes for Sale Stats",
  description:
    "Current Las Vegas and Henderson real estate stats: median home price, days on market, inventory. For homebuyers and California relocators. Updated regularly.",
  alternates: { canonical: "/market-report" },
};

const stats = [
  { label: "Median Home Price", value: "$450K", sub: "+4.2% YoY" },
  { label: "Average Days on Market", value: "28", sub: "" },
  { label: "Active Listings", value: "4,850", sub: "" },
  { label: "Months of Inventory", value: "2.1", sub: "" },
];

export default function MarketReportPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">
        Las Vegas Real Estate Market Report
      </h1>
      <p className="text-slate-600 mb-8">
        Current market data for Las Vegas and Henderson. Update this page periodically with your preferred source (e.g., local MLS or brokerage reports).
      </p>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {stats.map(({ label, value, sub }) => (
          <div
            key={label}
            className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-center"
          >
            <p className="text-2xl font-bold text-slate-900">{value}</p>
            <p className="text-sm text-slate-600">{label}</p>
            {sub && <p className="text-xs text-slate-500 mt-1">{sub}</p>}
          </div>
        ))}
      </section>

      <p className="text-slate-600 text-sm mb-8">
        Data is indicative and may vary by area and time. For the most current numbers and a personalized market snapshot for your target neighborhood, contact us.
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
          Get a custom market report
        </Link>
      </div>
    </div>
  );
}
