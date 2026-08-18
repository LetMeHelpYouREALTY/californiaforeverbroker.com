import { GbpActions } from "@/components/sections/GbpActions";
import {
  mapEmbedSrc,
  siteConfig,
} from "@/lib/site-config";

type LocalPresenceProps = {
  showMap?: boolean;
};

export function LocalPresence({ showMap = true }: LocalPresenceProps) {
  const { nap, hoursDisplay, hoursNote, agent } = siteConfig;

  return (
    <section
      id="visit"
      className="border-t border-rose bg-white py-12 px-4"
      aria-labelledby="local-presence-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        <div>
          <h2
            id="local-presence-heading"
            className="text-2xl font-bold tracking-tight text-espresso"
          >
            Office, hours, and contact
          </h2>
          <p className="mt-2 text-earth">
            {agent.name}, {agent.jobTitle}. Las Vegas native, selling homes here
            since 1987. License {agent.license}. {agent.brokerage}.
          </p>
          <address className="mt-4 not-italic text-espresso">
            <p className="font-semibold">{nap.name}</p>
            <p>{nap.street}</p>
            <p>
              {nap.addressLocality}, {nap.addressRegion} {nap.postalCode}
            </p>
          </address>
          <p className="mt-3 text-earth">
            <span className="font-medium">Hours: </span>
            {hoursDisplay}
          </p>
          <p className="text-sm text-earth">{hoursNote}</p>
          <GbpActions />
        </div>
        {showMap ? (
          <div className="aspect-video overflow-hidden rounded-xl border border-rose bg-rose">
            <iframe
              title={`Map to ${nap.streetAddress}`}
              src={mapEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
