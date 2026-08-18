import { jsonLdGraph } from "@/lib/schema";

type JsonLdProps = {
  nodes?: object[];
  graph?: { "@context": string; "@graph": unknown[] };
};

export function JsonLd({ nodes, graph }: JsonLdProps) {
  const payload =
    graph ?? jsonLdGraph((nodes ?? []) as Record<string, unknown>[]);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
