import type { ReactNode } from 'react'
import { profile } from '../../shared/config/profile'
import { useI18n } from '../../shared/i18n'
import './contact.css'

type ContactItem = {
  label: string
  href: string
  external?: boolean
  icon: ReactNode
}

export function Contact() {
  const { copy } = useI18n()
  const contacts: ContactItem[] = [
    { label: profile.email, href: `mailto:${profile.email}`, icon: <EmailIcon /> },
    { label: 'LinkedIn', href: profile.linkedin, external: true, icon: <LinkedInIcon /> },
    { label: 'GitHub', href: profile.github, external: true, icon: <GitHubIcon /> },
  ]

  return (
    <section className="contact section" id="contato">
      <p className="eyebrow">{copy.contact.eyebrow}</p>
      <h2>
        {copy.contact.title}
        {copy.contact.accent && <><br /><em>{copy.contact.accent}</em></>}
      </h2>
      <div className="contact-links">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target={contact.external ? '_blank' : undefined}
            rel={contact.external ? 'noreferrer' : undefined}
          >
            {contact.icon}
            <span>{contact.label}</span>
            <span className="contact-link-arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}

function EmailIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 6.5h17v11h-17zM4 7l8 6 8-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" /></svg>
}

function LinkedInIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 9.5v8M6.5 6.5v.1M10.5 17.5v-5c0-1.7 1.1-3 2.8-3s2.7 1.3 2.7 3v5M10.5 12.5c0-1.7 1.1-3 2.8-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" /></svg>
}

function GitHubIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.5 19.5c-4 .8-4-2-5.5-2.5M15.5 21v-3.1c0-.9.1-1.5-.4-2 2.7-.3 5.4-1.3 5.4-6a4.7 4.7 0 0 0-1.3-3.3 4.4 4.4 0 0 0-.1-3.3s-1-.3-3.4 1.3a11.7 11.7 0 0 0-6.2 0C7.1 3 6.1 3.3 6.1 3.3A4.4 4.4 0 0 0 6 6.6a4.7 4.7 0 0 0-1.3 3.3c0 4.7 2.7 5.7 5.4 6-.5.5-.5 1.2-.5 2V21" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" /></svg>
}
