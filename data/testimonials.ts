export interface Testimonial {
  quote: string;
  name: string;
  location?: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote: "The red velvet was so creamy and soft. Definitely ordering again!",
    name: "Maria S.",
    location: "Makati City",
    rating: 5,
  },
  {
    quote: "Perfect little dessert after dinner. The ube flavor is my favorite!",
    name: "Angela R.",
    location: "Bonifacio Global City",
    rating: 5,
  },
  {
    quote: "Beautiful packaging and delicious cake. Highly recommended!",
    name: "Sophie L.",
    location: "Quezon City",
    rating: 5,
  },
  {
    quote: "Ordered pop can cakes for my birthday celebration and everyone fell in love with the layers and aesthetic!",
    name: "Camille M.",
    location: "Mandaluyong",
    rating: 5,
  },
];
