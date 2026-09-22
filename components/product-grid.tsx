import React from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product-card";
import { ScrollReveal } from "@/components/scroll-reveal";

export function ProductGrid() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#0B0B0B]" id="signature-flavors">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs tracking-[0.3em] text-[#C9AE9E] uppercase font-medium">
            HANDCRAFTED SELECTION
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#D8C6BA] font-light tracking-wide uppercase">
            OUR SIGNATURE FLAVORS
          </h2>
          <div className="flex items-center justify-center gap-3 my-2">
            <div className="h-[1px] w-12 bg-[#D8C6BA]/30" />
            <span className="text-[#C9AE9E] text-xs">❖</span>
            <div className="h-[1px] w-12 bg-[#D8C6BA]/30" />
          </div>
          <p className="font-sans-clean text-sm md:text-base text-[#B4A59D] font-light">
            "Four irresistible layers. One little can of happiness."
          </p>
        </ScrollReveal>

        {/* Product Cards Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <ScrollReveal key={product.slug} delay={idx * 0.15} direction="up">
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
