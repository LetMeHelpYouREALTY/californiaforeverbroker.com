import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { CalendlyLink } from "@/components/CalendlyLink";

export const metadata: Metadata = {
  title: "55+ & Active Adult Communities | Las Vegas & Henderson",
  description:
    "55+ and active adult communities in Las Vegas and Henderson. Amenities, lifestyle, and the right fit for your next chapter. Dr. Jan Duffy, Berkshire Hathaway HomeServices.",
  alternates: { canonical: "/55-plus" },
};

const benefits = [
  "Age-qualified or age-targeted communities with tailored amenities",
  "Low-maintenance living: landscaping, clubs, pools, and activities",
  "Strong resale and demand from relocating buyers",
  "Options in Summerlin, Henderson, and the greater Las Vegas valley",
];

export default function FiftyFivePlusPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">
        55+ & Active Adult Communities
      </h1>

      <section className="prose prose-slate max-w-none mb-10">
        <p className="text-lg text-slate-700">
          Las Vegas and Henderson are home to a growing number of 55+ and active adult communities—popular with California relocators who want low-maintenance living, clubs, pools, and a built-in social scene without the snow or state income tax.
        </p>
        <p className="text-slate-700">
          Whether you're looking for age-qualified (55+) or age-targeted lifestyle communities, we can help you compare locations, amenities, and HOA structures so you find the right fit for your next chapter.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Why Consider 55+ or Active Adult?
        </h2>
        <ul className="list-disc list-inside space-y-2 text-slate-700">
          {benefits.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-10 bg-slate-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Where We Serve
        </h2>
        <p className="text-slate-700 mb-4">
          Active adult and 55+ options are available across the valley—including Summerlin, Henderson, and North Las Vegas. New construction and resale both offer opportunities. Our <Link href="/neighborhoods" className="text-blue-600 hover:underline">neighborhood guides</Link> and <Link href="/new-homes" className="text-blue-600 hover:underline">new construction</Link> page cover many of these areas; we can narrow down communities based on your budget, desired amenities, and lifestyle.
        </p>
      </section>

      <section className="border-t border-slate-200 pt-8">
        <p className="text-slate-700 mb-4">
          Ready to explore 55+ and active adult communities? Schedule a call or contact us to discuss your criteria.
        </p>
        <div className="flex flex-wrap gap-4">
          <CalendlyLink className="inline-block bg-slate-900 text-white px-5 py-2 rounded font-medium hover:bg-slate-800">
            Schedule a call
          </CalendlyLink>
          <Link
            href="/contact"
            className="inline-block border border-slate-900 text-slate-900 px-5 py-2 rounded font-medium hover:bg-slate-900 hover:text-white"
          >
            Contact
          </Link>
          <a
            href={siteConfig.realscoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-slate-900 text-slate-900 px-5 py-2 rounded font-medium hover:bg-slate-900 hover:text-white"
          >
            Search homes for sale
          </a>
        </div>
      </section>
    </div>
  );
}
