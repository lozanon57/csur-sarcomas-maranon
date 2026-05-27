import React, { useState } from 'react'
import { Mail, ExternalLink, Shield, Users, AlertTriangle, User, GraduationCap,
         Building2, ChevronDown, ChevronUp, BookOpen, Award, FileText } from 'lucide-react'
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

// ─── CV item ──────────────────────────────────────────────────────────────────
function CvItem({ year, title, subtitle, highlight = false }: {
  year: string; title: string; subtitle: string; highlight?: boolean
}) {
  return (
    <div className={`flex gap-3 ${highlight ? 'bg-indigo-50 -mx-1 px-2 py-2 rounded-lg' : 'py-1.5'}`}>
      <span className="text-xs font-mono text-gray-400 whitespace-nowrap w-14 flex-shrink-0 pt-0.5">{year}</span>
      <div className="w-px bg-gray-200 flex-shrink-0 mx-1" />
      <div>
        <p className={`text-sm font-medium leading-snug ${highlight ? 'text-indigo-900' : 'text-gray-800'}`}>{title}</p>
        <p className={`text-xs mt-0.5 leading-snug ${highlight ? 'text-indigo-600 font-medium' : 'text-gray-500'}`}>{subtitle}</p>
      </div>
    </div>
  )
}

// ─── Publication item ─────────────────────────────────────────────────────────
function PubItem({ year, title, journal, authors, doi, highlight = false }: {
  year: number | string; title: string; journal: string
  authors?: string; doi?: string; highlight?: boolean
}) {
  return (
    <div className={`py-2.5 border-b border-gray-50 last:border-0 ${highlight ? 'bg-amber-50/50 -mx-1 px-2 rounded-lg' : ''}`}>
      <div className="flex items-start gap-2">
        <span className="text-xs font-mono text-gray-400 whitespace-nowrap mt-0.5 w-10 flex-shrink-0">{year}</span>
        <div className="flex-1 min-w-0">
          <p className={`text-xs font-semibold leading-snug ${highlight ? 'text-amber-900' : 'text-gray-800'}`}>{title}</p>
          {authors && <p className="text-xs text-gray-500 mt-0.5 leading-snug">{authors}</p>}
          <div className="flex items-center gap-2 mt-0.5 flex-wrap">
            <span className={`text-xs font-medium ${highlight ? 'text-amber-700' : 'text-primary-600'}`}>{journal}</span>
            {doi && (
              <a href={`https://doi.org/${doi}`} target="_blank" rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-primary-600 flex items-center gap-0.5 transition-colors">
                <ExternalLink size={10} />DOI
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Pub group ────────────────────────────────────────────────────────────────
function PubGroup({ label, count, children }: { label: string; count: number; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-left">
        <div className="flex items-center gap-2">
          <FileText size={14} className="text-primary-600" />
          <span className="text-sm font-semibold text-gray-700">{label}</span>
          <span className="px-2 py-0.5 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">{count}</span>
        </div>
        {open ? <ChevronUp size={14} className="text-gray-400" /> : <ChevronDown size={14} className="text-gray-400" />}
      </button>
      {open && <div className="px-3 py-2 bg-white">{children}</div>}
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
            <p className="text-xs text-gray-500 mt-0.5">H.G.U. Gregorio Marañón · UCM · Quenet-Torrent Institute</p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {['CSUR Sarcomas', 'CRS+HIPEC', 'MSKCC Fellow'].map(tag => (
                <span key={tag} className="px-2 py-0.5 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Formación */}
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Formación y trayectoria</p>
        <div className="space-y-0.5 mb-4">
          <CvItem year="2024–25" title="Research Fellow — Peritoneal Service / Sarcoma Service"
            subtitle="Memorial Sloan Kettering Cancer Center (MSKCC) · Nueva York, EE.UU." highlight />
          <CvItem year="2019–24" title="Residencia MIR — Cirugía General y del Aparato Digestivo"
            subtitle="Hospital General Universitario Gregorio Marañón · Madrid" />
          <CvItem year="2017" title="Doctorado en Medicina y Cirugía — Sobresaliente Cum Laude"
            subtitle="Universidad Complutense de Madrid · Dir: García-Sabrido / López-Baena" />
          <CvItem year="2013–19" title="Licenciatura/Grado en Medicina"
            subtitle="Universidad Complutense de Madrid" />
        </div>

        {/* Certificaciones */}
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Certificaciones</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            'MD, PhD (UCM)',
            'European Board of Peritoneal Surface Malignancy (EBPSM)',
            'International Surgical Oncology Fellowship — MSKCC',
            'Certificado Da Vinci Xi — INTUITIVE (EE.UU.)',
            'ECFMG Certification (EE.UU.)',
          ].map(c => (
            <span key={c} className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs leading-snug">{c}</span>
          ))}
        </div>

        {/* Cargos */}
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Cargos actuales</p>
        <div className="space-y-1.5 mb-4">
          {[
            ['Cirujano Oncológico', 'Unidad de Cirugía Enfermedad Maligna Peritoneal, Sarcomas y Tumores Pélvicos Avanzados · HGUGM'],
            ['Cirujano Oncológico', 'Quenet-Torrent Institute · Barcelona'],
            ['Profesor Asociado en Patología Quirúrgica', 'Facultad de Medicina · Universidad Complutense de Madrid'],
            ['Vocal Sección Sarcomas', 'Asociación Española de Cirujanos (AEC)'],
          ].map(([rol, inst], i) => (
            <div key={i} className="flex gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0 mt-1.5" />
              <div>
                <p className="text-xs font-semibold text-gray-800">{rol}</p>
                <p className="text-xs text-gray-500">{inst}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Áreas de especialización */}
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Áreas de especialización</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {['Cirugía oncológica peritoneal', 'Sarcomas abdominales y retroperitoneales',
            'CRS + HIPEC / PIPAC', 'GIST avanzado', 'Carcinomatosis peritoneal',
            'Pseudomixoma peritonei', 'Tumor desmoide', 'Tumores germinales retroperitoneales',
            'Cirugía de rescate pélvico', 'Prehabilitación quirúrgica'].map(a => (
            <span key={a} className="px-2.5 py-1 bg-primary-50 text-primary-700 rounded-lg text-xs">{a}</span>
          ))}
        </div>

        {/* MSKCC callout */}
        <div className="p-3.5 bg-indigo-50 border border-indigo-200 rounded-xl flex gap-3 mb-4">
          <Award size={16} className="text-indigo-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-bold text-indigo-900">Estancia en MSKCC · Nueva York (2024–2025)</p>
            <p className="text-xs text-indigo-700 mt-1 leading-relaxed">
              Fellowship clínico-investigador en el <strong>Peritoneal Service y Sarcoma Service</strong> del
              Memorial Sloan Kettering Cancer Center, referente mundial en sarcomas y tumores peritoneales.
              Formación única a nivel nacional certificada como International Surgical Oncologist.
              Esta experiencia sustenta el contenido y la perspectiva docente de esta aplicación.
            </p>
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

      {/* ── PUBLICACIONES ── */}
      <Section title="Publicaciones" icon={<BookOpen size={16} className="text-primary-700" />} badge="40+">
        <p className="text-xs text-gray-500 mb-3">
          Lista completa desde ORCID · <a href="https://orcid.org/0000-0002-5413-8449"
            target="_blank" rel="noopener noreferrer" className="text-primary-600 underline">0000-0002-5413-8449</a>
        </p>

        <div className="space-y-3">

          {/* Sarcomas */}
          <PubGroup label="Sarcomas y Oncología Peritoneal" count={15}>
            <PubItem year={2026} highlight
              title="Consensus Guidelines on Perioperative Care in Primary Retroperitoneal Sarcoma Surgery"
              journal="Annals of Surgical Oncology" doi="10.1245/s10434-026-19520-5" />
            <PubItem year={2026} highlight
              title="¿Estamos tratando bien el tumor desmoide en España? Resultados de la primera encuesta nacional"
              journal="Cirugía Española" doi="10.1016/j.ciresp.2026.800333" />
            <PubItem year={2026} highlight
              title="ASO Author Reflections: Enhanced Recovery in Retroperitoneal Sarcoma Surgery—From Concept to Consensus"
              journal="Annals of Surgical Oncology" doi="10.1245/s10434-026-19595-0" />
            <PubItem year={2026} highlight
              title="Cuidados perioperatorios en la cirugía del sarcoma retroperitoneal primario"
              journal="Cirugía Española" doi="10.1016/j.ciresp.2025.800283" />
            <PubItem year={2026} highlight
              title="Experience of a Referral Center with Desmoid Tumors, Part 2: A Retrospective Analysis of 109 Cases"
              journal="Cancers" doi="10.3390/cancers18020305" />
            <PubItem year={2025}
              title="Desmoid Tumors—Experience from a Referral Center, Part 1: Multidisciplinary Review and Practical Recommendations"
              journal="Cancers" doi="10.3390/cancers17213470" />
            <PubItem year={2025}
              title="Diagnostic Delay in Soft Tissue Sarcomas: A Review"
              journal="Cancers" doi="10.3390/cancers17111861" />
            <PubItem year={2025}
              title="Ibero-American Consensus for the Management of Liver Metastases of Soft Tissue Sarcoma"
              journal="Cancers" doi="10.3390/cancers17081295" />
            <PubItem year={2023}
              title="Updated Review and Clinical Recommendations for the Diagnosis and Treatment of Patients with Retroperitoneal Sarcoma (GEIS)"
              authors="González Bayón L, Lozano Lominchar P et al."
              journal="Cancers" doi="10.3390/cancers15123194" />
            <PubItem year={2021}
              title="Effect of Cilastatin on Cisplatin-Induced Nephrotoxicity in Patients Undergoing Hyperthermic Intraperitoneal Chemotherapy"
              journal="International Journal of Molecular Sciences" doi="10.3390/ijms22031239" />
            <PubItem year={2021}
              title="Dermatofibrosarcoma Protuberans (DFSP) with Fibrosarcomatous Transformation: A Case Report"
              journal="Annals of Case Reports" doi="10.29011/2574-7754.100662" />
            <PubItem year={2018}
              title="Role of Intraoperative Radiotherapy in the Treatment of Sacral Chordoma"
              journal="The Spine Journal" />
            <PubItem year={2026}
              title="ASO Visual Abstract: Protective Effect of Diuresis During Hyperthermia on Acute Kidney Injury in CRS+HIPEC"
              journal="Annals of Surgical Oncology" doi="10.1245/s10434-026-19613-1" />
            <PubItem year={2023}
              title="Appendiceal Mucinous Neoplasms: From Clinic to Pathology and Prognosis"
              authors="González Bayón L, Martín Román L, Lozano Lominchar P"
              journal="Cancers" doi="10.3390/cancers15133426" />
            <PubItem year={2023}
              title="External Multicentre Validation of Pseudomyxoma Peritonei PSOGI-Ki67 Classification"
              journal="European Journal of Surgical Oncology" doi="10.1016/j.ejso.2023.03.206" />
          </PubGroup>

          {/* Tumores apendiculares / PMP */}
          <PubGroup label="Tumores Apendiculares y Pseudomixoma Peritonei" count={5}>
            <PubItem year={2022}
              title="ASO Author Reflections: Predicting Prognosis in Patients with Pseudomyxoma"
              journal="Annals of Surgical Oncology" doi="10.1245/s10434-022-12287-5" />
            <PubItem year={2022}
              title="Validation of a Nomogram to Predict Recurrence in Patients with Mucinous Neoplasms of the Appendix with Peritoneal Dissemination"
              journal="Annals of Surgical Oncology" doi="10.1245/s10434-022-12060-8" />
            <PubItem year={2021}
              title="Which Classification System Defines Best Prognosis of Mucinous Neoplasms of the Appendix with Peritoneal Dissemination: TNM vs PSOGI?"
              journal="Journal of Clinical Pathology" doi="10.1136/jclinpath-2021-207883" />
            <PubItem year={2021}
              title="Defining Stage in Mucinous Tumours of the Appendix with Peritoneal Dissemination: the Importance of Grading Terminology"
              journal="BJS Open" doi="10.1093/bjsopen/zrab059" />
            <PubItem year={2021}
              title="Advances in Neoadjuvant Therapy for Resectable Pancreatic Cancer over the Past Two Decades"
              journal="Annals of Hepato-Biliary-Pancreatic Surgery" doi="10.14701/ahbps.2021.25.2.179" />
          </PubGroup>

          {/* Cirugía hepática y trasplante */}
          <PubGroup label="Cirugía Hepática y Trasplante" count={3}>
            <PubItem year={2022}
              title="Mechanisms of Regenerative Preconditioning in Pigs with Subtotal Hepatectomies"
              journal="Cirugía y Cirujanos" doi="10.24875/ciru.21000373" />
            <PubItem year={2022}
              title="Neoadjuvant Therapy Impact in Early Pancreatic Cancer: 'Bioborderline' vs. 'Non-bioborderline'"
              journal="Annals of Hepato-Biliary-Pancreatic Surgery" doi="10.14701/ahbps.22-023" />
            <PubItem year={2017}
              title="Preconditioning by Portal Vein Embolization Modulates Hepatic Hemodynamics and Improves Liver Function in Pigs with Extended Hepatectomy"
              authors="Asencio JM, García-Sabrido JL, López-Baena JA, Lozano Lominchar P et al."
              journal="Surgery" />
          </PubGroup>

          {/* COVID-19 */}
          <PubGroup label="COVID-19 y Cirugía (Estudios Multicéntricos Internacionales)" count={18}>
            <PubItem year={2021}
              title="Timing of Surgery following SARS-CoV-2 Infection: An International Prospective Cohort Study"
              journal="Anaesthesia" doi="10.1111/anae.15458" />
            <PubItem year={2021}
              title="Effect of COVID-19 Pandemic Lockdowns on Planned Cancer Surgery for 15 Tumour Types in 61 Countries: An International, Prospective, Cohort Study"
              journal="The Lancet Oncology" doi="10.1016/s1470-2045(21)00493-9" />
            <PubItem year={2021}
              title="Elective Cancer Surgery in COVID-19–Free Surgical Pathways during the SARS-CoV-2 Pandemic: An International, Multicenter, Comparative Cohort Study"
              journal="Journal of Clinical Oncology" />
            <PubItem year={2021}
              title="SARS-CoV-2 Vaccination Modelling for Safe Surgery to Save Lives: Data from an International Prospective Cohort Study"
              journal="British Journal of Surgery" doi="10.1093/bjs/znab101" />
            <PubItem year={2021}
              title="Death following Pulmonary Complications of Surgery before and during the SARS-CoV-2 Pandemic"
              journal="British Journal of Surgery" doi="10.1093/bjs/znab336" />
            <PubItem year={2021}
              title="Preoperative Nasopharyngeal Swab Testing and Postoperative Pulmonary Complications in Patients Undergoing Elective Surgery during the SARS-CoV-2 Pandemic"
              journal="British Journal of Surgery" />
            <PubItem year={2021}
              title="Machine Learning Risk Prediction of Mortality for Patients Undergoing Surgery with Perioperative SARS-CoV-2: The COVIDSurg Mortality Score"
              journal="British Journal of Surgery" />
            <PubItem year={2021}
              title="Effects of Pre-operative Isolation on Postoperative Pulmonary Complications after Elective Surgery"
              journal="Anaesthesia" />
            <PubItem year={2021}
              title="Outcomes from Elective Colorectal Cancer Surgery during the SARS-CoV-2 Pandemic"
              journal="Colorectal Disease" />
            <PubItem year={2021}
              title="Head and Neck Cancer Surgery during the COVID-19 Pandemic: An International, Multicenter, Observational Cohort Study"
              journal="Cancer" />
            <PubItem year={2021}
              title="Early Outcomes and Complications following Cardiac Surgery in Patients Testing Positive for Coronavirus Disease 2019: An International Cohort Study"
              journal="The Journal of Thoracic and Cardiovascular Surgery" />
            <PubItem year={2022}
              title="SARS-CoV-2 Infection and Venous Thromboembolism after Surgery: An International Prospective Cohort Study"
              journal="Anaesthesia" />
            <PubItem year={2022}
              title="The Impact of Surgical Delay on Resectability of Colorectal Cancer: An International Prospective Cohort Study"
              journal="Colorectal Disease" />
            <PubItem year={2020}
              title="Delaying Surgery for Patients with a Previous SARS-CoV-2 Infection"
              journal="British Journal of Surgery" />
            <PubItem year={2020}
              title="Surgeons' Fear of Getting Infected by COVID-19: A Global Survey"
              journal="British Journal of Surgery" />
            <PubItem year={2020}
              title="Impact of Asymptomatic COVID-19 Patients in Global Surgical Practice during the COVID-19 Pandemic"
              journal="British Journal of Surgery" />
            <PubItem year={2020}
              title="Screening Policies, Preventive Measures and In-Hospital Infection of COVID-19 in Global Surgical Practices"
              journal="Journal of Global Health" doi="10.7189/jogh.10.020507" />
            <PubItem year={2021}
              title="Outcomes from Elective Colorectal Cancer Surgery during the SARS-CoV-2 Pandemic (COVIDSurg)"
              journal="Colorectal Disease" />
          </PubGroup>

          {/* Capítulos de libro */}
          <PubGroup label="Capítulos de Libro" count={2}>
            <PubItem year={2026} highlight
              title="Capítulo 6: Prehabilitación y Rehabilitación en la Cirugía de los Sarcomas Abdominales"
              authors="Lozano Lominchar P, Galindo Alins MJ, Jiménez Monasterio M"
              journal="Manual del Tratamiento Multidisciplinar de los Sarcomas Abdominales para Cirujanos · AEC (ISBN: 978-84-09-85717-3)" />
            <PubItem year={2026} highlight
              title="Capítulo 30: Manejo Multidisciplinar de la Recidiva y Enfermedad Metastásica en GIST"
              authors="González Bayón L, Lozano Lominchar P"
              journal="Manual del Tratamiento Multidisciplinar de los Sarcomas Abdominales para Cirujanos · AEC (ISBN: 978-84-09-85717-3)" />
          </PubGroup>

          {/* Tesis */}
          <PubGroup label="Tesis Doctoral" count={1}>
            <PubItem year={2017}
              title="Medición de la Hemodinámica Hepática Intraoperatoria en Cirugía de Trasplante Hepático Ortotópico Cadavérico y su Relación con la Disfunción Primaria del Injerto"
              authors="Dir: García-Sabrido JL, López-Baena JA · Sobresaliente Cum Laude"
              journal="Universidad Complutense de Madrid · Facultad de Medicina · Departamento de Cirugía" />
          </PubGroup>

          {/* Congresos */}
          <PubGroup label="Comunicaciones a Congresos (selección)" count={1}>
            <PubItem year={2024}
              title="Multidisciplinary Management of Intra-Abdominal Desmoid-Type Fibromatosis: A 30-Years Experience (Poster P380)"
              journal="CTOS Annual Meeting 2024 · Connective Tissue Oncology Society" />
          </PubGroup>

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
