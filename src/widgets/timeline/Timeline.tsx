import { useI18n } from '../../shared/i18n'

export function Timeline() {
  const { copy } = useI18n()

  return (
    <ol className="timeline">
      {copy.path.items.map((item) => (
        <li key={item.company}>
          <p className="timeline-period">{item.period}</p>
          <div>
            <p className="timeline-company">
              {item.company}<span> — {item.role}</span>
            </p>
            <p>{item.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
