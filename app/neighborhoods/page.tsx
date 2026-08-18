import type { Metadata } from "next";
import Link from "next/link";
import { neighborhoods } from "@/lib/neighborhoods";
import { pageSeo } from "@/lib/seo";
import { CalendlyLink } from "@/components/CalendlyLink";

export const metadata: Metadata = pageSeo("/neighborhoods", {
  title: "Homes for Sale by Neighborhood | Las Vegas & Henderson",
  description:
    "Find homes for sale in Summerlin, Henderson, Green Valley, Southern Highlands & more. Neighborhood guides for California homebuyers moving to Las Vegas.",
});

export default function NeighborhoodsIndexPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-espresso mb-4">
        Homes for Sale by Neighborhood — Las Vegas & Henderson
      </h1>
      <p className="text-earth mb-8">
        Explore where to buy: Summerlin, Henderson, Green Valley, and more. Each neighborhood has its own lifestyle and price range. Click through for details and current homes for sale. Interested in new construction? See our <Link href="/new-homes" className="text-cabernet hover:underline">new homes & builder incentives</Link> page, then <CalendlyLink className="text-cabernet hover:underline">schedule an appointment</CalendlyLink> with Dr. Jan Duffy.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {neighborhoods.map((n) => (
          <Link
            key={n.slug}
            href={`/neighborhoods/${n.slug}`}
            className="block bg-white border border-rose rounded-lg p-5 hover:shadow-md hover:border-dove"
          >
            <span className="font-semibold text-espresso block">{n.name}</span>
            <span className="text-sm text-earth">From {n.priceFrom}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
