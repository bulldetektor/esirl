<script lang="ts">
	import type { Team } from '$lib/types/team';
	export let standings: Team[];

	const headers = [
		{ title: 'Plassering', abbr: '#', label: '#', mobile: true },
		{ title: 'Lag', css: 'text-left', mobile: true },
		{ title: 'Spilt', abbr: 'Sp', mobile: true },
		{ title: 'Vunnet', abbr: 'V' },
		{ title: 'Uavgjort', abbr: 'U' },
		{ title: 'Tapt', abbr: 'T' },
		{ title: 'Mål', abbr: 'M' },
		{ title: 'Målforskjell', abbr: '+/-', mobile: true },
		{ title: 'Poeng', abbr: 'P', mobile: true },
		{ title: 'Est. Poeng', abbr: 'E', mobile: true },
		{ title: 'Snitt', abbr: 'Sn', mobile: true }
	];

	const abbrDescriptions = headers
		.filter((h) => h.abbr && h.title)
		.map((h) => `${h.abbr} = ${h.title.toLowerCase()}`)
		.join(', ');
</script>

<!-- Mobile -->
<div class="container mx-auto pb-4 md:hidden">
	<table class="min-w-full text-sm">
		<thead>
			<tr class="text-center">
				{#each headers.filter((h) => h.mobile) as header}
					<th class="border-b bg-slate-200 px-2 py-2 font-normal {header.css}" title={header.title}>
						{header.abbr ?? header.title}
					</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each standings as team, index}
				<tr
					class="border-opacity-20 border-b text-center {index === 0
						? 'font-bold'
						: index === standings.length - 3
							? 'bg-orange-100'
							: index >= standings.length - 2
								? 'bg-red-100'
								: 'even:bg-slate-200'}"
				>
					<td class="py-2">
						<span>{index + 1}</span>
					</td>
					<td class="text-left px-2">
						<span>{team.name}</span>
					</td>
					<td class="">
						<span>{team.gamesPlayed}</span>
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
						<span>{team.averagePoints.toFixed(2)}</span>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
	<div class="block pt-2 text-xs text-gray-500 italic md:hidden">
		{abbrDescriptions}
	</div>
</div>
<!-- Desktop -->
<div class="mx-auto hidden md:block rounded-md p-4 container">
	<div class="overflow-x-auto">
		<table class="min-w-full text-sm">
			<thead class="rounded-t-lg">
				<tr class="text-center">
					{#each headers as header}
						<th
							class="border-b bg-slate-200 px-2 py-2 font-normal {header.css}"
							title={header.title}
						>
							{header.label ?? header.title}
						</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each standings as team, index}
					<tr
						class="border-opacity-20 border-b text-center {index === 0
							? 'font-bold'
							: index === standings.length - 3
								? 'bg-orange-100'
								: index >= standings.length - 2
									? 'bg-red-100'
									: 'even:bg-slate-200'}"
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
							<span>{team.averagePoints.toFixed(2)}</span>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<div class="pt-1 text-xs text-gray-500 italic md:text-right">
		Kilde: <a class="" href="https://www.eliteserien.no/tabell" target="_blank"
			>https://www.eliteserien.no/tabell</a
		>
	</div>
</div>
