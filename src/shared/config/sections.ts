import type { Locale } from '../i18n/types'

export type SectionKey = 'home' | 'about' | 'experience' | 'skills' | 'education' | 'contact'

const sectionIds: Record<Locale, Record<SectionKey, string>> = {
  'pt-BR': {
    home: 'inicio',
    about: 'sobre',
    experience: 'trajetoria',
    skills: 'competencias',
    education: 'formacao',
    contact: 'contato',
  },
  'en-US': {
    home: 'home',
    about: 'about',
    experience: 'experience',
    skills: 'skills',
    education: 'education',
    contact: 'contact',
  },
}

export function getSectionIds(locale: Locale) {
  return sectionIds[locale]
}

export function getLocaleFromHash(hash: string): Locale | null {
  const id = hash.replace(/^#/, '')

  for (const locale of Object.keys(sectionIds) as Locale[]) {
    if (Object.values(sectionIds[locale]).includes(id)) return locale
  }

  return null
}

export function translateHash(hash: string, locale: Locale) {
  const id = hash.replace(/^#/, '')
  const key = (Object.keys(sectionIds['pt-BR']) as SectionKey[]).find((sectionKey) => (
    sectionIds['pt-BR'][sectionKey] === id || sectionIds['en-US'][sectionKey] === id
  ))

  return key ? `#${sectionIds[locale][key]}` : hash
}
