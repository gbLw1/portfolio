import { useState } from 'react'
import { useI18n } from '../../shared/i18n'

export function Timeline() {
  const { copy } = useI18n()
  const [openCaseStudy, setOpenCaseStudy] = useState<string | null>(null)

  return (
    <ol className="timeline">
      {copy.path.items.map((item) => (
        <li className={openCaseStudy === item.company ? 'is-case-study-open' : undefined} key={item.company}>
          <div className="timeline-meta">
            <p className="timeline-period">{item.period}</p>
            <button
              aria-expanded={openCaseStudy === item.company}
              className="timeline-case-link"
              onClick={() => setOpenCaseStudy((current) => current === item.company ? null : item.company)}
              type="button"
            >
              {copy.path.caseStudyLabel}<span aria-hidden="true">→</span>
            </button>
          </div>
          <div className="timeline-content">
            <p className="timeline-company">
              {item.company}<span> — {item.role}</span>
            </p>
            <p>{item.text}</p>
            <div aria-hidden={openCaseStudy !== item.company} className="timeline-case-study">
              <div className="timeline-case-study-inner">
                {item.caseStudies.map((caseStudy) => (
                  <section className="timeline-case-study-item" key={caseStudy.title}>
                    <h3>{caseStudy.title}</h3>
                    <dl>
                      <div><dt>{copy.path.contextLabel}</dt><dd>{caseStudy.context}</dd></div>
                      <div><dt>{copy.path.approachLabel}</dt><dd>{caseStudy.approach}</dd></div>
                      <div><dt>{copy.path.impactLabel}</dt><dd>{caseStudy.impact}</dd></div>
                    </dl>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}
