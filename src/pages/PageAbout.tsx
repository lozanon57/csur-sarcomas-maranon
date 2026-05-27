import React, { useState } from 'react'
import { Mail, ExternalLink, Shield, Users, AlertTriangle, User, GraduationCap,
         Building2, ChevronDown, ChevronUp, BookOpen } from 'lucide-react'
import { useAppI18n } from '../App'

// ─── Collapsible section ──────────────────────────────────────────────────────
function Section({ title, icon, children, defaultOpen = true, badge }: {
  title: string; icon: React.ReactNode; children: React.ReactNode
  defaultOpen?: boolean; badge?: string
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="card overflow-hidden">
      <button onClick={() => setOpen(v => !v)}
        className="flex items-center justify-between w-full p-4 text-left hover:bg-gray-50 transition-colors">
        <div className="flex items-center gap-2">
          {icon}
          <h2 className="font-semibold text-gray-900 text-sm">{title}</h2>
          {badge && <span className="px-2 py-0.5 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">{badge}</span>}
        </div>
        {open ? <ChevronUp size={16} className="text-gray-400 flex-shrink-0" />
              : <ChevronDown size={16} className="text-gray-400 flex-shrink-0" />}
      </button>
      {open && <div className="px-4 pb-4">{children}</div>}
    </div>
  )
}

