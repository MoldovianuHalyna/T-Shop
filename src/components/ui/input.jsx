import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

const inputVariants = cva(
  "text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
  {
    variants: {
      variant: {
        default:
          "w-full rounded-full border border-border/40 bg-bg/80 px-4 py-3 text-text placeholder:text-textSecondary/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
        subtle:
          "w-full rounded-full border border-border/30 bg-transparent px-4 py-3 text-text placeholder:text-textSecondary/60",
        ghost:
          "w-full rounded-full border border-transparent bg-transparent px-4 py-3 text-text placeholder:text-textSecondary/60",
        checkbox:
          "h-4 w-4 rounded border-border/50 text-accent focus:ring-accent",
        radio: "h-4 w-4 border-border/50 text-accent focus:ring-accent",
      },
      size: {
        default: "text-sm",
        sm: "py-2 text-xs",
        lg: "py-4 text-base",
      },
    },
    compoundVariants: [
      {
        variant: "checkbox",
        size: "default",
        class: "rounded",
      },
      {
        variant: "radio",
        size: "default",
        class: "rounded-full",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Input = React.forwardRef(
  ({ className, type = "text", variant, size, ...props }, ref) => {
    const resolvedVariant =
      variant ??
      (type === "checkbox"
        ? "checkbox"
        : type === "radio"
        ? "radio"
        : "default");

    return (
      <input
        type={type}
        className={cn(
          inputVariants({ variant: resolvedVariant, size }),
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
