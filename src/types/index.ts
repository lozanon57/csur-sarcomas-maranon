// ─── Sarcoma types ───────────────────────────────────────────────────────────

export type Comportamiento = 'maligno' | 'benigno' | 'intermedio'
export type Estirpe = 'tejidos_blandos' | 'oseo' | 'gist' | 'mixto'
export type Poblacion = 'adulto' | 'pediatrico' | 'ambos'
export type Localizacion = 'extremidades' | 'retroperitoneal' | 'visceral' | 'cabeza_cuello' | 'trunco' | 'multiple'
export type GradoHistologico = 'G1' | 'G2' | 'G3' | 'NA'

export interface MarcadorMolecular {
  alteracion: string
  frecuencia?: string
  relevancia_terapeutica?: string
}

export interface Sarcoma {
  id: string
  nombre: string
  nombre_alternativo?: string[]
  comportamiento: Comportamiento
  estirpe: Estirpe
  poblacion: Poblacion
  localizaciones: Localizacion[]
  grado_histologico: GradoHistologico[]
  descripcion: string
  epidemiologia: string
  histologia: string
  ihq: string[]
  marcadores_moleculares: MarcadorMolecular[]
  estadificacion: string
  tratamiento_primera_linea: string
  tratamiento_adyuvante?: string
  tratamiento_paliativo?: string
  seguimiento: string
  pronostico: string
  perlas_clinicas: string[]
  tags: string[]
}

// ─── Clinical Decision types ─────────────────────────────────────────────────

export interface AlgoritmoNodo {
  id: string
  tipo: 'inicio' | 'decision' | 'accion' | 'resultado' | 'derivacion'
  texto: string
  detalle?: string
  si?: string
  no?: string
  opciones?: { texto: string; siguiente: string }[]
  referencia?: string
}

export interface Algoritmo {
  id: string
  titulo: string
  subtitulo: string
  categoria: 'diagnostico' | 'tratamiento' | 'seguimiento' | 'estadificacion'
  nodos: AlgoritmoNodo[]
  referencias: string[]
  version: string
  fuente: string
}

// ─── Clinical Trial types ─────────────────────────────────────────────────────

export type EstadoEnsayo = 'reclutando' | 'activo_no_reclutando' | 'completado' | 'suspendido'
export type FaseEnsayo = 'I' | 'II' | 'III' | 'IV' | 'I/II' | 'II/III'

export interface CriterioElegibilidad {
  tipo: 'inclusion' | 'exclusion'
  descripcion: string
}

export interface EnsayoClinico {
  id: string
  nct_id: string
  titulo: string
  titulo_corto: string
  fase: FaseEnsayo
  estado: EstadoEnsayo
  patologia: string[]
  farmaco: string
  mecanismo: string
  promotor: string
  paises: string[]
  espana: boolean
  criterios: CriterioElegibilidad[]
  objetivo_primario: string
  url_clinicaltrials: string
  fecha_inicio?: string
  fecha_fin_estimada?: string
  biomarcador_requerido?: string
  notas_clinicas?: string
}

// ─── Patient eligibility checker ─────────────────────────────────────────────

export interface DatosPaciente {
  histologia: string
  ecog: number
  edad: number
  tratamientos_previos: string[]
  biomarcadores: string[]
  localizacion: string
  metastasis: boolean
  recidiva: boolean
}

// ─── i18n ────────────────────────────────────────────────────────────────────

export type Idioma = 'es' | 'en'

export interface Traducciones {
  [key: string]: string | Traducciones
}
