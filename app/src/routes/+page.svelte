<script lang="ts">
    import { constantsCalendario } from "#lib/constants/constantsCalendario.ts";
    import { constantsMaggiorazioniPercentuali } from "#lib/constants/constantsMaggiorazioniPercentuali.ts";
    import SettimanaTurnoOrdinarioSelector from "#lib/components/SettimanaTurnoOrdinarioSelector.svelte";
    
    let pagaBaseEuro = $state(1914.9);

    let euroLordiOraOrdinaria = $derived.by(() => {
        const oreAlMese = constantsCalendario.ore.ordinarie.maxMensili;
        return pagaBaseEuro / oreAlMese;
    });

    let euroLordiOraStraordinaria = $derived.by(() => {
        const oreAlMese = constantsCalendario.ore.ordinarie.maxMensili;
        return pagaBaseEuro / (oreAlMese - 1);
    });
</script>

<SettimanaTurnoOrdinarioSelector></SettimanaTurnoOrdinarioSelector>