import { profile } from '../../../shared/config/profile'
import { useI18n } from '../../../shared/i18n'
import { SectionHeading } from '../../../shared/ui/SectionHeading'
import { BackToTop } from '../../../widgets/back-to-top/BackToTop'
import { Contact } from '../../../widgets/contact/Contact'
import { Education } from '../../../widgets/education/Education'
import { Hero } from '../../../widgets/hero/Hero'
import { Leadership } from '../../../widgets/leadership/Leadership'
import { Navigation } from '../../../widgets/navigation/Navigation'
import { SkillsGrid } from '../../../widgets/skills/SkillsGrid'
import { SoftSkills } from '../../../widgets/soft-skills/SoftSkills'
import { Timeline } from '../../../widgets/timeline/Timeline'
import './home-page.css'

export function HomePage() {
  const { copy } = useI18n()

  return (
    <main className="portfolio">
      <Navigation />
      <Hero />

      <section className="about section" id="sobre">
        <SectionHeading eyebrow={copy.about.eyebrow} title={copy.about.title} />
        <div className="about-copy">
          <p className="lead">{copy.about.lead}</p>
          {copy.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="impact-strip">
          {copy.about.impact.map((item) => (
            <div key={item.label}>
              <b>{item.value}</b>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section trajectory" id="trajetoria">
        <SectionHeading
          eyebrow={copy.path.eyebrow}
          title={copy.path.title}
          description={copy.path.description}
        />
        <Timeline />
      </section>

      <section className="section competencies" id="competencias">
        <SectionHeading eyebrow={copy.skills.eyebrow} title={copy.skills.title} />
        <SkillsGrid />
      </section>

      <section className="section soft-skills">
        <SectionHeading eyebrow={copy.softSkills.eyebrow} title={copy.softSkills.title} />
        <SoftSkills />
      </section>

      <section className="education section" id="formacao">
        <SectionHeading eyebrow={copy.education.eyebrow} title={copy.education.title} />
        <Education />
      </section>

      <section className="leadership-section section">
        <Leadership />
      </section>

      <Contact />

      <footer>
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>{copy.footer}</span>
      </footer>
      <BackToTop />
    </main>
  )
}
