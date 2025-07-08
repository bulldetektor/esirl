<script lang="ts">
	import '../app.css';

	let { children } = $props();

	async function clearCache() {
		const response = await fetch('/api/standings', {
			method: 'DELETE'
		});
		if (response.ok) {
			const result = await response.json();
			console.log("Cache cleared", result);
		}
	}
</script>

<div class="app">

	<main>
		{@render children()}
	</main>

	<footer>
		<p class="text-center text-sm">
			Copyright &copy; 2025  //  Bulldetektor  <button onclick={clearCache} class="cursor-pointer">//</button>  All rights reserved 
		</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
