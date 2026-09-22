import React from "react";
import { faqItems } from "@/data/faq";
import { Accordion } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/scroll-reveal";

export function FAQ() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#11100F] border-t border-b border-[#D8C6BA]/20" id="faq">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs tracking-[0.3em] text-[#C9AE9E] uppercase font-medium">
            QUESTIONS & ANSWERS
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#D8C6BA] font-light tracking-wide uppercase">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="h-[1px] w-16 bg-[#D8C6BA]/30 mx-auto" />
        </ScrollReveal>

        <ScrollReveal delay={0.2} direction="up">
          <Accordion items={faqItems} />
        </ScrollReveal>
      </div>
    </section>
  );
}
