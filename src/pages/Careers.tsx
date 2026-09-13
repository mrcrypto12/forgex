import { buttonVariants } from "@/components/ui/button"

const values = [
  { title: "Innovation", description: "We embrace new ideas and push the boundaries of what technology can do for the people we serve." },
  { title: "Integrity", description: "We operate with honesty, transparency, and accountability in everything we do." },
  { title: "Collaboration", description: "The best outcomes come from working together, with each other and with the people who use what we build." },
  { title: "Excellence", description: "We hold ourselves to a high standard in every line of code, every design, and every interaction." },
]

const perks = [
  { title: "Flexible work", description: "Remote-friendly options and flexible schedules." },
  { title: "Professional growth", description: "Support for training, workshops, and certifications." },
  { title: "Meaningful work", description: "Build products used by real people, in healthcare, education, and beyond." },
  { title: "Small, focused team", description: "Your work has visible, direct impact on what ships." },
]

const roles = [
  { title: "Frontend Developer", type: "Full-time - Remote-friendly", description: "Help build and maintain the interfaces for our client projects and our own products using React and TypeScript." },
  { title: "Backend Developer", type: "Contract - Remote-friendly", description: "Design and build APIs and services powering our platforms, with a focus on reliability and clean data models." },
]

export default function Careers() {
  return (
    <div>
      <section className="border-b border-border px-6 py-20 lg:px-16">
        <p className="mb-4 text-sm font-medium text-muted-foreground">Careers at ForgEx</p>
        <h1 className="max-w-2xl text-4xl font-bold text-foreground lg:text-5xl">Build the future with us.</h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          We are a small, growing team building software that matters, for Ghana and beyond.
        </p>
      </section>

      <section className="border-b border-border px-6 py-20 lg:px-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">What we value</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-border px-6 py-20 lg:px-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Why join us</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p) => (
            <div key={p.title}>
              <h3 className="font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 lg:px-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Open roles</h2>
        <div className="mt-8 space-y-4">
          {roles.map((r) => (
            <div key={r.title} className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-semibold text-foreground">{r.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{r.type}</p>
                <p className="mt-2 max-w-xl text-sm text-muted-foreground">{r.description}</p>
              </div>
              <a href="mailto:hello@forgex.com?subject=Application" className={buttonVariants({ variant: "outline" })}>
                Apply
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Do not see a fit but think you would add value anyway? Reach out at hello@forgex.com
        </p>
      </section>
    </div>
  )
}