// ─── Members list ─────────────────────────────────────────────────────────────
const MEMBERS = [
  { service: 'Cirugía General y Aparato Digestivo',  role: 'Cirugía de sarcomas abdominales, retroperitoneales, HIPEC/PIPAC, GIST avanzado' },
  { service: 'Traumatología y Cirugía Ortopédica',   role: 'Sarcomas óseos, preservación de miembro, reconstrucción esquelética' },
  { service: 'Oncología Médica',                     role: 'Tratamiento sistémico, quimioterapia, terapias dirigidas, ensayos clínicos' },
  { service: 'Anatomía Patológica',                  role: 'Diagnóstico histológico, IHQ, biología molecular, segunda opinión' },
  { service: 'Radiodiagnóstico',                     role: 'RM, TC, PET-TC, biopsia guiada por imagen, radiología intervencionista' },
  { service: 'Oncología Radioterápica',              role: 'RT de precisión, IMRT, SBRT, indicaciones de protonterapia' },
  { service: 'Cirugía Plástica y Reparadora',        role: 'Reconstrucción de partes blandas post-resección' },
  { service: 'Rehabilitación y Medicina Física',     role: 'Prehabilitación y rehabilitación funcional post-tratamiento' },
]

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function PageAbout() {
  const { t } = useAppI18n()

  return (
    <div className="p-4 space-y-4 animate-fade-in">

      {/* ── CSUR header ── */}
      <div className="card bg-primary-800 text-white p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
            <Shield size={24} className="text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight">CSUR Sarcomas · HGUGM</h1>
            <p className="text-blue-300 text-xs mt-0.5">Centro, Servicio y Unidad de Referencia Nacional</p>
          </div>
        </div>
        <p className="text-sm text-blue-100 leading-relaxed">
          El Comité de Sarcomas del Hospital General Universitario Gregorio Marañón
          es un CSUR acreditado por el SNS para el diagnóstico y tratamiento multidisciplinar
          de sarcomas y tumores musculoesqueléticos de alta complejidad.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {['CSUR Acreditado SNS', 'Madrid · España', 'MDT Semanal'].map(tag => (
            <span key={tag} className="px-2 py-0.5 bg-white/15 rounded-full text-xs text-blue-100">{tag}</span>
          ))}
        </div>
      </div>

      {/* ── Aviso educativo ── */}
      <div className="flex gap-3 p-4 bg-blue-50 border-2 border-blue-300 rounded-xl">
        <BookOpen size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-bold text-blue-900">Herramienta Educativa — Uso exclusivo CSUR</p>
          <p className="text-xs text-blue-800 mt-1 leading-relaxed">
            Esta aplicación es un <strong>recurso docente de actualización</strong> para los miembros
            del Comité Multidisciplinar de Sarcomas y Tumores Musculoesqueléticos del HGUGM.
            El contenido está basado en guías NCCN 2025, ESMO 2025 y evidencia científica publicada.
            <strong> No sustituye al juicio clínico individualizado ni a las decisiones tomadas en comité.</strong>
          </p>
          <p className="text-xs text-blue-700 mt-1.5 font-medium">
            📋 Acceso restringido a miembros del CSUR · Actualización continua · Versión Mayo 2026
          </p>
        </div>
      </div>

      {/* ── CREADOR ── */}
      <Section title="Creador y responsable de contenido" icon={<User size={16} className="text-primary-700" />}>

        {/* Avatar */}
        <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-100">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-700 to-primary-900 flex items-center justify-center flex-shrink-0 shadow-md">
            <span className="text-white font-bold text-2xl">PL</span>
          </div>
          <div>
            <p className="font-bold text-gray-900 text-base leading-tight">Dr. Pablo Lozano Lominchar</p>
            <p className="text-sm text-primary-700 font-medium mt-0.5">MD, PhD · EBPSM · Cirujano Oncológico</p>
            <p className="text-xs text-gray-500 mt-0.5">H.G.U. Gregorio Marañón · Universidad Complutense de Madrid</p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {['CSUR Sarcomas', 'CRS+HIPEC', 'MSKCC Fellow'].map(tag => (
                <span key={tag} className="px-2 py-0.5 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <a href="mailto:lozanon57@gmail.com"
          className="flex items-center gap-3 p-3 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors">
          <Mail size={16} className="text-primary-700 flex-shrink-0" />
          <span className="text-sm text-primary-700 font-medium">lozanon57@gmail.com</span>
        </a>
        <div className="flex gap-2 mt-2">
          <a href="https://orcid.org/0000-0002-5413-8449" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 flex-1 p-2.5 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
            <span className="text-xs font-bold text-green-700">ORCID</span>
            <span className="text-xs text-green-600">0000-0002-5413-8449</span>
            <ExternalLink size={11} className="text-green-500 ml-auto" />
          </a>
          <a href="https://www.drlozanolominchar.com" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 flex-1 p-2.5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <ExternalLink size={13} className="text-gray-500" />
            <span className="text-xs text-gray-600">drlozanolominchar.com</span>
          </a>
        </div>
      </Section>

      {/* ── COMITÉ MDT ── */}
      <Section title="Comité Multidisciplinar CSUR" icon={<Users size={16} className="text-primary-700" />} defaultOpen={false}>
        <p className="text-xs text-gray-500 mb-3 leading-relaxed">
          Reunión semanal con representación de todos los servicios implicados en el
          diagnóstico y tratamiento de sarcomas y tumores musculoesqueléticos.
        </p>
        <div className="space-y-3">
          {MEMBERS.map((m, i) => (
            <div key={i} className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-primary-400 flex-shrink-0 mt-1.5" />
              <div>
                <p className="text-sm font-semibold text-gray-800">{m.service}</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-snug">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-teal-50 rounded-xl border border-teal-100">
          <p className="text-xs text-teal-800 leading-relaxed">
            <strong>Servicio de Cirugía General y Aparato Digestivo</strong> — Coordina la cirugía
            oncológica de sarcomas abdominales y retroperitoneales, incluyendo CRS+HIPEC,
            resección de GIST avanzado y cirugía de retroperitoneo. Referente nacional en sarcomas abdominales.
          </p>
        </div>
      </Section>

      {/* ── HOSPITAL ── */}
      <Section title="Sobre el HGUGM" icon={<Building2 size={16} className="text-primary-700" />} defaultOpen={false}>
        <p className="text-xs text-gray-600 leading-relaxed mb-3">
          El Hospital General Universitario Gregorio Marañón es uno de los hospitales de referencia
          de la Comunidad de Madrid. Su Comité de Sarcomas está acreditado como CSUR por el SNS
          para sarcomas de partes blandas, óseos y tumores musculoesqueléticos de alta complejidad.
        </p>
        <a href="https://www.madrid.org/hgugm" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
          <ExternalLink size={16} className="text-gray-500 flex-shrink-0" />
          <span className="text-sm text-gray-700">Hospital Gregorio Marañón · Madrid</span>
        </a>
      </Section>

      {/* ── APP INFO ── */}
      <Section title="Sobre la aplicación" icon={<GraduationCap size={16} className="text-primary-700" />} defaultOpen={false}>
        <div className="space-y-1.5 text-xs text-gray-600 mb-3">
          <div className="flex justify-between"><span>Versión</span><span className="font-mono">1.1.0 (Mayo 2026)</span></div>
          <div className="flex justify-between"><span>Tecnología</span><span className="font-mono">React + PWA (offline)</span></div>
          <div className="flex justify-between"><span>Modo offline</span><span className="text-green-600 font-semibold">✓ Disponible</span></div>
          <div className="flex justify-between"><span>Guías</span><span>NCCN v1.2025 · ESMO 2025</span></div>
          <div className="flex justify-between"><span>OMS</span><span>WHO 5ª ed. Soft Tissue 2020</span></div>
          <div className="flex justify-between"><span>Idiomas</span><span>Español · English</span></div>
          <div className="flex justify-between"><span>Creador</span><span className="text-primary-700 font-medium">Dr. Pablo Lozano Lominchar</span></div>
        </div>
        <p className="text-xs text-gray-400 leading-relaxed">
          Desarrollada exclusivamente para uso docente de los miembros del CSUR de Sarcomas del HGUGM.
          Actualización periódica prevista conforme evolucionen las guías clínicas.
        </p>
      </Section>

      {/* ── DISCLAIMER ── */}
      <div className="flex gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
        <AlertTriangle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-xs font-bold text-amber-900">Aviso Legal y Limitación de Responsabilidad</p>
          <p className="text-xs text-amber-800 mt-1 leading-relaxed">
            El contenido tiene carácter <strong>exclusivamente educativo</strong> para los profesionales
            sanitarios miembros del CSUR de Sarcomas del HGUGM. No constituye consejo médico
            individualizado ni reemplaza el juicio clínico ni las decisiones adoptadas en el comité
            multidisciplinar. Las decisiones sobre pacientes concretos deben tomarse siempre en
            el contexto del equipo multidisciplinar y de acuerdo con los protocolos institucionales vigentes.
          </p>
          <p className="text-xs text-amber-700 mt-2 font-medium">
            © 2026 Dr. Pablo Lozano Lominchar · CSUR Sarcomas HGUGM · Todos los derechos reservados
          </p>
        </div>
      </div>

    </div>
  )
}
