import type { Metadata } from "next";
import Link from "next/link";
import { CalendlyLink } from "@/components/CalendlyLink";
import { JsonLd } from "@/components/JsonLd";
import { FaqBlock } from "@/components/sections/FaqBlock";
import { GbpActions } from "@/components/sections/GbpActions";
import { aboutFaqs, agentStory } from "@/lib/agent-story";
import { faqPageNode, webPageNode } from "@/lib/schema";
import { pageSeo } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const aboutDescription =
  "Las Vegas native selling homes since 1987. $127 million closed, 500+ households. Dr. Jan Duffy, license S.0197614.LLC, Berkshire Hathaway HomeServices. Call (949) 776-3527.";

export const metadata: Metadata = pageSeo("/about", {
  title: "About Dr. Jan Duffy, Las Vegas REALTOR® Since 1987",
  description: aboutDescription,
});

export default function AboutPage() {
  const { nap, agent, zillowProfileUrl } = siteConfig;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <JsonLd
        nodes={[
          webPageNode({
            path: "/about",
            name: "About Dr. Jan Duffy, REALTOR®",
            description: aboutDescription,
          }),
          faqPageNode(aboutFaqs),
        ]}
      />

      <p className="text-sm font-medium uppercase tracking-wide text-cabernet">
        {agent.brokerage}
      </p>
      <h1 className="mt-2 text-3xl font-bold text-espresso md:text-4xl">
        {agentStory.headline}
      </h1>
      <p className="mt-3 text-xl text-earth">{agentStory.kicker}</p>

      <section className="mt-8 space-y-4 text-earth">
        {agentStory.origin.map((paragraph) => (
          <p key={paragraph} className="text-lg leading-relaxed">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {agentStory.stats.map(({ label, value }) => (
          <div
            key={label}
            className="rounded-lg border border-rose bg-pearl p-5 text-center"
          >
            <p className="text-xl font-bold text-espresso">{value}</p>
            <p className="mt-1 text-sm text-earth">{label}</p>
          </div>
        ))}
      </section>
      <p className="mt-3 text-sm text-earth">{agentStory.centuryAward}</p>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-espresso">
          {agentStory.selling.title}
        </h2>
        <ul className="mt-6 space-y-5">
          {agentStory.selling.items.map((item) => (
            <li key={item.title} className="rounded-lg border border-rose bg-white p-5">
              <h3 className="font-semibold text-espresso">{item.title}</h3>
              <p className="mt-2 text-earth">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-espresso">
          {agentStory.buying.title}
        </h2>
        <ul className="mt-6 space-y-5">
          {agentStory.buying.items.map((item) => (
            <li key={item.title} className="rounded-lg border border-rose bg-white p-5">
              <h3 className="font-semibold text-espresso">{item.title}</h3>
              <p className="mt-2 text-earth">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-lg border border-rose bg-pearl p-6">
        <h2 className="text-2xl font-bold text-espresso">
          The agent other agents call
        </h2>
        <p className="mt-3 text-earth">{agentStory.peerLine}</p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-espresso">
          {agentStory.process.title}
        </h2>
        <ol className="mt-6 list-decimal space-y-3 pl-5 text-earth">
          {agentStory.process.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
        <GbpActions />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-espresso">What clients wrote</h2>
        <p className="mt-2 text-sm text-earth">
          Quotes from{" "}
          <a
            href={zillowProfileUrl}
            className="text-cabernet underline hover:no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zillow
          </a>
          . Star counts are not marked up as schema.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {agentStory.zillowQuotes.map((quote) => (
            <blockquote
              key={quote.text}
              className="rounded-xl border border-rose bg-white p-5"
            >
              <p className="text-earth">“{quote.text}”</p>
              <cite className="mt-3 block not-italic text-sm font-medium text-espresso">
                — {quote.source}
              </cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-espresso">What I do most</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {agentStory.specialties.map((item) => (
            <div key={item.title} className="rounded-lg border border-rose p-5">
              <h3 className="font-semibold text-espresso">{item.title}</h3>
              <p className="mt-2 text-sm text-earth">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-earth">{agentStory.alsoServing}</p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-espresso">
          The brokerage behind me
        </h2>
        <div className="mt-4 space-y-4 text-earth">
          {agentStory.brokerage.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-lg border border-cabernet bg-pearl p-6">
        <h2 className="text-2xl font-bold text-espresso">
          One thing you should know before we tour
        </h2>
        {agentStory.buyerAgreement.map((paragraph) => (
          <p key={paragraph} className="mt-3 text-earth">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-espresso">Contact Dr. Jan Duffy</h2>
        <div className="mt-4 space-y-2 rounded-lg bg-pearl p-6 text-earth">
          <p className="font-semibold text-espresso">{nap.name}</p>
          <p>
            License {agent.license} | {agent.brokerage}
          </p>
          <p>{nap.streetAddress}</p>
          <p>{siteConfig.hoursDisplay}</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          <CalendlyLink className="inline-block rounded bg-cabernet px-5 py-2 font-medium text-white hover:bg-cabernet-dark">
            Schedule a call
          </CalendlyLink>
          <Link
            href="/contact"
            className="inline-block rounded border border-cabernet px-5 py-2 font-medium text-espresso hover:bg-cabernet hover:text-white"
          >
            Contact
          </Link>
          <Link
            href="/sellers"
            className="inline-block rounded border border-cabernet px-5 py-2 font-medium text-espresso hover:bg-cabernet hover:text-white"
          >
            Selling a home
          </Link>
        </div>
      </section>

      <FaqBlock faqs={aboutFaqs} />
    </div>
  );
}
