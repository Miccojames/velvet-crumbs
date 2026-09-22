"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Dialog } from "@/components/ui/dialog";
import { ScrollReveal } from "@/components/scroll-reveal";

const galleryImages = [
  {
    id: 1,
    src: "/images/hero.jpg",
    title: "Signature Pop Can Showcase",
    caption: "Our signature layered cake cans crafted with precision and passion.",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: 2,
    src: "/images/red-velvet.jpg",
    title: "Crimson Velvet Layers",
    caption: "Moist red velvet sponge with silky cream cheese frosting.",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    src: "/images/ube.jpg",
    title: "Authentic Purple Yam",
    caption: "Soft ube cake layered with aromatic ube buttercream.",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    src: "/images/gallery-1.jpg",
    title: "The Dessert Table",
    caption: "Flatlay photoshoot of our four signature Pop Can Cake flavors.",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    id: 5,
    src: "/images/chocolate.jpg",
    title: "Dark Chocolate Fudge",
    caption: "Rich dark chocolate ganache layered with cocoa nibs.",
    span: "col-span-1 row-span-1",
  },
  {
    id: 6,
    src: "/images/vanilla.jpg",
    title: "Classic Vanilla Bean",
    caption: "Golden vanilla sponge layered with Madagascar vanilla bean frosting.",
    span: "col-span-1 row-span-1",
  },
];

export function Gallery() {
  const [activeImage, setActiveImage] = useState<(typeof galleryImages)[0] | null>(
    null
  );

  return (
    <section className="py-24 px-6 md:px-12 bg-[#11100F] border-t border-b border-[#D8C6BA]/20" id="gallery">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs tracking-[0.3em] text-[#C9AE9E] uppercase font-medium">
            VISUAL PORTFOLIO
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#D8C6BA] font-light tracking-wide uppercase">
            A LITTLE LOOK AT THE CRUMBS
          </h2>
          <div className="h-[1px] w-16 bg-[#D8C6BA]/30 mx-auto" />
        </ScrollReveal>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[280px]">
          {galleryImages.map((img, idx) => (
            <ScrollReveal
              key={img.id}
              delay={idx * 0.1}
              direction="up"
              className={`h-full ${img.span}`}
            >
              <div
                onClick={() => setActiveImage(img)}
                className="group relative overflow-hidden bg-[#0B0B0B] border border-[#D8C6BA]/20 cursor-pointer h-full w-full"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-[#0B0B0B]/40 group-hover:bg-[#0B0B0B]/20 transition-all duration-300" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-[#0B0B0B]/90 via-[#0B0B0B]/40 to-transparent">
                  <span className="text-[10px] tracking-widest text-[#C9AE9E] uppercase">
                    TAP TO VIEW
                  </span>
                  <h3 className="font-serif-editorial text-xl text-[#D8C6BA]">
                    {img.title}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Lightbox Dialog Modal */}
        <Dialog isOpen={!!activeImage} onClose={() => setActiveImage(null)}>
          {activeImage && (
            <div className="space-y-6">
              <div className="relative aspect-[4/3] w-full bg-[#0B0B0B] border border-[#D8C6BA]/20 overflow-hidden">
                <Image
                  src={activeImage.src}
                  alt={activeImage.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="font-serif-editorial text-2xl md:text-3xl text-[#D8C6BA] uppercase">
                  {activeImage.title}
                </h3>
                <div className="h-[1px] w-12 bg-[#D8C6BA]/30 mx-auto" />
                <p className="font-sans-clean text-sm text-[#B4A59D] font-light">
                  {activeImage.caption}
                </p>
              </div>
            </div>
          )}
        </Dialog>
      </div>
    </section>
  );
}
