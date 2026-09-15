export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  headline: string;
  summary: string;
  startingPrice: string;
  icon: string;
  offerings: string[];
  practicalUseCases: {
    title: string;
    description: string;
  }[];
  whatToExpect: string[];
}

export const services: ServiceItem[] = [
  {
    id: 'web-development',
    slug: 'web-development',
    title: 'Website Development',
    shortDescription: 'Fast, responsive websites engineered for conversions, local discovery, and zero bloat.',
    headline: 'Websites Built to Turn Visitors into Customers',
    summary:
      'I engineer clean, responsive websites tailored to small businesses, local service companies, and entrepreneurs. Built without bloated page-builders, every site is designed for fast load speeds, search engine accessibility, and straightforward maintenance.',
    startingPrice: '$349',
    icon: 'browser',
    offerings: [
      'Single-page and multi-page business websites',
      'Lead-generation landing pages designed for conversions',
      'Responsive rebuilds of outdated or slow websites',
      'Core Web Vitals and website speed optimization',
      'Local SEO foundations and technical schema markup',
      'Static-site generation with zero hosting overhead'
    ],
    practicalUseCases: [
      {
        title: 'Local Service Contractor',
        description:
          'A modern 5-page website highlighting services, service areas on Staten Island and NYC, license information, and an interactive quote request form.'
      },
      {
        title: 'Professional Practice',
        description:
          'A clean, trustworthy digital presence with direct click-to-call, service breakdowns, and clear directions for prospective clients.'
      },
      {
        title: 'Product or Campaign Landing Page',
        description:
          'A high-performance landing page tuned for paid campaigns, fast mobile loading, and direct lead capture.'
      }
    ],
    whatToExpect: [
      'Semantic, clean HTML/CSS with fast load times',
      'Mobile-first responsive layout tested across screen sizes',
      'Working contact form connected to your preferred email',
      'Full source code and straightforward deployment handoff'
    ]
  },
  {
    id: 'custom-software',
    slug: 'custom-software',
    title: 'Custom Software',
    shortDescription: 'Tailored internal tools, workflow dashboards, and lightweight web applications.',
    headline: 'Software Built Around the Way Your Business Actually Operates',
    summary:
      'Off-the-shelf software often forces you to change your operations to fit their system. I build custom internal tools, operations dashboards, and lightweight web apps designed specifically around your business requirements.',
    startingPrice: '$699',
    icon: 'terminal',
    offerings: [
      'Custom operational dashboards and KPI trackers',
      'Internal business tools to replace cumbersome manual spreadsheets',
      'Lightweight web applications for client or team workflows',
      'Inventory, scheduling, and job tracking utilities',
      'Secure data storage and clean reporting views'
    ],
    practicalUseCases: [
      {
        title: 'Operations Tracking Dashboard',
        description:
          'A centralized internal portal where your team can view job statuses, pending deliverables, and daily milestone completion in real time.'
      },
      {
        title: 'Customer Intake & Estimator Tool',
        description:
          'A guided calculation utility that allows your staff or clients to estimate project scopes and automatically generate structured proposals.'
      },
      {
        title: 'Data Cleanliness Utility',
        description:
          'A dedicated web tool that validates, standardizes, and flags errors in customer data before importing into core systems.'
      }
    ],
    whatToExpect: [
      'Clear requirements definition and scope signoff before coding begins',
      'Intuitive user interface that requires minimal staff training',
      'Reliable hosting architecture that keeps ongoing expenses low',
      'Complete documentation on operation and data management'
    ]
  },
  {
    id: 'automation',
    slug: 'automation',
    title: 'Business Automation',
    shortDescription: 'Automate repetitive tasks, data processing, scheduled reporting, and manual workflows.',
    headline: 'Eliminate Repetitive Tasks and Reclaim Hours of Focus',
    summary:
      'If your staff spends hours every week copying data between spreadsheets, emailing status reports, or manually reformatting files, an automated pipeline can execute the entire sequence reliably in seconds.',
    startingPrice: '$149',
    icon: 'gear',
    offerings: [
      'Repetitive-task automation and scheduled script execution',
      'Spreadsheet, CSV, and tabular data processing pipelines',
      'Automated client notification workflows and email alerts',
      'Document parsing, invoice extraction, and file routing',
      'Scheduled daily and weekly executive summary reports'
    ],
    practicalUseCases: [
      {
        title: 'Automated Lead Routing',
        description:
          'Instantly format incoming web inquiries, check priority criteria, send a notification to your phone, and append the record to your tracking sheet.'
      },
      {
        title: 'Daily Business Summary Dispatch',
        description:
          'A scheduled script that aggregates daily sales numbers, pending tickets, and flagged orders into a single concise morning email.'
      },
      {
        title: 'Batch Document Renaming & Organization',
        description:
          'Automatically sort, standardize naming conventions, and file incoming customer documents into secure cloud directories.'
      }
    ],
    whatToExpect: [
      'Detailed audit of your manual steps to identify bottlenecks',
      'Robust error handling and notification if third-party services fail',
      'Logging of executed actions for transparency and auditing',
      'Walkthrough of how the automation runs and how to monitor it'
    ]
  },
  {
    id: 'integrations',
    slug: 'integrations',
    title: 'API & System Integration',
    shortDescription: 'Connect disparate platforms, synchronize data, and configure reliable webhooks.',
    headline: 'Bridge the Gaps Between Your Tools and Platforms',
    summary:
      'Businesses frequently rely on multiple SaaS platforms that operate in silos. I build custom API integrations, webhook listeners, and background sync engines to ensure your business data flows seamlessly where it belongs.',
    startingPrice: '$249',
    icon: 'network',
    offerings: [
      'REST API and webhook development',
      'Two-way data synchronization between business applications',
      'Payment gateway and billing platform integrations',
      'CRM, marketing platform, and inventory service connectors',
      'Data transformation, mapping, and sanitization'
    ],
    practicalUseCases: [
      {
        title: 'Billing to Accounting Synchronization',
        description:
          'Automatically create matching records in your accounting software whenever a payment or invoice is completed in your payment processor.'
      },
      {
        title: 'Inventory Alerting Across Systems',
        description:
          'Connect stock levels between an online store and your internal fulfillment tracking to prevent overselling.'
      },
      {
        title: 'Third-Party Webhook Receiver',
        description:
          'Receive real-time event notifications from suppliers or delivery providers and trigger instant operational responses.'
      }
    ],
    whatToExpect: [
      'Secure credential handling using standard environment variables',
      'Graceful retry logic for intermittent network drops',
      'Idempotent operations to prevent duplicate data entry',
      'Straightforward endpoint documentation'
    ]
  },
  {
    id: 'ai',
    slug: 'ai',
    title: 'AI Tools & Integrations',
    shortDescription: 'Practical AI-assisted workflows, document extraction, summarization, and classification.',
    headline: 'Practical AI Engineering for Real Business Bottlenecks',
    summary:
      'AI is an engineering tool, not magic. When applied sensibly, language models and classification APIs can dramatically reduce the friction of parsing unstructured text, categorizing customer requests, and extracting information from documents.',
    startingPrice: '$349',
    icon: 'cpu',
    offerings: [
      'Document parsing, extraction, and structured JSON output',
      'Automated customer inquiry classification and draft responses',
      'Content workflow tooling and summarization pipelines',
      'Internal knowledge search over proprietary documentation',
      'Sensible architectural evaluation (determining when AI is NOT the right tool)'
    ],
    practicalUseCases: [
      {
        title: 'Contract & Invoice Data Extractor',
        description:
          'Extract vendor name, line items, dates, and payment terms from unstructured PDF invoices directly into structured database records.'
      },
      {
        title: 'Inquiry Triage & Priority Tagging',
        description:
          'Classify customer messages by intent and urgency, drafting a proposed response for your team to review before sending.'
      },
      {
        title: 'Internal Knowledge Assistant',
        description:
          'A private search interface allowing staff to ask natural questions against internal operating procedures and reference manuals.'
      }
    ],
    whatToExpect: [
      'Honest assessment: I will explicitly advise against AI if standard deterministic code is faster and cheaper',
      'Strict privacy boundaries: Confidential customer credentials are never exposed carelessly to external APIs',
      'Deterministic fallback routines when model confidence is low',
      'Cost controls and token usage monitoring to keep API fees minimal'
    ]
  }
];
