# Staten Island Software — Production Website

Production website for **Staten Island Software**, an independent freelance software engineering practice delivering practical websites, custom software, business automations, and API integrations for Staten Island, New York City, and remote clients.

Built with **Astro + TypeScript**, vanilla CSS design system, Netlify Forms, and pre-configured continuous deployment.

---

## Quick Reference

| Action | Command |
|---|---|
| Install dependencies | `npm install` |
| Start local dev server | `npm run dev` |
| Typecheck / diagnostics | `npm run check` |
| Production build | `npm run build` |
| Local preview of build | `npm run preview` |

Production output is compiled into the `dist/` directory.

---

## Tech Stack & Architecture

- **Core Engine:** [Astro](https://astro.build/) (Static Site Generation mode)
- **Language:** TypeScript (`strict` mode)
- **Styling:** Vanilla CSS with custom properties (`src/styles/global.css`)
- **Forms:** Netlify Forms (`data-netlify="true"`) with honeypot spam protection
- **SEO & Social:** Automatic `@astrojs/sitemap`, Open Graph metadata, Schema.org (`Organization`, `WebSite`, `Service`)
- **Hosting:** Netlify with Git-driven continuous integration

---

## Directory Structure

```text
├── astro.config.mjs        # Astro configuration & sitemap integration
├── netlify.toml            # Netlify build commands, publish directory & security headers
├── package.json            # Scripts & dependencies
├── tsconfig.json           # Strict TypeScript configuration
├── public/
│   ├── favicon.svg         # Verrazzano-Narrows Bridge + Code syntax vector mark
│   ├── og-image.svg        # Social sharing banner (Open Graph / Twitter)
│   └── robots.txt          # Search engine crawl rules & sitemap pointer
├── src/
│   ├── config/
│   │   └── site.ts         # Central business settings & contact links
│   ├── data/
│   │   ├── services.ts     # Service offerings, use cases & deliverables
│   │   ├── pricing.ts      # Website packages, software starting rates & terms
│   │   ├── projects.ts     # Demo & concept portfolio projects
│   │   └── faqs.ts         # FAQs on pricing, deposits & code ownership
│   ├── styles/
│   │   └── global.css      # Dark navy / electric blue design system tokens
│   ├── components/
│   │   ├── Header.astro    # Accessible navigation, logo mark, CTA
│   │   ├── Footer.astro    # Footer with conditional channels & legal links
│   │   ├── ContactForm.astro # Netlify form with client validation & feedback
│   │   ├── PricingCard.astro # Pricing tiers with deep-link pre-selection
│   │   ├── ProjectCard.astro # Showcase cards with demo/concept badges
│   │   ├── ServiceCard.astro # Capabilities overview cards
│   │   ├── HowIWork.astro    # 4-step client process (Understand, Scope, Build, Launch)
│   │   ├── TrustSection.astro # Credibility & expectation pillars
│   │   └── JsonLd.astro      # Factual Schema.org JSON-LD structured data
│   ├── layouts/
│   │   └── Layout.astro    # Base HTML template, meta tags, skip link
│   └── pages/
│       ├── index.astro     # Home page
│       ├── pricing.astro   # Comprehensive pricing & payment policy
│       ├── work.astro      # Capabilities & demo projects
│       ├── about.astro     # Independent engineering practice story
│       ├── contact.astro   # Quote request form
│       ├── privacy.astro   # Plain-language privacy policy
│       ├── terms.astro     # Terms of use & pricing disclaimers
│       ├── 404.astro       # Branded 404 error page
│       └── services/
│           ├── index.astro           # Services hub
│           ├── web-development.astro # Website development deep-dive
│           ├── custom-software.astro # Internal tools & web apps
│           ├── automation.astro      # Workflow automation
│           ├── integrations.astro    # API & system integrations
│           └── ai.astro              # Practical AI tools
```

---

## Central Configuration & Customization

All important business data is centralized in **`src/config/site.ts`** and structured data files in **`src/data/`**. You do not need to search through HTML or components to edit business details.

### 1. Changing Business Info & Contact Channels (`src/config/site.ts`)
Open `src/config/site.ts` to update:
- `businessName`
- `canonicalUrl`
- `ownerName`
- `contactEmail` (If left empty `""`, the site hides direct email links to prevent spam and uses the working contact form as the primary CTA)
- `phone` (If left empty `""`, phone links remain hidden)
- `githubUrl`
- `fiverrUrl` (Rendered only when a real profile link is provided)
- `linkedInUrl`
- `googleSearchConsoleVerification` (Or use environment variable `PUBLIC_GOOGLE_SITE_VERIFICATION`)

### 2. Editing Pricing Packages (`src/data/pricing.ts`)
- **Website Tiers:** Edit `websiteTiers` to adjust prices, features, or add revision rounds.
- **Software Rates:** Edit `softwarePricing` to adjust starting rates for bug fixes, automations, or internal tools.
- **Monthly Maintenance:** Edit `monthlySupportTiers` for ongoing retainers.
- **Payment Policies:** Edit `paymentPolicies` for deposit structures.

### 3. Adding a Real Portfolio Project (`src/data/projects.ts`)
Add a new object to the `projects` array in `src/data/projects.ts`:
```typescript
{
  id: 'client-name-crm',
  title: 'Field Service Dispatch System',
  badge: 'Demo Project', // Change to real label or omit demo flag when real
  category: 'Custom Software',
  summary: 'One sentence project summary...',
  problem: 'What bottleneck the business faced...',
  solution: 'How the custom tool solved it...',
  technicalHighlights: ['Fast offline state', 'CSV sync'],
  stack: ['Astro', 'TypeScript', 'Tailwind'],
  metricsOrOutcome: 'Reduced scheduling overhead by 65%'
}
```

---

## Netlify Forms & Inquiry Processing

The contact form on `/contact` is wired directly to **Netlify Forms**:
- Form Name: `project-inquiry`
- Attributes: `data-netlify="true"`, `data-netlify-honeypot="bot-field"`
- Email Subject: `New Staten Island Software project inquiry`
- Client-Side Validation: Automatically intercepts submission with `fetch()`, verifies required fields (`name`, `email`, `description`), displays a loading spinner, and renders a clean success banner.

### Where Form Submissions Appear
1. Log into your Netlify dashboard at [app.netlify.com](https://app.netlify.com).
2. Select your site.
3. Click the **Forms** tab.
4. All incoming inquiries with name, email, budget, service category, timeline, and description will be listed there.

### How to Configure Instant Email Notifications
1. In the Netlify site dashboard, go to **Site configuration > Notifications**.
2. Click **Add notification > Email notification**.
3. Event: Select **New form submission**.
4. Form: Select `project-inquiry`.
5. Enter your destination email address: `Jeremi.Jenkins@gmail.com`.
6. Save. Every new lead will instantly be emailed to you with the submitter's email pre-configured in `Reply-To`.

---

## Deployment & Hosting

The site is configured for zero-configuration Git-based deployment:
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Config file:** `netlify.toml`
- **Live Netlify URL:** `https://statenislandsaas.netlify.app`

### Linking to Netlify
1. Log into Netlify at [app.netlify.com](https://app.netlify.com).
2. Click **Add new site > Import an existing project**.
3. Select **GitHub** and authorize access to `Jayj3nks/staten-island-software`.
4. Netlify will automatically detect the settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy site**. Future pushes to `main` will automatically build and deploy.

### Changing to a Custom Domain Later

The site architecture is designed so that the production canonical URL is controlled from **one central place** (`src/config/site.ts`). When you purchase a custom domain later, follow these steps:

1. **Add the domain in Netlify:** Go to **Domain management > Add custom domain** and enter your purchased domain.
2. **Configure DNS records:** Add the DNS records provided by Netlify at your domain registrar (such as Netlify nameservers or standard A / CNAME records).
3. **Enable HTTPS:** Netlify will automatically verify DNS and issue a free Let's Encrypt SSL/TLS certificate with automatic HTTPS redirection.
4. **Change the central canonicalUrl:** In `src/config/site.ts`, update `canonicalUrl: 'https://statenislandsaas.netlify.app'` to your new domain (e.g. `'https://yournewdomain.com'`). Because `astro.config.mjs`, `Layout.astro`, `JsonLd.astro`, and OpenGraph metadata import directly from `siteConfig`, this single change updates the entire project.
5. **Rebuild/deploy:** Commit the change and push to `main` (`git commit -am "Update canonical URL to custom domain" && git push origin main`). Netlify will automatically rebuild and publish the static bundle.
6. **Verify:** Check that canonical tags, sitemap (`/sitemap-index.xml`), `robots.txt`, and redirects resolve cleanly to the new domain.
7. **Set primary domain:** In Netlify Domain settings, set your custom domain as the primary domain so any default `.netlify.app` visits redirect to your custom domain.

---

## SEO & Google Search Console Setup

1. **Sitemap:** The site automatically generates a sitemap at:
   `https://statenislandsaas.netlify.app/sitemap-index.xml`
2. **Robots.txt:** Pre-configured in `public/robots.txt` pointing to the sitemap index.
3. **Google Search Console Verification:**
   - Add your verification token to `PUBLIC_GOOGLE_SITE_VERIFICATION` in your Netlify site environment variables (or directly into `siteConfig.googleSearchConsoleVerification` in `src/config/site.ts`).
   - In Google Search Console, submit the sitemap URL: `https://statenislandsaas.netlify.app/sitemap-index.xml`.

---

## Security Headers

Pre-configured in `netlify.toml`:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()`
- `Content-Security-Policy`: Safe static policy permitting Google Fonts and Netlify Forms without breaking functionality.
