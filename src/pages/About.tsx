import founderPhoto from "@/assets/team/founder.jpg"
import { TeamCard } from "@/components/TeamCard"
import { IconTarget, IconHeart, IconUsers, IconSparkles } from "@/components/icons"

const values = [
  {
    icon: <IconSparkles />,
    title: "Innovation",
    description:
      "We push the boundaries of what technology can do for the businesses and institutions we serve, staying curious about new tools and approaches.",
  },
  {
    icon: <IconHeart />,
    title: "Integrity",
    description:
      "We operate with honesty, transparency, and accountability in every engagement, from the first conversation to the final handover.",
  },
  {
    icon: <IconUsers />,
    title: "Collaboration",
    description:
      "The best software comes from working closely with the people who will actually use it — so we build with our clients, not just for them.",
  },
  {
    icon: <IconTarget />,
    title: "Craft",
    description:
      "We hold ourselves to a high standard in every line of code, every interface decision, and every product we ship, including our own.",
  },
]

const team = [
  {
    name: "Apiiga Simon Awinbe",
    role: "Founder, CEO & First Director",
    photo: founderPhoto,
  },
  {
    name: "Samuel Yaw Apiiga",
    role: "Second Director",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Ayamga Kenneth Abagna",
    role: "Secretary",
    photo: "https://randomuser.me/api/portraits/men/62.jpg",
  },
]

export default function About() {
  return (
    <div>
      <section className="border-b border-border px-6 py-20 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-medium text-primary">About ForgEx</p>
          <h1 className="text-4xl font-bold text-foreground lg:text-5xl">
            Software built by people who understand the problem.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            ForgEx Limited Company is a Ghana-based software development
            company. We design, build, and operate digital products for
            businesses, institutions, and everyday people — and we hold
            ourselves to the same standard on our own platforms, Docta and
            UniGuide, that we bring to every client engagement.
          </p>
        </div>
      </section>

      <section className="border-b border-border px-6 py-20 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Our story
            </p>
            <h2 className="text-3xl font-bold text-foreground">
              From a single idea to a growing software company.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                ForgEx began with a simple observation: too many businesses
                and institutions in Ghana are still running on paper,
                spreadsheets, and processes that don't scale. We started by
                solving problems we cared about directly — building Docta,
                a confidential platform connecting people with counsellors
                and therapists, and UniGuide, a platform that simplifies how
                students buy university forms and check WASSCE results.
              </p>
              <p>
                That hands-on product experience shapes how we work with
                every client. We don't just take a brief and hand back code
                — we think about the people who will actually use what we
                build, the realities of the environment they operate in, and
                what it takes for software to actually get adopted, not just
                delivered.
              </p>
              <p>
                Today, ForgEx is growing into a full software development
                company: building custom platforms, AI-powered tools, and
                digital transformation projects for businesses, schools,
                healthcare providers, and public institutions across Ghana
                and, over time, the wider West African region.
              </p>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
            alt="Team collaborating on a software project"
            className="aspect-4/3 w-full rounded-2xl border border-border object-cover"
          />
        </div>
      </section>

      <section className="border-b border-border px-6 py-20 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            What we stand for
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold text-foreground">
            The principles behind every project we take on.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {v.icon}
                </span>
                <h3 className="mt-4 font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Leadership
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold text-foreground">
            The people behind ForgEx.
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            A small, focused leadership team steering ForgEx's products and
            client work.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {team.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}