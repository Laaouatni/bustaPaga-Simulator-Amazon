<script lang="ts">
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
    type TypeTurnoIndex = 0 | 1 | 2;

    type TypeTurnpObject= {
        [turnoName in TypeTurnoName]: {
            index: TypeTurnoIndex;
            hours: {
                start: Number,
                end: Number
            };
        };
    };

    const turniObjectInfo: TypeTurnpObject = {
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
        }
    }

    type TypeGiorniSettimana = "lunedi" | "martedi" | "mercoledi" | "giovedi" | "venerdi" | "sabato" | "domenica";

    type TypeSettimanaTurniOrdinariArray = {
        [giornoName in TypeGiorniSettimana]: {
            selectedTurno: TypeTurnoName;
        };
    };

    let settimanaTurniOrdinariArray = new Array(7);
</script>


<div></div>