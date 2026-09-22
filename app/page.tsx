import React, { Suspense } from "react";
import { Hero } from "@/components/hero";
import { BrandIntro } from "@/components/brand-intro";
import { ProductGrid } from "@/components/product-grid";
import { WhyChooseUs } from "@/components/why-choose-us";
import { OrderProcess } from "@/components/order-process";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { InquiryForm } from "@/components/inquiry-form";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <ProductGrid />
      <WhyChooseUs />
      <OrderProcess />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Suspense
        fallback={
          <div className="text-center py-20 text-[#D8C6BA]">
            Loading inquiry form...
          </div>
        }
      >
        <InquiryForm />
      </Suspense>
    </>
  );
}
