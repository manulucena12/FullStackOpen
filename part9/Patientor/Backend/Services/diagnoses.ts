import { Diagnose } from "../Types/patient";

const diagnoses: Diagnose[] =[
    { code: 'A00', name: 'Cholera', latin: 'Cholera' },
    { code: 'B01', name: 'Chickenpox', latin: 'Varicella' },
    { code: 'C02', name: 'Malignant neoplasm of stomach', latin: 'Carcinoma ventriculi' },
    { code: 'D03', name: 'Melanoma in situ', latin: 'Melanoma in situ' },
    { code: 'E04', name: 'Other nontoxic goiter', latin: 'Struma non-toxica alia' },
    { code: 'F05', name: 'Delirium', latin: 'Delirium' },
    { code: 'G06', name: 'Intracranial and intraspinal abscess and granuloma', latin: 'Abscessus et granuloma intracraniales et intraspinales' },
    { code: 'H07', name: 'Other disorders of eyelid', latin: 'Aliae affectiones palpebrae' },
    { code: 'I08', name: 'Multiple valve diseases', latin: 'Affectiones valvularum multiplices' },
    { code: 'J09', name: 'Influenza due to identified avian influenza virus', latin: 'Influenza aviaria' },
    { code: 'K10', name: 'Other diseases of jaws', latin: 'Aliae affectiones maxillarum' },
    { code: 'L11', name: 'Other acantholytic disorders', latin: 'Aliae affectiones acantholyticae' },
    { code: 'M12', name: 'Other and unspecified arthropathy', latin: 'Alia et non specificata arthropathia' },
    { code: 'N13', name: 'Obstructive and reflux uropathy', latin: 'Uropathia obstructiva et refluxus' },
    { code: 'O14', name: 'Gestational [pregnancy-induced] hypertension with significant proteinuria', latin: 'Hypertensio gestationalis cum proteinuria significativa' },
    { code: 'P15', name: 'Birth injury', latin: 'Lesio in nativitate' },
    { code: 'Q16', name: 'Congenital malformations of ear causing impairment of hearing', latin: 'Malformationes congenitae auris cum defectu auditionis' },
    { code: 'R17', name: 'Unexplained death', latin: 'Mors inexplicata' },
    { code: 'S18', name: 'Open wound of neck', latin: 'Vulnus apertum colli' },
    { code: 'T19', name: 'Poisoning by, adverse effect of and underdosing of other and unspecified drugs, medicaments and biological substances', latin: 'Intoxicatio ab aliis et non specificatis medicamentis, pharmacis et substantiis biologicis' },
    { code: 'M54.5', name: 'Low back pain', latin: 'Dorsalgia inferior' },
    { code: 'Z00.0', name: 'General medical examination', latin: 'Examen generalis medicus' }, 
    { code: 'F41.9', name: 'Anxiety disorder, unspecified', latin: 'Anxietas non specificata' }, 
    { code: 'S52.5', name: 'Fracture of lower end of radius', latin: 'Fractura radii inferioris' }, 
    { code: 'J20.9', name: 'Acute bronchitis, unspecified', latin: 'Bronchitis acuta non specificata' } 
]

export const getDiagnoses = () => {
    return diagnoses
}