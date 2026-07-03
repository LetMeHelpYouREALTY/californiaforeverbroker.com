import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { CalendlyLink } from "@/components/CalendlyLink";
import { neighborhoods } from "@/lib/neighborhoods";

export const metadata: Metadata = {
  title: "Luxury Homes Las Vegas & Henderson | The Ridges, Southern Highlands",
  description:
    "Luxury and high-end homes in Las Vegas and Henderson: The Ridges, Southern Highlands, and premium communities. Dr. Jan Duffy, Berkshire Hathaway HomeServices.",
  alternates: { canonical: "/luxury" },
};

const luxurySlugs = ["the-ridges", "southern-highlands", "summerlin", "henderson"];
const luxuryNeighborhoods = neighborhoods.filter((n) => luxurySlugs.includes(n.slug));

export default function LuxuryPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">
        Luxury Homes in Las Vegas & Henderson
      </h1>

      <section className="prose prose-slate max-w-none mb-10">
        <p className="text-lg text-slate-700">
          From custom estates in The Ridges to premium resale in Southern Highlands, Summerlin, and Henderson, we help California relocators and luxury buyers find the right high-end property in Southern Nevada.
        </p>
        <p className="text-slate-700">
          Gated communities, mountain views, golf-course living, and top-tier finishes are all within reach. We bring local market knowledge and Berkshire Hathaway HomeServices marketing and network to your luxury purchase or sale.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Luxury Neighborhoods We Serve
        </h2>
        <ul className="space-y-4">
          {luxuryNeighborhoods.map(({ slug, name, priceFrom, description }) => (
            <li key={slug} className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <Link
                href={`/neighborhoods/${slug}`}
                className="text-xl font-bold text-slate-900 hover:text-blue-600"
              >
                {name}
              </Link>
              <p className="text-sm text-slate-600 mt-1">From {priceFrom}</p>
              <p className="text-slate-700 mt-2">{description}</p>
              <Link
                href={`/neighborhoods/${slug}`}
                className="inline-block mt-2 text-blue-600 font-medium hover:underline"
              >
                View {name} →
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-slate-200 pt-8">
        <p className="text-slate-700 mb-4">
          Ready to explore luxury homes? Search listings or schedule a call to discuss your criteria and preferred communities.
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
