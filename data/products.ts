export interface Product {
  slug: string;
  name: string;
  price: number;
  formattedPrice: string;
  description: string;
  longDescription: string;
  image: string;
  flavorProfile: string[];
  ingredients: string[];
  dietaryInfo: string;
  weight: string;
  isBestSeller?: boolean;
}

export const products: Product[] = [
  {
    slug: "red-velvet",
    name: "RED VELVET",
    price: 120,
    formattedPrice: "₱120",
    description: "Moist red velvet cake layered with smooth cream cheese.",
    longDescription:
      "Our signature Red Velvet Pop Can Cake features delicate layers of crimson velvet cocoa sponge interspersed with silky, house-whipped Madagascar cream cheese frosting. Finished with delicate red velvet crumbs and edible champagne gold accents for the ultimate luxury indulgence.",
    image: "/images/red-velvet.jpg",
    flavorProfile: ["Rich Cocoa", "Tangy Cream Cheese", "Silk Smooth Texture"],
    ingredients: ["Cocoa Powder", "Cream Cheese", "Madagascar Vanilla", "Pastry Flour", "Butter"],
    dietaryInfo: "Contains Dairy & Gluten",
    weight: "320g",
    isBestSeller: true,
  },
  {
    slug: "vanilla",
    name: "VANILLA",
    price: 120,
    formattedPrice: "₱120",
    description:
      "Classic vanilla sponge cake layered with rich and creamy vanilla frosting.",
    longDescription:
      "A timeless masterpiece of softness. Light, fluffy golden vanilla bean sponge cake layered generously with velvet-smooth vanilla buttercream and subtle gold leaf sparkles, encased in our sleek signature pop can.",
    image: "/images/vanilla.jpg",
    flavorProfile: ["Madagascar Vanilla Bean", "Butter Cream", "Golden Sponge"],
    ingredients: ["Pure Vanilla Bean", "Grass-fed Butter", "Organic Egg Yolks", "Fine Sugar"],
    dietaryInfo: "Contains Dairy & Gluten",
    weight: "310g",
  },
  {
    slug: "ube",
    name: "UBE",
    price: 120,
    formattedPrice: "₱120",
    description: "Soft ube cake layered with creamy ube buttercream.",
    longDescription:
      "A celebration of authentic Filipino purple yam. Tender ube sponge cake gently layered with creamy house-made ube halaya buttercream and soft cake crumble. Rich, aromatic, and delightfully balanced.",
    image: "/images/ube.jpg",
    flavorProfile: ["Authentic Purple Yam", "Creamy Buttercream", "Aromatic Sweetness"],
    ingredients: ["Real Ube Halaya", "Ube Extract", "Cream Cheese", "Fresh Milk", "Butter"],
    dietaryInfo: "Contains Dairy & Gluten",
    weight: "330g",
    isBestSeller: true,
  },
  {
    slug: "chocolate",
    name: "CHOCOLATE",
    price: 120,
    formattedPrice: "₱120",
    description: "Moist chocolate cake layered with smooth chocolate ganache.",
    longDescription:
      "Decadence in a can. Deeply rich dark chocolate cake infused with Dutch cocoa, layered with velvety 70% dark chocolate ganache and sprinkled with fine cocoa nibs.",
    image: "/images/chocolate.jpg",
    flavorProfile: ["70% Dark Chocolate", "Velvety Ganache", "Deep Cocoa"],
    ingredients: ["Belgian Dark Chocolate", "Dutch Cocoa", "Heavy Cream", "Sea Salt"],
    dietaryInfo: "Contains Dairy & Gluten",
    weight: "325g",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
