import { useState } from 'react'
import { useI18n } from '../../shared/i18n'
import { getSectionIds } from '../../shared/config/sections'
import './navigation.css'

export function Navigation() {
  const { copy, locale, setLocale } = useI18n()
  const sectionIds = getSectionIds(locale)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="navigation">
      <a href={`#${sectionIds.home}`} className="brand" aria-label={copy.nav.home} onClick={closeMenu}>GG<span>.</span></a>
      <nav className={isMenuOpen ? 'is-open' : undefined} aria-label={copy.nav.navigation}>
        <a href={`#${sectionIds.about}`} onClick={closeMenu}>{copy.nav.about}</a>
        <a href={`#${sectionIds.experience}`} onClick={closeMenu}>{copy.nav.path}</a>
        <a href={`#${sectionIds.skills}`} onClick={closeMenu}>{copy.nav.skills}</a>
        <a href={`#${sectionIds.education}`} onClick={closeMenu}>{copy.nav.education}</a>
        <a href={`#${sectionIds.contact}`} onClick={closeMenu}>{copy.nav.contact}</a>
      </nav>
      <div className="navigation-actions">
        <div className="locale-switch" aria-label={copy.nav.language}>
          <button aria-pressed={locale === 'pt-BR'} onClick={() => setLocale('pt-BR')}>PT-BR</button>
          <span>/</span>
          <button aria-pressed={locale === 'en-US'} onClick={() => setLocale('en-US')}>EN-US</button>
        </div>
        <button
          type="button"
          className="mobile-menu-button"
          aria-label={isMenuOpen ? copy.nav.closeMenu : copy.nav.openMenu}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
