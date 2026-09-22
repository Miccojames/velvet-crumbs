import React from "react";
import { ScrollReveal } from "@/components/scroll-reveal";

const reasons = [
  {
    number: "01",
    title: "FRESHLY LAYERED",
    description:
      "Every can is carefully assembled for the perfect balance of cake and cream.",
  },
  {
    number: "02",
    title: "PREMIUM INGREDIENTS",
    description:
      "Made with quality ingredients for a rich and satisfying bite.",
  },
  {
    number: "03",
    title: "PERFECTLY PORTIONED",
    description:
      "A little can made for a satisfying sweet escape.",
  },
  {
    number: "04",
    title: "MADE WITH CARE",
    description:
      "Every order is prepared with attention to detail.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#11100F] border-t border-b border-[#D8C6BA]/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <span className="text-xs tracking-[0.3em] text-[#C9AE9E] uppercase font-medium">
            OUR PROMISE
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#D8C6BA] font-light tracking-wide uppercase">
            WHY VELVET & CRUMBS
          </h2>
          <div className="h-[1px] w-16 bg-[#D8C6BA]/30 mx-auto" />
        </ScrollReveal>

        {/* 4 Elegant Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#D8C6BA]/20">
          {reasons.map((item, index) => (
            <ScrollReveal
              key={item.number}
              delay={index * 0.15}
              direction="up"
              className={`pt-8 md:pt-0 ${
                index !== 0 ? "md:pl-8" : ""
              } flex flex-col justify-between space-y-4`}
            >
              <div className="space-y-4">
                <span className="font-serif-editorial text-4xl md:text-5xl text-[#C9AE9E]/60 font-light block">
                  {item.number}
                </span>

                <h3 className="font-serif-editorial text-xl md:text-2xl tracking-[0.15em] text-[#D8C6BA] uppercase font-medium">
                  {item.title}
                </h3>

                <div className="h-[1px] w-10 bg-[#D8C6BA]/30" />

                <p className="font-sans-clean text-xs md:text-sm text-[#B4A59D] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
