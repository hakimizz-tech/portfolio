import { experiences } from '../../data/portfolioData'
import { SectionShell } from './SectionShell'

export function ExperienceSection() {
  return (
    <SectionShell id="experience" title="02. experience">
      <ol className="stack-list" aria-label="Experience history">
        {experiences.map((item) => (
          <li key={`${item.meta}-${item.title}`} className="entry-card">
            <p className="entry-card__meta">{item.meta}</p>
            <h3 className="entry-card__title">{item.title}</h3>
            {item.description.map((paragraph) => (
              <p key={paragraph} className="entry-card__description">
                {paragraph}
              </p>
            ))}
          </li>
        ))}
      </ol>
    </SectionShell>
  )
}