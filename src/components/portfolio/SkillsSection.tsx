import { skills } from '../../data/portfolioData'
import { SectionShell } from './SectionShell'

export function SkillsSection() {
  return (
    <SectionShell id="skills" title="03. skills">
      <ul className="skill-list" aria-label="Skills list">
        {skills.map((skill) => (
          <li key={skill} className="skill-pill">
            {skill}
          </li>
        ))}
      </ul>
    </SectionShell>
  )
}