<script lang="ts">
    import { constantsCalendario } from "#lib/constants/constantsCalendario.ts";
    import { constantsMaggiorazioniPercentuali } from "#lib/constants/constantsMaggiorazioniPercentuali.ts";

    let pagaBaseEuro = $state(1914.9);
    
    let euroLordiOraOrdinaria = $derived.by(() => {
        const oreAlMese = constantsCalendario.ore.ordinarie.maxMensili;
        return pagaBaseEuro/oreAlMese;
    });

    let euroLordiOraStraordinaria = $derived.by(() => {
        const oreAlMese = constantsCalendario.ore.ordinarie.maxMensili;
        return pagaBaseEuro/(oreAlMese-1);
    });



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