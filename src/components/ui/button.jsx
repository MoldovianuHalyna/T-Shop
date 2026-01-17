import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "../../lib/utils";

import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 border text-sm font-semibold transition-colors transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-accent text-white shadow-[0_18px_44px_-28px_rgba(139,92,246,0.9)] hover:-translate-y-0.5 hover:shadow-[0_22px_52px_-28px_rgba(139,92,246,0.9)]",
        secondary:
          "border-border/50 bg-surface/80 text-text hover:-translate-y-0.5 hover:border-accent/60",
        outline:
          "border-border/50 bg-transparent text-text hover:border-accent/70 hover:bg-accentSoft/30",
        ghost: "border-transparent bg-transparent text-text hover:bg-hover/60",
        subtle:
          "border-border/40 bg-bg/70 text-textSecondary hover:text-text hover:border-accent/40",
        icon: "border-border/60 bg-surface/80 text-text hover:-translate-y-0.5",
        chip: "border-border/40 bg-surface/60 text-textSecondary uppercase tracking-[0.2em] hover:border-accent/50 hover:text-text",
        card: "flex w-full flex-col items-start justify-start gap-4 border border-border/60 bg-surface/80 p-5 text-left shadow-[0_24px_60px_-36px_rgba(15,23,42,0.55)] hover:-translate-y-1 hover:border-accent/70",
      },
      size: {
        default: "px-5 py-3",
        sm: "px-4 py-2 text-xs",
        lg: "px-6 py-3 text-base",
        icon: "h-11 w-11 p-0",
        chip: "px-4 py-2 text-xs",
        none: "p-0",
      },
      shape: {
        pill: "rounded-full",
        soft: "rounded-2xl",
        card: "rounded-[22px]",
        square: "rounded-xl",
      },
    },
    compoundVariants: [
      {
        variant: "card",
        size: "none",
        class: "rounded-[22px]",
      },
      {
        variant: "icon",
        size: "icon",
        class: "rounded-2xl",
      },
      {
        variant: "chip",
        size: "chip",
        class: "rounded-full",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "pill",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, shape, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, shape }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
