import { CalendlyLink } from "@/components/CalendlyLink";
import { Button } from "@/components/ui/button";
import { callUrl, siteConfig } from "@/lib/site-config";

type CtaBandProps = {
  title: string;
  body: string;
};

export function CtaBand({ title, body }: CtaBandProps) {
  return (
    <section className="bg-slate-950 px-4 py-14 text-white">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300">{body}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="secondary">
            <a
              href={siteConfig.realscoutUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Search homes for sale
            </a>
          </Button>
          <Button asChild variant="inverse">
            <a href={callUrl}>Call {siteConfig.nap.phoneDisplay}</a>
          </Button>
          <CalendlyLink className="inline-flex items-center justify-center rounded-md border border-white px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
            Book 15 minutes
          </CalendlyLink>
        </div>
      </div>
    </section>
  );
}
