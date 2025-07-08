<script lang="ts">
	import Standings from "$lib/components/Standings.svelte";
	export let data;
</script>

<svelte:head>
	<title>Eliteserien 2025 IRL</title>
	<meta name="description" content="Eliteserien 2025 IRL" />
</svelte:head>

<section>
	<h1>
		Eliteserien 2025 IRL
	</h1>

	<h2>
		Eliteserie-tabellen basert på poeng i snitt så langt i 2025-sesongen.
	</h2>

	<Standings standings={data.standings} />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
