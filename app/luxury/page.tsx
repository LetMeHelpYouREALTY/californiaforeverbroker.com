import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { pageSeo } from "@/lib/seo";
import { CalendlyLink } from "@/components/CalendlyLink";
import { neighborhoods } from "@/lib/neighborhoods";

export const metadata: Metadata = pageSeo("/luxury", {
  title: "Luxury Homes | The Ridges, The Summit, Red Rock Country Club",
  description:
    "Summerlin West luxury: The Ridges, The Summit, Red Rock Country Club, Stonebridge. Dr. Jan Duffy has sold Las Vegas homes since 1987. Call (949) 776-3527.",
});

const luxurySlugs = ["the-ridges", "southern-highlands", "summerlin", "henderson"];
const luxuryNeighborhoods = neighborhoods.filter((n) => luxurySlugs.includes(n.slug));

export default function LuxuryPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-espresso mb-6">
        Luxury Homes in Las Vegas & Henderson
      </h1>

      <section className="prose prose-neutral max-w-none mb-10">
        <p className="text-lg text-earth">
          Summerlin and Summerlin West luxury is most of my high-end work: The
          Ridges, The Summit, Red Rock Country Club, and Stonebridge. I also
          cover Southern Highlands and Henderson estates.
        </p>
        <p className="text-earth">
          Other agents call me for a read on view lots and what a street actually
          closed at. You get the same person they do.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-espresso mb-4">
          Luxury Neighborhoods We Serve
        </h2>
        <ul className="space-y-4">
          {luxuryNeighborhoods.map(({ slug, name, priceFrom, description }) => (
            <li key={slug} className="bg-pearl border border-rose rounded-lg p-5">
              <Link
                href={`/neighborhoods/${slug}`}
                className="text-xl font-bold text-espresso hover:text-cabernet"
              >
                {name}
              </Link>
              <p className="text-sm text-earth mt-1">From {priceFrom}</p>
              <p className="text-earth mt-2">{description}</p>
              <Link
                href={`/neighborhoods/${slug}`}
                className="inline-block mt-2 text-cabernet font-medium hover:underline"
              >
                View {name} →
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-rose pt-8">
        <p className="text-earth mb-4">
          Ready to explore luxury homes? Search listings or schedule a call to discuss your criteria and preferred communities.
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
