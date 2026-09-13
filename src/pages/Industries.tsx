import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"

const industries = [
  {
    name: "Education",
    description:
      "Systems that handle student records, admissions, and academic operations — built with our own UniGuide platform as a proof point.",
    challenges: [
      "Manual, paper-based admissions and results processes",
      "No centralised student or staff records",
      "Poor communication between institutions and students/parents",
    ],
    deliver: [
      "Admissions & forms platforms",
      "Results checking systems",
      "Student record management",
      "Parent/student communication tools",
    ],
  },
  {
    name: "Healthcare",
    description:
      "Confidential, reliable platforms for patient and provider communication — informed by building Docta, our own therapy platform.",
    challenges: [
      "Lost or fragmented patient records",
      "No confidential digital channel between patients and providers",
      "Slow appointment and billing workflows",
    ],
    deliver: [
      "Patient/provider matching & scheduling",
      "Confidential messaging & session tools",
      "Billing & payment integration",
      "Records management",
    ],
  },
  {
    name: "Finance & Fintech",
    description:
      "Precise, secure, and auditable systems for institutions moving money and managing customer accounts.",
    challenges: [
      "Manual reconciliation and reporting",
      "Slow customer onboarding",
      "Limited visibility into financial data",
    ],
    deliver: [
      "Transaction & account management",
      "Reporting & analytics dashboards",
      "Role-based access & audit trails",
      "Payment gateway integrations",
    ],
  },
  {
    name: "Government & Public Sector",
    description:
      "Reliable, transparent systems that help agencies digitise operations and serve citizens better.",
    challenges: [
      "Paper-heavy administrative workflows",
      "No centralised citizen data management",
      "Lack of digital reporting and accountability",
    ],
    deliver: [
      "Citizen & record management systems",
      "Digital forms & data collection",
      "Reporting & audit trails",
      "Multi-level access control",
    ],
  },
]

export default function Industries() {
  return (
    <div>
      <section className="border-b border-border px-6 py-20 lg:px-16">
        <p className="mb-4 text-sm font-medium text-muted-foreground">
          Solutions by Industry
        </p>
        <h1 className="max-w-2xl text-4xl font-bold text-foreground lg:text-5xl">
          Built for your industry, not just your workflow.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Every sector has its own challenges. We build software that
          speaks your language — whether you run a school, a clinic, a
          financial institution, or a government office.
        </p>
      </section>

      <section className="divide-y divide-border">
        {industries.map((ind) => (
          <div
            key={ind.name}
            className="grid grid-cols-1 gap-8 px-6 py-16 lg:grid-cols-3 lg:px-16"
          >
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                {ind.name}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                {ind.description}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Common challenges
              </h3>
              <ul className="mt-4 space-y-2.5">
                {ind.challenges.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                What we deliver
              </h3>
              <ul className="mt-4 space-y-2.5">
                {ind.deliver.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-2.5 text-sm text-foreground"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="px-6 py-20 text-center lg:px-16">
        <h2 className="mx-auto max-w-xl text-2xl font-bold text-foreground">
          Don't see your industry?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          We've worked across dozens of sectors. If yours isn't listed,
          we still want to hear from you.
        </p>
        <Link
          to="/contact"
          className={buttonVariants({ size: "lg", className: "mt-6" })}
        >
          Start a conversation
        </Link>
      </section>
    </div>
  )
}