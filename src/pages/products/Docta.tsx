import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"

const features = [
  {
    title: "Private accounts",
    description:
      "Sign up with email or Google, and use a private 'Secret Name' so you can seek support without revealing your identity to other users.",
  },
  {
    title: "Therapist matching",
    description:
      "Get matched with an available, verified counsellor or therapist, with profiles showing their specialisation and background.",
  },
  {
    title: "Text, audio & video sessions",
    description:
      "Start a session and communicate the way that's most comfortable for you, with session timing and status handled automatically.",
  },
  {
    title: "Confidential messaging",
    description:
      "Message your therapist privately within the platform, with an optional opening note when you start a new session.",
  },
  {
    title: "Educational content",
    description:
      "Read mental-health articles and access awareness content designed to make support feel less intimidating.",
  },
  {
    title: "Flexible plans",
    description:
      "Pay per session, or subscribe weekly, monthly, or annually — with secure payments handled through Paystack.",
  },
]

const audience = [
  "Tertiary students and young adults seeking confidential emotional support",
  "Adults looking for convenient access to qualified counsellors and therapists",
  "Licensed counsellors and therapists who want a digital channel to reach clients",
]

export default function Docta() {
  return (
    <div>
      <section className="border-b border-border px-6 py-20 lg:px-16">
        <p className="mb-4 text-sm font-medium text-primary">
          Product · Healthtech
        </p>
        <h1 className="max-w-2xl text-4xl font-bold text-foreground lg:text-5xl">
          Docta
        </h1>
        <p className="mt-4 max-w-2xl text-xl font-medium text-muted-foreground">
          Confidential therapy and counselling, made accessible.
        </p>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          Docta is a Ghana-focused platform that connects people seeking
          emotional support with verified counsellors and therapists —
          combining private accounts, flexible sessions, and secure payments
          in one place.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/contact" className={buttonVariants({ size: "lg" })}>
            Talk to us about Docta
          </Link>
        </div>
      </section>

      <section className="border-b border-border px-6 py-16 lg:px-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Features
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 lg:px-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Built for
        </h2>
        <ul className="mt-6 max-w-2xl space-y-3">
          {audience.map((a) => (
            <li
              key={a}
              className="flex items-start gap-3 text-muted-foreground"
            >
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {a}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}