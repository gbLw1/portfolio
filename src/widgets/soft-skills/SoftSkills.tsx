import { useI18n } from '../../shared/i18n'
import './soft-skills.css'

export function SoftSkills() {
  const { copy } = useI18n()

  return (
    <div className="soft-skills-list">
      {copy.softSkills.groups.map((group) => (
        <article className="soft-skills-row" key={group.label}>
          <h3>{group.label}</h3>
          <ul className="soft-skills-keywords">
            {group.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
      ))}
    </div>
  )
}
