import React, { useState } from 'react'
import { Search, Filter, X, ChevronDown, ChevronUp, AlertCircle, Microscope, FlaskConical, BookOpen, Lightbulb, Award, ShieldCheck } from 'lucide-react'
import { useAppI18n } from '../App'
import { useSearch } from '../hooks/useSearch'
import type { Sarcoma, Comportamiento, EnsayoHistorico } from '../types'
import { getEnsayosHistoricosForSarcoma } from '../data/ensayos_historicos'

// ─── Behaviour badge ──────────────────────────────────────────────────────────
function BehaviourBadge({ c }: { c: Comportamiento }) {
  const map: Record<Comportamiento, string> = {
    maligno: 'tag-maligno', benigno: 'tag-benigno', intermedio: 'tag-intermedio'
  }
  const labels: Record<Comportamiento, string> = {
    maligno: 'Maligno', benigno: 'Benigno', intermedio: 'Intermedio'
  }
  return <span className={map[c]}>{labels[c]}</span>
}

function EstirpeBadge({ e }: { e: Sarcoma['estirpe'] }) {
  const map = { tejidos_blandos: 'tag-blandos', oseo: 'tag-oseo', gist: 'tag-gist', mixto: 'tag-blandos' }
  const labels = { tejidos_blandos: 'T. Blandos', oseo: 'Óseo', gist: 'GIST', mixto: 'Mixto' }
  return <span className={map[e]}>{labels[e]}</span>
}

// ─── Tumour card ─────────────────────────────────────────────────────────────
function TumourCard({ s, onClick }: { s: Sarcoma; onClick: () => void }) {
  return (
    <button onClick={onClick} className="card w-full text-left p-4 hover:shadow-md transition-all active:scale-98 animate-fade-in">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
          <Microscope size={16} className="text-primary-700" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-900 text-sm leading-snug">{s.nombre}</p>
          {s.nombre_alternativo && s.nombre_alternativo.length > 0 && (
            <p className="text-xs text-gray-400 mt-0.5 truncate">{s.nombre_alternativo.join(' · ')}</p>
          )}
          <div className="flex flex-wrap gap-1.5 mt-2">
            <BehaviourBadge c={s.comportamiento} />
            <EstirpeBadge e={s.estirpe} />
            {s.poblacion === 'pediatrico' && <span className="badge bg-orange-100 text-orange-800">Pediátrico</span>}
          </div>
          {/* Key molecular marker */}
          {s.marcadores_moleculares.length > 0 && (
            <p className="text-xs text-primary-600 mt-1.5 font-mono truncate">
              {s.marcadores_moleculares[0].alteracion}
            </p>
          )}
        </div>
      </div>
    </button>
  )
}

// ─── Evidence level badge ─────────────────────────────────────────────────────
const EVIDENCE_COLOR: Record<string, string> = {
  Ia:  'bg-green-100 text-green-800',
  Ib:  'bg-green-50 text-green-700',
  IIa: 'bg-blue-100 text-blue-800',
  IIb: 'bg-blue-50 text-blue-700',
  III: 'bg-yellow-100 text-yellow-800',
  IV:  'bg-gray-100 text-gray-600',
}

