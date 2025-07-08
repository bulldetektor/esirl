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

	<Standings standings={data.standings} />
	
	<p class="px-4">
		Eliteserie-tabellen basert på poeng i snitt så langt i 2025-sesongen. 
		Kolonnen "Est Poeng" angir hvor mange poeng lagene vil ende opp med dersom de opprettholder poengsnittet over 30 kamper. 
	</p>

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
