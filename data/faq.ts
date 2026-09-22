export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "item-1",
    question: "What flavors are available?",
    answer: "We offer four signature Pop Can Cake flavors: Red Velvet, Classic Vanilla, Ube, and Dark Chocolate. Each can is carefully layered with fresh cake and premium house-made cream.",
  },
  {
    id: "item-2",
    question: "How much is one Pop Can Cake?",
    answer: "All signature Pop Can Cakes are priced at ₱120 per can. Special bulk order packages are available upon inquiry.",
  },
  {
    id: "item-3",
    question: "Do you accept bulk orders?",
    answer: "Yes! We accept bulk orders for birthdays, corporate events, weddings, and party favors. Please submit an inquiry form at least 3-5 days in advance for bulk requests.",
  },
  {
    id: "item-4",
    question: "How far in advance should I inquire?",
    answer: "For standard orders, we recommend inquiring at least 1-2 days prior. For large events or bulk quantities, 3-7 days advance notice is ideal.",
  },
  {
    id: "item-5",
    question: "Do you offer delivery?",
    answer: "Yes, we arrange courier delivery (e.g. Grab, Lalamove) or schedule personal pickup points. Shipping fees are calculated based on your location upon order confirmation.",
  },
  {
    id: "item-6",
    question: "Can I request a specific flavor?",
    answer: "Absolutely! When submitting your inquiry form, choose your preferred flavor from the menu. You can also mix and match different flavors in a single order.",
  },
  {
    id: "item-7",
    question: "How should I store the cake?",
    answer: "Keep your Pop Can Cakes chilled in the refrigerator upon receipt. They are best enjoyed within 3-4 days of delivery. Serve slightly chilled for optimum creaminess.",
  },
];
