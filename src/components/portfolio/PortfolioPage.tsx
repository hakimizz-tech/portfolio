import { Helmet } from 'react-helmet-async'
import { AboutSection } from './AboutSection'
import { ContactSection } from './ContactSection'
import { EducationSection } from './EducationSection'
import { ExperienceSection } from './ExperienceSection'
import { HeroSection } from './HeroSection'
import { LanguagesSection } from './LanguagesSection'
import { SkillsSection } from './SkillsSection'
import { ThanksSection } from './ThanksSection'
import {
  aboutSummary,
  contact,
  personalInfo,
  skills,
  socials,
} from '../../data/portfolioData'

export function PortfolioPage() {
  const siteUrl =
    import.meta.env.VITE_SITE_URL ||
    (typeof window !== 'undefined' ? window.location.origin : 'https://example.com')
  const canonicalUrl = new URL('/', siteUrl).toString()
  const pageTitle = `${personalInfo.name} | Software Engineer Portfolio`
  const pageDescription =
    'Portfolio of Joshua Kimathi, a software engineer in Nairobi building web apps, tools, and thoughtful digital products.'
  const imageUrl = new URL('/favicon.svg', siteUrl).toString()

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalInfo.name,
    url: canonicalUrl,
    jobTitle: personalInfo.role,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    email: contact.emailDisplay,
    telephone: contact.phoneDisplay,
    description: aboutSummary,
    knowsAbout: skills,
    sameAs: socials.map((social) => social.href),
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: pageTitle,
    url: canonicalUrl,
    description: pageDescription,
  }

  return (
    <article className="portfolio">
      <Helmet prioritizeSeoTags>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="author" content={personalInfo.name} />
        <meta name="keywords" content={skills.join(', ')} />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />

        <script type="application/ld+json">
          {JSON.stringify([personSchema, websiteSchema])}
        </script>
      </Helmet>

      <HeroSection />

      <main className="portfolio__main" aria-label="Portfolio details">
        <div className="portfolio__main-column">
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <EducationSection />
          <LanguagesSection />
          <ContactSection />
        </div>
      </main>

      <ThanksSection />
    </article>
  )
}