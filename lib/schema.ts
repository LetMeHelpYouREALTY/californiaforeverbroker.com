import type { FaqItem } from "@/lib/faqs";
import { siteConfig } from "@/lib/site-config";

const base = siteConfig.siteUrl.replace(/\/$/, "");

export const schemaIds = {
  organization: `${base}/#organization`,
  person: `${base}/#person`,
  agent: `${base}/#realestateagent`,
  website: `${base}/#website`,
  webpage: (path = "/") => `${base}${path === "/" ? "" : path}#webpage`,
} as const;

export function postalAddress() {
  const { nap } = siteConfig;
  return {
    "@type": "PostalAddress" as const,
    streetAddress: nap.streetAddress,
    addressLocality: nap.addressLocality,
    addressRegion: nap.addressRegion,
    postalCode: nap.postalCode,
    addressCountry: nap.addressCountry,
  };
}

export function openingHoursSpecification() {
  return siteConfig.hours.map((block) => ({
    "@type": "OpeningHoursSpecification" as const,
    dayOfWeek: [...block.days],
    opens: block.opens,
    closes: block.closes,
  }));
}

export function siteEntityGraph() {
  const { nap, agent, geo, serviceAreaGeo, areaServed, services } = siteConfig;

  return [
    {
      "@type": "Organization",
      "@id": schemaIds.organization,
      name: agent.brokerage,
      url: siteConfig.bhhsProfileUrl,
    },
    {
      "@type": "Person",
      "@id": schemaIds.person,
      name: agent.name,
      jobTitle: agent.jobTitle,
      email: agent.email,
      telephone: nap.phone,
      url: `${base}/about`,
      worksFor: { "@id": schemaIds.organization },
      hasCredential: agent.license,
      knowsAbout: [
        "Las Vegas real estate",
        "Henderson homes for sale",
        "California to Las Vegas relocation",
        "New-construction buyer representation",
      ],
    },
    {
      "@type": ["RealEstateAgent", "LocalBusiness"],
      "@id": schemaIds.agent,
      name: nap.name,
      alternateName: siteConfig.name,
      url: base,
      telephone: nap.phone,
      email: agent.email,
      priceRange: "$$",
      address: postalAddress(),
      geo: {
        "@type": "GeoCoordinates",
        latitude: geo.latitude,
        longitude: geo.longitude,
      },
      openingHoursSpecification: openingHoursSpecification(),
      areaServed: [
        ...areaServed.map((name) => ({ "@type": "City", name })),
        {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: serviceAreaGeo.latitude,
            longitude: serviceAreaGeo.longitude,
          },
          geoRadius: serviceAreaGeo.radiusMeters,
        },
      ],
      parentOrganization: { "@id": schemaIds.organization },
      employee: { "@id": schemaIds.person },
      sameAs: [
        siteConfig.bhhsProfileUrl,
        siteConfig.gbpReviewUrl,
        siteConfig.calendlyUrl,
        siteConfig.realscoutUrl,
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Real estate services",
        itemListElement: services.map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": schemaIds.website,
      url: base,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: { "@id": schemaIds.agent },
      inLanguage: "en-US",
    },
  ];
}

export function webPageNode({
  path,
  name,
  description,
  speakable,
}: {
  path: string;
  name: string;
  description: string;
  speakable?: boolean;
}) {
  return {
    "@type": "WebPage",
    "@id": schemaIds.webpage(path),
    url: `${base}${path === "/" ? "" : path}`,
    name,
    description,
    isPartOf: { "@id": schemaIds.website },
    about: { "@id": schemaIds.agent },
    author: { "@id": schemaIds.person },
    inLanguage: "en-US",
    ...(speakable
      ? {
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["#aeo-answer", ".faq-answer"],
          },
        }
      : {}),
  };
}

export function faqPageNode(faqs: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbNode(
  items: { name: string; path: string }[],
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${base}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function jsonLdGraph(nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
