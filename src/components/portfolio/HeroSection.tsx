import { useId, useState } from 'react'
import heroBackground from '../../assets/bg-header.webp'
import { heroQuote, personalInfo } from '../../data/portfolioData'

export function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuId = useId()

  const toggleMenu = () => {
    setIsMenuOpen((menuOpen) => !menuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="hero" aria-label="Hero section">
      <img src={heroBackground} alt="" className="hero__bg" />
      <div className="hero__overlay" />

      <div className="hero__top">
        <div className="hero__identity" aria-label="Profile summary">
          <span>{personalInfo.name}</span>
          <span className="hero__status">
            <span className="hero__status-dot" aria-hidden="true" />
            {personalInfo.availability}
          </span>
        </div>

        <div className="hero__right-column">
          <div className="hero__utility">
            <button
              type="button"
              className="hero__menu-button"
              aria-controls={menuId}
              aria-expanded={isMenuOpen}
              aria-label={
                isMenuOpen
                  ? 'Close primary actions menu'
                  : 'Open primary actions menu'
              }
              onClick={toggleMenu}
            >
              {isMenuOpen ? 'Close' : 'Menu'}
            </button>

            <div
              id={menuId}
              className={`hero__menu${isMenuOpen ? ' is-open' : ''}`}
            >
              <nav className="hero__actions" aria-label="Primary actions">
                <a
                  href={personalInfo.cvUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                  onClick={closeMenu}
                >
                  Download CV
                </a>
                <a
                  href={personalInfo.contactUrl}
                  className="text-link"
                  onClick={closeMenu}
                >
                  Contact Me
                </a>
              </nav>
              <p className="hero__timezone">{personalInfo.timezone}</p>
            </div>
          </div>

          <aside className="hero__quote" aria-label="Personal quote">
            {heroQuote.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </aside>
        </div>
      </div>

      <div className="hero__bottom">
        <div className="hero__headline-wrap">
          <h1 className="hero__headline">
            {personalInfo.displayName.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="hero__role">{personalInfo.role}</p>
        </div>
      </div>
    </header>
  )
}