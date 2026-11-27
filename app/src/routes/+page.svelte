<script lang="ts">
    const GIORNI_ALLA_SETTIMANA = 7;
    const GIORNI_ALL_ANNO = 364;
    const MESI_ALL_ANNO = 12;
    const MAX_ORE_SETTIMANALI_ORDINARIE = 39;

    const SETTIMANE_ALL_ANNO = GIORNI_ALL_ANNO / GIORNI_ALLA_SETTIMANA; // 52
    const SETTIMANE_AL_MESE = SETTIMANE_ALL_ANNO / MESI_ALL_ANNO; // 4.33

    const constantsCalendario = {
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

/*     const constantsCalendario = {
        ore: {
            maxOreAllaSettimanaBeforeStraordinario: 39,
            get maxOreAllMeseOrdinario(): number {
                const oreAllaSettimana = this.maxOreAllaSettimanaBeforeStraordinario;
                const settimaneAllMese = constantsCalendario.settimane.mediaNumeroSettimaneAlMese;
                return oreAllaSettimana * settimaneAllMese;
            },
        },
        giorni: {
            mediaNumeroGiorniAllAnno: 364,
            numeroGiorniAllaSettimana: 7,
        },
        settimane: {
            get mediaNumeroSettimaneAlAnno(): number {
                const giorniAnno = constantsCalendario.giorni.mediaNumeroGiorniAllAnno;
                const giorniSettimana = constantsCalendario.giorni.numeroGiorniAllaSettimana;
                return giorniAnno/giorniSettimana;
            },
            get mediaNumeroSettimaneAlMese(): number {
                const mesiAllAnno = constantsCalendario.mesi.maxMesiAllAnnoBase;
                return this.mediaNumeroSettimaneAlAnno/mesiAllAnno;
            }
        }, 
        mesi: {
            maxMesiAllAnnoBase: 12
        }
    } */
    
    const maxOreAllaSettimanaBeforeStraordinari = 39;
    const mediaNumeroGiorniAllAnno = 364;
    const numeroGiorniAllaSettimana =7;
    const mediaNumeroSettimaneAlMese = mediaNumeroGiorniAllAnno / numeroGiorniAllaSettimana; //4,33
    const numeroOreMaxOrdinario = mediaNumeroSettimaneAlMese * maxOreAllaSettimanaBeforeStraordinari;

    let pagaBaseEuro = $state(1914.9);
    let pagaLordoOraOrdinariaSenzaMaggiorazioni = $derived(pagaBaseEuro/numeroOreMaxOrdinario);
    let pagaLordoOraStraordinariaSenzaMaggiorazioni = $derived(pagaBaseEuro/(numeroOreMaxOrdinario-1));

    const maggiorazioniPercentualiObjectData = {
        ordinario: {
            notte: {
                feriale: 25,
                domenica: 50
            }
        },
        straordinario: {
            partime: {
                meno30percento: 18,
                supra30percento: 40
            },
            fulltime: {
                feriale: {
                    diurno: 30,
                    notturno: 50
                },
                festivo: {
                    diurno: 65,
                    notturno: 75
                }
            },
        },
    }

    type TypeTurnoName = "mattino" | "pomeriggio" | "notte"; 
    type TypeTurnoIndex = 0 | 1 | 2 | 3;

    type TypeTurnoObject= {
        [turnoName in TypeTurnoName]: {
            index: TypeTurnoIndex;
            hours: {
                start: Number,
                end: Number
            };
        };
    };

    const turniObjectInfo: TypeTurnoObject = {
        mattino: {
            index: 0,
            hours: {
                start: 6.5,
                end: 14,
            }
        },
        pomeriggio: {
            index: 1,
            hours: {
                start: 14,
                end: 22,
            }
        },
        notte: {
            index: 2,
            hours: {
                start: 22.5,
                end: 6
            }
        },
    };

    const enumGiorniSettimana = ["domenica", "lunedi", "martedi", "mercoledi", "giovedi", "venerdi", "sabato"];
    
    type TypePossibleTurniScenarios = TypeTurnoName | "riposo";

    let settimanaTurniOrdinariArray: TypePossibleTurniScenarios[] = new Array(7).forEach(() => {
        return "riposo";
    });
</script>

<main>
    <div>hello</div>
</main>