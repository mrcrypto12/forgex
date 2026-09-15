import founderPhoto from "@/assets/team/founder.jpg"
import { TeamCard } from "@/components/TeamCard"
import meet from "@/assets/meet.png"
//import ken from "@/assets/team/ken.jpg"
import { IconTarget, IconShield, IconUsers, IconBriefcase } from "@/components/icons"

const values = [
  {
    icon: <IconBriefcase />,
    title: "Innovation",
    description:
      "We push the boundaries of what technology can do for the businesses and institutions we serve, staying curious about new tools and approaches.",
  },
  {
    icon: <IconShield />,
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
    role: "Founder & CEO" ,
    photo: founderPhoto,
  },
  /* {
    name: "Samuel Yaw Apiiga",
    role: "Director",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
  },
 {
    name: "Ayamga Kenneth Abagna",
    role: "Secretary",
    photo: ken,
  },*/
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
            ForgEx Company Limited is a Ghana-based tech company focused on building practical, reliable
            and user-centered digital solutions. We design, develop and operate products for businesses, institutions
            and individuals that solve real problems through thoughtful technology.
            Our commitment to quality applies to everything we build, including our own platforms that we manage personally, Docta and UniGuide and every other product we deliver for our clients.
            We approach each engagement with the same standard of care, innovation and accountability.
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
              From a simple idea to a growing software company.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                ForgEx began with a simple observation. Many businesses and institutions in Ghana still rely on paper-based processes, spreadsheets
                and systems that make it difficult to scale. We saw an opportunity to use technology to make these processes simpler, more efficient, and more accessible.
                We started by solving problems we understood firsthand. We built Docta, a confidential digital platform connecting people with counsellors and therapists
                and UniGuide, a platform designed to simplify university form purchases, WASSCE result checking and the journey toward making informed university choices.
                Building and operating our own products has shaped the way we approach every client engagement. We don't simply take a brief and deliver code. We take the time 
                to understand the people, processes and environments behind each problem then build solutions that are practical, intuitive and designed for real-world adoption.
                Today, ForgEx is growing into a full-service software development company, delivering custom platforms, AI-powered solutions, IoT solutions, connected hardware, automation technologies and digital transformation projects for individuals,businesses, 
                schools, healthcare providers and public institutions across Ghana. Our ambition is to continue growing beyond Ghana and contribute to a stronger digital ecosystem across West Africa.
              </p>
              <p>
                That hands-on experience shapes how we approach every project. We don't simply take a brief and deliver a finished product, we take the time to understand the people, 
                environments and challenges behind the problem.
                Whether we're building software, connected hardware, IoT systems, or intelligent technology, we focus on how the solution will work in the real world. From the first idea to deployment and beyond, 
                we think about usability, reliability, scalability and adoption because successful technology isn't just about being built; it's about being useful, trusted
                and built to last.
              </p>
              <p>
                Today, ForgEx is growing into a technology company building software, AI-powered solutions, IoT systems and smart technologies for businesses and institutions across Ghana and beyond.
              </p>
            </div>
          </div>
          <img
            src={meet}
            alt="Team"
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