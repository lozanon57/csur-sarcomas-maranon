import type { Algoritmo } from '../types'

export const ALGORITMOS: Algoritmo[] = [

  // ══════════════════════════════════════════════════════════════════
  // DIAGNÓSTICO
  // ══════════════════════════════════════════════════════════════════
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
      'WHO Classification of Tumours 5th ed. Soft Tissue and Bone Tumours 2020',
    ],
    nodos: [
      {
        id: 'n1', tipo: 'inicio',
        texto: 'Masa de partes blandas detectada',
        detalle: 'Cualquier masa de nueva aparición o con crecimiento progresivo.',
        siguiente: 'n2',
      },
      {
        id: 'n2', tipo: 'decision',
        texto: '¿Tamaño >5 cm O localización profunda (subfascial)?',
        detalle: 'Medir en 3 planos. Profunda = bajo la fascia muscular superficial.',
        si: 'n4', no: 'n3',
      },
      {
        id: 'n3', tipo: 'decision',
        texto: '¿Superficial <5 cm con características benignas inequívocas (lipoma, quiste)?',
        detalle: 'RM + ecografía pueden sugerir lipoma o quiste benigno. Lipoma >5 cm: FISH MDM2.',
        si: 'n3a', no: 'n4',
      },
      {
        id: 'n3a', tipo: 'accion',
        texto: 'Seguimiento o resección local simple si accesible',
        detalle: 'Control ecográfico a 3 meses. Si crece: biopsia. Lipoma >5 cm: considerar FISH MDM2 para excluir ALT.',
        // TERMINAL: rama benigna conservadora
      },
      {
        id: 'n4', tipo: 'accion',
        texto: 'RM con contraste de la región afectada',
        detalle: 'RM es la técnica de elección para caracterización local. TC si RM contraindicada.\nSecuencias: T1, T2, STIR, T1 contraste dinámico.',
        siguiente: 'n5',
      },
      {
        id: 'n5', tipo: 'decision',
        texto: '¿RM sugestiva de sarcoma? (masa heterogénea, >5 cm, necrosis central, invasión vascular)',
        detalle: 'Señales de alarma: profunda >5 cm, vascularizada, sin cápsula definida, necrosis.',
        si: 'n6', no: 'n5a',
      },
      {
        id: 'n5a', tipo: 'derivacion',
        texto: 'Discutir en comité multidisciplinar aunque RM no sea diagnóstica',
        detalle: 'Masa profunda >5 cm requiere evaluación especializada en CSUR independientemente de los hallazgos de imagen.',
        // TERMINAL: derivar a comité
      },
      {
        id: 'n6', tipo: 'accion',
        texto: 'BIOPSIA obligatoria antes de cualquier cirugía',
        detalle: 'NUNCA resecar sin diagnóstico histológico previo.\nPlanificar trayecto de biopsia resecable en bloc con el tumor.',
        siguiente: 'n7',
      },
      {
        id: 'n7', tipo: 'decision',
        texto: '¿Localización superficial accesible (guiada por ECO/TC)?',
        detalle: 'Mayoría de sarcomas: biopsia core 16G guiada por imagen, mínimo 3-5 cilindros.',
        si: 'n8', no: 'n9',
      },
      {
        id: 'n8', tipo: 'accion',
        texto: 'Biopsia core con aguja gruesa guiada por ECO o TC',
        detalle: 'Aguja 16G Tru-cut, mínimo 3-5 cilindros.\nEl trayecto debe ser planificado por el cirujano (será resecado en la cirugía definitiva).\nEnviar a patología de referencia con experiencia en sarcomas.',
        siguiente: 'n10',
      },
      {
        id: 'n9', tipo: 'accion',
        texto: 'Biopsia incisional quirúrgica planificada por cirujano de sarcomas',
        detalle: 'Incisión longitudinal pequeña en el eje del miembro.\nNO biopsia excisional. NO contaminación de compartimentos. Hemostasia cuidadosa.',
        siguiente: 'n10',
      },
      {
        id: 'n10', tipo: 'resultado',
        texto: 'Resultado histológico + IHQ + FISH/NGS según sospecha',
        detalle: 'Panel IHQ mínimo: vimentina, S100, CD34, SMA, desmina, CD99, CK.\nAñadir marcadores específicos según morfología.\nNGS en tumor refractario o subtipo raro.',
        siguiente: 'n11',
      },
      {
        id: 'n11', tipo: 'derivacion',
        texto: 'Presentar en comité CSUR con histología, imagen y estadificación completa',
        detalle: 'TC tórax (M1 pulmonar) · TC abdominal-pélvico (retroperitoneo) · Gammagrafía ósea si síntomas · PET-TC en Ewing, RMS, enfermedad avanzada.',
        // TERMINAL
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // TRATAMIENTO
  // ══════════════════════════════════════════════════════════════════
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
      'EORTC 62931 (Woll et al., Lancet Oncol 2012) — QT adyuvante no estándar',
      'ISG-STS 1001 (Gronchi et al., Lancet Oncol 2020) — QT neoadyuvante',
      'Sarculator risk tool: sarculator.com',
    ],
    nodos: [
      {
        id: 'n1', tipo: 'inicio',
        texto: 'STS localizado de extremidad — diagnóstico confirmado',
        detalle: 'Histología definitiva confirmada por patólogo de referencia. Sin metástasis a distancia (M0).',
        siguiente: 'n2',
      },
      {
        id: 'n2', tipo: 'decision',
        texto: '¿Cuál es el grado histológico (FNCLCC)?',
        detalle: 'Grado 1 (FNCLCC ≤2 pts) · Grado 2 (3-4 pts) · Grado 3 (5-6 pts). El grado es el factor pronóstico más importante.',
        opciones: [
          { texto: 'G1 — Bajo grado', siguiente: 'n3' },
          { texto: 'G2-G3 — Alto grado', siguiente: 'n4' },
        ],
      },
      {
        id: 'n3', tipo: 'decision',
        texto: 'G1: ¿Tamaño >5 cm y/o márgenes comprometidos?',
        detalle: 'G1 pequeño con márgenes negativos tiene muy bajo riesgo de metástasis.',
        si: 'n3b', no: 'n3a',
      },
      {
        id: 'n3a', tipo: 'accion',
        texto: 'Cirugía R0 sola — no QT ni RT adyuvante estándar',
        detalle: 'STS G1 <5 cm resecado R0: seguimiento sin tratamiento adyuvante.\nSegúimiento: RM local + TC tórax cada 6 meses × 5 años.',
        siguiente: 'n5',
      },
      {
        id: 'n3b', tipo: 'accion',
        texto: 'Cirugía R0 ± RT adyuvante según márgenes',
        detalle: 'RT adyuvante (50-66 Gy) en R1 o márgenes ajustados en G1.\nQT adyuvante NO indicada en G1.',
        siguiente: 'n5',
      },
      {
        id: 'n4', tipo: 'decision',
        texto: 'G2-G3: ¿Cuál es el tamaño del tumor?',
        detalle: 'Usar Sarculator (sarculator.com) para calcular riesgo de metástasis a 10 años.',
        opciones: [
          { texto: '<5 cm', siguiente: 'n4a' },
          { texto: '5-10 cm', siguiente: 'n4b' },
          { texto: '>10 cm', siguiente: 'n4c' },
        ],
      },
      {
        id: 'n4a', tipo: 'accion',
        texto: 'Cirugía R0 + considerar RT adyuvante si márgenes <1 cm',
        detalle: 'QT adyuvante: no estándar. Considerar en G3 <5 cm si muy alto riesgo por IHQ/NGS.\nRT adyuvante si márgenes <1 cm o R1.',
        siguiente: 'n5',
      },
      {
        id: 'n4b', tipo: 'accion',
        texto: 'Calcular Sarculator → si riesgo >50%: QT ± RT neoadyuvante',
        detalle: 'Si riesgo metástasis a 10 años >50%: QT neoadyuvante (ISG-STS 1001).\nRégimen: AI (doxorubicina 75 mg/m² + ifosfamida 9 g/m²) × 3 ciclos → cirugía → QT adyuvante × 3 ciclos.',
        siguiente: 'n5',
      },
      {
        id: 'n4c', tipo: 'accion',
        texto: '≥10 cm G2-G3: QT neoadyuvante AI × 3 → cirugía → QT adyuvante × 3 + RT',
        detalle: 'QT neoadyuvante: AI × 3 ciclos. Evaluar respuesta con RM (criterios Choi).\nCirugía R0 conservadora de miembro en >90%. RT adyuvante 50-66 Gy.\nQT adyuvante × 3 ciclos adicionales.',
        siguiente: 'n5',
      },
      {
        id: 'n5', tipo: 'decision',
        texto: '¿Es posible la cirugía conservadora de miembro con márgenes adecuados?',
        detalle: 'Objetivo R0 con márgenes ≥1 cm o fascia intacta como barrera oncológica.',
        si: 'n5a', no: 'n5b',
      },
      {
        id: 'n5a', tipo: 'accion',
        texto: 'Cirugía conservadora de miembro (limb-sparing surgery)',
        detalle: 'Cirugía conservadora estándar en >90% de sarcomas de extremidades (Rosenberg, Ann Surg 1982).\nPreservación funcional sin comprometer oncología. Reconstrucción inmediata si necesaria.',
        siguiente: 'n6',
      },
      {
        id: 'n5b', tipo: 'accion',
        texto: 'Amputación solo si es la única opción R0',
        detalle: 'Amputación si no es posible preservar miembro funcional con márgenes adecuados.\nSolicitar segunda opinión en CSUR de referencia.',
        siguiente: 'n6',
      },
      {
        id: 'n6', tipo: 'resultado',
        texto: 'Seguimiento post-tratamiento basado en riesgo',
        detalle: 'RM local + TC tórax:\n• Alto riesgo (G3/>10 cm): cada 3 meses × 3 años\n• Riesgo intermedio: cada 4 meses × 3 años\n• Bajo riesgo (G1/<5 cm): cada 6 meses × 5 años\nUsar Sarculator para estratificación.',
        // TERMINAL
      },
    ],
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
      'STRASS trial (Bonvalot et al., Lancet Oncol 2020) — RT neoadyuvante no estándar universal',
      'NCCN v1.2025 Retroperitoneal/Intra-Abdominal Sarcoma',
      'Eribulina en LPS: Schöffski et al., Lancet 2016',
    ],
    nodos: [
      {
        id: 'n1', tipo: 'inicio',
        texto: 'Liposarcoma retroperitoneal — diagnóstico histológico confirmado',
        detalle: 'LPS-BD, LPS-DD o LPS mixoide/pleomórfico retroperitoneal. Estadificación completa (TC tórax-abdominal-pelvis).',
        siguiente: 'n2',
      },
      {
        id: 'n2', tipo: 'decision',
        texto: '¿Cuál es el subtipo histológico?',
        detalle: 'El subtipo determina el comportamiento biológico y la estrategia terapéutica.',
        opciones: [
          { texto: 'LPS-BD (solo, G1)', siguiente: 'n3' },
          { texto: 'LPS-DD (G2-G3)', siguiente: 'n4' },
          { texto: 'LPS mixoide / pleomórfico', siguiente: 'n4b' },
        ],
      },
      {
        id: 'n3', tipo: 'decision',
        texto: 'LPS-BD: ¿Resecable en una pieza con cirugía compartmental?',
        detalle: 'Valorar extensión vascular, afectación de órganos adyacentes y estado funcional del paciente.',
        si: 'n3a', no: 'n3b',
      },
      {
        id: 'n3a', tipo: 'accion',
        texto: 'Cirugía compartmental R0 (protocolo TARPSWG)',
        detalle: 'Resección en bloque incluyendo órganos adyacentes aunque macroscópicamente normales (riñón, glándula suprarrenal, colon).\nObjetivo: R0 o R1 microscópico mínimo.',
        siguiente: 'n5',
      },
      {
        id: 'n3b', tipo: 'accion',
        texto: 'LPS-BD irresecable: vigilancia activa o cirugía de debulking si hay síntomas',
        detalle: 'LPS-BD puro sin componente DD: bajo potencial metastásico. Vigilancia semestral válida si asintomático.\nCirugía si compresión visceral o vascular.',
        // TERMINAL
      },
      {
        id: 'n4', tipo: 'decision',
        texto: 'LPS-DD: ¿Resecable con márgenes R0/R1 mediante cirugía compartmental?',
        detalle: 'Valorar: tamaño, extensión vascular, nódulos satélites, estado general. PET-TC para descartar M1.',
        si: 'n4a', no: 'n4c',
      },
      {
        id: 'n4a', tipo: 'accion',
        texto: 'QT neoadyuvante (opcional en G3/>15 cm) → Cirugía compartmental → QT adyuvante',
        detalle: 'QT neo (doxorubicina + ifosfamida × 3 ciclos) en LPS-DD G3 o tamaño >15 cm.\nCirugía radical compartmental. QT adyuvante en R1 o G3 alto riesgo.\nRT adyuvante: evidencia limitada (STRASS-2 en curso).',
        siguiente: 'n5',
      },
      {
        id: 'n4b', tipo: 'accion',
        texto: 'LPS mixoide retroperitoneal: trabectedina ± RT neoadyuvante → cirugía',
        detalle: 'LPS mixoide es exquisitamente sensible a trabectedina.\nConsiderar trabectedina neoadyuvante + RT 50 Gy → cirugía tras respuesta.',
        siguiente: 'n5',
      },
      {
        id: 'n4c', tipo: 'accion',
        texto: 'LPS-DD irresecable o M1: QT sistémica ± terapias dirigidas',
        detalle: '1ª línea: doxorubicina ± ifosfamida.\n2ª línea: eribulina (aprobada EMA para LPS, Schöffski Lancet 2016) o trabectedina.\nCDK4/6 inhibidores (palbociclib, abemaciclib) en ensayos.\nNGS para dianas terapéuticas (CDK4 amplificado en LPS-BD/DD).',
        // TERMINAL
      },
      {
        id: 'n5', tipo: 'resultado',
        texto: 'Seguimiento post-resección intensivo',
        detalle: 'TC tórax-abdomen-pelvis cada 3-4 meses × 2 años, luego semestral.\nAlta tasa de recidiva local: >50% a 5 años en LPS-BD · ~30% en LPS-DD.\nMetástasis pulmonares en LPS-DD ~15%. Presentar recidivas en CSUR.',
        // TERMINAL
      },
    ],
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
      'NAVIGATOR trial (Heinrich et al., Nat Med 2020): avapritinib en PDGFRA D842V',
      'INTRIGUE trial (Bauer et al., J Clin Oncol 2022): ripretinib vs sunitinib 2ª línea',
    ],
    nodos: [
      {
        id: 'n1', tipo: 'inicio',
        texto: 'GIST — diagnóstico confirmado (CD117/DOG1+, mutación KIT/PDGFRA)',
        detalle: 'Análisis mutacional OBLIGATORIO: KIT exones 9, 11, 13, 17; PDGFRA exones 12, 14, 18 (o NGS panel).\nClasificación de riesgo NIH/Miettinen post-quirúrgica.',
        siguiente: 'n2',
      },
      {
        id: 'n2', tipo: 'decision',
        texto: '¿Mutación PDGFRA exón 18 D842V?',
        detalle: 'Resistente a imatinib, sunitinib y regorafenib. Requiere avapritinib de entrada.',
        si: 'n2a', no: 'n3',
      },
      {
        id: 'n2a', tipo: 'accion',
        texto: 'AVAPRITINIB primera línea — 300 mg/día',
        detalle: 'PDGFRA D842V es RESISTENTE a todos los TKI excepto avapritinib.\nAprobado FDA (2020) y EMA (2021). ORR 84%, CR 7%.\nVigilar: edema periorbital, síndrome de encefalopatía posterior reversible.',
        // TERMINAL: ruta exclusiva D842V
      },
      {
        id: 'n3', tipo: 'decision',
        texto: '¿Enfermedad localizada resecable?',
        detalle: 'Resecable = posible R0 sin morbilidad inaceptable o mutilación.',
        si: 'n4', no: 'n8',
      },
      {
        id: 'n4', tipo: 'decision',
        texto: '¿Cirugía R0 directa sin morbilidad significativa?',
        detalle: 'Valorar: localización (gástrico, duodenal, rectal), tamaño, riesgo de rotura.',
        si: 'n5', no: 'n4a',
      },
      {
        id: 'n4a', tipo: 'accion',
        texto: 'Imatinib neoadyuvante para reducción tumoral → cirugía R0',
        detalle: 'Indicado en GIST duodenal, rectal o con riesgo de cirugía mutilante.\nImatinib 400 mg/día (u 800 si KIT exón 9) × 6-12 meses.\nReevaluar con TC (criterios Choi). Re-resección tras respuesta.',
        siguiente: 'n5',
      },
      {
        id: 'n5', tipo: 'accion',
        texto: 'Cirugía R0 — sin linfadenectomía rutinaria',
        detalle: 'Márgenes R0 (1-2 cm suficientes). NO linfadenectomía (GIST raramente N+).\nEvitar rotura capsular (aumenta el riesgo de diseminación peritoneal).',
        siguiente: 'n6',
      },
      {
        id: 'n6', tipo: 'decision',
        texto: '¿Clasificación de riesgo NIH post-quirúrgico?',
        detalle: 'Basado en: tamaño + índice mitótico + localización (gástrico = menor riesgo).\nUsar calculadora online de riesgo NIH/Miettinen.',
        opciones: [
          { texto: 'Muy bajo / Bajo riesgo', siguiente: 'n6a' },
          { texto: 'Riesgo intermedio', siguiente: 'n6b' },
          { texto: 'Alto riesgo', siguiente: 'n6c' },
        ],
      },
      {
        id: 'n6a', tipo: 'resultado',
        texto: 'Seguimiento sin imatinib adyuvante',
        detalle: 'Bajo riesgo: no adyuvante.\nTC abdomen cada 6 meses × 5 años. Luego anual.',
        // TERMINAL
      },
      {
        id: 'n6b', tipo: 'resultado',
        texto: 'Considerar imatinib adyuvante 1-3 años (discutir en comité)',
        detalle: 'Riesgo intermedio: evidencia limitada. Algunos grupos recomiendan 1 año.\nDiscutir beneficio/riesgo con el paciente. Preferencia individual.',
        // TERMINAL
      },
      {
        id: 'n6c', tipo: 'resultado',
        texto: 'Imatinib adyuvante 3 AÑOS (estándar: SSGXVIII, NEJM 2012)',
        detalle: 'SSGXVIII (Joensuu, NEJM 2012): 3 años superiores a 1 año en alto riesgo.\nDosis: 400 mg/día (800 mg si KIT exón 9).\nTC abdomen cada 3-6 meses durante adyuvancia.',
        // TERMINAL
      },
      {
        id: 'n8', tipo: 'accion',
        texto: 'GIST metastásico/irresecable: Imatinib primera línea',
        detalle: 'Imatinib 400 mg/día (KIT exón 11 o PDGFRA no-D842V).\n800 mg/día para KIT exón 9.\nRespuesta en >80%. Continuar hasta progresión o toxicidad. NO interrumpir por remisión completa (recaída rápida).',
        siguiente: 'n9',
      },
      {
        id: 'n9', tipo: 'decision',
        texto: '¿Progresión con imatinib? ¿Tipo de progresión?',
        detalle: 'Progresión focal: valorar escalada de dosis imatinib o cirugía de la lesión progresiva.\nProgresión generalizada: cambiar de línea.',
        si: 'n9a', no: 'n9b',
      },
      {
        id: 'n9a', tipo: 'resultado',
        texto: '2ª línea: Sunitinib 50 mg 4/2 semanas ó 37.5 mg continuo',
        detalle: 'Sunitinib: PFS mediana ~6 meses. Mutaciones KIT exón 13/14 (secundarias) más sensibles.\nVigilar: síndrome mano-pie, HTA, hipotiroidismo.',
        // TERMINAL
      },
      {
        id: 'n9b', tipo: 'resultado',
        texto: '3ª línea: Regorafenib · 4ª línea: Ripretinib · Evaluar ensayos clínicos',
        detalle: 'Regorafenib: 160 mg × 21 días/28. Ripretinib (4ª línea): 150 mg/día.\nEvaluar ensayos clínicos en cada progresión. NGS para identificar mutaciones de resistencia.',
        // TERMINAL
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // ESTADIFICACIÓN
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'estadificacion-sts',
    titulo: 'Estadificación AJCC 8ª edición — STS',
    subtitulo: 'AJCC Cancer Staging Manual 8th Edition 2017',
    categoria: 'estadificacion',
    version: 'AJCC 8ª ed. 2017',
    fuente: 'AJCC Cancer Staging Manual 8th Edition (Amin et al., 2017)',
    referencias: [
      'AJCC Cancer Staging Manual 8th Edition (Amin MB et al., 2017)',
      'FNCLCC grading system (Coindre et al.)',
      'Enneking staging system for musculoskeletal sarcomas',
    ],
    nodos: [
      {
        id: 'n1', tipo: 'inicio',
        texto: 'Estadificación STS de extremidades / tronco (AJCC 8ª ed.)',
        detalle: 'Sistema específico para STS de extremidades y tronco. STS retroperitoneal y visceral tienen su propia tabla AJCC.',
        siguiente: 'n2',
      },
      {
        id: 'n2', tipo: 'accion',
        texto: 'Clasificación T — Tumor primario',
        detalle: 'T1: ≤5 cm\nT2: >5 cm – ≤10 cm\nT3: >10 cm – ≤15 cm\nT4: >15 cm\n\nNOTA AJCC 8ª: La profundidad (superficial/profunda) ya NO forma parte de la clasificación T (a diferencia de AJCC 7ª).',
        siguiente: 'n3',
      },
      {
        id: 'n3', tipo: 'accion',
        texto: 'Clasificación N — Ganglios regionales',
        detalle: 'N0: sin ganglios afectados\nN1: ganglios regionales afectados\n\nIMPORTANTE: N1 equivale a Estadio IV en AJCC 8ª (pronóstico similar a M1).\nMetástasis ganglionares en STS: <5%, excepto sarcoma epitelioide y RMS.',
        siguiente: 'n4',
      },
      {
        id: 'n4', tipo: 'accion',
        texto: 'Clasificación M — Metástasis a distancia',
        detalle: 'M0: sin metástasis\nM1: metástasis a distancia\n\nLocalización más frecuente: pulmón (TC tórax obligatorio).\nOtras: hígado (LMS uterino), hueso (RMS, Ewing), peritoneo.',
        siguiente: 'n5',
      },
      {
        id: 'n5', tipo: 'accion',
        texto: 'Grado histológico FNCLCC (G1-G3) — factor pronóstico más importante',
        detalle: 'Puntuación total (2-8) = Diferenciación tumoral (1-3) + Índice mitótico (1-3) + Necrosis (0-2)\n\nG1 = 2-3 pts · G2 = 4-5 pts · G3 = 6-8 pts\n\nEl grado es el predictor independiente de metástasis más potente en STS.',
        siguiente: 'n6',
      },
      {
        id: 'n6', tipo: 'resultado',
        texto: 'Estadios AJCC 8ª ed. (extremidades / tronco)',
        detalle: 'IA: T1 N0 M0 G1\nIB: T2-T4 N0 M0 G1\nII: T1 N0 M0 G2-G3\nIIIA: T2 N0 M0 G2-G3\nIIIB: T3-T4 N0 M0 G2-G3\nIV: cualquier T N1 M0 · O cualquier T cualquier N M1\n\n⚠️ STS retroperitoneal: usar tabla AJCC específica (sistema diferente).',
        // TERMINAL
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // SEGUIMIENTO
  // ══════════════════════════════════════════════════════════════════
  {
    id: 'seguimiento-sts',
    titulo: 'Seguimiento post-tratamiento STS',
    subtitulo: 'ESMO 2025 · NCCN 2025 · Sarculator risk stratification',
    categoria: 'seguimiento',
    version: 'ESMO 2025',
    fuente: 'ESMO 2025 + NCCN 2025',
    referencias: [
      'ESMO Clinical Practice Guidelines 2025: Follow-up after curative resection',
      'NCCN v1.2025: Surveillance recommendations',
      'Sarculator risk stratification tool (sarculator.com)',
    ],
    nodos: [
      {
        id: 'n1', tipo: 'inicio',
        texto: 'Post-resección quirúrgica R0 — iniciar protocolo de seguimiento',
        detalle: 'Adaptar la frecuencia al riesgo histológico (grado, tamaño, subtipo).\nUsar Sarculator (sarculator.com) para calcular riesgo de metástasis a 10 años.',
        siguiente: 'n2',
      },
      {
        id: 'n2', tipo: 'decision',
        texto: '¿Cuál es el nivel de riesgo de recurrencia?',
        detalle: 'Basado en: grado FNCLCC, tamaño tumoral, subtipo histológico y Sarculator score.',
        opciones: [
          { texto: 'Bajo riesgo (G1, <5 cm)', siguiente: 'n3' },
          { texto: 'Riesgo intermedio (G2, 5-10 cm)', siguiente: 'n4' },
          { texto: 'Alto riesgo (G3 o >10 cm)', siguiente: 'n5' },
        ],
      },
      {
        id: 'n3', tipo: 'resultado',
        texto: 'Bajo riesgo: TC tórax + RM local cada 6 meses × 5 años',
        detalle: 'Después de 5 años sin recidiva:\n• Control anual clínico\n• TC tórax + RM local anuales × 5 años adicionales\n\nTotal: 10 años de seguimiento.',
        // TERMINAL
      },
      {
        id: 'n4', tipo: 'resultado',
        texto: 'Intermedio: TC tórax + RM local cada 4 meses × 3 años → cada 6 meses × 2 años',
        detalle: 'Total 5 años de seguimiento intensivo.\nLuego: anual × 5 años adicionales.\n\nRecidiva local detectada → presentar en comité CSUR.',
        // TERMINAL
      },
      {
        id: 'n5', tipo: 'accion',
        texto: 'Alto riesgo: TC tórax + RM local cada 3 meses × 3 años → cada 4 meses × 2 años',
        detalle: 'Total 5 años intensivo. Luego semestral × 5 años.\nConsiderar PET-TC en Ewing y RMS.\nAnálisis de ctDNA en investigación — potencial como marcador precoz de recidiva.',
        siguiente: 'n6',
      },
      {
        id: 'n6', tipo: 'decision',
        texto: '¿Se detecta recidiva local o metástasis durante el seguimiento?',
        detalle: 'TODA recidiva debe presentarse en el comité CSUR antes de cualquier decisión terapéutica.',
        si: 'n7', no: 'n6a',
      },
      {
        id: 'n6a', tipo: 'resultado',
        texto: 'Sin evidencia de enfermedad — continuar protocolo de seguimiento',
        detalle: 'Mantener el protocolo establecido según el nivel de riesgo.\nReforzar hábitos saludables y rehabilitación funcional.',
        // TERMINAL
      },
      {
        id: 'n7', tipo: 'derivacion',
        texto: 'Recidiva o metástasis: presentar en comité CSUR para re-evaluación completa',
        detalle: 'Recidiva local: re-biopsia para descartar desdiferenciación. Segunda resección si posible. Considerar RT si no recibida.\n\nMetástasis pulmonares resecables → metastasectomía (mejora SG en seleccionados).\nNo resecables → QT sistémica 1ª línea. Valorar ensayos clínicos.',
        // TERMINAL
      },
    ],
  },
]
