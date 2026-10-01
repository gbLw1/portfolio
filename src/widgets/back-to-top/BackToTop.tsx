import { useEffect, useState } from 'react'
import { useI18n } from '../../shared/i18n'
import './back-to-top.css'

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const { copy } = useI18n()

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 360)

    window.addEventListener('scroll', updateVisibility, { passive: true })
    updateVisibility()

    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  if (!isVisible) return null

  return (
    <button
      type="button"
      className="back-to-top"
      aria-label={copy.actions.backToTop}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      ↑
    </button>
  )
}
