import Link from "next/link";
import { CalendlyLink } from "@/components/CalendlyLink";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqBlock } from "@/components/sections/FaqBlock";
import { Button } from "@/components/ui/button";
import { homeFaqs } from "@/lib/faqs";
import { neighborhoods } from "@/lib/neighborhoods";
import { faqPageNode, webPageNode } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

const whyRelocate = [
  "Nevada has no state income tax — keep more of what you earn",
  "Lower typical purchase prices than most coastal California markets",
  "Job growth across hospitality, logistics, healthcare, and tech",
  "365-day outdoor access: trails, golf, Red Rock, and Lake Las Vegas",
];

const whyChooseUs = [
  { title: "Licensed since 2008", desc: "Nevada license S.0197614.LLC. Serving Las Vegas and Henderson buyers and sellers." },
  { title: "Relocation process", desc: "One agent from first search through closing for California-to-Nevada moves." },
  { title: "New-construction compare", desc: "Rate buydowns and closing credits compared across Summerlin, Henderson, and North Las Vegas." },
  { title: "BHHS network", desc: "Berkshire Hathaway HomeServices Nevada Properties listing and referral support." },
];

const testimonials = [
  { name: "Tom Sanders", location: "Las Vegas, NV", text: "Dr. Duffy made our relocation from California seamless. Her knowledge of the Las Vegas market is unmatched, and she guided us through every step with professionalism and care." },
  { name: "Vitor Palmer", location: "Henderson, NV", text: "We couldn't be happier with our new home! The entire process was smooth, and Dr. Duffy's attention to detail and negotiation skills saved us thousands. Highly recommend!" },
  { name: "Emily Rodriguez", location: "Summerlin, NV", text: "As first-time homebuyers moving from CA, we were nervous. Dr. Duffy patiently explained everything and helped us find the perfect home in our budget. Thank you!" },
];

export default function Home() {
  const { realscoutUrl } = siteConfig;

  return (
    <>
      <JsonLd
        nodes={[
          webPageNode({
            path: "/",
            name: "Homes for Sale Las Vegas & Henderson | California Forever Broker",
            description: siteConfig.description,
            speakable: true,
          }),
          faqPageNode(homeFaqs),
        ]}
      />

      <section className="bg-slate-950 px-4 py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-wide text-sky-300">
            California Forever Broker · Las Vegas & Henderson
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Buy a Las Vegas or Henderson home after a California move
          </h1>
          <p id="aeo-answer" className="mt-5 max-w-2xl text-lg text-slate-300">
            Dr. Jan Duffy, REALTOR®, license S.0197614.LLC, represents California
            homebuyers in Las Vegas and Henderson. Search live listings, compare
            10 neighborhoods, then book a 15-minute plan call at (949) 776-3527.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="secondary">
              <a href={realscoutUrl} target="_blank" rel="noopener noreferrer">
                Search homes for sale
              </a>
            </Button>
            <CalendlyLink className="inline-flex items-center justify-center rounded-md border border-white px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
              Talk to Dr. Duffy
            </CalendlyLink>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            Start with the{" "}
            <Link href="/relocation" className="text-white underline hover:no-underline">
              relocation guide
            </Link>{" "}
            or{" "}
            <Link href="/neighborhoods" className="text-white underline hover:no-underline">
              luxury homes in Summerlin
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Why California homebuyers look at Las Vegas
          </h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {whyRelocate.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Neighborhoods with homes for sale
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Compare list-price floors, commute corridors, and amenities. Figures
            are listing starting points, not appraisals.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {neighborhoods.map((n) => (
              <Link
                key={n.slug}
                href={`/neighborhoods/${n.slug}`}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-sky-700 hover:shadow-md"
              >
                <span className="font-semibold text-slate-900">{n.name}</span>
                <span className="mt-1 block text-sm text-slate-600">
                  Listings from {n.priceFrom}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            How Dr. Duffy works a relocation file
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {whyChooseUs.map(({ title, desc }) => (
              <div key={title} className="rounded-xl border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-900">{title}</h3>
                <p className="mt-1 text-sm text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Client notes
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Quotes below are client comments, not a Google star rating in schema.
            Read current reviews on Google.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {testimonials.map(({ name, location, text }) => (
              <blockquote
                key={name}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <p className="text-sm text-slate-700">{text}</p>
                <cite className="mt-3 block not-italic font-semibold text-slate-900">
                  {name}
                </cite>
                <span className="text-sm text-slate-500">{location}</span>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <FaqBlock faqs={homeFaqs} />
      <CtaBand
        title="Ready to buy in Las Vegas or Henderson?"
        body="Search listings, get a neighborhood short list, or talk through your California sale-to-purchase timeline."
      />
    </>
  );
}
