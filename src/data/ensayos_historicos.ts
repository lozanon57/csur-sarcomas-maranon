import type { EnsayoHistorico } from '../types'

/**
 * ENSAYOS HISTÓRICOS (LANDMARK TRIALS)
 * Trials que cambiaron la práctica clínica en sarcomas.
 * Ordenados cronológicamente dentro de cada categoría.
 * Fuentes: NCCN 2025, ESMO 2025, PubMed.
 */
export const ENSAYOS_HISTORICOS: EnsayoHistorico[] = [

  // ═══════════════════════════════════════════════════════
  // SARCOMAS DE TEJIDOS BLANDOS — GENERALES
  // ═══════════════════════════════════════════════════════

  {
    id: 'rosen-dox-1982',
    nombre: 'Rosen / Doxorubicina mono',
    año: 1982,
    publicacion: 'Cancer 1982',
    histologias: ['all_sts'],
    pregunta_clinica: '¿La doxorubicina en monoterapia tiene actividad en STS avanzado?',
    resultado_clave: 'ORR ~25%. Estableció doxorubicina como el agente de referencia en STS.',
    impacto_practica: 'Doxorubicina se convirtió en el backbone de QT en STS avanzado. Estándar vigente >40 años.',
    nivel_evidencia: 'IIb',
    tipo_estudio: 'prospectivo',
    cita_completa: 'O\'Bryan RM et al. Cancer 1977; Borden EC et al. Cancer 1987.',
    n_pacientes: 170
  },
  {
    id: 'eortc-62012',
    nombre: 'EORTC 62012',
    año: 2014,
    publicacion: 'Lancet Oncol 2014',
    histologias: ['all_sts'],
    pregunta_clinica: '¿Doxorubicina + ifosfamida (AI) es superior a doxorubicina sola en STS avanzado de alto grado?',
    resultado_clave: 'PFS mejoró con AI (7.4 vs 4.6 meses, HR 0.74) pero SG no mejoró (14.3 vs 12.8 meses). ORR mayor con AI (26% vs 14%).',
    impacto_practica: 'Estableció que AI NO mejora supervivencia global vs doxorubicina sola. Doxorubicina sola sigue siendo 1ª línea estándar. AI reservada para casos donde la respuesta tumoral importa (neoadyuvante).',
    nivel_evidencia: 'Ib',
    tipo_estudio: 'RCT',
    cita_completa: 'Judson I et al. Lancet Oncol. 2014;15(4):415-423.',
    n_pacientes: 455
  },
  {
    id: 'isg-sts-1001',
    nombre: 'ISG-STS 1001',
    año: 2020,
    publicacion: 'Lancet Oncol 2020',
    histologias: ['leiomiosarcoma', 'sarcoma-sinovial', 'liposarcoma-micoide'],
    pregunta_clinica: '¿La QT neoadyuvante histología-específica (gemcitabina/docetaxel para LMS, trabectedina para LPS mixoide, ifosfamida altas dosis para SS) es superior a AI estándar?',
    resultado_clave: 'El régimen histología-específico NO fue superior a AI para supervivencia libre de progresión.',
    impacto_practica: 'Reforzó AI como estándar neoadyuvante universal. Sin embargo, confirmó actividad histología-específica (trabectedina en LPS mixoide). Demostró la necesidad de trials histología-específicos.',
    nivel_evidencia: 'Ib',
    tipo_estudio: 'RCT',
    cita_completa: 'Gronchi A et al. Lancet Oncol. 2020;21(7):905-915.',
    n_pacientes: 287
  },
  {
    id: 'pazopanib-palette',
    nombre: 'PALETTE (Pazopanib)',
    año: 2012,
    publicacion: 'Lancet 2012',
    histologias: ['all_sts'],
    pregunta_clinica: '¿Pazopanib mejora PFS en STS avanzado pre-tratado (excl. liposarcoma)?',
    resultado_clave: 'PFS 4.6 meses vs 1.6 meses con placebo (HR 0.31, p<0.0001). SG no significativa.',
    impacto_practica: 'Aprobación FDA/EMA de pazopanib para STS avanzado pre-tratado (excepto liposarcoma). Primera terapia dirigida aprobada en STS.',
    nivel_evidencia: 'Ib',
    tipo_estudio: 'fase-III',
    cita_completa: 'van der Graaf WT et al. Lancet. 2012;379(9829):1879-1886.',
    n_pacientes: 369
  },
  {
    id: 'eortc-62931-adyuvante',
    nombre: 'EORTC 62931 (QT adyuvante)',
    año: 2012,
    publicacion: 'Lancet Oncol 2012',
    histologias: ['all_sts'],
    pregunta_clinica: '¿La QT adyuvante (doxorubicina + ifosfamida) mejora la supervivencia en STS de alto riesgo resecados?',
    resultado_clave: 'No se demostró beneficio en RFS ni OS con QT adyuvante vs observación.',
    impacto_practica: 'La QT adyuvante NO es estándar en STS resecado. Base para la controversia actual. Justifica uso de Sarculator para seleccionar pacientes de alto riesgo.',
    nivel_evidencia: 'Ib',
    tipo_estudio: 'RCT',
    cita_completa: 'Woll PJ et al. Lancet Oncol. 2012;13(10):1045-1054.',
    n_pacientes: 351
  },

  // ═══════════════════════════════════════════════════════
  // GIST
  // ═══════════════════════════════════════════════════════

  {
    id: 'gist-imatinib-b2222',
    nombre: 'Imatinib en GIST (B2222)',
    año: 2002,
    publicacion: 'NEJM 2002',
    histologias: ['gist'],
    pregunta_clinica: '¿Imatinib (STI571) tiene actividad en GIST avanzado CD117+?',
    resultado_clave: 'ORR 54%, control de enfermedad >80%. Revolucionó el tratamiento del GIST metastásico.',
    impacto_practica: 'Primer TKI aprobado en oncología sólida por vía mecanismo oncogénico. Transformó GIST de enfermedad mortal a crónica. Modelo paradigmático de oncología de precisión.',
    nivel_evidencia: 'IIb',
    tipo_estudio: 'fase-II',
    cita_completa: 'Demetri GD et al. N Engl J Med. 2002;347(7):472-480.',
    n_pacientes: 147
  },
  {
    id: 'ssgxviii-imatinib-adyuvante',
    nombre: 'SSGXVIII/AIO (Imatinib adyuvante)',
    año: 2012,
    publicacion: 'NEJM 2012',
    histologias: ['gist'],
    pregunta_clinica: '¿3 años de imatinib adyuvante son superiores a 1 año en GIST de alto riesgo resecado?',
    resultado_clave: 'RFS a 5 años: 65.6% vs 47.9% (HR 0.46). SG a 5 años: 92.0% vs 81.7% (HR 0.45).',
    impacto_practica: 'Estableció 3 años de imatinib adyuvante como ESTÁNDAR en GIST de alto riesgo. Cambió globalmente la práctica clínica.',
    nivel_evidencia: 'Ib',
    tipo_estudio: 'RCT',
    cita_completa: 'Joensuu H et al. N Engl J Med. 2012;366(12):1152-1160.',
    n_pacientes: 400
  },
  {
    id: 'navigator-avapritinib',
    nombre: 'NAVIGATOR (Avapritinib)',
    año: 2021,
    publicacion: 'Nat Med 2021',
    histologias: ['gist'],
    pregunta_clinica: '¿Avapritinib es eficaz en GIST con mutación PDGFRA exón 18 D842V (resistente a imatinib)?',
    resultado_clave: 'ORR 84%, CR 7%. Duración de respuesta >2 años en mayoría. Actividad sin precedentes en D842V.',
    impacto_practica: 'Avapritinib aprobado FDA (2020) y EMA (2021) específicamente para PDGFRA D842V. Demostró que D842V ya no es resistente a todos los TKI. Test mutacional obligatorio pre-tratamiento.',
    nivel_evidencia: 'IIb',
    tipo_estudio: 'fase-III',
    cita_completa: 'Heinrich MC et al. Nat Med. 2020;26(5):692-701.',
    n_pacientes: 43
  },
  {
    id: 'intrigue-ripretinib',
    nombre: 'INTRIGUE (Ripretinib)',
    año: 2022,
    publicacion: 'J Clin Oncol 2022',
    histologias: ['gist'],
    pregunta_clinica: '¿Ripretinib es superior a sunitinib en 2ª línea de GIST?',
    resultado_clave: 'Ripretinib NO demostró superioridad sobre sunitinib en PFS (8.0 vs 8.3 meses). Subgrupo KIT exón 11 + mutación secundaria exón 17/18: beneficio de ripretinib.',
    impacto_practica: 'Sunitinib sigue siendo estándar de 2ª línea. Ripretinib aprobado en 4ª línea (INVICTUS). Importancia del genotipo KIT para selección de líneas sucesivas.',
    nivel_evidencia: 'Ib',
    tipo_estudio: 'fase-III',
    cita_completa: 'Bauer S et al. J Clin Oncol. 2022;40(34):3918-3928.',
    n_pacientes: 453
  },

  // ═══════════════════════════════════════════════════════
  // OSTEOSARCOMA
  // ═══════════════════════════════════════════════════════

  {
    id: 'osteosarcoma-mace-edizione',
    nombre: 'COSS / MACE (MAP protocol)',
    año: 1986,
    publicacion: 'J Clin Oncol 1986',
    histologias: ['osteosarcoma'],
    pregunta_clinica: '¿La QT neoadyuvante (metotrexato altas dosis + doxorubicina + cisplatino — MAP) permite cirugía conservadora y mejora SG en osteosarcoma?',
    resultado_clave: 'SG a 5 años ~65-70% con MAP. Buena respuesta histológica (>90% necrosis) predice mejor SG.',
    impacto_practica: 'MAP (Metotrexato-Adriamicina-Cisplatino) se convirtió en el estándar de tratamiento del osteosarcoma localizado. Cirugía conservadora de miembro posible en >80%.',
    nivel_evidencia: 'IIb',
    tipo_estudio: 'prospectivo',
    cita_completa: 'Rosen G et al. J Clin Oncol. 1982;1(8):428-432. Bramwell V et al. J Clin Oncol. 2002.',
    n_pacientes: 200
  },
  {
    id: 'euramos-1-osteosarcoma',
    nombre: 'EURAMOS-1',
    año: 2016,
    publicacion: 'J Clin Oncol 2016',
    histologias: ['osteosarcoma'],
    pregunta_clinica: '¿Añadir interferón-alfa mantenimiento o ifosfamida+etopósido post-MAP mejora SG según respuesta histológica?',
    resultado_clave: 'Ninguna estrategia de intensificación mejoró SG vs MAP estándar. MAP sigue siendo el estándar.',
    impacto_practica: 'Confirmó MAP como estándar definitivo. Cerró la puerta a intensificación post-quirúrgica basada en respuesta. Abrió la necesidad de nuevos enfoques.',
    nivel_evidencia: 'Ib',
    tipo_estudio: 'RCT',
    cita_completa: 'Marina NM et al. J Clin Oncol. 2016;34(20):2414-2422.',
    n_pacientes: 2260
  },
  {
    id: 'osteosarcoma-mifamurtide',
    nombre: 'Mifamurtide (MTP-PE)',
    año: 2008,
    publicacion: 'J Clin Oncol 2008',
    histologias: ['osteosarcoma'],
    pregunta_clinica: '¿Añadir mifamurtide a MAP mejora SG en osteosarcoma localizado?',
    resultado_clave: 'SG a 6 años: 78% vs 70% con mifamurtide (HR 0.72, borderline significativo). Aprobado EMA 2009.',
    impacto_practica: 'Mifamurtide aprobado por EMA (no FDA) para osteosarcoma resecado como parte del régimen MAP. Inmunoestimulante macrófago. Uso heterogéneo en Europa.',
    nivel_evidencia: 'Ib',
    tipo_estudio: 'RCT',
    cita_completa: 'Meyers PA et al. J Clin Oncol. 2008;26(4):633-638.',
    n_pacientes: 662
  },

  // ═══════════════════════════════════════════════════════
  // SARCOMA DE EWING
  // ═══════════════════════════════════════════════════════

  {
    id: 'ewing-vaia',
    nombre: 'VAIA / EICESS (Ewing)',
    año: 1997,
    publicacion: 'J Clin Oncol 1997',
    histologias: ['sarcoma-ewing'],
    pregunta_clinica: '¿VAIA (vincristina + actinomicina D + ifosfamida + doxorubicina) es eficaz en sarcoma de Ewing?',
    resultado_clave: 'SG a 5 años ~60% en localizado. VAIA establecida como régimen estándar europeo.',
    impacto_practica: 'VAIA (protocolo EICESS) se adoptó como estándar europeo. En EE.UU. se usa VDC/IE (vincristina-doxorubicina-ciclofosfamida alternando ifosfamida-etopósido).',
    nivel_evidencia: 'IIb',
    tipo_estudio: 'prospectivo',
    cita_completa: 'Craft AW et al. J Clin Oncol. 1998;16(11):3628-3633.',
    n_pacientes: 647
  },
  {
    id: 'euro-ewing-99',
    nombre: 'Euro-EWING 99',
    año: 2014,
    publicacion: 'J Clin Oncol 2014',
    histologias: ['sarcoma-ewing'],
    pregunta_clinica: '¿La consolidación con QT de altas dosis + rescate de médula ósea mejora SG en Ewing de alto riesgo?',
    resultado_clave: 'En Ewing M1 pulmonar: busulfán + melfalán + ASCR superior a VAIA. SG 34% vs 22%.',
    impacto_practica: 'Estableció QT de altas dosis como opción en Ewing metastásico pulmonar. Estratificación de riesgo para tratamiento personalizado.',
    nivel_evidencia: 'Ib',
    tipo_estudio: 'RCT',
    cita_completa: 'Ladenstein R et al. J Clin Oncol. 2010;28(19):3284-3291.',
    n_pacientes: 281
  },

  // ═══════════════════════════════════════════════════════
  // LIPOSARCOMA
  // ═══════════════════════════════════════════════════════

  {
    id: 'trabectedina-lps-mixoide',
    nombre: 'Trabectedina en LPS mixoide',
    año: 2009,
    publicacion: 'J Clin Oncol 2009',
    histologias: ['liposarcoma-micoide'],
    pregunta_clinica: '¿Trabectedina tiene actividad específica en liposarcoma mixoide?',
    resultado_clave: 'ORR 24% en LPS mixoide, superior al resto de STS. PFS mediana 14 meses. Actividad excepcional.',
    impacto_practica: 'Estableció trabectedina como tratamiento preferente en LPS mixoide avanzado/metastásico. Primer ejemplo de actividad histología-específica en STS más allá de GIST.',
    nivel_evidencia: 'IIb',
    tipo_estudio: 'prospectivo',
    cita_completa: 'Grosso F et al. J Clin Oncol. 2007;25(33):5286-5291.',
    n_pacientes: 51
  },
  {
    id: 'eribulin-lps',
    nombre: 'Eribulina en LPS (vs dacarbacina)',
    año: 2016,
    publicacion: 'Lancet 2016',
    histologias: ['liposarcoma-bien-diferenciado', 'liposarcoma-desdiferenciado', 'leiomiosarcoma'],
    pregunta_clinica: '¿Eribulina mejora SG vs dacarbazina en LPS o LMS avanzado pre-tratado?',
    resultado_clave: 'SG mejoró globalmente (13.5 vs 11.5 meses, HR 0.77). En subgrupo LPS: SG 15.6 vs 8.4 meses (HR 0.51, muy significativo).',
    impacto_practica: 'Eribulina aprobada EMA para LPS avanzado pre-tratado. Mayor beneficio en LPS que en LMS. Primera terapia con beneficio SG en STS de tejidos blandos en comparativa directa.',
    nivel_evidencia: 'Ib',
    tipo_estudio: 'fase-III',
    cita_completa: 'Schöffski P et al. Lancet. 2016;387(10028):1629-1637.',
    n_pacientes: 452
  },
  {
    id: 'strass-rt-retroperitoneal',
    nombre: 'STRASS (RT neoadyuvante retroperitoneal)',
    año: 2020,
    publicacion: 'Lancet Oncol 2020',
    histologias: ['liposarcoma-retroperitoneal', 'leiomiosarcoma-retroperitoneal'],
    pregunta_clinica: '¿La RT neoadyuvante mejora el control local en sarcomas retroperitoneales resecables?',
    resultado_clave: 'ABFS no mejoró significativamente (HR 0.95). En subgrupo LPS-BD: tendencia a beneficio. En LPS-DD y LMS: sin beneficio.',
    impacto_practica: 'RT neoadyuvante NO es estándar universal en sarcoma retroperitoneal. Posible beneficio selectivo en LPS-BD. Dio pie a STRASS-2 (RT en LPS-DD).',
    nivel_evidencia: 'Ib',
    tipo_estudio: 'RCT',
    cita_completa: 'Bonvalot S et al. Lancet Oncol. 2020;21(11):1391-1401.',
    n_pacientes: 266
  },

  // ═══════════════════════════════════════════════════════
  // LEIOMIOSARCOMA
  // ═══════════════════════════════════════════════════════

  {
    id: 'gem-doc-lms',
    nombre: 'Gemcitabina + Docetaxel en LMS uterino',
    año: 2007,
    publicacion: 'J Clin Oncol 2007',
    histologias: ['leiomiosarcoma'],
    pregunta_clinica: '¿Gemcitabina + docetaxel es eficaz en LMS uterino avanzado?',
    resultado_clave: 'ORR 35.8% en LMS uterino (mejor que en LMS no uterino ~7%). PFS 6.2 meses.',
    impacto_practica: 'Gemcitabina + docetaxel se adoptó como tratamiento preferente en LMS uterino (2ª línea). Diferencia biológica entre LMS uterino y no uterino establecida clínicamente.',
    nivel_evidencia: 'IIb',
    tipo_estudio: 'fase-II',
    cita_completa: 'Hensley ML et al. J Clin Oncol. 2008;26(19):3193-3199.',
    n_pacientes: 42
  },

  // ═══════════════════════════════════════════════════════
  // SARCOMA SINOVIAL
  // ═══════════════════════════════════════════════════════

  {
    id: 'ny-eso-1-ss',
    nombre: 'NY-ESO-1 T-cell therapy (SS)',
    año: 2015,
    publicacion: 'Science 2015',
    histologias: ['sarcoma-sinovial'],
    pregunta_clinica: '¿Las células T TCR-modificadas anti-NY-ESO-1 son eficaces en sarcoma sinovial?',
    resultado_clave: 'ORR 50% (4/8 pacientes) con respuestas duraderas. Primera inmunoterapia eficaz en un STS.',
    impacto_practica: 'Estableció NY-ESO-1 como diana terapéutica en sarcoma sinovial (>80% expresión). Impulsó el desarrollo de afami-cel (aprobado FDA 2024 — primer TCR-T en sarcoma).',
    nivel_evidencia: 'IIb',
    tipo_estudio: 'fase-II',
    cita_completa: 'Robbins PF et al. Nat Med. 2015;21(8):914-921.',
    n_pacientes: 12
  },

  // ═══════════════════════════════════════════════════════
  // TUMOR DESMOIDE / FIBROMATOSIS
  // ═══════════════════════════════════════════════════════

  {
    id: 'sorafenib-desmoide',
    nombre: 'Sorafenib en tumor desmoide (ALLIANCE)',
    año: 2018,
    publicacion: 'NEJM 2018',
    histologias: ['tumor-desmoide'],
    pregunta_clinica: '¿Sorafenib tiene actividad en tumor desmoide progresivo/sintomático?',
    resultado_clave: 'PFS 2 años: 81% vs 36% con placebo (HR 0.13). Respuestas objetivas tardías (mediana >1 año para PR).',
    impacto_practica: 'Sorafenib establecido como tratamiento activo en tumor desmoide progresivo. Cambió la visión del desmoide de "no tratable" a "targetable". Vigilancia activa como opción en desmoide estable.',
    nivel_evidencia: 'Ib',
    tipo_estudio: 'RCT',
    cita_completa: 'Gounder MM et al. N Engl J Med. 2018;379(25):2417-2428.',
    n_pacientes: 87
  },
  {
    id: 'nirogacestat-desmoide',
    nombre: 'Nirogacestat (DeFi)',
    año: 2023,
    publicacion: 'NEJM 2023',
    histologias: ['tumor-desmoide'],
    pregunta_clinica: '¿Nirogacestat (inhibidor gamma-secretasa / Notch) mejora PFS en tumor desmoide?',
    resultado_clave: 'PFS mejoró significativamente (HR 0.29). ORR 41% vs 8%. Primer RCT positivo con nueva diana en desmoide.',
    impacto_practica: 'Nirogacestat aprobado FDA (2023) para tumor desmoide en adultos. Primera terapia específicamente aprobada para desmoide. Vía Notch/gamma-secretasa como diana validated.',
    nivel_evidencia: 'Ib',
    tipo_estudio: 'fase-III',
    cita_completa: 'Gounder M et al. N Engl J Med. 2023;388(15):1391-1401.',
    n_pacientes: 142
  },

  // ═══════════════════════════════════════════════════════
  // TUMOR DE CÉLULAS GIGANTES (TGCTH)
  // ═══════════════════════════════════════════════════════

  {
    id: 'denosumab-tgcth',
    nombre: 'Denosumab en TGCTH',
    año: 2013,
    publicacion: 'Lancet Oncol 2013',
    histologias: ['tumor-celulas-gigantes'],
    pregunta_clinica: '¿Denosumab (anti-RANKL) controla el TGCTH no resecable o recurrente?',
    resultado_clave: 'Control de enfermedad 96%. ORR histológico 86% (sin células gigantes OC). Cirugía facilitada o evitada en mayoría.',
    impacto_practica: 'Denosumab aprobado EMA/FDA para TGCTH irresecable, metastásico o recurrente. Transformó el manejo del TGCTH avanzado. Debate sobre duración óptima del tratamiento.',
    nivel_evidencia: 'IIb',
    tipo_estudio: 'fase-II',
    cita_completa: 'Rutkowski P et al. J Bone Joint Surg Am. 2015;97(9):719-725.',
    n_pacientes: 282
  },

  // ═══════════════════════════════════════════════════════
  // TERAPIAS DIRIGIDAS / AGNOSTICITY
  // ═══════════════════════════════════════════════════════

  {
    id: 'larotrectinib-ntrk',
    nombre: 'LOXO-101 / Larotrectinib (NTRK)',
    año: 2018,
    publicacion: 'NEJM 2018',
    histologias: ['all_sts', 'fibrosarcoma-infantil'],
    pregunta_clinica: '¿Larotrectinib (inhibidor pan-TRK) es eficaz en tumores NTRK fusión independientemente del origen histológico?',
    resultado_clave: 'ORR 75% en 55 pacientes (múltiples histologías). Duración de respuesta mediana 35 meses. En fibrosarcoma infantil ETV6-NTRK3: ORR >90%.',
    impacto_practica: 'Primera aprobación FDA tumor-agnóstica (2018) basada en biomarcador (fusión NTRK). Paradigma de oncología de precisión histología-independiente. NGS obligatoria en sarcomas raros.',
    nivel_evidencia: 'IIb',
    tipo_estudio: 'basket',
    cita_completa: 'Drilon A et al. N Engl J Med. 2018;378(8):731-739.',
    n_pacientes: 55
  },
  {
    id: 'pembrolizumab-keynote-158',
    nombre: 'KEYNOTE-158 (Pembrolizumab STS)',
    año: 2021,
    publicacion: 'J Clin Oncol 2021',
    histologias: ['all_sts'],
    pregunta_clinica: '¿Pembrolizumab tiene actividad en STS avanzado pre-tratado?',
    resultado_clave: 'ORR global 18% en STS. Mayor actividad en sarcoma pleomórfico indiferenciado (UPS: 23%), LMS uterino (16%). Baja actividad en la mayoría de subtipos.',
    impacto_practica: 'Pembrolizumab sin indicación general en STS. Actividad limitada a subtipos específicos. PD-L1 no predice respuesta en sarcomas. Necesidad de biomarcadores mejores (TMB, expresión NY-ESO-1).',
    nivel_evidencia: 'IIb',
    tipo_estudio: 'basket',
    cita_completa: 'Tawbi HA et al. J Clin Oncol. 2017;35(27):3141-3148.',
    n_pacientes: 80
  },
  {
    id: 'tazemetostat-se-aprobacion',
    nombre: 'Tazemetostat — Sarcoma Epitelioide',
    año: 2020,
    publicacion: 'Lancet Oncol 2020',
    histologias: ['sarcoma-epitelioide'],
    pregunta_clinica: '¿Tazemetostat (inhibidor EZH2) tiene actividad en sarcoma epitelioide con pérdida INI1?',
    resultado_clave: 'ORR 15%, control de enfermedad 26%. Respuestas duraderas (>12 meses en respondedores).',
    impacto_practica: 'Primer inhibidor epigenético aprobado en oncología sólida (FDA 2020, EMA 2021). Validó EZH2 como diana en sarcoma epitelioide. Pérdida SMARCB1/INI1 como biomarcador predictivo.',
    nivel_evidencia: 'IIb',
    tipo_estudio: 'fase-II',
    cita_completa: 'Stacchiotti S et al. Lancet Oncol. 2022;23(4):428-440.',
    n_pacientes: 62
  },

  // ═══════════════════════════════════════════════════════
  // CONDROSARCOMA
  // ═══════════════════════════════════════════════════════

  {
    id: 'ivosidenib-enasidenib-condrosarcoma',
    nombre: 'Inhibidores IDH1/2 en condrosarcoma',
    año: 2020,
    publicacion: 'Clin Cancer Res 2020',
    histologias: ['condrosarcoma'],
    pregunta_clinica: '¿Los inhibidores IDH1/IDH2 tienen actividad en condrosarcoma con mutación IDH1/2?',
    resultado_clave: 'Enasidenib: control de enfermedad 60% en condrosarcoma IDH2-mutado. Agonist responses observadas.',
    impacto_practica: 'IDH1/IDH2 establecidas como dianas terapéuticas en condrosarcoma (mutación en ~50%). Abre vía de tratamiento dirigido en tumor históricamente quimiorresistente. Test IDH obligatorio en condrosarcoma avanzado.',
    nivel_evidencia: 'IIb',
    tipo_estudio: 'fase-II',
    cita_completa: 'Tap WD et al. Clin Cancer Res. 2020;26(8):1845-1851.',
    n_pacientes: 18
  },

  // ═══════════════════════════════════════════════════════
  // CIRUGÍA — CONSERVACIÓN DE MIEMBRO
  // ═══════════════════════════════════════════════════════

  {
    id: 'rosen-limb-sparing-1982',
    nombre: 'Rosenberg — Limb-sparing vs amputación (NCI)',
    año: 1982,
    publicacion: 'Ann Surg 1982',
    histologias: ['all_sts', 'osteosarcoma'],
    pregunta_clinica: '¿La cirugía conservadora de miembro (limb-sparing) es equivalente oncológicamente a la amputación en sarcomas de extremidades?',
    resultado_clave: 'SG y recidiva local equiparables entre limb-sparing + RT y amputación. Solo 1 recidiva local más en cirugía conservadora (4 vs 0), sin impacto en SG.',
    impacto_practica: 'Estableció la cirugía conservadora de miembro como ESTÁNDAR en sarcomas de extremidades. Pasó de 90% amputaciones a >90% cirugías conservadoras. Cambio paradigmático en calidad de vida.',
    nivel_evidencia: 'Ib',
    tipo_estudio: 'RCT',
    cita_completa: 'Rosenberg SA et al. Ann Surg. 1982;196(3):305-315.',
    n_pacientes: 43
  },

]

/**
 * Devuelve los ensayos históricos relevantes para un sarcoma dado.
 * Busca en `histologias` el ID del sarcoma O 'all_sts' (universales).
 */
export function getEnsayosHistoricosForSarcoma(sarcomaId: string): EnsayoHistorico[] {
  return ENSAYOS_HISTORICOS.filter(e =>
    e.histologias.includes(sarcomaId) ||
    e.histologias.includes('all_sts')
  ).sort((a, b) => a.año - b.año)
}

/**
 * Devuelve ensayos históricos para un array de términos de búsqueda
 * (nombre del sarcoma, tags, etc.)
 */
export function searchEnsayosHistoricos(query: string): EnsayoHistorico[] {
  const q = query.toLowerCase()
  return ENSAYOS_HISTORICOS.filter(e =>
    e.nombre.toLowerCase().includes(q) ||
    e.histologias.some(h => h.toLowerCase().includes(q)) ||
    e.pregunta_clinica.toLowerCase().includes(q) ||
    e.resultado_clave.toLowerCase().includes(q)
  )
}
