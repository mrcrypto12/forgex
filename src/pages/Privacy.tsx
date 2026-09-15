import { useState } from "react"

const sections = [
  {
    title: "1. About this Privacy Policy",
    body: [
      'ForgEx Limited Company ("ForgEx", "we", "us", or "our") is committed to protecting the privacy, security, and rights of individuals whose personal data we process.',
      "This Privacy Policy explains how we collect, use, disclose, store, protect, and otherwise process personal data when you visit our websites, use our applications and platforms, purchase our products, communicate with us, or otherwise interact with ForgEx.",
      "This Privacy Policy is intended to reflect our obligations under applicable data protection and privacy laws of Ghana, including the Data Protection Act, 2012 (Act 843), and to explain our approach to responsible data processing.",
      "Some ForgEx products and services may process information that requires additional safeguards because of their nature. Where a product has a separate privacy notice, that notice should be read together with this Privacy Policy and will provide additional information about the relevant processing activities.",
    ],
  },
  {
    title: "2. Who we are",
    body: [
      "The organisation responsible for the processing of personal data described in this Privacy Policy is ForgEx Limited Company, a Ghana-based technology company that develops and operates software, digital platforms, AI-powered solutions, IoT systems, hardware-enabled solutions, and other technology services.",
      "Where ForgEx determines the purposes and means of processing personal data, ForgEx may act as a data controller. Where ForgEx processes personal data on behalf of a client or another organisation, ForgEx may act as a data processor and will process that information according to the applicable contractual instructions and data protection requirements.",
      "The specific role of ForgEx will depend on the service, relationship, and processing activity involved.",
    ],
  },
  {
    title: "3. Our commitment to data protection",
    body: [
      "ForgEx aims to process personal data lawfully, responsibly, fairly, and transparently.",
      "We seek to collect personal data only for specified, explicit, and legitimate purposes and to avoid using information in ways that are incompatible with those purposes.",
      "We seek to collect information that is reasonably necessary and relevant for the purpose for which it is processed and to avoid excessive or unnecessary collection.",
      "We take reasonable steps to maintain accurate and up-to-date personal data and to correct information that is inaccurate or incomplete where appropriate.",
      "We do not retain personal data indefinitely. Information is retained only for as long as reasonably necessary for the relevant purpose, legal obligations, legitimate business requirements, security, dispute resolution, or other lawful purposes.",
      "We apply appropriate technical and organisational safeguards designed to protect personal data against unauthorised access, disclosure, alteration, loss, destruction, or misuse.",
      "We seek to remain accountable for our processing activities and to maintain appropriate internal procedures, policies, records, and safeguards for the protection of personal data.",
    ],
  },
  {
    title: "4. Personal data we collect",
    body: [
      "Depending on how you interact with ForgEx, we may collect different categories of personal data.",
      "Identity information may include your name, username, account identifier, date of birth where necessary, and other information used to identify or manage your account.",
      "Contact information may include your email address, telephone number, postal or physical address, organisation, job title, and other communication details.",
      "Account information may include login credentials, account preferences, profile information, authentication information, and records associated with your use of our services.",
      "Transaction information may include purchases, subscriptions, orders, invoices, payment status, transaction references, billing information, and service history.",
      "Technical information may include IP address, browser type, operating system, device type, device identifiers, network information, language preferences, approximate location, logs, and other technical information generated when you interact with our services.",
      "Usage information may include pages viewed, features used, searches, interactions, session information, timestamps, preferences, diagnostics, performance information, and other information about how our services are used.",
      "Communication information may include enquiries, feedback, customer support requests, correspondence, submitted forms, and information contained in communications with ForgEx.",
      "Project and professional information may include information provided by clients, organisations, schools, institutions, businesses, contractors, or partners when engaging ForgEx for technology services.",
      "Information submitted through our products may include additional categories of personal data depending on the purpose and functionality of the relevant product.",
    ],
  },
  {
    title: "5. Special or sensitive personal data",
    body: [
      "Some personal data requires a higher level of care because of its sensitive nature. Depending on the service, this may include health information, information about children or young people, identification information, financial information, biometric information, or other information classified as special personal data under applicable law.",
      "ForgEx does not intentionally collect special personal data unless there is a legitimate and lawful reason to do so and appropriate safeguards are in place.",
      "Where a ForgEx product requires the processing of sensitive or special personal data, additional privacy notices, consent mechanisms, access controls, security measures, contractual safeguards, or other protections may apply.",
      "Docta, for example, may involve sensitive information because of the nature of counselling and mental-health-related services. Such processing is subject to additional product-specific privacy and safeguarding requirements.",
      "We seek to limit access to sensitive information to authorised persons who require access for legitimate service, operational, security, or legal purposes.",
    ],
  },
  {
    title: "6. How we collect personal data",
    body: [
      "We collect personal data directly from you when you create an account, submit a form, make a purchase, use a product, contact us, request support, apply for a position, enter into a business relationship, or otherwise provide information to us.",
      "We may automatically collect certain technical and usage information when you use our websites, applications, platforms, connected systems, or other services.",
      "We may receive personal data from organisations, institutions, business partners, service providers, payment providers, or other third parties where there is a lawful basis for doing so.",
      "Where personal data is provided to us by a client or organisation for processing on its behalf, that organisation may be responsible for informing the relevant individuals about the processing and obtaining any required permissions or consents.",
      "We seek to collect personal data fairly and transparently and, where required, provide appropriate notice before or at the time of collection.",
    ],
  },
  {
    title: "7. Purposes for which we use personal data",
    body: [
      "To provide, operate, maintain, secure, and improve our websites, applications, products, platforms, and services.",
      "To create, manage, authenticate, and secure user accounts.",
      "To process orders, payments, subscriptions, registrations, applications, and other transactions.",
      "To provide customer service, technical assistance, and support.",
      "To communicate with you about your account, transactions, services, security matters, product changes, and important notices.",
      "To understand how our products and services are used and improve their usability, reliability, accessibility, functionality, and performance.",
      "To develop and test new products, software, hardware, IoT systems, AI-powered technologies, and other technology solutions.",
      "To detect, investigate, prevent, and respond to fraud, abuse, security incidents, unauthorised access, unlawful activity, and violations of our agreements.",
      "To maintain business, financial, operational, audit, and compliance records.",
      "To comply with applicable laws, regulations, legal processes, governmental requests, and lawful orders.",
      "To establish, exercise, or defend legal rights and claims and to resolve disputes.",
      "To send marketing and promotional communications where permitted by applicable law and, where required, based on your consent.",
    ],
  },
  {
    title: "8. Lawful processing",
    body: [
      "ForgEx seeks to process personal data only where there is a lawful basis for doing so.",
      "Depending on the circumstances, processing may be necessary to provide a service or perform a contract, comply with a legal obligation, protect legitimate interests, protect the rights or safety of individuals, or fulfil another lawful purpose recognised under applicable data protection law.",
      "Where consent is required, we will seek consent in an appropriate manner and will not treat consent as a substitute for another lawful basis where another basis is required.",
      "Where processing is based on consent, you may withdraw that consent where applicable. Withdrawal does not affect the lawfulness of processing carried out before the withdrawal.",
      "The lawful basis for processing may differ between products, services, processing activities, and categories of personal data.",
    ],
  },
  {
    title: "9. Cookies and similar technologies",
    body: [
      "Our websites and applications may use cookies, local storage, logs, pixels, analytics tools, and similar technologies to operate services, remember preferences, maintain sessions, improve security, understand usage, and improve performance.",
      "Some technologies may be necessary for our services to function correctly, while others may be used for analytics, preferences, communications, or other optional purposes.",
      "Where applicable law requires consent for non-essential cookies or similar technologies, we will provide an appropriate mechanism for obtaining and managing that consent.",
      "You may manage cookies through your browser or device settings. Disabling certain technologies may affect the availability or functionality of some services.",
    ],
  },
  {
    title: "10. Sharing and disclosure of personal data",
    body: [
      "ForgEx does not sell personal data.",
      "We may share personal data with trusted service providers and processors that support our operations, including hosting providers, cloud infrastructure providers, payment processors, email and communications providers, analytics providers, customer-support platforms, security providers, and other technology suppliers.",
      "Where a third party processes personal data on our behalf, we seek to establish appropriate contractual, confidentiality, security, and data protection requirements.",
      "We may disclose personal data to professional advisers, auditors, insurers, legal representatives, or other professional service providers where reasonably necessary for legitimate business or legal purposes.",
      "We may disclose personal data where required or permitted by applicable law, court order, regulatory requirement, governmental request, or lawful process.",
      "We may disclose information where reasonably necessary to detect, investigate, prevent, or respond to fraud, security incidents, unlawful activity, threats to safety, or violations of our agreements.",
      "If ForgEx undergoes a merger, acquisition, restructuring, financing, sale of assets, or similar transaction, personal data may be transferred as part of that transaction subject to applicable legal requirements and appropriate safeguards.",
    ],
  },
  {
    title: "11. Data processors and third-party service providers",
    body: [
      "ForgEx may use third-party processors and service providers to provide infrastructure, hosting, authentication, payments, communications, analytics, security, development, monitoring, backup, and other services.",
      "We seek to select service providers that can provide appropriate security and privacy safeguards and require them to process personal data only for authorised purposes.",
      "Where appropriate, our agreements with processors address confidentiality, security, permitted processing, access controls, data handling, retention, deletion, and other relevant data protection obligations.",
      "Third-party providers may have their own privacy policies and terms. Where you directly use a third-party service, that provider may also process information under its own terms.",
    ],
  },
  {
    title: "12. Client and organisation data",
    body: [
      "ForgEx provides technology solutions to businesses, schools, healthcare providers, institutions, and other organisations.",
      "Where a client determines why and how personal data is processed and ForgEx processes that information on the client's behalf, the client may act as the data controller and ForgEx may act as the data processor.",
      "In those circumstances, the client's privacy notice, instructions, contract, data processing agreement, and other applicable requirements may govern the processing of the relevant information.",
      "ForgEx will not intentionally use client-controlled personal data for unrelated purposes unless authorised by the client, required by law, or otherwise permitted by an applicable legal basis.",
    ],
  },
  {
    title: "13. International transfers",
    body: [
      "ForgEx may use service providers and infrastructure located in Ghana or other countries. As a result, personal data may be transferred to, stored in, or processed in jurisdictions outside Ghana.",
      "Where personal data is transferred across borders, we seek to ensure that the transfer is carried out lawfully and that appropriate safeguards are applied in accordance with applicable data protection requirements.",
      "The countries and service providers involved may vary depending on the product, infrastructure, technology, and third-party services used.",
      "We maintain appropriate records of relevant processing activities and third-party service arrangements as part of our data protection and vendor management practices.",
    ],
  },
  {
    title: "14. Data security",
    body: [
      "ForgEx applies reasonable technical and organisational measures designed to protect personal data against unauthorised access, disclosure, alteration, loss, destruction, misuse, or other unlawful processing.",
      "Security measures may include access controls, authentication, least-privilege access, secure development practices, encryption or secure transmission where appropriate, logging and monitoring, backups, vulnerability management, system hardening, incident response procedures, and staff awareness measures.",
      "Access to personal data is restricted to authorised personnel, contractors, and service providers who have a legitimate need to access the information.",
      "Personnel who handle personal data are expected to maintain confidentiality and follow applicable information security and data protection procedures.",
      "We regularly review security controls and may update them as our technology, services, risks, and legal obligations change.",
      "No system, network, application, or method of transmitting information over the internet can be guaranteed to be completely secure. We therefore continuously work to reduce privacy and security risks rather than claiming absolute security.",
    ],
  },
  {
    title: "15. Data protection by design and default",
    body: [
      "ForgEx seeks to consider privacy and data protection during the design, development, deployment, and operation of our products and services.",
      "Where appropriate, privacy and security requirements are considered during product planning, architecture, development, testing, deployment, monitoring, and maintenance.",
      "We seek to minimise the amount of personal data collected, restrict access to information based on legitimate need, and avoid exposing personal information through unnecessary product functionality.",
      "Where a project involves significant privacy risks, sensitive personal data, new technologies, profiling, automated decision-making, large-scale processing, or other high-risk activities, ForgEx may conduct or support a Data Protection Impact Assessment before or during implementation where appropriate.",
    ],
  },
  {
    title: "16. Artificial intelligence and automated technologies",
    body: [
      "Some ForgEx products and client solutions may use artificial intelligence, machine learning, automation, analytics, or other computational technologies.",
      "Where personal data is used in connection with AI or automated systems, we seek to assess the purpose, necessity, risks, security, accuracy, transparency, and appropriate safeguards associated with the processing.",
      "We will not intentionally use personal data for unrelated AI training, profiling, or automated decision-making purposes without an appropriate lawful basis and appropriate safeguards.",
      "Where applicable law provides individuals with rights relating to automated decision-making or profiling, ForgEx will take appropriate steps to support those rights.",
      "High-risk AI or automated processing may require additional assessment, controls, human oversight, contractual safeguards, or a Data Protection Impact Assessment.",
    ],
  },
  {
    title: "17. Internet of Things and connected devices",
    body: [
      "Some ForgEx solutions may include connected devices, sensors, embedded systems, cameras, gateways, or other Internet of Things technologies.",
      "Depending on the system, connected devices may collect technical, operational, environmental, location, usage, or other information that may constitute personal data.",
      "Where connected systems process personal data, ForgEx seeks to apply appropriate access controls, secure communications, device authentication, software updates, logging, monitoring, and other security measures appropriate to the risks involved.",
      "Specific IoT deployments may have additional privacy notices, security requirements, contractual arrangements, or technical safeguards based on the environment and purpose of the system.",
    ],
  },
  {
    title: "18. Data retention and deletion",
    body: [
      "We retain personal data only for as long as necessary or reasonably required for the purpose for which it was collected, to provide services, maintain legitimate business records, comply with legal or regulatory requirements, resolve disputes, enforce agreements, prevent fraud, or protect our systems.",
      "Different categories of personal data may have different retention periods based on their purpose, sensitivity, legal requirements, contractual obligations, and operational needs.",
      "When personal data is no longer required, we may securely delete, destroy, anonymise, or de-identify it in accordance with applicable retention and disposal procedures.",
      "Data contained in backups may remain for a limited period after deletion from active systems where necessary for disaster recovery, security, or business continuity purposes.",
      "Where ForgEx acts as a processor, deletion or return of client-controlled data will generally be handled according to the applicable client agreement and lawful instructions.",
    ],
  },
  {
    title: "19. Your rights",
    body: [
      "Subject to applicable law and any lawful limitations, individuals may have rights regarding personal data held or processed by ForgEx.",
      "These rights may include requesting access to personal data held about you and information about how that data is being processed.",
      "You may request correction or rectification of personal data that is inaccurate, incomplete, or outdated.",
      "You may request deletion or destruction of personal data where applicable and where there is no lawful reason requiring continued retention or processing.",
      "You may object to certain forms of processing or request that processing be restricted where applicable.",
      "You may withdraw consent where processing is based on consent and where withdrawal is legally available.",
      "You may request information about the purposes for which your personal data is processed and, where applicable, information about recipients or categories of recipients.",
      "You may object to direct marketing communications and may unsubscribe from promotional communications at any time.",
      "Where applicable law provides additional rights, ForgEx will consider and respond to valid requests in accordance with those requirements.",
      "We may need to verify your identity before processing certain requests to protect your information from unauthorised disclosure.",
    ],
  },
  {
    title: "20. Complaints and regulatory rights",
    body: [
      "If you believe that ForgEx has handled your personal data in a way that is inconsistent with applicable data protection requirements, we encourage you to contact us first so that we can investigate and address the concern.",
      "You may also have the right to lodge a complaint with the Data Protection Commission of Ghana or another competent authority where applicable.",
      "Nothing in this Privacy Policy is intended to remove or restrict any rights or remedies available to you under applicable Ghanaian law.",
    ],
  },
  {
    title: "21. Data breach and security incidents",
    body: [
      "ForgEx maintains procedures for identifying, assessing, containing, investigating, documenting, and responding to suspected or confirmed personal data breaches and other information security incidents.",
      "Where a personal data breach occurs, we will take reasonable steps to contain and investigate the incident, assess the risks to affected individuals, preserve relevant evidence, and implement corrective measures.",
      "Where notification to the Data Protection Commission, affected individuals, clients, service providers, or other parties is required by applicable law or contractual obligations, we will make the appropriate notification within the applicable requirements.",
      "Where ForgEx acts as a processor, we will notify the relevant client or controller in accordance with the applicable agreement and legal requirements.",
      "We encourage users and clients to report suspected security incidents, compromised accounts, unauthorised access, or accidental disclosure of personal data to us as soon as possible.",
    ],
  },
  {
    title: "22. Children's and young people's privacy",
    body: [
      "ForgEx recognises that children and young people may require additional privacy and safeguarding protections.",
      "Our general corporate services are not intended to knowingly collect personal data from children in circumstances where such collection is prohibited by applicable law.",
      "Some ForgEx products may serve students, young adults, or other younger users. Those products may have additional age requirements, consent requirements, safeguarding procedures, and product-specific privacy notices.",
      "Where a service is intended for children or young people, we seek to apply safeguards appropriate to the age, nature of the service, type of information collected, and applicable legal requirements.",
      "If you believe that a child has provided personal data to us inappropriately, please contact us so that we can investigate and take appropriate action.",
    ],
  },
  {
    title: "23. Marketing communications",
    body: [
      "We may send information about ForgEx products, services, events, announcements, and other relevant communications where permitted by law.",
      "Where consent is required for direct marketing, we will seek consent through an appropriate mechanism.",
      "You may opt out of promotional communications at any time by following the unsubscribe instructions included in the communication or contacting us.",
      "Opting out of marketing does not prevent us from sending essential service-related communications, including security alerts, transactional messages, account notifications, legal notices, and important service updates.",
    ],
  },
  {
    title: "24. Third-party websites and services",
    body: [
      "Our websites, applications, products, and communications may contain links to websites, applications, payment providers, social platforms, or other services operated by third parties.",
      "Third-party services operate under their own privacy policies and terms. ForgEx is not responsible for the privacy practices, security, or content of third-party services that we do not control.",
      "We encourage users to review the privacy policies of third-party services before providing personal information to them.",
    ],
  },
  {
    title: "25. Business information and client relationships",
    body: [
      "When you interact with ForgEx on behalf of a business, school, healthcare provider, institution, or other organisation, we may process professional information such as your name, job title, organisation, work email address, telephone number, project requirements, contracts, invoices, correspondence, and other information necessary to manage the relationship.",
      "Business contact information may be used to communicate with you, manage projects, provide services, process transactions, provide support, maintain records, and comply with legal and contractual obligations.",
      "Where a client provides personal data to ForgEx for a project, the applicable client agreement and data processing terms may define the respective responsibilities of the parties.",
    ],
  },
  {
    title: "26. Data Protection Supervisor and accountability",
    body: [
      "ForgEx recognises the importance of internal responsibility and accountability for data protection.",
      "Where required, ForgEx will appoint and maintain an appropriately qualified Data Protection Supervisor and provide the role with appropriate authority and access to support data protection compliance.",
      "Our privacy and data protection responsibilities may include maintaining internal policies and procedures, supporting data protection impact assessments, coordinating privacy requests, reviewing data processing activities, supporting incident response, maintaining appropriate records, and promoting data protection awareness.",
      "Information about our appointed Data Protection Supervisor or privacy contact will be made available through our contact details where appropriate.",
    ],
  },
  {
    title: "27. Data Protection Commission registration",
    body: [
      "ForgEx recognises that applicable data controllers are required to comply with the registration and other obligations established under Ghana's Data Protection Act, 2012 (Act 843).",
      "Where ForgEx is required to register with the Data Protection Commission, we will maintain the applicable registration and renewal requirements and provide relevant registration information where required.",
      "Our registration status and details should be verified against the current records of the Data Protection Commission rather than inferred solely from this Privacy Policy.",
    ],
  },
  {
    title: "28. Changes to this Privacy Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our services, technology, business practices, legal requirements, regulatory guidance, or data protection practices.",
      'When we make changes, we will update the "Last updated" date displayed at the beginning of this policy.',
      "Where a material change requires additional notice or consent under applicable law, we will take appropriate steps to communicate the change.",
      "We encourage you to review this Privacy Policy periodically so that you remain informed about how ForgEx handles personal data.",
    ],
  },
]

