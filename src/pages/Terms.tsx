const sections = [
  {
    title: "Introduction",
    body: [
      "Welcome to ForgEx Limited Company (\"ForgEx\", \"we\", \"us\", or \"our\"). These Terms of Service govern your access to and use of the ForgEx website, our products (including Docta and UniGuide), and any related services. By accessing or using our services, you confirm that you have read, understood, and agree to be bound by these Terms.",
    ],
  },
  {
    title: "Acceptance of Terms",
    body: [
      "By creating an account, making a payment, or otherwise using any part of our platform or products, you agree to these Terms. If you do not agree, you must not use our services.",
      "You must be at least 18 years of age, or the legal age of majority in your jurisdiction, to use our services. If you are using our services on behalf of a business or organisation, you represent that you have the authority to bind that entity to these Terms.",
    ],
  },
  {
    title: "Our Services",
    body: [
      "ForgEx provides custom software development, digital transformation consulting, and its own software products, including Docta (a confidential therapy and counselling platform) and UniGuide (a university admissions forms and WASSCE results checker platform).",
      "ForgEx reserves the right to modify, suspend, or discontinue any service or product at any time. We will make reasonable efforts to notify affected users in advance where practical.",
    ],
  },
  {
    title: "User Accounts",
    body: [
      "To access certain services, you may need to register for an account. You agree to provide accurate, current, and complete information and to keep it up to date.",
      "You are solely responsible for maintaining the confidentiality of your account credentials and for all activity under your account. Notify us immediately of any unauthorised use or suspected security breach.",
      "ForgEx reserves the right to restrict, suspend, or terminate access, or remove content, where an account violates these Terms or applicable law.",
    ],
  },
  {
    title: "Payment & Refund Policy",
    body: [
      "Fees for services or subscriptions are quoted in the applicable currency at the time of purchase. ForgEx reserves the right to change pricing, with continued use after a price change constituting acceptance of the new pricing.",
      "Except where required by law or expressly stated otherwise for a specific product, payments are generally non-refundable once a service has been rendered or a session/booking has been fulfilled.",
      "You are responsible for any applicable taxes, levies, or duties associated with your purchase.",
    ],
  },
  {
    title: "Acceptable Use",
    body: [
      "You agree to use our platforms only for lawful purposes. You must not: display or transmit unlawful, obscene, or harassing content; violate intellectual property rights; attempt to disrupt, attack, or gain unauthorised access to our systems; deploy bots, scrapers, or malware; or misrepresent your identity to defraud another user.",
      "Violation of this policy may result in suspension or termination of your account without notice.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "All content on ForgEx platforms — including text, graphics, logos, product designs, and software — is the property of ForgEx Limited Company or its licensors and is protected by applicable intellectual property laws.",
      "ForgEx grants you a limited, non-exclusive, non-transferable, revocable licence to access and use our platforms for your own personal or internal business purposes in accordance with these Terms.",
    ],
  },
  {
    title: "Disclaimer of Warranties",
    body: [
      "Our services are provided \"as is\" and \"as available\" without warranties of any kind, whether express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement. ForgEx does not warrant that any platform will be uninterrupted or error-free.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, ForgEx shall not be liable for indirect, incidental, special, or consequential damages arising from your use of our services.",
      "ForgEx's total liability for any claim shall not exceed the amount you paid to ForgEx in the twelve (12) months preceding the claim.",
    ],
  },
  {
    title: "Termination",
    body: [
      "ForgEx may suspend or terminate your access to any platform at any time, with or without cause, including where we believe you have violated these Terms.",
      "You may terminate your account at any time by contacting us. Provisions which by their nature should survive termination shall continue to apply.",
    ],
  },
  {
    title: "Governing Law",
    body: [
      "These Terms are governed by and construed in accordance with the laws of the Republic of Ghana. Any disputes arising under these Terms are subject to the exclusive jurisdiction of the courts of Ghana.",
    ],
  },
  {
    title: "Changes to These Terms",
    body: [
      "We may modify these Terms at any time. Changes take effect upon posting to our platforms. Continued use of our services after a change constitutes acceptance of the updated Terms.",
    ],
  },
  {
    title: "Company Information",
    body: [
      "ForgEx Limited Company is led by Apiiga Simon Awinbe (Founder, CEO & First Director), Samuel Yaw Apiiga (Second Director), and Ayamga Kenneth Abagna (Secretary).",
      "For questions about these Terms, contact us at hello@forgex.com.",
    ],
  },
]

export default function Terms() {
  return (
    <div>
      <section className="border-b border-border px-6 py-20 lg:px-16">
        <p className="mb-4 text-sm font-medium text-muted-foreground">Legal</p>
        <h1 className="max-w-2xl text-4xl font-bold text-foreground lg:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: September 13, 2026
        </p>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          Please read these terms carefully before using ForgEx's website,
          platforms, and products, including Docta and UniGuide.
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
      </section>

      <section className="px-6 py-16 lg:px-16">
        <p className="text-sm text-muted-foreground">
          Questions about these Terms? Contact us at hello@forgex.com
        </p>
      </section>
    </div>
  )
}