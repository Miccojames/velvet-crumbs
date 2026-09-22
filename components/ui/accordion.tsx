"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  id: string;
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

export function AccordionItem({
  title,
  children,
  isOpen,
  onToggle,
  className,
}: AccordionItemProps) {
  return (
    <div className={cn("border-b border-[#D8C6BA]/20 py-4 transition-all duration-300", className)}>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-2 text-left text-[#D8C6BA] transition-colors hover:text-[#F4EEE9] focus:outline-none group"
      >
        <span className="font-serif text-lg md:text-xl tracking-wide pr-4">
          {title}
        </span>
        <span className="flex items-center justify-center h-8 w-8 rounded-full border border-[#D8C6BA]/20 text-[#B4A59D] group-hover:border-[#D8C6BA] group-hover:text-[#D8C6BA] transition-all duration-300">
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-300",
              isOpen && "rotate-180 text-[#D8C6BA]"
            )}
          />
        </span>
      </button>
      {isOpen && (
        <div className="pt-3 pb-2 text-sm md:text-base leading-relaxed text-[#B4A59D] font-light animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
}

export function Accordion({
  items,
  className,
}: {
  items: { id: string; question: string; answer: string }[];
  className?: string;
}) {
  const [openId, setOpenId] = React.useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={cn("w-full divide-y divide-[#D8C6BA]/15 border-t border-[#D8C6BA]/20", className)}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.question}
          isOpen={openId === item.id}
          onToggle={() => toggle(item.id)}
        >
          {item.answer}
        </AccordionItem>
      ))}
    </div>
  );
}