export default function Privacy() {
  const [openSections, setOpenSections] = useState<number[]>([])

  const toggleSection = (index: number) => {
    setOpenSections((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    )
  }

  return (
    <div>
      <section className="border-b border-border px-6 py-20 lg:px-16">
        <p className="mb-4 text-sm font-medium text-muted-foreground">
          Legal & Privacy
        </p>

        <h1 className="max-w-3xl text-4xl font-bold text-foreground lg:text-5xl">
          Privacy Policy
        </h1>

        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: July 09, 2026
        </p>

        <div className="mt-6 max-w-3xl space-y-4 text-muted-foreground">
          <p className="leading-7">
            ForgEx Limited Company respects your privacy and is committed to
            protecting the personal data entrusted to us. This Privacy Policy
            explains how we collect, use, disclose, retain, and protect
            personal data across our websites, products, platforms, and
            services.
          </p>

          <p className="text-sm leading-7">
            This policy is designed with reference to Ghana's Data Protection
            Act, 2012 (Act 843), together with applicable data protection
            requirements and regulatory guidance. Product-specific privacy
            notices may apply where a service involves additional or more
            sensitive processing.
          </p>
        </div>

        <div className="mt-8 max-w-3xl rounded-xl border border-border bg-card p-5">
          <p className="text-sm font-semibold text-foreground">
            Additional Notes
          </p>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            This Privacy Policy describes ForgEx's privacy practices at a
            general corporate level. Individual products, client projects, and
            services may have additional privacy notices, consent requirements,
            data processing agreements, or other terms depending on the nature
            of the information processed.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-16">
        <div className="mx-auto max-w-5xl py-10">
          

          <div className="overflow-hidden rounded-2xl border border-border">
            {sections.map((section, index) => {
              const isOpen = openSections.includes(index)

              return (
                <div
                  key={section.title}
                  className="border-b border-border last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => toggleSection(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition-colors hover:bg-accent/50 lg:px-6"
                  >
                    <span className="text-sm font-semibold text-foreground lg:text-base">
                      {section.title}
                    </span>

                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-lg text-muted-foreground transition-transform duration-200 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-border px-5 pb-6 pt-5 lg:px-6">
                        <ul className="space-y-3">
                          {section.body.map((line) => (
                            <li
                              key={line}
                              className="flex items-start gap-3 text-sm leading-7 text-muted-foreground"
                            >
                              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                              <span>{line}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="border-t border-border py-10">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-xl font-bold text-foreground">
              Contact us
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
              If you have questions about this Privacy Policy, want to
              exercise a privacy right, have a concern about our handling of
              personal data, or require further information about our privacy
              practices, please contact ForgEx using the details below.
            </p>

            <div className="mt-6 max-w-xl rounded-xl border border-border bg-card p-6 text-sm">
              <p className="font-semibold text-foreground">
                Apiiga Simon Awinbe
              </p>

              <p className="mt-1 text-muted-foreground">
                CEO & Privacy Contact
              </p>

              <p className="mt-3 text-muted-foreground">
                ForgEx Company Limited
              </p>

              <a
                href="mailto:apiigasimon0803@gmail.com"
                className="mt-1 inline-block text-primary hover:underline"
              >
                apiigasimon0803@gmail.com
              </a>
            </div>

            <p className="mt-6 max-w-3xl text-xs leading-6 text-muted-foreground">
              Privacy requests may require reasonable identity verification
              before we disclose, correct, delete, or otherwise act on
              personal data. We will handle valid requests in accordance with
              applicable Ghanaian data protection requirements.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}