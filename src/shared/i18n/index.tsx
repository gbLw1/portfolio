import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { messages } from './messages'
import type { Copy, Locale } from './types'
import { getLocaleFromHash, translateHash } from '../config/sections'

type I18nValue = {
  locale: Locale
  copy: Copy
  setLocale: (locale: Locale) => void
}

const I18nContext = createContext<I18nValue | null>(null)
const storageKey = 'gabriel-grassi:locale'

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)

  const changeLocale = (nextLocale: Locale) => {
    const nextHash = translateHash(window.location.hash, nextLocale)

    if (nextHash !== window.location.hash) {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}${nextHash}`)
    }

    setLocale(nextLocale)
  }

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

  useEffect(() => {
    const syncLocaleWithHash = () => {
      const hashLocale = getLocaleFromHash(window.location.hash)

      if (hashLocale && hashLocale !== locale) setLocale(hashLocale)
    }

    window.addEventListener('hashchange', syncLocaleWithHash)
    return () => window.removeEventListener('hashchange', syncLocaleWithHash)
  }, [locale])

  useEffect(() => {
    const id = window.location.hash.replace(/^#/, '')

    if (getLocaleFromHash(window.location.hash) === locale && id) {
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView())
    }
  }, [locale])

  const value = useMemo(() => ({ locale, copy: messages[locale], setLocale: changeLocale }), [locale])

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
  const hashLocale = getLocaleFromHash(window.location.hash)
  if (hashLocale) return hashLocale

  const savedLocale = localStorage.getItem(storageKey)

  if (savedLocale === 'pt-BR' || savedLocale === 'en-US') return savedLocale

  const browserLocales = navigator.languages.length ? navigator.languages : [navigator.language]
  return browserLocales.some((locale) => locale.toLowerCase().startsWith('pt')) ? 'pt-BR' : 'en-US'
}
