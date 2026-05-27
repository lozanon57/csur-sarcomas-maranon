import React, { useState } from 'react'
import { GitBranch, ChevronRight, RotateCcw, BookOpen, ArrowLeft } from 'lucide-react'
import { useAppI18n } from '../App'
import { ALGORITMOS } from '../data/algoritmos'
import type { Algoritmo, AlgoritmoNodo } from '../types'

function NodoCard({ nodo, onSi, onNo, onOpcion }: {
  nodo: AlgoritmoNodo
  onSi?: () => void
  onNo?: () => void
  onOpcion?: (siguiente: string) => void
}) {
  const colorMap = {
    inicio:     'algo-step',
    decision:   'algo-decision',
    accion:     'algo-action',
    resultado:  'algo-action',
    derivacion: 'algo-warning',
  }

  const iconMap = {
    inicio:     '▶',
    decision:   '?',
    accion:     '✓',
    resultado:  '●',
    derivacion: '→',
  }

  return (
    <div className="space-y-3 animate-slide-up">
      <div className={colorMap[nodo.tipo]}>
        <span className="text-lg flex-shrink-0 mt-0.5">{iconMap[nodo.tipo]}</span>
        <div>
          <p className="font-semibold text-sm text-gray-900">{nodo.texto}</p>
          {nodo.detalle && (
            <p className="text-xs text-gray-600 mt-1.5 leading-relaxed whitespace-pre-line">{nodo.detalle}</p>
          )}
        </div>
      </div>

      {/* Decision buttons */}
      {nodo.tipo === 'decision' && nodo.si && nodo.no && (
        <div className="grid grid-cols-2 gap-3 px-1">
          <button onClick={onSi} className="py-2.5 px-4 bg-green-600 text-white rounded-xl text-sm font-semibold hover:bg-green-700 transition-colors">
            Sí ✓
          </button>
          <button onClick={onNo} className="py-2.5 px-4 bg-red-500 text-white rounded-xl text-sm font-semibold hover:bg-red-600 transition-colors">
            No ✗
          </button>
        </div>
      )}

      {/* Multi-option buttons */}
      {nodo.opciones && (
        <div className="space-y-2 px-1">
          {nodo.opciones.map(op => (
            <button
              key={op.siguiente}
              onClick={() => onOpcion?.(op.siguiente)}
              className="w-full py-2.5 px-4 bg-primary-50 border border-primary-200 text-primary-800 rounded-xl text-sm font-medium hover:bg-primary-100 transition-colors text-left flex items-center justify-between"
            >
              <span>{op.texto}</span>
              <ChevronRight size={16} className="text-primary-400 flex-shrink-0" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function AlgorithmRunner({ algo, onBack }: { algo: Algoritmo; onBack: () => void }) {
  const [currentId, setCurrentId] = useState(algo.nodos[0]?.id ?? '')
  const [history, setHistory] = useState<string[]>([])
  const [showRefs, setShowRefs] = useState(false)

  const currentNode = algo.nodos.find(n => n.id === currentId)

  const navigate = (nextId: string) => {
    setHistory(prev => [...prev, currentId])
    setCurrentId(nextId)
  }

  const goBack = () => {
    if (history.length > 0) {
      const prev = history[history.length - 1]
      setHistory(h => h.slice(0, -1))
      setCurrentId(prev)
    }
  }

  const reset = () => {
    setCurrentId(algo.nodos[0]?.id ?? '')
    setHistory([])
  }

  if (!currentNode) return null

  const isEnd = !currentNode.si && !currentNode.no && !currentNode.opciones
  const isFirst = history.length === 0

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="card bg-primary-800 text-white p-4">
        <div className="flex items-center gap-2 mb-1">
          <button onClick={onBack} className="p-1 hover:bg-white/10 rounded">
            <ArrowLeft size={18} />
          </button>
          <h2 className="font-bold text-base leading-snug flex-1">{algo.titulo}</h2>
        </div>
        <p className="text-xs text-blue-300 ml-7">{algo.subtitulo}</p>
        <div className="ml-7 mt-2 flex items-center gap-2 text-xs text-blue-200">
          <span>Paso {history.length + 1}</span>
          {isEnd && <span className="px-2 py-0.5 bg-green-400/20 text-green-300 rounded-full">Fin del algoritmo</span>}
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex gap-1.5 px-4">
        {algo.nodos.slice(0, Math.min(algo.nodos.length, 10)).map((_, i) => (
          <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors
            ${i < history.length ? 'bg-primary-600' : i === history.length ? 'bg-primary-400' : 'bg-gray-200'}`} />
        ))}
      </div>

      {/* Current node */}
      <div className="px-4">
        <NodoCard
          nodo={currentNode}
          onSi={currentNode.si ? () => navigate(currentNode.si!) : undefined}
          onNo={currentNode.no ? () => navigate(currentNode.no!) : undefined}
          onOpcion={next => navigate(next)}
        />
      </div>

      {/* Nav buttons */}
      <div className="flex gap-3 px-4">
        {!isFirst && (
          <button onClick={goBack} className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
            <ArrowLeft size={15} />
            Atrás
          </button>
        )}
        <button onClick={reset} className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 text-gray-600 rounded-xl text-sm hover:bg-gray-100 transition-colors">
          <RotateCcw size={14} />
          Reiniciar
        </button>
      </div>

      {/* References */}
      <div className="px-4">
        <button onClick={() => setShowRefs(v => !v)} className="flex items-center gap-2 text-xs text-primary-600 hover:text-primary-800">
          <BookOpen size={14} />
          {showRefs ? 'Ocultar referencias' : 'Ver referencias'}
        </button>
        {showRefs && (
          <div className="mt-2 space-y-1">
            {algo.referencias.map((r, i) => (
              <p key={i} className="text-xs text-gray-500 pl-3 border-l-2 border-primary-200">{r}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function PageDecision() {
  const { t } = useAppI18n()
  const [selected, setSelected] = useState<Algoritmo | null>(null)

  const categories = [
    { id: 'diagnostico',    label: t('decision.diagnostico'),    color: 'bg-primary-50 border-primary-200 text-primary-700' },
    { id: 'tratamiento',    label: t('decision.tratamiento'),    color: 'bg-teal-50 border-teal-200 text-teal-700' },
    { id: 'estadificacion', label: t('decision.estadificacion'), color: 'bg-purple-50 border-purple-200 text-purple-700' },
    { id: 'seguimiento',    label: t('decision.seguimiento'),    color: 'bg-amber-50 border-amber-200 text-amber-700' },
  ]

  if (selected) {
    return (
      <div className="p-4 pb-6 animate-fade-in">
        <AlgorithmRunner algo={selected} onBack={() => setSelected(null)} />
      </div>
    )
  }

  return (
    <div className="p-4 space-y-4 animate-fade-in">
      <div>
        <h1 className="text-xl font-bold text-gray-900">{t('decision.title')}</h1>
        <p className="text-sm text-gray-500 mt-1">{t('decision.subtitle')}</p>
      </div>

      {categories.map(cat => {
        const catAlgos = ALGORITMOS.filter(a => a.categoria === cat.id)
        if (catAlgos.length === 0) return null
        return (
          <div key={cat.id}>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">{cat.label}</p>
            <div className="space-y-2">
              {catAlgos.map(algo => (
                <button
                  key={algo.id}
                  onClick={() => setSelected(algo)}
                  className={`card w-full text-left p-4 hover:shadow-md transition-all border ${cat.color} active:scale-98`}
                >
                  <div className="flex items-center gap-3">
                    <GitBranch size={18} className="flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm leading-snug">{algo.titulo}</p>
                      <p className="text-xs mt-0.5 opacity-70 leading-snug">{algo.subtitulo}</p>
                    </div>
                    <ChevronRight size={16} className="flex-shrink-0 opacity-50" />
                  </div>
                  <div className="mt-2 ml-7">
                    <span className="text-xs opacity-60">{algo.nodos.length} pasos · {algo.fuente}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
