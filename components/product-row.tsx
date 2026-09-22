import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";

interface ProductRowProps {
  product: Product;
}

export function ProductRow({ product }: ProductRowProps) {
  return (
    <div className="group bg-[#11100F] border border-[#D8C6BA]/20 hover:border-[#D8C6BA]/60 p-6 md:p-8 transition-all duration-300">
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-10">
        {/* Left: Product Image */}
        <div className="relative aspect-square w-32 sm:w-40 md:w-44 flex-shrink-0 overflow-hidden bg-[#0B0B0B] border border-[#D8C6BA]/20">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 160px, 176px"
          />
        </div>

        {/* Center: Product Details */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-2">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
            <h3 className="font-serif-editorial text-2xl md:text-3xl tracking-[0.15em] text-[#D8C6BA] group-hover:text-[#F4EEE9] transition-colors uppercase font-medium">
              {product.name}
            </h3>
            {/* Price on Desktop (Right aligned) */}
            <span className="hidden md:block font-serif-editorial text-2xl md:text-3xl text-[#C9AE9E] font-normal">
              {product.formattedPrice}
            </span>
          </div>

          {/* Thin Decorative Line */}
          <div className="w-full h-[1px] bg-[#D8C6BA]/25 my-2" />

          <p className="font-sans-clean text-sm md:text-base text-[#B4A59D] font-light leading-relaxed max-w-2xl">
            {product.description}
          </p>

          {/* Price on Mobile */}
          <div className="md:hidden pt-2">
            <span className="font-serif-editorial text-2xl text-[#C9AE9E] font-medium">
              {product.formattedPrice}
            </span>
          </div>
        </div>

        {/* Right / Actions */}
        <div className="flex flex-row md:flex-col justify-center gap-3 w-full md:w-40 flex-shrink-0 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-[#D8C6BA]/15 md:pl-8">
          <Link href={`/menu/${product.slug}`} className="flex-1 md:w-full">
            <Button variant="outline" size="sm" className="w-full text-[10px] tracking-[0.2em] border-[#D8C6BA]/30">
              VIEW DETAILS
            </Button>
          </Link>
          <Link href={`/contact?flavor=${product.slug}`} className="flex-1 md:w-full">
            <Button variant="solid" size="sm" className="w-full text-[10px] tracking-[0.2em]">
              INQUIRE
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
