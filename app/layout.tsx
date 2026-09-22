import type { Metadata } from "next";
import { Cormorant_Garamond, Alex_Brush, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const alex = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-alex",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Velvet & Crumbs | Pop Can Cakes",
  description:
    "Discover Velvet & Crumbs Pop Can Cakes — delicious layered desserts in Red Velvet, Vanilla, Ube, and Chocolate. Small Can, Big Indulgence.",
  keywords: ["Pop Can Cakes", "Velvet & Crumbs", "Layered Desserts", "Red Velvet", "Ube Cake", "Luxury Cake"],
  openGraph: {
    title: "Velvet & Crumbs | Pop Can Cakes",
    description: "Layered sweetness, made to savor. Discover our signature Pop Can Cakes.",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: "Velvet & Crumbs Pop Can Cakes" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${alex.variable} ${jakarta.variable}`}
    >
      <body className="bg-[#0B0B0B] text-[#D8C6BA] antialiased min-h-screen flex flex-col font-sans-clean selection:bg-[#C9AE9E] selection:text-[#0B0B0B]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