// ─── Landmark trial card ──────────────────────────────────────────────────────
function LandmarkTrialCard({ trial }: { trial: EnsayoHistorico }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="border border-indigo-100 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setExpanded(v => !v)}
        className="w-full text-left p-3 flex items-start gap-3 hover:bg-indigo-50/50 transition-colors"
      >
        <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
          <Award size={14} className="text-indigo-700" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-xs text-indigo-900">{trial.nombre}</span>
            <span className="text-xs text-gray-400">{trial.año}</span>
            <span className={`badge text-xs ${EVIDENCE_COLOR[trial.nivel_evidencia] ?? 'bg-gray-100 text-gray-600'}`}>
              Evidencia {trial.nivel_evidencia}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-0.5 italic leading-snug">{trial.publicacion}</p>
          {!expanded && (
            <p className="text-xs text-indigo-700 mt-1 font-medium leading-snug line-clamp-2">{trial.resultado_clave}</p>
          )}
        </div>
        {expanded ? <ChevronUp size={14} className="text-gray-400 flex-shrink-0 mt-1" /> : <ChevronDown size={14} className="text-gray-400 flex-shrink-0 mt-1" />}
      </button>

      {expanded && (
        <div className="px-3 pb-3 space-y-2 border-t border-indigo-50">
          <div className="pt-2">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Pregunta clínica</p>
            <p className="text-xs text-gray-700 italic leading-relaxed">{trial.pregunta_clinica}</p>
          </div>
          {trial.n_pacientes && (
            <p className="text-xs text-gray-500">n = <span className="font-semibold text-gray-700">{trial.n_pacientes}</span> pacientes · {trial.tipo_estudio}</p>
          )}
          <div className="bg-indigo-50 rounded-lg p-2.5">
            <p className="text-xs font-semibold text-indigo-800 mb-1">Resultado clave</p>
            <p className="text-xs text-indigo-900 leading-relaxed">{trial.resultado_clave}</p>
          </div>
          <div className="bg-amber-50 rounded-lg p-2.5 flex gap-2">
            <Lightbulb size={14} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-amber-800 mb-0.5">Impacto en práctica clínica</p>
              <p className="text-xs text-amber-900 leading-relaxed">{trial.impacto_practica}</p>
            </div>
          </div>
          <p className="text-xs text-gray-400 leading-snug">{trial.cita_completa}</p>
        </div>
      )}
    </div>
  )
}

// ─── Source footer ────────────────────────────────────────────────────────────
function SourceFooter() {
  return (
    <div className="mx-3 mt-3 mb-1 flex items-start gap-2 p-3 bg-green-50 border border-green-100 rounded-xl">
      <ShieldCheck size={13} className="text-green-600 flex-shrink-0 mt-0.5" />
      <div>
        <p className="text-xs font-semibold text-green-800">Contenido validado por experto clínico</p>
        <p className="text-xs text-green-700 mt-0.5 leading-relaxed">
          Basado en: <span className="font-medium">NCCN v1.2025 · ESMO 2025 · WHO 5ª ed. 2020 · AJCC 8ª ed.</span>
          <br />Revisado por Dr. Pablo Lozano Lominchar — MSKCC Fellow · CSUR Sarcomas HGUGM
        </p>
      </div>
    </div>
  )
}

// ─── Detail section ───────────────────────────────────────────────────────────
function Section({ title, icon, children }: { title: string; icon?: React.ReactNode; children: React.ReactNode }) {
  const [open, setOpen] = useState(true)
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button onClick={() => setOpen(v => !v)} className="flex items-center justify-between w-full py-3 px-4 text-left">
        <span className="flex items-center gap-2 text-sm font-semibold text-gray-800">
          {icon}
          {title}
        </span>
        {open ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
      </button>
      {open && <div className="px-4 pb-4 text-sm text-gray-700 space-y-1">{children}</div>}
    </div>
  )
}

// ─── Tab navigation for detail panel ─────────────────────────────────────────
type DetailTab = 'overview' | 'treatment' | 'evidence'

