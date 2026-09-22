import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";

const steps = [
  {
    step: "01",
    title: "CHOOSE YOUR FLAVOR",
    description: "Browse our signature Pop Can Cake flavors.",
  },
  {
    step: "02",
    title: "SEND AN INQUIRY",
    description: "Tell us which flavors and quantity you want.",
  },
  {
    step: "03",
    title: "CONFIRM YOUR ORDER",
    description: "We'll reply with availability and pickup/delivery details.",
  },
  {
    step: "04",
    title: "ENJOY YOUR CAKE",
    description: "Receive your Pop Can Cakes and enjoy every layer.",
  },
];

export function OrderProcess() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#0B0B0B]" id="how-to-order">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <span className="text-xs tracking-[0.3em] text-[#C9AE9E] uppercase font-medium">
            SIMPLE & SEAMLESS
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#D8C6BA] font-light tracking-wide uppercase">
            FROM CRAVING TO CAN
          </h2>
          <div className="flex items-center justify-center gap-3 my-2">
            <div className="h-[1px] w-12 bg-[#D8C6BA]/30" />
            <span className="text-[#C9AE9E] text-xs">♥</span>
            <div className="h-[1px] w-12 bg-[#D8C6BA]/30" />
          </div>
        </ScrollReveal>

        {/* 4 Steps Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, index) => (
            <ScrollReveal
              key={item.step}
              delay={index * 0.15}
              direction="up"
              className="h-full"
            >
              <div className="relative bg-[#11100F] border border-[#D8C6BA]/20 p-8 flex flex-col justify-between hover:border-[#D8C6BA]/50 transition-all duration-300 h-full">
                <div>
                  <span className="font-serif-editorial text-5xl md:text-6xl text-[#D8C6BA]/30 font-extralight block mb-4">
                    {item.step}
                  </span>

                  <h3 className="font-serif-editorial text-lg md:text-xl tracking-[0.15em] text-[#D8C6BA] uppercase font-medium mb-3">
                    {item.title}
                  </h3>

                  <div className="h-[1px] w-full bg-[#D8C6BA]/20 mb-4" />

                  <p className="font-sans-clean text-xs md:text-sm text-[#B4A59D] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C9AE9E]" />
                  <span className="text-[10px] tracking-widest text-[#81756E] uppercase">
                    Step {index + 1}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Action Button */}
        <ScrollReveal delay={0.4} direction="up" className="mt-16 text-center">
          <Link href="/contact">
            <Button variant="outline" size="lg" className="px-10 border-[#D8C6BA]/40">
              START YOUR INQUIRY
            </Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
