import React, { useState } from 'react'
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react'
import { useAppI18n } from '../App'

interface GuiaSection { title: string; content: React.ReactNode }

function AccordionSection({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="card mb-3">
      <button onClick={() => setOpen(v => !v)} className="flex items-center justify-between w-full p-4">
        <span className="font-semibold text-gray-900 text-sm text-left">{title}</span>
        {open ? <ChevronUp size={16} className="text-gray-400 flex-shrink-0" /> : <ChevronDown size={16} className="text-gray-400 flex-shrink-0" />}
      </button>
      {open && <div className="px-4 pb-4 text-sm text-gray-700 space-y-3 border-t border-gray-100 pt-3">{children}</div>}
    </div>
  )
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <>
      <div className="overflow-x-auto -mx-4 px-4 no-scrollbar">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr>
              {headers.map(h => (
                <th key={h} className="p-2 text-left border-b border-gray-100 font-semibold text-gray-700 bg-gray-50 whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} className="p-2 border-b border-gray-50 text-gray-600 align-top">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[10px] text-gray-400 text-right mt-1">← scroll →</p>
    </>
  )
}

export default function PageGuias() {
  const { t } = useAppI18n()
  return (
    <div className="p-4 animate-fade-in">
      <div className="mb-4">
        <h1 className="text-xl font-bold text-gray-900">{t('guias.title')}</h1>
        <p className="text-xs text-gray-500 mt-1">NCCN v1.2025 · ESMO 2025 · AJCC 8ª ed. · WHO 2020</p>
      </div>

      {/* AJCC Staging */}
      <AccordionSection title="Estadificación AJCC 8ª Edición — STS Extremidades/Tronco" defaultOpen>
        <p className="text-xs text-gray-500 italic mb-2">AJCC Cancer Staging Manual 8th Ed. (Amin et al., 2017)</p>
        <Table
          headers={['Estadio', 'T', 'N', 'M', 'G', 'Descripción']}
          rows={[
            ['IA', 'T1 (≤5cm)', 'N0', 'M0', 'G1', 'Bajo grado, pequeño'],
            ['IB', 'T2-T4', 'N0', 'M0', 'G1', 'Bajo grado, grande/múltiple'],
            ['II', 'T1', 'N0', 'M0', 'G2-3', 'Alto grado, ≤5 cm'],
            ['IIIA', 'T2 (>5-10cm)', 'N0', 'M0', 'G2-3', 'Alto grado, 5-10 cm'],
            ['IIIB', 'T3 (>10-15cm) / T4', 'N0', 'M0', 'G2-3', 'Alto grado, grande'],
            ['IV', 'Cualquier T', 'N1 o M1', 'M0/M1', 'Cualquier G', 'Metástasis o N+'],
          ]}
        />
        <div className="mt-3 p-3 bg-amber-50 rounded-lg">
          <p className="text-xs font-semibold text-amber-800">Grado FNCLCC</p>
          <p className="text-xs text-amber-700 mt-1">Diferenciación tumoral (1-3) + Índice mitótico (1-3) + Necrosis (0-2)</p>
          <p className="text-xs text-amber-700">G1: 2-3 pts · G2: 4-5 pts · G3: 6-8 pts</p>
        </div>
      </AccordionSection>

      {/* Clasificacion riesgo GIST */}
      <AccordionSection title="Clasificación de Riesgo GIST — NIH/Miettinen (modificada)">
        <p className="text-xs text-gray-500 italic mb-2">Miettinen & Lasota, Semin Diagn Pathol 2006</p>
        <Table
          headers={['Riesgo', 'Tamaño', 'Mitosis/50HPF', 'Localización']}
          rows={[
            ['Muy bajo', '≤2 cm', '≤5', 'Cualquiera'],
            ['Bajo', '>2 ≤5 cm', '≤5', 'Cualquiera'],
            ['Intermedio', '≤5 cm', '6-10', 'Cualquiera'],
            ['Intermedio', '>5 ≤10 cm', '≤5', 'Gástrico'],
            ['Alto', '>10 cm', 'Cualquiera', 'Cualquiera'],
            ['Alto', 'Cualquiera', '>10', 'Cualquiera'],
            ['Alto', '>5 cm', '>5', 'Cualquiera'],
            ['Alto', '>2 cm (cualquier)', 'Cualquiera', 'No gástrico'],
          ]}
        />
        <p className="text-xs text-gray-500 mt-2">Alto riesgo → imatinib adyuvante 3 años (SSGXVIII, NEJM 2012)</p>
      </AccordionSection>

      {/* QT regimens */}
      <AccordionSection title="Esquemas de Quimioterapia en Sarcomas">
        <p className="text-xs text-gray-500 italic mb-3">Basado en ESMO 2025 y guías institucionales HGUGM</p>

        {[
          {
            nombre: 'AI — Doxorubicina + Ifosfamida (1ª línea STS)',
            dosis: [
              'Doxorubicina 75 mg/m² IV D1 (o 25 mg/m²/día D1-D3 infusión continua)',
              'Ifosfamida 9-10 g/m² IV D1-D3 (con mesna)',
              'Cada 21 días. Máximo 6 ciclos.',
              'G-CSF profiláctico OBLIGATORIO',
            ]
          },
          {
            nombre: 'Gemcitabina + Docetaxel (LMS, 2ª línea STS)',
            dosis: [
              'Gemcitabina 675-900 mg/m² IV D1, D8 (infusión 90 min a tasa fija)',
              'Docetaxel 75-100 mg/m² IV D8',
              'Cada 21 días.',
              'Especialmente activo en LMS y UPS',
            ]
          },
          {
            nombre: 'Trabectedina (LPS, LMS — 2ª línea)',
            dosis: [
              'Trabectedina 1.5 mg/m² IV en 24 horas',
              'Cada 21 días.',
              'Premedicación: dexametasona 20 mg IV 30 min antes',
              'LPS mixoide: especialmente activo (ORR ~50%)',
            ]
          },
          {
            nombre: 'Eribulina (LPS, LMS — ≥2ª línea)',
            dosis: [
              'Eribulina 1.4 mg/m² IV días 1 y 8',
              'Cada 21 días.',
              'Aprobada EMA/FDA solo para LPS y LMS (no otros STS)',
            ]
          },
          {
            nombre: 'Imatinib GIST — Adyuvante/metastásico',
            dosis: [
              'KIT exón 11: imatinib 400 mg/día VO',
              'KIT exón 9: imatinib 800 mg/día VO',
              'PDGFRA D842V: AVAPRITINIB 300 mg/día (no imatinib)',
              'Adyuvante alto riesgo: 400 mg/día × 3 años',
            ]
          },
          {
            nombre: 'VDC/IE — Sarcoma de Ewing (EURO-EWING)',
            dosis: [
              'Ciclos VDC: Vincristina 1.5 mg/m² D1 + Doxorubicina 75 mg/m² D1 + Ciclofosfamida 1200 mg/m² D1',
              'Ciclos IE: Ifosfamida 9 g/m² D1-D5 + Etopósido 100 mg/m² D1-D5',
              'Alternantes cada 21 días (6 inducción + 8-12 consolidación)',
              'G-CSF OBLIGATORIO entre ciclos',
            ]
          },
          {
            nombre: 'MAP — Osteosarcoma neoadyuvante',
            dosis: [
              'Metotrexato alta dosis: 12 g/m² IV D1, D8 con rescate folínico',
              'Doxorubicina 75 mg/m² IV D1 (infusión 24-48h)',
              'Cisplatino 120 mg/m² IV D1',
              'Alternar según protocolo COSS/EURAMOS',
            ]
          },
          {
            nombre: 'Pazopanib (2ª línea STS no-adipocítico)',
            dosis: [
              'Pazopanib 800 mg/día VO (con o sin comida)',
              'NOTA: LPS EXCLUIDO (no activo en PALETTE)',
              'SLP mediana 4.6 meses vs 1.6 meses (placebo)',
            ]
          },
        ].map(r => (
          <div key={r.nombre} className="border border-gray-200 rounded-xl overflow-hidden mb-3">
            <div className="bg-primary-50 px-3 py-2">
              <p className="text-xs font-bold text-primary-900">{r.nombre}</p>
            </div>
            <ul className="px-3 py-2 space-y-1">
              {r.dosis.map((d, i) => <li key={i} className="text-xs text-gray-700 flex gap-2"><span className="text-primary-400 flex-shrink-0">→</span>{d}</li>)}
            </ul>
          </div>
        ))}
      </AccordionSection>

      {/* Biomarcadores */}
      <AccordionSection title="Biomarcadores y NGS en Sarcomas">
        <p className="text-xs text-gray-500 italic mb-3">Panel IHQ mínimo recomendado para sarcoma indeterminado</p>
        <Table
          headers={['Marcador', 'Diagnóstico', 'Implicación terapéutica']}
          rows={[
            ['MDM2 (FISH)', 'LPS-BD/DD vs lipoma', 'CDK4/6 inhibidores (ensayos)'],
            ['DOG1/CD117', 'GIST', 'Imatinib/avapritinib'],
            ['TLE1', 'Sarcoma sinovial', 'Ifosfamida alta dosis'],
            ['SMARCB1/INI1', 'Sarcoma epitelioide, rabdoide', 'Tazemetostat (aprobado)'],
            ['H3K27me3', 'MPNST', 'Tazemetostat (ensayos)'],
            ['STAT6 nuclear', 'TFS', 'Temozolomida + bevacizumab'],
            ['CAMTA1 nuclear', 'HEE', 'Sorafenib/everolimus'],
            ['Brachyury (TBXT)', 'Cordoma', 'Protonterapia; imatinib'],
            ['H3F3A G34W', 'TCG óseo', 'Denosumab (aprobado)'],
            ['DDIT3 (FISH/IHQ)', 'LPS mixoide', 'Trabectedina'],
            ['IDH1 R132H (IHQ)', 'Condrosarcoma convencional', 'Inhibidores IDH (ensayos)'],
          ]}
        />
        <div className="mt-3 p-3 bg-blue-50 rounded-lg">
          <p className="text-xs font-semibold text-blue-900">Panel NGS recomendado</p>
          <p className="text-xs text-blue-700 mt-1 leading-relaxed">
            En todo sarcoma avanzado/refractario: NGS RNA + DNA (mínimo 300-500 genes). Alteraciones con diana aprobada o en ensayos: NTRK, KIT, PDGFRA, ALK, BRAF, NF1, IDH1/2, BRCA1/2, TSC1/2, SMARCB1, MDM2/CDK4.
          </p>
        </div>
      </AccordionSection>

      {/* NCCN summary */}
      <AccordionSection title="Resumen NCCN 2025 — Sarcomas tejidos blandos">
        <p className="text-xs text-gray-500 italic mb-2">NCCN Clinical Practice Guidelines v1.2025</p>
        {[
          { title: 'Biopsia', text: 'Siempre antes de cirugía. Core biopsia guiada por imagen (preferida). Planificar trayecto. Centros de referencia.' },
          { title: 'Cirugía', text: 'Objetivo R0 con márgenes amplios. Cirugía conservadora de miembro en >90% extremidades. Compartmental en retroperitoneo (TARPSWG).' },
          { title: 'RT', text: 'Indicada en G2-G3 >5 cm o márgenes R1. 50 Gy neoadyuvante o 50-66 Gy adyuvante. Protonterapia en cordoma/CS base cráneo.' },
          { title: 'QT neoadyuvante', text: 'AI × 3 ciclos en G3 >5 cm (ISG-STS 1001). Especialmente útil en SS (ifosfamida HD), Ewing, RMS (QT obligatoria).' },
          { title: '1ª línea metastásico', text: 'Doxorubicina ± ifosfamida. Subtipos específicos: trabectedina (LPS-mix, LMS), gemcitabina+docetaxel (LMS), paclitaxel (angiosarcoma).' },
          { title: 'Subtipo-específico', text: 'GIST→imatinib/avapritinib. Desmoide→sorafenib/vigilancia. Ewing→VDC/IE. Osteosarcoma→MAP. RMS→VAC/VDC-IE.' },
        ].map(item => (
          <div key={item.title} className="flex gap-3">
            <span className="flex-shrink-0 w-20 text-xs font-semibold text-primary-700">{item.title}</span>
            <p className="text-xs text-gray-700 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </AccordionSection>

      {/* ESMO summary */}
      <AccordionSection title="Resumen ESMO 2025 — Principios clave">
        <p className="text-xs text-gray-500 italic mb-2">Gronchi et al., Ann Oncol 2025 (ESMO/EURACAN Guidelines)</p>
        {[
          { title: 'Multidisciplinar', text: 'Todo sarcoma debe discutirse en comité CSUR especializado (recomendación grado A).' },
          { title: 'Subtipos', text: 'Tratamiento individualizado por subtipo histológico y biología molecular — no "sarcoma genérico".' },
          { title: 'Retroperitoneal', text: 'TARPSWG: cirugía compartmental R0. RT adyuvante: STRASS-2 (estudio activo). No QT adyuvante estándar en LPS-BD.' },
          { title: 'Metastásico', text: 'Doxo ± ifosfamida (1ª línea). Considerar subtipo en elección: trabectedina (LPS mix), gemcitabina+docetaxel (LMS), eribulina (LPS/LMS).' },
          { title: 'Terapias diana', text: 'Imatinib/avapritinib (GIST), sorafenib (desmoide), tazemetostat (SE), larotrectinib/entrectinib (NTRK), denosumab (TCG).' },
          { title: 'Seguimiento', text: 'TC tórax cada 3-4 meses durante 3 años en alto riesgo. RMN local según histología. Herramienta Sarculator para estratificación.' },
        ].map(item => (
          <div key={item.title} className="flex gap-3">
            <span className="flex-shrink-0 w-24 text-xs font-semibold text-teal-700">{item.title}</span>
            <p className="text-xs text-gray-700 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </AccordionSection>
    </div>
  )
}
