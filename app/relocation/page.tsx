import type { Metadata } from "next";
import Link from "next/link";
import { CalendlyLink } from "@/components/CalendlyLink";
import { JsonLd } from "@/components/JsonLd";
import { FaqBlock } from "@/components/sections/FaqBlock";
import { faqPageNode, webPageNode } from "@/lib/schema";
import { pageSeo } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageSeo("/relocation", {
  title: "California to Las Vegas Relocation Guide for Homebuyers",
  description:
    "Your California agent keeps the relationship and earns a referral fee. Dr. Jan Duffy has sold Las Vegas homes since 1987. Call (949) 776-3527.",
  robots: { index: true, follow: true },
});

const checklist = [
  "Get pre-approved for a mortgage (we can refer trusted lenders)",
  "Research Las Vegas and Henderson neighborhoods",
  "Decide on timing: sell in CA first or buy in NV first",
  "Schedule a discovery call or visit to tour homes",
  "Make an offer and negotiate with local market insight",
  "Coordinate inspections, appraisal, and closing",
  "Plan move and update address (DMV, utilities, etc.)",
];

const relocationFaqs = [
  { q: "Why are so many Californians moving to Las Vegas?", a: "No state income tax, lower housing costs, strong job growth, and a lower cost of living make Nevada attractive. Many keep their California job and work remotely, or find new opportunities in Las Vegas's growing economy." },
  { q: "How do Nevada taxes compare to California?", a: "Nevada has no state income tax. California's top rate can exceed 13%. Property tax structures differ; we can walk you through how your total tax burden changes when you relocate." },
  { q: "Can my California agent stay on the file?", a: "Yes. Your California agent keeps the relationship and earns a referral fee. Dr. Jan Duffy holds Nevada license S.0197614.LLC and handles the Las Vegas or Henderson purchase. Call (949) 776-3527." },
  { q: "How long does a typical relocation take?", a: "From first search to closing, plan for 2–4 months depending on whether you're selling in California first and how quickly you find the right home. We help coordinate both sides." },
];

export default function RelocationPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <JsonLd
        nodes={[
          webPageNode({
            path: "/relocation",
            name: "California to Las Vegas Relocation Guide",
            description:
              "Taxes, cost of living, commute, and a move checklist for California homebuyers buying in Las Vegas or Henderson.",
            speakable: true,
          }),
          faqPageNode(relocationFaqs),
        ]}
      />
      <h1 className="text-3xl font-bold text-espresso mb-6">
        California to Las Vegas Relocation Guide
      </h1>

      <section className="prose prose-neutral max-w-none mb-10">
        <p id="aeo-answer" className="text-lg text-earth">
          I grew up in Las Vegas. Started selling homes in 1987. Your California
          agent keeps the relationship and earns a referral fee. I hold the
          Nevada license and handle the purchase.
        </p>
        <p className="text-earth">
          No state income tax. Lower typical purchase prices than most coastal
          California markets. One accountable partner from first search through
          keys — license S.0197614.LLC, Berkshire Hathaway HomeServices Nevada
          Properties.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-espresso mb-4">
          Why Move from California to Las Vegas?
        </h2>
        <ul className="list-disc list-inside space-y-2 text-earth">
          <li><strong>No state income tax</strong> — Nevada residents keep more of their paycheck.</li>
          <li><strong>Lower cost of living</strong> — Housing, utilities, and everyday expenses are typically lower than in most California metros.</li>
          <li><strong>Strong job market</strong> — Las Vegas has diversified beyond gaming; healthcare, tech, and logistics are growing.</li>
          <li><strong>Lifestyle</strong> — Outdoor recreation, sunshine, and master-planned amenities in Summerlin and Henderson (trails, golf, 215 Beltway access).</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-espresso mb-4">
          Cost of Living & Taxes
        </h2>
        <p className="text-earth mb-4">
          Nevada has no state income tax, which can mean significant savings compared to California's top marginal rates. Property taxes work differently; we can provide a side-by-side comparison for your situation. Overall, many relocators find they get more home for their budget in the Las Vegas valley.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-espresso mb-4">
          Commute times and attendance boundaries
        </h2>
        <p className="text-earth mb-4">
          Ask for school names and attendance boundaries for a specific address,
          plus typical drive times to the 215, I-15, and Harry Reid International.
        </p>
      </section>

      <section className="mb-10 bg-pearl p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-espresso mb-4">
          New Construction & Builder Incentives
        </h2>
        <p className="text-earth mb-4">
          Many California homebuyers choose new construction in Summerlin, Henderson, North Las Vegas, or Lake Las Vegas. Builders often offer rate buydowns and closing cost credits—incentives change often, so working with a Realtor who tracks them helps you get the best deal. Dr. Jan Duffy represents buyers at no extra cost and can walk you through current communities and promos.
        </p>
        <p className="text-earth mb-4">
          <Link href="/new-homes" className="text-cabernet hover:underline font-medium">See our new construction & builder incentives page</Link> for an overview, then <CalendlyLink className="text-cabernet hover:underline font-medium">schedule an appointment</CalendlyLink> to discuss your homebuying plan.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/new-homes" className="inline-block bg-cabernet text-white px-5 py-2 rounded font-medium hover:bg-cabernet-dark">
            New homes & builder incentives
          </Link>
          <CalendlyLink className="inline-block border border-cabernet text-espresso px-5 py-2 rounded font-medium hover:bg-cabernet hover:text-white">
            Schedule a call with Dr. Jan Duffy
          </CalendlyLink>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-espresso mb-4">
          Relocation Checklist
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-earth">
          {checklist.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <FaqBlock faqs={relocationFaqs} />

      <section className="bg-rose p-6 rounded-lg">
        <h2 className="text-xl font-bold text-espresso mb-3">
          Ready to look at homes for sale?
        </h2>
        <p className="text-earth mb-4">
          Dr. Jan Duffy has sold Las Vegas homes since 1987. Search current
          listings or get street comps — not a zip-code average.
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
          <a
            href={`tel:${siteConfig.nap.phone}`}
            className="inline-block border border-cabernet text-espresso px-5 py-2 rounded font-medium hover:bg-cabernet hover:text-white"
          >
            Call {siteConfig.nap.phoneDisplay}
          </a>
          <CalendlyLink className="inline-block border border-cabernet text-espresso px-5 py-2 rounded font-medium hover:bg-cabernet hover:text-white">
            Schedule a call
          </CalendlyLink>
        </div>
      </section>
    </div>
  );
}
