export interface PriceCard {
  title: string;
  bestFor: string;
  note: string;
  includes: string[];
  cta: string;
}

export const priceCards: PriceCard[] = [
  {
    title: 'Half-day guiding',
    bestFor: 'Best for Bujumbura, markets, Lake Tanganyika, arrival help or short cultural visits.',
    note: 'Price depends on route, group size and transport needs.',
    includes: [
      'Up to 4 hours with a local guide',
      'Private transport within the Bujumbura area when requested',
      'English, French or Kirundi guidance',
      'Flexible itinerary based on your interests',
    ],
    cta: 'Ask for a half-day quote',
  },
  {
    title: 'Full-day guiding',
    bestFor: 'Best for Gishora Drum Sanctuary, Rusizi, the highlands, Source of the Nile area or custom routes.',
    note: 'Price depends on destination, group size and transport needs.',
    includes: [
      'Up to 8 hours with a local guide',
      'Private transport to your chosen destinations',
      'English, French or Kirundi guidance',
      'Lunch stop arranged if requested',
      'Custom itinerary planned before you travel',
    ],
    cta: 'Ask for a full-day quote',
  },
  {
    title: 'Custom Burundi trip',
    bestFor: 'Best if you have several days, specific interests, business travel, family travel or unusual logistics.',
    note: 'Gabriel will suggest what is realistic based on your dates and route.',
    includes: [
      'Multi-day plans',
      'Airport pickup plus day trips',
      'Translation and transport support',
      'Flexible itineraries',
    ],
    cta: 'Ask for a custom quote',
  },
];
