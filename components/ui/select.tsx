import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <select
          className={cn(
            "flex h-11 w-full appearance-none rounded-none border border-[#D8C6BA]/20 bg-[#11100F] px-4 py-2 pr-10 text-sm text-[#D8C6BA] placeholder:text-[#81756E] focus-visible:outline-none focus-visible:border-[#D8C6BA] focus-visible:ring-1 focus-visible:ring-[#D8C6BA]/40 disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200 cursor-pointer",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#B4A59D] pointer-events-none opacity-70" />
      </div>
    );
  }
);
Select.displayName = "Select";

export { Select };
