import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-none border border-[#D8C6BA]/20 bg-[#11100F] px-4 py-2 text-sm text-[#D8C6BA] placeholder:text-[#81756E] focus-visible:outline-none focus-visible:border-[#D8C6BA] focus-visible:ring-1 focus-visible:ring-[#D8C6BA]/40 disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
