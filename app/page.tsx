import type { Metadata } from "next";
import Link from "next/link";
import { CalendlyLink } from "@/components/CalendlyLink";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqBlock } from "@/components/sections/FaqBlock";
import { Button } from "@/components/ui/button";
import { agentStory } from "@/lib/agent-story";
import { homeFaqs } from "@/lib/faqs";
import { neighborhoods } from "@/lib/neighborhoods";
import { faqPageNode, webPageNode } from "@/lib/schema";
import { homeShare, pageSeo } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageSeo("/", {
  title: { absolute: homeShare.title },
  description: homeShare.description,
});

const whyRelocate = [
  "Nevada has no state income tax — keep more of what you earn",
  "Lower typical purchase prices than most coastal California markets",
  "Job growth across hospitality, logistics, healthcare, and tech",
  "365-day outdoor access: trails, golf, Red Rock, and Lake Las Vegas",
];

const whyChooseUs = [
  {
    title: "Selling since 1987",
    desc: "Las Vegas native. Nevada license S.0197614.LLC. Same valley, same streets.",
  },
  {
    title: "Your actual number",
    desc: "Comps from your subdivision, including what did not sell and why.",
  },
  {
    title: "Buyer at the builder’s table",
    desc: "Century, KB, Lennar, Pulte, Toll. I represent you, not the builder.",
  },
  {
    title: "California agent stays paid",
    desc: "Your California agent keeps the relationship and earns a referral fee.",
  },
];

export default function Home() {
  const { realscoutUrl } = siteConfig;

  return (
    <>
      <JsonLd
        nodes={[
          webPageNode({
            path: "/",
            name: "Homes for Sale Las Vegas & Henderson | California Forever Broker",
            description: siteConfig.description,
            speakable: true,
          }),
          faqPageNode(homeFaqs),
        ]}
      />

      <section className="bg-cabernet px-4 py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-wide text-blush">
            California Forever Broker · Las Vegas & Henderson
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Buy a Las Vegas or Henderson home after a California move
          </h1>
          <p id="aeo-answer" className="mt-5 max-w-2xl text-lg text-rose">
            Las Vegas native. Selling homes here since 1987. Dr. Jan Duffy,
            REALTOR®, license S.0197614.LLC, represents California buyers in
            Las Vegas and Henderson. Call (949) 776-3527.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="secondary">
              <a href={realscoutUrl} target="_blank" rel="noopener noreferrer">
                Search homes for sale
              </a>
            </Button>
            <CalendlyLink className="inline-flex items-center justify-center rounded-md border border-white px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
              Talk to Dr. Duffy
            </CalendlyLink>
          </div>
          <p className="mt-6 text-sm text-blush">
            Start with the{" "}
            <Link href="/relocation" className="text-white underline hover:no-underline">
              relocation guide
            </Link>{" "}
            or{" "}
            <Link href="/neighborhoods" className="text-white underline hover:no-underline">
              luxury homes in Summerlin
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="border-b border-rose bg-pearl px-4 py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
          {agentStory.stats.map(({ label, value }) => (
            <div key={label}>
              <p className="text-2xl font-bold text-espresso">{value}</p>
              <p className="mt-1 text-sm text-earth">{label}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-4 max-w-6xl text-sm text-earth">
          {agentStory.centuryAward}{" "}
          <Link href="/about" className="text-cabernet underline hover:no-underline">
            Read the full story
          </Link>
          .
        </p>
      </section>

      <section className="border-b border-rose px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-espresso">
            Why California homebuyers look at Las Vegas
          </h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {whyRelocate.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-rose bg-pearl px-4 py-3 text-earth"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-rose bg-pearl px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-espresso">
            Neighborhoods with homes for sale
          </h2>
          <p className="mt-2 max-w-2xl text-earth">
            Compare list-price floors, commute corridors, and amenities. Figures
            are listing starting points, not appraisals.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {neighborhoods.map((n) => (
              <Link
                key={n.slug}
                href={`/neighborhoods/${n.slug}`}
                className="rounded-xl border border-rose bg-white p-4 shadow-sm transition hover:border-cabernet hover:shadow-md"
              >
                <span className="font-semibold text-espresso">{n.name}</span>
                <span className="mt-1 block text-sm text-earth">
                  Listings from {n.priceFrom}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-rose px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-espresso">
            What you get from Dr. Duffy
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {whyChooseUs.map(({ title, desc }) => (
              <div key={title} className="rounded-xl border border-rose p-5">
                <h3 className="font-semibold text-espresso">{title}</h3>
                <p className="mt-1 text-sm text-earth">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-rose bg-pearl px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-espresso">
            Client notes
          </h2>
          <p className="mt-2 text-sm text-earth">
            Quotes from Zillow. Not a Google star rating in schema.{" "}
            <Link
              href={siteConfig.zillowProfileUrl}
              className="text-cabernet underline hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the Zillow profile
            </Link>
            .
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {agentStory.zillowQuotes.map((quote) => (
              <blockquote
                key={quote.text}
                className="rounded-xl border border-rose bg-white p-5"
              >
                <p className="text-sm text-earth">“{quote.text}”</p>
                <cite className="mt-3 block not-italic font-semibold text-espresso">
                  — {quote.source}
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <FaqBlock faqs={homeFaqs} />
      <CtaBand
        title="Ready to buy in Las Vegas or Henderson?"
        body="Search listings, get a neighborhood short list, or talk through your California sale-to-purchase timeline."
      />
    </>
  );
}
