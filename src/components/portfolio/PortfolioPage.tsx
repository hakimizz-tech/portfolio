import { AboutSection } from './AboutSection'
import { ContactSection } from './ContactSection'
import { EducationSection } from './EducationSection'
import { ExperienceSection } from './ExperienceSection'
import { HeroSection } from './HeroSection'
import { LanguagesSection } from './LanguagesSection'
import { SkillsSection } from './SkillsSection'
import { ThanksSection } from './ThanksSection'

export function PortfolioPage() {
  return (
    <article className="portfolio">
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