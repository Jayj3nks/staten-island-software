export interface ProjectItem {
  id: string;
  title: string;
  badge: 'Demo Project' | 'Concept Project';
  category: string;
  summary: string;
  problem: string;
  solution: string;
  technicalHighlights: string[];
  stack: string[];
  metricsOrOutcome: string;
}

export const projects: ProjectItem[] = [
  {
    id: 'local-service-site',
    title: 'High-Performance Local Service Website',
    badge: 'Demo Project',
    category: 'Website Development',
    summary:
      'A sub-second loading business website architecture tailored for local trade contractors and service professionals.',
    problem:
      'Many local service businesses rely on bloated website builder templates that take 5+ seconds to load on mobile, fail Core Web Vitals, and lose prospective customers before the page even renders.',
    solution:
      'Engineered a lightweight static website that renders instantly on mobile devices, incorporates WCAG-compliant accessible quote forms, and embeds structured LocalBusiness schema for search visibility.',
    technicalHighlights: [
      'Sub-500ms First Contentful Paint with zero bulky runtime frameworks',
      'Integrated serverless contact form with honeypot spam protection',
      'Mobile-first responsive layout with direct click-to-call integration',
      'Automated sitemap generation and Open Graph social sharing cards'
    ],
    stack: ['Astro', 'TypeScript', 'Vanilla CSS', 'Netlify Forms'],
    metricsOrOutcome: '100/100 Mobile Lighthouse Performance score with zero JavaScript bloat.'
  },
  {
    id: 'operations-dashboard',
    title: 'Operations & Job Tracking Dashboard',
    badge: 'Demo Project',
    category: 'Custom Software',
    summary:
      'An intuitive internal management dashboard replacing error-prone spreadsheets for team job tracking and customer status.',
    problem:
      'A small service business relied on a 40-column shared spreadsheet to track daily jobs, leading to accidental row overwrites, missed customer follow-ups, and slow mobile usability.',
    solution:
      'Built a focused internal web tool with instant status toggles, searchable client records, automated status color-coding, and reliable one-click data export.',
    technicalHighlights: [
      'Fast client-side state management with instant filtering and search',
      'Designed specifically for tablet and laptop use on the job',
      'Configurable stage workflow (Pending, In Progress, Review, Completed)',
      'Zero monthly software license overhead compared to enterprise platforms'
    ],
    stack: ['TypeScript', 'Web Components', 'CSS Custom Properties', 'REST API Architecture'],
    metricsOrOutcome: 'Reduced daily status update time from 45 minutes to under 5 minutes.'
  },
  {
    id: 'lead-sync-automation',
    title: 'Multi-Channel Lead Sync & Alert Pipeline',
    badge: 'Concept Project',
    category: 'Business Automation',
    summary:
      'An automated event pipeline that normalizes incoming web inquiries, triggers SMS alerts, and updates tracking records.',
    problem:
      'Customer leads submitted after hours sat in unmonitored email inboxes until the following business day, reducing closing rates.',
    solution:
      'Architected a webhook receiver that instantly validates incoming lead payloads, dispatches immediate mobile SMS alerts to the owner, and logs the customer into a centralized spreadsheet.',
    technicalHighlights: [
      'Webhook listener with signature validation and replay protection',
      'Payload sanitization and phone number normalization',
      'Retry backoff logic for intermittent network drops',
      'Structured audit logging of all dispatched alerts'
    ],
    stack: ['Node.js', 'REST Webhooks', 'SMS API', 'Automated Pipelines'],
    metricsOrOutcome: 'Instant sub-60-second response alerting for new incoming customer inquiries.'
  },
  {
    id: 'invoice-parsing-engine',
    title: 'Document & Invoice Extraction Engine',
    badge: 'Concept Project',
    category: 'AI Tools & Integrations',
    summary:
      'A targeted document processing utility that parses unstructured PDF invoices into structured, validated JSON data.',
    problem:
      'An operations manager spent 12 hours every week manually typing vendor invoices, dates, and amounts into internal ledger files.',
    solution:
      'Developed a practical document extraction workflow that ingests scanned invoice PDFs, extracts structured fields using vision/language parsing, and presents a side-by-side verification interface before saving.',
    technicalHighlights: [
      'Strict JSON schema enforcement with type validation',
      'Human-in-the-loop review interface for uncertain fields',
      'Explicit privacy boundary: zero customer data used for model retraining',
      'Exports directly to CSV and accounting-compatible formats'
    ],
    stack: ['TypeScript', 'PDF Processing', 'Structured LLM Parsing', 'Modern Web Standards'],
    metricsOrOutcome: 'Cuts manual document transcription time by approximately 80%.'
  }
];
