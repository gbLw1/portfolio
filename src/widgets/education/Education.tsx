import { useI18n } from '../../shared/i18n'

export function Education() {
  const { copy } = useI18n()

  return <ol className="education-list">{copy.education.items.map((item) => <li key={`${item.institution}-${item.title}`}>
    <p className="education-period">{item.period}</p>
    <div>
      <p className="education-institution">{item.institution}</p>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      {item.credentialUrl && <a href={item.credentialUrl} target="_blank" rel="noreferrer">{copy.education.credentialLabel} ↗</a>}
    </div>
  </li>)}</ol>
}
