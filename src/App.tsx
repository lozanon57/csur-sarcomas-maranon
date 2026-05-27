import React, { createContext, useContext, useState } from 'react'
import { HashRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom'
import { Home, Search, GitBranch, FlaskConical, BookOpen, Info, Globe } from 'lucide-react'
import { useI18n } from './hooks/useI18n'

import PageHome from './pages/PageHome'
import PageBuscador from './pages/PageBuscador'
import PageDecision from './pages/PageDecision'
import PageTrials from './pages/PageTrials'
import PageGuias from './pages/PageGuias'
import PageAbout from './pages/PageAbout'

// ─── i18n Context ─────────────────────────────────────────────────────────────
export const I18nContext = createContext<ReturnType<typeof useI18n> | null>(null)
export function useAppI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useAppI18n must be used within I18nProvider')
  return ctx
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
function BottomNav({ t }: { t: (k: string) => string }) {
  const loc = useLocation()
  const tabs = [
    { to: '/',          icon: Home,         label: t('nav.home'),     exact: true },
    { to: '/buscador',  icon: Search,       label: t('nav.buscador') },
    { to: '/decision',  icon: GitBranch,    label: t('nav.decision') },
    { to: '/trials',    icon: FlaskConical, label: t('nav.trials') },
    { to: '/guias',     icon: BookOpen,     label: t('nav.guias') },
  ]
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 pb-safe no-print">
      <div className="flex items-stretch h-16">
        {tabs.map(tab => {
          const active = tab.exact ? loc.pathname === tab.to : loc.pathname.startsWith(tab.to)
          return (
            <NavLink
              key={tab.to}
              to={tab.to}
              className={`flex-1 flex flex-col items-center justify-center gap-0.5 text-xs transition-colors
                ${active ? 'text-primary-700 font-semibold' : 'text-gray-500 hover:text-primary-600'}`}
            >
              <tab.icon size={20} strokeWidth={active ? 2.5 : 1.8} />
              <span className="truncate max-w-full px-0.5">{tab.label}</span>
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}

function TopBar({ t, lang, toggleLang }: { t: (k: string) => string; lang: string; toggleLang: () => void }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-800 text-white shadow-md pt-safe no-print">
      <div className="flex items-center px-4 h-14 max-w-screen-lg mx-auto">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <div className="min-w-0">
            <p className="font-bold text-sm leading-tight truncate">CSUR Sarcomas</p>
            <p className="text-xs text-blue-200 leading-tight truncate">HGUGM · Madrid</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <NavLink to="/about" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <Info size={18} />
          </NavLink>
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 px-2 py-1.5 hover:bg-white/10 rounded-lg transition-colors text-xs font-medium"
            title="Cambiar idioma / Switch language"
          >
            <Globe size={16} />
            <span>{lang.toUpperCase()}</span>
          </button>
        </div>
      </div>
    </header>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const i18n = useI18n()
  const { t, lang, toggleLang } = i18n

  return (
    <I18nContext.Provider value={i18n}>
      <HashRouter>
        <TopBar t={t} lang={lang} toggleLang={toggleLang} />
        <div className="pt-14 main-content min-h-screen bg-gray-50">
          <div className="max-w-screen-lg mx-auto">
            <Routes>
              <Route path="/"          element={<PageHome />} />
              <Route path="/buscador"  element={<PageBuscador />} />
              <Route path="/decision"  element={<PageDecision />} />
              <Route path="/trials"    element={<PageTrials />} />
              <Route path="/guias"     element={<PageGuias />} />
              <Route path="/about"     element={<PageAbout />} />
            </Routes>
          </div>
        </div>
        <BottomNav t={t} />
      </HashRouter>
    </I18nContext.Provider>
  )
}
