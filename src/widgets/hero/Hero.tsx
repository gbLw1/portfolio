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
    </section>
  )
}
