import { Link } from "react-router-dom"
import { Logo } from "./Logo"

const footerLinks = {
  Products: [
    { label: "Docta", to: "/products/docta" },
    { label: "UniGuide", to: "/products/uniguide" },
    { label: "All Products", to: "/products" },
  ],
  Company: [
    { label: "About Us", to: "/about" },
    { label: "Industries", to: "/industries" },
    { label: "Careers", to: "/careers" },
    { label: "Contact", to: "/contact" },
  ],
  Legal: [{ label: "Privacy Policy", to: "/privacy" }],
}

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12 lg:px-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Building software for real problems — from healthtech to
            admissions technology, for businesses and institutions across
            Ghana.
          </p>
        </div>

        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="text-sm font-semibold text-foreground">
              {heading}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          ForgEx Limited Company © {new Date().getFullYear()}. All rights
          reserved.
        </p>
        <p>Ghana</p>
      </div>
    </footer>
  )
}