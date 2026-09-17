import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { Logo } from "./Logo"
import { NavDropdown, type NavDropdownItem } from "./NavDropdown"
import { ThemeToggle } from "@/components/theme-toggle"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  IconBuilding,
  IconBriefcase,
  IconMail,
  IconShield,
  IconMenu,
  IconX,
} from "@/components/icons"

import doctaLogo from "../../assets/docta/docta-logo.png"
import UniLogo from "../../assets/docta/uni.png"
import hoteLogo from "../../assets/hotel.png"
import boutLogo from "../../assets/bout.png"
import pulseLogo from "../../assets/pulse.png"
import backLogo from "../../assets/back.png"

const productItems: NavDropdownItem[] = [
  {
    label: "Docta",
    to: "/products/docta",
    desc: "Confidential therapy platform",
    icon: (
      <img
        src={doctaLogo}
        alt=""
        className="h-full w-full rounded-lg object-cover"
      />
    ),
  },
  {
    label: "UniGuide",
    to: "/products/uniguide",
    desc: "University Forms & results checker",
    icon: (
      <img
        src={UniLogo}
        alt=""
        className="h-full w-full rounded-lg object-cover"
      />
    ),
  },
  {
    label: "HotelMs",
    to: "src\\pages\\NotFound.tsx",
    desc: "Hotel Management System",
    icon: (
      <img
        src={hoteLogo}
        alt=""
        className="h-full w-full rounded-lg object-cover"
      />
    ),
  },
  {
    label: "BoutiqueMs",
    to: "src\\pages\\NotFound.tsx",
    desc: "Boutique Management System",
    icon: (
      <img
        src={boutLogo}
        alt=""
        className="h-full w-full rounded-lg object-cover"
      />
    ),
  },
  {
    label: "PulseChat",
    to: "src\\pages\\NotFound.tsx",
    desc: "Messaging System",
    icon: (
      <img
        src={pulseLogo}
        alt=""
        className="h-full w-full rounded-lg object-cover"
      />
    ),
  },
  {
    label: "All Products",
    to: "/products",
    desc: "View all our products",
    icon: (
      <img
        src={backLogo}
        alt=""
        className="h-full w-full rounded-lg object-cover"
      />
    ),
  },
]

const companyItems: NavDropdownItem[] = [
  {
    label: "About Us",
    to: "/about",
    desc: "Our mission & the people behind ForgEx",
    icon: <IconBuilding />,
  },
  {
    label: "Careers",
    to: "/careers",
    desc: "Join our growing team",
    icon: <IconBriefcase />,
  },
  {
    label: "Contact",
    to: "/contact",
    desc: "Get in touch with us",
    icon: <IconMail />,
  },
  {
    label: "Privacy Policy",
    to: "/privacy",
    desc: "How we collect and manage your data",
    icon: <IconShield />,
  },
]

export function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileProducts, setMobileProducts] = useState(false)
  const [mobileCompany, setMobileCompany] = useState(false)

  // Lock background scroll while the mobile menu is open, so only the
  // menu panel itself scrolls (no confusing double-scroll behind it).
  useEffect(() => {
    if (mobileOpen) {
      const previousOverflow = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = previousOverflow
      }
    }
  }, [mobileOpen])

  // Close the mobile menu automatically if the viewport grows past the
  // mobile breakpoint (e.g. rotating a tablet, resizing a window).
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )
            }
          >
            Home
          </NavLink>

          <NavDropdown
            label="Products"
            items={productItems}
            isActive={location.pathname.startsWith("/products")}
          />

          <NavDropdown
            label="Company"
            items={companyItems}
            isActive={[
              "/about",
              "/careers",
              "/contact",
              "/privacy",
            ].includes(location.pathname)}
          />
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />

          <a href="/contact" className={buttonVariants()}>
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
            {mobileOpen ? <IconX /> : <IconMenu />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-x-0 top-20 z-40 max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-contain border-t border-border bg-background px-4 py-4 lg:hidden"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <nav className="flex flex-col gap-1">
            <NavLink
              to="/"
              end
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium",
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )
              }
            >
              Home
            </NavLink>

            <MobileGroup
              label="Products"
              open={mobileProducts}
              setOpen={setMobileProducts}
              items={productItems}
              onNavigate={() => setMobileOpen(false)}
            />

            <MobileGroup
              label="Company"
              open={mobileCompany}
              setOpen={setMobileCompany}
              items={companyItems}
              onNavigate={() => setMobileOpen(false)}
            />

            <a
              href="/contact"
              className={cn(
                buttonVariants(),
                "mt-3 w-full justify-center"
              )}
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

function MobileGroup({
  label,
  open,
  setOpen,
  items,
  onNavigate,
}: {
  label: string
  open: boolean
  setOpen: (v: boolean) => void
  items: NavDropdownItem[]
  onNavigate: () => void
}) {
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      >
        {label}

        <span
          className={cn(
            "transition-transform",
            open && "rotate-180"
          )}
        >
          ⌄
        </span>
      </button>

      {open && (
        <div className="mt-1 ml-3 max-h-[45vh] space-y-1 overflow-y-auto overscroll-contain border-l border-border pl-3">
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={onNavigate}
              className={({ isActive }) =>
                cn(
                  "flex min-h-12 items-center gap-3 rounded-lg px-3 py-2 text-sm",
                  isActive
                    ? "bg-accent font-medium text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )
              }
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg text-primary">
                <span className="block h-8 w-8">
                  {item.icon}
                </span>
              </span>

              <span className="min-w-0 truncate">
                {item.label}
              </span>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}