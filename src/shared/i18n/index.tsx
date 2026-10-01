import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { messages } from './messages'
import type { Copy, Locale } from './types'

type I18nValue={locale:Locale;copy:Copy;setLocale:(locale:Locale)=>void}
const I18nContext=createContext<I18nValue|null>(null)
const storageKey='gabriel-grassi:locale'
export function I18nProvider({children}:{children:ReactNode}){const[locale,setLocale]=useState<Locale>(()=>localStorage.getItem(storageKey)==='en-US'?'en-US':'pt-BR');useEffect(()=>{const meta=messages[locale].meta;localStorage.setItem(storageKey,locale);document.documentElement.lang=locale;document.title=meta.title;document.querySelector('meta[name="description"]')?.setAttribute('content',meta.description)},[locale]);const value=useMemo(()=>({locale,copy:messages[locale],setLocale}),[locale]);return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>}
export function useI18n(){const context=useContext(I18nContext);if(!context)throw new Error('useI18n must be used inside I18nProvider');return context}
