import { languages } from '../../data/portfolioData'
import { SectionShell } from './SectionShell'

export function LanguagesSection() {
  return (
    <SectionShell id="languages" title="05. languages">
      <ul className="language-list" aria-label="Languages and proficiency levels">
        {languages.map((item) => (
          <li key={item.language} className="language-card">
            <h3 className="language-card__name">{item.language}</h3>
            <p className="language-card__level">{item.level}</p>
          </li>
        ))}
      </ul>
    </SectionShell>
  )
}