export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'Do you only work with Staten Island businesses?',
    answer:
      'No. While I am based in Staten Island and enjoy working directly with local Staten Island and New York City businesses, I also regularly accept projects from entrepreneurs, organizations, and clients remotely across the country.',
    category: 'General'
  },
  {
    question: 'How much does a project cost?',
    answer:
      'I believe in transparent, upfront pricing. Single-page business websites start at $349, standard small business websites start at $649, and bug fixes start at $75. For custom software, automations, or complex integrations, I provide a detailed, fixed-price project quote before work begins based on your requirements.',
    category: 'Pricing'
  },
  {
    question: 'Do you require a deposit before starting work?',
    answer:
      'For typical custom projects, the standard payment structure is 50% to begin development and the remaining 50% upon final testing, approval, and launch handoff. For larger custom software projects, payments may be divided across distinct milestones. Smaller hourly tasks are billed based on transparent logs.',
    category: 'Pricing'
  },
  {
    question: 'Can you work on an existing website or application?',
    answer:
      'Yes. I can troubleshoot, enhance, or fix existing websites, internal tools, and applications. Before accepting the project, I review your existing codebase or architecture to ensure the requested changes are practical and to give you an accurate quote.',
    category: 'Services'
  },
  {
    question: 'Do you provide ongoing maintenance and support?',
    answer:
      'Yes. I offer monthly website maintenance starting at $79/month and custom software support starting at $149/month. These plans cover software dependency updates, security patches, form monitoring, and routine small fixes to ensure your tools remain reliable long after launch.',
    category: 'Services'
  },
  {
    question: 'Who owns the code after the project is completed?',
    answer:
      'Once final payment is completed, you receive full access and ownership rights to the custom code created for your project, as outlined in our written project agreement. Any open-source libraries or third-party dependencies used in the project remain subject to their respective open-source licenses.',
    category: 'Legal'
  },
  {
    question: 'Can you build something that is not listed on your website?',
    answer:
      'Yes. Every business has unique challenges. If you need a specialized utility, a custom data scraper, a proprietary integration, or an internal workflow tool, reach out through the contact form with your requirements and I will let you know how I can help.',
    category: 'Services'
  },
  {
    question: 'Can you guarantee my website will rank #1 on Google?',
    answer:
      'No, and you should be wary of any developer who makes that claim. What I do guarantee is rock-solid technical SEO foundations: semantic HTML, fast loading speeds, mobile responsiveness, clean structured schema data (JSON-LD), sitemap generation, and clean crawlable architecture that gives your site the best possible standing with search engines.',
    category: 'SEO'
  }
];
