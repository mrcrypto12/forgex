import { useState } from "react"
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
import doctaLogo from "../../assets/docta/docta-logo.png";
import UniLogo from "../../assets/docta/uni.png";
import hoteLogo from "../../assets/hotel.png";
import boutLogo from "../../assets/bout.png";
import pulseLogo from "../../assets/pulse.png";
import backLogo from "../../assets/back.png";





const productItems: NavDropdownItem[] = [
  {
    label: "Docta",
    to: "/products/docta",
    desc: "Confidential therapy platform",
    icon: (
      <img
        src={doctaLogo}
        alt="Docta"
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
        alt="UNIGUIDE"
        className="h-full w-full rounded-lg object-cover"
      />
    ),
  },
  {
    label: "HotelMs",
    to: "/products/hotelms",
    desc: "Hotel Management System",
    icon: (
      <img
        src={hoteLogo}
        alt="HOTELMS"
        className="h-full w-full rounded-lg object-cover"
      />
    ),
  },
  {
    label: "BoutiqueMs",
    to: "/products/boutiquems",
    desc: "Boutique Management System",
    icon: (
      <img
        src={boutLogo}
        alt="BOUTIQUEMS"
        className="h-full w-full rounded-lg object-cover"
      />
    ),
  },
  {
    label: "PulseChat",
    to: "/products/pulsechat",
    desc: "Messaging System",
    icon: (
      <img
        src={pulseLogo}
        alt="PULSECHAT"
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
        alt="All Products"
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
                isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
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
            isActive={["/about", "/careers", "/contact", "/privacy"].includes(
              location.pathname
            )}
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
        <div className="border-t border-border bg-background px-4 py-4 lg:hidden">
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

            
              <a href="/contact"
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
        <span className={cn("transition-transform", open && "rotate-180")}>⌄</span>
      </button>
      {open && (
        <div className="mt-1 ml-3 space-y-1 border-l border-border pl-3">
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={onNavigate}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-2 rounded-lg px-3 py-2 text-sm",
                  isActive
                    ? "bg-accent font-medium text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )
              }
            >
              <span className="text-primary">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}