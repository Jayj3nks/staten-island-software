export interface PricingTier {
  id: string;
  name: string;
  price: string;
  isStartingPrice?: boolean;
  frequency?: string;
  description: string;
  popular?: boolean;
  features: string[];
  serviceParam: string;
  idealFor: string;
}

export interface SoftwarePricingItem {
  name: string;
  price: string;
  description: string;
  deliverables: string;
  serviceParam: string;
}

export const websiteTiers: PricingTier[] = [
  {
    id: 'single-page',
    name: 'Single-Page Business Website',
    price: '$349',
    isStartingPrice: false,
    description: 'A focused, high-speed landing page built to present your services clearly and capture customer inquiries.',
    popular: false,
    serviceParam: 'Website Development - Single Page ($349)',
    idealFor: 'Contractors, solo practitioners, and single-service businesses needing a credible online presence fast.',
    features: [
      'One polished, fully responsive page',
      'Up to 5 major content sections (Hero, About, Services, Trust, Contact)',
      'Clean mobile-first optimization',
      'Working contact / lead generation form',
      'Basic on-page SEO & Open Graph meta tags',
      'Fast static deployment (Netlify)',
      '2 revision rounds included'
    ]
  },
  {
    id: 'small-business',
    name: 'Small Business Website',
    price: '$649',
    isStartingPrice: false,
    description: 'A comprehensive multi-page business website designed to showcase distinct services, build authority, and rank for local searches.',
    popular: true,
    serviceParam: 'Website Development - Small Business ($649)',
    idealFor: 'Established local businesses, professional practices, and trade companies requiring multi-page depth.',
    features: [
      'Up to 5 dedicated pages (Home, Services, About, Pricing/FAQ, Contact)',
      'Custom responsive design matched to your brand',
      'Interactive contact / quote request form with spam filtering',
      'Structured service pages for local search discovery',
      'Basic SEO foundation & Schema.org structured data',
      'Performance & mobile speed optimization',
      'Production deployment configuration',
      '2 revision rounds included'
    ]
  },
  {
    id: 'expanded-business',
    name: 'Expanded Business Website',
    price: '$999',
    isStartingPrice: false,
    description: 'An extensive custom web build engineered for companies with diverse services, multiple service areas, or in-depth content requirements.',
    popular: false,
    serviceParam: 'Website Development - Expanded Business ($999)',
    idealFor: 'Growing companies with multiple service lines, location-specific pages, or extensive capabilities.',
    features: [
      'Up to 8–10 custom responsive pages',
      'Deeply structured service content architecture',
      'Lead qualification contact form with category routing',
      'Technical SEO architecture, sitemap, and breadcrumbs',
      'High-performance Core Web Vitals optimization',
      'Detailed site documentation for content updates',
      'Production deployment & domain setup support',
      '2 revision rounds included'
    ]
  }
];

export const softwarePricing: SoftwarePricingItem[] = [
  {
    name: 'Small Bug / Code Fix',
    price: 'Starting at $75',
    description: 'Targeted troubleshooting and resolution of a specific broken feature, layout bug, or script error.',
    deliverables: 'Diagnosis, code correction, testing, and deployment verification.',
    serviceParam: 'Bug Fix / Technical Support'
  },
  {
    name: 'Simple Automation',
    price: 'Starting at $149',
    description: 'Automate a single repetitive workflow, such as forwarding incoming form leads to SMS or formatting a spreadsheet.',
    deliverables: 'Configured trigger, execution script, error logging, and test validation.',
    serviceParam: 'Automation - Simple ($149)'
  },
  {
    name: 'API / Software Integration',
    price: 'Starting at $249',
    description: 'Connect two third-party platforms via REST API or webhooks to synchronize records automatically.',
    deliverables: 'Authentication setup, webhook endpoints, payload mapping, and live data sync.',
    serviceParam: 'API / Integration ($249)'
  },
  {
    name: 'Multi-Step Business Automation',
    price: 'Starting at $349',
    description: 'End-to-end automation connecting multiple platforms, condition checks, document generation, and alert dispatches.',
    deliverables: 'Multi-service workflow pipeline, data validation, exception alerting, and run logs.',
    serviceParam: 'Automation - Multi-Step ($349)'
  },
  {
    name: 'Custom Dashboard / Internal Tool',
    price: 'Starting at $699',
    description: 'A tailored internal interface built for your team to view operational KPIs, schedule tasks, or manage internal records.',
    deliverables: 'Clean responsive UI, data persistence, export capabilities, and deployment.',
    serviceParam: 'Custom Software - Dashboard ($699)'
  },
  {
    name: 'Small Custom Web Application',
    price: 'Starting at $1,499',
    description: 'A focused, full-fledged web application tailored to a specific commercial workflow or proprietary business process.',
    deliverables: 'System architecture, frontend & backend logic, data models, testing, and production setup.',
    serviceParam: 'Custom Software - Web App ($1,499)'
  },
  {
    name: 'Software Engineering / Consulting',
    price: '$45 / hour',
    description: 'On-demand technical consulting, architecture planning, code reviews, or exploratory investigations.',
    deliverables: 'Direct engineering time logged transparently. (Fixed-price project quotes preferred when scope is defined).',
    serviceParam: 'Software Engineering / Consulting ($45/hr)'
  }
];

export const monthlySupportTiers = [
  {
    id: 'website-support',
    name: 'Website Maintenance',
    price: '$79',
    frequency: '/month',
    description: 'Keep your website secure, updated, and error-free without taking time away from running your business.',
    features: [
      'Routine content and text updates (fair-use scope)',
      'Software dependency and security patch updates',
      'Form functionality and uptime monitoring',
      'Minor layout or visual adjustments',
      'Direct email support with fast response times'
    ],
    serviceParam: 'Maintenance - Website ($79/mo)'
  },
  {
    id: 'software-support',
    name: 'Business Software Support',
    price: '$149',
    frequency: '/month',
    description: 'Dedicated technical support and ongoing reliability maintenance for your custom tools, automations, and integrations.',
    features: [
      'Continuous monitoring of automated jobs and webhook listeners',
      'Troubleshooting when third-party API providers change versions',
      'Performance tuning and small incremental improvements',
      'Priority bug fixes on supported systems',
      'Monthly health and execution review'
    ],
    serviceParam: 'Maintenance - Software ($149/mo)'
  }
];

export const paymentPolicies = {
  summary: 'Transparent terms with no hidden fees.',
  typicalStructure: '50% to begin / 50% before final launch or handoff',
  milestones: 'Larger custom software projects ($2,000+) are divided into clear phased milestone deliverables.',
  hourlyTerms: 'Hourly consulting is billed on agreed schedule with transparent activity logs.',
  disclaimer:
    'Final pricing depends on requirements, integrations, content, complexity, and timeline. Projects outside the agreed scope are quoted separately.'
};
