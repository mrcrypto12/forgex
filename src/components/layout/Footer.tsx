import { Link } from "react-router-dom"
import { Logo } from "./Logo"
import { IconMail } from "@/components/icons"

const footerLinks = {
  Products: [
    { label: "Docta", to: "/products/docta" },
    { label: "UniGuide", to: "/products/uniguide" },
    { label: "All Products", to: "/products" },
  ],
  Company: [
    { label: "About Us", to: "/about" },
    { label: "Careers", to: "/careers" },
    { label: "Terms of Service", to: "/terms" },
    { label: "Privacy Policy", to: "/privacy" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-14 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Building digital products and systems that solve real problems, simplify complex processes
            and help businesses and institutions work better.
          </p>
        </div>

        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="text-sm font-semibold text-foreground">{heading}</h4>
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

        <div>
          <h4 className="text-sm font-semibold text-foreground">Get in touch</h4>
          
            <a href="apiigasimon0803@gmail.com"
            className="mt-4 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <IconMail className="text-primary" />
            support@forgex.com
          </a>
          <p className="mt-2 text-sm text-muted-foreground">Ghana</p>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-3xl space-y-2">
          <p>
            ForgEx Company Limited © {new Date().getFullYear()}. All rights reserved.
          </p>
          <p>
            ForgEx and its logo are trademarks of ForgEx Limited Company. All website
            content, software, designs and materials are protected by applicable
            intellectual property laws and may not be reproduced or distributed
            without prior written permission.
          </p>
        </div>

        <p className="shrink-0">Sunyani, Ghana</p>
      </div>
    </footer>
  )
}