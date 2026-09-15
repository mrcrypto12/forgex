import { useEffect, useMemo, useRef, useState } from "react"

type PrivacySection = {
  title: string
  body: string[]
}

const sections: PrivacySection[] = [
  {
    title: "1. Introduction",
    body: [
      "ForgEx Company Limited (\"ForgEx\", \"we\", \"us\", or \"our\") respects your privacy and is committed to handling personal data responsibly.",
      "This Privacy Policy explains how we collect, use, store, protect, disclose, and otherwise process personal data when you visit our websites, use our applications and platforms, contact us, purchase or use our services, participate in our products, or otherwise interact with ForgEx.",
      "This policy is intended to provide clear information about our privacy practices and to support our obligations under applicable Ghanaian data-protection requirements, including the Data Protection Act, 2012 (Act 843), where applicable.",
      "Different ForgEx products or services may provide additional privacy notices where the nature of the information collected, the purpose of processing, or the parties involved requires more specific information.",
      "This Privacy Policy forms part of ForgEx's broader privacy, information-security, governance, and data-protection framework. Publishing this policy by itself does not constitute registration, certification, or a representation that every organisational requirement under applicable law has been completed.",
    ],
  },
  {
    title: "2. Who We Are",
    body: [
      "ForgEx Company Limited is a Ghana-based technology company that develops software, digital platforms, artificial-intelligence solutions, connected technologies, IoT systems, hardware-related solutions, and other technology services.",
      "Depending on the service involved, ForgEx may act as a data controller, data processor, or another party responsible for processing personal data.",
      "Where ForgEx determines the purposes and means of processing personal data, ForgEx may act as the data controller for that processing.",
      "Where ForgEx processes personal data on behalf of a client, institution, business, or other organisation, the client or organisation may remain the controller while ForgEx acts as a processor or service provider.",
      "The applicable role may therefore depend on the particular product, service, project, agreement, or processing activity.",
    ],
  },
  {
    title: "3. Scope of This Policy",
    body: [
      "This Privacy Policy applies to personal data processed through ForgEx websites, web applications, mobile applications, software products, online forms, customer-support channels, business communications, and other services that expressly refer to this policy.",
      "It may also apply to personal data processed in connection with client projects where ForgEx is responsible for determining the relevant processing purposes, subject to any separate contractual or product-specific privacy notice.",
      "This policy does not necessarily apply to third-party websites, applications, payment services, social-media platforms, cloud services, or other external services that ForgEx does not control.",
      "Where a ForgEx product provides a separate privacy notice, terms of service, consent notice, or product-specific data-protection statement, that document may provide additional information for that product.",
      "Employees, contractors, job applicants, vendors, and other business stakeholders may also be subject to additional internal privacy or data-protection notices where appropriate.",
    ],
  },
  {
    title: "4. Meaning of Personal Data",
    body: [
      "For purposes of this policy, personal data generally means information relating to an identified or identifiable individual.",
      "Depending on the circumstances, this may include names, contact details, account information, identifiers, online information, educational information, communications, transaction information, or other information that can reasonably be associated with an individual.",
      "Some information may not constitute personal data where it has been properly anonymised so that an individual can no longer reasonably be identified.",
      "Aggregated or statistical information that does not identify individuals may be used for legitimate business, analytical, security, research, or product-development purposes.",
      "Where information can reasonably be linked back to an individual, we will continue to treat it as personal data while it remains identifiable.",
    ],
  },
  {
    title: "5. Categories of Information We May Collect",
    body: [
      "Depending on the service you use, we may collect identification and contact information such as your name, email address, telephone number, postal or business address, organisation, and other contact details.",
      "We may collect account information such as usernames, authentication information, account preferences, profile information, and records associated with your use of our services.",
      "We may collect transaction and service information such as orders, subscriptions, invoices, payment status, service requests, support requests, and related communications.",
      "We may collect technical information such as IP address, browser type, device type, operating system, approximate location derived from technical information where applicable, log information, identifiers, and information about interactions with our websites or applications.",
      "We may collect information you voluntarily submit through forms, surveys, applications, feedback, consultations, support requests, project enquiries, employment applications, or other communications.",
      "We may collect product-specific information, including educational information for UniGuide, information voluntarily provided through Docta, or device and telemetry information generated by applicable IoT or connected technologies.",
    ],
  },
  {
    title: "6. Information Collected Directly From You",
    body: [
      "We may collect personal data directly when you create an account, submit a form, contact us, request a service, purchase a product, communicate with support, submit an application, or otherwise voluntarily provide information.",
      "We may also collect information when you provide information about a project, organisation, institution, product requirement, or business relationship.",
      "When a form requests information, we seek to collect information that is relevant and reasonably necessary for the stated purpose.",
      "You should avoid submitting confidential information through channels that are not intended for confidential information.",
      "Where a particular service requires additional information, we will seek to explain the purpose of that information at or before the point of collection where reasonably practicable.",
    ],
  },
  {
    title: "7. Information Collected Automatically",
    body: [
      "When you visit our websites or use certain applications, some technical information may be collected automatically.",
      "This may include browser type, device information, operating system, IP address, timestamps, referring pages, pages viewed, interaction information, error information, and other technical logs.",
      "Automatic information may be used for security, authentication, service operation, troubleshooting, analytics, performance monitoring, fraud prevention, and improvement of our services.",
      "Where cookies or similar technologies are used, additional information may be collected in accordance with the Cookies section of this policy.",
      "We do not intend to use technical information to identify individuals beyond what is reasonably necessary for the purposes for which the information is processed.",
    ],
  },
  {
    title: "8. Information Received From Other Sources",
    body: [
      "In appropriate circumstances, we may receive personal data from organisations, institutions, business partners, service providers, authorised representatives, or other sources.",
      "For example, a client organisation may provide information to ForgEx where ForgEx is processing information on that organisation's behalf.",
      "UniGuide may receive or process information submitted by a student, applicant, institution, or authorised person in connection with an application-related service.",
      "Where information is obtained indirectly, we will seek to process it in accordance with applicable law and the applicable relationship or contractual arrangement.",
      "We will not knowingly acquire personal data from an unlawful source or for a purpose that is inconsistent with applicable data-protection requirements.",
    ],
  },
  {
    title: "9. Purposes for Processing Personal Data",
    body: [
      "We may process personal data to provide, operate, maintain, secure, support, and improve our websites, platforms, applications, products, and services.",
      "We may process personal data to communicate with you, respond to enquiries, provide customer support, manage accounts, process transactions, and administer business relationships.",
      "We may process information for authentication, fraud prevention, cybersecurity, system monitoring, troubleshooting, auditing, quality assurance, and prevention of misuse.",
      "We may use information to develop, test, improve, and evaluate our technology products, including software, AI-powered solutions, IoT systems, and other technologies, subject to applicable law and appropriate safeguards.",
      "We may process information to comply with legal obligations, respond to lawful requests, protect our rights and property, investigate security incidents, resolve disputes, and enforce applicable agreements.",
      "We seek to collect and use personal data only for specific, explicit, lawful, and reasonably necessary purposes.",
    ],
  },
  {
    title: "10. Lawful Grounds for Processing",
    body: [
      "Where required by applicable law, ForgEx will identify an appropriate legal basis or justification for processing personal data.",
      "Depending on the circumstances, processing may be based on your consent, the performance or preparation of a contract, a legal or statutory obligation, the protection of a person's legitimate interests, or another lawful ground recognised by applicable law.",
      "Where consent is the appropriate basis, we will seek consent in a manner that is reasonably clear and understandable and will not treat consent as freely given where it is improperly made a condition of an unrelated service.",
      "Where processing is necessary to provide a service you request, refusing to provide required information may prevent us from providing that service.",
      "Where processing is based on a legitimate interest or another non-consent basis, we will consider whether the processing is appropriate, relevant, proportionate, and consistent with applicable data-protection requirements.",
    ],
  },
  {
    title: "11. Consent",
    body: [
      "Where we rely on consent to process personal data, we will seek consent through an appropriate mechanism for the relevant processing activity.",
      "You may withdraw consent where the processing is based on consent, subject to applicable law and any consequences that necessarily follow from withdrawal.",
      "Withdrawal of consent does not automatically invalidate processing that occurred lawfully before the withdrawal.",
      "Where consent is requested for optional communications or marketing, refusing consent should not prevent you from accessing a service that does not require those optional communications.",
      "Where processing can lawfully occur without consent, we may continue the relevant processing on another lawful basis where permitted.",
    ],
  },
  {
    title: "12. Data Protection Principles",
    body: [
      "ForgEx seeks to process personal data in accordance with applicable data-protection principles, including lawfulness, fairness, transparency, purpose limitation, data minimisation, accuracy, security, accountability, and responsible retention.",
      "Personal data should be collected for a specific and lawful purpose and should not be used in a manner incompatible with that purpose unless permitted by law.",
      "We seek to ensure that personal data processed by us is relevant, reasonably necessary, and not excessive in relation to the purpose for which it is processed.",
      "We seek to take reasonable steps to maintain accurate and current information where accuracy is important to the relevant processing activity.",
      "We seek to maintain appropriate safeguards to protect personal data against unauthorised access, loss, misuse, alteration, disclosure, destruction, or other unlawful processing.",
    ],
  },
  {
    title: "13. Sensitive or Special Personal Data",
    body: [
      "Certain categories of information may receive additional protection under applicable law because of their sensitivity or the risks associated with their processing.",
      "Depending on the circumstances, this may include information concerning health, physical or mental wellbeing, biometric information, financial information, educational information, or other information protected by applicable law.",
      "ForgEx does not seek to collect sensitive information merely because it is available. Where sensitive information is necessary for a legitimate service purpose, we seek to limit collection and processing to what is reasonably necessary.",
      "Where applicable law requires additional safeguards, consent, authorisation, security measures, or a particular legal basis, we will seek to apply those requirements.",
      "Users should avoid submitting sensitive information through public or insecure communication channels unless the relevant service specifically requests it.",
    ],
  },
  {
    title: "14. Docta",
    body: [
      "Docta is a ForgEx product designed to provide digital support and technology-enabled experiences relating to wellbeing and personal support.",
      "Depending on the functionality used, a user may voluntarily provide information concerning stress, anxiety, grief, relationships, burnout, personal circumstances, wellbeing, or other matters.",
      "Because some information submitted through Docta may be sensitive, we seek to apply appropriate safeguards and limit its use to purposes reasonably connected with providing, securing, supporting, and improving the applicable service.",
      "Docta should not be assumed to be a substitute for emergency services, medical diagnosis, psychiatric treatment, or professional clinical care unless a particular service expressly states otherwise.",
      "Where Docta involves AI or automated processing, the relevant processing should be subject to appropriate privacy, security, risk-management, and human-oversight considerations.",
      "If Docta introduces counselling, therapy, professional referral, or other third-party services, additional privacy terms may apply to the information handled by those providers.",
    ],
  },
  {
    title: "15. UniGuide",
    body: [
      "UniGuide provides technology-enabled support relating to university admissions, WASSCE results, programme selection, application guidance, and related educational services.",
      "Depending on the functionality used, UniGuide may process information such as a student's name, contact details, examination results, uploaded documents, programme preferences, application information, order information, and related communications.",
      "Uploaded results or documents may be processed to help compare qualifications against programme requirements, provide guidance, support applications, or deliver another requested UniGuide service.",
      "Users should only upload documents and information that they are authorised to provide and should review documents before submitting them.",
      "Where UniGuide interacts with external institutions, application portals, payment providers, or other third parties, additional terms or privacy notices may apply to the information processed by those parties.",
      "UniGuide does not guarantee admission, programme acceptance, examination results, institutional decisions, or other outcomes controlled by third parties.",
    ],
  },
  {
    title: "16. AI and Automated Processing",
    body: [
      "ForgEx may use artificial intelligence, machine-learning systems, automated tools, rules-based systems, or other computational technologies in some products or internal processes.",
      "AI or automated technologies may be used for functions such as assistance, recommendations, classification, content generation, analytics, fraud prevention, automation, support, or product improvement.",
      "Where personal data is processed by AI or automated systems, we seek to use the information only for legitimate and appropriately defined purposes and to apply safeguards proportionate to the risks involved.",
      "Where applicable law gives individuals rights concerning automated decision-making, profiling, or decisions with significant effects, ForgEx will respect those rights and provide applicable mechanisms for exercising them.",
      "AI-generated information may contain errors or limitations and should be independently verified where a decision could materially affect a person.",
      "Where high-risk AI or automated processing is introduced, ForgEx may conduct or require a Data Protection Impact Assessment or other risk assessment where appropriate.",
    ],
  },
  {
    title: "17. IoT, Hardware and Connected Technologies",
    body: [
      "ForgEx may develop or provide hardware, embedded systems, Internet of Things technologies, connected devices, automation systems, or other smart technologies.",
      "Depending on the product, connected technologies may process technical information such as device identifiers, sensor readings, operating information, network information, event logs, telemetry, or other operational data.",
      "A particular device or product will only collect information that its functionality and configuration permit.",
      "Where connected technologies process information relating to an identifiable person, that information may constitute personal data and will be handled according to applicable privacy requirements.",
      "Users of connected technologies should review any product-specific privacy notice, installation documentation, consent notice, or configuration information supplied with the relevant product.",
    ],
  },
  {
    title: "18. Cookies and Similar Technologies",
    body: [
      "ForgEx may use cookies, local storage, pixels, software development kits, logs, or similar technologies to operate websites and applications and to understand how services are used.",
      "Essential technologies may be necessary for security, authentication, session management, accessibility, or core website functionality.",
      "Analytics technologies may help us understand traffic, performance, usage patterns, and technical problems.",
      "Preference technologies may allow a website or application to remember settings such as language, display preferences, or other choices.",
      "Where non-essential cookies or similar technologies require consent under applicable law, we will seek consent through an appropriate mechanism.",
      "You may also control certain cookies through browser or device settings, although disabling necessary technologies may affect website functionality.",
    ],
  },
  {
    title: "19. Analytics and Product Improvement",
    body: [
      "We may use analytics and technical information to understand how users interact with our websites and products.",
      "Analytics may help us identify performance problems, improve usability, understand feature adoption, detect errors, and make informed product decisions.",
      "Where possible and appropriate, we may use aggregated, pseudonymised, or otherwise reduced datasets for analytics and product improvement.",
      "Analytics providers may process information on our behalf where they are engaged as service providers or processors.",
      "We will seek to configure analytics and similar tools in a manner that is proportionate to the purpose and consistent with applicable privacy requirements.",
    ],
  },
  {
    title: "20. Payments and Financial Information",
    body: [
      "Where ForgEx accepts payments, payment transactions may be processed by third-party payment providers or financial institutions.",
      "Depending on the payment method, ForgEx may receive transaction references, payment status, payer information, order information, and limited payment-related details.",
      "Where a third-party payment processor handles card or other sensitive payment credentials, ForgEx does not intend to store payment credentials that we do not need for our own business operations.",
      "Payment providers may process information according to their own privacy policies, terms, regulatory obligations, and security practices.",
      "Users should review the applicable payment provider's information before submitting payment information where the payment provider's service is presented directly to them.",
    ],
  },
  {
    title: "21. Customer Support and Communications",
    body: [
      "When you contact ForgEx, we may collect the information you provide, including your name, contact details, message, attachments, project information, and other relevant information.",
      "We use support and communication information to respond to requests, provide assistance, investigate problems, maintain service records, and improve customer experience.",
      "Communications may be retained for a reasonable period where necessary for support, accountability, dispute resolution, security, or legal purposes.",
      "Users should avoid sending passwords, payment-card numbers, authentication secrets, or other highly confidential information through ordinary email or contact forms.",
      "We may use business communication platforms or email providers to facilitate communication, and those providers may process information on our behalf.",
    ],
  },
  {
    title: "22. How We Share Personal Data",
    body: [
      "ForgEx does not sell personal data as a business practice.",
      "We may share personal data with service providers, processors, professional advisers, contractors, infrastructure providers, payment providers, communication providers, analytics providers, or other parties where reasonably necessary to provide or support our services.",
      "We may disclose information where required or authorised by law, court order, lawful governmental request, regulatory requirement, or another valid legal process.",
      "We may disclose information where necessary to protect the rights, property, security, or safety of ForgEx, our users, clients, employees, or other persons, subject to applicable law.",
      "We may also disclose information in connection with a merger, acquisition, restructuring, financing, sale of assets, or similar corporate transaction where permitted by law and subject to appropriate safeguards.",
    ],
  },
  {
    title: "23. Data Processors and Service Providers",
    body: [
      "ForgEx may engage third-party service providers to process personal data on our behalf.",
      "Examples may include cloud hosting providers, database providers, email services, authentication providers, payment processors, analytics providers, AI or API providers, communication services, security providers, and infrastructure providers.",
      "Where ForgEx acts as a processor for a client, the client's instructions and applicable contractual terms may govern the processing.",
      "We seek to select service providers that can provide appropriate technical and organisational safeguards for the information they process.",
      "Where appropriate, contractual arrangements may require service providers to process information only for authorised purposes, maintain confidentiality, implement security measures, and assist with applicable privacy obligations.",
    ],
  },
  {
    title: "24. International Processing and Transfers",
    body: [
      "Some technology and service providers used by ForgEx may operate infrastructure or personnel outside Ghana.",
      "As a result, personal data may in appropriate circumstances be processed, stored, or accessed in another country.",
      "Where international processing or transfer is involved, ForgEx seeks to consider the requirements of applicable Ghanaian law and the risks associated with the transfer.",
      "Where appropriate, contractual, technical, organisational, or other safeguards may be used to protect personal data during international processing.",
      "The exact location of processing may differ between products and service providers, so product-specific notices or contractual documentation may provide additional information where relevant.",
    ],
  },
  {
    title: "25. Data Retention",
    body: [
      "ForgEx seeks to retain personal data only for as long as reasonably necessary for the purpose for which it was collected or processed, unless a longer period is required or permitted by law.",
      "Retention periods may depend on the nature of the information, the service involved, contractual requirements, legal obligations, security requirements, dispute periods, accounting requirements, and legitimate business needs.",
      "Different categories of information may therefore have different retention periods.",
      "When personal data is no longer required, we seek to securely delete, destroy, anonymise, or otherwise dispose of it in accordance with applicable requirements and our retention practices.",
      "Backups and security archives may retain information for a limited additional period where necessary for disaster recovery, security, legal, or operational purposes.",
    ],
  },
  {
    title: "26. Information Security",
    body: [
      "ForgEx seeks to implement appropriate technical and organisational measures designed to protect personal data against unauthorised access, accidental loss, destruction, alteration, disclosure, or other unlawful processing.",
      "Depending on the service and risk, safeguards may include access controls, authentication, encryption, secure software development practices, logging, monitoring, backups, vulnerability management, confidentiality obligations, and security reviews.",
      "Access to personal data should be limited to people and systems that reasonably require access for an authorised purpose.",
      "We seek to apply security controls proportionate to the nature and sensitivity of the information and the risks associated with the relevant processing.",
      "No internet service, transmission method, storage system, or electronic communication can be guaranteed to be completely secure, so users should also take reasonable steps to protect their accounts and information.",
    ],
  },
  {
    title: "27. Security Incidents and Data Breaches",
    body: [
      "ForgEx maintains procedures intended to identify, assess, contain, investigate, remediate, and document security incidents involving personal data.",
      "Where a personal-data compromise occurs, we may take steps including restricting access, securing affected systems, investigating the incident, preserving evidence, correcting vulnerabilities, and assessing the potential impact on affected individuals.",
      "Where applicable law requires notification to the Data Protection Commission, affected individuals, or another authority, ForgEx will seek to make the required notification within the applicable timeframe.",
      "We may also provide affected individuals with information about protective steps they can take where appropriate.",
      "A security incident does not necessarily mean that personal data was compromised, but every suspected incident should be assessed through appropriate internal procedures.",
    ],
  },
  {
    title: "28. Data Subject Rights",
    body: [
      "Subject to applicable law and any lawful limitations, individuals may have rights concerning personal data held about them.",
      "These may include the right to request access to personal data, request correction of inaccurate information, object to certain processing, request prevention of certain processing, and request deletion, blocking, or destruction where applicable.",
      "Individuals may also have rights concerning direct marketing and certain automated decision-making or profiling activities.",
      "Where processing is based on consent, an individual may withdraw consent, subject to applicable law and the consequences of doing so.",
      "Rights may be subject to lawful exceptions, verification requirements, reasonable procedures, or circumstances where the request conflicts with another legal obligation or legitimate interest.",
    ],
  },
  {
    title: "29. Accessing and Correcting Your Information",
    body: [
      "If you believe that personal data held by ForgEx about you is inaccurate, incomplete, outdated, or misleading, you may contact us and request correction where applicable.",
      "We may need to verify your identity before providing access to personal information or making changes to an account or record.",
      "Where we are processing information on behalf of another organisation, we may refer your request to that organisation where it is the appropriate data controller.",
      "We may retain a record of correction requests and the actions taken to maintain accountability and comply with applicable requirements.",
      "Where the information cannot reasonably be corrected because of legal, technical, evidentiary, or other legitimate reasons, we may explain the applicable limitation.",
    ],
  },
  {
    title: "30. Objection, Deletion and Restriction Requests",
    body: [
      "Where applicable law provides a right to object to processing, you may contact ForgEx with the relevant request.",
      "You may also request deletion, blocking, restriction, or destruction of personal data where the applicable legal conditions are satisfied.",
      "A deletion request does not necessarily require immediate deletion of every record where retention is required by law, necessary for legal claims, required for security, or otherwise permitted by applicable law.",
      "Where ForgEx processes information solely on behalf of another controller, we may need to follow that controller's instructions regarding the request.",
      "We will assess each request according to the applicable law, the nature of the information, our role in the processing, and any applicable exceptions.",
    ],
  },
  {
    title: "31. Direct Marketing and Communications Preferences",
    body: [
      "ForgEx may send service-related communications that are necessary to operate an account, fulfil a transaction, provide support, or deliver a requested service.",
      "Where we send optional promotional or marketing communications, we seek to provide an appropriate means of managing those communications.",
      "You may request that ForgEx stop processing your personal data for direct marketing where applicable under law.",
      "Unsubscribing from marketing communications will not necessarily stop important service, security, transactional, or legal communications.",
      "Where marketing is conducted through a third-party platform, that platform may also provide its own unsubscribe or preference-management mechanisms.",
    ],
  },
  {
    title: "32. Children and Young People",
    body: [
      "Some ForgEx services may be used by students or younger people, particularly services related to education or wellbeing.",
      "Where a service is intended for children or may reasonably involve children, ForgEx seeks to apply appropriate safeguards and process personal data in accordance with applicable law.",
      "We do not knowingly request more personal data from a child than is reasonably necessary for the relevant service.",
      "Where parental, guardian, institutional, or other authorisation is legally required, ForgEx will seek to use an appropriate mechanism for obtaining or verifying that authorisation.",
      "If you believe that a child has provided personal information in circumstances where it should not have been collected, please contact us so that we can assess the matter.",
    ],
  },
  {
    title: "33. Third-Party Websites and Services",
    body: [
      "Our websites and products may contain links, integrations, embedded services, or references to websites and services operated by third parties.",
      "A third-party website or service may have privacy practices that differ from ForgEx's practices.",
      "ForgEx is not responsible for the privacy, security, content, or processing practices of third-party services that we do not control.",
      "Before providing personal information directly to a third party, you should review that party's applicable privacy notice and terms.",
      "Where ForgEx integrates a third-party service into a product, the relevant product documentation may identify that integration where appropriate.",
    ],
  },
  {
    title: "34. Employment and Recruitment Information",
    body: [
      "If you apply for a position, internship, contract role, or other opportunity with ForgEx, we may process information contained in your application, CV, portfolio, communications, references, interview notes, and other recruitment materials.",
      "Recruitment information may be used to evaluate applications, communicate with applicants, arrange interviews, assess qualifications, maintain recruitment records, and satisfy applicable legal or organisational requirements.",
      "We seek to limit recruitment information to information reasonably relevant to recruitment and employment-related purposes.",
      "Recruitment information may be shared with authorised personnel, recruitment service providers, professional advisers, or other parties where reasonably necessary and lawful.",
      "Where an application is unsuccessful, information may be retained for a reasonable period for recordkeeping, future opportunities, legal, or administrative purposes, subject to applicable requirements.",
    ],
  },
  {
    title: "35. Business Clients and Project Data",
    body: [
      "ForgEx may process personal data supplied by business clients, institutions, organisations, or other customers in connection with technology projects.",
      "The information may relate to employees, customers, students, patients, users, contractors, suppliers, or other individuals associated with the client's service.",
      "Where ForgEx acts as a processor, the client may determine the purposes and means of processing and may remain responsible for providing appropriate notices and determining the lawful basis for the processing.",
      "ForgEx may process client data only within the scope authorised by the applicable agreement, instructions, product configuration, or other lawful arrangement.",
      "Clients should not provide ForgEx with personal data that is unnecessary for the contracted service and should ensure that they have appropriate authority to provide information to ForgEx.",
    ],
  },
  {
    title: "36. Data Protection Impact Assessments",
    body: [
      "ForgEx recognises that some processing activities can create greater risks to individuals' privacy and personal data.",
      "Where appropriate, ForgEx may conduct a Data Protection Impact Assessment or another privacy and security risk assessment before introducing or materially changing high-risk processing.",
      "This may be particularly relevant to processing involving sensitive personal data, new technologies, AI, profiling, automated decision-making, large-scale processing, connected technologies, or other activities that could materially increase privacy risks.",
      "A DPIA may consider the purpose and necessity of the processing, the potential impact on individuals, identified risks, safeguards, residual risks, and measures for reducing those risks.",
      "Where ForgEx acts as a processor, we may support a client's DPIA or risk assessment where the client's processing depends on ForgEx technology or services.",
    ],
  },
  {
    title: "37. Privacy by Design and Default",
    body: [
      "ForgEx seeks to consider privacy and data protection during the design, development, deployment, and maintenance of technology products and services.",
      "Depending on the product, privacy-by-design measures may include limiting data collection, reducing unnecessary access, using appropriate authentication, applying secure defaults, separating environments, and restricting information visibility.",
      "Product teams may consider whether a feature genuinely requires personal data and whether an alternative design could achieve the same objective with less information.",
      "Where privacy risks are identified during development, ForgEx may modify product architecture, controls, data flows, retention periods, permissions, or user interfaces to reduce those risks.",
      "Privacy considerations may form part of broader secure software-development, product-management, quality-assurance, and risk-management processes.",
    ],
  },
  {
    title: "38. Accountability and Internal Governance",
    body: [
      "ForgEx recognises that effective data protection requires organisational controls in addition to a public privacy notice.",
      "Depending on its obligations and scale, ForgEx may maintain internal policies, procedures, records, training, access controls, security standards, incident-response procedures, retention rules, vendor controls, and privacy assessments.",
      "ForgEx may designate appropriate personnel to oversee privacy and data-protection responsibilities as required by applicable law or organisational needs.",
      "Where applicable law requires registration, certification, appointment of a Data Protection Supervisor, reporting, or other regulatory measures, ForgEx will seek to address those requirements through the appropriate organisational processes.",
      "This public Privacy Policy should therefore be read as one part of a wider privacy and information-security framework.",
    ],
  },
  {
    title: "39. Regulatory Compliance and the Ghana Data Protection Commission",
    body: [
      "ForgEx seeks to handle personal data in accordance with applicable Ghanaian data-protection requirements, including the Data Protection Act, 2012 (Act 843), where applicable.",
      "The Data Protection Commission is the statutory regulator responsible for enforcing Ghana's data-protection framework under Act 843.",
      "Where applicable, ForgEx may be required to register as a data controller before processing personal data and may have additional obligations relating to internal supervision, policies, security, training, assessments, records, and regulatory engagement.",
      "Individuals who have concerns about the processing of their personal data may first contact ForgEx using the contact information provided in this policy.",
      "Nothing in this policy limits a person's right to seek assistance or make a complaint to a competent regulator where permitted by applicable law.",
    ],
  },
  {
    title: "40. Fraud Prevention and Abuse Detection",
    body: [
      "ForgEx may process technical and account information to detect, investigate, prevent, and respond to fraud, abuse, unauthorised access, malicious activity, or violations of applicable terms.",
      "Security information may include IP addresses, device information, authentication events, access logs, transaction information, and other relevant technical records.",
      "Such processing may be necessary to protect users, ForgEx, clients, systems, and third parties.",
      "Where fraud or abuse is suspected, information may be shared with appropriate service providers, professional advisers, regulators, law-enforcement authorities, or other parties where lawful and necessary.",
      "Security and fraud-prevention records may be retained for an appropriate period based on risk, legal requirements, and operational needs.",
    ],
  },
  {
    title: "41. Legal Requests and Disclosure",
    body: [
      "ForgEx may disclose personal data where required by applicable law or where we reasonably believe disclosure is necessary to comply with a valid legal process or lawful request.",
      "We may also disclose information to protect the rights, safety, security, property, or legal interests of ForgEx, users, clients, employees, or other persons where permitted by law.",
      "Where legally permitted, ForgEx may assess the scope and validity of a request before disclosing personal data.",
      "We may keep records of significant legal or regulatory disclosures for accountability, audit, security, and compliance purposes.",
      "Nothing in this policy prevents ForgEx from complying with a lawful obligation to disclose information.",
    ],
  },
  {
    title: "42. Corporate Transactions",
    body: [
      "If ForgEx is involved in a merger, acquisition, financing, restructuring, sale of assets, reorganisation, or similar corporate transaction, personal data may form part of the information reviewed or transferred as part of that transaction.",
      "Any transfer will be subject to applicable legal requirements and appropriate confidentiality and security measures.",
      "Where the transaction materially changes how personal data is processed, ForgEx may update this Privacy Policy or provide an additional notice where appropriate.",
      "The acquiring or successor organisation may become responsible for information previously controlled by ForgEx, subject to applicable law.",
      "We seek to ensure that personal data remains protected during corporate transitions.",
    ],
  },
  {
    title: "43. Accuracy of Information",
    body: [
      "We seek to maintain personal data that is reasonably accurate, complete, and current where accuracy is necessary for the relevant purpose.",
      "The accuracy of information may depend partly on the information supplied by users, clients, institutions, or other authorised parties.",
      "You should notify us if important personal information changes or if you believe information we hold about you is inaccurate.",
      "Where appropriate, we may verify corrections before updating records.",
      "Information that is historical, disputed, or retained for legal or audit purposes may continue to appear in records even after a newer version has been supplied.",
    ],
  },
  {
    title: "44. Your Responsibilities",
    body: [
      "You are responsible for providing information that you are authorised to provide and for ensuring that information submitted to ForgEx is reasonably accurate.",
      "You should protect account credentials, authentication codes, devices, and other security information from unauthorised access.",
      "You should not submit another person's personal data unless you have a lawful basis or appropriate authority to provide it.",
      "You should review documents and information before uploading them to services such as UniGuide or other ForgEx platforms.",
      "If you believe your account or information has been compromised, you should contact ForgEx promptly through an appropriate support or security channel.",
    ],
  },
  {
    title: "45. Changes to This Privacy Policy",
    body: [
      "ForgEx may update this Privacy Policy from time to time to reflect changes in our services, technology, processing practices, legal requirements, regulatory expectations, or organisational structure.",
      "The \"Last updated\" date at the beginning of this policy indicates when the policy was most recently revised.",
      "Where a change materially affects how we process personal data, we may provide additional notice or take other steps where appropriate.",
      "Your continued use of a service after an updated policy becomes effective does not automatically constitute consent where consent is legally required for the relevant processing.",
      "We encourage users to review this policy periodically to remain informed about our privacy practices.",
    ],
  },
  {
    title: "46. Contacting ForgEx About Privacy",
    body: [
      "If you have a question, concern, request, or complaint about how ForgEx handles personal data, please contact us using the details below.",
      "We may request enough information to verify your identity and understand the nature of your request before taking action.",
      "If your request concerns information that ForgEx processes on behalf of another organisation, we may need to involve that organisation or direct you to the appropriate controller.",
      "We seek to respond to privacy enquiries within a reasonable period and in accordance with applicable legal requirements.",
      "Please do not send passwords, payment-card numbers, authentication credentials, or other highly confidential information through ordinary email unless specifically requested through an appropriate secure process.",
    ],
  },
  {
    title: "47. Do Not Track Signals",
    body: [
      "Some web browsers offer a \"Do Not Track\" (DNT) setting that signals a preference not to be tracked across websites.",
      "Because there is currently no common industry standard for recognising or responding to DNT signals, ForgEx does not currently alter its data-collection or use practices specifically in response to a browser's DNT signal.",
      "We continue to apply the practices described elsewhere in this policy, including the Cookies and Analytics sections, regardless of whether a DNT signal is present.",
      "You can still manage cookies and similar technologies through your browser or device settings as described in the Cookies section of this policy.",
    ],
  },
  {
    title: "48. Anonymised and Aggregated Data",
    body: [
      "We may create anonymised, de-identified, or aggregated information derived from personal data for purposes such as research, statistics, product development, benchmarking, and reporting.",
      "Once information has been processed so that it no longer identifies, and cannot reasonably be used to identify, an individual, we treat it as no longer constituting personal data for purposes of this policy.",
      "We take reasonable steps designed to prevent anonymised or aggregated data from being re-identified, and we do not intentionally attempt to re-identify such data except where necessary to verify the effectiveness of anonymisation techniques.",
      "Anonymised and aggregated data may be shared more freely than personal data, including with partners, researchers, or the public, subject to our other legal and contractual obligations.",
    ],
  },
  {
    title: "49. Privacy Contact",
    body: [
      "Apiiga Simon Awinbe",
      "CEO & Privacy Contact",
      "ForgEx Company Limited",
      "Email: apiigasimon0803@gmail.com",
      "For formal data-protection matters, requests, or complaints, please clearly identify the nature of your request so that it can be directed to the appropriate person or process.",
    ],
  },
  {
    title: "50. Important Legal Notice",
    body: [
      "This Privacy Policy describes ForgEx's intended privacy practices and the ways in which personal data may be processed through applicable ForgEx services.",
      "It should be read together with applicable terms of service, product-specific privacy notices, consent notices, contracts, security documentation, and other applicable policies.",
      "This policy does not by itself constitute legal advice, regulatory certification, or proof that every data-protection requirement applicable to ForgEx has been satisfied.",
      "Actual compliance depends on the processing activities ForgEx performs, the products it operates, its contractual relationships, its technical and organisational controls, its regulatory status, and the applicable law.",
      "ForgEx may update its internal policies, procedures, technical safeguards, contractual arrangements, assessments, and regulatory registrations independently of changes to this public Privacy Policy.",
    ],
  },
]

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export default function Privacy() {
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
            Legal & Privacy
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground lg:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
            How ForgEx Company Limited collects, uses, protects, stores, and
            otherwise processes personal data across our websites, products,
            platforms, and technology services.
          </p>
          <p className="mt-5 text-sm text-muted-foreground">
            Last updated: July 15, 2026
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
                Privacy enquiries
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
                Questions about your personal data?
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                If you have a privacy question, want to exercise an
                applicable data-protection right, or want to raise a concern
                about how your personal data is handled, contact our privacy
                contact using the details below.
              </p>
            </div>

            <div className="mt-6 max-w-xl rounded-2xl border border-border bg-card p-6">
              <p className="font-semibold text-foreground">
                Apiiga Simon Awinbe
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                CEO & Privacy Contact
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                ForgEx Company Limited
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