import { useState, useMemo } from 'react'
import { SARCOMAS } from '../data/sarcomas'
import type { Sarcoma, Comportamiento, Estirpe, Poblacion } from '../types'

export interface SearchFilters {
  query: string
  comportamiento: Comportamiento | 'todos'
  estirpe: Estirpe | 'todos'
  poblacion: Poblacion | 'todos'
}

const INITIAL_FILTERS: SearchFilters = {
  query: '',
  comportamiento: 'todos',
  estirpe: 'todos',
  poblacion: 'todos',
}

export function useSearch() {
  const [filters, setFilters] = useState<SearchFilters>(INITIAL_FILTERS)

  const results = useMemo(() => {
    return SARCOMAS.filter(s => {
      if (filters.comportamiento !== 'todos' && s.comportamiento !== filters.comportamiento) return false
      if (filters.estirpe !== 'todos' && s.estirpe !== filters.estirpe) return false
      if (filters.poblacion !== 'todos' && s.poblacion !== filters.poblacion && s.poblacion !== 'ambos') return false

      if (filters.query.trim().length > 0) {
        const q = filters.query.toLowerCase()
        const searchable = [
          s.nombre,
          ...(s.nombre_alternativo ?? []),
          s.descripcion,
          s.histologia,
          ...s.ihq,
          ...s.marcadores_moleculares.map(m => m.alteracion),
          ...s.tags,
          s.tratamiento_primera_linea,
        ].join(' ').toLowerCase()
        if (!searchable.includes(q)) return false
      }

      return true
    })
  }, [filters])

  const updateFilter = <K extends keyof SearchFilters>(key: K, value: SearchFilters[K]) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const resetFilters = () => setFilters(INITIAL_FILTERS)

  return { filters, results, updateFilter, resetFilters }
}

export type { Sarcoma }
