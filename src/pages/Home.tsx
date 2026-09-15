import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { BrowserFrame } from "@/components/layout/BrowserFrame"
import {
  IconHeart,
  IconRocket,
  DigitalTransformationIcon,
} from "@/components/icons"

import doctaDashboard from "@/assets/docta/dashboard.png"
import hotelDashboard from "@/assets/hotel.jpg"
import boutiqueDashboard from "@/assets/boutique.jpg"
import pulsechatDashboard from "@/assets/pulsechat.jpg"
import pmsDashboard from "@/assets/pms.jpg"
import aiCodeImage from "@/assets/globe.jpg"

//import doctaOnboarding from "@/assets/docta/onboarding.png"

const stats = [
  { label: "Products shipped", value: "5+" },
  { label: "Founded", value: "2026" },
  { label: "Focus markets", value: "Ghana & Africa" },
]

const capabilities = [
  {
    icon: <IconHeart />,
    title: "AI-Powered Solutions",
    description:
      "We build intelligent software that turns data into insight, automates complex tasks and helps organizations make faster, smarter decisions.",
  },
  {
    icon: <IconRocket />,
    title: "Custom Software Development",
    description:
      "We design and build web and mobile applications tailored to your unique needs turning your workflows, challenges and ideas into reliable software that works the way you want.",
  },
  {
    icon: <DigitalTransformationIcon />,
    title: "Digital Transformation",
    description:
      "We help institutions and businesses modernize their operations through intelligent automation and tailored software solutions. By integrating technology into existing workflows, we streamline processes, improve efficiency, and build scalable systems that support sustainable growth.",
  },
]

interface ProductScreen {
  url: string
  label: string
  description: string
  path: string
}

interface FeaturedProduct {
  name: string
  tagline: string
  link: string
  screens: ProductScreen[]
}

const featuredProducts: FeaturedProduct[] = [
  {
    name: "Docta",
    tagline: "Confidential Therapy, Made Accessible.",
    link: "/products/docta",
    screens: [
      {
        url: doctaDashboard,
        label: "Home Page",
        description: "Tracks all session activities with ease.",
        path: "docta.com/home",
      },
    ],
  },

  {
    name: "HotelMs",
    tagline: "Hotel Managment System.",
    link: "/products/uniguide",
    screens: [
      {
        url: hotelDashboard,
        label: "Dashboard",
        description: "Manage all hotel activities.",
        path: "http://localhost:5000/dashboard",
      },
    ],
  },

  {
    name: "BoutiqueMs",
    tagline: "Boutique Managment System.",
    link: "/products/uniguide",
    screens: [
      {
        url: boutiqueDashboard,
        label: "Dashboard",
        description:
          "A complete system for managing boutique operations, inventory, sales and customers.",
        path: "http://localhost:5000/dashboard",
      },
    ],
  },

  {
    name: "PulseChat",
    tagline: "Messaging Webapp",
    link: "/products/uniguide",
    screens: [
      {
        url: pulsechatDashboard,
        label: "Chat",
        description:
          "A fast and intuitive platform for real-time conversations and messaging.",
        path: "http://localhost:5000/chat",
      },
    ],
  },

  {
    name: "PharmMs",
    tagline: "Pharmacy Management System.",
    link: "/products/uniguide",
    screens: [
      {
        url: pmsDashboard,
        label: "Dashboard",
        description:
          "A comprehensive solution for managing pharmacy operations, inventory, and patient records.",
        path: "http://localhost:5000/dashboard",
      },
    ],
  },
]

