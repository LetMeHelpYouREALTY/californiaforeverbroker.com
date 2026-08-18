import type { Metadata } from "next";
import Link from "next/link";
import { CalendlyLink } from "@/components/CalendlyLink";
import { agentStory } from "@/lib/agent-story";
import { neighborhoods } from "@/lib/neighborhoods";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo("/neighborhoods", {
  title: "Homes for Sale by Neighborhood | Las Vegas & Henderson",
  description:
    "Find homes for sale in Summerlin, Henderson, Green Valley, Southern Highlands, and more. Dr. Jan Duffy has sold Las Vegas homes since 1987. Call (949) 776-3527.",
});

export default function NeighborhoodsIndexPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-4 text-3xl font-bold text-espresso">
        Homes for Sale by Neighborhood — Las Vegas & Henderson
      </h1>
      <p className="mb-8 text-earth">
        Compare list-price floors, commute corridors, and amenities. Figures are
        listing starting points, not appraisals. New construction? See{" "}
        <Link href="/new-homes" className="text-cabernet hover:underline">
          builder incentives
        </Link>
        , then{" "}
        <CalendlyLink className="text-cabernet hover:underline">
          schedule a call
        </CalendlyLink>
        .
      </p>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {neighborhoods.map((n) => (
          <Link
            key={n.slug}
            href={`/neighborhoods/${n.slug}`}
            className="block rounded-lg border border-rose bg-white p-5 hover:border-dove hover:shadow-md"
          >
            <span className="block font-semibold text-espresso">{n.name}</span>
            <span className="text-sm text-earth">From {n.priceFrom}</span>
          </Link>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-espresso">Also serving</h2>
        <p className="mt-2 text-sm text-earth">
          Street-level comps on request. No invented list-price floors here.
        </p>
        <ul className="mt-4 grid grid-cols-2 gap-2 text-earth md:grid-cols-3">
          {agentStory.alsoServingPlaces.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
