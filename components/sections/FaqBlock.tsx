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
    <section className="border-t border-slate-200 py-12 px-4" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-6xl">
        <h2 id="faq-heading" className="text-2xl font-bold tracking-tight text-slate-900">
          {heading}
        </h2>
        <dl className="mt-6 divide-y divide-slate-200">
          {faqs.map((item) => (
            <div key={item.q} className="py-4">
              <dt className="font-semibold text-slate-900">{item.q}</dt>
              <dd className="faq-answer mt-2 text-slate-600">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
