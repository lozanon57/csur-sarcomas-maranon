import React from 'react'
import { Link } from 'react-router-dom'
import { Search, GitBranch, FlaskConical, BookOpen, Info, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { useAppI18n } from '../App'

const MODULES = [
  { to: '/buscador',  icon: Search,       color: 'bg-primary-700', label_key: 'home.buscador_title',  desc_key: 'home.buscador_desc' },
  { to: '/decision',  icon: GitBranch,    color: 'bg-csur-teal',   label_key: 'home.decision_title',  desc_key: 'home.decision_desc' },
  { to: '/trials',    icon: FlaskConical, color: 'bg-csur-purple',  label_key: 'home.trials_title',    desc_key: 'home.trials_desc' },
  { to: '/guias',     icon: BookOpen,     color: 'bg-csur-amber',  label_key: 'home.guias_title',     desc_key: 'home.guias_desc' },
  { to: '/about',     icon: Info,         color: 'bg-gray-600',    label_key: 'home.about_title',     desc_key: 'home.about_desc' },
]

export default function PageHome() {
  const { t } = useAppI18n()

  return (
    <div className="p-4 space-y-6 animate-fade-in">
      {/* Hero */}
      <div className="card bg-primary-800 text-white p-6">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
            <span className="text-2xl font-bold text-white">C</span>
          </div>
          <div>
            <h1 className="text-xl font-bold leading-tight">{t('home.title')}</h1>
            <p className="text-blue-200 text-sm mt-1 leading-snug">{t('home.subtitle')}</p>
            <p className="text-blue-300 text-xs mt-1">{t('home.hospital')}</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {['NCCN v1.2025', 'ESMO 2025', 'WHO 2020', 'AJCC 8ª'].map(tag => (
            <span key={tag} className="px-2 py-0.5 bg-white/15 rounded-full text-xs text-blue-100">{tag}</span>
          ))}
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { n: '28+', label: 'Sarcomas' },
          { n: '15+', label: 'Ensayos' },
          { n: '6', label: 'Algoritmos' },
        ].map(s => (
          <div key={s.label} className="card p-3 text-center">
            <p className="text-2xl font-bold text-primary-700">{s.n}</p>
            <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Modules */}
      <div>
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">{t('home.modules')}</h2>
        <div className="grid grid-cols-1 gap-3">
          {MODULES.map(m => (
            <Link key={m.to} to={m.to} className="card flex items-center gap-4 p-4 hover:shadow-md transition-all active:scale-98">
              <div className={`w-11 h-11 rounded-xl ${m.color} flex items-center justify-center flex-shrink-0`}>
                <m.icon size={20} className="text-white" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-gray-900 text-sm">{t(m.label_key)}</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-snug">{t(m.desc_key)}</p>
              </div>
              <svg className="w-4 h-4 text-gray-300 flex-shrink-0 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </div>

      {/* Status bar */}
      <div className="card p-3">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <CheckCircle2 size={14} className="text-green-500 flex-shrink-0" />
          <span>{t('home.last_update')}</span>
        </div>
        <div className="mt-1 flex items-center gap-2 text-xs text-gray-400">
          <span>{t('home.guidelines_ver')}</span>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="flex gap-2 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800">
        <AlertTriangle size={14} className="flex-shrink-0 mt-0.5 text-amber-600" />
        <p>{t('home.disclaimer')}</p>
      </div>
    </div>
  )
}
