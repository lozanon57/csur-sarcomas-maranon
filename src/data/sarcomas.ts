import type { Sarcoma } from '../types'

export const SARCOMAS: Sarcoma[] = [
  // ═══════════════════════════════════════════════════════
  // TEJIDOS BLANDOS — MALIGNOS
  // ═══════════════════════════════════════════════════════
  {
    id: 'lps-bd',
    nombre: 'Liposarcoma bien diferenciado / Tumor lipomatoso atípico',
    nombre_alternativo: ['ALT', 'Atypical Lipomatous Tumour', 'LPS-BD'],
    comportamiento: 'intermedio',
    estirpe: 'tejidos_blandos',
    poblacion: 'adulto',
    localizaciones: ['retroperitoneal', 'extremidades', 'trunco'],
    grado_histologico: ['G1'],
    descripcion: 'Neoplasia lipomatosa de bajo grado con capacidad de recidiva local pero sin potencial metastásico en su forma pura. En retroperitoneo se denomina Liposarcoma bien diferenciado; en extremidades, Tumor lipomatoso atípico (ALT). Representan el subtipo más frecuente de liposarcoma.',
    epidemiologia: 'Subtipo más frecuente de liposarcoma (~40%). Predomina en adultos de 50-70 años. Localización más común: retroperitoneo y extremidades (muslo). En retroperitoneo tiene alta tendencia a la recidiva local (>50% a 10 años).',
    histologia: 'Células adipocíticas maduras con variación nuclear de tamaño (lipocitos con núcleos hipercromáticos), estroma fibroso o mixoide. Puede tener áreas esclerosantes o inflamatorias. La presencia de células adipocíticas atípicas con lipoblastos es característica.',
    ihq: ['MDM2+ (amplificación/sobreexpresión)', 'CDK4+ (amplificación)', 'p16+', 'S100 variable', 'Ki67 <5%'],
    marcadores_moleculares: [
      { alteracion: 'Amplificación 12q13-15 (MDM2, CDK4)', frecuencia: '>90%', relevancia_terapeutica: 'Diana terapéutica CDK4/6 inhibidores; confirmatoria diagnóstica por FISH/NGS' },
      { alteracion: 'HMGA2 amplificación', frecuencia: '~70%' }
    ],
    estadificacion: 'AJCC 8ª ed. Estadio IA (T1N0M0 G1) o IB (T2-4N0M0 G1). En retroperitoneo: aplicar sistema de estadificación específico retroperitoneal.',
    tratamiento_primera_linea: 'Cirugía con márgenes amplios (R0) es el tratamiento estándar. En retroperitoneo: resección en bloque con órganos adyacentes según protocolo TARPSWG. No hay indicación estándar de QT adyuvante para ALT/LPS-BD puro.',
    tratamiento_adyuvante: 'RT adyuvante puede considerarse en retroperitoneo (evidencia limitada, estudios STRASS). CDK4/6 inhibidores (abemaciclib, palbociclib) en investigación. Eribulina aprobada por EMA para LPS avanzado (HALAVEN trial).',
    tratamiento_paliativo: 'Eribulina (aprobada EMA/FDA), trabectedina (LPS mixoide), doxorubicina ± ifosfamida, gemcitabina + docetaxel. CDK4/6 inhibidores en ensayos clínicos.',
    seguimiento: 'TC tórax-abdomen-pelvis cada 3-4 meses durante 2 años, luego semestral hasta 5 años, anual posteriormente. Alto riesgo de recidiva local en retroperitoneo.',
    pronostico: 'SG 5 años ~80% en extremidades (ALT). En retroperitoneo: SG 5 años ~60-70% pero alta morbimortalidad por recidivas locales. La desdiferenciación empeora drásticamente el pronóstico.',
    perlas_clinicas: [
      'MDM2 FISH es el test diagnóstico de referencia para confirmar LPS-BD vs lipoma',
      'En retroperitoneo, resección compartmental (incluir órganos adyacentes aunque sean macroscópicamente normales) reduce recidiva local',
      'ALT en extremidades puede ser observado en tumores pequeños tras confirmación diagnóstica por biopsia',
      'La desdiferenciación ocurre en ~10% en recidivas sucesivas — vigilar en seguimiento'
    ],
    tags: ['liposarcoma', 'MDM2', 'CDK4', 'retroperitoneal', 'ALT', 'lipoma atípico']
  },
  {
    id: 'lps-dd',
    nombre: 'Liposarcoma desdiferenciado',
    nombre_alternativo: ['LPS-DD', 'Dedifferentiated Liposarcoma'],
    comportamiento: 'maligno',
    estirpe: 'tejidos_blandos',
    poblacion: 'adulto',
    localizaciones: ['retroperitoneal', 'extremidades', 'trunco'],
    grado_histologico: ['G2', 'G3'],
    descripcion: 'Liposarcoma de alto grado compuesto por áreas de LPS-BD adyacentes a componente no lipogénico de alto grado (sarcoma pleomórfico indiferenciado, fibrosarcoma, etc.). Puede surgir de novo o en recidivas de LPS-BD.',
    epidemiologia: 'Segundo subtipo más frecuente de LPS retroperitoneal (~30%). Mediana edad 60 años. Predominantemente retroperitoneal. Asociado a alta mortalidad por enfermedad local y metástasis a distancia.',
    histologia: 'Componente de bajo grado (LPS-BD) adyacente a área de alto grado no lipogénica. La zona de alto grado puede asemejarse a UPS, fibrosarcoma, osteosarcoma extraesquelético, etc. Ki67 >20% en áreas desdiferenciadas.',
    ihq: ['MDM2+ (amplificación, ambos componentes)', 'CDK4+', 'p16+', 'S100 negativo en componente DD', 'Ki67 elevado en DD'],
    marcadores_moleculares: [
      { alteracion: 'Amplificación 12q13-15 (MDM2, CDK4)', frecuencia: '>90%', relevancia_terapeutica: 'Confirmatoria diagnóstica; CDK4/6 inhibidores en ensayos' },
      { alteracion: 'JUN amplificación (6p21)', frecuencia: '20%' },
      { alteracion: 'TERT amplificación', frecuencia: '30%' }
    ],
    estadificacion: 'AJCC 8ª ed. Estadio III (T2-4N0M0 G3) o superior. Alta tasa metastásica pulmonar.',
    tratamiento_primera_linea: 'Cirugía R0 cuando posible. QT neoadyuvante (doxorubicina + ifosfamida) en casos limítrofes de resecabilidad. Cirugía agresiva con resección multivisceral en retroperitoneo.',
    tratamiento_adyuvante: 'QT adyuvante (doxorubicina + ifosfamida) en resecciones R1/R2 o tumores de alto grado >5 cm. RT adyuvante en retroperitoneo seleccionado.',
    tratamiento_paliativo: 'Doxorubicina ± ifosfamida (primera línea), eribulina (segunda línea, aprobada EMA), trabectedina, gemcitabina + docetaxel, pazopanib (segunda línea). CDK4/6 inhibidores en ensayos clínicos.',
    seguimiento: 'TC tórax-abdomen-pelvis cada 3 meses durante 2 años, luego semestral. PET-TC en casos seleccionados.',
    pronostico: 'SG 5 años ~20-40% en retroperitoneo. Tasa metastásica ~15-20%. Alta morbilidad por recidivas locales no resecables.',
    perlas_clinicas: [
      'La co-amplificación de MDM2 en ambos componentes confirma el diagnóstico de LPS-DD',
      'No confundir con UPS: la presencia de MDM2+ excluye UPS puro',
      'El componente de alto grado puede tener morfología heteróloga (osteosarcoma, rabdomiosarcoma) — no afecta al tratamiento',
      'Eribulina es la única terapia dirigida aprobada para LPS avanzado (estudio 309)'
    ],
    tags: ['liposarcoma', 'desdiferenciado', 'MDM2', 'CDK4', 'retroperitoneal', 'alto grado', 'eribulina']
  },
  {
    id: 'lps-mix',
    nombre: 'Liposarcoma mixoide / con células redondas',
    nombre_alternativo: ['LPS mixoide', 'Myxoid liposarcoma', 'Round cell liposarcoma'],
    comportamiento: 'maligno',
    estirpe: 'tejidos_blandos',
    poblacion: 'adulto',
    localizaciones: ['extremidades', 'retroperitoneal', 'trunco'],
    grado_histologico: ['G1', 'G2', 'G3'],
    descripcion: 'Liposarcoma definido por fusión FUS-DDIT3 (o EWSR1-DDIT3). Espectro de bajo grado (LPS mixoide puro, G1-2) a alto grado (componente de células redondas >5%, G3). Localización preferente en muslo profundo.',
    epidemiologia: 'Representan ~30-35% de todos los LPS. Edad media 40-50 años (más jóvenes que otros subtipos). Alta predilección por extremidades inferiores (muslo profundo). Responde excepcionalmente bien a trabectedina.',
    histologia: 'Células fusiformes y estrelladas en matriz mixoide con patrón vascular de red de capilares arboriformes (patrón "de canasta de huevo"). Lipoblastos univacuolados (en lágrima). Componente de células redondas indica progresión.',
    ihq: ['S100+', 'DDIT3+ (útil)', 'CD34 variable', 'Ki67 correlaciona con % células redondas'],
    marcadores_moleculares: [
      { alteracion: 'Fusión FUS-DDIT3 (t(12;16)(q13;p11))', frecuencia: '~90%', relevancia_terapeutica: 'Diagnóstica; predictor de respuesta a trabectedina' },
      { alteracion: 'Fusión EWSR1-DDIT3 (t(12;22)(q13;q12))', frecuencia: '~5-10%' }
    ],
    estadificacion: 'AJCC 8ª ed. Grado histológico crítico: <5% células redondas = G1-2 (buen pronóstico); >5% células redondas = G3 (mal pronóstico). Metástasis inusuales: retroperitoneo, pericardio, hueso (incluso sin metástasis pulmonares).',
    tratamiento_primera_linea: 'Cirugía con márgenes amplios. QT neoadyuvante (trabectedina o ifosfamida/doxorubicina) en tumores de alto riesgo. Exquisita sensibilidad a RT (radiosensible — considerar RT neoadyuvante).',
    tratamiento_adyuvante: 'Trabectedina (primera línea en LPS mixoide avanzado, mejor que doxorubicina en este subtipo). RT adyuvante/neoadyuvante muy eficaz.',
    tratamiento_paliativo: 'Trabectedina (aprobada para STS avanzado, especialmente eficaz en LPS mixoide), doxorubicina, ifosfamida, eribulina.',
    seguimiento: 'Atención especial a metástasis abdominales y óseas (no solo pulmonares). TC tórax-abdomen-pelvis + RM extremidades. Gammagrafía ósea si síntomas.',
    pronostico: 'LPS mixoide puro: SG 5 años ~85%. Con células redondas >5%: SG 5 años ~50%. Metástasis retroperitoneales o espinales indican mal pronóstico.',
    perlas_clinicas: [
      'Trabectedina es el tratamiento de elección en LPS mixoide avanzado: ORR ~50% vs ~10% con doxorubicina',
      'Puede metastatizar en retroperitoneo, pericardio y hueso incluso sin metástasis pulmonares — ampliar estadificación',
      'Excelente respuesta a RT neoadyuvante: considerar 50 Gy preoperatorio en tumores >5 cm de extremidades',
      'La fusión FUS-DDIT3 es patognomónica — confirmar por RT-PCR o FISH antes de iniciar trabectedina'
    ],
    tags: ['liposarcoma', 'mixoide', 'FUS-DDIT3', 'trabectedina', 'células redondas', 'extremidades']
  },
  {
    id: 'lps-pleo',
    nombre: 'Liposarcoma pleomórfico',
    nombre_alternativo: ['LPS pleomórfico'],
    comportamiento: 'maligno',
    estirpe: 'tejidos_blandos',
    poblacion: 'adulto',
    localizaciones: ['extremidades', 'retroperitoneal', 'trunco'],
    grado_histologico: ['G3'],
    descripcion: 'Subtipo más raro y agresivo de liposarcoma (G3). Contiene lipoblastos pleomórficos en fondo de sarcoma de alto grado. No tiene alteraciones moleculares recurrentes características. Alta tasa metastásica.',
    epidemiologia: 'El menos frecuente de los LPS (<5%). Edad media >50 años. Preferentemente en extremidades. Alta tasa de metástasis pulmonares y elevada mortalidad.',
    histologia: 'Células pleomórficas con lipoblastos multivacuolados pleomórficos (diagnósticos). Mitosis frecuentes, necrosis. Ki67 >20%.',
    ihq: ['S100 variable', 'MDM2 negativo (distingue de LPS-DD)', 'CDK4 negativo', 'p53 frecuentemente mutado'],
    marcadores_moleculares: [
      { alteracion: 'Complejo genoma altamente complejo', frecuencia: '100%', relevancia_terapeutica: 'Sin diana terapéutica específica aprobada' },
      { alteracion: 'Mutación TP53', frecuencia: '~50%' },
      { alteracion: 'Pérdida RB1', frecuencia: '~40%' }
    ],
    estadificacion: 'AJCC 8ª ed. Estadio III (G3) en la mayoría. Tasa metastásica >50% a 5 años.',
    tratamiento_primera_linea: 'Cirugía R0 con márgenes amplios. QT neoadyuvante (doxorubicina + ifosfamida) en tumores >5 cm. RT adyuvante recomendada en extremidades.',
    tratamiento_paliativo: 'Doxorubicina ± ifosfamida, gemcitabina + docetaxel, trabectedina. Respuesta inferior a LPS mixoide.',
    seguimiento: 'TC tórax-abdomen-pelvis cada 3 meses durante 3 años. Alto riesgo de metástasis pulmonares tempranas.',
    pronostico: 'SG 5 años ~30-40%. Alta tasa de recidiva local y sistémica. Peor pronóstico de todos los LPS.',
    perlas_clinicas: [
      'Distinguir de LPS-DD: LPS pleomórfico MDM2/CDK4 NEGATIVO',
      'Lipoblastos pleomórficos son el hallazgo diagnóstico — buscarlos activamente en la biopsia',
      'Sin diana terapéutica específica; tratamiento igual que sarcoma pleomórfico de alto grado'
    ],
    tags: ['liposarcoma', 'pleomórfico', 'alto grado', 'G3', 'extremidades']
  },
  {
    id: 'lms-ret',
    nombre: 'Leiomiosarcoma retroperitoneal',
    nombre_alternativo: ['LMS retroperitoneal'],
    comportamiento: 'maligno',
    estirpe: 'tejidos_blandos',
    poblacion: 'adulto',
    localizaciones: ['retroperitoneal', 'visceral'],
    grado_histologico: ['G2', 'G3'],
    descripcion: 'Sarcoma de músculo liso de localización retroperitoneal, frecuentemente originado en la pared de la vena cava inferior (VCI) o grandes vasos. Representa el segundo tipo más frecuente de sarcoma retroperitoneal tras el liposarcoma.',
    epidemiologia: 'Representa ~25% de sarcomas retroperitoneales. Predominio femenino (relación F:M ~2:1). Edad media 50-60 años. LMS de VCI en 50% de casos retroperitoneales.',
    histologia: 'Células fusiformes con citoplasma eosinófilo abundante, núcleos en "puro de cigarro", disposición en fascículos entrelazados. Mitosis >5/10 HPF en alto grado. Áreas de necrosis frecuentes en G3.',
    ihq: ['SMA (actina músculo liso)+', 'Desmina+', 'h-caldesmon+', 'S100 negativo', 'CD34 negativo (distingue de GIST)', 'DOG1 negativo'],
    marcadores_moleculares: [
      { alteracion: 'Pérdida RB1 (13q14)', frecuencia: '~70%' },
      { alteracion: 'Mutación TP53', frecuencia: '~40%' },
      { alteracion: 'Pérdida PTEN', frecuencia: '~30%' },
      { alteracion: 'Complejo genoma altamente complejo', frecuencia: '100%' }
    ],
    estadificacion: 'AJCC 8ª ed. para retroperitoneo. En LMS de VCI: clasificación de nivel I-III según extensión. Alta tasa de metástasis hepáticas y pulmonares.',
    tratamiento_primera_linea: 'Resección quirúrgica completa con márgenes amplios (R0). LMS de VCI: resección de segmento de VCI con o sin reconstrucción protésica según nivel. QT neoadyuvante (doxorubicina + ifosfamida o gemcitabina + docetaxel) en casos seleccionados.',
    tratamiento_adyuvante: 'QT adyuvante en alto riesgo (G3, >5 cm, R1). Gemcitabina + docetaxel especialmente activo en LMS. Doxorubicina ± ifosfamida.',
    tratamiento_paliativo: 'Gemcitabina + docetaxel (primera línea en LMS), doxorubicina ± ifosfamida, trabectedina, pazopanib. LMS uterino: combinaciones con adriamicina.',
    seguimiento: 'TC tórax-abdomen-pelvis cada 3 meses durante 2 años. Vigilar metástasis hepáticas (vía portal) y pulmonares.',
    pronostico: 'SG 5 años ~50% en retroperitoneo. LMS de VCI nivel I mejor pronóstico que niveles II-III. Alta tasa metastásica hepática.',
    perlas_clinicas: [
      'LMS de VCI: clasificar nivel (I: infrarrenal, II: suprarrenal-infrahepático, III: suprahepático) — determina abordaje quirúrgico y necesidad de reconstrucción',
      'Gemcitabina + docetaxel especialmente eficaz en LMS (mejor que en otros STS)',
      'IHQ: SMA + desmina + h-caldesmon positivos; CD34 y DOG1 negativos (diferencia de GIST)',
      'La reconstrucción de VCI puede omitirse si hay circulación colateral establecida — valorar con venografía'
    ],
    tags: ['leiomiosarcoma', 'retroperitoneal', 'VCI', 'vena cava', 'músculo liso', 'gemcitabina']
  },
  {
    id: 'lms-uter',
    nombre: 'Leiomiosarcoma uterino',
    nombre_alternativo: ['LMS uterino', 'Uterine LMS'],
    comportamiento: 'maligno',
    estirpe: 'tejidos_blandos',
    poblacion: 'adulto',
    localizaciones: ['visceral'],
    grado_histologico: ['G2', 'G3'],
    descripcion: 'Sarcoma de músculo liso originado en miometrio. El sarcoma uterino más frecuente y agresivo. Se diferencia del leiomioma benigno por criterios de Stanford (mitosis, necrosis coagulativa, atipia). Elevado riesgo de diseminación hematógena pulmonar y hepática.',
    epidemiologia: 'Incidencia 1.7/100.000 mujeres/año. Edad media 51-58 años (premenopáusicas y postmenopáusicas). Diagnóstico pre-quirúrgico difícil — frecuentemente confundido con leiomioma.',
    histologia: 'Criterios de Stanford: mitosis ≥10/10 HPF + necrosis coagulativa + atipia difusa moderada-severa. Pueden estar presentes solo 2 de los 3 criterios si son marcados. Ki67 >10%.',
    ihq: ['SMA+', 'Desmina+', 'h-caldesmon+', 'ER/PR negativo o débil', 'p16+ difuso', 'p53 mutado (~50%)', 'Ki67 >10%'],
    marcadores_moleculares: [
      { alteracion: 'Mutación TP53', frecuencia: '~50%' },
      { alteracion: 'Pérdida RB1', frecuencia: '~60%' },
      { alteracion: 'Mutación ATRX', frecuencia: '~30%' }
    ],
    estadificacion: 'FIGO 2023 para sarcomas uterinos: estadio I (confinado útero), II (pelvis), III (abdomen), IV (metástasis). Diferente de estadificación endometrial.',
    tratamiento_primera_linea: 'Histerectomía total + salpingo-ooforectomía bilateral (en postmenopáusicas). No se recomienda linfadenectomía rutinaria. Morcilación CONTRAINDICADA (disemina enfermedad).',
    tratamiento_adyuvante: 'QT adyuvante (doxorubicina + ifosfamida o gemcitabina + docetaxel) en estadio I alto riesgo y estadios superiores. RT pélvica adyuvante en estadios I-II para control local.',
    tratamiento_paliativo: 'Gemcitabina + docetaxel (Hensley et al.), doxorubicina ± ifosfamida, trabectedina. Inhibidores de aromatasa si ER/PR+.',
    seguimiento: 'TC tórax-abdomen-pelvis cada 3 meses durante 2 años, semestral 3-5 años. Alto riesgo de metástasis pulmonares.',
    pronostico: 'SG 5 años estadio I: ~50%; estadio IV: <10%. Tasa de recaída >50% incluso en estadio I. MORCILACIÓN asociada a peor supervivencia (diseminación intraperitoneal).',
    perlas_clinicas: [
      'La morcilación laparoscópica de un supuesto leiomioma que resulta LMS disemina la enfermedad y empeora la supervivencia — CONTRAINDICADA si hay sospecha',
      'En mujeres premenopáusicas con estadio I: puede considerarse conservación ovárica (datos limitados)',
      'Gemcitabina + docetaxel: régimen de Hensley — 900 mg/m² D1,D8 + 75 mg/m² D8 cada 21 días',
      'La RMN pélvica pre-quirúrgica puede sugerir LMS (señal intermedia T2, baja T1, realce heterogéneo) pero no es diagnóstica'
    ],
    tags: ['leiomiosarcoma', 'uterino', 'ginecológico', 'morcilación', 'FIGO', 'gemcitabina']
  },
  {
    id: 'rms',
    nombre: 'Rabdomiosarcoma',
    nombre_alternativo: ['RMS', 'Rhabdomyosarcoma'],
    comportamiento: 'maligno',
    estirpe: 'tejidos_blandos',
    poblacion: 'pediatrico',
    localizaciones: ['cabeza_cuello', 'visceral', 'extremidades', 'trunco'],
    grado_histologico: ['G2', 'G3'],
    descripcion: 'Sarcoma de diferenciación miogénica esquelética. El sarcoma de partes blandas más frecuente en niños y adolescentes (<18 años). Tres subtipos principales: embrionario (el más común, mejor pronóstico), alveolar (peor pronóstico, fusión PAX-FOXO1) y pleomórfico (adultos, raro).',
    epidemiologia: 'Representa ~50% de STS pediátricos. Incidencia 4-5/millón/año en <15 años. Pico de edad 2-6 años (embrionario) y 10-18 años (alveolar). Localizaciones: cabeza/cuello 35%, genitourinario 25%, extremidades 20%, tronco 10%.',
    histologia: 'Embrionario: células fusiformes y redondeadas con escaso citoplasma, estroma mixoide. Alveolar: nidos de células redondas con espacios alveolares, células gigantes multinucleadas. Pleomórfico: células pleomórficas en adultos.',
    ihq: ['Miogenina+ (nuclear, difuso en alveolar; focal en embrionario)', 'MyoD1+ (nuclear)', 'Desmina+', 'SMA variable', 'CD99 variable', 'S100 negativo'],
    marcadores_moleculares: [
      { alteracion: 'Fusión PAX3-FOXO1 (t(2;13)(q36;q14))', frecuencia: 'Alveolar ~70%', relevancia_terapeutica: 'Peor pronóstico incluso sin morfología alveolar; predictor independiente' },
      { alteracion: 'Fusión PAX7-FOXO1 (t(1;13)(p36;q14))', frecuencia: 'Alveolar ~20%', relevancia_terapeutica: 'Mejor pronóstico que PAX3-FOXO1' },
      { alteracion: 'Mutación RAS (NRAS, KRAS, HRAS)', frecuencia: 'Embrionario ~30%' },
      { alteracion: 'Amplificación MYCN', frecuencia: 'Embrionario ~20%' }
    ],
    estadificacion: 'IRS/COG staging: estadio I-IV basado en extensión quirúrgica. TNM: T1a/b, N0/1, M0/1. Grupo IRS I-IV. Sistema TNM modificado de acuerdo con COG/EpSSG.',
    tratamiento_primera_linea: 'QT multiagente sistémica es OBLIGATORIA (incluido estadio I local): VAC (vincristina + actinomicina D + ciclofosfamida) o VDC/IE (vincristina + doxorubicina + ciclofosfamida alternando con ifosfamida + etopósido). Cirugía: resección con márgenes cuando posible. RT local en resecciones R1/R2 o estadios III-IV.',
    tratamiento_adyuvante: 'Consolidación con QT según protocolo EpSSG (European Paediatric Soft Tissue Sarcoma Study Group) o COG. En alveolar de alto riesgo: considerar consolidación con HDC + TASPE.',
    tratamiento_paliativo: 'Vincristina + irinotecán (VIT), temozolomida, gemcitabina + docetaxel. Ensayos con inhibidores de ALK (crizotinib) si ALK+.',
    seguimiento: 'Protocolo pediátrico: TC/RM cada 2-3 meses durante 2 años, luego semestral. PET-TC para estadificación y evaluación de respuesta.',
    pronostico: 'Embrionario estadio I: SG 5 años >90%. Alveolar estadio IV: SG 5 años ~20-30%. Fusión PAX3-FOXO1 = factor pronóstico adverso independiente.',
    perlas_clinicas: [
      'Miogenina difusa y fuerte = alveolar (pronóstico adverso); miogenina focal = embrionario (mejor pronóstico)',
      'SIEMPRE solicitar FISH para PAX-FOXO1 — diagnóstico de alveolar "sin fusión" por morfología sola es insuficiente',
      'RMS alveolar sin fusión PAX-FOXO1 tiene pronóstico similar al embrionario — tratar como embrionario',
      'Tratamiento multidisciplinar obligatorio en centro de referencia pediátrico (CSUR)'
    ],
    tags: ['rabdomiosarcoma', 'pediátrico', 'PAX-FOXO1', 'alveolar', 'embrionario', 'VAC', 'EpSSG']
  },
  {
    id: 'gist',
    nombre: 'Tumor del estroma gastrointestinal (GIST)',
    nombre_alternativo: ['GIST', 'Gastrointestinal Stromal Tumour'],
    comportamiento: 'intermedio',
    estirpe: 'gist',
    poblacion: 'adulto',
    localizaciones: ['visceral'],
    grado_histologico: ['G1', 'G2', 'G3'],
    descripcion: 'Neoplasia mesenquimal del tracto GI originada en las células intersticiales de Cajal (CIC). Definida molecularmente por mutaciones activadoras de KIT (75%) o PDGFRA (10%) o por ausencia de ambas (wild-type, 15%). El sarcoma abdominal más frecuente.',
    epidemiologia: 'Incidencia 10-15/millón/año. Edad media 60 años. Localización: estómago 60%, intestino delgado 30%, recto/colon 5%, mesenterio/retroperitoneo 5%. En menores de 40 años: pensar en GIST sindrómica (Carney, NF1, Carney-Stratakis).',
    histologia: 'Células fusiformes (70%), epitelioides (20%) o mixtas (10%). Estroma escaso. Ki67 correlaciona con riesgo (clasificación NIH/Miettinen). Mitosis/50 HPF crucial para estratificación de riesgo.',
    ihq: ['KIT (CD117)+ (95%)', 'DOG1 (ANO1)+ (95%, incluye KIT-neg)', 'CD34+ (~70%)', 'SMA variable', 'S100 negativo', 'Desmina negativo'],
    marcadores_moleculares: [
      { alteracion: 'Mutación KIT exón 11', frecuencia: '~60%', relevancia_terapeutica: 'Mejor respuesta a imatinib; mutaciones deleción/inserción' },
      { alteracion: 'Mutación KIT exón 9', frecuencia: '~10%', relevancia_terapeutica: 'Requiere imatinib 800 mg/día o sunitinib' },
      { alteracion: 'Mutación PDGFRA exón 18 D842V', frecuencia: '~6%', relevancia_terapeutica: 'Resistente a imatinib/sunitinib; SENSIBLE a avapritinib' },
      { alteracion: 'Mutación PDGFRA exón 18 no-D842V', frecuencia: '~4%', relevancia_terapeutica: 'Sensible a imatinib' },
      { alteracion: 'Wild-type (sin KIT ni PDGFRA)', frecuencia: '~15%', relevancia_terapeutica: 'Evaluar SDH, NF1, BRAF, RAS — imatinib menos eficaz' },
      { alteracion: 'Pérdida SDH (SDHA/B/C/D)', frecuencia: '~5% total; frecuente en GIST gástrico pediátrico', relevancia_terapeutica: 'SDH-deficiente: imatinib menos eficaz; sunitinib alternativa' }
    ],
    estadificacion: 'Clasificación de riesgo NIH/Miettinen/Joensuu: Muy bajo, Bajo, Intermedio, Alto riesgo según tamaño, mitosis/50 HPF y localización. AJCC 8ª ed. T/N/M.',
    tratamiento_primera_linea: 'Resección quirúrgica R0 sin linfadenectomía (GIST raramente metastatiza a ganglios). No necesita márgenes amplios — R0 con márgenes de 1-2 cm suficiente. Imatinib neoadyuvante para reducir tamaño en tumores irresecables o en localización crítica (estudio RTOG 0132).',
    tratamiento_adyuvante: 'Imatinib 400 mg/día durante 3 años en GIST alto riesgo (estudio SSGXVIII/AIO: mejora SG). KIT exón 9 → imatinib 800 mg/día. PDGFRA D842V → avapritinib.',
    tratamiento_paliativo: 'Primera línea: imatinib 400 mg/día (KIT exón 11) u 800 mg/día (KIT exón 9). Segunda línea: sunitinib (50 mg 4/2 o 37.5 mg continuo). Tercera línea: regorafenib. Cuarta línea: ripretinib. PDGFRA D842V: avapritinib 300 mg/día.',
    seguimiento: 'TC abdomen-pelvis ± tórax cada 3-6 meses durante 3-5 años según riesgo. Criterios de respuesta: RECIST + Choi (densidad tumoral importante).',
    pronostico: 'GIST bajo riesgo resecado: supervivencia similar a población general. GIST alto riesgo sin adyuvante: recurrencia >50% a 5 años. Con imatinib adyuvante 3 años: SG 5 años ~92% (SSGXVIII).',
    perlas_clinicas: [
      'DOG1 es tan sensible como CD117 y es positivo en GIST KIT-negativos — usar SIEMPRE los dos',
      'PDGFRA D842V es resistente a imatinib y sunitinib — tratar con avapritinib (aprobado FDA/EMA)',
      'Criterios de respuesta: usar criterios de Choi (no solo RECIST) — reducción de densidad HU >15% indica respuesta aunque el tamaño no cambie',
      'GIST wild-type en jóvenes: solicitar SDH IHQ — si SDHB negativo buscar síndrome de Carney-Stratakis (mutación germinal SDH)',
      'Imatinib adyuvante 3 años superior a 1 año: estudio SSGXVIII (Joensuu, NEJM 2012)'
    ],
    tags: ['GIST', 'KIT', 'DOG1', 'imatinib', 'PDGFRA', 'D842V', 'avapritinib', 'sunitinib', 'regorafenib', 'ripretinib']
  },
  {
    id: 'sarcoma-sinovial',
    nombre: 'Sarcoma sinovial',
    nombre_alternativo: ['SS', 'Synovial sarcoma'],
    comportamiento: 'maligno',
    estirpe: 'tejidos_blandos',
    poblacion: 'adulto',
    localizaciones: ['extremidades', 'trunco', 'cabeza_cuello'],
    grado_histologico: ['G2', 'G3'],
    descripcion: 'Sarcoma de partes blandas definido por la fusión SS18-SSX1/2/4. A pesar del nombre, no se origina del tejido sinovial sino de células madre mesenquimales. Dos subtipos: bifásico (células fusiformes + componente epitelial) y monofásico (solo fusiforme). Uno de los STS más quimiosensibles.',
    epidemiologia: 'Representa ~8-10% de todos los STS. Edad media 15-40 años (adulto joven). Localización preferente: extremidades inferiores (rodilla/muslo). Puede aparecer en cualquier localización incluyendo pared torácica, cabeza/cuello, pulmón.',
    histologia: 'Bifásico: doble componente — células fusiformes en fascículos + glándulas/hendiduras epiteliales. Monofásico: solo células fusiformes con escaso citoplasma, núcleos ovales uniformes. "Calcificaciones en cascara de huevo" en RX.',
    ihq: ['TLE1+ (nuclear, específico)', 'SS18-SSX por FISH/RT-PCR (diagnóstico)', 'CK (AE1/AE3)+ (especialmente bifásico)', 'EMA+', 'BCL2+', 'CD99+ (membrana)', 'S100 focal', 'CD34 negativo'],
    marcadores_moleculares: [
      { alteracion: 'Fusión SS18-SSX1 (t(X;18)(p11;q11))', frecuencia: '~65%', relevancia_terapeutica: 'Diagnóstica; SSX1 = bifásico más frecuente' },
      { alteracion: 'Fusión SS18-SSX2', frecuencia: '~35%', relevancia_terapeutica: 'SSX2 = monofásico más frecuente; leve mejor pronóstico' },
      { alteracion: 'Fusión SS18-SSX4', frecuencia: '<5%' }
    ],
    estadificacion: 'AJCC 8ª ed. Tamaño, profundidad y grado. Alto riesgo de metástasis pulmonares. Metástasis ganglionares infrecuentes (<5%).',
    tratamiento_primera_linea: 'Cirugía con márgenes amplios (R0). QT neoadyuvante (ifosfamida a dosis alta + doxorubicina) en tumores >5 cm o alto riesgo — sarcoma sinovial es el STS más quimiosensible.',
    tratamiento_adyuvante: 'QT adyuvante (ifosfamida a dosis alta: 14 g/m² por ciclo) en alto riesgo. RT adyuvante en márgenes ajustados o R1.',
    tratamiento_paliativo: 'Ifosfamida a dosis alta (mejor respuesta que doxorubicina en sarcoma sinovial), doxorubicina, trabectedina, pazopanib. Inmunoterapia con NY-ESO-1 en investigación (alta expresión de NY-ESO-1 en SS).',
    seguimiento: 'TC tórax cada 3 meses durante 3 años (metástasis pulmonares son la principal causa de muerte). RMN local semestral.',
    pronostico: 'SG 5 años ~50-60%. Alto riesgo de recaída tardía (hasta 20 años). Peores factores: >5 cm, G3, edad >30 años, márgenes positivos.',
    perlas_clinicas: [
      'TLE1 positivo nuclear es el marcador IHQ más sensible y específico para sarcoma sinovial',
      'Sarcoma sinovial tiene la mayor expresión de NY-ESO-1 de todos los STS — ensayos de inmunoterapia celular adoptiva activos',
      'Ifosfamida a dosis alta (14 g/m²/ciclo) es superior a dosis estándar en sarcoma sinovial — usar en pacientes jóvenes en buen estado general',
      'El diagnóstico diferencial incluye MPNST (TLE1 negativo, S100+) y carcinoma (CK+ pero no TLE1+)'
    ],
    tags: ['sarcoma sinovial', 'SS18-SSX', 'TLE1', 'ifosfamida', 'NY-ESO-1', 'adulto joven', 'extremidades']
  },
  {
    id: 'ups',
    nombre: 'Sarcoma pleomórfico indiferenciado / MFH',
    nombre_alternativo: ['UPS', 'Undifferentiated Pleomorphic Sarcoma', 'MFH', 'Histiocitoma fibroso maligno'],
    comportamiento: 'maligno',
    estirpe: 'tejidos_blandos',
    poblacion: 'adulto',
    localizaciones: ['extremidades', 'retroperitoneal', 'trunco'],
    grado_histologico: ['G3'],
    descripcion: 'Sarcoma de alto grado sin línea de diferenciación demostrable por IHQ y técnicas moleculares. Diagnóstico de exclusión tras descartar otros sarcomas de alto grado (LPS pleomórfico, LMS, RMS, etc.). El término MFH ha sido abandonado por la OMS 2020.',
    epidemiologia: 'Uno de los STS más frecuentes en adultos mayores (60-80 años). Representa ~20% de todos los STS de adultos. Localización preferente: extremidades inferiores (muslo profundo) y retroperitoneo.',
    histologia: 'Células altamente pleomórficas, bizarras, multinucleadas. Mitosis atípicas abundantes. Ausencia de diferenciación específica (ni lipogénica, ni muscular, ni neural). Ki67 >30%. Diagnóstico de exclusión.',
    ihq: ['Vimentina+ (inespecífico)', 'CD68 variable', 'SMA focal variable', 'Negativo: S100, CD34, CK, Desmina, MyoD1, MDM2'],
    marcadores_moleculares: [
      { alteracion: 'Genoma complejo sin alteraciones recurrentes específicas', frecuencia: '100%' },
      { alteracion: 'Mutación TP53', frecuencia: '~40%' },
      { alteracion: 'CDKN2A/B pérdida', frecuencia: '~30%' }
    ],
    estadificacion: 'AJCC 8ª ed. Estadio III (G3, T2, N0, M0) en la mayoría. Alta tasa metastásica pulmonar y ganglionar.',
    tratamiento_primera_linea: 'Cirugía con márgenes amplios (R0). QT neoadyuvante (doxorubicina + ifosfamida) para downsizing en tumores limítrofes. RT adyuvante en extremidades.',
    tratamiento_paliativo: 'Doxorubicina ± ifosfamida, gemcitabina + docetaxel, trabectedina, pazopanib, eribulina. Sin diana terapéutica específica aprobada.',
    seguimiento: 'TC tórax-abdomen-pelvis cada 3 meses durante 3 años.',
    pronostico: 'SG 5 años ~50% en extremidades localizado. Alto grado de recurrencia local y sistémica.',
    perlas_clinicas: [
      'UPS es un diagnóstico de EXCLUSIÓN — siempre realizar panel IHQ completo y NGS antes de diagnosticar UPS',
      'MDM2 FISH negativo descarta LPS-DD; S100 negativo descarta MPNST; TLE1 negativo descarta SS',
      'Alta carga mutacional tumoral en UPS — potencial candidato a inmunoterapia (ensayos con pembrolizumab)',
      'Tumor de >5 cm, profundo, en muslo de adulto >60 años: pensar primero en UPS o LPS-DD'
    ],
    tags: ['UPS', 'MFH', 'pleomórfico', 'indiferenciado', 'alto grado', 'extremidades', 'diagnóstico exclusión']
  },
  {
    id: 'angiosarcoma',
    nombre: 'Angiosarcoma',
    nombre_alternativo: ['AS', 'Angiosarcoma de tejidos blandos'],
    comportamiento: 'maligno',
    estirpe: 'tejidos_blandos',
    poblacion: 'adulto',
    localizaciones: ['cabeza_cuello', 'extremidades', 'visceral', 'trunco'],
    grado_histologico: ['G3'],
    descripcion: 'Sarcoma vascular maligno de diferenciación endotelial. Formas clínicas: cutáneo (cara/cuero cabelludo en ancianos), post-irradiación (mama), linfedema crónico (síndrome de Stewart-Treves), visceral (hígado, corazón, bazo). Extremadamente agresivo.',
    epidemiologia: 'Raro: 1-2% de todos los STS. Angiosarcoma cutáneo de cuero cabelludo: varones >70 años. Síndrome Stewart-Treves: 10-20 años post-mastectomía con linfedema. Angiosarcoma hepático: exposición a cloruro de vinilo, arsénico, Thorotrast.',
    histologia: 'Canales vasculares anastomosados tapizados por células endoteliales malignas con atipia. Áreas sólidas de células epitelioides. Mitosis abundantes, necrosis. Ki67 >30%.',
    ihq: ['CD31+ (más sensible y específico)', 'ERG+ (nuclear, muy específico)', 'CD34+ (variable)', 'FLI1+ (nuclear)', 'CK variable (angiosarcoma epitelioide)', 'Factor VIII variable'],
    marcadores_moleculares: [
      { alteracion: 'Amplificación MYC (8q24)', frecuencia: 'Angiosarcoma post-RT y post-linfedema ~90%', relevancia_terapeutica: 'Diagnóstica para angiosarcoma secundario; predictor de pronóstico muy adverso' },
      { alteracion: 'Mutación KDR (VEGFR2)', frecuencia: '~10%', relevancia_terapeutica: 'Sensible a sorafenib/pazopanib' },
      { alteracion: 'Amplificación FLT4', frecuencia: '~20%' }
    ],
    estadificacion: 'AJCC 8ª ed. Estadio III-IV en la mayoría al diagnóstico. Alta tasa de metástasis pulmonares y hepáticas.',
    tratamiento_primera_linea: 'Cirugía con márgenes amplios cuando posible. QT sistémica: paclitaxel semanal (el más activo en angiosarcoma cutáneo), doxorubicina ± ifosfamida, gemcitabina + docetaxel. Sorafenib o pazopanib como alternativa.',
    tratamiento_paliativo: 'Paclitaxel semanal (80 mg/m² días 1,8,15 de ciclos de 28 días) — régimen de Penel et al. Bevacizumab (anti-VEGF). Sorafenib. Pembrolizumab (alta TML en algunos casos).',
    seguimiento: 'TC tórax-abdomen-pelvis cada 2-3 meses (enfermedad muy agresiva).',
    pronostico: 'Uno de los peores pronósticos entre STS: SG mediana ~18 meses. Cutáneo de cuero cabelludo: mediana SG 12-15 meses. Post-RT: mediana SG <12 meses.',
    perlas_clinicas: [
      'CD31 y ERG son los marcadores IHQ más sensibles y específicos para angiosarcoma',
      'MYC amplificación confirma angiosarcoma post-irradiación o post-linfedema (no presente en hemangioma)',
      'Paclitaxel semanal es el régimen más activo en angiosarcoma cutáneo (Penel et al., JNCI 2008)',
      'Stewart-Treves: angiosarcoma en extremidad con linfedema crónico post-mastectomía — diagnóstico frecuentemente tardío',
      'Angiosarcoma cardíaco: auricular derecho, diagnóstico por ecocardiografía + biopsia transvenosa'
    ],
    tags: ['angiosarcoma', 'CD31', 'ERG', 'MYC', 'paclitaxel', 'post-irradiación', 'Stewart-Treves', 'vascular']
  },
  {
    id: 'dfsp',
    nombre: 'Dermatofibrosarcoma protuberans',
    nombre_alternativo: ['DFSP'],
    comportamiento: 'intermedio',
    estirpe: 'tejidos_blandos',
    poblacion: 'adulto',
    localizaciones: ['trunco', 'extremidades', 'cabeza_cuello'],
    grado_histologico: ['G1', 'G2'],
    descripcion: 'Sarcoma dérmico de bajo grado con alta tendencia a la recidiva local pero bajo potencial metastásico. Definido por fusión COL1A1-PDGFB que genera PDGF-B constitutivamente activo. Responde a imatinib (inhibidor de PDGFRB).',
    epidemiologia: 'Incidencia 4-5/millón/año. Adultos 20-50 años. Localización: tronco y raíces de extremidades principalmente. Inicio como placa fibrosa pigmentada de crecimiento lento que eventualmente protruye. Transformación fibrosarcomatosa en ~10-15% (peor pronóstico).',
    histologia: 'Células fusiformes monótonas en patrón estoriforme (rueda de carro) infiltrando dermis reticular y tejido celular subcutáneo. Poca atipia. Ki67 bajo. En transformación fibrosarcomatosa: áreas de mayor celularidad y mitosis.',
    ihq: ['CD34+ (difuso, específico)', 'Vimentina+', 'S100 negativo', 'Factor XIIIa negativo (distingue de dermatofibroma)', 'PDGFB por FISH/RT-PCR'],
    marcadores_moleculares: [
      { alteracion: 'Fusión COL1A1-PDGFB (t(17;22)(q22;q13))', frecuencia: '>90%', relevancia_terapeutica: 'Diagnóstica; DIANA para imatinib (sensibilidad ~70%)' }
    ],
    estadificacion: 'Estadificación según profundidad y extensión. La transformación fibrosarcomatosa indica mayor riesgo sistémico.',
    tratamiento_primera_linea: 'Cirugía de Mohs o resección con márgenes amplios (≥2-3 cm) es el tratamiento estándar. Imatinib 400-800 mg/día neoadyuvante en casos irresecables o para reducir márgenes quirúrgicos necesarios.',
    tratamiento_paliativo: 'Imatinib (aprobado FDA/EMA para DFSP irresecable o metastásico). Sunitinib en resistencia a imatinib.',
    seguimiento: 'Control local a los 3-6 meses durante 5 años (alta tendencia a recidiva local con márgenes inadecuados).',
    pronostico: 'Excelente con resección R0: recidiva <5%. Sin márgenes adecuados: recidiva 50%. Metástasis <5% (aumenta con transformación fibrosarcomatosa).',
    perlas_clinicas: [
      'Imatinib neoadyuvante puede reducir el tamaño del tumor y los márgenes quirúrgicos necesarios en localizaciones críticas (cara, periné)',
      'CD34+ difuso + patrón estoriforme = DFSP hasta que se demuestre lo contrario',
      'Transformación fibrosarcomatosa: buscar áreas de mayor celularidad en el espécimen — cambia el pronóstico',
      'Cirugía de Mohs ofrece menor tasa de recidiva que resección convencional en cara/cabeza'
    ],
    tags: ['DFSP', 'COL1A1-PDGFB', 'CD34', 'imatinib', 'dérmico', 'tronco', 'Mohs']
  },
  {
    id: 'tfs',
    nombre: 'Tumor fibroso solitario',
    nombre_alternativo: ['TFS', 'Solitary Fibrous Tumour', 'Hemangioperiocitoma'],
    comportamiento: 'intermedio',
    estirpe: 'tejidos_blandos',
    poblacion: 'adulto',
    localizaciones: ['visceral', 'retroperitoneal', 'cabeza_cuello', 'trunco'],
    grado_histologico: ['G1', 'G2', 'G3'],
    descripcion: 'Neoplasia fibroblástica definida por la fusión NAB2-STAT6 (inversión 12q13). El TFS maligno puede metastatizar tardíamente (incluso >10 años post-resección). El hemangioperiocitoma es actualmente considerado un sinónimo histológico.',
    epidemiologia: 'Raro. Puede aparecer en cualquier localización. TFS pleural: el más clásico. Retroperitoneal y pélvico son formas frecuentes. Síndrome de Doege-Potter (hipoglucemia paraneoplásica por secreción de IGF-2) en ~5%.',
    histologia: 'Células fusiformes en "patrón sin patrón" con vasos en asta de ciervo (hemangioperiocítico). Colágeno denso. Criterios de malignidad: >4 mitosis/10 HPF, necrosis, atipia marcada.',
    ihq: ['STAT6+ (nuclear, diagnóstico)', 'CD34+', 'CD99+', 'BCL2+', 'Vimentina+', 'S100 negativo', 'Desmina negativo'],
    marcadores_moleculares: [
      { alteracion: 'Fusión NAB2-STAT6 (inversión 12q13)', frecuencia: '>95%', relevancia_terapeutica: 'Diagnóstica; STAT6 IHQ nuclear como sustituto' }
    ],
    estadificacion: 'Sistema de riesgo de Demicco (tamaño, edad, mitosis, necrosis): bajo, intermedio, alto riesgo de metástasis.',
    tratamiento_primera_linea: 'Resección quirúrgica completa. No hay indicación estándar de QT adyuvante en TFS de bajo riesgo.',
    tratamiento_paliativo: 'Temozolomida + bevacizumab (régimen de Stacchiotti et al., activo en TFS maligno): ORR ~20%. Sunitinib, pazopanib, sorafenib.',
    seguimiento: 'Seguimiento prolongado (mínimo 10-15 años) por riesgo de recidiva tardía. TC anual.',
    pronostico: 'TFS bajo riesgo: excelente. TFS alto riesgo: metástasis tardías en 30-40%. Supervivencia desde metástasis mediana ~2 años.',
    perlas_clinicas: [
      'STAT6 nuclear por IHQ es el marcador diagnóstico de elección — reemplaza en la práctica al FISH para NAB2-STAT6',
      'Seguimiento MÍNIMO de 10-15 años — las metástasis pueden aparecer décadas después de la resección',
      'Síndrome de Doege-Potter: hipoglucemia en ayunas por IGF-2 → buscar TFS',
      'Temozolomida + bevacizumab: régimen activo de primera línea en enfermedad avanzada (Stacchiotti, Lancet Oncol 2012)'
    ],
    tags: ['tumor fibroso solitario', 'TFS', 'STAT6', 'NAB2', 'CD34', 'temozolomida', 'bevacizumab', 'Doege-Potter']
  },
  {
    id: 'mpnst',
    nombre: 'Tumor maligno de la vaina del nervio periférico',
    nombre_alternativo: ['MPNST', 'Schwannoma maligno', 'Neurofibrosarcoma'],
    comportamiento: 'maligno',
    estirpe: 'tejidos_blandos',
    poblacion: 'adulto',
    localizaciones: ['extremidades', 'retroperitoneal', 'trunco', 'cabeza_cuello'],
    grado_histologico: ['G2', 'G3'],
    descripcion: 'Sarcoma de origen neural que surge de nervios periféricos, ganglios simpáticos o neurofibromas. Más del 50% asociados a NF1 (síndrome de von Recklinghausen). Alta agresividad y resistencia a QT. Diagnóstico diferencial con fibrosarcoma y SS es crítico.',
    epidemiologia: 'Raro: 2-5% de STS. 50% en contexto de NF1 (riesgo vital de 8-15% en NF1). Edad media 30-60 años. MPNST en NF1 es más agresivo que esporádico.',
    histologia: 'Células fusiformes irregularmente dispuestas, núcleos ondulados o en "S", alternancia de áreas hipercelulares y mixoides. Diferenciación rhabdomioblástica en variante Triton (peor pronóstico). Mitosis frecuentes.',
    ihq: ['S100+ (focal, 50-70% — no difuso como schwannoma)', 'SOX10 focal variable', 'H3K27me3 pérdida de expresión (diagnóstico en contexto NF1)', 'CDKN2A/B pérdida por FISH', 'NF1 mutación germinal'],
    marcadores_moleculares: [
      { alteracion: 'Pérdida NF1 (17q11.2)', frecuencia: 'MPNST esporádico ~50%; NF1-asociado casi 100%' },
      { alteracion: 'Pérdida H3K27me3 (PRC2: EED o SUZ12)', frecuencia: '~70%', relevancia_terapeutica: 'Altamente específica para MPNST; inhibidores EZH2 en investigación' },
      { alteracion: 'Pérdida CDKN2A (9p21)', frecuencia: '~70%' }
    ],
    estadificacion: 'AJCC 8ª ed. Alto grado (G3) en la mayoría. Alta tasa de metástasis pulmonares.',
    tratamiento_primera_linea: 'Cirugía con márgenes amplios (difícil por localización en nervios). QT neoadyuvante (ifosfamida + doxorubicina) en casos seleccionados. RT adyuvante.',
    tratamiento_paliativo: 'Ifosfamida + doxorubicina, gemcitabina + docetaxel, cabozantinib. Inhibidores EZH2 (tazemetostat, aunque aprobado para sarcoma epitelioide) en investigación para MPNST con pérdida PRC2.',
    seguimiento: 'TC tórax-abdomen-pelvis cada 3 meses durante 3 años. En NF1: vigilancia de neurofibromas con transformación sarcomatosa (PET-TC útil).',
    pronostico: 'SG 5 años ~30-50% (esporádico) vs ~20-30% (NF1-asociado). Tumor Triton: SG 5 años <10%.',
    perlas_clinicas: [
      'Pérdida de H3K27me3 por IHQ es el marcador diagnóstico más específico para MPNST — solicitar siempre en tumor fusiforme S100 débil/focal',
      'En NF1: PET-TC para detectar transformación sarcomatosa de neurofibroma (SUV >3.5 sugiere transformación)',
      'Variante Triton (con componente rabdomiosarcomatoso): pronóstico extremadamente adverso',
      'Cirugía preservadora de nervios CONTRAINDICADA si compromete márgenes — amputación funcional puede ser necesaria'
    ],
    tags: ['MPNST', 'NF1', 'H3K27me3', 'PRC2', 'neurofibroma', 'schwannoma maligno', 'neural']
  },
  {
    id: 'sarcoma-epitelioide',
    nombre: 'Sarcoma epitelioide',
    nombre_alternativo: ['SE', 'Epithelioid sarcoma'],
    comportamiento: 'maligno',
    estirpe: 'tejidos_blandos',
    poblacion: 'adulto',
    localizaciones: ['extremidades', 'trunco'],
    grado_histologico: ['G2', 'G3'],
    descripcion: 'Sarcoma definido por pérdida de SMARCB1/INI1 (complejo SWI/SNF). Dos formas: distal (jóvenes, mano/muñeca, nódulos superficiales, simula granuloma) y proximal (adultos mayores, axila/periné/pelvis, mayor agresividad, más parecido a carcinoma). Alta tasa metastásica ganglionar.',
    epidemiologia: 'Raro: 1% de STS. Forma distal: adultos jóvenes 20-30 años, extremidades distales. Forma proximal: 30-60 años, localización profunda. Alta tasa de metástasis ganglionares (30-50%) — único STS con linfadenectomía indicada.',
    histologia: 'Distal: nódulos de células epitelioides con necrosis central (pseudogranuloma necrosante). Proximal: láminas de células grandes epitelioides con rabdoides. Pérdida de INI1 nuclear universal.',
    ihq: ['SMARCB1/INI1 pérdida (diagnóstico)', 'CD34+ (~50%)', 'CK+ (focal-difuso)', 'EMA+', 'Vimentina+', 'S100 negativo', 'CD31 negativo (diferencia de angiosarcoma epitelioide)'],
    marcadores_moleculares: [
      { alteracion: 'Pérdida SMARCB1/INI1 (22q11.2)', frecuencia: '>95%', relevancia_terapeutica: 'DIANA TERAPÉUTICA: tazemetostat (inhibidor EZH2) aprobado FDA/EMA para SE avanzado' }
    ],
    estadificacion: 'AJCC 8ª ed. Evaluar ganglios regionales (linfadenectomía si N+). Alta tasa de metástasis pulmonares y ganglionares.',
    tratamiento_primera_linea: 'Cirugía con márgenes amplios. Ganglio centinela o linfadenectomía regional por alta tasa de N+. QT (doxorubicina ± ifosfamida) en alto riesgo.',
    tratamiento_paliativo: 'Tazemetostat (aprobado FDA 2020, EMA 2021) para SE avanzado irresecable: 800 mg VO/12h. ORR ~15%, tasa de control de enfermedad ~26%. Doxorubicina, ifosfamida, gemcitabina + docetaxel.',
    seguimiento: 'TC tórax-abdomen-pelvis + ecografía de cuencas ganglionares cada 3 meses. Valorar PET-TC para estadificación ganglionar.',
    pronostico: 'SG 5 años ~50-65%. Forma proximal peor que distal. Metástasis ganglionares al diagnóstico: SG 5 años <30%.',
    perlas_clinicas: [
      'Tazemetostat aprobado para SE avanzado — PRIMER inhibidor EZH2 aprobado en oncología sólida',
      'INI1 pérdida por IHQ es diagnóstico — solicitar siempre en sarcoma epitelioide/rabdoide',
      'ALTA tasa de N+ (30-50%) — evaluar ganglios en toda la estadificación; considerar ganglio centinela',
      'CD34+ en sarcoma epitelioide puede confundir con GIST o angiosarcoma — siempre combinar con INI1 y DOG1',
      'Forma proximal puede simular carcinoma indiferenciado — INI1 y CD31 negativos distinguen'
    ],
    tags: ['sarcoma epitelioide', 'SMARCB1', 'INI1', 'tazemetostat', 'EZH2', 'SWI/SNF', 'CD34', 'ganglios']
  },
  {
    id: 'sarcoma-alveolar',
    nombre: 'Sarcoma alveolar de partes blandas',
    nombre_alternativo: ['SAPB', 'Alveolar soft part sarcoma', 'ASPS'],
    comportamiento: 'maligno',
    estirpe: 'tejidos_blandos',
    poblacion: 'adulto',
    localizaciones: ['extremidades', 'cabeza_cuello', 'visceral'],
    grado_histologico: ['G2'],
    descripcion: 'Sarcoma raro de histogénesis incierta, definido por fusión ASPSCR1-TFE3 (también llamado ASPL-TFE3). Crecimiento lento pero alta tasa de metástasis tardías (pulmón, cerebro). Alta expresión de MET y VEGFR. Responde a terapia antiangiogénica.',
    epidemiologia: 'Extremadamente raro: <1% STS. Adultos jóvenes 15-35 años, leve predominio femenino. Localización típica: muslo en adultos; cabeza/cuello/órbita en niños.',
    histologia: 'Nidos alveolares de células grandes con citoplasma eosinófilo granular abundante, separados por septos vasculares. Núcleos grandes vesiculares. Cristales PAS+ (diastasa-resistentes) intracitoplasmáticos.',
    ihq: ['TFE3+ (nuclear, diagnóstico)', 'PAS+ (cristales)', 'CD34 negativo', 'S100 variable', 'Desmina variable'],
    marcadores_moleculares: [
      { alteracion: 'Fusión ASPSCR1-TFE3 (der(17)t(X;17)(p11.2;q25))', frecuencia: '>95%', relevancia_terapeutica: 'Diagnóstica; alta expresión MET/VEGFR → sensible a sunitinib/cabozantinib' }
    ],
    estadificacion: 'Metástasis tardías (pulmón, hueso, cerebro) incluso décadas después. Estadificación incluir TC cerebral.',
    tratamiento_primera_linea: 'Cirugía con márgenes amplios. Terapia antiangiogénica (sunitinib, pazopanib, cabozantinib, axitinib) activa en enfermedad metastásica.',
    tratamiento_paliativo: 'Sunitinib, pazopanib, cabozantinib, axitinib. Inmunoterapia: atezolizumab + bevacizumab (Wilky et al., Nat Med 2019) — respuestas en metastásico.',
    seguimiento: 'TC tórax + RM cerebral cada 6 meses durante 10 años (metástasis cerebrales son frecuentes y tardías).',
    pronostico: 'Crecimiento lento pero mediana SG desde metástasis ~3 años. Metástasis cerebrales en ~20%. Aparente curación quirúrgica con recaídas tardías.',
    perlas_clinicas: [
      'TFE3 nuclear es el marcador diagnóstico — también positivo en carcinoma de células renales con translocación TFE3',
      'RM cerebral en estadificación y seguimiento por alta tasa de metástasis cerebrales',
      'Responde mejor a antiangiogénicos (sunitinib, cabozantinib) que a QT convencional',
      'Cristales PAS+ diastasa-resistentes: morfología casi patognomónica'
    ],
    tags: ['SAPB', 'TFE3', 'ASPSCR1', 'sunitinib', 'cabozantinib', 'antiangiogénico', 'metástasis cerebrales']
  },
  {
    id: 'sarcoma-celulas-claras',
    nombre: 'Sarcoma de células claras',
    nombre_alternativo: ['SCC', 'Clear cell sarcoma', 'Melanoma maligno de partes blandas'],
    comportamiento: 'maligno',
    estirpe: 'tejidos_blandos',
    poblacion: 'adulto',
    localizaciones: ['extremidades'],
    grado_histologico: ['G2', 'G3'],
    descripcion: 'Sarcoma que simula melanoma pero definido por fusión EWSR1-ATF1 o EWSR1-CREB1 (no mutaciones BRAF/NRAS). Asociado a tendones y aponeurosis de extremidades distales. Expresión de marcadores melanocíticos (S100+, HMB45+) pero genética diferente del melanoma.',
    epidemiologia: 'Adultos jóvenes 20-40 años. Preferentemente en pie y tobillo (tendón de Aquiles). Extremadamente raro (<1% STS).',
    histologia: 'Nidos y fascículos de células poligonales con citoplasma claro o ligeramente eosinófilo, separados por septos fibrosos. Células gigantes multinucleadas ocasionales. Melanina intracitoplasmática en 50%.',
    ihq: ['S100+', 'HMB45+', 'Melan-A+', 'SOX10+', 'MiTF+', 'BRAF V600E NEGATIVO (diferencia de melanoma)'],
    marcadores_moleculares: [
      { alteracion: 'Fusión EWSR1-ATF1 (t(12;22)(q13;q12))', frecuencia: '~70%', relevancia_terapeutica: 'Diagnóstica — diferencia definitiva de melanoma' },
      { alteracion: 'Fusión EWSR1-CREB1', frecuencia: '~25%' }
    ],
    estadificacion: 'AJCC 8ª ed. Alta tasa de metástasis ganglionares y a distancia.',
    tratamiento_primera_linea: 'Cirugía R0 con márgenes amplios. Ganglio centinela (alta tasa N+). QT (doxorubicina ± ifosfamida) con respuesta inferior al melanoma. No responde a inhibidores BRAF.',
    tratamiento_paliativo: 'Doxorubicina, ifosfamida. Inmunoterapia (anti-PD1) con respuestas anecdóticas. Diferente del melanoma: NO usar dabrafenib/trametinib.',
    seguimiento: 'TC tórax-abdomen-pelvis + ecografía ganglionar regional. PET-TC para estadificación.',
    pronostico: 'SG 5 años ~50-60%. Alta tasa de recaída tardía y metástasis ganglionares. Peor pronóstico que melanoma de extremidad.',
    perlas_clinicas: [
      'NO confundir con melanoma: BRAF V600E negativo, EWSR1-ATF1 positivo — crítico para no dar inhibidores BRAF ineficaces',
      'Expresión de marcadores melanocíticos (HMB45, Melan-A) no implica ser melanoma — siempre confirmar con FISH para EWSR1',
      'Alta tasa de N+ — ganglio centinela o linfadenectomía recomendada',
      'Asociación característica con tendón de Aquiles y aponeurosis plantar'
    ],
    tags: ['sarcoma células claras', 'EWSR1-ATF1', 'melanoma partes blandas', 'HMB45', 'S100', 'no-melanoma']
  },
  {
    id: 'sarcoma-ewing-extraoseo',
    nombre: 'Sarcoma de Ewing extraóseo',
    nombre_alternativo: ['Ewing extraóseo', 'pPNET', 'Tumor neuroectodérmico primitivo periférico'],
    comportamiento: 'maligno',
    estirpe: 'tejidos_blandos',
    poblacion: 'pediatrico',
    localizaciones: ['trunco', 'extremidades', 'retroperitoneal', 'visceral'],
    grado_histologico: ['G3'],
    descripcion: 'Tumor de células redondas pequeñas definido por fusiones EWSR1 (o FUS) con factores de transcripción ETS (principalmente FLI1 o ERG). Pared torácica, retroperitoneo y partes blandas profundas. Clínica, tratamiento y pronóstico similares al Ewing óseo.',
    epidemiologia: 'Extraóseo representa ~15-20% de todos los sarcomas de Ewing. Más frecuente en adultos jóvenes (pico 15-30 años) comparado con Ewing óseo. Retroperitoneo y pared torácica son localizaciones frecuentes.',
    histologia: 'Láminas difusas de células redondas pequeñas con escaso citoplasma, núcleos redondos u ovales con cromatina fina. Rosetas de Homer-Wright en PNET (diferenciación neuroectodérmica). PAS+ (glucógeno citoplasmático).',
    ihq: ['CD99+ (membrana, difuso — muy sensible pero inespecífico)', 'FLI1+ (nuclear)', 'NKX2.2+ (diagnóstico)', 'Vimentina+', 'Sinaptofisina+/- (en PNET)', 'CK negativo', 'Leucocitos negativos'],
    marcadores_moleculares: [
      { alteracion: 'Fusión EWSR1-FLI1 (t(11;22)(q24;q12))', frecuencia: '~85%', relevancia_terapeutica: 'Diagnóstica; predictor de respuesta a QT estándar' },
      { alteracion: 'Fusión EWSR1-ERG (t(21;22)(q22;q12))', frecuencia: '~10%' },
      { alteracion: 'Fusión FUS-ERG o FUS-FEV', frecuencia: '<5%' }
    ],
    estadificacion: 'Estadificación según COG/ESMO: localizado vs metastásico. Metástasis pulmonares y óseas. PET-TC + BOM bilateral obligatorio.',
    tratamiento_primera_linea: 'QT sistémica SIEMPRE: inducción con VDC/IE (vincristina + doxorubicina + ciclofosfamida alternando con ifosfamida + etopósido, 18 semanas). Consolidación local: cirugía ± RT. En metastásico: considerar HDC + TASPE.',
    tratamiento_paliativo: 'Segunda línea: topotecan + ciclofosfamida, gemcitabina + docetaxel, irinotecán + temozolomida (IT). Ensayos con inhibidores PARP (olaparib), anti-IGF1R (ganitumab).',
    seguimiento: 'TC tórax + PET-TC o gammagrafía ósea cada 3 meses durante 2 años. BOM anual.',
    pronostico: 'Localizado: SG 5 años ~65-70%. Metastásico (pulmón): ~30%. Metastásico (óseo/médula): ~10-20%.',
    perlas_clinicas: [
      'NKX2.2 nuclear es el marcador IHQ más específico para sarcoma de Ewing — más específico que CD99',
      'CD99 difuso membranoso en células redondas → Ewing, pero también positivo en DSRCT, linfoma, GIST — siempre confirmar con FISH EWSR1',
      'VDC/IE alternante: el régimen estándar del EURO-EWING (6 ciclos inducción + 6 ciclos consolidación)',
      'BOM bilateral OBLIGATORIA en estadificación inicial — afectación medular cambia el tratamiento'
    ],
    tags: ['Ewing extraóseo', 'EWSR1-FLI1', 'CD99', 'NKX2.2', 'VDC/IE', 'células redondas', 'pediátrico']
  },
  {
    id: 'tdcpr',
    nombre: 'Tumor desmoplásico de células pequeñas redondas',
    nombre_alternativo: ['TDCPR', 'DSRCT', 'Desmoplastic Small Round Cell Tumour'],
    comportamiento: 'maligno',
    estirpe: 'tejidos_blandos',
    poblacion: 'pediatrico',
    localizaciones: ['visceral', 'retroperitoneal'],
    grado_histologico: ['G3'],
    descripcion: 'Tumor agresivo con diferenciación polipotente (neural, muscular, epitelial), definido por fusión EWSR1-WT1. Típicamente en peritoneo/retroperitoneo de adolescentes varones. Presentación clásica: masas peritoneales múltiples sin primario evidente.',
    epidemiologia: 'Extremadamente raro. Adolescentes y adultos jóvenes, predominio masculino (F:M 1:4). Peritoneo pelviano e intrabdominal.',
    histologia: 'Nidos de células pequeñas redondas en estroma desmoplásico denso. Diferenciación mixta: expresión simultánea de CK, desmina (paranuclear "dot-like") y CD99.',
    ihq: ['CK+', 'EMA+', 'Desmina+ (patrón "dot" paranuclear perinuclear)', 'NSE+', 'CD99+', 'WT1+ (carbono terminal — específico)', 'Desmin dot-like patrón CARACTERÍSTICO'],
    marcadores_moleculares: [
      { alteracion: 'Fusión EWSR1-WT1 (t(11;22)(p13;q12))', frecuencia: '>95%', relevancia_terapeutica: 'Diagnóstica y patognomónica' }
    ],
    estadificacion: 'Siempre estadio IV al diagnóstico por carcinomatosis peritoneal. TC tórax-abdomen-pelvis + PET-TC.',
    tratamiento_primera_linea: 'QT inducción: P6 (ciclofosfamida + doxorubicina + vincristina alternando con ifosfamida + etopósido). Cirugía citorreductora (debulking) cuando ≥90% citorreducción. HIPEC en centros con experiencia.',
    tratamiento_paliativo: 'Regímenes de rescate: vincristina + irinotecán + temozolomida, topotecan + ciclofosfamida.',
    seguimiento: 'TC tórax-abdomen-pelvis cada 2-3 meses (enfermedad altamente agresiva).',
    pronostico: 'Pronóstico muy sombrío. SG mediana <3 años incluso con tratamiento agresivo. SG 5 años <20%.',
    perlas_clinicas: [
      'Desmina "dot-like" paranuclear en células redondas = TDCPR hasta que se demuestre lo contrario',
      'EWSR1-WT1 patognomónico — anticuerpo anti-WT1 carbono-terminal específico en IHQ',
      'Siempre multidisciplinar con equipo de peritonectomía + oncología pediátrica',
      'HIPEC puede mejorar supervivencia en pacientes seleccionados con citorreducción completa'
    ],
    tags: ['DSRCT', 'EWSR1-WT1', 'desmoplásico', 'células redondas', 'peritoneo', 'HIPEC', 'pediátrico']
  },
  {
    id: 'pecoma',
    nombre: 'PEComa',
    nombre_alternativo: ['Perivascular epithelioid cell tumour', 'AML', 'Angiomiolipoma maligno'],
    comportamiento: 'intermedio',
    estirpe: 'tejidos_blandos',
    poblacion: 'adulto',
    localizaciones: ['visceral', 'retroperitoneal', 'extremidades'],
    grado_histologico: ['G1', 'G2'],
    descripcion: 'Familia de tumores mesenquimales con diferenciación perivascular epitelioide (células epitelioides con melanina y músculo liso). Incluye angiomiolipoma (renal), linfangioleiomiomatosis (pulmón), tumor de células claras del ligamento falciforme/hígado. Activación mTOR en la mayoría. Sensible a inhibidores mTOR.',
    epidemiologia: 'Raro. Predominio femenino. Asociación con esclerosis tuberosa (TSC1/TSC2). AML renal: complicación mayor en TSC.',
    histologia: 'Células epitelioides con citoplasma claro-eosinófilo granular. Asociadas a vasos de pared gruesa. Gránulos de melanina. Criterios de malignidad: tamaño >5 cm, infiltración vascular, necrosis, atipia severa, mitosis >1/50 HPF.',
    ihq: ['HMB45+', 'Melan-A+', 'SMA+', 'Desmina variable', 'TFE3+ (~50%)', 'CK negativo', 'S100 negativo'],
    marcadores_moleculares: [
      { alteracion: 'Pérdida TSC1/TSC2 → activación mTOR', frecuencia: '~50%', relevancia_terapeutica: 'DIANA: sirolimus/everolimus activos' },
      { alteracion: 'Fusión TFE3 (subgrupo)', frecuencia: '~10%', relevancia_terapeutica: 'Puede ser resistente a mTOR inhibidores' }
    ],
    estadificacion: 'No hay sistema de estadificación específico. Criterios de Folpe para malignidad.',
    tratamiento_primera_linea: 'Cirugía. Sirolimus o everolimus en PEComa maligno irresecable o metastásico (múltiples series positivas).',
    tratamiento_paliativo: 'Sirolimus/everolimus (mTOR inhibidores). Nab-paclitaxel. Doxorubicina. Ensayos con inhibidores mTORC1/2.',
    seguimiento: 'TC anual en PEComa de bajo riesgo. Más frecuente en malignos.',
    pronostico: 'Variable: PEComa benigno excelente. Maligno con metástasis: SG mediana ~2-3 años.',
    perlas_clinicas: [
      'HMB45+ + SMA+ en tumor sólido = PEComa (familia)',
      'Sirolimus/everolimus activos en PEComa maligno con pérdida TSC — alternativa a QT convencional',
      'AML renal >4 cm en TSC: alto riesgo de hemorragia espontánea — embolización o cirugía preventiva',
      'No confundir con carcinoma de células renales: CK negativo en PEComa'
    ],
    tags: ['PEComa', 'HMB45', 'TSC', 'mTOR', 'sirolimus', 'everolimus', 'angiomiolipoma', 'TFE3']
  },
  // ═══════════════════════════════════════════════════════
  // TUMORES ÓSEOS
  // ═══════════════════════════════════════════════════════
  {
    id: 'osteosarcoma',
    nombre: 'Osteosarcoma convencional',
    nombre_alternativo: ['OS', 'Osteosarcoma central de alto grado'],
    comportamiento: 'maligno',
    estirpe: 'oseo',
    poblacion: 'pediatrico',
    localizaciones: ['extremidades'],
    grado_histologico: ['G3'],
    descripcion: 'Tumor óseo maligno primario más frecuente en niños y adolescentes. Producción de osteoide maligno por células tumorales. Localización metafisaria en huesos largos (distal fémur 30%, proximal tibia 20%, proximal húmero 10%). Alta quimiosensibilidad (cisplatino + doxorubicina + ifosfamida/metotrexato).',
    epidemiologia: 'Incidencia 4-5/millón/año. Pico bimodal: 10-20 años (adolescentes, brote de crecimiento) y >65 años (secundario a enfermedad de Paget o post-RT). Ligero predominio masculino. Segundo cáncer óseo más frecuente tras mieloma.',
    histologia: 'Células malignas fusocelulares-pleomórficas con producción directa de osteoide. Subtipos: osteoblástico (más frecuente, 50%), condroblástico (20%), fibroblástico (20%). Alta actividad mitótica, necrosis frecuente.',
    ihq: ['Vimentina+', 'SATB2+ (muy sensible para diferenciación osteoblástica)', 'Osteonectina+', 'ALP+', 'Ki67 alto', 'p53 mutado (~50%)'],
    marcadores_moleculares: [
      { alteracion: 'Amplificación MDM2/CDK4 (excluir LPS-DD si en partes blandas)', frecuencia: '~10%' },
      { alteracion: 'Mutación TP53', frecuencia: '~50%' },
      { alteracion: 'Pérdida RB1', frecuencia: '~40%' },
      { alteracion: 'Amplificación MYC', frecuencia: '~20%' }
    ],
    estadificacion: 'Sistema Enneking/AJCC: estadio IIA (G3, T1, N0M0 — intacompartimental), IIB (extracompartimental), III (metástasis). RM local + TC tórax + gammagrafía ósea en estadificación.',
    tratamiento_primera_linea: 'QT neoadyuvante (MAP: metotrexato + adriamicina + cisplatino o APO: adriamicina + cisplatino + ifosfamida) → cirugía conservadora o amputación → QT adyuvante basada en respuesta histológica (necrosis >90% = buen respondedor).',
    tratamiento_paliativo: 'Ifosfamida + etopósido, gemcitabina + docetaxel, sorafenib + everolimus (estudio SUCCESS-II). Samario-153 para metástasis óseas.',
    seguimiento: 'RM local + TC tórax cada 3 meses durante 2 años. Metástasis pulmonares son la principal causa de muerte.',
    pronostico: 'Localizado: SG 5 años ~70-75% con QT + cirugía. Metastásico pulmonar: ~20-30%. Respuesta histológica a QT neoadyuvante (>90% necrosis) = mejor predictor pronóstico.',
    perlas_clinicas: [
      'Respuesta histológica ≥90% de necrosis tras QT neoadyuvante predice excelente supervivencia (Huvos grado III-IV)',
      'Cirugía conservadora de miembro posible en 85-90% con planificación previa — no compromete supervivencia si márgenes adecuados',
      'SATB2 es el marcador IHQ más sensible para osteosarcoma — siempre incluir en panel',
      'Metástasis pulmonares resecables: metastasectomía mejora supervivencia — siempre evaluar resecabilidad',
      'En >65 años: descartar enfermedad de Paget subyacente (gammagrafía ósea, ALP)'
    ],
    tags: ['osteosarcoma', 'SATB2', 'MAP', 'metotrexato', 'cisplatino', 'doxorubicina', 'pediátrico', 'metafisario']
  },
  {
    id: 'condrosarcoma',
    nombre: 'Condrosarcoma convencional',
    nombre_alternativo: ['CS', 'Chondrosarcoma'],
    comportamiento: 'maligno',
    estirpe: 'oseo',
    poblacion: 'adulto',
    localizaciones: ['extremidades', 'trunco', 'cabeza_cuello'],
    grado_histologico: ['G1', 'G2', 'G3'],
    descripcion: 'Segundo tumor óseo maligno primario más frecuente. Producción de matriz cartilaginosa maligna. Espectro de bajo grado (G1, condrosarcoma central de bajo grado, antiguo "encondroma atípico") a alto grado (G3). Resistente a QT convencional — cirugía es el único tratamiento curativo en la mayoría.',
    epidemiologia: 'Incidencia 4-5/millón/año. Adultos >40 años (pico 40-70 años). Localización: pelvis 20%, fémur proximal 20%, húmero proximal 10%, costillas 15%.',
    histologia: 'G1: baja celularidad, escasa atipia, lagunas cartilaginosas con condrocitos atípicos pequeños, permeación de trabéculas óseas. G3: alta celularidad, atipia marcada, mitosis, necrosis. Maduración de cartílago con calcificación en "palomitas de maíz".',
    ihq: ['S100+ (cartílago)', 'SOX9+', 'IDH1 R132H+ (~50% — anticuerpo específico)', 'p16 pérdida variable', 'Ki67 correlaciona con grado'],
    marcadores_moleculares: [
      { alteracion: 'Mutación IDH1 (R132H más frecuente)', frecuencia: '~50%', relevancia_terapeutica: 'Diagnóstica; inhibidores IDH1 (ivosidenib, olutasidenib) en investigación' },
      { alteracion: 'Mutación IDH2', frecuencia: '~10%' },
      { alteracion: 'Pérdida CDKN2A', frecuencia: '~30%' },
      { alteracion: 'COL2A1 mutación', frecuencia: '~15%' }
    ],
    estadificacion: 'Enneking/AJCC. Condrosarcoma G1 intacompartimental: estadio IA. G3 o extracompartimental: estadio IIB-III. Metástasis preferentemente pulmonares.',
    tratamiento_primera_linea: 'Cirugía con márgenes amplios es el ÚNICO tratamiento potencialmente curativo. QT convencional generalmente ineficaz en condrosarcoma convencional. RT poco eficaz (excepto condrosarcoma mesenquimal, células claras).',
    tratamiento_paliativo: 'Condrosarcoma dedif.: doxorubicina ± ifosfamida (similar a osteosarcoma). Inhibidores IDH1/2 en investigación. Mifamurtida en osteosarcoma (no en condrosarcoma). Pazopanib en segunda línea.',
    seguimiento: 'RM local + TC tórax cada 6 meses durante 5 años. Condrosarcoma G1: puede recidivar localmente décadas después.',
    pronostico: 'G1: SG 5 años ~90%. G2: ~60-80%. G3: ~30-40%. Condrosarcoma desdiferenciado (G3 con componente de alto grado): <10% SG 5 años.',
    perlas_clinicas: [
      'IDH1/2 mutación en condrosarcoma convencional: inhibidores IDH en ensayos — solicitar perfil molecular',
      'QT convencional INEFICAZ en condrosarcoma convencional — no tratar como osteosarcoma',
      'Condrosarcoma desdiferenciado: componente de alto grado no cartilaginoso coexistente — tratar como sarcoma de alto grado',
      'Condrosarcoma G1 en huesos apendiculares puede tratarse con curetaje + relleno con cemento en tumores seleccionados'
    ],
    tags: ['condrosarcoma', 'IDH1', 'IDH2', 'S100', 'SOX9', 'cartílago', 'resistente QT', 'adulto']
  },
  {
    id: 'ewing-oseo',
    nombre: 'Sarcoma de Ewing óseo',
    nombre_alternativo: ['Ewing óseo', 'ESFT', 'Ewing Sarcoma Family of Tumours'],
    comportamiento: 'maligno',
    estirpe: 'oseo',
    poblacion: 'pediatrico',
    localizaciones: ['extremidades', 'trunco'],
    grado_histologico: ['G3'],
    descripcion: 'Tumor óseo maligno definido por fusiones EWSR1-ETS. Células redondas pequeñas en hueso. Segundo tumor óseo maligno más frecuente en niños (<20 años). Localización diafisaria (distingue de osteosarcoma metafisario). Respuesta excelente a QT multiagente.',
    epidemiologia: 'Incidencia 3/millón/año en <20 años. Pico 10-15 años. Raro en >30 años. Predominio caucásico (raro en africanos). Localización: fémur 25%, pelvis 20%, tibia 10%, peroné 9%.',
    histologia: 'Igual que Ewing extraóseo. Láminas difusas de células redondas pequeñas con escaso citoplasma. PAS+. Destrucción cortical con masa de partes blandas (imagen en cebolla en Rx).',
    ihq: ['CD99+ (membrana)', 'NKX2.2+', 'FLI1+', 'Vimentina+', 'Sinaptofisina variable'],
    marcadores_moleculares: [
      { alteracion: 'Fusión EWSR1-FLI1 (~85%)', frecuencia: '~85%', relevancia_terapeutica: 'Diagnóstica; mismo tratamiento independientemente de la fusión ETS' },
      { alteracion: 'Fusión EWSR1-ERG (~10%)', frecuencia: '~10%' }
    ],
    estadificacion: 'Localizado vs metastásico. PET-TC + BOM bilateral + RM local + TC tórax. Metástasis pulmonares y óseas (peor pronóstico que solo pulmonares).',
    tratamiento_primera_linea: 'VDC/IE alternante (12-18 ciclos) según protocolo EURO-EWING 2012/2019 o COG AEWS1031. Control local: cirugía ± RT (RT sola si cirugía no posible). En metastásico de alto riesgo: HDC + TASPE.',
    tratamiento_paliativo: 'Irinotecán + temozolomida (IT), topotecan + ciclofosfamida, carboplatino + etopósido, gemcitabina + docetaxel. Ensayos con inhibidores PARP (olaparib: EWing1 trial), anti-IGF1R.',
    seguimiento: 'PET-TC cada 3 meses durante 2 años. BOM anual durante 5 años.',
    pronostico: 'Localizado: SG 5 años ~70%. Metastásico solo pulmonar: ~30-40%. Metastásico óseo/médula: ~10-20%.',
    perlas_clinicas: [
      'Ewing óseo vs osteosarcoma: localización DIAFISARIA (Ewing) vs METAFISARIA (OS); imagen "en cebolla" (Ewing) vs "triángulo de Codman" (OS)',
      'BOM bilateral OBLIGATORIA — afectación bilateral o medular = estadio IV, cambia tratamiento',
      'Pelvis = localización de alto riesgo por dificultad de resección con márgenes',
      'Respuesta PET tras 2 ciclos de inducción predice supervivencia — evaluar con PET-TC precoz'
    ],
    tags: ['Ewing óseo', 'EWSR1-FLI1', 'CD99', 'NKX2.2', 'VDC/IE', 'pediátrico', 'diafisario', 'BOM']
  },
  {
    id: 'cordoma',
    nombre: 'Cordoma',
    nombre_alternativo: ['Chordoma'],
    comportamiento: 'maligno',
    estirpe: 'oseo',
    poblacion: 'adulto',
    localizaciones: ['trunco', 'cabeza_cuello'],
    grado_histologico: ['G1', 'G2'],
    descripcion: 'Tumor óseo maligno de baja-intermedia malignidad originado de restos de la notocorda. Localización axial exclusiva: sacrocóccix (50%), base de cráneo (35%), columna vertebral móvil (15%). Alta tendencia a recidiva local. Resistente a QT y RT convencional. Imatinib/sunitinib con actividad modesta.',
    epidemiologia: 'Incidencia 0.5/millón/año. Adultos 50-70 años (sacrocóccix). Base de cráneo: adultos más jóvenes. Leve predominio masculino. Asociación con TBXT (T-box transcription factor) duplicación germinal en familiares.',
    histologia: 'Células fisalíforas (citoplasma vacuolado con aspecto burbujeante), dispuestas en cordones y lóbulos inmersos en matriz mixoide. IHQ con brachyury (TBXT) es patognomónica.',
    ihq: ['Brachyury (TBXT)+ (nuclear, diagnóstico)', 'S100+', 'CK+', 'EMA+', 'Vimentina+', 'CD24+ variable'],
    marcadores_moleculares: [
      { alteracion: 'Ganancia/duplicación TBXT (6q27)', frecuencia: 'Germinal en familiares; expresión universal en esporádico', relevancia_terapeutica: 'Diagnóstica; inhibidores CDK en investigación' },
      { alteracion: 'Pérdida CDKN2A', frecuencia: '~50%' },
      { alteracion: 'Pérdida PTEN', frecuencia: '~25%' }
    ],
    estadificacion: 'Imagen RM local (fundamental para planificar cirugía). TC para evaluar destrucción ósea. Baja tasa de metástasis a distancia (<10%) pero alta morbilidad local.',
    tratamiento_primera_linea: 'Resección quirúrgica R0 (sacrectomía en sacrocóccix, base de cráneo en neurocirugía). RT de alta precisión: protonterapia o hadronterapia (carbono) cuando cirugía R0 no posible. Radioterapia convencional menos eficaz.',
    tratamiento_paliativo: 'Imatinib (PDGFR overexpression: ORR ~5-15%), sorafenib, erlotinib + bevacizumab, lapatinib (HER2+). Ensayos con inhibidores CDK4/6.',
    seguimiento: 'RM local cada 6 meses durante 5 años. Recidivas locales tardías frecuentes (hasta 10-15 años).',
    pronostico: 'SG 5 años ~65-70%. Recidiva local en >50% a 10 años sin márgenes adecuados. Metástasis tardías en ~10%. Mortalidad por progresión local (no sistémica en la mayoría).',
    perlas_clinicas: [
      'Brachyury (TBXT) nuclear es el marcador patognomónico — distingue de condrosarcoma y carcinoma metastásico',
      'Protonterapia o hadroterapia de carbono de ELECCIÓN cuando no se puede lograr R0 quirúrgico — mejor que RT convencional',
      'Sacrectomía parcial vs total: preservación de S3 bilateral mantiene función vesical e intestinal en ~80%',
      'Cordoma sacro: el abordaje posterior ± anterior combinado aumenta la tasa de R0 — planificar en CSUR'
    ],
    tags: ['cordoma', 'brachyury', 'TBXT', 'sacro', 'base cráneo', 'protonterapia', 'notocorda', 'imatinib']
  },
  {
    id: 'tcg',
    nombre: 'Tumor de células gigantes óseo',
    nombre_alternativo: ['TCG', 'GCT', 'Giant Cell Tumour of Bone', 'Osteoclastoma'],
    comportamiento: 'intermedio',
    estirpe: 'oseo',
    poblacion: 'adulto',
    localizaciones: ['extremidades', 'trunco'],
    grado_histologico: ['G1', 'G2'],
    descripcion: 'Tumor óseo benigno localmente agresivo con ~5% de malignización. Definido por mutación H3.3 (H3F3A K36M o G34W). Denosumab (anti-RANKL) revolucionó el tratamiento. Localización epifisaria característica en adultos jóvenes.',
    epidemiologia: 'Incidencia 1-2/millón/año. Adultos jóvenes 20-40 años (epifisaria, después del cierre fisario). Localización: distal fémur 25%, proximal tibia 20%, distal radio 10%. Pulmonar "implants" en ~3% (no metástasis reales — células tumorales BENIGNAS en pulmón).',
    histologia: 'Dos poblaciones celulares: células estromales mononucleadas (neoplásicas, con mutación H3.3) + células gigantes osteoclásticas (reactivas, H3.3 nativa). Uniforme distribución de gigantes sin formación de osteoide.',
    ihq: ['H3.3 G34W+ (específico para TCG de partes blandas/óseo)', 'H3.3 K36M (condrosarcoma mesenquimal)', 'p63+ (estromal)', 'RANKL+ (estromal)', 'CD68+ (gigantes)', 'TRAP+ (gigantes)'],
    marcadores_moleculares: [
      { alteracion: 'Mutación H3F3A G34W (H3.3)', frecuencia: '~90%', relevancia_terapeutica: 'Diagnóstica; patognomónica de TCG óseo' },
      { alteracion: 'Mutación H3F3A K36M', frecuencia: 'Condrosarcoma mesenquimal — diagnóstico diferencial' }
    ],
    estadificacion: 'Sistema Campanacci: grado I (latente), grado II (activo), grado III (localmente agresivo). RM local + TC tórax (implantes pulmonares).',
    tratamiento_primera_linea: 'Curetaje + relleno con cemento/injerto óseo (tumor benigno). Denosumab neoadyuvante (120 mg SC cada 4 semanas, 3 dosis de carga D1,8,15) para consolidación ósea preoperatoria o en irresecable.',
    tratamiento_paliativo: 'Denosumab (aprobado FDA/EMA para TCG irresecable o metastásico): 120 mg SC mensual + suplementos Ca/vit D. Bifosfonatos (zoledrónico). Interferón-alfa en implantes pulmonares.',
    seguimiento: 'RM local cada 3-4 meses durante 2 años. Vigilar recidiva local (alta: 15-25% con curetaje solo).',
    pronostico: 'Benigno con curetaje: SG excelente, recidiva local 15-25%. Con denosumab: control de enfermedad >90%. Malignización (<5%): supervivencia reducida.',
    perlas_clinicas: [
      'Denosumab convierte TCG irresecable en resecable — considerar siempre 3-6 meses de denosumab antes de cirugía compleja',
      'H3F3A G34W por IHQ patognomónico de TCG óseo — no presente en otros tumores óseos',
      '"Implantes" pulmonares benignos — NO son metástasis; tratar con denosumab, no con QT',
      'Tras denosumab: esclerosis ósea marcada — cirugía más difícil técnicamente; planificar con cuidado el timing'
    ],
    tags: ['TCG', 'células gigantes', 'H3F3A', 'denosumab', 'RANKL', 'curetaje', 'osteoclastoma', 'epifisario']
  },
  // ═══════════════════════════════════════════════════════
  // TUMORES BENIGNOS / INTERMEDIOS RELEVANTES
  // ═══════════════════════════════════════════════════════
  {
    id: 'desmoide',
    nombre: 'Tumor desmoide / Fibromatosis agresiva',
    nombre_alternativo: ['Desmoid', 'Fibromatosis de tejidos profundos', 'Tumor desmoide abdominal'],
    comportamiento: 'intermedio',
    estirpe: 'tejidos_blandos',
    poblacion: 'adulto',
    localizaciones: ['trunco', 'extremidades', 'visceral', 'retroperitoneal'],
    grado_histologico: ['G1'],
    descripcion: 'Neoplasia fibroblástica localmente agresiva sin potencial metastásico, definida por mutación CTNNB1 (β-catenina) o pérdida de APC (en PAF). Tendencia a recidiva local pero también a regresión espontánea. Paradigma de manejo con vigilancia activa antes de tratar.',
    epidemiologia: 'Incidencia 2-4/millón/año. Adultos jóvenes 20-40 años, predominio femenino. Formas: extra-abdominal (pared abdominal/extremidades), intra-abdominal/mesentérica (asociada a PAF = Poliposis adenomatosa familiar, síndrome de Gardner).',
    histologia: 'Proliferación de células fusiformes miofibroblásticas blandas sin atipia, con abundante colágeno entre ellas. Patrón de barrido con vasos de pared gruesa. Infiltración de estructuras adyacentes sin cápsula.',
    ihq: ['β-catenina+ (nuclear — diagnóstico)', 'SMA+', 'Vimentina+', 'Desmina variable', 'CD34 negativo', 'S100 negativo'],
    marcadores_moleculares: [
      { alteracion: 'Mutación CTNNB1 (exón 3: T41A, S45F, S45P)', frecuencia: '~85% esporádico', relevancia_terapeutica: 'Diagnóstica; S45F asociado a mayor agresividad local; diana WNT/β-catenina' },
      { alteracion: 'Pérdida APC (germinal)', frecuencia: 'PAF/síndrome de Gardner', relevancia_terapeutica: 'Todo paciente <40 años con desmoide intra-abdominal: descartar PAF' }
    ],
    estadificacion: 'No hay estadificación oncológica estándar (no metastatiza). Evaluación de riesgo local: localización, tamaño, afectación vascular.',
    tratamiento_primera_linea: 'VIGILANCIA ACTIVA PRIMERO (observación y watch-and-wait): 50% de tumores desmoides estabilizan o regresan espontáneamente. Tratamiento si progresión sintomática: sorafenib (aprobado tras estudio DES-CLIN de Gounder et al.), sulindac + tamoxifeno (opción clásica), imatinib.',
    tratamiento_adyuvante: 'Sorafenib 400 mg/12h (Gounder et al., NEJM 2018: PFS mejorado vs placebo). Gamma-Knife o RT estereotáctica en localizaciones críticas. Cirugía: SOLO en casos seleccionados (márgenes difíciles; alta recidiva local).',
    seguimiento: 'RM local cada 3-6 meses durante 2 años, luego anual. Medir con criterios RECIST.',
    pronostico: 'Sin mortalidad específica (no metastatiza). Alta morbilidad por recidivas locales y compromiso de estructuras vitales (mesenterio, vasos). Regresión espontánea en ~20-30%.',
    perlas_clinicas: [
      'Vigilancia activa ES el tratamiento estándar inicial — no operar de entrada en tumor asintomático estable',
      'Sorafenib aprobado por FDA para desmoide recurrente/irresecable tras estudio GOUNDER (NEJM 2018)',
      'TODO desmoide intra-abdominal en <40 años: colonoscopia para descartar PAF (síndrome de Gardner)',
      'Cirugía del desmoide tiene tasa de recidiva local 40-70% — valorar riesgo-beneficio muy cuidadosamente',
      'S45F (CTNNB1): mutación asociada a mayor agresividad — vigilar más de cerca'
    ],
    tags: ['desmoide', 'fibromatosis', 'β-catenina', 'CTNNB1', 'APC', 'PAF', 'sorafenib', 'vigilancia activa', 'Gardner']
  },
  {
    id: 'hemangioendotelioma-epitelioide',
    nombre: 'Hemangioendotelioma epitelioide',
    nombre_alternativo: ['HEE', 'EHE', 'Epithelioid Haemangioendothelioma'],
    comportamiento: 'intermedio',
    estirpe: 'tejidos_blandos',
    poblacion: 'adulto',
    localizaciones: ['visceral', 'retroperitoneal', 'extremidades'],
    grado_histologico: ['G1', 'G2'],
    descripcion: 'Tumor vascular maligno de bajo-intermedio grado, definido por fusión WWTR1-CAMTA1 (~90%) o YAP1-TFE3 (~10%). Localización hepática, pulmonar, ósea o de partes blandas. Curso indolente en la mayoría. Responde parcialmente a sorafenib y bevacizumab.',
    epidemiologia: 'Raro: adultos 30-50 años. Localización más frecuente: hígado (a menudo multifocal). Pulmón: nódulos múltiples bilaterales (diagnóstico diferencial con metástasis). Hueso: lesiones líticas múltiples.',
    histologia: 'Células epitelioides con citoplasma vacuolado (formación intracitoplásmica de lúmenes vasculares = "blister cells"). Estroma mixoide-hialino. Pleomorfismo escaso en bajo grado. Alto grado: mayor atipia y mitosis.',
    ihq: ['CD31+', 'ERG+', 'CD34 variable', 'CAMTA1+ (nuclear, diagnóstico en WWTR1-CAMTA1+)', 'TFE3+ (en fusión YAP1-TFE3)', 'CK variable', 'Ki67 bajo-moderado'],
    marcadores_moleculares: [
      { alteracion: 'Fusión WWTR1-CAMTA1 (t(1;3)(p36.3;q25))', frecuencia: '~90%', relevancia_terapeutica: 'Diagnóstica; CAMTA1 IHQ nuclear como sustituto' },
      { alteracion: 'Fusión YAP1-TFE3 (t(X;11))', frecuencia: '~10%', relevancia_terapeutica: 'Patrón histológico distinto; TFE3+ por IHQ' }
    ],
    estadificacion: 'TC tórax-abdomen-pelvis + RM hígado. Multifocalidad frecuente pero no siempre implica mal pronóstico.',
    tratamiento_primera_linea: 'Observación en casos asintomáticos estables. Sirolimus/everolimus, sorafenib, bevacizumab. Trasplante hepático en HEE hepático multifocal irresecable (resultados favorables en casos seleccionados).',
    tratamiento_paliativo: 'Interferón-alfa, sorafenib, pazopanib, thalidomida. Trasplante hepático en centro de referencia.',
    seguimiento: 'TC cada 6 meses. Curso variable: algunos progresan lentamente durante años.',
    pronostico: 'Variable: 5-año SG ~60-70%. Algunos casos con progresión lenta compatible con supervivencia prolongada. Peor pronóstico: alto grado, metástasis a distancia.',
    perlas_clinicas: [
      'CAMTA1 nuclear por IHQ confirma HEE con fusión WWTR1-CAMTA1 — más accesible que FISH',
      'HEE hepático multifocal: considerar trasplante hepático — puede ser curativo en enfermedad confinada al hígado',
      'No confundir con angiosarcoma (HEE tiene mejor pronóstico) — morfología, CAMTA1 y Ki67 bajo diferencian',
      'Curso indolente: observación válida antes de iniciar terapia sistémica'
    ],
    tags: ['hemangioendotelioma epitelioide', 'HEE', 'WWTR1-CAMTA1', 'CAMTA1', 'CD31', 'sorafenib', 'trasplante hepático']
  }
]
