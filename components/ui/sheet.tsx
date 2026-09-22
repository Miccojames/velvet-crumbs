"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Sheet({ isOpen, onClose, children }: SheetProps) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end animate-fadeIn">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0B0B0B]/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer panel */}
      <div className="relative z-10 w-full max-w-sm bg-[#0B0B0B] border-l border-[#D8C6BA]/25 p-8 flex flex-col justify-between h-full shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#D8C6BA]/20 pb-6">
          <div className="font-serif text-lg tracking-widest text-[#D8C6BA]">
            VELVET & CRUMBS
          </div>
          <button
            onClick={onClose}
            className="text-[#B4A59D] hover:text-[#D8C6BA] p-2 border border-[#D8C6BA]/20 rounded-none transition-colors"
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="py-8 flex-1 flex flex-col justify-center">{children}</div>

        <div className="border-t border-[#D8C6BA]/20 pt-6 text-center">
          <p className="text-xs text-[#81756E] tracking-widest uppercase">
            Velvet & Crumbs • Pop Can Cakes
          </p>
        </div>
      </div>
    </div>
  );
}
