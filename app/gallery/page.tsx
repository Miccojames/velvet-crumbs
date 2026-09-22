import React from "react";
import { Gallery } from "@/components/gallery";

export const metadata = {
  title: "Gallery | Velvet & Crumbs Pop Can Cakes",
  description: "View our portfolio of luxury Pop Can Cakes, cake details, and event setups.",
};

export default function GalleryPage() {
  return (
    <div className="py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto px-6 space-y-4 pt-8">
        <span className="text-xs tracking-[0.3em] text-[#C9AE9E] uppercase font-medium">
          GALLERY & PORTFOLIO
        </span>
        <h1 className="font-serif-editorial text-4xl sm:text-6xl text-[#D8C6BA] font-light tracking-wide uppercase">
          THE VISUAL GALLERY
        </h1>
        <div className="flex items-center justify-center gap-3 my-2">
          <div className="h-[1px] w-12 bg-[#D8C6BA]/30" />
          <span className="text-[#C9AE9E] text-xs">✦</span>
          <div className="h-[1px] w-12 bg-[#D8C6BA]/30" />
        </div>
        <p className="font-sans-clean text-base text-[#B4A59D] font-light italic">
          "Explore every layer of sweetness and sophistication."
        </p>
      </div>

      <Gallery />
    </div>
  );
}
