import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BrandIntro } from "@/components/brand-intro";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About Us | Velvet & Crumbs Pop Can Cakes",
  description: "Learn about the craftsmanship and story behind Velvet & Crumbs Pop Can Cakes.",
};

export default function AboutPage() {
  return (
    <div className="space-y-20 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto px-6 space-y-4 pt-8">
        <span className="text-xs tracking-[0.3em] text-[#C9AE9E] uppercase font-medium">
          OUR CRAFT & PASSION
        </span>
        <h1 className="font-serif-editorial text-4xl sm:text-6xl text-[#D8C6BA] font-light tracking-wide uppercase">
          THE STORY OF VELVET & CRUMBS
        </h1>
        <div className="flex items-center justify-center gap-3 my-2">
          <div className="h-[1px] w-12 bg-[#D8C6BA]/30" />
          <span className="text-[#C9AE9E] text-xs">♥</span>
          <div className="h-[1px] w-12 bg-[#D8C6BA]/30" />
        </div>
        <p className="font-sans-clean text-base text-[#B4A59D] font-light italic">
          "Where editorial luxury meets handcrafted dessert indulgence."
        </p>
      </div>

      <BrandIntro />

      {/* Craftsmanship Breakdown Section */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] w-full bg-[#11100F] border border-[#D8C6BA]/25 p-3">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/images/gallery-1.jpg"
                alt="Crafting Pop Can Cakes"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs tracking-[0.3em] text-[#C9AE9E] uppercase font-medium">
              ARTISANAL PRECISION
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#D8C6BA] font-light leading-snug">
              Reimagining How Cake is Enjoyed.
            </h2>
            <div className="h-[1px] w-full bg-[#D8C6BA]/20" />
            <p className="font-sans-clean text-sm md:text-base text-[#B4A59D] font-light leading-relaxed">
              We started Velvet & Crumbs with a simple vision: to make gourmet cakes portable without compromising on luxury taste or visual perfection. Encased in clear, sleek pop cans, each cake reveals its intricate layers of sponge and whipped frosting before you take your first bite.
            </p>
            <div className="pt-4">
              <Link href="/menu">
                <Button variant="outline" size="lg">
                  EXPLORE OUR FLAVORS
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
    </div>
  );
}
