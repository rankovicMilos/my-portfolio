import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-40 w-full resize-y rounded-control border border-line-strong bg-transparent px-4 py-3 text-base text-ink transition-colors duration-200 placeholder:text-mute hover:border-mute disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-cobalt-ink focus-visible:outline-offset-0",
        "aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
