import type { FaqItem } from "@/lib/faqs";

type FaqBlockProps = {
  faqs: FaqItem[];
  heading?: string;
};

export function FaqBlock({
  faqs,
  heading = "Frequently asked questions",
}: FaqBlockProps) {
  return (
    <section className="border-t border-rose py-12 px-4" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-6xl">
        <h2 id="faq-heading" className="text-2xl font-bold tracking-tight text-espresso">
          {heading}
        </h2>
        <dl className="mt-6 divide-y divide-rose">
          {faqs.map((item) => (
            <div key={item.q} className="py-4">
              <dt className="font-semibold text-espresso">{item.q}</dt>
              <dd className="faq-answer mt-2 text-earth">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
