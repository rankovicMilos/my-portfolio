import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em]",
  {
    variants: {
      variant: {
        default:
          "border-white/15 bg-white/5 text-slate-200 shadow-[0_0_30px_rgba(129,140,248,0.3)]",
        outline: "border-white/20 text-slate-200",
        glow: "border-indigo-400/60 bg-indigo-500/10 text-indigo-100",
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

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, className }))} {...props} />
  );
}
