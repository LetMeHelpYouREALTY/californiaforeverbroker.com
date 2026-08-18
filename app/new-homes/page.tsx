import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { pageSeo } from "@/lib/seo";
import { CalendlyLink } from "@/components/CalendlyLink";

export const metadata: Metadata = pageSeo("/new-homes", {
  title: "New Construction & Builder Incentives | Las Vegas & Henderson",
  description:
    "New homes and builder incentives for California homebuyers: Summerlin, Henderson, North Las Vegas. Rate buydowns, quick-move-in. Schedule a call with Dr. Jan Duffy for your new construction purchase.",
  openGraph: {
    title: "New Construction Las Vegas & Henderson | Builder Incentives",
    description:
      "Current builder incentives and new construction communities. Dr. Jan Duffy helps California relocators navigate new homes in Summerlin, Henderson, and the Las Vegas valley.",
  },
});

const builderFaqs = [
  {
    q: "Should I use a Realtor when buying new construction in Las Vegas?",
    a: "Yes. A buyer's agent like Dr. Jan Duffy represents you at no extra cost—builders typically pay the commission. She helps you compare communities, understand incentives and add-ons, and negotiate. California relocators especially benefit from having one expert for both resale and new construction options.",
  },
  {
    q: "What are builder incentives and rate buydowns?",
    a: "Builders often offer closing cost credits, design upgrades, or temporary rate buydowns (e.g., a lower rate in year 1 that steps up). These can save thousands. Incentives and deadlines change often; we track current promos and can connect you with the right community and lender.",
  },
  {
    q: "Where is new construction in Las Vegas and Henderson?",
    a: "New communities are spread across Summerlin, Henderson, North Las Vegas, Southwest Las Vegas, and Lake Las Vegas. Options range from first-time buyer price points (e.g., mid $300s) to luxury and 55+ active adult. We help you match your budget and lifestyle to the right area.",
  },
  {
    q: "How do I schedule a visit or talk to someone about new construction?",
    a: "Contact Dr. Jan Duffy to schedule a call or in-person visit. She specializes in California homebuyers relocating to Las Vegas and Henderson and can walk you through neighborhoods, builders, and current incentives so you're ready when you're ready to buy.",
  },
];

const builders = [
  {
    name: "Century Communities",
    summary:
      "Year of YES promotion with Flex Cash when financing with Inspire Home Loans®; 2.875% Year 1 rate on select Skye Canyon homes. Quick-move-in homes in Skye Canyon and Henderson (The Bluffs). 16 communities from ~$312K to $403K+.",
    bestFor: "First-time buyers, move-up buyers, investors. Skye Canyon for resort-style living near US-95.",
  },
  {
    name: "KB Home",
    summary:
      "Rate float-down: lock your rate while the home is built and capture a lower rate if rates drop before closing. Landings & Reserves at Aven (SW Las Vegas) opened January 2026, mid $400s. Sandstone in North Las Vegas (1,500 homes) coming. Vales at Manzano from ~$312K.",
    bestFor: "Affordable new construction, buyers who want customization. Entry from ~$312K.",
  },
  {
    name: "Lennar",
    summary:
      "Historically strong incentives; 3-2-1 buydowns and closing cost help have been offered—verify current promos with Lennar Mortgage. 33+ Las Vegas communities. Heritage at Stonebridge in Summerlin West: 55+ active adult, gated, single-family. Summerlin, Henderson, North Las Vegas.",
    bestFor: "55+ buyers (Heritage at Stonebridge), move-up buyers. Everything's Included package.",
  },
  {
    name: "Pulte & Del Webb",
    summary:
      "Pulte: multiple Las Vegas communities; rate and closing cost incentives vary—confirm with Pulte Mortgage. Del Webb at Lake Las Vegas: new 55+ community, 461 single-story homes (1,500–2,800 sq ft). First new Del Webb in the Las Vegas market in over a decade.",
    bestFor: "Del Webb: 55+ active adult buyers. Pulte: move-up, families, USAA members (design credit).",
  },
  {
    name: "Toll Brothers",
    summary:
      "Luxury new construction in Summerlin. Glenrock at Grand Park Village: 8 designs, 2,897–4,500+ sq ft, from ~$1.58M. 2/1 buydown on quick-move-in homes (verify closing deadlines with Toll Brothers Mortgage). Raven Crest townhomes; The Loughton; Ascension at The Peaks.",
    bestFor: "Luxury move-up, executives, Summerlin prestige. Glenrock for high-end single-family.",
  },
];