// ─── Detail panel ─────────────────────────────────────────────────────────────
function TumourDetail({ s, onClose, t }: { s: Sarcoma; onClose: () => void; t: (k: string) => string }) {
  const [tab, setTab] = useState<DetailTab>('overview')
  const landmarkTrials = getEnsayosHistoricosForSarcoma(s.id)

  const tabs: { id: DetailTab; label: string; icon: React.ReactNode }[] = [
    { id: 'overview',   label: 'Biología',     icon: <Microscope size={13} /> },
    { id: 'treatment',  label: 'Tratamiento',  icon: <FlaskConical size={13} /> },
    { id: 'evidence',   label: `Evidencia${landmarkTrials.length > 0 ? ` (${landmarkTrials.length})` : ''}`, icon: <BookOpen size={13} /> },
  ]

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-primary-800 text-white pt-safe px-4 pb-0">
        <div className="flex items-center gap-3 mt-3 pb-3">
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0">
            <X size={20} />
          </button>
          <div className="flex-1 min-w-0">
            <h2 className="font-bold text-base leading-snug line-clamp-2">{s.nombre}</h2>
            <div className="flex flex-wrap gap-1.5 mt-1">
              <BehaviourBadge c={s.comportamiento} />
              <EstirpeBadge e={s.estirpe} />
              {s.poblacion === 'pediatrico' && <span className="badge bg-orange-400/30 text-orange-100 text-xs">Pediátrico</span>}
              <span className="flex items-center gap-1 badge bg-green-400/20 text-green-200 text-xs">
                <ShieldCheck size={10} />Revisado · NCCN/ESMO 2025
              </span>
            </div>
          </div>
        </div>

        {/* Tab bar */}
        <div className="flex gap-0 border-t border-white/20">
          {tabs.map(tb => (
            <button
              key={tb.id}
              onClick={() => setTab(tb.id)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold transition-colors border-b-2
                ${tab === tb.id
                  ? 'border-white text-white'
                  : 'border-transparent text-blue-300 hover:text-blue-100'}`}
            >
              {tb.icon}
              {tb.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-6">

        {/* ── TAB: OVERVIEW (Biology) ── */}
        {tab === 'overview' && (
          <>
            <div className="card mx-3 mt-3 divide-y divide-gray-100">
              <Section title={t('buscador.epidemiologia')} icon={<span className="text-base">📊</span>}>
                <p className="leading-relaxed">{s.epidemiologia}</p>
              </Section>
              <Section title={t('buscador.histologia')} icon={<span className="text-base">🔬</span>}>
                <p className="leading-relaxed">{s.histologia}</p>
              </Section>
              <Section title={t('buscador.ihq')} icon={<span className="text-base">🧫</span>}>
                <div className="flex flex-wrap gap-1.5">
                  {s.ihq.map(m => (
                    <span key={m} className="badge bg-blue-50 text-blue-800 font-mono text-xs">{m}</span>
                  ))}
                </div>
              </Section>
              <Section title={t('buscador.molecular')} icon={<span className="text-base">🧬</span>}>
                <div className="space-y-3">
                  {s.marcadores_moleculares.map((m, i) => (
                    <div key={i} className="bg-purple-50 rounded-lg p-3">
                      <p className="font-mono font-semibold text-purple-900 text-xs">{m.alteracion}</p>
                      {m.frecuencia && <p className="text-xs text-purple-700 mt-0.5">Frecuencia: {m.frecuencia}</p>}
                      {m.relevancia_terapeutica && (
                        <p className="text-xs text-purple-800 mt-1 leading-snug">{m.relevancia_terapeutica}</p>
                      )}
                    </div>
                  ))}
                  {s.marcadores_moleculares.length === 0 && (
                    <p className="text-xs text-gray-400 italic">Sin alteraciones moleculares características conocidas.</p>
                  )}
                </div>
              </Section>
              <Section title={t('buscador.estadificacion')} icon={<span className="text-base">📋</span>}>
                <p className="leading-relaxed">{s.estadificacion}</p>
              </Section>
              <Section title={t('buscador.pronostico')} icon={<span className="text-base">📈</span>}>
                <p className="leading-relaxed">{s.pronostico}</p>
              </Section>
              {s.perlas_clinicas.length > 0 && (
                <Section title={t('buscador.perlas')} icon={<span className="text-base">⭐</span>}>
                  <div className="space-y-2">
                    {s.perlas_clinicas.map((p, i) => (
                      <div key={i} className="flex gap-2 p-2.5 bg-amber-50 rounded-lg border border-amber-100">
                        <Lightbulb size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
                        <p className="text-xs leading-relaxed text-amber-900">{p}</p>
                      </div>
                    ))}
                  </div>
                </Section>
              )}
            </div>
            <SourceFooter />
          </>
        )}

        {/* ── TAB: TREATMENT ── */}
        {tab === 'treatment' && (
          <>
            <div className="card mx-3 mt-3 divide-y divide-gray-100">
              <Section title={t('buscador.primera_linea')} icon={<span className="text-base">💊</span>}>
                <p className="leading-relaxed">{s.tratamiento_primera_linea}</p>
              </Section>
              {s.tratamiento_adyuvante && (
                <Section title={t('buscador.adyuvante')} icon={<span className="text-base">🔄</span>}>
                  <p className="leading-relaxed">{s.tratamiento_adyuvante}</p>
                </Section>
              )}
              {s.tratamiento_paliativo && (
                <Section title={t('buscador.paliativo')} icon={<span className="text-base">🏥</span>}>
                  <p className="leading-relaxed">{s.tratamiento_paliativo}</p>
                </Section>
              )}
              <Section title={t('buscador.seguimiento')} icon={<span className="text-base">📅</span>}>
                <p className="leading-relaxed">{s.seguimiento}</p>
              </Section>
            </div>
            <SourceFooter />
          </>
        )}

        {/* ── TAB: EVIDENCE (Landmark trials) ── */}
        {tab === 'evidence' && (
          <div className="mx-3 mt-3 space-y-3">
            <div className="flex items-center gap-2 px-1">
              <BookOpen size={15} className="text-indigo-600" />
              <p className="text-xs font-semibold text-gray-600">Ensayos que cambiaron la práctica clínica</p>
            </div>
            {landmarkTrials.length === 0 ? (
              <div className="card p-6 text-center">
                <p className="text-2xl mb-2">📚</p>
                <p className="text-sm text-gray-500">No hay ensayos históricos específicos registrados para este subtipo.</p>
                <p className="text-xs text-gray-400 mt-1">Consulta las secciones de STS generales para evidencia aplicable.</p>
              </div>
            ) : (
              <>
                {/* Universal STS trials */}
                {(() => {
                  const universal = landmarkTrials.filter(e => e.histologias.includes('all_sts'))
                  const specific  = landmarkTrials.filter(e => !e.histologias.includes('all_sts'))
                  return (
                    <>
                      {specific.length > 0 && (
                        <>
                          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-500 px-1">Específicos de este subtipo</p>
                          {specific.map(trial => <LandmarkTrialCard key={trial.id} trial={trial} />)}
                        </>
                      )}
                      {universal.length > 0 && (
                        <>
                          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 px-1 mt-4">Aplicables a STS en general</p>
                          {universal.map(trial => <LandmarkTrialCard key={trial.id} trial={trial} />)}
                        </>
                      )}
                    </>
                  )
                })()}
                <p className="text-xs text-gray-400 text-center pt-2">
                  Ordenados cronológicamente · Fuentes: PubMed, NCCN 2025, ESMO 2025
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Category chips for quick browsing ───────────────────────────────────────
const QUICK_CATEGORIES = [
  { label: 'Liposarcoma', query: 'liposarcoma' },
  { label: 'Leiomiosarcoma', query: 'leiomiosarcoma' },
  { label: 'GIST', query: 'GIST' },
  { label: 'Ewing', query: 'ewing' },
  { label: 'Osteosarcoma', query: 'osteosarcoma' },
  { label: 'Desmoide', query: 'desmoide' },
  { label: 'Condrosarcoma', query: 'condrosarcoma' },
  { label: 'MDM2', query: 'MDM2' },
  { label: 'NTRK', query: 'NTRK' },
  { label: 'CDK4', query: 'CDK4' },
]

// ─── Main page ────────────────────────────────────────────────────────────────
export default function PageBuscador() {
  const { t } = useAppI18n()
  const { filters, results, updateFilter, resetFilters } = useSearch()
  const [selected, setSelected] = useState<Sarcoma | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  if (selected) {
    return <TumourDetail s={selected} onClose={() => setSelected(null)} t={t} />
  }

  const hasActiveFilters = filters.comportamiento !== 'todos' || filters.estirpe !== 'todos' || filters.poblacion !== 'todos'

  return (
    <div className="p-4 space-y-4 animate-fade-in">
      <h1 className="text-xl font-bold text-gray-900">{t('buscador.title')}</h1>

      {/* Search bar */}
      <div className="relative">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="search"
          value={filters.query}
          onChange={e => updateFilter('query', e.target.value)}
          placeholder={t('buscador.placeholder')}
          className="input-field pl-9 pr-10"
        />
        {filters.query && (
          <button onClick={() => updateFilter('query', '')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
            <X size={16} />
          </button>
        )}
      </div>

      {/* Quick categories */}
      {filters.query === '' && (
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 scrollbar-hide">
          {QUICK_CATEGORIES.map(c => (
            <button
              key={c.query}
              onClick={() => updateFilter('query', c.query)}
              className="flex-shrink-0 px-3 py-1.5 bg-primary-50 text-primary-700 rounded-full text-xs font-medium hover:bg-primary-100 transition-colors"
            >
              {c.label}
            </button>
          ))}
        </div>
      )}

      {/* Filter toggle */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setShowFilters(v => !v)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors
            ${hasActiveFilters ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-600'}`}
        >
          <Filter size={15} />
          {t('buscador.filtros')}
          {hasActiveFilters && <span className="w-2 h-2 rounded-full bg-primary-600" />}
        </button>
        <span className="text-sm text-gray-500">
          <b className="text-gray-900">{results.length}</b> {t('buscador.resultados')}
        </span>
      </div>

      {/* Filters panel */}
      {showFilters && (
        <div className="card p-4 space-y-3 animate-slide-up">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">{t('buscador.filtros')}</p>
            <button onClick={() => { resetFilters(); setShowFilters(false) }} className="text-xs text-primary-600">
              {t('common.limpiar')}
            </button>
          </div>
          {/* Comportamiento */}
          <div>
            <p className="text-xs text-gray-500 mb-1.5">Comportamiento</p>
            <div className="flex flex-wrap gap-2">
              {(['todos', 'maligno', 'intermedio', 'benigno'] as const).map(v => (
                <button key={v}
                  onClick={() => updateFilter('comportamiento', v)}
                  className={`px-3 py-1 rounded-full text-xs transition-colors
                    ${filters.comportamiento === v ? 'bg-primary-700 text-white' : 'bg-gray-100 text-gray-700'}`}
                >
                  {t(`buscador.${v}`) || v}
                </button>
              ))}
            </div>
          </div>
          {/* Estirpe */}
          <div>
            <p className="text-xs text-gray-500 mb-1.5">Estirpe</p>
            <div className="flex flex-wrap gap-2">
              {(['todos', 'tejidos_blandos', 'oseo', 'gist'] as const).map(v => (
                <button key={v}
                  onClick={() => updateFilter('estirpe', v)}
                  className={`px-3 py-1 rounded-full text-xs transition-colors
                    ${filters.estirpe === v ? 'bg-primary-700 text-white' : 'bg-gray-100 text-gray-700'}`}
                >
                  {t(`buscador.${v}`) || v}
                </button>
              ))}
            </div>
          </div>
          {/* Poblacion */}
          <div>
            <p className="text-xs text-gray-500 mb-1.5">Población</p>
            <div className="flex flex-wrap gap-2">
              {(['todos', 'adulto', 'pediatrico'] as const).map(v => (
                <button key={v}
                  onClick={() => updateFilter('poblacion', v)}
                  className={`px-3 py-1 rounded-full text-xs transition-colors
                    ${filters.poblacion === v ? 'bg-primary-700 text-white' : 'bg-gray-100 text-gray-700'}`}
                >
                  {t(`buscador.${v}`) || v}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      {results.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <AlertCircle size={32} className="text-gray-300 mb-3" />
          <p className="text-gray-500 text-sm">{t('buscador.sin_resultados')}</p>
          <button onClick={resetFilters} className="mt-3 text-primary-600 text-sm underline">{t('common.limpiar')}</button>
        </div>
      ) : (
        <div className="space-y-2">
          {results.map(s => (
            <TumourCard key={s.id} s={s} onClick={() => setSelected(s)} />
          ))}
        </div>
      )}
    </div>
  )
}
