<script lang="ts">
    import Card from "#lib/components/Card.svelte";
    import { constantsCalendario } from "#lib/constants/constantsCalendario.ts";
    import { constantsMaggiorazioniPercentuali } from "#lib/constants/constantsMaggiorazioniPercentuali.ts";

    let pagaBaseEuro = $state(1914.9);

    let euroLordiOraOrdinaria = $derived.by(() => {
        const oreAlMese = constantsCalendario.ore.ordinarie.maxMensili;
        return pagaBaseEuro / oreAlMese;
    });

    let euroLordiOraStraordinaria = $derived.by(() => {
        const oreAlMese = constantsCalendario.ore.ordinarie.maxMensili;
        return pagaBaseEuro / (oreAlMese - 1);
    });

    const INDEX_VENERDI = 5;
    const INDEX_SABATO = 6;
    const INDEX_DOMENICA = 0;

    const nomiMesi = ["GENNAIO", "FEBBRAIO", "MARZO", "APRILE", "MAGGIO", "GIUGNO", "LUGLIO", "AGOSTO", "SETTEMBRE", "OTTOBRE", "NOVEMBRE", "DICEMBRE"];
    const nomiGiorniSettimana = ["DOMENICA", "LUNEDI", "MARTEDI", "MERCOLEDI", "GIOVEDI", "VENERDI"];
    const giorniDiLavoroOrdinari = [INDEX_VENERDI, INDEX_SABATO, INDEX_DOMENICA];

    const thisDateObject = new Date;
    const thisMonth = thisDateObject.getMonth();
    const nextMonth = thisMonth+1;
    const thisYear = thisDateObject.getFullYear();

    const thisStartOfMonthDate = new Date(thisYear, thisMonth, 1);
    const thisGiornoSettimanaStartMonth = thisStartOfMonthDate.getDay();
    const thisMonthLunghezza = new Date(thisYear, nextMonth, 0).getDate();

    let numGiorniSpecificiThisMese = {
        0:0,1:0,2:0,3:0,4:0,5:0,6:0
    };

    for(let i=0; i<thisMonthLunghezza; i++) {
        const thisDateCheck = new Date(thisYear, thisMonth, i);
        const thisGiornoSettimana = thisDateCheck.getDay();

        numGiorniSpecificiThisMese[thisGiornoSettimana]++;
    }

    console.log(numGiorniSpecificiThisMese)
</script>

<main class="p-4 gap-4 grid">
    <Card>
        <span>Paga base euro:</span>
        <input type="number" name="pagaBaseEuro" bind:value={pagaBaseEuro} class=""/>
        <span>euro</span>
    </Card>
    <Card>
        <b>{euroLordiOraOrdinaria}</b>
        <span>euro all'ora lorda ordinaria</span>
    </Card>
    <Card>
        <span>questo mese è: </span>
        <b>{nomiMesi[thisMonth]}</b>
        <span>e dura </span>
            <b>{thisMonthLunghezza}</b>
        <span>giorni</span>
    </Card>
</main>
