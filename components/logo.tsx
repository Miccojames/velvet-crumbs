import React from "react";
import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Logo({ size = "md", className = "" }: LogoProps) {
  const dimensions = {
    sm: "w-16 h-16 text-[8px]",
    md: "w-24 h-24 text-[10px]",
    lg: "w-36 h-36 text-xs",
  }[size];

  return (
    <Link href="/" className={`inline-flex flex-col items-center justify-center ${className}`}>
      <div className={`relative ${dimensions} rounded-full border border-[#D8C6BA]/40 p-2 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[#D8C6BA] group bg-[#0B0B0B]/80`}>
        {/* Outer subtle ring */}
        <div className="absolute inset-0.5 rounded-full border border-dashed border-[#D8C6BA]/20 group-hover:border-[#D8C6BA]/40 transition-colors" />

        {/* Brand Header */}
        <span className="font-serif-editorial tracking-[0.2em] text-[#D8C6BA] font-medium leading-none mb-1 uppercase">
          VELVET & CRUMBS
        </span>

        {/* Minimal Cake Line-art Icon */}
        <div className="my-0.5 text-[#C9AE9E] transition-transform duration-300 group-hover:scale-110">
          <svg
            width="20"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
            <path d="M4 16h16" />
            <path d="M12 11V7" />
            <path d="M12 4c.5 0 1 .5 1 1s-.5 1-1 1-1-.5-1-1 .5-1 1-1z" />
          </svg>
        </div>

        {/* Subtitle */}
        <span className="font-sans-clean text-[7px] md:text-[8px] tracking-[0.25em] text-[#B4A59D] uppercase font-light leading-none mt-1">
          POP CAN CAKES
        </span>
      </div>
    </Link>
  );
}
