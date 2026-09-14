import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import uniguide from "@/assets/sh.png"
import { FeatureCard } from "@/components/FeatureCard"

const features = [
  {
    title: "University forms, online",
    description:
      "Purchase admission forms for supported universities directly from your phone or computer. No long queues, unnecessary trips or worrying about misplaced paperwork.",
  },
  {
    title: "WASSCE results checker",
    description:
      "Purchase WASSCE results checker cards or codes online and access your results quickly and conveniently when they are released.",
  },
  {
    title: "Find the Right Programme",
    description:
      "Upload your WASSCE results and discover university programmes that match your grades. UniGuide compares your results with available programme requirements and cut-off points to help you identify where you may have the strongest admission prospects.",
  },
  {
    title: "Application Guidance",
    description:
      "Get clear, step-by-step guidance throughout the application process, helping you complete forms correctly and avoid mistakes that could affect your admission.",
  },
  {
    title: "Secure payments",
    description:
      "Pay conveniently with mobile money or card through a secure checkout. Receive instant confirmation and keep your payment receipts for future reference.",
  },
  {
    title: "Deadline reminders",
    description:
      "Get notified before application windows and results-checking periods close.",
  },
  {
    title: "Order history",
    description:
      "Keep track of every admission form and results checker you've purchased in one place, with easy access to your order details and reference information.",
  },
]

export default function UniGuide() {
  return (
    <div>
      <section className="border-b border-border px-6 py-20 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 flex items-center gap-3">
            <p className="text-sm font-medium text-primary">Product · Education</p>
          </div>
          <h1 className="max-w-2xl text-4xl font-bold text-foreground lg:text-5xl">
            UniGuide
          </h1>
          <p className="mt-4 max-w-xl text-xl font-medium text-muted-foreground">
            University forms and WASSCE results, without the queues.
          </p>
          <p className="mt-6 max-w-xl text-muted-foreground">
            UniGuide makes the university application process simpler and more informed. Students can purchase university admission forms and WASSCE results checkers online, eliminating long queues, unnecessary paperwork, and multiple trips.
            But UniGuide goes beyond buying forms. Students can upload their WASSCE results and discover the university programmes they are eligible for based on their results. The platform compares their grades with available programme requirements and historical or published cut-off points across universities, helping them identify programmes where their results are a strong match and where they may have a higher likelihood of admission.
            From checking your results to choosing the right programme and university, UniGuide helps students make more informed decisions about their next step.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className={buttonVariants({ size: "lg" })}>
              Talk to us about UniGuide
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border px-6 py-16 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <img
            src={uniguide}
            alt="UniGuide interface"
            className="aspect-16/7 w-full rounded-2xl border border-border object-cover"
          />
        </div>
      </section>

      <section className="px-6 py-16 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Features
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <FeatureCard key={f.title} title={f.title} description={f.description} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}