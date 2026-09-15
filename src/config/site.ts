/**
 * Central site configuration for Staten Island Software.
 * 
 * IMPORTANT: To keep the business honest and credible:
 * - If a value is empty (e.g., contactEmail, phone, fiverrUrl), it will NOT be displayed publicly.
 * - The primary contact method is the working Netlify inquiry form on the /contact page.
 * - Easily edit these fields as your official business accounts are configured.
 */

export interface SiteConfig {
  businessName: string;
  tagline: string;
  heroHeadline: string;
  heroSubhead: string;
  serviceArea: string;
  canonicalUrl: string;
  ownerName: string;
  contactEmail: string;
  phone: string;
  githubUrl: string;
  fiverrUrl: string;
  linkedInUrl: string;
  socialLinks: {
    platform: string;
    url: string;
  }[];
  googleSearchConsoleVerification: string;
}

export const siteConfig: SiteConfig = {
  businessName: 'Staten Island Software',
  tagline: 'Professional software engineering at practical, accessible pricing.',
  heroHeadline: 'Software Engineering for Businesses That Need Things to Work',
  heroSubhead:
    'Staten Island Software builds websites, custom software, automations, integrations, internal tools, and AI-assisted solutions for local and remote clients.',
  serviceArea: 'Serving Staten Island, NYC, and remote clients.',
  canonicalUrl: 'https://statenislandsoftware.com',
  ownerName: 'Jeremi Jenkins',
  // Set these when ready. If empty, the site automatically hides them and routes users to the contact form.
  contactEmail: '',
  phone: '',
  githubUrl: 'https://github.com/Jayj3nks',
  fiverrUrl: '',
  linkedInUrl: '',
  socialLinks: [],
  googleSearchConsoleVerification: '',
};

export const hasEmail = Boolean(siteConfig.contactEmail && siteConfig.contactEmail.trim() !== '');
export const hasPhone = Boolean(siteConfig.phone && siteConfig.phone.trim() !== '');
export const hasFiverr = Boolean(siteConfig.fiverrUrl && siteConfig.fiverrUrl.trim() !== '');
export const hasGitHub = Boolean(siteConfig.githubUrl && siteConfig.githubUrl.trim() !== '');
export const hasLinkedIn = Boolean(siteConfig.linkedInUrl && siteConfig.linkedInUrl.trim() !== '');
