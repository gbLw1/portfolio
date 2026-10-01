import { useI18n } from '../../shared/i18n'
import './leadership.css'

export function Leadership() {
  const { copy } = useI18n()

  return (
    <section className="leadership" aria-labelledby="leadership-title">
      <div className="leadership-intro">
        <p className="eyebrow">{copy.leadership.eyebrow}</p>
        <h3 id="leadership-title">{copy.leadership.title}</h3>
        <p>{copy.leadership.intro}</p>
      </div>
      <ul className="leadership-areas">
        {copy.leadership.areas.map((area) => (
          <li key={area.label}>
            <strong>{area.label}</strong>
            <span>{area.text}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
