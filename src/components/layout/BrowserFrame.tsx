import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function BrowserFrame({
  children,
  url = "app.forgex.com",
  className,
}: {
  children: ReactNode
  url?: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-card shadow-xl",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
        <div className="ml-3 flex-1 truncate rounded-md bg-background px-3 py-1 text-xs text-muted-foreground">
          {url}
        </div>
      </div>
      <div className="bg-background">{children}</div>
    </div>
  )
}