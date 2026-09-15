export default function Contact() {
  return (
    <div>
      <section className="border-b border-border px-6 py-20 lg:px-16">
        <p className="mb-4 text-sm font-medium text-muted-foreground">
          Contact
        </p>
        <h1 className="max-w-2xl text-4xl font-bold text-foreground lg:text-5xl">
          Let's build something together.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Have an idea, a challenge to solve, or a project in mind? Let’s talk. Whether you’re looking to build software, hardware, IoT solutions, or explore our products, we’d love to hear from you.
          Tell us what you’re working on and let’s explore how ForgEx can help. We typically respond within one business day.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-2 lg:px-16">
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Full name
            </label>
            <input
              type="text"
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              What are you interested in?
            </label>
            <select className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary">
              <option>Custom software development</option>
              <option>Web & mobile applications</option>
              <option>AI & automation</option>
              <option>IoT & smart technology</option>
              <option>Hardware & embedded systems</option>
              <option>Digital transformation</option>
              <option>UI/UX & product design</option>
              <option>Docta</option>
              <option>UniGuide</option>
              <option>Partnership & collaboration</option>
              <option>Something else</option>
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              Message
            </label>
            <textarea
              rows={5}
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
              placeholder="Tell us a bit about what you need..."
            />
          </div>
          <button
            type="submit"
            onClick={() => {
              window.location.href =
                "mailto:apiigasimon0803@gmail.com?subject=Message from ForgEx Contact Form";
            }}
            className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Send message
          </button>
          <p className="text-xs text-muted-foreground">
            We respond as soon as possible, usually within one business day.
          </p>
        </form>

        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-semibold text-foreground">Email</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              apiigasimon0803@gmail.com
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-semibold text-foreground">
              Phone / WhatsApp
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              +233 20 651 5160
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-semibold text-foreground">Location</h3>
            <p className="mt-1 text-sm text-muted-foreground">Ghana</p>
          </div>
        </div>
      </section>
    </div>
  )
}