import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { CalendlyLink } from "@/components/CalendlyLink";

export const metadata: Metadata = {
  title: "Sell Your Home | California or Nevada | Dr. Jan Duffy",
  description:
    "Selling your home in California before relocating, or selling in Las Vegas or Henderson. Full-service representation. Berkshire Hathaway HomeServices.",
  alternates: { canonical: "/sellers" },
};

const steps = [
  "Consultation and market analysis for your area",
  "Pricing strategy and preparation recommendations",
  "Professional marketing and listing exposure",
  "Showings, offers, and negotiation",
  "Coordination with inspections, appraisal, and closing",
];

export default function SellersPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Sell Your Home</h1>

      <section className="prose prose-slate max-w-none mb-10">
        <p className="text-lg text-slate-700">
          Whether you are selling in California before your move to Las Vegas, or
          selling a property in Nevada, you deserve an agent who knows the
          local market and can get you to closing with confidence.
        </p>
        <p className="text-slate-700">
          Dr. Jan Duffy and Berkshire Hathaway HomeServices Nevada Properties
          offer full-service listing representation: pricing, staging advice,
          professional marketing, and negotiation.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          How We Help Sellers
        </h2>
        <ul className="list-disc list-inside space-y-2 text-slate-700">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </section>

      <section className="mb-10 bg-slate-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Relocating from California?
        </h2>
        <p className="text-slate-700 mb-4">
          Many clients sell in California first, then buy in Las Vegas or
          Henderson. We help you time the sale, understand equity and tax
          implications, and connect you with trusted resources. Our{" "}
          <Link href="/relocation" className="text-blue-600 hover:underline">
            relocation guide
          </Link>{" "}
          and{" "}
          <Link href="/neighborhoods" className="text-blue-600 hover:underline">
            neighborhood guides
          </Link>{" "}
          help you plan the buy side while you prepare to sell.
        </p>
      </section>

      <section className="border-t border-slate-200 pt-8">
        <p className="text-slate-700 mb-4">
          Get a complimentary consultation. Schedule a call or contact us.
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
