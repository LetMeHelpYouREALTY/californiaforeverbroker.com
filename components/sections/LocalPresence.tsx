import { Phone, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  callUrl,
  directionsUrl,
  mapEmbedSrc,
  siteConfig,
} from "@/lib/site-config";

type LocalPresenceProps = {
  showMap?: boolean;
};

export function LocalPresence({ showMap = true }: LocalPresenceProps) {
  const { nap, hoursDisplay, hoursNote, gbpReviewUrl, agent } = siteConfig;

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
            {agent.name}, {agent.jobTitle}. License {agent.license}.{" "}
            {agent.brokerage}.
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
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <a href={callUrl}>
                <Phone className="h-4 w-4" aria-hidden />
                Call {nap.phoneDisplay}
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
                <MapPin className="h-4 w-4" aria-hidden />
                Directions
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={gbpReviewUrl} target="_blank" rel="noopener noreferrer">
                <Star className="h-4 w-4" aria-hidden />
                View Google Reviews
              </a>
            </Button>
          </div>
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
