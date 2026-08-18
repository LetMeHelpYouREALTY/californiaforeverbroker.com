import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { CalendlyLink } from "@/components/CalendlyLink";

export const metadata: Metadata = {
  title: "About Dr. Jan Duffy",
  description:
    "Meet Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties. Serving Las Vegas and Henderson since 2008. License S.0197614.LLC. Your trusted partner for California-to-Las-Vegas relocation.",
  alternates: { canonical: "/about" },
};

const highlights = [
  { label: "Nevada license", value: "S.0197614.LLC" },
  { label: "Serving Las Vegas", value: "Since 2008" },
  { label: "Brokerage", value: "BHHS NV" },
];

export default function AboutPage() {
  const { nap, agent } = siteConfig;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-espresso mb-6">
        About Dr. Jan Duffy
      </h1>

      <section className="prose prose-neutral max-w-none mb-10">
        <p className="text-lg text-earth">
          Dr. Jan Duffy is a REALTOR® with <strong>{agent.brokerage}</strong>, specializing in Las Vegas and Henderson real estate—with a focus on California homebuyers relocating to Southern Nevada.
        </p>
        <p className="text-earth">
          When you work with a Berkshire Hathaway HomeServices agent, you're backed by a name synonymous with trust, ethical standards, and financial strength—the same principles that built Warren Buffett's empire. You're not just getting one agent; you're getting a global network of 50,000+ agents, world-class marketing, and a brand that stands for accountability and results.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {highlights.map(({ label, value }) => (
          <div
            key={label}
            className="bg-pearl border border-rose rounded-lg p-5 text-center"
          >
            <p className="text-2xl font-bold text-espresso">{value}</p>
            <p className="text-sm text-earth">{label}</p>
          </div>
        ))}
      </section>

      <blockquote className="border-l-4 border-dove pl-6 py-2 my-10 text-earth italic">
        "When clients ask why they should choose a Berkshire Hathaway HomeServices agent, I tell them: you're not just getting me—you're getting a global network of 50,000 agents, world-class marketing, and a brand that's synonymous with trust."
        <cite className="block mt-2 not-italic text-earth font-medium">
          — Dr. Jan Duffy, {agent.brokerage}
        </cite>
      </blockquote>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-espresso mb-4">
          Why Choose Berkshire Hathaway HomeServices?
        </h2>
        <ul className="space-y-3 text-earth">
          <li><strong>Trusted brand</strong> — Backed by Warren Buffett's Berkshire Hathaway Inc.; unmatched financial stability.</li>
          <li><strong>Global network</strong> — 50,000+ agents worldwide for seamless referrals and relocations.</li>
          <li><strong>Market expertise</strong> — Serving Las Vegas since 2008, with deep knowledge of neighborhoods, new construction, and relocation.</li>
          <li><strong>Full service</strong> — Buying, selling, luxury, investment, and California relocation—we do it all.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-espresso mb-4">
          Contact Dr. Jan Duffy
        </h2>
        <div className="bg-pearl p-6 rounded-lg space-y-2 text-earth">
          <p className="font-semibold text-espresso">{nap.name}</p>
          <p>License {agent.license} | {agent.brokerage}</p>
          <p>{nap.streetAddress}</p>
          <a
            href={`tel:${nap.phone}`}
            className="block text-cabernet hover:underline font-medium"
          >
            {nap.phoneDisplay}
          </a>
        </div>
        <div className="flex flex-wrap gap-4 mt-6">
          <CalendlyLink className="inline-block bg-cabernet text-white px-5 py-2 rounded font-medium hover:bg-cabernet-dark">
            Schedule a call
          </CalendlyLink>
          <Link
            href="/contact"
            className="inline-block border border-cabernet text-espresso px-5 py-2 rounded font-medium hover:bg-cabernet hover:text-white"
          >
            Contact
          </Link>
          <a
            href={siteConfig.realscoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-cabernet text-espresso px-5 py-2 rounded font-medium hover:bg-cabernet hover:text-white"
          >
            Search homes for sale
          </a>
        </div>
      </section>
    </div>
  );
}
