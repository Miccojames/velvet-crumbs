import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-none border border-[#D8C6BA]/20 bg-[#11100F] px-4 py-3 text-sm text-[#D8C6BA] placeholder:text-[#81756E] focus-visible:outline-none focus-visible:border-[#D8C6BA] focus-visible:ring-1 focus-visible:ring-[#D8C6BA]/40 disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200 resize-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
