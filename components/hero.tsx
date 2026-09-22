"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-16 md:py-24 overflow-hidden bg-[#0B0B0B]">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C9AE9E]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Circular Logo Badge */}
        <div className="mb-8">
          <Logo size="lg" />
        </div>

        {/* Decorative Top Horizontal Rule with Stars */}
        <div className="flex items-center justify-center w-full max-w-md my-4 gap-4">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D8C6BA]/40 to-[#D8C6BA]" />
          <span className="text-[#D8C6BA] text-xs">✦</span>
          <span className="text-[#C9AE9E] text-xs">❖</span>
          <span className="text-[#D8C6BA] text-xs">✦</span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D8C6BA]/40 to-[#D8C6BA]" />
        </div>

        {/* Main Heading Composition matching Menu Reference */}
        <div className="relative my-4 flex flex-col items-center">
          <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.18em] text-[#D8C6BA] uppercase font-light leading-none">
            POP CAN CAKE
          </h1>
          <span className="font-script-accent text-4xl sm:text-5xl md:text-6xl text-[#C9AE9E] -mt-3 md:-mt-5 select-none transform -rotate-3">
            Menu
          </span>
        </div>

        {/* Small Heart Decoration */}
        <div className="my-3 text-[#C9AE9E] text-sm animate-pulse">
          ♥
        </div>

        {/* Taglines */}
        <h2 className="font-serif-editorial text-xl sm:text-2xl md:text-3xl tracking-widest text-[#D8C6BA] font-normal uppercase mb-3">
          "Small Can, Big Indulgence."
        </h2>

        <p className="font-sans-clean text-sm sm:text-base text-[#B4A59D] max-w-xl font-light leading-relaxed mb-8">
          Beautifully layered cakes made for every sweet craving — perfectly portioned, irresistibly creamy, and made to enjoy anywhere.
        </p>

        {/* CTA Buttons - Thin elegant outline buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link href="/menu" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-[#D8C6BA]/50 text-[#D8C6BA] hover:border-[#D8C6BA] hover:bg-[#D8C6BA]/10">
              EXPLORE THE MENU
            </Button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-[#C9AE9E]/40 text-[#C9AE9E] hover:border-[#C9AE9E] hover:bg-[#C9AE9E]/10">
              INQUIRE NOW
            </Button>
          </Link>
        </div>

        {/* Decorative Bottom Rule */}
        <div className="flex items-center justify-center w-full max-w-md mt-12 gap-3 opacity-60">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#D8C6BA]/30" />
          <span className="text-[#B4A59D] text-[10px] tracking-widest uppercase">EST. 2026</span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D8C6BA]/30" />
        </div>
      </div>
    </section>
  );
}
