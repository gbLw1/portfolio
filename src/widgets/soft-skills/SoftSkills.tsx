import { useI18n } from '../../shared/i18n'

export function SoftSkills() {
  const { copy } = useI18n()

  return (
    <div className="skills-grid">
      {copy.softSkills.groups.map((group) => (
        <article className="skill-card" key={group.label}>
          <h3>{group.label}</h3>
          <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
      ))}
    </div>
  )
}
