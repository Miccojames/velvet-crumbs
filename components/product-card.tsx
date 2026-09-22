import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-[#11100F] border border-[#D8C6BA]/20 hover:border-[#D8C6BA]/60 p-6 md:p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl">
      {/* Best seller tag if applicable */}
      {product.isBestSeller && (
        <span className="absolute top-4 right-4 z-10 text-[9px] tracking-[0.25em] uppercase text-[#0B0B0B] bg-[#D8C6BA] px-2.5 py-1 font-semibold">
          FAVORITE
        </span>
      )}

      {/* Image container */}
      <div className="relative aspect-square w-full mb-6 overflow-hidden bg-[#0B0B0B] border border-[#D8C6BA]/15">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
      </div>

      {/* Product Content */}
      <div className="flex-1 flex flex-col text-center items-center">
        <h3 className="font-serif-editorial text-2xl md:text-3xl tracking-[0.15em] text-[#D8C6BA] group-hover:text-[#F4EEE9] transition-colors uppercase font-medium">
          {product.name}
        </h3>

        {/* Thin decorative line */}
        <div className="w-12 h-[1px] bg-[#D8C6BA]/30 my-3 group-hover:w-20 group-hover:bg-[#C9AE9E] transition-all duration-500" />

        <p className="font-sans-clean text-xs md:text-sm text-[#B4A59D] font-light leading-relaxed mb-4 min-h-[40px] line-clamp-2">
          {product.description}
        </p>

        <span className="font-serif-editorial text-xl md:text-2xl text-[#C9AE9E] font-medium mb-6">
          {product.formattedPrice}
        </span>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 w-full pt-4 border-t border-[#D8C6BA]/15">
        <Link href={`/menu/${product.slug}`} className="flex-1">
          <Button variant="outline" size="sm" className="w-full text-[10px] tracking-[0.2em] border-[#D8C6BA]/30">
            VIEW DETAILS
          </Button>
        </Link>
        <Link href={`/contact?flavor=${product.slug}`} className="flex-1">
          <Button variant="solid" size="sm" className="w-full text-[10px] tracking-[0.2em]">
            INQUIRE
          </Button>
        </Link>
      </div>
    </div>
  );
}
