import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { CalendlyInline } from "@/components/CalendlyInline";

export const metadata: Metadata = {
  title: "Contact | Buy a Home in Las Vegas or Henderson",
  description:
    "Contact Dr. Jan Duffy to buy a home in Las Vegas or Henderson. California relocation, first-time homebuyer help, and neighborhood tours. Call or send a message.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const { nap, agent } = siteConfig;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-slate-700 mb-6">
            Schedule an appointment with Dr. Jan Duffy for your homebuying or relocation plan. You get accountable, licensed representation—one clear point of contact for your California-to-Las-Vegas move. Whether you're interested in resale, new construction, or builder incentives in Las Vegas and Henderson, we're here to help. <a href={siteConfig.realscoutUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Search homes for sale</a>, read our <Link href="/relocation" className="text-blue-600 hover:underline">relocation guide</Link>, or <Link href="/new-homes" className="text-blue-600 hover:underline">new construction & builder incentives</Link>—then call or send a message to get started.
          </p>
          <div className="space-y-3 text-slate-700">
            <p className="font-semibold text-slate-900">{nap.name}</p>
            <p>{agent.brokerage}</p>
            <p>License {agent.license}</p>
            <p>{nap.streetAddress}</p>
            <a
              href={`tel:${nap.phone}`}
              className="block text-blue-600 hover:underline font-medium"
            >
              {nap.phoneDisplay}
            </a>
          </div>
          <a
            href={`tel:${nap.phone}`}
            className="mt-6 inline-block bg-slate-900 text-white px-5 py-2 rounded font-medium hover:bg-slate-800"
          >
            Call {nap.phoneDisplay}
          </a>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            Book a 15-minute call with Dr. Jan Duffy
          </h2>
          <CalendlyInline />
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          Office location
        </h2>
        <div className="aspect-video bg-slate-200 rounded-lg overflow-hidden">
          <iframe
            title="Office map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206253.450066447!2d-115.315399!3d36.124961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c2f2b3b3b3b3%3A0x0!2sLas%20Vegas%2C%20NV!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="text-sm text-slate-500 mt-2">
          Serving Las Vegas and Henderson. Schedule a call or visit.
        </p>
      </section>
    </div>
  );
}
