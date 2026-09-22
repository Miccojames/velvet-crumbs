import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { ArrowLeft, Check, Sparkles } from "lucide-react";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) return {};

  return {
    title: `${product.name} Pop Can Cake | Velvet & Crumbs`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  // Filter other products for "YOU MAY ALSO LIKE"
  const otherProducts = products.filter((p) => p.slug !== product.slug);

  return (
    <div className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-20">
      {/* Back button */}
      <div>
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-[#B4A59D] hover:text-[#D8C6BA] transition-colors uppercase font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>BACK TO MENU</span>
        </Link>
      </div>

      {/* Main Editorial Product Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: Large Product Image */}
        <div className="lg:col-span-6 relative aspect-square w-full bg-[#11100F] border border-[#D8C6BA]/30 p-4">
          <div className="relative w-full h-full overflow-hidden bg-[#0B0B0B]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute top-2 left-2 text-[#C9AE9E] text-xs">✦</div>
          <div className="absolute top-2 right-2 text-[#C9AE9E] text-xs">✦</div>
          <div className="absolute bottom-2 left-2 text-[#C9AE9E] text-xs">✦</div>
          <div className="absolute bottom-2 right-2 text-[#C9AE9E] text-xs">✦</div>
        </div>

        {/* Right: Flavor Breakdown & Specs */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <span className="text-xs tracking-[0.3em] text-[#C9AE9E] uppercase font-medium block mb-2">
              SIGNATURE POP CAN FLAVOR
            </span>
            <h1 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl text-[#D8C6BA] uppercase font-light tracking-wide">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 mt-3">
              <span className="font-serif-editorial text-3xl text-[#C9AE9E] font-medium">
                {product.formattedPrice}
              </span>
              <span className="text-xs text-[#81756E] tracking-widest uppercase border-l border-[#D8C6BA]/20 pl-4">
                {product.weight} • Chilled Delivery
              </span>
            </div>
          </div>

          <div className="h-[1px] w-full bg-[#D8C6BA]/20" />

          {/* Detailed Narrative */}
          <div className="space-y-4">
            <h3 className="font-serif-editorial text-lg text-[#D8C6BA] uppercase tracking-wider">
              Flavor Description
            </h3>
            <p className="font-sans-clean text-base text-[#B4A59D] font-light leading-relaxed">
              {product.longDescription}
            </p>
          </div>

          {/* Flavor Notes */}
          <div className="space-y-3">
            <h3 className="font-serif-editorial text-lg text-[#D8C6BA] uppercase tracking-wider">
              Taste & Texture Profile
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.flavorProfile.map((note) => (
                <span
                  key={note}
                  className="inline-flex items-center gap-1.5 text-xs text-[#D8C6BA] border border-[#D8C6BA]/25 px-3 py-1.5 bg-[#11100F]"
                >
                  <Sparkles className="h-3 w-3 text-[#C9AE9E]" />
                  <span>{note}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Ingredients & Dietary Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#D8C6BA]/15 text-xs text-[#B4A59D]">
            <div>
              <span className="text-[#81756E] uppercase tracking-widest block mb-1">
                Ingredients:
              </span>
              <p>{product.ingredients.join(", ")}</p>
            </div>
            <div>
              <span className="text-[#81756E] uppercase tracking-widest block mb-1">
                Dietary Notes:
              </span>
              <p>{product.dietaryInfo}</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-6 flex flex-col sm:flex-row gap-4">
            <Link href={`/contact?flavor=${product.slug}`} className="flex-1">
              <Button variant="solid" size="lg" className="w-full">
                INQUIRE ABOUT THIS FLAVOR
              </Button>
            </Link>
            <Link href="/menu" className="flex-1">
              <Button variant="outline" size="lg" className="w-full">
                BACK TO MENU
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* YOU MAY ALSO LIKE */}
      <div className="pt-16 border-t border-[#D8C6BA]/20 space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs tracking-[0.3em] text-[#C9AE9E] uppercase font-medium">
            RECOMMENDED FOR YOU
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#D8C6BA] font-light uppercase">
            YOU MAY ALSO LIKE
          </h2>
          <div className="h-[1px] w-12 bg-[#D8C6BA]/30 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherProducts.slice(0, 3).map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
