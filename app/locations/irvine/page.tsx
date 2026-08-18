import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { GbpActions } from "@/components/sections/GbpActions";
import { FaqBlock } from "@/components/sections/FaqBlock";
import { faqPageNode, webPageNode } from "@/lib/schema";
import { irvineOfficeFaqs } from "@/lib/faqs";
import {
  mapEmbedSrc,
  siteConfig,
} from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Irvine Real Estate Office | Maps Listing for CA Relocators",
  description:
    "Visit Dr. Jan Duffy at 18600 MacArthur Blvd., Suite 150, Irvine, CA 92612. Call (949) 776-3527. Monday–Friday 8:30 a.m.–5:00 p.m. PT. Google Maps pin, hours, and Las Vegas buyer representation.",
  alternates: { canonical: "/locations/irvine" },
  other: {
    "geo.region": "US-CA",
    "geo.placename": "Irvine",
    "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
  },
};

export default function IrvineOfficePage() {
  const { nap, agent, hoursDisplay, hoursNote } = siteConfig;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <JsonLd
        nodes={[
          webPageNode({
            path: "/locations/irvine",
            name: "Irvine office | California Forever Broker",
            description: metadata.description as string,
            speakable: true,
          }),
          faqPageNode(irvineOfficeFaqs),
        ]}
      />
      <h1 className="text-3xl font-bold tracking-tight text-espresso">
        Irvine office at {nap.streetAddress}
      </h1>
      <p id="aeo-answer" className="mt-4 max-w-3xl text-earth">
        {agent.name} meets California relocators at {nap.street},{" "}
        {nap.addressLocality}, {nap.addressRegion} {nap.postalCode}. Call{" "}
        {nap.phoneDisplay}. Hours: {hoursDisplay}. Buyer work is Las Vegas and
        Henderson; the Maps pin is this Irvine suite.
      </p>

      <GbpActions />

      <section className="mt-10 grid gap-8 lg:grid-cols-2">
        <address className="not-italic text-earth">
          <h2 className="text-xl font-bold text-espresso">NAP (matches Google)</h2>
          <p className="mt-3 font-semibold text-espresso">{nap.name}</p>
          <p>{agent.brokerage}</p>
          <p>License {agent.license}</p>
          <p>{nap.street}</p>
          <p>
            {nap.addressLocality}, {nap.addressRegion} {nap.postalCode}
          </p>
          <p className="mt-3">
            <span className="font-medium">Phone: </span>
            {nap.phoneDisplay}
          </p>
          <p>
            <span className="font-medium">Hours: </span>
            {hoursDisplay}
          </p>
          <p className="text-sm">{hoursNote}</p>
        </address>
        <div>
          <h2 className="text-xl font-bold text-espresso">Google Map pin</h2>
          <div className="mt-3 aspect-video overflow-hidden rounded-xl border border-rose bg-rose">
            <iframe
              title={`Google Map of ${nap.streetAddress}`}
              src={mapEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-espresso">
          Services from this office
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-earth">
          {siteConfig.services.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4 text-earth">
          Compare{" "}
          <Link href="/neighborhoods" className="font-medium text-cabernet underline">
            luxury homes in Summerlin
          </Link>
          , the{" "}
          <Link href="/relocation" className="font-medium text-cabernet underline">
            California to Las Vegas relocation guide
          </Link>
          , or{" "}
          <Link href="/contact" className="font-medium text-cabernet underline">
            book from the contact page
          </Link>
          .
        </p>
      </section>

      <FaqBlock faqs={irvineOfficeFaqs} heading="Irvine office questions" />
    </div>
  );
}
