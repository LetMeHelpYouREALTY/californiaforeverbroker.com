import type { Metadata } from "next";
import Link from "next/link";
import { CalendlyLink } from "@/components/CalendlyLink";
import { agentStory } from "@/lib/agent-story";
import { pageSeo } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageSeo("/sellers", {
  title: "Sell Your Home | Three Prices, Cancel Anytime | Dr. Jan Duffy",
  description:
    "Get your actual number before you list. Three prices, cancel anytime, no fee. Dr. Jan Duffy has sold Las Vegas homes since 1987. Call (949) 776-3527.",
});

export default function SellersPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold text-espresso">Sell Your Home</h1>

      <section className="prose prose-neutral mb-10 max-w-none">
        <p className="text-lg text-earth">
          Your actual number, before you commit to anything. I will show you what
          sold in your subdivision — and what did not sell, and why.
        </p>
        <p className="text-earth">
          The failures matter most. That is where sellers lose money. Las Vegas
          native, selling homes here since 1987.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold text-espresso">
          {agentStory.selling.title}
        </h2>
        <ul className="space-y-4">
          {agentStory.selling.items.map((item) => (
            <li key={item.title} className="rounded-lg border border-rose bg-white p-5">
              <h3 className="font-semibold text-espresso">{item.title}</h3>
              <p className="mt-2 text-earth">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10 rounded-lg bg-pearl p-6">
        <h2 className="mb-4 text-2xl font-bold text-espresso">
          Relocating from California?
        </h2>
        <p className="mb-4 text-earth">
          Your California agent keeps the relationship and earns a referral fee.
          I handle the Nevada sale or the Las Vegas purchase on license
          S.0197614.LLC. Read the{" "}
          <Link href="/relocation" className="text-cabernet hover:underline">
            relocation guide
          </Link>{" "}
          and{" "}
          <Link href="/neighborhoods" className="text-cabernet hover:underline">
            luxury homes in Summerlin
          </Link>{" "}
          while you price the California house.
        </p>
      </section>

      <section className="border-t border-rose pt-8">
        <p className="mb-4 text-earth">
          Same day we talk. Ten minutes, no pitch. Call {siteConfig.nap.phoneDisplay}.
        </p>
        <div className="flex flex-wrap gap-4">
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
            href="/about"
            className="inline-block rounded border border-cabernet px-5 py-2 font-medium text-espresso hover:bg-cabernet hover:text-white"
          >
            About Dr. Duffy
          </Link>
        </div>
      </section>
    </div>
  );
}
