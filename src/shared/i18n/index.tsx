import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { messages } from './messages'
import type { Copy, Locale } from './types'

type I18nValue = {
  locale: Locale
  copy: Copy
  setLocale: (locale: Locale) => void
}

const I18nContext = createContext<I18nValue | null>(null)
const storageKey = 'gabriel-grassi:locale'

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    const meta = messages[locale].meta

    localStorage.setItem(storageKey, locale)
    document.documentElement.lang = locale
    document.title = meta.title
    updateMeta('meta[name="description"]', meta.description)
    updateMeta('meta[property="og:title"]', meta.title)
    updateMeta('meta[property="og:description"]', meta.description)
    updateMeta('meta[name="twitter:title"]', meta.title)
    updateMeta('meta[name="twitter:description"]', meta.description)
  }, [locale])

  const value = useMemo(() => ({ locale, copy: messages[locale], setLocale }), [locale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)

  if (!context) throw new Error('useI18n must be used inside I18nProvider')
  return context
}

function updateMeta(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute('content', content)
}

function getInitialLocale(): Locale {
  const savedLocale = localStorage.getItem(storageKey)

  if (savedLocale === 'pt-BR' || savedLocale === 'en-US') return savedLocale

  const browserLocales = navigator.languages.length ? navigator.languages : [navigator.language]
  return browserLocales.some((locale) => locale.toLowerCase().startsWith('pt')) ? 'pt-BR' : 'en-US'
}
