export const neighborhoods = [
  {
    slug: "summerlin",
    name: "Summerlin",
    priceFrom: "$625K",
    description:
      "Master-planned west-side community with Red Rock Canyon access, trail systems, and 215 Beltway commute options. Listings from $625K. Compare square footage and HOA amenities before you tour.",
  },
  {
    slug: "henderson",
    name: "Henderson",
    priceFrom: "$485K",
    description:
      "Independent city southeast of the Strip with Lake Las Vegas, a wide price band from entry-level to luxury, and I-215 / I-515 access. Listings from $485K.",
  },
  {
    slug: "green-valley",
    name: "Green Valley",
    priceFrom: "$520K",
    description:
      "Established Henderson neighborhood with mature landscaping, The District shopping, and 215 Beltway access. Listings from $520K.",
  },
  {
    slug: "the-ridges",
    name: "The Ridges",
    priceFrom: "$2.5M",
    description:
      "Gated Summerlin enclave with custom estates and mountain views. Low-density lots, Red Rock access, and 215 Beltway proximity. Listings from $2.5M.",
  },
  {
    slug: "southern-highlands",
    name: "Southern Highlands",
    priceFrom: "$750K",
    description:
      "Master-planned community near the 215 with golf, parks, and newer construction. Strip-adjacent without a Strip address. Listings from $750K.",
  },
  {
    slug: "north-las-vegas",
    name: "North Las Vegas",
    priceFrom: "$385K",
    description:
      "Among the lower list-price areas in the valley, with new construction and I-15 / 215 access. Listings from $385K for first-time buyers and investors relocating from California.",
  },
  {
    slug: "skye-canyon",
    name: "Skye Canyon",
    priceFrom: "$550K",
    description:
      "Northwest valley community with parks, trails, and newer homes. 215 Beltway access toward Summerlin. Listings from $550K.",
  },
  {
    slug: "centennial-hills",
    name: "Centennial Hills",
    priceFrom: "$495K",
    description:
      "Northwest Las Vegas with mixed housing stock, shopping along the 215, and outdoor recreation nearby. Listings from $495K.",
  },
  {
    slug: "inspirada",
    name: "Inspirada",
    priceFrom: "$525K",
    description:
      "Henderson master-planned community with parks, pools, and newer homes. Listings from $525K.",
  },
  {
    slug: "mountains-edge",
    name: "Mountains Edge",
    priceFrom: "$475K",
    description:
      "Southwest valley community with trails, parks, and newer construction. Listings from $475K.",
  },
] as const;

export type NeighborhoodSlug = (typeof neighborhoods)[number]["slug"];
