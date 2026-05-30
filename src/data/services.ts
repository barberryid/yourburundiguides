export interface Service {
  icon: string;
  title: string;
  description: string;
  bestFor?: string[];
}

export const services: Service[] = [
  {
    icon: '',
    title: 'Private guiding',
    description:
      'A dedicated local guide for your full trip or individual days in Burundi. Flexible plans based on your interests, timing and pace.',
    bestFor: ['Bujumbura visits', 'Cultural sites', 'Day trips', 'First-time visitors'],
  },
  {
    icon: '',
    title: 'Airport pickup and arrival support',
    description:
      'Meet and greet at Bujumbura International Airport. Help with arrival, local SIM cards, currency and getting to your accommodation.',
    bestFor: ['First arrivals', 'Late arrivals', 'Travellers who want local help immediately'],
  },
  {
    icon: '',
    title: 'Transport and driver',
    description:
      'Private transport around Bujumbura and to key destinations across Burundi. Clear prices agreed before you travel.',
    bestFor: ['Day trips', 'Custom routes', 'Travellers short on time'],
  },
  {
    icon: '',
    title: 'Translation and communication',
    description:
      'English, French and Kirundi support throughout your trip. Help communicating with local hotels, markets and services.',
    bestFor: ['Independent travellers', 'Local markets', 'Practical arrangements'],
  },
  {
    icon: '',
    title: 'Custom day trips',
    description:
      'Half-day or full-day trips from Bujumbura to Lake Tanganyika, Rusizi National Park, Gishora Drum Sanctuary, the Source of the Nile area and more.',
  },
  {
    icon: '',
    title: 'Multi-day itineraries',
    description:
      'Planning help for longer Burundi trips. Gabriel can help you create a practical, realistic itinerary based on your time and budget.',
  },
  {
    icon: '',
    title: 'Practical arrangements',
    description:
      'Help with booking local accommodation, arranging meals, understanding local customs and handling day-to-day logistics.',
  },
  {
    icon: '',
    title: 'Cultural experiences',
    description:
      'Local market visits, traditional drum ceremonies, community encounters and cultural tours guided by someone who knows the country from the inside.',
  },
];
