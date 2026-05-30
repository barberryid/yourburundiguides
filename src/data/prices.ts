export interface PriceCard {
  title: string;
  note: string;
  includes: string[];
  cta: string;
}

export const priceCards: PriceCard[] = [
  {
    title: 'Half-Day Tour',
    note: 'Price depends on route, group size, and transport needs. Contact Gabriel for a clear quote.',
    includes: [
      'Up to 4 hours with a local guide',
      'Private transport within Bujumbura area',
      'English, French, or Kirundi guidance',
      'Flexible itinerary based on your interests',
    ],
    cta: 'Ask for a half-day quote',
  },
  {
    title: 'Full-Day Tour',
    note: 'Price depends on destination, group size, and transport needs. Contact Gabriel for a clear quote.',
    includes: [
      'Up to 8 hours with a local guide',
      'Private transport to your chosen destinations',
      'English, French, or Kirundi guidance',
      'Lunch stop arranged if requested',
      'Custom itinerary planned before you travel',
    ],
    cta: 'Ask for a full-day quote',
  },
  {
    title: 'Airport Pickup',
    note: 'Fixed route from Bujumbura International Airport. Ask Gabriel for the current price.',
    includes: [
      'Meet and greet at the airport',
      'Help with arrival formalities',
      'Private transport to your accommodation',
      'Local SIM and currency advice',
    ],
    cta: 'Ask about airport pickup',
  },
  {
    title: 'Multi-Day Package',
    note: 'Prices depend on the number of days, destinations, accommodation needs, and group size.',
    includes: [
      'Full daily guiding and transport',
      'Custom itinerary planned with you in advance',
      'Accommodation recommendations',
      'Flexible schedule adjustments during the trip',
    ],
    cta: 'Plan a multi-day trip',
  },
];
