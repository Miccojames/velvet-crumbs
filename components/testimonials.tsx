"use client";

import React, { useState } from "react";
import { testimonials } from "@/data/testimonials";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#0B0B0B]" id="reviews">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal direction="up">
          <span className="text-xs tracking-[0.3em] text-[#C9AE9E] uppercase font-medium block mb-3">
            TESTIMONIALS
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#D8C6BA] font-light tracking-wide uppercase mb-12">
            KIND WORDS
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2} direction="up">
          <div className="relative bg-[#11100F] border border-[#D8C6BA]/25 p-8 md:p-14 transition-all duration-500 min-h-[260px] flex flex-col justify-between shadow-2xl">
            <div className="flex justify-center gap-1.5 mb-6 text-[#C9AE9E]">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#C9AE9E] stroke-none" />
              ))}
            </div>

            <blockquote className="font-serif-editorial text-xl sm:text-2xl md:text-3xl text-[#D8C6BA] font-light italic leading-relaxed mb-6">
              "{current.quote}"
            </blockquote>

            <div>
              <cite className="font-sans-clean not-italic text-sm tracking-[0.2em] text-[#C9AE9E] uppercase font-medium block">
                — {current.name}
              </cite>
              {current.location && (
                <span className="text-xs text-[#81756E] tracking-widest block mt-1">
                  {current.location}
                </span>
              )}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3} direction="up" className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prev}
            className="p-3 border border-[#D8C6BA]/20 text-[#B4A59D] hover:text-[#D8C6BA] hover:border-[#D8C6BA] transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <span className="text-xs text-[#81756E] tracking-widest uppercase">
            {currentIndex + 1} / {testimonials.length}
          </span>

          <button
            onClick={next}
            className="p-3 border border-[#D8C6BA]/20 text-[#B4A59D] hover:text-[#D8C6BA] hover:border-[#D8C6BA] transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
