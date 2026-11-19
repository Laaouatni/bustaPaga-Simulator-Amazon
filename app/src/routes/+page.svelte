<script lang="ts">
    // derived https://svelte.dev/tutorial/svelte/derived-state
    // $inspect(numbers).with(console.trace); https://svelte.dev/tutorial/svelte/inspecting-state
    const maxOreAllaSettimanaBeforeStraordinari = 39;
    const mediaNumeroGiorniAllAnno = 364;
    const numeroGiorniAllaSettimana =7;
    const mediaNumeroSettimaneAlMese = mediaNumeroGiorniAllAnno / numeroGiorniAllaSettimana;

    let pagaBaseEuro = $state(1914.9);

</script>

ciao