import React, { Suspense } from "react";
import { InquiryForm } from "@/components/inquiry-form";

export const metadata = {
  title: "Inquire & Order | Velvet & Crumbs Pop Can Cakes",
  description: "Submit an inquiry for Velvet & Crumbs Pop Can Cakes.",
};

export default function ContactPage() {
  return (
    <div className="py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto px-6 space-y-4 pt-8">
        <span className="text-xs tracking-[0.3em] text-[#C9AE9E] uppercase font-medium">
          ORDER INQUIRIES
        </span>
        <h1 className="font-serif-editorial text-4xl sm:text-6xl text-[#D8C6BA] font-light tracking-wide uppercase">
          CONTACT & INQUIRY
        </h1>
        <div className="flex items-center justify-center gap-3 my-2">
          <div className="h-[1px] w-12 bg-[#D8C6BA]/30" />
          <span className="text-[#C9AE9E] text-xs">❖</span>
          <div className="h-[1px] w-12 bg-[#D8C6BA]/30" />
        </div>
        <p className="font-sans-clean text-base text-[#B4A59D] font-light italic">
          "We look forward to serving your sweet moments."
        </p>
      </div>

      <Suspense
        fallback={
          <div className="text-center py-20 text-[#D8C6BA]">
            Loading inquiry form...
          </div>
        }
      >
        <InquiryForm />
      </Suspense>
    </div>
  );
}
