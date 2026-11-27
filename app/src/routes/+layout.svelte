<script lang="ts">
	import "./layout.css";
	import favicon from "#lib/assets/favicon.svg";
	import type { LayoutProps } from "./$types";

	let { children }: LayoutProps = $props();

	// $derived (state using state): https://svelte.dev/tutorial/svelte/derived-state
	// console log: $inspect(numbers).with(console.trace); https://svelte.dev/tutorial/svelte/inspecting-state
	// global state: https://svelte.dev/tutorial/svelte/universal-reactivity
	// $props (leggere parametri componente): https://svelte.dev/tutorial/svelte/declaring-props
	// props non obbligatori, metti let { a = "valoreDefault"} = $props();: https://svelte.dev/tutorial/svelte/default-values
	// passare tutti parametri come obj <Comp {...objParams}>: https://svelte.dev/tutorial/svelte/spread-props
	// #if, else, elseif, each as, each as index
	// keyed each:: https://svelte.dev/tutorial/svelte/keyed-each-blocks
	// await: https://svelte.dev/tutorial/svelte/await-blocks
	// per gli events metti on prima quindi onclick al posto di click https://svelte.dev/tutorial/svelte/dom-events
	// onclickCAPTURE, capture serve per event va da parent a child mentre senza è da child a parent: https://svelte.dev/tutorial/svelte/capturing
	// bind:value per cambiare direttamente valore quando cambia un parametro: https://svelte.dev/tutorial/svelte/text-inputs
	// classi possono avere ternary all'interno: https://svelte.dev/tutorial/svelte/classes
	// style:nomeCss={ternary?"":""} oppure anche direttamente la stringa: https://svelte.dev/tutorial/svelte/styles
	// transizioni import { } from "svelte/transition" poi usi nei div transition:fade per esempio: https://svelte.dev/tutorial/svelte/transition
	// fade (trasparenza),
	// fly (si sposta, usa x, y,duration): https://svelte.dev/tutorial/svelte/adding-parameters-to-transitions
	// due transizione diverse, uscita e entrata, in: e out: ... https://svelte.dev/tutorial/svelte/in-and-out
	// import {} from "svelte/easing" ti permette di creare animazioni personalizzate in base al tempo:https://svelte.dev/tutorial/svelte/custom-css-transitions
	// tenere traccia dello stato delle animazioni... onintrostart onintroend onoutrostart onoutroend: https://svelte.dev/tutorial/svelte/transition-events
	// {#key} per distruggere e ricreare stesso componente con valore diverso in modo reattivo (utile per rifare le animazioni): https://svelte.dev/tutorial/svelte/key-blocks
	// map, set, date, url, urlsearchparam usando reactify
	// {#snippet nomeComponente(param1, param2) } e {@render nomeComponente(par1,par2)} quante volte vuoi... insomma crei componenti dentro componenti (una sorta di template): https://svelte.dev/tutorial/svelte/snippets-and-render-tags
	// import { Tween } from 'svelte/motion'; from to con una durata (utile per le animazioni): https://svelte.dev/tutorial/svelte/tweens
	// easing ad esempio cubicOut per non fare animazioni/tween lineari non interessanti: https://svelte.dev/docs/svelte/svelte-easing#cubicOut
	// per valori che cambiano sempre è più bello Spring from svelte/motion perchè puoi decidere stiffness quindi quanto veloce arriva al valore, damping quanto è come una molla quindi va e ritorna finche si stabilizza: https://svelte.dev/tutorial/svelte/springs
	// bind anche per dimensioni per esempio innerHeight, offsetHeight e width: https://svelte.dev/tutorial/svelte/dimensions
	// passare valore da child a parent con bind e bindable: let { value = $bindable('') } e <Keypad bind:value={pin}... spiegazione: https://svelte.dev/tutorial/svelte/component-bindings
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<div>hell</div>

<style>
	div {
		@apply bg-slate-500;
	}
</style>
