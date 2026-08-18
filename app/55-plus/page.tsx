import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { pageSeo } from "@/lib/seo";
import { CalendlyLink } from "@/components/CalendlyLink";

export const metadata: Metadata = pageSeo("/55-plus", {
  title: "55+ Communities | Sun City Summerlin & Del Webb North Ranch",
  description:
    "Sun City Summerlin, Del Webb North Ranch, Heritage at Stonebridge. Compare HOA rules and lots with Dr. Jan Duffy. Call (949) 776-3527.",
});

const benefits = [
  "Age-qualified or age-targeted communities with tailored amenities",
  "Low-maintenance living: landscaping, clubs, pools, and activities",
  "Strong resale and demand from relocating buyers",
  "Options in Summerlin, Henderson, and the greater Las Vegas valley",
];

export default function FiftyFivePlusPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-espresso mb-6">
        55+ & Active Adult Communities
      </h1>

      <section className="prose prose-neutral max-w-none mb-10">
        <p className="text-lg text-earth">
          Sun City Summerlin, Del Webb North Ranch, and Heritage at Stonebridge
          are the 55+ communities I work most. California buyers often want
          low-maintenance lots, clubs, and pools — without Nevada state income tax.
        </p>
        <p className="text-earth">
          Age-qualified (55+) and age-targeted communities differ on HOA rules and
          resale. I will compare those line items before you tour.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-espresso mb-4">
          Why Consider 55+ or Active Adult?
        </h2>
        <ul className="list-disc list-inside space-y-2 text-earth">
          {benefits.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-10 bg-pearl p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-espresso mb-4">
          Where We Serve
        </h2>
        <p className="text-earth mb-4">
          Active adult and 55+ options are available across the valley—including Summerlin, Henderson, and North Las Vegas. New construction and resale both offer opportunities. Our <Link href="/neighborhoods" className="text-cabernet hover:underline">neighborhood guides</Link> and <Link href="/new-homes" className="text-cabernet hover:underline">new construction</Link> page cover many of these areas; we can narrow down communities based on your budget, desired amenities, and lifestyle.
        </p>
      </section>

      <section className="border-t border-rose pt-8">
        <p className="text-earth mb-4">
          Ready to explore 55+ and active adult communities? Schedule a call or contact us to discuss your criteria.
        </p>
        <div className="flex flex-wrap gap-4">
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
