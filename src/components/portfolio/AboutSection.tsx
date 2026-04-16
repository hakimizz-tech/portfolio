import { aboutSummary } from '../../data/portfolioData'
import { SectionShell } from './SectionShell'

export function AboutSection() {
  return (
    <SectionShell id="about" title="01. about">
      <p className="body-copy">{aboutSummary}</p>
    </SectionShell>
  )
}