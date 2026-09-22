import React from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";

export function BrandIntro() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-[#11100F] border-t border-b border-[#D8C6BA]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Typography Side */}
          <ScrollReveal direction="right" className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#C9AE9E]" />
              <span className="text-xs tracking-[0.3em] text-[#C9AE9E] uppercase font-medium">
                OUR STORY
              </span>
            </div>

            <h2 className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl text-[#D8C6BA] font-light leading-tight">
              Layers of Happiness,
              <br />
              <span className="font-script-accent text-4xl sm:text-5xl md:text-6xl text-[#C9AE9E] normal-case ml-2">
                One Can at a Time.
              </span>
            </h2>

            <div className="h-[1px] w-full bg-[#D8C6BA]/15 my-6" />

            <p className="font-sans-clean text-base md:text-lg text-[#B4A59D] font-light leading-relaxed">
              At Velvet & Crumbs, we believe a small dessert can create a big moment. Our Pop Can Cakes are carefully layered with soft cake, creamy frosting, and rich flavors — made for birthdays, gifts, celebrations, or simply treating yourself.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-[#D8C6BA]/15">
              <div>
                <span className="block font-serif-editorial text-2xl text-[#D8C6BA]">100%</span>
                <span className="text-xs text-[#81756E] tracking-widest uppercase">Handcrafted Layering</span>
              </div>
              <div>
                <span className="block font-serif-editorial text-2xl text-[#D8C6BA]">₱120</span>
                <span className="text-xs text-[#81756E] tracking-widest uppercase">Every Flavor</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Photography Side */}
          <ScrollReveal direction="left" delay={0.2} className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full border border-[#D8C6BA]/30 p-3 bg-[#0B0B0B]">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/hero.jpg"
                  alt="Velvet & Crumbs Pop Can Cakes Display"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#C9AE9E]" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#C9AE9E]" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#C9AE9E]" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#C9AE9E]" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
