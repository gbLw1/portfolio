export type Locale = 'pt-BR' | 'en-US'

export type Copy = {
  meta: { title: string; description: string }
  nav: { about: string; education: string; path: string; skills: string; contact: string; linkedin: string }
  actions: { backToTop: string }
  hero: {
    availability: string
    proofAriaLabel: string
    title: string
    accent: string
    tail: string
    summary: string
    cue: string
    location: string
    highlights: string[]
  }
  about: { eyebrow: string; title: string; lead: string; paragraphs: string[]; impact: { value: string; label: string }[] }
  education: { eyebrow: string; title: string; credentialLabel: string; items: { period: string; institution: string; title: string; description: string; credentialUrl?: string }[] }
  path: { eyebrow: string; title: string; description: string; items: { period: string; company: string; role: string; text: string }[] }
  skills: { eyebrow: string; title: string; groups: { label: string; items: string[] }[] }
  softSkills: { eyebrow: string; title: string; groups: { label: string; items: string[] }[] }
  leadership: {
    eyebrow: string
    title: string
    intro: string
    areas: { label: string; text: string }[]
  }
  contact: { eyebrow: string; title: string; accent: string; links: string[] }
  footer: string
}