export default function NewHomesPage() {
  const { nap } = siteConfig;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-espresso mb-6">
        New Construction & Builder Incentives in Las Vegas & Henderson
      </h1>

      <section className="prose prose-neutral max-w-none mb-10">
        <p className="text-lg text-earth">
          California homebuyers relocating to Las Vegas have more choices than ever: new construction in Summerlin, Henderson, North Las Vegas, and Lake Las Vegas, with builder incentives like rate buydowns and closing cost credits. Working with a Realtor costs you nothing—builders typically pay your agent—and you get an advocate who knows the communities, the fine print on incentives, and how to align your purchase with your timeline and budget.
        </p>
        <p className="text-earth">
          <strong>Dr. Jan Duffy</strong> helps buyers navigate new construction and resale across the Las Vegas valley. You get accountable, licensed representation and one point of contact; we keep our builder and community intel updated so your decision is based on current information. Schedule a call or appointment to discuss your move, current builder incentives, and the best neighborhoods for your lifestyle.
        </p>
      </section>

      {/* CTA — primary conversion */}
      <section className="bg-cabernet text-white p-6 rounded-lg mb-10">
        <h2 className="text-xl font-bold mb-3">
          Schedule Your Homebuying Appointment with Dr. Jan Duffy
        </h2>
        <p className="text-rose mb-4">
          Get personalized guidance on new construction, builder incentives, and resale homes in Las Vegas and Henderson. One conversation can set you on the right path.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={`tel:${nap.phone}`}
            className="inline-block bg-white text-espresso px-5 py-2 rounded font-medium hover:bg-rose"
          >
            Call {nap.phoneDisplay}
          </a>
          <CalendlyLink className="inline-block border border-white text-white px-5 py-2 rounded font-medium hover:bg-white/10">
            Request an appointment
          </CalendlyLink>
        </div>
      </section>

      {/* Builder overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-espresso mb-4">
          Builders & Communities We Track
        </h2>
        <p className="text-earth mb-6">
          Incentives and deadlines change frequently. The summary below is for orientation; we verify current offers when you're ready to explore. All pricing and promotions are subject to builder and lender terms.
        </p>
        <div className="space-y-6">
          {builders.map((b) => (
            <div
              key={b.name}
              className="border border-rose rounded-lg p-5 bg-white"
            >
              <h3 className="text-lg font-bold text-espresso mb-2">{b.name}</h3>
              <p className="text-earth text-sm mb-2">{b.summary}</p>
              <p className="text-earth text-sm">
                <strong>Best for:</strong> {b.bestFor}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why use a Realtor + CTA */}
      <section className="mb-10 bg-pearl p-6 rounded-lg">
        <h2 className="text-xl font-bold text-espresso mb-4">
          Why Work with Dr. Jan Duffy for Your Las Vegas Purchase
        </h2>
        <ul className="list-disc list-inside space-y-2 text-earth mb-4">
          <li>One point of contact for new construction and resale across Las Vegas and Henderson</li>
          <li>Explanation of builder incentives, rate buydowns, and add-ons so you compare apples to apples</li>
          <li>Neighborhood expertise: Summerlin, Henderson, North Las Vegas, Lake Las Vegas, and more</li>
          <li>Focused on California relocators—taxes, timing, and a smooth move</li>
        </ul>
        <p className="text-earth mb-4">
          Buyer representation is typically paid by the seller or builder. Schedule a no-obligation call to discuss your goals.
        </p>
        <CalendlyLink className="inline-block bg-cabernet text-white px-5 py-2 rounded font-medium hover:bg-cabernet-dark">
          Schedule an appointment
        </CalendlyLink>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-espresso mb-4">
          Frequently Asked Questions
        </h2>
        <dl className="space-y-4">
          {builderFaqs.map(({ q, a }) => (
            <div key={q}>
              <dt className="font-semibold text-espresso">{q}</dt>
              <dd className="text-earth text-sm mt-1">{a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Final CTA */}
      <section className="border-t border-rose pt-8">
        <h2 className="text-xl font-bold text-espresso mb-3">
          Ready to Start Your Las Vegas Home Search?
        </h2>
        <p className="text-earth mb-4">
          Whether you're interested in new construction or resale in Summerlin, Henderson, or elsewhere in the valley, Dr. Jan Duffy is here to help California homebuyers make a confident move.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={`tel:${nap.phone}`}
            className="inline-block bg-cabernet text-white px-5 py-2 rounded font-medium hover:bg-cabernet-dark"
          >
            Call {nap.phoneDisplay}
          </a>
          <CalendlyLink className="inline-block border border-cabernet text-espresso px-5 py-2 rounded font-medium hover:bg-cabernet hover:text-white">
            Request an appointment
          </CalendlyLink>
          <Link
            href="/relocation"
            className="text-cabernet hover:underline font-medium"
          >
            California to Las Vegas relocation guide →
          </Link>
        </div>
      </section>

      {/* FAQ schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: builderFaqs.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          }),
        }}
      />
    </div>
  );
}
