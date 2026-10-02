import { useState } from 'react'
import { useI18n } from '../../shared/i18n'
import './navigation.css'

export function Navigation() {
  const { copy, locale, setLocale } = useI18n()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="navigation">
      <a href="#inicio" className="brand" aria-label={copy.nav.home} onClick={closeMenu}>GG<span>.</span></a>
      <nav className={isMenuOpen ? 'is-open' : undefined} aria-label={copy.nav.navigation}>
        <a href="#sobre" onClick={closeMenu}>{copy.nav.about}</a>
        <a href="#trajetoria" onClick={closeMenu}>{copy.nav.path}</a>
        <a href="#competencias" onClick={closeMenu}>{copy.nav.skills}</a>
        <a href="#formacao" onClick={closeMenu}>{copy.nav.education}</a>
        <a href="#contato" onClick={closeMenu}>{copy.nav.contact}</a>
      </nav>
      <div className="navigation-actions">
        <div className="locale-switch" aria-label={copy.nav.language}>
          <button aria-pressed={locale === 'pt-BR'} onClick={() => setLocale('pt-BR')}>PT</button>
          <span>/</span>
          <button aria-pressed={locale === 'en-US'} onClick={() => setLocale('en-US')}>EN</button>
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
