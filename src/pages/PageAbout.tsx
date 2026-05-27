import React from 'react'
import { Mail, ExternalLink, Shield, Users, AlertTriangle } from 'lucide-react'
import { useAppI18n } from '../App'

export default function PageAbout() {
  const { t } = useAppI18n()

  const members = [
    { name: 'Equipo de Cirugía General y Digestivo', role: 'Cirugía de sarcomas abdominales y retroperitoneales' },
    { name: 'Servicio de Oncología Médica', role: 'Tratamiento sistémico, ensayos clínicos' },
    { name: 'Servicio de Anatomía Patológica', role: 'Diagnóstico histológico, IHQ, biología molecular' },
    { name: 'Servicio de Radiodiagnóstico', role: 'Imagen (RM, TC, PET-TC), biopsia guiada por imagen' },
    { name: 'Servicio de Oncología Radioterápica', role: 'RT de precisión, IMRT, protonterapia (derivación)' },
    { name: 'Servicio de Traumatología y Ortopedia', role: 'Sarcomas óseos, preservación de miembro' },
    { name: 'Servicio de Cirugía Plástica y Reparadora', role: 'Reconstrucción post-resección' },
    { name: 'Unidad de Rehabilitación', role: 'Rehabilitación funcional post-tratamiento' },
  ]

  return (
    <div className="p-4 space-y-4 animate-fade-in">
      {/* Header */}
      <div className="card bg-primary-800 text-white p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
            <Shield size={24} className="text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight">{t('about.title')}</h1>
            <p className="text-blue-300 text-xs mt-0.5">Centro, Servicio y Unidad de Referencia Nacional</p>
          </div>
        </div>
        <p className="text-sm text-blue-100 leading-relaxed">{t('about.descripcion')}</p>
      </div>

      {/* Committee */}
      <div className="card p-4">
        <div className="flex items-center gap-2 mb-3">
          <Users size={18} className="text-primary-700" />
          <h2 className="font-semibold text-gray-900">{t('about.equipo')}</h2>
        </div>
        <div className="space-y-3">
          {members.map((m, i) => (
            <div key={i} className="flex gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0 mt-2" />
              <div>
                <p className="text-sm font-medium text-gray-800">{m.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HGUGM Manual section */}
      <div className="card p-4">
        <h2 className="font-semibold text-gray-900 mb-3 text-sm">Publicaciones del equipo</h2>
        <div className="space-y-2">
          <div className="p-3 bg-gray-50 rounded-xl">
            <p className="text-xs font-semibold text-gray-800">Manual del Tratamiento Multidisciplinar de los Sarcomas Abdominales para Cirujanos</p>
            <p className="text-xs text-gray-500 mt-0.5">Asencio Pascual JM, Muñoz Casares FC (dirs.) · AEC Guías Clínicas 2026</p>
            <p className="text-xs text-primary-600 mt-0.5">ISBN: 978-84-09-85717-3</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-xl">
            <p className="text-xs font-semibold text-gray-800">Capítulo 6: Prehabilitación y Rehabilitación en la Cirugía de los Sarcomas Abdominales</p>
            <p className="text-xs text-gray-500 mt-0.5">Lozano Lominchar P, Galindo Alins MJ, Jiménez Monasterio M</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-xl">
            <p className="text-xs font-semibold text-gray-800">Capítulo 30: Manejo Multidisciplinar de la Recidiva y Enfermedad Metastásica en GIST</p>
            <p className="text-xs text-gray-500 mt-0.5">González Bayón L, Lozano Lominchar P</p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="card p-4">
        <h2 className="font-semibold text-gray-900 mb-3 text-sm">{t('about.contacto')}</h2>
        <div className="space-y-3">
          <a href={`mailto:${t('about.email')}`} className="flex items-center gap-3 p-3 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors">
            <Mail size={18} className="text-primary-700 flex-shrink-0" />
            <span className="text-sm text-primary-700 font-medium">{t('about.email')}</span>
          </a>
          <a href="https://www.madrid.org/hgugm" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <ExternalLink size={18} className="text-gray-600 flex-shrink-0" />
            <span className="text-sm text-gray-700">Hospital Gregorio Marañón · Madrid</span>
          </a>
        </div>
      </div>

      {/* App version */}
      <div className="card p-4">
        <h2 className="font-semibold text-gray-900 mb-3 text-sm">Sobre la aplicación</h2>
        <div className="space-y-1.5 text-xs text-gray-600">
          <div className="flex justify-between"><span>Versión</span><span className="font-mono">1.0.0 (Mayo 2026)</span></div>
          <div className="flex justify-between"><span>Tecnología</span><span className="font-mono">React + PWA</span></div>
          <div className="flex justify-between"><span>Modo offline</span><span className="text-green-600 font-medium">Disponible</span></div>
          <div className="flex justify-between"><span>Guías</span><span>NCCN v1.2025 · ESMO 2025</span></div>
          <div className="flex justify-between"><span>Clasificación OMS</span><span>WHO 5ª ed. 2020</span></div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="flex gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
        <AlertTriangle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-xs font-bold text-amber-900">{t('about.disclaimer_title')}</p>
          <p className="text-xs text-amber-800 mt-1 leading-relaxed">{t('about.disclaimer_text')}</p>
        </div>
      </div>
    </div>
  )
}
