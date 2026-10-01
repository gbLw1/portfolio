import { useI18n } from '../../shared/i18n'
import './skills-grid.css'

export function SkillsGrid() {
  const { copy } = useI18n()

  return (
    <div className="expertise-list">
      {copy.skills.groups.map((group) => (
        <article className="expertise-row" key={group.label}>
          <h3>{group.label}</h3>
          <ul className="expertise-keywords">
            {group.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
      ))}
    </div>
  )
}
