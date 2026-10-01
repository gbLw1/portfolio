import { useI18n } from '../../shared/i18n'
import './navigation.css'

export function Navigation() {
  const { copy, locale, setLocale } = useI18n()

  return <header className="navigation">
    <a href="#inicio" className="brand" aria-label="Home">GG<span>.</span></a>
    <nav aria-label="Main navigation">
      <a href="#sobre">{copy.nav.about}</a>
      <a href="#trajetoria">{copy.nav.path}</a>
      <a href="#competencias">{copy.nav.skills}</a>
      <a href="#formacao">{copy.nav.education}</a>
      <a href="#contato">{copy.nav.contact}</a>
    </nav>
    <div className="locale-switch" aria-label="Language">
      <button aria-pressed={locale === 'pt-BR'} onClick={() => setLocale('pt-BR')}>PT</button>
      <span>/</span>
      <button aria-pressed={locale === 'en-US'} onClick={() => setLocale('en-US')}>EN</button>
    </div>
  </header>
}
