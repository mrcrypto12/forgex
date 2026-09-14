const sections = [
  {
    title: "Information we collect",
    body: [
      "Personal information: full name, email address, phone number, and billing details where applicable.",
      "Technical information: IP address, browser and device type, and pages visited on our sites and products.",
      "Usage data: feature usage patterns, transaction history, and support interactions across our products.",
    ],
  },
  {
    title: "How we use your data",
    body: [
      "To create and manage accounts on our platforms, including Docta and UniGuide.",
      "To process payments and deliver the services you request.",
      "To communicate with you about your account, updates, and support requests.",
      "To detect, prevent, and respond to fraud or security incidents.",
      "To comply with legal obligations and improve our products.",
    ],
  },
  {
    title: "Sharing your data",
    body: [
      "We do not sell your personal data.",
      "We may share data with trusted service providers who help us operate our platforms, such as payment processors and hosting providers, bound by confidentiality obligations.",
      "We may disclose data when required by law or to protect the rights and safety of ForgEx, our users, or others.",
    ],
  },
  {
    title: "Data security",
    body: [
      "We apply industry-standard technical and organisational measures to protect personal data against unauthorised access, loss, or misuse.",
      "No method of transmission over the internet is 100% secure, and we encourage users to follow good account-security practices.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "You may request access to, correction of, or deletion of the personal data we hold about you, subject to applicable legal obligations.",
      "You may opt out of marketing communications at any time.",
      "To exercise any of these rights, contact our Data Privacy Officer below.",
    ],
  },
  {
    title: "Children's privacy",
    body: [
      "Our general company services are not directed at individuals under 18.",
      "Product-specific policies (such as Docta's) address age-related access and safeguarding separately, given the sensitive nature of that platform.",
    ],
  },
]

export default function Privacy() {
  return (
    <div>
      <section className="border-b border-border px-6 py-20 lg:px-16">
        <p className="mb-4 text-sm font-medium text-muted-foreground">Legal</p>
        <h1 className="max-w-2xl text-4xl font-bold text-foreground lg:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: September 13, 2026
        </p>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          This policy explains how ForgEx Limited Company collects, uses,
          stores, and protects personal information across our website and
          products, including Docta and UniGuide.
        </p>
      </section>

      <section className="divide-y divide-border px-6 lg:px-16">
        {sections.map((s) => (
          <div key={s.title} className="py-10">
            <h2 className="text-xl font-bold text-foreground">{s.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {s.body.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="py-10">
          <h2 className="text-xl font-bold text-foreground">Contact us</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            If you have questions about this Privacy Policy or how we handle
            your data, contact our Data Privacy Officer:
          </p>
          <div className="mt-4 rounded-xl border border-border bg-card p-5 text-sm">
            <p className="font-medium text-foreground">Ayamga Kenneth Abagna</p>
            <p className="mt-1 text-muted-foreground">Secretary, ForgEx Limited Company</p>
            <p className="mt-1 text-muted-foreground">kennethayamga1995@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
  )
}