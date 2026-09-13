const values = [
  {
    title: "Innovation",
    description:
      "We push the boundaries of what technology can do for the businesses and institutions we serve.",
  },
  {
    title: "Integrity",
    description:
      "We operate with honesty, transparency, and accountability in every engagement.",
  },
  {
    title: "Craft",
    description:
      "We hold ourselves to a high standard in every line of code and every product decision.",
  },
]

export default function About() {
  return (
    <div>
      <section className="border-b border-border px-6 py-20 lg:px-16">
        <p className="mb-4 text-sm font-medium text-muted-foreground">
          About ForgEx
        </p>
        <h1 className="max-w-2xl text-4xl font-bold text-foreground lg:text-5xl">
          A software company building for real problems.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          ForgEx Limited Company designs, builds, and operates software
          products for businesses, institutions, and everyday people. We
          started by building our own platforms — Docta and UniGuide — and
          we bring that same product mindset to every engagement.
        </p>
      </section>

      <section className="border-b border-border px-6 py-20 lg:px-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          What we stand for
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {v.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 lg:px-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          How we work
        </h2>
        <p className="mt-3 max-w-2xl text-3xl font-bold text-foreground">
          Product thinking, applied to every build.
        </p>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          We don't just take briefs and hand back code. Every engagement
          starts with understanding the problem, the people affected by it,
          and the realities of operating in Ghana and across Africa — then
          we design and ship software that actually gets used.
        </p>
      </section>
    </div>
  )
}