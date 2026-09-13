import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const stats = [
  { label: "Products shipped", value: "2+" },
  { label: "Founded", value: "2025" },
  { label: "Focus markets", value: "Ghana & Africa" },
]

const products = [
  {
    name: "Docta",
    tagline: "Confidential therapy & counselling, made accessible.",
    description:
      "A digital platform connecting people in Ghana with verified counsellors and therapists for confidential, convenient emotional support.",
    to: "/products/docta",
  },
  {
    name: "UniGuide",
    tagline: "University forms & WASSCE results, without the queues.",
    description:
      "A platform for buying university admission forms and WASSCE results checkers, removing friction from Ghana's academic admissions process.",
    to: "/products/uniguide",
  },
]

const capabilities = [
  {
    title: "AI-Powered Solutions",
    description:
      "We build intelligent software that learns, adapts, and delivers — helping teams automate decisions and surface insights.",
  },
  {
    title: "Custom Software Development",
    description:
      "Web and mobile applications engineered around your workflow, not off-the-shelf templates you have to bend around.",
  },
  {
    title: "Digital Transformation",
    description:
      "We help institutions and businesses modernise how they operate, integrating automation and custom software into workflows that scale.",
  },
]

export default function Home() {
  return (
    <div>
      <section className="border-b border-border px-6 py-24 lg:px-16">
        <p className="mb-4 text-sm font-medium text-muted-foreground">
          ForgEx Limited Company · Software Development
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground lg:text-6xl">
          We build the software behind your next big move.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          ForgEx designs and builds custom platforms — from confidential
          healthtech to admissions technology — helping businesses and
          institutions across Ghana move faster and serve people better.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/contact" className={buttonVariants({ size: "lg" })}>
            Work with us
          </Link>
          <Link
            to="/products"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            See our products
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border bg-card p-6"
            >
              <p className="text-3xl font-bold text-foreground">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-border px-6 py-20 lg:px-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          What we do
        </h2>
        <p className="mt-3 max-w-2xl text-3xl font-bold text-foreground">
          Software built around your problem, not a template.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-border px-6 py-20 lg:px-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Our products
        </h2>
        <p className="mt-3 max-w-2xl text-3xl font-bold text-foreground">
          Platforms we've built and operate ourselves.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {products.map((p) => (
            <Link
              key={p.name}
              to={p.to}
              className="group rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/50"
            >
              <h3 className="text-2xl font-bold text-foreground">{p.name}</h3>
              <p className="mt-2 text-sm font-medium text-primary">
                {p.tagline}
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                {p.description}
              </p>
              <span className="mt-6 inline-flex items-center text-sm font-medium text-foreground">
                Learn more
                <span className="ml-1 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 text-center lg:px-16">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold text-foreground">
          Have an idea? Let's build it together.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Whether it's a platform, a mobile app, or a full digital
          transformation — our team is ready to build it with you.
        </p>
        <Link
          to="/contact"
          className={cn(buttonVariants({ size: "lg" }), "mt-8 inline-flex")}
        >
          Start a project
        </Link>
      </section>
    </div>
  )
}