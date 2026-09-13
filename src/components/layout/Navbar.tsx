import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { Logo } from "./Logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const products = [
  {
    label: "Docta",
    to: "/products/docta",
    desc: "Confidential therapy platform",
  },
  {
    label: "UniGuide",
    to: "/products/uniguide",
    desc: "Forms & results checker",
  },
]

const navLinks = [
  { label: "Home", to: "/", exact: true },
  { label: "About", to: "/about" },
  { label: "Industries", to: "/industries" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
]

export function Navbar() {
  const location = useLocation()
  const [productsOpen, setProductsOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const isProductsActive = location.pathname.startsWith("/products")

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.slice(0, 2).map((link) => (
            <NavbarLink key={link.to} {...link} />
          ))}

          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              type="button"
              className={cn(
                "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isProductsActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Products
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={cn(
                  "transition-transform duration-200",
                  productsOpen && "rotate-180"
                )}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {productsOpen && (
              <div className="absolute left-0 top-full w-64 pt-2">
                <div className="rounded-xl border border-border bg-card p-2 shadow-lg">
                  <NavLink
                    to="/products"
                    className={({ isActive }) =>
                      cn(
                        "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      )
                    }
                  >
                    All Products
                  </NavLink>
                  <div className="my-1 h-px bg-border" />
                  {products.map((p) => (
                    <NavLink
                      key={p.to}
                      to={p.to}
                      className={({ isActive }) =>
                        cn(
                          "block rounded-lg px-3 py-2 transition-colors",
                          isActive
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        )
                      }
                    >
                      <span className="block text-sm font-medium">
                        {p.label}
                      </span>
                      <span className="block text-xs text-muted-foreground/70">
                        {p.desc}
                      </span>
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.slice(2).map((link) => (
            <NavbarLink key={link.to} {...link} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href="/contact"
            className={cn(buttonVariants(), "mt-3 w-full justify-center")}
            >
            Get Started
            </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground"
          >
            {mobileOpen ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.slice(0, 2).map((link) => (
              <MobileLink
                key={link.to}
                {...link}
                onClick={() => setMobileOpen(false)}
              />
            ))}

            <div>
              <button
                type="button"
                onClick={() => setProductsOpen((v) => !v)}
                className={cn(
                  "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isProductsActive
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                Products
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={cn(
                    "transition-transform duration-200",
                    productsOpen && "rotate-180"
                  )}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {productsOpen && (
                <div className="mt-1 ml-3 space-y-1 border-l border-border pl-3">
                  <MobileLink
                    to="/products"
                    label="All Products"
                    onClick={() => setMobileOpen(false)}
                    exact
                  />
                  {products.map((p) => (
                    <NavLink
                      key={p.to}
                      to={p.to}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          "block rounded-lg px-3 py-2 text-sm transition-colors",
                          isActive
                            ? "bg-accent font-medium text-accent-foreground"
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        )
                      }
                    >
                      {p.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <MobileLink
                key={link.to}
                {...link}
                onClick={() => setMobileOpen(false)}
              />
            ))}
            <a
            href="/contact"
            className={cn(buttonVariants(), "mt-3 w-full justify-center")}
            >
            Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

function NavbarLink({
  to,
  label,
  exact,
}: {
  to: string
  label: string
  exact?: boolean
}) {
  return (
    <NavLink
      to={to}
      end={exact}
      className={({ isActive }) =>
        cn(
          "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
          isActive
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        )
      }
    >
      {label}
    </NavLink>
  )
}

function MobileLink({
  to,
  label,
  onClick,
  exact,
}: {
  to: string
  label: string
  onClick?: () => void
  exact?: boolean
}) {
  return (
    <NavLink
      to={to}
      end={exact}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
          isActive
            ? "bg-accent text-accent-foreground"
            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
        )
      }
    >
      {label}
    </NavLink>
  )
}