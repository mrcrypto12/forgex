import { Link } from "react-router-dom"
import { IconGraduationCap } from "@/components/icons"
import doctaLogo from "@/assets/docta/docta-logo.png"

const products = [
  {
    name: "Docta",
    tagline: "Confidential therapy & counselling platform",
    description:
      "Connects people seeking emotional support with verified counsellors and therapists, with private messaging, sessions, and flexible plans.",
    to: "/products/docta",
    tags: ["Healthtech", "Ghana", "Confidential"],
    logo: doctaLogo,
  },
  {
    name: "UniGuide",
    tagline: "University forms & WASSCE results checker",
    description:
      "Lets students buy university admission forms and WASSCE results checkers online, removing queues and guesswork from admissions.",
    to: "/products/uniguide",
    tags: ["Edtech", "Admissions", "Ghana"],
    icon: <IconGraduationCap className="h-8 w-8" />,
  },
]

export default function Products() {
  return (
    <div>
      <section className="border-b border-border px-6 py-20 lg:px-16">
        <p className="mb-4 text-sm font-medium text-muted-foreground">
          Our Products
        </p>
        <h1 className="max-w-2xl text-4xl font-bold text-foreground lg:text-5xl">
          Platforms we build and run ourselves.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Beyond client work, ForgEx builds and operates its own software
          products, tackling problems we care about in healthcare and
          education access.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-6 px-6 py-16 md:grid-cols-2 lg:px-16">
        {products.map((p) => (
          <Link
            key={p.name}
            to={p.to}
            className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/50"
          >
            <div className="mb-4 flex items-center gap-4">
              {p.logo ? (
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  className="h-12 w-12 rounded-xl border border-border object-cover"
                />
              ) : (
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {p.icon}
                </span>
              )}
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <h2 className="text-2xl font-bold text-foreground">{p.name}</h2>
            <p className="mt-2 text-sm font-medium text-primary">{p.tagline}</p>
            <p className="mt-4 text-sm text-muted-foreground">{p.description}</p>
            <span className="mt-6 inline-flex items-center text-sm font-medium text-foreground">
              Learn more
              <span className="ml-1 transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        ))}
      </section>
    </div>
  )
}