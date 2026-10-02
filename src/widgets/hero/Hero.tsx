import { useI18n } from '../../shared/i18n'
import './hero.css'

export function Hero() {
  const { copy, locale } = useI18n()
  const resumeFilename = locale === 'pt-BR'
    ? 'gabriel-henrique-grassi-curriculo.pdf'
    : 'gabriel-henrique-grassi-resume-en-us.pdf'
  const resumeUrl = `${import.meta.env.BASE_URL}curriculo/${resumeFilename}`

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
        <div className="hero-actions">
          <a href={resumeUrl} download className="resume-download" aria-label={copy.hero.downloadResumeAriaLabel}>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M12 3v11m0 0 4-4m-4 4-4-4M5 19h14" />
            </svg>
            {copy.hero.downloadResume}
          </a>
          <a href="#trajetoria" className="scroll-cue">
            {copy.hero.cue}
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M12 3v11m0 0 4-4m-4 4-4-4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
