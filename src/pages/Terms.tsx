import { useEffect, useMemo, useRef, useState } from "react"

type TermsSection = {
  title: string
  body: string[]
}

const sections: TermsSection[] = [
  {
    title: "1. Introduction",
    body: [
      "Welcome to ForgEx Company Limited (\"ForgEx\", \"we\", \"us\", or \"our\"). These Terms of Service govern your access to and use of the ForgEx website, applications, platforms, products, software, technology services, and related services, including Docta and UniGuide.",
      "These Terms establish the legal agreement between you and ForgEx regarding your use of the applicable services. By accessing, registering for, purchasing, or using a ForgEx service, you acknowledge that you have read and understood these Terms and agree to be bound by them.",
      "If you do not agree with these Terms, you must not access or use the applicable service.",
      "Certain ForgEx products, client projects, subscriptions, purchases, or services may have additional terms, agreements, order forms, product-specific rules, or policies. Those additional terms form part of the agreement where they expressly apply.",
    ],
  },
  {
    title: "2. Company Information",
    body: [
      "ForgEx Company Limited is a technology company based in Ghana.",
      "ForgEx develops and provides software, digital platforms, artificial-intelligence solutions, IoT systems, connected technologies, hardware-related solutions, automation systems, technology consulting, and custom software development services.",
      "The company is led by Apiiga Simon Awinbe (Founder, CEO & First Director), Samuel Yaw Apiiga (Second Director), and Ayamga Kenneth Abagna (Secretary), as applicable to the company's current corporate structure.",
      "For general questions regarding these Terms, you may contact ForgEx through the contact details published on our website.",
    ],
  },
  {
    title: "3. Acceptance of Terms",
    body: [
      "By accessing or using a ForgEx service, creating an account, submitting information, placing an order, purchasing a service, or otherwise interacting with a service governed by these Terms, you agree to these Terms.",
      "If you are using a ForgEx service on behalf of a company, institution, school, organisation, or other legal entity, you represent that you have authority to bind that entity to these Terms.",
      "If you do not have the authority to bind an organisation, you must not accept these Terms on its behalf.",
      "If a separate written agreement exists between ForgEx and a client and that agreement conflicts with these Terms, the specific written agreement will generally govern the relevant client relationship to the extent of the conflict.",
    ],
  },
  {
    title: "4. Eligibility and Age Requirements",
    body: [
      "You must be legally capable of entering into a binding agreement under the laws applicable to you in order to enter into these Terms.",
      "Some ForgEx services may be intended for adults, while others may be used by students or younger people. A product-specific service may therefore establish additional age, consent, parental, guardian, institutional, or eligibility requirements.",
      "Where a service permits use by a person who is below the applicable age of majority, use must comply with the applicable product rules and any consent or authorisation requirements imposed by law.",
      "You must not use a ForgEx service if you are legally prohibited from doing so or if applicable law prevents us from providing the service to you.",
    ],
  },
  {
    title: "5. Our Services",
    body: [
      "ForgEx provides technology services including custom software development, web and application development, AI and automation solutions, IoT and smart technology, hardware and embedded systems, digital transformation services, product design, and related technology services.",
      "ForgEx also develops and operates its own products, including Docta and UniGuide.",
      "The exact functionality, availability, features, pricing, technical requirements, and limitations of a service may vary by product or service.",
      "ForgEx may introduce new features, modify existing features, improve functionality, or discontinue features where reasonably necessary.",
      "Where practical and appropriate, we may provide notice of material changes or discontinuation, particularly where a change materially affects a paid service.",
    ],
  },
  {
    title: "6. Docta",
    body: [
      "Docta is a technology platform intended to provide digital support and technology-enabled experiences relating to wellbeing and personal support.",
      "Docta may allow users to submit information concerning personal circumstances, stress, anxiety, grief, relationships, burnout, wellbeing, or other sensitive subjects.",
      "Docta is a technology service and should not be treated as an emergency service, medical diagnosis service, psychiatric treatment service, or substitute for qualified professional care unless a specific service expressly states otherwise.",
      "If you are experiencing an emergency, immediate danger, or a serious medical or mental-health crisis, you should contact the appropriate emergency service, healthcare professional, crisis service, trusted person, or other appropriate source of immediate assistance.",
      "Information generated by AI or automated systems may contain errors or limitations and should not be relied upon as a substitute for professional judgement where professional care is required.",
      "Where Docta connects users with independent counsellors, therapists, professionals, or third-party services, those providers may have additional terms and professional obligations that apply to their relationship with you.",
    ],
  },
  {
    title: "7. UniGuide",
    body: [
      "UniGuide provides technology-enabled services relating to university admissions, WASSCE results, programme selection, application guidance, and related educational services.",
      "UniGuide may allow users to submit examination results, documents, programme preferences, application information, contact information, and other information required to provide the relevant service.",
      "UniGuide may compare submitted information against programme requirements or other information made available through the applicable service.",
      "Information and recommendations provided by UniGuide are intended to assist users and do not guarantee admission, acceptance, placement, scholarship awards, examination outcomes, or decisions by a university, institution, examination body, or other third party.",
      "University admission requirements, programme availability, deadlines, fees, cut-off points, and institutional decisions may change. Users should verify important information with the relevant institution before making a final decision.",
      "Where UniGuide interacts with an external institution, application portal, payment provider, or other third party, the third party's terms and policies may also apply.",
    ],
  },
  {
    title: "8. Accounts and Registration",
    body: [
      "Certain ForgEx services may require you to create an account.",
      "You agree to provide information that is accurate, current, complete, and not misleading when creating or maintaining an account.",
      "You are responsible for updating information when necessary to keep your account reasonably accurate.",
      "You must not create an account using another person's identity, impersonate another person, or create an account for an organisation without appropriate authority.",
      "ForgEx may refuse, restrict, suspend, or terminate an account where we reasonably believe that the account information is fraudulent, misleading, unlawful, or inconsistent with these Terms.",
    ],
  },
  {
    title: "9. Account Security",
    body: [
      "You are responsible for maintaining the confidentiality of passwords, authentication credentials, verification codes, and other security information associated with your account.",
      "You are responsible for activity occurring through your account unless the activity results from circumstances for which you are not reasonably responsible.",
      "You must notify ForgEx promptly if you believe that your account has been compromised, accessed without authorisation, or otherwise exposed to a security risk.",
      "You must not share authentication credentials where doing so could compromise your account or another person's information.",
      "ForgEx may require additional authentication or security measures where reasonably necessary to protect accounts and services.",
    ],
  },
  {
    title: "10. User Responsibilities",
    body: [
      "You are responsible for ensuring that your use of ForgEx services complies with applicable law, these Terms, and any product-specific rules.",
      "You are responsible for the information, documents, files, instructions, or other material that you submit to ForgEx.",
      "You must ensure that you have the necessary rights, authority, permissions, or lawful basis to submit information belonging to another person or organisation.",
      "You must not use ForgEx services to violate another person's privacy, security, intellectual property, contractual rights, or other legal rights.",
      "You must not knowingly provide information that is fraudulent, deceptive, malicious, defamatory, or unlawfully obtained.",
    ],
  },
  {
    title: "11. Acceptable Use",
    body: [
      "You may use ForgEx services only for lawful and legitimate purposes.",
      "You must not use our services to commit, facilitate, encourage, or conceal unlawful activity.",
      "You must not attempt to gain unauthorised access to ForgEx systems, accounts, infrastructure, networks, databases, APIs, or security controls.",
      "You must not introduce malware, ransomware, malicious code, harmful scripts, or other technologies intended to disrupt or compromise a service.",
      "You must not interfere with the availability, performance, integrity, or security of our services.",
      "You must not use automated scraping, crawling, bots, scripts, or other automated mechanisms to access a service where such activity is not expressly authorised.",
      "You must not attempt to bypass authentication, rate limits, access controls, usage restrictions, security measures, or other technical protections.",
      "You must not use a ForgEx service to impersonate another person or organisation, conduct fraud, distribute unlawful material, or facilitate abuse of another person.",
    ],
  },
  {
    title: "12. Prohibited Technical Activities",
    body: [
      "You must not reverse engineer, decompile, disassemble, or attempt to derive the source code of ForgEx software except where such restriction is prohibited by applicable law.",
      "You must not probe, scan, or test ForgEx systems for vulnerabilities without prior written authorisation.",
      "You must not conduct penetration testing, load testing, denial-of-service testing, or security research against ForgEx infrastructure without written permission.",
      "You must not bypass technical limitations or use a service in a manner that creates unreasonable load on ForgEx infrastructure.",
      "Security researchers who identify a vulnerability should report it through an appropriate ForgEx security contact rather than exploiting the vulnerability or accessing information that does not belong to them.",
    ],
  },
  {
    title: "13. User Content",
    body: [
      "Some ForgEx services may allow you to upload, submit, transmit, store, or otherwise provide content, documents, information, or other material.",
      "You retain ownership of content that you lawfully own and submit to ForgEx, subject to the rights necessary for ForgEx to provide the applicable service.",
      "You grant ForgEx the limited rights reasonably necessary to host, store, process, transmit, reproduce, display, or otherwise use submitted content solely to provide, secure, maintain, support, or improve the applicable service, subject to applicable law and the service's privacy terms.",
      "You are responsible for ensuring that submitted content does not infringe another person's intellectual property, privacy, confidentiality, or other rights.",
      "ForgEx may remove or restrict content where reasonably necessary to comply with law, protect users, protect our systems, or enforce these Terms.",
    ],
  },
  {
    title: "14. Intellectual Property",
    body: [
      "Unless otherwise stated in a written agreement, ForgEx and its licensors retain ownership of ForgEx websites, software, applications, platforms, source code, designs, trademarks, logos, documentation, graphics, interfaces, and other proprietary materials.",
      "These Terms do not transfer ownership of ForgEx intellectual property to you.",
      "Subject to these Terms, ForgEx grants you a limited, non-exclusive, non-transferable, revocable licence to access and use the applicable service for its intended purpose.",
      "You may not reproduce, distribute, sell, sublicense, lease, modify, publicly display, publicly perform, or create derivative works from ForgEx proprietary materials except where expressly authorised or permitted by law.",
      "All rights not expressly granted to you are reserved by ForgEx or its licensors.",
    ],
  },
  {
    title: "15. Trademarks and Branding",
    body: [
      "ForgEx, its name, logos, product names, product marks, designs, and other branding may constitute trademarks or proprietary identifiers of ForgEx or its licensors.",
      "You may not use ForgEx branding in a manner that suggests sponsorship, endorsement, partnership, or affiliation without prior written permission.",
      "Third-party names, trademarks, logos, or product references remain the property of their respective owners.",
    ],
  },
  {
    title: "16. Client Projects and Custom Development",
    body: [
      "Custom software development and technology projects may be governed by a separate proposal, quotation, statement of work, master services agreement, development agreement, or other written contract.",
      "That agreement may define project scope, deliverables, milestones, acceptance criteria, fees, intellectual-property ownership, maintenance, support, confidentiality, warranties, and other project-specific terms.",
      "Unless a separate written agreement expressly states otherwise, estimates, timelines, feature descriptions, and proposals may be subject to change as project requirements become clearer.",
      "Changes requested after project scope has been agreed may result in additional fees, revised timelines, or other changes to the applicable project agreement.",
      "ForgEx is not responsible for delays caused by client dependencies, delayed approvals, unavailable information, third-party systems, force majeure events, or other circumstances outside our reasonable control.",
    ],
  },
  {
    title: "17. Client Data and Processor Relationships",
    body: [
      "Where ForgEx processes personal data on behalf of a business, institution, or other organisation, the client may remain the data controller while ForgEx acts as a data processor.",
      "The parties may enter into a separate written data-processing agreement or include data-processing provisions within the applicable services agreement.",
      "Where required, the agreement may address processing instructions, confidentiality, security, sub-processors, assistance with data-subject requests, incident handling, retention, deletion, and other applicable obligations.",
      "Clients are responsible for ensuring that they have an appropriate lawful basis and authority to provide personal data to ForgEx for the contracted service.",
      "ForgEx will seek to process client personal data within the scope authorised by the applicable agreement and instructions.",
    ],
  },
  {
    title: "18. Privacy and Data Protection",
    body: [
      "Our Privacy Policy explains how ForgEx processes personal data in connection with our websites, products, and services.",
      "By using a service governed by our Privacy Policy, you acknowledge that personal data may be processed as described in that policy.",
      "Where ForgEx acts as a data processor for a client, the client's instructions and applicable data-processing agreement may govern the relevant processing.",
      "ForgEx seeks to handle personal data in accordance with applicable Ghanaian data-protection requirements, including the Data Protection Act, 2012 (Act 843), where applicable.",
      "Our Privacy Policy does not replace product-specific notices, client agreements, data-processing agreements, consent notices, or other legally required documentation.",
    ],
  },
  {
    title: "19. Third-Party Services",
    body: [
      "ForgEx may integrate with or rely upon third-party services, including cloud infrastructure, payment processors, authentication providers, communications services, analytics providers, AI services, mapping services, hosting providers, and other technology providers.",
      "Third-party services may be governed by their own terms and privacy policies.",
      "ForgEx is not responsible for the independent actions, availability, content, security, or privacy practices of third-party services that we do not control.",
      "Where a third-party service is required for a particular feature, interruption or discontinuation of that third-party service may affect the availability of the ForgEx feature that depends upon it.",
      "You agree to comply with applicable third-party terms when using an integrated third-party service.",
    ],
  },
  {
    title: "20. Payments and Payment Providers",
    body: [
      "Certain ForgEx services may require payment before access to a service, feature, subscription, product, or deliverable is provided.",
      "Prices, applicable taxes, fees, billing periods, and payment requirements will be presented through the applicable service, quotation, invoice, order form, or agreement.",
      "ForgEx may use third-party payment providers to process transactions. Where a payment provider processes your payment information directly, its own terms and privacy policy may also apply.",
      "ForgEx does not represent that it is itself a bank, electronic-money issuer, or payment service provider merely because it accepts payment through an external payment provider.",
      "You authorise the applicable payment provider to process your payment according to the payment information and transaction you submit.",
      "You must not use a payment method that you are not authorised to use.",
    ],
  },
  {
    title: "21. Pricing and Taxes",
    body: [
      "Prices may be displayed in Ghana cedis or another currency depending on the applicable service, customer, or transaction.",
      "Unless expressly stated otherwise, prices do not necessarily include taxes, duties, levies, payment-provider charges, or other government-imposed charges that may apply.",
      "ForgEx may correct pricing or description errors where a product or service has been incorrectly listed.",
      "For custom projects, the price and payment schedule may be determined by the applicable quotation, proposal, invoice, or written agreement.",
      "Changes to pricing for existing subscriptions or recurring services will be communicated where required or reasonably appropriate.",
    ],
  },
  {
    title: "22. Refunds and Cancellations",
    body: [
      "Refund eligibility depends on the nature of the service, the applicable purchase terms, the reason for the refund request, and any rights provided by applicable law.",
      "Except where required by law or expressly stated otherwise, payments for services that have already been substantially performed, delivered, consumed, or fulfilled may be non-refundable.",
      "For subscriptions or recurring services, cancellation may prevent future renewals but may not automatically result in a refund for a period that has already begun or been used.",
      "Custom development work, consulting, design, implementation, and other professional services may be subject to separate cancellation and refund terms stated in the applicable agreement.",
      "Where a service cannot be provided due to a material failure attributable to ForgEx, we may provide an appropriate remedy, which may include correction, replacement, service credit, partial refund, or another remedy depending on the circumstances.",
      "Nothing in this section is intended to exclude a refund, remedy, or consumer right that cannot lawfully be excluded.",
    ],
  },
  {
    title: "23. Subscriptions and Recurring Services",
    body: [
      "Where a ForgEx service is provided on a subscription or recurring basis, the applicable billing period, renewal terms, price, and cancellation mechanism will be presented at the time of purchase or in the applicable agreement.",
      "Unless otherwise stated, a subscription may renew automatically where the payment provider and service configuration support recurring billing.",
      "You are responsible for maintaining a valid payment method where recurring payments are required.",
      "ForgEx may suspend access to a paid service where payment remains overdue, subject to applicable law and any contractual requirements.",
      "Cancellation of a subscription does not automatically cancel outstanding obligations incurred before cancellation.",
    ],
  },
  {
    title: "24. Service Availability",
    body: [
      "ForgEx aims to provide reliable services but does not guarantee that every service will always be available, uninterrupted, secure, or error-free.",
      "Services may occasionally be unavailable because of maintenance, updates, infrastructure failures, security incidents, network problems, third-party outages, force majeure events, or other circumstances.",
      "Where reasonably practical, ForgEx may conduct maintenance during periods intended to minimise disruption.",
      "Certain features may be experimental, limited, in development, or temporarily unavailable.",
      "Service availability may vary by product, geographic location, device, operating system, subscription level, technical configuration, or other factors.",
    ],
  },
  {
    title: "25. Changes to Services",
    body: [
      "Technology services evolve continuously, and ForgEx may modify, add, remove, replace, or discontinue features.",
      "We may make changes where necessary for security, legal compliance, technical improvements, performance, compatibility, product development, or business reasons.",
      "Where a change materially reduces the functionality of a paid service, we will seek to provide reasonable notice where practical.",
      "A product may be discontinued where continued operation is no longer commercially, technically, legally, or operationally viable.",
      "Where appropriate, affected users may receive information about alternative arrangements, migration options, or termination.",
    ],
  },
  {
    title: "26. Beta and Experimental Features",
    body: [
      "ForgEx may make beta, preview, experimental, or early-access features available from time to time.",
      "Such features may contain defects, change substantially, or be discontinued without the same stability guarantees as established services.",
      "You use experimental features at your own discretion and should not rely on them for critical operations unless ForgEx expressly represents that they are suitable for that purpose.",
      "ForgEx may collect feedback and technical information relating to experimental features to improve them, subject to applicable privacy requirements.",
      "Separate beta terms may apply to specific experimental services.",
    ],
  },
  {
    title: "27. AI-Generated Information",
    body: [
      "Some ForgEx services may use artificial intelligence or machine-learning technologies to generate content, recommendations, classifications, summaries, suggestions, or other outputs.",
      "AI-generated outputs may be incomplete, inaccurate, biased, outdated, or unsuitable for a particular purpose.",
      "You should independently review important AI-generated information before relying upon it for legal, medical, financial, educational, employment, safety, or other high-impact decisions.",
      "ForgEx does not guarantee that AI-generated outputs will always be accurate, unique, complete, or appropriate for your circumstances.",
      "Where a product provides AI-assisted recommendations, the final decision remains with the user unless a separate agreement or service description expressly provides otherwise.",
    ],
  },
  {
    title: "28. Educational and Admissions Information",
    body: [
      "Information relating to admissions, programmes, institutions, examination requirements, cut-off points, application deadlines, fees, and other educational matters may change.",
      "Where UniGuide provides information sourced from institutions or other external sources, ForgEx does not guarantee that the information will always remain current or complete.",
      "Users should verify important admissions and academic information with the relevant institution or official source before making consequential decisions.",
      "ForgEx is not responsible for admission decisions, examination outcomes, institutional policy changes, programme availability, or other decisions made by third parties.",
    ],
  },
  {
    title: "29. Professional and Wellbeing Services",
    body: [
      "Where a ForgEx product provides information or technology related to wellbeing, counselling, mental health, or personal support, that service should be understood according to its specific description and limitations.",
      "Technology-based support does not automatically establish a doctor-patient, therapist-client, counsellor-client, or other professional relationship.",
      "Where an independent professional provides services through or alongside a ForgEx platform, the professional may be independently responsible for the professional service provided.",
      "ForgEx is not responsible for professional advice or treatment decisions made independently by a third-party professional except to the extent required by applicable law.",
      "Users should seek qualified professional assistance when their circumstances require professional care.",
    ],
  },
  {
    title: "30. Intellectual Property in Client Deliverables",
    body: [
      "Ownership of custom software, designs, documentation, source code, inventions, configurations, and other project deliverables will depend on the applicable client agreement.",
      "Unless a written agreement states otherwise, ForgEx retains ownership of its pre-existing intellectual property, reusable libraries, frameworks, development tools, know-how, templates, methodologies, utilities, and general technical knowledge.",
      "A client may receive a licence or ownership interest in specific deliverables according to the applicable project agreement.",
      "Client-specific materials supplied to ForgEx remain the property of the client or its licensors, subject to the rights necessary for ForgEx to perform the contracted work.",
    ],
  },
  {
    title: "31. Confidentiality",
    body: [
      "Each party may receive confidential or proprietary information from the other in connection with a business relationship or project.",
      "Where the parties have entered into a confidentiality or non-disclosure agreement, that agreement will govern confidential information according to its terms.",
      "Where no separate confidentiality agreement applies, each party should use reasonable care to protect non-public information received from the other and should use it only for the relevant business purpose.",
      "Information that is already publicly available, independently developed, lawfully obtained from another source, or required to be disclosed by law may not be treated as confidential to the same extent.",
      "Confidentiality obligations may survive termination where appropriate.",
    ],
  },
  {
    title: "32. User Feedback",
    body: [
      "You may provide suggestions, feedback, ideas, bug reports, feature requests, or other comments about ForgEx services.",
      "You grant ForgEx permission to use feedback for purposes including improving, developing, testing, and marketing our products, without compensation, provided that we do not disclose your confidential information contrary to an applicable agreement.",
      "Feedback does not transfer ownership of your pre-existing intellectual property to ForgEx.",
      "ForgEx is not required to implement or respond to every suggestion.",
    ],
  },
  {
    title: "33. Third-Party Content and Links",
    body: [
      "ForgEx services may contain links to third-party websites, applications, resources, advertisements, or content.",
      "Such links are provided for convenience and do not necessarily imply endorsement, sponsorship, or affiliation.",
      "ForgEx does not control third-party content and is not responsible for its accuracy, availability, security, legality, or privacy practices.",
      "Your use of a third-party service is governed by that provider's applicable terms and policies.",
    ],
  },
  {
    title: "34. Disclaimers",
    body: [
      "To the fullest extent permitted by applicable law, ForgEx services are provided on an \"as is\" and \"as available\" basis.",
      "Except where expressly provided in a written agreement or where a warranty cannot lawfully be excluded, ForgEx does not make warranties that a service will be uninterrupted, completely secure, error-free, continuously available, or suitable for every particular purpose.",
      "ForgEx does not guarantee that information provided through its services will always be complete, accurate, current, or free from errors.",
      "Nothing in these Terms excludes or limits a consumer protection right, statutory warranty, or other legal protection that cannot lawfully be excluded or limited.",
    ],
  },
  {
    title: "35. Limitation of Liability",
    body: [
      "To the fullest extent permitted by applicable law, ForgEx will not be liable for indirect, incidental, special, exemplary, punitive, or consequential losses arising from or relating to your use of a service.",
      "This may include loss of profits, revenue, business opportunity, goodwill, anticipated savings, data, or other indirect economic loss, except where such limitation is prohibited by applicable law.",
      "To the fullest extent permitted by law, ForgEx's aggregate liability arising from a particular paid service will not exceed the amount you actually paid to ForgEx for that service during the twelve (12) months immediately preceding the event giving rise to the claim.",
      "This limitation does not apply to liability that cannot lawfully be limited or excluded.",
      "Nothing in these Terms is intended to exclude liability for fraud, deliberate misconduct, or other liability that applicable law requires to remain with ForgEx.",
    ],
  },
  {
    title: "36. Indemnity",
    body: [
      "To the extent permitted by applicable law, you agree to indemnify and hold ForgEx and its directors, officers, employees, contractors, and agents harmless from third-party claims, losses, liabilities, costs, or reasonable expenses arising from your unlawful use of the services, your violation of these Terms, or your infringement of another person's rights.",
      "This provision does not require you to indemnify ForgEx for losses caused by ForgEx's own unlawful conduct or liability that cannot lawfully be transferred to you.",
      "ForgEx may control the defence or settlement of a claim where you are required to provide indemnification, subject to applicable law.",
    ],
  },
  {
    title: "37. Suspension of Services",
    body: [
      "ForgEx may temporarily suspend access to a service where reasonably necessary to protect users, systems, infrastructure, confidential information, or the integrity of the service.",
      "Suspension may occur in response to suspected fraud, security incidents, abuse, unlawful activity, non-payment, technical threats, or material violations of these Terms.",
      "Where practical, ForgEx may notify the affected user and provide information about the reason for suspension.",
      "Where the issue can reasonably be corrected, ForgEx may restore access after the relevant issue has been addressed.",
      "Suspension for security or legal reasons may occur without advance notice where immediate action is reasonably necessary.",
    ],
  },
  {
    title: "38. Termination",
    body: [
      "You may stop using a ForgEx service at any time, subject to any outstanding contractual or payment obligations.",
      "ForgEx may terminate or discontinue a service where reasonably necessary for legal, security, operational, commercial, or other legitimate reasons.",
      "ForgEx may terminate or suspend an account where you materially violate these Terms or applicable law.",
      "Where a paid service is terminated by ForgEx for reasons unrelated to your breach, we may provide an appropriate remedy depending on the service and circumstances.",
      "Termination does not automatically extinguish obligations that by their nature should survive termination.",
    ],
  },
  {
    title: "39. Effect of Termination",
    body: [
      "Upon termination, your right to access and use the terminated service may end immediately or at the end of the applicable paid period, depending on the circumstances.",
      "Certain information may be retained after termination where required by law, necessary for security, dispute resolution, accounting, legal claims, fraud prevention, or another lawful purpose.",
      "Intellectual-property, confidentiality, payment, limitation-of-liability, indemnity, dispute-resolution, and other provisions intended to survive termination will continue to apply.",
      "Where a client agreement establishes specific data-return or deletion requirements, those requirements will apply according to the agreement and applicable law.",
    ],
  },
  {
    title: "40. Force Majeure",
    body: [
      "ForgEx will not be responsible for delay or failure to perform obligations to the extent caused by circumstances beyond our reasonable control.",
      "Such circumstances may include natural disasters, severe network failures, widespread infrastructure outages, war, civil unrest, government action, epidemics, labour disruptions, cyber incidents caused by third parties, failures of major cloud or telecommunications providers, or other extraordinary events.",
      "Where reasonably possible, ForgEx will take commercially reasonable steps to mitigate the effects of a force majeure event and restore affected services.",
    ],
  },
  {
    title: "41. Complaints and Dispute Resolution",
    body: [
      "If you have a complaint about a ForgEx service, we encourage you to contact us first so that we can investigate and attempt to resolve the issue.",
      "Complaints may concern service quality, billing, account access, privacy, security, technical problems, or other matters relating to a ForgEx service.",
      "Where a specific product or service provides a dedicated complaints process, that process may apply.",
      "Nothing in these Terms prevents a consumer from exercising a legal right to complain to an appropriate regulator, seek statutory redress, or pursue another remedy available under applicable law.",
    ],
  },
  {
    title: "42. Governing Law",
    body: [
      "These Terms are governed by and interpreted in accordance with the laws of the Republic of Ghana, except to the extent that mandatory laws applicable to you require otherwise.",
      "Subject to any applicable mandatory consumer rights or alternative dispute-resolution requirements, disputes arising from these Terms or a ForgEx service will be subject to the jurisdiction of the courts of Ghana.",
      "Nothing in this section is intended to prevent a party from seeking urgent interim or protective relief where such relief is available.",
    ],
  },
  {
    title: "43. Notices",
    body: [
      "Where ForgEx is required to provide notice, we may provide it through the email address associated with your account, through the applicable service, by posting it on our website, or through another reasonable communication method.",
      "You are responsible for ensuring that your account contact information remains accurate.",
      "Legal notices to ForgEx should be sent through the official contact details published on our website or through another method expressly specified in an applicable written agreement.",
      "A notice will be considered delivered according to the method and circumstances of delivery, subject to applicable law.",
    ],
  },
  {
    title: "44. Changes to These Terms",
    body: [
      "ForgEx may update these Terms from time to time to reflect changes in our services, technology, business practices, legal requirements, security measures, or other circumstances.",
      "The \"Last updated\" date displayed on this page indicates when the Terms were most recently revised.",
      "Where a change materially affects your rights or obligations, we may provide additional notice where reasonably appropriate.",
      "Continued use of a service after revised Terms become effective may constitute acceptance of the updated Terms to the extent permitted by law.",
      "If you do not agree with revised Terms, you should stop using the affected service and contact us regarding any applicable cancellation or termination rights.",
    ],
  },
  {
    title: "45. Severability",
    body: [
      "If any provision of these Terms is found to be invalid, unlawful, or unenforceable, that provision will be interpreted or modified to the minimum extent necessary to make it enforceable where legally possible.",
      "If modification is not possible, the affected provision will be severed to the extent necessary without invalidating the remaining provisions.",
      "The remaining provisions will continue in effect unless the removal of the affected provision fundamentally changes the agreement.",
    ],
  },
  {
    title: "46. No Waiver",
    body: [
      "If ForgEx does not immediately enforce a provision of these Terms, that does not mean ForgEx has permanently waived the right to enforce that provision.",
      "Any waiver should be understood according to its specific circumstances and does not automatically constitute a waiver of another breach or another provision.",
    ],
  },
  {
    title: "47. Assignment",
    body: [
      "You may not transfer or assign your rights or obligations under these Terms without ForgEx's prior written consent, except where applicable law permits otherwise.",
      "ForgEx may transfer or assign its rights and obligations in connection with a merger, acquisition, restructuring, sale of assets, corporate reorganisation, or transfer of the relevant service, subject to applicable law.",
      "An assignment does not reduce any mandatory rights you have under applicable law.",
    ],
  },
  {
    title: "48. Entire Agreement",
    body: [
      "These Terms, together with any applicable product terms, Privacy Policy, order forms, service agreements, statements of work, and other expressly incorporated documents, constitute the agreement governing your use of the applicable ForgEx service.",
      "Where a specific written agreement between ForgEx and a client governs a particular service, that agreement may supplement or replace provisions of these general Terms for that relationship.",
      "No other statement or representation is intended to modify these Terms unless made through an authorised written agreement or an official update to the applicable service terms.",
    ],
  },
  {
    title: "49. Electronic Communications",
    body: [
      "You agree that ForgEx may communicate with you electronically regarding your account, transactions, service updates, security matters, support requests, legal notices, and other service-related matters.",
      "Electronic communications may include email, in-platform notifications, text messages, or other electronic channels made available by the applicable service.",
      "Where applicable law requires a particular form of notice, ForgEx will seek to use a legally permitted method.",
    ],
  },
  {
    title: "50. No Partnership or Agency",
    body: [
      "Your use of ForgEx services does not create a partnership, joint venture, employment relationship, franchise, fiduciary relationship, or agency relationship between you and ForgEx unless expressly established by a separate written agreement.",
      "No party may represent that it has authority to bind the other party unless that authority has been expressly granted.",
    ],
  },
  {
    title: "51. Third-Party Beneficiaries",
    body: [
      "Unless expressly stated otherwise, these Terms do not create rights for persons who are not parties to the agreement.",
      "This provision does not prevent rights that arise independently under applicable law.",
    ],
  },
  {
    title: "52. Export Control and Sanctions Compliance",
    body: [
      "You represent that you are not located in, and are not ordinarily resident in, a country or territory subject to comprehensive trade sanctions, and that you are not identified on any restricted-party, denied-persons, or sanctions list maintained by an applicable governmental authority.",
      "You must not use ForgEx services to export, re-export, or make available any software, technology, or data in violation of applicable export-control or sanctions laws.",
      "ForgEx may suspend or refuse access to a service where reasonably necessary to comply with applicable export-control, sanctions, or similar legal requirements.",
    ],
  },
  {
    title: "53. Language of These Terms",
    body: [
      "These Terms are prepared in English. Where these Terms are translated into another language for convenience, the English-language version will govern in the event of any conflict or inconsistency between versions.",
    ],
  },
  {
    title: "54. Contact Information",
    body: [
      "For questions about these Terms, general legal enquiries, or service-related matters, contact ForgEx through the official contact information published on our website.",
      "General email: apiigasimon0803@gmail.com",
      "Privacy matters should be directed to the privacy contact identified in the ForgEx Privacy Policy.",
      "For project-specific clients, the contact information contained in the applicable proposal, agreement, statement of work, or invoice may also apply.",
    ],
  },
]

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export default function Terms() {
  const [openSections, setOpenSections] = useState<number[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([])

  const slugs = useMemo(() => sections.map((s) => slugify(s.title)), [])

  const openOnly = (index: number) => {
    setOpenSections((current) =>
      current.includes(index) ? current : [...current, index]
    )
  }

  const toggleSection = (index: number) => {
    setOpenSections((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    )
  }

  const openAll = () => setOpenSections(sections.map((_, index) => index))
  const closeAll = () => setOpenSections([])

  const goToSection = (index: number) => {
    openOnly(index)
    requestAnimationFrame(() => {
      sectionRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) {
          const idx = sectionRefs.current.findIndex(
            (el) => el === visible[0].target
          )
          if (idx !== -1) setActiveIndex(idx)
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    )

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border px-6 py-20 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-medium text-muted-foreground">
            Legal
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground lg:text-6xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: July 15, 2026
          </p>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            Please read these Terms carefully before using ForgEx's website,
            platforms, products, and services, including Docta and UniGuide.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-16">
        <div className="mx-auto max-w-6xl py-10">
          {/* Mobile jump-to-section dropdown */}
          <div className="mb-6 lg:hidden">
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Select
            </label>
            <select
              value={activeIndex}
              onChange={(e) => goToSection(Number(e.target.value))}
              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary"
            >
              {sections.map((s, i) => (
                <option key={s.title} value={i}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr]">
            {/* Sticky sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  On this page
                </p>
                <nav className="space-y-0.5 border-l border-border">
                  {sections.map((s, i) => (
                    <button
                      key={s.title}
                      type="button"
                      onClick={() => goToSection(i)}
                      className={
                        activeIndex === i
                          ? "-ml-px block w-full border-l-2 border-primary px-3 py-1.5 text-left text-sm font-medium text-primary transition-colors"
                          : "-ml-px block w-full border-l-2 border-transparent px-3 py-1.5 text-left text-sm text-muted-foreground transition-colors hover:text-foreground"
                      }
                    >
                      {s.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Accordion content */}
            <div>
              <div className="mb-6 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={openAll}
                  className="rounded-lg border border-border px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-accent"
                >
                  Open all
                </button>
                <button
                  type="button"
                  onClick={closeAll}
                  className="rounded-lg border border-border px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  Close all
                </button>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border">
                {sections.map((section, index) => {
                  const isOpen = openSections.includes(index)

                  return (
                    <div
                      key={section.title}
                      id={slugs[index]}
                      ref={(el) => {
                        sectionRefs.current[index] = el
                      }}
                      className="scroll-mt-24 border-b border-border last:border-b-0"
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
                          className={
                            isOpen
                              ? "flex h-7 w-7 shrink-0 rotate-45 items-center justify-center rounded-full border border-border text-lg text-muted-foreground transition-transform duration-200"
                              : "flex h-7 w-7 shrink-0 rotate-0 items-center justify-center rounded-full border border-border text-lg text-muted-foreground transition-transform duration-200"
                          }
                          aria-hidden="true"
                        >
                          +
                        </span>
                      </button>

                      <div
                        className={
                          isOpen
                            ? "grid grid-rows-[1fr] opacity-100 transition-[grid-template-rows,opacity] duration-300 ease-in-out"
                            : "grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-300 ease-in-out"
                        }
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
          </div>
        </div>

        <div className="border-t border-border py-12">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-muted-foreground">
                Legal enquiries
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
                Questions about these Terms?
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                If you have a question about these Terms, a ForgEx service, a
                purchase, a project agreement, or another legal matter,
                please contact us using the information below.
              </p>
            </div>

            <div className="mt-6 max-w-xl rounded-2xl border border-border bg-card p-6">
              <p className="font-semibold text-foreground">
                ForgEx Company Limited
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Legal & General Enquiries
              </p>
              <a
                href="mailto:apiigasimon0803@gmail.com"
                className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
              >
                apiigasimon0803@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}