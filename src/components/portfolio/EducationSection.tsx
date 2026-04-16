import { education } from '../../data/portfolioData'
import { SectionShell } from './SectionShell'

export function EducationSection() {
  return (
    <SectionShell id="education" title="04. education">
      <ol className="stack-list education-list" aria-label="Education history">
        {education.map((item) => (
          <li key={`${item.meta}-${item.title}`} className="education-card">
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