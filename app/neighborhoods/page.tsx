import type { Metadata } from "next";
import Link from "next/link";
import { neighborhoods } from "@/lib/neighborhoods";
import { CalendlyLink } from "@/components/CalendlyLink";

export const metadata: Metadata = {
  title: "Homes for Sale by Neighborhood | Las Vegas & Henderson",
  description:
    "Find homes for sale in Summerlin, Henderson, Green Valley, Southern Highlands & more. Neighborhood guides for California homebuyers moving to Las Vegas.",
  alternates: { canonical: "/neighborhoods" },
};

export default function NeighborhoodsIndexPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-4">
        Homes for Sale by Neighborhood — Las Vegas & Henderson
      </h1>
      <p className="text-slate-600 mb-8">
        Explore where to buy: Summerlin, Henderson, Green Valley, and more. Each neighborhood has its own lifestyle and price range. Click through for details and current homes for sale. Interested in new construction? See our <Link href="/new-homes" className="text-blue-600 hover:underline">new homes & builder incentives</Link> page, then <CalendlyLink className="text-blue-600 hover:underline">schedule an appointment</CalendlyLink> with Dr. Jan Duffy.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {neighborhoods.map((n) => (
          <Link
            key={n.slug}
            href={`/neighborhoods/${n.slug}`}
            className="block bg-white border border-slate-200 rounded-lg p-5 hover:shadow-md hover:border-slate-300"
          >
            <span className="font-semibold text-slate-900 block">{n.name}</span>
            <span className="text-sm text-slate-600">From {n.priceFrom}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
