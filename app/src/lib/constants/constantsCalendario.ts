const GIORNI_ALLA_SETTIMANA = 7;
const GIORNI_ALL_ANNO = 364;
const MESI_ALL_ANNO = 12;
const MAX_ORE_SETTIMANALI_ORDINARIE = 39;

const SETTIMANE_ALL_ANNO = GIORNI_ALL_ANNO / GIORNI_ALLA_SETTIMANA; // 52
const SETTIMANE_AL_MESE = SETTIMANE_ALL_ANNO / MESI_ALL_ANNO; // 4.33

export const constantsCalendario = {
    mesi: {
        allAnno: MESI_ALL_ANNO,
    },
    settimane: {
        alAnno: SETTIMANE_ALL_ANNO,
        alMese: SETTIMANE_AL_MESE,
    },
    giorni: {
        alAnno: GIORNI_ALL_ANNO,
        allaSettimana: GIORNI_ALLA_SETTIMANA,
    },
    ore: {
        ordinarie: {
            maxSettimanali: MAX_ORE_SETTIMANALI_ORDINARIE,
            get maxMensili() {
                return MAX_ORE_SETTIMANALI_ORDINARIE * SETTIMANE_AL_MESE;
            }
        }
    },
} as const;