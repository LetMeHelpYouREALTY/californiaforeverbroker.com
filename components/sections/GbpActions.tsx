import { Phone, MapPin, Star, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  callUrl,
  directionsUrl,
  siteConfig,
} from "@/lib/site-config";

type GbpActionsProps = {
  className?: string;
};

export function GbpActions({ className }: GbpActionsProps) {
  const { nap, gbpMapsUrl, gbpReviewUrl } = siteConfig;

  return (
    <div className={className ?? "mt-6 flex flex-wrap gap-3"}>
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
        <a href={gbpMapsUrl} target="_blank" rel="noopener noreferrer">
          <Navigation className="h-4 w-4" aria-hidden />
          View on Google Maps
        </a>
      </Button>
      <Button asChild variant="outline">
        <a href={gbpReviewUrl} target="_blank" rel="noopener noreferrer">
          <Star className="h-4 w-4" aria-hidden />
          View Google Reviews
        </a>
      </Button>
    </div>
  );
}
