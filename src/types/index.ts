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
  si?: string          // ID del nodo si la respuesta es Sí
  no?: string          // ID del nodo si la respuesta es No
  opciones?: { texto: string; siguiente: string }[]
  siguiente?: string   // ID del nodo siguiente para nodos sin bifurcación (inicio, accion, resultado)
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

// ─── Landmark / historical trial types ───────────────────────────────────────

export type NivelEvidencia = 'Ia' | 'Ib' | 'IIa' | 'IIb' | 'III' | 'IV'
export type TipoEstudio = 'RCT' | 'fase-II' | 'fase-III' | 'meta-analisis' | 'prospectivo' | 'retrospectivo' | 'basket'

export interface EnsayoHistorico {
  id: string
  nombre: string           // Short name e.g. "SSGXVIII", "EORTC 62931"
  año: number
  publicacion: string      // Journal + year
  doi?: string
  histologias: string[]    // Sarcoma IDs (or 'all_sts', 'leiomiosarcoma', etc.)
  pregunta_clinica: string // "¿3 años de imatinib adyuvante son superiores a 1 año?"
  resultado_clave: string  // Primary endpoint result
  impacto_practica: string // How it changed clinical practice
  nivel_evidencia: NivelEvidencia
  tipo_estudio: TipoEstudio
  cita_completa: string
  n_pacientes?: number
}

// ─── i18n ────────────────────────────────────────────────────────────────────

export type Idioma = 'es' | 'en'

export interface Traducciones {
  [key: string]: string | Traducciones
}
