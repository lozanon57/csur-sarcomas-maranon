import type { Algoritmo } from '../types'

export const ALGORITMOS: Algoritmo[] = [
  {
    id: 'diag-masa-partes-blandas',
    titulo: 'Evaluación inicial de masa de partes blandas',
    subtitulo: 'NCCN Soft Tissue Sarcoma v1.2025 · ESMO STS Guidelines 2025',
    categoria: 'diagnostico',
    version: 'NCCN 2025',
    fuente: 'NCCN v1.2025 + ESMO 2025',
    referencias: [
      'NCCN Clinical Practice Guidelines in Oncology: Soft Tissue Sarcoma v1.2025',
      'ESMO Clinical Practice Guidelines for STS 2025 (Gronchi et al., Ann Oncol)',
      'WHO Classification of Tumours 5th ed. Soft Tissue and Bone Tumours 2020'
    ],
    nodos: [
      { id: 'n1', tipo: 'inicio', texto: 'Masa de partes blandas detectada', detalle: 'Cualquier masa de partes blandas de nueva aparición o crecimiento progresivo' },
      { id: 'n2', tipo: 'decision', texto: '¿Tamaño >5 cm O profunda (subfascial)?', detalle: 'Medir en 3 planos. Profunda = bajo la fascia muscular superficial', si: 'n4', no: 'n3' },
      { id: 'n3', tipo: 'decision', texto: '¿Superficial <5 cm + características benignas (lipoma, quiste)?', detalle: 'RM + ecografía pueden sugerir lipoma o quiste benigno inequívocos', si: 'n3a', no: 'n4' },
      { id: 'n3a', tipo: 'accion', texto: 'Seguimiento o resección local simple si accesible', detalle: 'Seguimiento ecográfico a 3 meses. Si crece: biopsia. Lipoma >5 cm: RM y considerar FISH MDM2 para excluir ALT.' },
      { id: 'n4', tipo: 'accion', texto: 'RM con contraste de la región afectada (estudio de extensión local)', detalle: 'RM es la técnica de elección para caracterización local. TC alternativa si RM contraindicada. Incluir secuencias T1, T2, STIR, T1 contraste dinámico.' },
      { id: 'n5', tipo: 'decision', texto: '¿RM sugestiva de sarcoma (señal heterogénea, extensión vascular, necrosis central)?', detalle: 'Características de alarma: masa profunda >5 cm, heterogénea, vascularizada, necrosis central, sin cápsula definida', si: 'n6', no: 'n5a' },
      { id: 'n5a', tipo: 'accion', texto: 'Discutir en comité multidisciplinar (CSUR si alta sospecha)', detalle: 'Incluso si RM no es diagnóstica, masa profunda >5 cm requiere evaluación especializada' },
      { id: 'n6', tipo: 'accion', texto: 'BIOPSIA obligatoria antes de cualquier cirugía', detalle: 'NUNCA resecar sin diagnóstico histológico previo. Planificar trayecto de biopsia que pueda resecarse en bloc con el tumor.' },
      { id: 'n7', tipo: 'decision', texto: '¿Localización superficial accesible (punción guiada por ECO/TC)?', detalle: 'Mayoría de sarcomas: biopsia core guiada por imagen (Tru-cut 16G, mínimo 3 cilindros)', si: 'n8', no: 'n9' },
      { id: 'n8', tipo: 'accion', texto: 'Biopsia core con aguja gruesa guiada por ECO o TC', detalle: 'Aguja 16G Tru-cut, mínimo 3-5 cilindros. El trayecto debe ser planificado por el cirujano (será resecado). Enviar a patología de referencia con experiencia en sarcomas.' },
      { id: 'n9', tipo: 'accion', texto: 'Biopsia incisional quirúrgica planificada por cirujano de sarcomas', detalle: 'Incisión longitudinal pequeña en el eje del miembro. NO biopsia excisional. NO contaminación de compartimentos. Hemostasia cuidadosa.' },
      { id: 'n10', tipo: 'resultado', texto: 'Resultado histológico + IHQ + FISH/NGS según sospecha', detalle: 'Panel IHQ mínimo: vimentina, S100, CD34, SMA, desmina, CD99, CK. Añadir marcadores específicos según morfología. NGS en tumor refractario o subtipo raro.' },
      { id: 'n11', tipo: 'derivacion', texto: 'Presentar en comité CSUR con histología, imagen y staging completo', detalle: 'TC tórax (M1 pulmonar), TC abdomen-pelvis (retroperitoneo), gammagrafía ósea (si síntomas), PET-TC (Ewing, RMS, enfermedad avanzada)' }
    ]
  },
  {
    id: 'tto-sts-localizado-extremidad',
    titulo: 'Tratamiento STS localizado de extremidad',
    subtitulo: 'Sarcoma de tejidos blandos — NCCN 2025 · ESMO 2025',
    categoria: 'tratamiento',
    version: 'NCCN 2025',
    fuente: 'NCCN v1.2025 + ESMO 2025',
    referencias: [
      'NCCN v1.2025 Soft Tissue Sarcoma',
      'ESMO Guidelines 2025 Soft Tissue Sarcoma (Gronchi et al.)',
      'Casali et al., Ann Oncol 2021 (ESMO/EURACAN)',
      'Sarculator online tool (Sarcoma Calculator for prognosis)'
    ],
    nodos: [
      { id: 'n1', tipo: 'inicio', texto: 'STS localizado de extremidad — diagnóstico confirmado', detalle: 'Histología definitiva confirmada por patólogo de referencia. Sin metástasis a distancia (M0).' },
      { id: 'n2', tipo: 'decision', texto: '¿Grado histológico (FNCLCC)?', detalle: 'Grado 1 (FNCLCC ≤2 pts), Grado 2 (FNCLCC 3-4 pts), Grado 3 (FNCLCC 5-6 pts)', opciones: [{ texto: 'G1 (bajo grado)', siguiente: 'n3' }, { texto: 'G2-G3 (alto grado)', siguiente: 'n4' }] },
      { id: 'n3', tipo: 'decision', texto: 'G1: ¿Tamaño >5 cm y/o márgenes comprometidos?', si: 'n3b', no: 'n3a' },
      { id: 'n3a', tipo: 'accion', texto: 'Cirugía R0 sola — no QT ni RT adyuvante estándar', detalle: 'STS G1 <5 cm resecado R0: seguimiento sin tratamiento adyuvante. Seguimiento RM + TC tórax.' },
      { id: 'n3b', tipo: 'accion', texto: 'Cirugía R0 ± RT adyuvante según márgenes', detalle: 'RT adyuvante (50-66 Gy) en R1 o márgenes ajustados en G1. QT adyuvante no indicada en G1.' },
      { id: 'n4', tipo: 'decision', texto: 'G2-G3: ¿Tamaño del tumor?', opciones: [{ texto: '<5 cm', siguiente: 'n4a' }, { texto: '5-10 cm', siguiente: 'n4b' }, { texto: '>10 cm', siguiente: 'n4c' }] },
      { id: 'n4a', tipo: 'accion', texto: 'Cirugía R0 + considerar RT adyuvante (márgenes <1 cm)', detalle: 'STS G2-G3 <5 cm: cirugía principal. RT adyuvante si márgenes <1 cm o R1. QT adyuvante: no estándar, considerar en G3 <5 cm si alto riesgo por IHQ.' },
      { id: 'n4b', tipo: 'accion', texto: 'Calcular Sarculator risk score → si riesgo alto: QT ± RT neoadyuvante', detalle: 'Sarculator (sarculator.com): si riesgo de metástasis a 10 años >50% → QT neoadyuvante (EORTC 62931, ISG-STS 1001). Regímenes: AI (doxorubicina 75 mg/m² + ifosfamida 9 g/m²) × 3 ciclos → cirugía → QT adyuvante × 3 ciclos.' },
      { id: 'n4c', tipo: 'accion', texto: '≥10 cm G2-G3: QT neoadyuvante + cirugía + RT adyuvante (ESTÁNDAR de alta complejidad)', detalle: 'QT neoadyuvante: AI × 3 ciclos (ISG-STS 1001). Evaluar respuesta (RM + criterios Choi). Cirugía R0 (conservadora de miembro en >90%). RT adyuvante 50-66 Gy. QT adyuvante × 3 ciclos adicionales.' },
      { id: 'n5', tipo: 'decision', texto: '¿Cirugía conservadora de miembro posible con márgenes adecuados?', si: 'n5a', no: 'n5b' },
      { id: 'n5a', tipo: 'accion', texto: 'Cirugía conservadora de miembro (limb-sparing surgery)', detalle: 'Objetivo: R0 con márgenes ≥1 cm (o fascia intacta como barrera). Preservación de miembro sin comprometer oncología. Reconstrucción inmediata si necesaria.' },
      { id: 'n5b', tipo: 'accion', texto: 'Amputación o desarticulación si única opción R0', detalle: 'Amputación solo si no es posible preservar miembro funcional con márgenes adecuados. Segunda opinión recomendada en CSUR.' },
      { id: 'n6', tipo: 'resultado', texto: 'Seguimiento post-tratamiento', detalle: 'RM local cada 3-4 meses durante 2-3 años, luego semestral. TC tórax cada 3-4 meses durante 3 años (metástasis pulmonares). Ajustar frecuencia al riesgo histológico.' }
    ]
  },
  {
    id: 'tto-lps-retroperitoneal',
    titulo: 'Tratamiento liposarcoma retroperitoneal',
    subtitulo: 'Protocolo TARPSWG/EORTC · NCCN 2025',
    categoria: 'tratamiento',
    version: 'TARPSWG 2025',
    fuente: 'Trans-Atlantic Retroperitoneal Sarcoma Working Group (TARPSWG) + NCCN 2025',
    referencias: [
      'TARPSWG Consensus Statement 2022 (Gronchi et al., Eur J Surg Oncol)',
      'STRASS trial (Bonvalot et al., Lancet Oncol 2020)',
      'NCCN v1.2025 Retroperitoneal/Intra-Abdominal Sarcoma'
    ],
    nodos: [
      { id: 'n1', tipo: 'inicio', texto: 'Liposarcoma retroperitoneal — diagnóstico histológico confirmado', detalle: 'LPS-BD, LPS-DD o LPS mixoide/pleomórfico retroperitoneal. Estadificación completa (TC tórax-abdominal-pelvis).' },
      { id: 'n2', tipo: 'decision', texto: '¿Subtipo histológico?', opciones: [{ texto: 'LPS-BD (solo, G1)', siguiente: 'n3' }, { texto: 'LPS-DD (G2-G3)', siguiente: 'n4' }, { texto: 'LPS mixoide/pleomórfico', siguiente: 'n4b' }] },
      { id: 'n3', tipo: 'decision', texto: 'LPS-BD: ¿Resecable en una pieza?', si: 'n3a', no: 'n3b' },
      { id: 'n3a', tipo: 'accion', texto: 'Cirugía compartmental R0 (TARPSWG protocol)', detalle: 'Resección en bloque incluyendo órganos adyacentes aunque macroscópicamente normales (riñón, glándula suprarrenal, colon, mesenterio). NO cirugía de exéresis simple. Objetivo: R0 o R1 microscópico.' },
      { id: 'n3b', tipo: 'accion', texto: 'LPS-BD irresecable: vigilancia activa o cirugía de debulking en síntomas', detalle: 'LPS-BD puro sin componente DD: bajo potencial metastásico. Vigilancia cada 3-6 meses es válida si asintomático. Cirugía si compresión visceral/vascular.' },
      { id: 'n4', tipo: 'decision', texto: 'LPS-DD: ¿Resecable con márgenes R0/R1?', si: 'n4a', no: 'n4c' },
      { id: 'n4a', tipo: 'accion', texto: 'QT neoadyuvante (opcional) → Cirugía compartmental R0 → QT adyuvante', detalle: 'QT neoadyuvante (doxorubicina + ifosfamida × 3 ciclos) en LPS-DD G3 o tamaño >15 cm. Cirugía radical compartmental. QT adyuvante en R1 o G3 de alto riesgo. RT adyuvante: evidencia limitada (STRASS-2 estudio activo).' },
      { id: 'n4b', tipo: 'accion', texto: 'LPS mixoide retroperitoneal: trabectedina ± RT neoadyuvante → cirugía', detalle: 'LPS mixoide es exquisitamente sensible a trabectedina. Considerar trabectedina neoadyuvante + RT (50 Gy). Cirugía tras respuesta.' },
      { id: 'n4c', tipo: 'accion', texto: 'LPS-DD irresecable o M1: QT sistémica', detalle: 'Primera línea: doxorubicina ± ifosfamida. Segunda línea: eribulina (aprobada EMA para LPS), trabectedina. CDK4/6 inhibidores (palbociclib, abemaciclib) en ensayos clínicos. Evaluar NGS para dianas terapéuticas.' },
      { id: 'n5', tipo: 'resultado', texto: 'Seguimiento post-resección', detalle: 'TC tórax-abdomen-pelvis cada 3-4 meses durante 2 años, luego semestral. Alto riesgo de recidiva local: >50% a 5 años en LPS-BD, ~30% en LPS-DD. Metástasis pulmonares en LPS-DD ~15%.' }
    ]
  },
  {
    id: 'tto-gist',
    titulo: 'Tratamiento GIST — Algoritmo completo',
    subtitulo: 'ESMO/EURACAN GIST Guidelines 2025 · Clasificación NIH/Miettinen',
    categoria: 'tratamiento',
    version: 'ESMO 2025',
    fuente: 'ESMO GIST Guidelines 2025 (Casali et al.) + NCCN 2025',
    referencias: [
      'ESMO/EURACAN Clinical Practice Guidelines GIST 2025',
      'NCCN v1.2025 GIST',
      'SSGXVIII/AIO trial (Joensuu et al., NEJM 2012): imatinib adyuvante 3 vs 1 año',
      'NAVIGATOR trial (Heinrich et al., NEJM 2022): avapritinib en PDGFRA D842V'
    ],
    nodos: [
      { id: 'n1', tipo: 'inicio', texto: 'GIST — diagnóstico confirmado (CD117/DOG1+, mutación KIT/PDGFRA)', detalle: 'Análisis mutacional OBLIGATORIO (KIT exones 9, 11, 13, 17; PDGFRA exones 12, 14, 18; o NGS panel). Clasificación de riesgo NIH/Miettinen.' },
      { id: 'n2', tipo: 'decision', texto: '¿Mutación PDGFRA exón 18 D842V?', si: 'n2a', no: 'n3' },
      { id: 'n2a', tipo: 'accion', texto: 'AVAPRITINIB primera línea (300 mg/día)', detalle: 'PDGFRA D842V: RESISTENTE a imatinib, sunitinib, regorafenib. Avapritinib aprobado FDA/EMA. ORR 84%. Vigilar: edema periorbital, síndrome de encefalopatía.' },
      { id: 'n3', tipo: 'decision', texto: '¿Enfermedad localizada resecable?', si: 'n4', no: 'n8' },
      { id: 'n4', tipo: 'decision', texto: '¿Tumor resecable sin morbilidad importante o en localización favorable?', si: 'n5', no: 'n4a' },
      { id: 'n4a', tipo: 'accion', texto: 'Imatinib neoadyuvante para reducir tamaño y permitir R0', detalle: 'GIST gástrico grande, duodenal, rectal, o en localización que requiera cirugía mutilante. Imatinib 400 mg/día (u 800 si KIT exón 9) × 6-12 meses. Reevaluar con TC (criterios Choi). Re-resección.' },
      { id: 'n5', tipo: 'accion', texto: 'Cirugía R0 — sin linfadenectomía rutinaria', detalle: 'Cirugía con márgenes R0. NO linfadenectomía (GIST raramente N+). Márgenes de 1-2 cm suficientes. No necesita márgenes amplios de sarcoma.' },
      { id: 'n6', tipo: 'decision', texto: '¿Clasificación de riesgo NIH post-quirúrgico? (tamaño + mitosis + localización)', opciones: [{ texto: 'Muy bajo / Bajo riesgo', siguiente: 'n6a' }, { texto: 'Riesgo intermedio', siguiente: 'n6b' }, { texto: 'Alto riesgo', siguiente: 'n6c' }] },
      { id: 'n6a', tipo: 'accion', texto: 'Seguimiento sin imatinib adyuvante', detalle: 'Bajo riesgo: no adyuvante. TC cada 6 meses × 5 años.' },
      { id: 'n6b', tipo: 'accion', texto: 'Considerar imatinib adyuvante 1-3 años (discutir en comité)', detalle: 'Intermedio: datos limitados. Algunos grupos recomiendan 1 año. Discutir beneficio/riesgo con el paciente.' },
      { id: 'n6c', tipo: 'accion', texto: 'Imatinib adyuvante 3 AÑOS (SSGXVIII: SG mejorada vs 1 año)', detalle: 'SSGXVIII (Joensuu, NEJM 2012): 3 años superiores a 1 año en alto riesgo. Dosis: 400 mg/día (800 mg si KIT exón 9). TC cada 3-6 meses durante adyuvancia.' },
      { id: 'n8', tipo: 'accion', texto: 'GIST metastásico/irresecable: Imatinib primera línea', detalle: 'Imatinib 400 mg/día (KIT exón 11 o PDGFRA no-D842V). 800 mg/día para KIT exón 9. Respuesta en >80%. Continuar hasta progresión o toxicidad inaceptable. NO interrumpir por remisión completa (recaída rápida).' },
      { id: 'n9', tipo: 'decision', texto: 'Progresión con imatinib: ¿mutación de resistencia?', si: 'n9a', no: 'n9b' },
      { id: 'n9a', tipo: 'accion', texto: '2ª línea: Sunitinib 50 mg 4/2 ó 37.5 mg continuo', detalle: 'Sunitinib: PFS mediana 6 meses. Mutaciones KIT exón 13/14 (secundarias) más sensibles que exón 17/18.' },
      { id: 'n9b', tipo: 'accion', texto: '3ª línea: Regorafenib. 4ª línea: Ripretinib', detalle: 'Regorafenib: 160 mg × 21 días/28. Ripretinib (4ª línea): 150 mg/día. Evaluar ensayos clínicos en cada progresión.' }
    ]
  },
  {
    id: 'estadificacion-sts',
    titulo: 'Estadificación AJCC 8ª edición — Sarcomas tejidos blandos',
    subtitulo: 'AJCC Cancer Staging Manual 8th Edition 2017',
    categoria: 'estadificacion',
    version: 'AJCC 8ª ed. 2017',
    fuente: 'AJCC Cancer Staging Manual 8th Edition (Amin et al., 2017)',
    referencias: [
      'AJCC Cancer Staging Manual 8th Edition (Amin MB et al., 2017)',
      'FNCLCC grading system (Coindre et al.)',
      'Enneking staging system for musculoskeletal sarcomas'
    ],
    nodos: [
      { id: 'n1', tipo: 'inicio', texto: 'Clasificación T — Tumor primario (STS extremidades/tronco)', detalle: 'T1: ≤5 cm. T2: >5 cm ≤10 cm. T3: >10 cm ≤15 cm. T4: >15 cm. Profundidad (a=superficial/b=profunda) ya no se usa en AJCC 8ª.' },
      { id: 'n2', tipo: 'accion', texto: 'Clasificación N — Ganglios regionales', detalle: 'N0: sin ganglios afectados. N1: ganglios regionales afectados. NOTA: N1 = Estadio IV en AJCC 8ª (excepto RMS y angiosarcoma donde N es menos determinante). Metástasis ganglionares en STS son raras (<5%) excepto sarcoma epitelioide y RMS.' },
      { id: 'n3', tipo: 'accion', texto: 'Clasificación M — Metástasis a distancia', detalle: 'M0: sin metástasis. M1: metástasis a distancia (pulmón, hígado, hueso, etc.).' },
      { id: 'n4', tipo: 'accion', texto: 'Grado histológico FNCLCC (G1-G3)', detalle: 'Puntuación total (1-6) = diferenciación tumoral (1-3) + índice mitótico (1-3) + necrosis (0-2).\nG1 = 2-3 pts. G2 = 4-5 pts. G3 = 6-8 pts.\nCRÍTICO: el grado es el factor pronóstico más importante en STS.' },
      { id: 'n5', tipo: 'resultado', texto: 'Estadios AJCC 8ª ed. (extremidades/tronco)', detalle: 'IA: T1 N0 M0 G1. IB: T2-T4 N0 M0 G1. II: T1 N0 M0 G2-G3. IIIA: T2 N0 M0 G2-G3. IIIB: T3-T4 N0 M0 G2-G3. IV: cualquier T N1 M0, O cualquier T cualquier N M1.' },
      { id: 'n6', tipo: 'accion', texto: 'NOTA: Sistema específico para STS retroperitoneal/abdominal (diferente)', detalle: 'STS retroperitoneal/intra-abdominal tiene su propio estadiaje AJCC 8ª (sin T4 definido igual, grado más crítico). Usar tablas AJCC específicas según localización.' }
    ]
  },
  {
    id: 'seguimiento-sts',
    titulo: 'Seguimiento post-tratamiento STS',
    subtitulo: 'ESMO 2025 · NCCN 2025',
    categoria: 'seguimiento',
    version: 'ESMO 2025',
    fuente: 'ESMO 2025 + NCCN 2025',
    referencias: [
      'ESMO Clinical Practice Guidelines 2025: Follow-up',
      'NCCN v1.2025: Surveillance',
      'Sarculator risk stratification tool'
    ],
    nodos: [
      { id: 'n1', tipo: 'inicio', texto: 'Post-resección quirúrgica R0 — iniciar protocolo de seguimiento', detalle: 'Adaptar la frecuencia al riesgo histológico (grado, tamaño, subtipo). Usar Sarculator para calcular riesgo de metástasis.' },
      { id: 'n2', tipo: 'decision', texto: '¿Riesgo de recurrencia (Sarculator / grado)?', opciones: [{ texto: 'Bajo riesgo (G1, <5 cm)', siguiente: 'n3' }, { texto: 'Riesgo intermedio (G2, 5-10 cm)', siguiente: 'n4' }, { texto: 'Alto riesgo (G3 o >10 cm)', siguiente: 'n5' }] },
      { id: 'n3', tipo: 'accion', texto: 'Bajo riesgo: TC tórax + RM local cada 6 meses × 5 años', detalle: 'Después de 5 años sin recidiva: control anual clínico. TC tórax y RM local anuales × 5 años más.' },
      { id: 'n4', tipo: 'accion', texto: 'Intermedio: TC tórax + RM local cada 4 meses × 3 años → cada 6 meses × 2 años', detalle: 'Total 5 años de seguimiento intensivo. Luego anual × 5 años más.' },
      { id: 'n5', tipo: 'accion', texto: 'Alto riesgo: TC tórax + RM local cada 3 meses × 3 años → cada 4 meses × 2 años', detalle: 'Total 5 años intensivo. Luego semestral × 5 años. Considerar PET-TC en Ewing y RMS.' },
      { id: 'n6', tipo: 'accion', texto: 'Recidiva local: presentar en comité CSUR para re-evaluación', detalle: 'Segunda resección si posible. Considerar RT si no recibida. QT sistémica si metástasis concomitantes. Re-biopsia para descartar desdiferenciación.' },
      { id: 'n7', tipo: 'resultado', texto: 'Metástasis pulmonares detectadas', detalle: '¿Resecables? → metastasectomía pulmonar (mejora SG en pacientes seleccionados). No resecables → QT sistémica 1ª línea. Evaluar siempre en comité CSUR.' }
    ]
  }
]
