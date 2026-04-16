import { contact, socials } from '../../data/portfolioData'
import { SectionShell } from './SectionShell'

export function ContactSection() {
  return (
    <SectionShell id="contact" title="06.contact">
      <address className="contact-stack">
        <div className="contact-block">
          <p className="contact-label">{contact.phoneLabel}</p>
          <a href={contact.phoneHref} className="contact-link">
            {contact.phoneDisplay}
          </a>
        </div>

        <div className="contact-block">
          <p className="contact-label">{contact.emailLabel}</p>
          <a href={contact.emailHref} className="contact-link">
            {contact.emailDisplay}
          </a>
        </div>

        <div className="contact-block">
          <p className="contact-label">Socials</p>
          <ul className="social-list" aria-label="Social profiles">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </address>
    </SectionShell>
  )
}