import React, { useState, useMemo } from 'react'
import { FlaskConical, ExternalLink, ChevronDown, ChevronUp, CheckCircle2, XCircle, MapPin, AlertCircle, X } from 'lucide-react'
import { useAppI18n } from '../App'
import { ENSAYOS } from '../data/ensayos'
import type { EnsayoClinico, DatosPaciente } from '../types'

// ─── Status badge ─────────────────────────────────────────────────────────────
function StatusBadge({ estado }: { estado: EnsayoClinico['estado'] }) {
  const map = {
    reclutando:          'trial-status-reclutando',
    activo_no_reclutando: 'trial-status-activo',
    completado:          'trial-status-cerrado',
    suspendido:          'trial-status-cerrado',
  }
  const labels = {
    reclutando:           'Reclutando',
    activo_no_reclutando: 'Activo',
    completado:           'Completado',
    suspendido:           'Suspendido',
  }
  return <span className={map[estado]}>{labels[estado]}</span>
}

// ─── Trial card ───────────────────────────────────────────────────────────────
function TrialCard({ ensayo, expanded, onToggle }: {
  ensayo: EnsayoClinico
  expanded: boolean
  onToggle: () => void
}) {
  return (
    <div className="trial-card">
      <button onClick={onToggle} className="w-full text-left">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
            <FlaskConical size={16} className="text-purple-700" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <StatusBadge estado={ensayo.estado} />
              <span className="badge bg-gray-100 text-gray-700">Fase {ensayo.fase}</span>
              {ensayo.espana && (
                <span className="flex items-center gap-1 badge bg-green-100 text-green-800">
                  <MapPin size={10} /> España
                </span>
              )}
            </div>
            <p className="font-semibold text-sm text-gray-900 mt-1.5 leading-snug">{ensayo.titulo_corto}</p>
            <p className="text-xs text-purple-700 font-mono mt-1">{ensayo.farmaco}</p>
            {ensayo.biomarcador_requerido && (
              <p className="text-xs text-amber-700 mt-1">
                <span className="font-semibold">Biomarcador req.: </span>{ensayo.biomarcador_requerido.split(' —')[0]}
              </p>
            )}
          </div>
          {expanded ? <ChevronUp size={16} className="text-gray-400 flex-shrink-0 mt-1" /> : <ChevronDown size={16} className="text-gray-400 flex-shrink-0 mt-1" />}
        </div>
      </button>

      {expanded && (
        <div className="mt-4 pt-4 border-t border-gray-100 space-y-4 animate-slide-up">
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-1">NCT ID</p>
            <p className="text-sm font-mono text-primary-700">{ensayo.nct_id}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-1">Mecanismo</p>
            <p className="text-sm text-gray-700">{ensayo.mecanismo}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-1">Objetivo primario</p>
            <p className="text-sm text-gray-700">{ensayo.objetivo_primario}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-green-700 mb-1.5 flex items-center gap-1">
              <CheckCircle2 size={13} /> Criterios de inclusión
            </p>
            <ul className="space-y-1">
              {ensayo.criterios.filter(c => c.tipo === 'inclusion').map((c, i) => (
                <li key={i} className="flex gap-2 text-xs text-gray-700">
                  <span className="text-green-500 flex-shrink-0 mt-0.5">•</span>
                  {c.descripcion}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-red-600 mb-1.5 flex items-center gap-1">
              <XCircle size={13} /> Criterios de exclusión
            </p>
            <ul className="space-y-1">
              {ensayo.criterios.filter(c => c.tipo === 'exclusion').map((c, i) => (
                <li key={i} className="flex gap-2 text-xs text-gray-700">
                  <span className="text-red-400 flex-shrink-0 mt-0.5">•</span>
                  {c.descripcion}
                </li>
              ))}
            </ul>
          </div>
          {ensayo.notas_clinicas && (
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
              <p className="text-xs font-semibold text-amber-800 mb-1">Nota clínica</p>
              <p className="text-xs text-amber-900 leading-relaxed">{ensayo.notas_clinicas}</p>
            </div>
          )}
          <a
            href={ensayo.url_clinicaltrials}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 btn-primary text-sm w-full justify-center"
          >
            <ExternalLink size={15} />
            Ver en ClinicalTrials.gov
          </a>
        </div>
      )}
    </div>
  )
}

// ─── Eligibility checker ──────────────────────────────────────────────────────
const HISTOLOGIAS_COMUNES = [
  'Liposarcoma bien diferenciado', 'Liposarcoma desdiferenciado', 'Liposarcoma mixoide',
  'Leiomiosarcoma retroperitoneal', 'Leiomiosarcoma uterino', 'Rabdomiosarcoma',
  'GIST', 'Sarcoma sinovial', 'UPS/Sarcoma pleomórfico indiferenciado',
  'Angiosarcoma', 'MPNST', 'Sarcoma epitelioide',
  'Sarcoma de Ewing', 'Osteosarcoma', 'Condrosarcoma', 'Cordoma',
  'Tumor de células gigantes', 'Tumor desmoide', 'Otro sarcoma'
]

const BIOMARCADORES_COMUNES = [
  'MDM2 amplificado', 'CDK4 amplificado', 'FUS-DDIT3 (LPS mixoide)',
  'KIT mutado (exón 11)', 'KIT mutado (exón 9)', 'PDGFRA D842V',
  'PDGFRA no-D842V', 'GIST wild-type', 'NTRK fusión',
  'ALK fusión', 'BRCA1/2 mutación', 'PAX-FOXO1 (RMS alveolar)',
  'EWSR1-FLI1 (Ewing)', 'SS18-SSX (sarcoma sinovial)',
  'SMARCB1/INI1 pérdida', 'H3K27me3 pérdida (MPNST)',
  'IDH1/2 mutación', 'TSC1/TSC2 pérdida', 'CTNNB1 mutación (desmoide)'
]

function ElegibilidadChecker({ onClose }: { onClose: () => void }) {
  const [datos, setDatos] = useState<Partial<DatosPaciente>>({
    tratamientos_previos: [],
    biomarcadores: [],
  })
  const [checked, setChecked] = useState(false)

  const elegibles = useMemo(() => {
    if (!checked) return []
    return ENSAYOS.filter(e => {
      if (!datos.histologia) return true
      const hist = datos.histologia.toLowerCase()
      const matchHist = e.patologia.some(p => p.toLowerCase().includes(hist) || hist.includes(p.toLowerCase()))
      if (!matchHist) return false
      if (datos.biomarcadores && datos.biomarcadores.length > 0) {
        if (e.biomarcador_requerido) {
          const bioReq = e.biomarcador_requerido.toLowerCase()
          const hasMatch = datos.biomarcadores.some(b => bioReq.includes(b.toLowerCase().split(' ')[0]))
          if (!hasMatch) return false
        }
      }
      return true
    })
  }, [checked, datos])

  const toggleBiomarker = (b: string) => {
    setDatos(prev => ({
      ...prev,
      biomarcadores: prev.biomarcadores?.includes(b)
        ? prev.biomarcadores.filter(x => x !== b)
        : [...(prev.biomarcadores ?? []), b]
    }))
    setChecked(false)
  }

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-gray-50">
      <div className="bg-purple-700 text-white pt-safe px-4 pb-4">
        <div className="flex items-center gap-3 mt-3">
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg">
            <X size={20} />
          </button>
          <div>
            <h2 className="font-bold text-base">Verificador de Elegibilidad</h2>
            <p className="text-xs text-purple-200">Identificar ensayos candidatos para el paciente</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {!checked ? (
          <>
            {/* Histology */}
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-2">Histología del tumor *</label>
              <select
                value={datos.histologia ?? ''}
                onChange={e => { setDatos(prev => ({ ...prev, histologia: e.target.value })); setChecked(false) }}
                className="input-field"
              >
                <option value="">Seleccionar histología...</option>
                {HISTOLOGIAS_COMUNES.map(h => <option key={h} value={h}>{h}</option>)}
              </select>
            </div>

            {/* ECOG */}
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-2">ECOG PS</label>
              <div className="flex gap-2">
                {[0, 1, 2, 3, 4].map(v => (
                  <button key={v}
                    onClick={() => setDatos(prev => ({ ...prev, ecog: v }))}
                    className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors
                      ${datos.ecog === v ? 'bg-primary-700 text-white' : 'bg-gray-100 text-gray-700'}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Biomarkers */}
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-2">Biomarcadores / Alteraciones moleculares</label>
              <div className="flex flex-wrap gap-2">
                {BIOMARCADORES_COMUNES.map(b => (
                  <button key={b}
                    onClick={() => toggleBiomarker(b)}
                    className={`px-2.5 py-1 rounded-full text-xs transition-colors
                      ${datos.biomarcadores?.includes(b) ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Metastasis */}
            <div className="flex gap-3">
              <button
                onClick={() => setDatos(prev => ({ ...prev, metastasis: !prev.metastasis }))}
                className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-colors border
                  ${datos.metastasis ? 'bg-red-50 border-red-300 text-red-700' : 'bg-gray-50 border-gray-200 text-gray-600'}`}
              >
                {datos.metastasis ? '✓ ' : ''}Enfermedad metastásica
              </button>
              <button
                onClick={() => setDatos(prev => ({ ...prev, recidiva: !prev.recidiva }))}
                className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-colors border
                  ${datos.recidiva ? 'bg-orange-50 border-orange-300 text-orange-700' : 'bg-gray-50 border-gray-200 text-gray-600'}`}
              >
                {datos.recidiva ? '✓ ' : ''}Recidiva
              </button>
            </div>

            <button
              onClick={() => setChecked(true)}
              disabled={!datos.histologia}
              className="w-full btn-primary py-3 text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Buscar ensayos elegibles
            </button>
          </>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-900">
                {elegibles.length > 0
                  ? `${elegibles.length} ensayo${elegibles.length !== 1 ? 's' : ''} potencialmente elegible${elegibles.length !== 1 ? 's' : ''}`
                  : 'Sin ensayos encontrados'}
              </h3>
              <button onClick={() => setChecked(false)} className="text-sm text-primary-600">Modificar</button>
            </div>

            {elegibles.length === 0 ? (
              <div className="card p-6 text-center">
                <AlertCircle size={32} className="text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500 text-sm">No se encontraron ensayos con esos criterios.</p>
                <p className="text-xs text-gray-400 mt-2">Considerar NGS completo y plataformas de basket trials (MATCH, TAPISTRY, ESMART).</p>
              </div>
            ) : (
              elegibles.map(e => (
                <div key={e.id} className="card p-4 border-l-4 border-purple-500">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <StatusBadge estado={e.estado} />
                        <span className="badge bg-gray-100 text-gray-600">Fase {e.fase}</span>
                        {e.espana && <span className="badge bg-green-100 text-green-800">España</span>}
                      </div>
                      <p className="font-semibold text-sm text-gray-900">{e.titulo_corto}</p>
                      <p className="text-xs text-purple-700 font-mono mt-0.5">{e.farmaco}</p>
                    </div>
                  </div>
                  {e.notas_clinicas && (
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed line-clamp-3">{e.notas_clinicas}</p>
                  )}
                  <a
                    href={e.url_clinicaltrials}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex items-center gap-1.5 text-xs text-primary-600 hover:text-primary-800 font-medium"
                  >
                    <ExternalLink size={12} />
                    {e.nct_id} — ClinicalTrials.gov
                  </a>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function PageTrials() {
  const { t } = useAppI18n()
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [showChecker, setShowChecker] = useState(false)
  const [filterEspana, setFilterEspana] = useState(false)
  const [soloConBiomarcador, setSoloConBiomarcador] = useState(false)

  const filtered = useMemo(() => {
    return ENSAYOS
      .filter(e => !filterEspana || e.espana)
      .filter(e => !soloConBiomarcador || !!e.biomarcador_requerido)
  }, [filterEspana, soloConBiomarcador])

  if (showChecker) return <ElegibilidadChecker onClose={() => setShowChecker(false)} />

  return (
    <div className="p-4 space-y-4 animate-fade-in">
      <div>
        <h1 className="text-xl font-bold text-gray-900">{t('trials.title')}</h1>
        <p className="text-sm text-gray-500 mt-1">{t('trials.subtitle')}</p>
      </div>

      {/* Checker CTA */}
      <button
        onClick={() => setShowChecker(true)}
        className="card w-full p-4 bg-purple-50 border border-purple-200 text-left hover:shadow-md transition-all"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 size={20} className="text-white" />
          </div>
          <div>
            <p className="font-bold text-purple-900 text-sm">{t('trials.checker_title')}</p>
            <p className="text-xs text-purple-600 mt-0.5">{t('trials.checker_desc')}</p>
          </div>
        </div>
      </button>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setFilterEspana(v => !v)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-colors
            ${filterEspana ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600'}`}
        >
          <MapPin size={12} />
          Solo disponibles en España
        </button>
        <button
          onClick={() => setSoloConBiomarcador(v => !v)}
          className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-colors ${
            soloConBiomarcador ? 'bg-purple-600 text-white border-purple-600' : 'bg-white text-gray-500 border-gray-200'
          }`}
        >
          <span>🧬</span> Solo con biomarcador
        </button>
        <span className="text-sm text-gray-500 ml-auto"><b>{filtered.length}</b> ensayos</span>
      </div>

      {/* Trial list */}
      <div className="space-y-3">
        {filtered.map(e => (
          <TrialCard
            key={e.id}
            ensayo={e}
            expanded={expandedId === e.id}
            onToggle={() => setExpandedId(prev => prev === e.id ? null : e.id)}
          />
        ))}
      </div>

      {/* NGS reminder */}
      <div className="card p-4 bg-blue-50 border border-blue-100">
        <p className="text-xs font-semibold text-blue-900 mb-1">Solicitar NGS en todo sarcoma avanzado refractario</p>
        <p className="text-xs text-blue-700 leading-relaxed">
          Plataformas relevantes: ESMART (Europa), MATCH (EE.UU.), TAPISTRY (global).
          Dianas frecuentes: NTRK, KIT, PDGFRA, BRAF V600E, NF1, MDM2, IDH1/2, SMARCB1, ALK.
        </p>
      </div>
    </div>
  )
}
