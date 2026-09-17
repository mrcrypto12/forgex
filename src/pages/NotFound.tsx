import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
          Per Request
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
          Looking for a system for your institution or organization?
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          Not every system we build is listed on our platform. We develop and
          deploy software solutions for schools, universities, businesses,
          institutions and organizations based on their specific needs.
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          Whether you need a management system, an internal platform, a
          specialized application, or a solution tailored to your
          organization, talk to us about what you need and we'll explore how
          we can build and deploy it for you.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className={buttonVariants({
              size: "lg",
            })}
          >
            Talk to us
          </Link>

          <Link
            to="/"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
            })}
          >
            Go back
          </Link>
        </div>
      </div>
    </div>
  )
}