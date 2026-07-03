import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { neighborhoods } from "@/lib/neighborhoods";
import { siteConfig } from "@/lib/site-config";
import { CalendlyLink } from "@/components/CalendlyLink";

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

export default async function NeighborhoodPage({ params }: Props) {
  const { slug } = await params;
  const neighborhood = neighborhoods.find((n) => n.slug === slug);
  if (!neighborhood) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Neighborhoods", item: `${siteConfig.siteUrl}/neighborhoods` },
      { "@type": "ListItem", position: 3, name: neighborhood.name, item: `${siteConfig.siteUrl}/neighborhoods/${slug}` },
    ],
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <nav className="text-sm text-slate-600 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-slate-900">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/neighborhoods" className="hover:text-slate-900">Neighborhoods</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">{neighborhood.name}</span>
      </nav>

      <h1 className="text-3xl font-bold text-slate-900 mb-4">
        {neighborhood.name}
      </h1>
      <p className="text-slate-600 mb-2">Homes from {neighborhood.priceFrom}</p>
      <p className="text-slate-700 mb-8">
        {neighborhood.description} Browse current listings or contact us for a personalized tour.
      </p>

      <div className="flex flex-wrap gap-4">
        <a
          href={siteConfig.realscoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-slate-900 text-white px-5 py-2 rounded font-medium hover:bg-slate-800"
        >
          View homes in {neighborhood.name}
        </a>
        <CalendlyLink className="inline-block border border-slate-900 text-slate-900 px-5 py-2 rounded font-medium hover:bg-slate-50">
          Schedule a call
        </CalendlyLink>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </div>
  );
}
