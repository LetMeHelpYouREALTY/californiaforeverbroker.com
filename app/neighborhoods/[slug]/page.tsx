import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendlyLink } from "@/components/CalendlyLink";
import { JsonLd } from "@/components/JsonLd";
import { FaqBlock } from "@/components/sections/FaqBlock";
import { Button } from "@/components/ui/button";
import type { FaqItem } from "@/lib/faqs";
import { neighborhoods } from "@/lib/neighborhoods";
import { breadcrumbNode, faqPageNode, webPageNode } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return neighborhoods.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const neighborhood = neighborhoods.find((n) => n.slug === slug);
  if (!neighborhood) return { title: "Neighborhood" };
  return {
    title: `Homes for Sale in ${neighborhood.name} | Las Vegas Real Estate`,
    description: `Find homes in ${neighborhood.name}. ${neighborhood.priceFrom} and up. Expert help for California homebuyers relocating to Las Vegas. Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties.`,
    alternates: { canonical: `/neighborhoods/${slug}` },
  };
}

function neighborhoodFaqs(
  name: string,
  priceFrom: string,
): FaqItem[] {
  return [
    {
      q: `What do homes cost in ${name}?`,
      a: `Current listings on this site start at ${priceFrom}. That is a list-price floor, not an appraisal. Ask Dr. Duffy for comps on a specific address before you write an offer.`,
    },
    {
      q: `Who helps California buyers looking in ${name}?`,
      a: `Dr. Jan Duffy, license S.0197614.LLC, Berkshire Hathaway HomeServices Nevada Properties. Call (949) 776-3527 or book a 15-minute call. The Irvine office is 18600 MacArthur Blvd., Suite 150.`,
    },
  ];
}

export default async function NeighborhoodPage({ params }: Props) {
  const { slug } = await params;
  const neighborhood = neighborhoods.find((n) => n.slug === slug);
  if (!neighborhood) notFound();

  const faqs = neighborhoodFaqs(neighborhood.name, neighborhood.priceFrom);
  const path = `/neighborhoods/${slug}`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <JsonLd
        nodes={[
          webPageNode({
            path,
            name: `Homes for Sale in ${neighborhood.name}`,
            description: neighborhood.description,
            speakable: true,
          }),
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Neighborhoods", path: "/neighborhoods" },
            { name: neighborhood.name, path },
          ]),
          faqPageNode(faqs),
          {
            "@type": "Place",
            name: neighborhood.name,
            description: neighborhood.description,
            containedInPlace: { "@type": "City", name: "Las Vegas" },
          },
        ]}
      />
      <nav className="mb-6 text-sm text-earth" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-espresso">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/neighborhoods" className="hover:text-espresso">
          Neighborhoods
        </Link>
        <span className="mx-2">/</span>
        <span className="text-espresso">{neighborhood.name}</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-espresso">
        Homes for sale in {neighborhood.name}
      </h1>
      <p className="mt-2 text-earth">Listings from {neighborhood.priceFrom}</p>
      <p id="aeo-answer" className="mt-4 max-w-3xl text-earth">
        {neighborhood.description} Dr. Jan Duffy can pull live MLS results and
        schedule showings around a California departure date.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <a
            href={siteConfig.realscoutUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View homes in {neighborhood.name}
          </a>
        </Button>
        <CalendlyLink className="inline-flex items-center justify-center rounded-md border border-dove px-5 py-2.5 text-sm font-semibold text-espresso hover:bg-pearl">
          Schedule a call
        </CalendlyLink>
      </div>

      <FaqBlock faqs={faqs} heading={`${neighborhood.name} questions`} />
    </div>
  );
}
