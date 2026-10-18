import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// Self-hosted fonts (formerly next/font/google). The variable woff2 files are
// downloaded from Google Fonts and served from public/fonts, so builds never
// depend on fonts.googleapis.com at compile time.
const cormorant = localFont({
  src: "../public/fonts/cormorant-garamond.woff2",
  weight: "300 700",
  style: "normal",
  display: "swap",
  variable: "--font-cormorant",
});

const alex = localFont({
  src: "../public/fonts/alex-brush.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-alex",
});

const jakarta = localFont({
  src: "../public/fonts/plus-jakarta-sans.woff2",
  weight: "200 800",
  style: "normal",
  display: "swap",
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
