import { useState, type ReactNode } from "react"
import { NavLink } from "react-router-dom"
import { cn } from "@/lib/utils"
import { IconChevronDown } from "@/components/icons"

export interface NavDropdownItem {
  label: string
  desc: string
  to: string
  icon: ReactNode
}

export function NavDropdown({
  label,
  items,
  isActive,
}: {
  label: string
  items: NavDropdownItem[]
  isActive: boolean
}) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={cn(
          "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
          isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
        )}
      >
        {label}
        <IconChevronDown
          className={cn("transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      {open && (
        <div className="absolute left-1/2 top-full w-105 -translate-x-1/2 pt-2">
          <div className="grid grid-cols-2 gap-1 rounded-2xl border border-border bg-card p-3 shadow-xl">
            {items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive: linkActive }) =>
                  cn(
                    "flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors",
                    linkActive
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-accent hover:text-accent-foreground"
                  )
                }
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {item.icon}
                </span>
                <span>
                  <span className="block text-sm font-medium text-foreground">
                    {item.label}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {item.desc}
                  </span>
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}