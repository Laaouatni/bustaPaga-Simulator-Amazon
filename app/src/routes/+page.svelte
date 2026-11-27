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

</script>

ciao