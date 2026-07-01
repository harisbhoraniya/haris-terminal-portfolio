import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-[11px] font-mono font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-glass-border bg-white/[0.03] text-ink-muted",
        amber:
          "border-amber/20 bg-amber/[0.08] text-amber",
        phosphor:
          "border-phosphor/20 bg-phosphor/[0.08] text-phosphor",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
