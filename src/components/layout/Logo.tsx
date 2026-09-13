import { Link } from "react-router-dom"
import { useTheme } from "@/lib/theme-provider"
import logoLight from "@/assets/forgex-logo-light.png"
import logoDark from "@/assets/forgex-logo-dark.png"

export function Logo({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme()

  return (
    <Link to="/assets/forgex-logo" className={className}>
      <img
        src={resolvedTheme === "dark" ? logoDark : logoLight}
        alt="ForgEx Limited Company"
        className="h-8 w-auto"
      />
    </Link>
  )
}