export default function Home() {
  return (
    <div>
      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden border-b border-border px-6 py-24 lg:px-16">
        {/* AI/code image — right side, faded into background */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[50%] max-w-xl lg:block"
          style={{
            maskImage:
              "radial-gradient(ellipse 85% 85% at 75% 50%, black 45%, transparent 80%), linear-gradient(to left, black 45%, transparent 90%)",
            maskComposite: "intersect",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 85% at 75% 50%, black 45%, transparent 80%), linear-gradient(to left, black 45%, transparent 90%)",
            WebkitMaskComposite: "source-in",
          }}
        >
          <img
            src={aiCodeImage}
            alt=""
            className="h-full w-full object-cover opacity-70 dark:opacity-55"
          />

          {/* Color wash */}
          <div className="absolute inset-0 bg-background/30 mix-blend-color dark:bg-primary/15" />

          {/* Animated scanning code */}
          <div
            className="absolute inset-0 opacity-40 mix-blend-screen animate-code-scan"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, transparent 0px, transparent 18px, rgba(255,255,255,0.35) 19px, transparent 21px, transparent 40px)",
              backgroundSize: "100% 200px",
            }}
          />
        </div>

        {/* Glow blob behind the image */}
        <div className="pointer-events-none absolute -right-16 top-1/3 hidden h-72 w-72 rounded-full bg-primary/20 blur-3xl lg:block animate-pulse-slow" />

        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-medium text-primary">
            ForgEx Company Limited
          </p>

          <h1 className="relative z-10 max-w-3xl text-4xl font-bold tracking-tight text-foreground lg:text-6xl">
            We build real world software solutions to Africa's most pressing
            challenges.
          </h1>

          <p className="relative z-10 mt-6 max-w-xl text-lg text-muted-foreground">
            Forgex designs and builds innovative digital solutions that solve
            real-world problems. From healthcare technology and education to business and
            institutional platforms, we turn ideas into secure, scalable
            technology that helps organizations work smarter, move faster and
            serve people better.
          </p>

          <div className="relative z-10 mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className={buttonVariants({ size: "lg" })}
            >
              Work with us
            </Link>

            <Link
              to="/products"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
              })}
            >
              See our products
            </Link>
          </div>

          <div className="relative z-10 mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border bg-card p-6"
              >
                <p className="text-3xl font-bold text-foreground">
                  {s.value}
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CAPABILITIES ==================== */}
      <section className="border-b border-border px-6 py-24 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              What we do
            </p>

            <h2 className="text-3xl font-bold text-foreground">
              We design and build intelligent technologies for day to day businesses operations.            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {capability.icon}
                </div>

                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  {capability.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PRODUCTS ==================== */}
      <section className="border-b border-border px-6 py-24 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Our Products
          </p>

          <h2 className="max-w-xl text-3xl font-bold text-foreground">
            Platforms we've built end to end.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {featuredProducts.map((product) => (
              <div
                key={product.name}
                className="flex flex-col rounded-2xl border border-border bg-card p-8"
              >
                {/* Product icons removed */}

                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-2xl font-bold text-foreground">
                    {product.name}

                    <span className="mt-1 block text-base font-medium text-primary">
                      {product.tagline}
                    </span>
                  </h3>

                  <Link
                    to={product.link}
                    className={buttonVariants({
                      variant: "outline",
                      size: "sm",
                    })}
                  >
                    Explore
                  </Link>
                </div>

                {product.screens.length > 0 ? (
                  <div className="mt-6 space-y-6">
                    {product.screens.map((screen) => (
                      <div key={screen.path}>
                        <h4 className="text-sm font-semibold text-foreground">
                          {screen.label}
                        </h4>

                        <p className="mt-1 text-sm text-muted-foreground">
                          {screen.description}
                        </p>

                        <BrowserFrame url={screen.path} className="mt-3">
                          <img
                            src={screen.url}
                            alt={`${product.name} — ${screen.label}`}
                            className="w-full"
                          />
                        </BrowserFrame>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-6 flex flex-1 items-center justify-center rounded-2xl border border-dashed border-border bg-muted/30 p-10 text-center">
                    <p className="text-sm text-muted-foreground">
                      Interfaces coming soon.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="px-6 py-24 text-center lg:px-16">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold text-foreground">
          Do you have an idea? Let's build it for you..
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          From platforms and mobile apps to complete digital transformations
          our team is ready to build it with you.
        </p>

        <Link
          to="/contact"
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-8 inline-flex"
          )}
        >
          Connect with us
        </Link>
      </section>
    </div>
  )
}