import type { PropsWithChildren } from 'react'

type SectionShellProps = {
  id: string
  title: string
}

export function SectionShell({
  id,
  title,
  children,
}: PropsWithChildren<SectionShellProps>) {
  return (
    <section
      id={id}
      className="info-section"
      aria-labelledby={`${id}-heading`}
    >
      <div className="info-section__grid">
        <div className="info-section__title-wrap">
          <h2 id={`${id}-heading`} className="info-section__title">
            {title}
          </h2>
        </div>
        <div className="info-section__content">{children}</div>
      </div>
    </section>
  )
}