import type { FaqItem } from "@/lib/faqs";

/**
 * First-person bio copy supplied Aug 2026. Dated claims checked the same day:
 * Summerlin population ~127,000 (Summerlin.com / Howard Hughes). BHHS AZ/CA/NV
 * group is the fifth-largest BHHS franchise worldwide (Nevada Business, 2026).
 * EquiTrend Brand of the Year years are 2014, 2018, 2020 — not a 2026 award.
 * Do not say the franchise is independently owned (it is a HomeServices subsidiary).
 * California relocator headcount marked VERIFY in source copy — omit until sourced.
 */
export const agentStory = {
  headline: "Dr. Jan Duffy, REALTOR®",
  kicker: "Las Vegas native. Selling homes here since 1987.",
  origin: [
    "I grew up here. Started selling homes in 1987.",
    "Which means I was already working this valley when they announced Summerlin. Watched them build Summerlin Parkway — locals called it “the road to nowhere.” Four miles of brand-new asphalt running straight out into empty desert. Everybody laughed. That desert holds 127,000 people now.",
    "Same valley, same streets, 500+ families moved. Nevada license S.0197614.LLC.",
    "I know what your house is worth. Not a guess. Not an algorithm’s opinion. The real number.",
  ],
  selling: {
    title: "Selling? Here’s what you get.",
    items: [
      {
        title: "Your actual number, before you commit",
        body: "I’ll show you what sold in your subdivision — and what didn’t sell, and why. The failures matter most. That’s where sellers lose money.",
      },
      {
        title: "Three prices. You pick.",
        body: "Market, aspirational, premium. For each one I’ll tell you the showings to expect and the odds you end up cutting the price on day 30. Then it’s your decision, not mine.",
      },
      {
        title: "Cancel anytime",
        body: "No penalty. No fee. No argument. If I’m not earning it, you shouldn’t be stuck with me.",
      },
    ],
  },
  buying: {
    title: "Buying? Here’s what you get.",
    items: [
      {
        title: "Somebody who’s already been in the neighborhood",
        body: "Which lots keep the Red Rock view once the next phase frames up. Which streets pond in an August storm. Which way that patio faces — west-facing in July is 112° of afternoon sun, and it costs you at resale.",
      },
      {
        title: "Straight answers on what to pay",
        body: "What the last four homes on that street actually closed at. Not the zip code average. The street.",
      },
      {
        title: "Nobody pushing you to stretch",
        body: "If the payment won’t still feel good in year three, I’ll tell you.",
      },
    ],
  },
  peerLine:
    "Other REALTORS® call me when they need a read out here. Which builder phase had the problem. Whether that lot really holds its view. What a Sun City single-story is worth this month. You get the same person they do.",
  process: {
    title: "What happens when you call",
    items: [
      "Same day — we talk. Ten minutes, no pitch, no obligation.",
      "Within 24 hours — you get real numbers on your home or your target neighborhood.",
      "Then you decide. That’s it. No follow-up campaign, no pressure calls.",
    ],
  },
  stats: [
    { label: "Las Vegas native", value: "Since 1987" },
    { label: "Closed volume", value: "$127 million" },
    { label: "Households helped", value: "500+" },
    { label: "realtor.com reviews", value: "4.9★ · 51" },
  ],
  centuryAward:
    "Named Best New Home REALTOR® in Las Vegas by Century Communities, 2025.",
  zillowQuotes: [
    {
      text: "Dr. Jan was wonderful. We told her what we were looking for and she found the perfect home. Besides getting our dream home, we have a new friend for life.",
      source: "Zillow review",
    },
    {
      text: "Very knowledgeable. Could not have found our dream home and clinched the deal without her.",
      source: "Zillow review",
    },
  ],
  specialties: [
    {
      title: "New construction",
      body: "Century Communities named me Las Vegas’s best new-home REALTOR® in 2025. I also work KB, Lennar, Pulte, and Toll Brothers. I know which phase you want and which lot to fight for — and I represent you at the builder’s table, not the builder.",
    },
    {
      title: "Summerlin & Summerlin West luxury",
      body: "The Ridges, The Summit, Red Rock Country Club, Stonebridge.",
    },
    {
      title: "55+ communities",
      body: "Sun City Summerlin, Del Webb North Ranch, Heritage at Stonebridge.",
    },
    {
      title: "Moving from California",
      body: "Your California agent keeps the relationship and earns a referral fee. One Nevada license covers the purchase.",
    },
    {
      title: "Divorce and probate",
      body: "Handled quietly, handled fast.",
    },
    {
      title: "High-rise condos",
      body: "Strip corridor and Arts District.",
    },
    {
      title: "Investors",
      body: "Real cap-rate math on North Las Vegas and Henderson.",
    },
    {
      title: "Veterans",
      body: "VA loan certified.",
    },
  ],
  alsoServing:
    "Also serving Henderson, North Las Vegas, Centennial Hills, Skye Canyon, Providence, Silverstone Ranch, Rhodes Ranch, Spanish Trail, Southern Highlands, The Lakes, and Boulder City.",
  brokerage: [
    "I’m with Berkshire Hathaway HomeServices Nevada Properties — and that matters more on your transaction than most agents let on.",
    "Our Arizona, California & Nevada group ranks #5 among Berkshire Hathaway HomeServices franchises worldwide (2026). In 2025 the group closed $4.7 billion across those three states.",
    "What you get from that: relocation infrastructure that moves clients between states without a handoff, a luxury marketing platform with global listing distribution, and a brand Harris Poll EquiTrend named Real Estate Agency Brand of the Year in 2014, 2018, and 2020.",
    "The brand gets your listing seen. I’m the one who gets it sold.",
  ],
  buyerAgreement: [
    "Since August 2024, every buyer signs a representation agreement before seeing a home. Mine states a specific amount, it’s fully negotiable, and it isn’t set by law.",
    "We’ll go through it together before we see a single house. Nothing at closing will surprise you.",
  ],
} as const;

export const aboutFaqs: FaqItem[] = [
  {
    q: "How long has Dr. Jan Duffy sold homes in Las Vegas?",
    a: "She grew up in Las Vegas and has sold homes here since 1987. Current Nevada license is S.0197614.LLC with Berkshire Hathaway HomeServices Nevada Properties.",
  },
  {
    q: "Do buyers have to sign an agreement before touring?",
    a: "Yes. Since August 2024, buyers sign a representation agreement before seeing a home. Dr. Duffy’s agreement states a specific amount, is fully negotiable, and is not set by law. You review it together before the first tour.",
  },
  {
    q: "Does she represent buyers at new-construction communities?",
    a: "Yes. She represents you at the builder’s table — Century Communities, KB, Lennar, Pulte, and Toll Brothers — not the builder. The builder typically pays the buyer-broker fee.",
  },
  {
    q: "Can my California agent stay involved if I buy in Nevada?",
    a: "Yes. Your California agent keeps the relationship and earns a referral fee. Dr. Duffy holds the Nevada license and handles the Las Vegas or Henderson purchase. Call (949) 776-3527.",
  },
  {
    q: "What happens when I call?",
    a: "Same day you get a ten-minute call, no pitch. Within 24 hours you get real numbers on your home or target neighborhood. Then you decide. Call (949) 776-3527.",
  },
];
