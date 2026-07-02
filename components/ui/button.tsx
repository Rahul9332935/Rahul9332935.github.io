import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full border text-sm font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border-sky-400/30 bg-sky-400 text-slate-950 shadow-glow hover:-translate-y-0.5 hover:bg-sky-300",
        secondary:
          "border-white/10 bg-white/5 text-slate-50 backdrop-blur-md hover:-translate-y-0.5 hover:bg-white/10",
        ghost:
          "border-transparent bg-transparent text-slate-200 hover:bg-white/5 hover:text-white"
      },
      size: {
        default: "h-11 px-5",
        lg: "h-12 px-6 text-base",
        icon: "h-11 w-11"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { buttonVariants };
