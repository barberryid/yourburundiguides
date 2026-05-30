export interface Review {
  name: string;
  country: string;
  text: string;
  image?: string;
  alt?: string;
}

export const reviews: Review[] = [
  {
    name: 'Thomas M.',
    country: 'Germany',
    text: 'Gabriel was incredibly helpful. He met us at the airport, helped us with everything on arrival, and made the whole trip feel easy. His local knowledge is real — he knows everyone and everywhere.',
    image: '/images/reviews/review-01.jpg',
    alt: 'Visitors with Gabriel during a guided trip in Burundi',
  },
  {
    name: 'Sarah K.',
    country: 'United Kingdom',
    text: 'We did three days with Gabriel and Ernest. Lake Tanganyika, the drum sanctuary, and a full day around Bujumbura. Every day was well organised, the transport was comfortable, and the local food recommendations were excellent.',
    image: '/images/reviews/review-02.jpg',
    alt: 'Group on a guided day trip near Bujumbura',
  },
  {
    name: 'Jean-Pierre L.',
    country: 'France',
    text: 'Gabriel arranged everything for us at short notice. Airport pickup, accommodation recommendations, and two full day trips. Communication was clear and fast via WhatsApp before and during the trip.',
    image: '/images/reviews/review-03.jpg',
    alt: 'Traveller with local guide in Burundi',
  },
  {
    name: 'Anita R.',
    country: 'Netherlands',
    text: 'Ernest drove us safely across some challenging roads and was patient and professional throughout. Gabriel planned a great itinerary that matched exactly what we wanted to see.',
    image: '/images/reviews/review-04.jpg',
    alt: 'Travellers on a guided Burundi countryside tour',
  },
  {
    name: 'David O.',
    country: 'United States',
    text: 'I was travelling alone and found Gabriel through the website. Best decision I made. He made Burundi accessible and safe to explore. I would not have managed without this kind of local support.',
    image: '/images/reviews/review-05.jpg',
    alt: 'Solo traveller with guide on Lake Tanganyika',
  },
  {
    name: 'Marta B.',
    country: 'Spain',
    text: 'The local market tour in Bujumbura was a highlight. Gabriel introduced us to vendors, explained the produce, and helped us find things we would never have found on our own.',
    image: '/images/reviews/review-06.jpg',
    alt: 'Local market visit during a guided Burundi tour',
  },
];
