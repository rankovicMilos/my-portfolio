import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full min-w-0 rounded-control border border-line-strong bg-transparent px-4 text-base text-ink transition-colors duration-200 placeholder:text-mute hover:border-mute disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-cobalt-ink focus-visible:outline-offset-0",
        "aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
