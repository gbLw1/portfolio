import { profile } from '../../shared/config/profile'
import { useI18n } from '../../shared/i18n'
import './hero.css'

export function Hero() {
  const { copy } = useI18n()

  return (
    <section className="hero" id="inicio">
      <div className="hero-main">
        <p className="hero-kicker">{copy.hero.availability}</p>
        <h1>
          {copy.hero.title}
          <em>{copy.hero.accent}</em>
        </h1>
        <p className="hero-tail">{copy.hero.tail}</p>
        <p className="hero-summary">{copy.hero.summary}</p>
        <a href="#trajetoria" className="scroll-cue">
          {copy.hero.cue}<span>↓</span>
        </a>
      </div>
      <aside className="hero-proof" aria-label={copy.hero.proofAriaLabel}>
        <ul>
          {copy.hero.highlights.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </aside>
      <aside className="hero-meta">
        <span>{copy.hero.location}</span>
        <span>{profile.startedProfessionally} →</span>
      </aside>
    </section>
  )
}
