import { useState, useCallback } from 'react'
import { TRANSLATIONS } from '../data/i18n'
import type { Idioma } from '../types'

export function useI18n() {
  const [lang, setLang] = useState<Idioma>(() => {
    const stored = localStorage.getItem('csur-lang')
    return (stored === 'en' || stored === 'es') ? stored : 'es'
  })

  const toggleLang = useCallback(() => {
    setLang(prev => {
      const next = prev === 'es' ? 'en' : 'es'
      localStorage.setItem('csur-lang', next)
      return next
    })
  }, [])

  const t = useCallback((key: string): string => {
    const parts = key.split('.')
    let current: Record<string, unknown> = TRANSLATIONS[lang] as Record<string, unknown>
    for (const part of parts) {
      if (current && typeof current === 'object' && part in current) {
        current = current[part] as Record<string, unknown>
      } else {
        return key
      }
    }
    return typeof current === 'string' ? current : key
  }, [lang])

  return { lang, toggleLang, t }
}
