import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import { BrowserFrame } from "@/components/layout/BrowserFrame"
import { FeatureCard } from "@/components/FeatureCard"
import doctaLogo from "@/assets/docta/docta-logo.png"
import doctaDashboard from "@/assets/docta/dashboard.png"
import doctaOnboarding from "@/assets/docta/onboarding.png"

const features = [
  {
    title: "Private accounts",
    description:
      "Sign up with email or Google and use a private 'Secret Name' so you can seek support without revealing your identity to other users.",
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
      "Pay per session, subscribe weekly, monthly or annually with secure payments handled through our trusted payment partner Paystack.",
  },
]

const audience = [
  "Tertiary students and young adults seeking confidential emotional support, guidance, and a safe space to talk.",
"Working professionals and busy adults who need convenient access to qualified counsellors and therapists around their schedules.",
"People navigating stress, anxiety, relationships, grief, loneliness, burnout and other emotional challenges who may prefer accessible digital support.",
"Parents and caregivers looking for professional emotional and psychological support for themselves or their families.",
"Individuals who may feel uncomfortable seeking traditional in-person therapy and prefer a private, convenient digital experience.",
"People living away from home or in areas with limited access to mental-health professionals who need a more accessible way to connect with support.",
"Organizations, schools, universities and institutions looking to provide accessible mental-health and emotional-wellbeing support to their communities.",
"Licensed counsellors, therapists and mental-health professionals who want a secure digital channel to connect with clients and expand their services.",
]

export default function Docta() {
  return (
    <div>
      <section className="border-b border-border px-6 py-20 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img
                src={doctaLogo}
                alt=""
                className="h-12 w-12 rounded-xl border border-border object-cover"
              />
              <p className="text-sm font-medium text-primary">
                Product · Healthcare technology
              </p>
            </div>
            <h1 className="max-w-2xl text-4xl font-bold text-foreground lg:text-5xl">
              Docta
            </h1>
            <p className="mt-4 max-w-xl text-xl font-medium text-muted-foreground">
              Confidential therapy and counselling, made accessible.
            </p>
            <p className="mt-6 max-w-xl text-muted-foreground">
              Docta is a Ghana-focused platform that connects people
              seeking emotional support with verified counsellors and
              therapists combining private accounts, flexible sessions
              and secure payments in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className={buttonVariants({ size: "lg" })}>
                Talk to us about Docta
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border px-6 py-16 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
          <BrowserFrame url="docta.com/onboarding">
            <img src={doctaOnboarding} alt="Docta onboarding" className="w-full" />
          </BrowserFrame>
          <BrowserFrame url="docta.com/home">
            <img src={doctaDashboard} alt="Docta dashboard" className="w-full" />
          </BrowserFrame>
        </div>
      </section>

      <section className="border-b border-border px-6 py-16 lg:px-16">
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

      <section className="px-6 py-16 lg:px-16">
        <div className="mx-auto max-w-6xl">
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
        </div>
      </section>
    </div>
  )
}