import type { Metadata } from "next";
import Link from "next/link";
import { CalendlyLink } from "@/components/CalendlyLink";
import { JsonLd } from "@/components/JsonLd";
import { FaqBlock } from "@/components/sections/FaqBlock";
import { faqPageNode, webPageNode } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "California to Las Vegas Relocation Guide for Homebuyers",
  description:
    "Planning to buy a home in Las Vegas? Why California homebuyers move here: taxes, cost of living, schools & relocation checklist. Dr. Jan Duffy, Berkshire Hathaway.",
  alternates: { canonical: "/relocation" },
};

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
  { q: "What about schools in Las Vegas and Henderson?", a: "Clark County School District serves the valley. Ask for school names and attendance boundaries for a specific address, plus commute time to the 215 Beltway." },
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
      <h1 className="text-3xl font-bold text-slate-900 mb-6">
        California to Las Vegas Relocation Guide
      </h1>

      <section className="prose prose-slate max-w-none mb-10">
        <p id="aeo-answer" className="text-lg text-slate-700">
          More California homebuyers are choosing Las Vegas and Henderson for lower taxes, affordable housing, and a strong quality of life. Here's what you need to know and how to plan your move.
        </p>
        <p className="text-slate-700">
          This guide is a durable resource—we keep our relocation content, neighborhood insights, and market data current so you get lasting value. You also get one accountable partner: a licensed real estate professional backed by Berkshire Hathaway HomeServices, so your relocation is handled with clarity and compliance from start to finish.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Why Move from California to Las Vegas?
        </h2>
        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li><strong>No state income tax</strong> — Nevada residents keep more of their paycheck.</li>
          <li><strong>Lower cost of living</strong> — Housing, utilities, and everyday expenses are typically lower than in most California metros.</li>
          <li><strong>Strong job market</strong> — Las Vegas has diversified beyond gaming; healthcare, tech, and logistics are growing.</li>
          <li><strong>Lifestyle</strong> — Outdoor recreation, sunshine, and master-planned amenities in Summerlin and Henderson (trails, golf, 215 Beltway access).</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Cost of Living & Taxes
        </h2>
        <p className="text-slate-700 mb-4">
          Nevada has no state income tax, which can mean significant savings compared to California's top marginal rates. Property taxes work differently; we can provide a side-by-side comparison for your situation. Overall, many relocators find they get more home for their budget in the Las Vegas valley.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Schools and commute
        </h2>
        <p className="text-slate-700 mb-4">
          Clark County School District serves the Las Vegas valley. We share
          school names and attendance boundaries for any address you short-list,
          plus typical drive times to the 215, I-15, and McCarran/Harry Reid.
        </p>
      </section>

      <section className="mb-10 bg-slate-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          New Construction & Builder Incentives
        </h2>
        <p className="text-slate-700 mb-4">
          Many California homebuyers choose new construction in Summerlin, Henderson, North Las Vegas, or Lake Las Vegas. Builders often offer rate buydowns and closing cost credits—incentives change often, so working with a Realtor who tracks them helps you get the best deal. Dr. Jan Duffy represents buyers at no extra cost and can walk you through current communities and promos.
        </p>
        <p className="text-slate-700 mb-4">
          <Link href="/new-homes" className="text-blue-600 hover:underline font-medium">See our new construction & builder incentives page</Link> for an overview, then <CalendlyLink className="text-blue-600 hover:underline font-medium">schedule an appointment</CalendlyLink> to discuss your homebuying plan.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/new-homes" className="inline-block bg-slate-900 text-white px-5 py-2 rounded font-medium hover:bg-slate-800">
            New homes & builder incentives
          </Link>
          <CalendlyLink className="inline-block border border-slate-900 text-slate-900 px-5 py-2 rounded font-medium hover:bg-slate-900 hover:text-white">
            Schedule a call with Dr. Jan Duffy
          </CalendlyLink>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Relocation Checklist
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-slate-700">
          {checklist.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <FaqBlock faqs={relocationFaqs} />

      <section className="bg-slate-100 p-6 rounded-lg">
        <h2 className="text-xl font-bold text-slate-900 mb-3">
          Ready to look at homes for sale?
        </h2>
        <p className="text-slate-700 mb-4">
          Dr. Jan Duffy specializes in helping California homebuyers relocate to Las Vegas and Henderson. Search current listings or get personalized guidance and local market insight.
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
          <a
            href={`tel:${siteConfig.nap.phone}`}
            className="inline-block border border-slate-900 text-slate-900 px-5 py-2 rounded font-medium hover:bg-slate-900 hover:text-white"
          >
            Call {siteConfig.nap.phoneDisplay}
          </a>
          <CalendlyLink className="inline-block border border-slate-900 text-slate-900 px-5 py-2 rounded font-medium hover:bg-slate-900 hover:text-white">
            Schedule a call
          </CalendlyLink>
        </div>
      </section>
    </div>
  );
}
