<script lang="ts">
	import type { Team } from '$lib/types/team';
	export let standings: Team[];

	const headers = [
		{ title: 'Plassering', abbr: '#', label: '#' },
		{ title: 'Lag', css: 'text-left' },
		{ title: 'Spilt', abbr: 'S' },
		{ title: 'Vunnet', abbr: 'V' },
		{ title: 'Uavgjort', abbr: 'U' },
		{ title: 'Tapt', abbr: 'T' },
		{ title: 'Mål', abbr: 'M' },
		{ title: 'Målforskjell', abbr: '+/-' },
		{ title: 'Poeng', abbr: 'P' },
		{ title: 'Est Poeng', abbr: 'E' }, 
		{ title: 'Snitt', abbr: 'Sn' },
	];
</script>

<!-- Full width table -->
<div class="container mx-auto rounded-md py-2 sm:p-4">
	<div class="overflow-x-auto">
		<table class="min-w-full text-sm">
			<thead class="rounded-t-lg">
				<tr class="text-center">
					{#each headers as header}
						<th class="px-2 {header.css}" title={header.title}>
							<span class="block md:hidden">{header.abbr ?? header.title}</span>
							<span class="hidden md:block">{header.label ?? header.title}</span>
						</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each standings as team, index}
					<tr
						class="border-opacity-20 border-b text-center {index === standings.length - 3
							? 'bg-orange-100'
							: index >= standings.length - 2
								? 'bg-red-100'
								: 'even:bg-gray-200'}"
					>
						<td class="py-2">
							<span>{index + 1}</span>
						</td>
						<td class="text-left">
							<span>{team.name}</span>
						</td>
						<td class="">
							<span>{team.gamesPlayed}</span>
						</td>
						<td class="">
							<span>{team.wins}</span>
						</td>
						<td class="">
							<span>{team.draws}</span>
						</td>
						<td class="">
							<span>{team.losses}</span>
						</td>
						<td class="">
							<span>{team.goalsFor}-{team.goalsAgainst}</span>
						</td>
						<td class="">
							<span>{team.goalDifference > 0 ? '+' : ''}{team.goalDifference}</span>
						</td>
						<td class="">
							<span>{team.points}</span>
						</td>
						<td class="italic">
							<span>{team.estimatedPoints}</span>
						</td>
						<td class="">
							<span>{team.averagePoints}</span>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<div class="pt-4 text-right text-xs text-gray-500 italic">
		Kilde: <a class="" href="https://www.eliteserien.no/tabell" target="_blank"
			>https://www.eliteserien.no/tabell</a
		>
	</div>
</div>
