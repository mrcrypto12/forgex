import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"

const features = [
  {
    title: "University forms, online",
    description:
      "Buy admission forms for supported universities directly from your phone or computer — no queues, no lost paperwork.",
  },
  {
    title: "WASSCE results checker",
    description:
      "Purchase results checker cards or codes instantly and check your WASSCE results the moment they're released.",
  },
  {
    title: "Application guidance",
    description:
      "Clear, step-by-step guidance through each form and application, reducing errors that could cost an admission.",
  },
  {
    title: "Secure payments",
    description:
      "Pay with mobile money or card through a secure checkout, with instant confirmation and receipts.",
  },
  {
    title: "Deadline reminders",
    description:
      "Get notified before application windows and results-checking periods close, so nothing slips through the cracks.",
  },
  {
    title: "Order history",
    description:
      "Track every form and checker you've purchased in one place, so you always have your reference details.",
  },
]

export default function UniGuide() {
  return (
    <div>
      <section className="border-b border-border px-6 py-20 lg:px-16">
        <p className="mb-4 text-sm font-medium text-primary">
          Product · Edtech
        </p>
        <h1 className="max-w-2xl text-4xl font-bold text-foreground lg:text-5xl">
          UniGuide
        </h1>
        <p className="mt-4 max-w-2xl text-xl font-medium text-muted-foreground">
          University forms and WASSCE results, without the queues.
        </p>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          UniGuide lets students buy university admission forms and WASSCE
          results checkers online, turning a process that usually means
          long queues and lost paperwork into a few clicks.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/contact" className={buttonVariants({ size: "lg" })}>
            Talk to us about UniGuide
          </Link>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-16">
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
    </div>
  )
}