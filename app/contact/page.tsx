import type { Metadata } from "next";
import Link from "next/link";
import { CalendlyInline } from "@/components/CalendlyInline";
import { JsonLd } from "@/components/JsonLd";
import { GbpActions } from "@/components/sections/GbpActions";
import { webPageNode } from "@/lib/schema";
import {
  mapEmbedSrc,
  siteConfig,
} from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact | Buy a Home in Las Vegas or Henderson",
  description:
    "Contact Dr. Jan Duffy at 18600 MacArthur Blvd., Suite 150, Irvine, CA 92612. Call (949) 776-3527. Monday–Friday 8:30 a.m.–5:00 p.m. PT.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const { nap, agent, hoursDisplay, hoursNote } = siteConfig;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <JsonLd
        nodes={[
          webPageNode({
            path: "/contact",
            name: "Contact Dr. Jan Duffy",
            description: metadata.description as string,
            speakable: true,
          }),
        ]}
      />
      <h1 className="text-3xl font-bold tracking-tight text-espresso">
        Contact Dr. Jan Duffy
      </h1>
      <p id="aeo-answer" className="mt-4 max-w-3xl text-earth">
        Call {nap.phoneDisplay} or book a 15-minute Calendly slot. The office is{" "}
        {nap.streetAddress}. Hours: {hoursDisplay}.
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div>
          <address className="not-italic text-earth">
            <p className="font-semibold text-espresso">{nap.name}</p>
            <p>{agent.brokerage}</p>
            <p>License {agent.license}</p>
            <p>{nap.street}</p>
            <p>
              {nap.addressLocality}, {nap.addressRegion} {nap.postalCode}
            </p>
            <p className="mt-3">
              <span className="font-medium">Hours: </span>
              {hoursDisplay}
            </p>
            <p className="text-sm text-earth">{hoursNote}</p>
          </address>
          <GbpActions />
          <p className="mt-6 text-sm text-earth">
            Search{" "}
            <a
              href={siteConfig.realscoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cabernet underline"
            >
              homes for sale
            </a>
            , read the{" "}
            <Link href="/relocation" className="text-cabernet underline">
              relocation guide
            </Link>
            , or review{" "}
            <Link href="/new-homes" className="text-cabernet underline">
              new construction
            </Link>
            .
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-espresso">
            Book a 15-minute call
          </h2>
          <div className="mt-3">
            <CalendlyInline />
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-espresso">Office map</h2>
        <div className="mt-4 aspect-video overflow-hidden rounded-xl border border-rose bg-rose">
          <iframe
            title={`Map to ${nap.streetAddress}`}
            src={mapEmbedSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
