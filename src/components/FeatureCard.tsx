import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function FeatureCard({
  title,
  description,
  icon,
  className,
}: {
  title: string
  description: string
  icon?: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "feature-glow-border group rounded-2xl transition-transform duration-300 hover:-translate-y-1",
        className
      )}
    >
      <div className="relative rounded-2xl border border-border bg-card p-6 transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-primary/10">
        {icon && (
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/15">
            {icon}
          </span>
        )}
        <h3 className={cn("font-semibold text-foreground", icon && "mt-4")}>
          {title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}