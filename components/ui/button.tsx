import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-xs font-medium tracking-[0.2em] uppercase transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        outline:
          "border border-[#D8C6BA]/30 bg-transparent text-[#D8C6BA] hover:border-[#D8C6BA] hover:bg-[#D8C6BA]/10 hover:text-[#F4EEE9]",
        solid:
          "bg-[#D8C6BA] text-[#0B0B0B] hover:bg-[#C9AE9E] hover:text-[#0B0B0B]",
        ghost:
          "text-[#B4A59D] hover:text-[#D8C6BA] hover:bg-[#D8C6BA]/5",
        link: "text-[#D8C6BA] underline-offset-8 hover:underline decoration-[#D8C6BA]/40",
      },
      size: {
        default: "h-11 px-7 py-2.5",
        sm: "h-9 px-5 text-[11px]",
        lg: "h-13 px-9 text-xs tracking-[0.25em]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
