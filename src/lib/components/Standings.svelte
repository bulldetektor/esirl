<script lang="ts">
	import type { Team } from '$lib/types/team';
	import UpIcon from '$lib/icons/up.svg?component';
	import DownIcon from '$lib/icons/down.svg?component';
	import RightIcon from '$lib/icons/right.svg?component';
	export let standings: Team[];

	const headers = [
		{ title: 'Plassering', abbr: '#', label: '#', mobile: true },
		{ title: 'Offisiell plassering', abbr: '', label: '', mobile: true },
		{ title: 'Diff', abbr: 'D', label: 'Diff', css: 'text-center', mobile: true },
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

	const mobileAbbrDescriptions = headers
		.filter((h) => h.mobile && h.abbr && h.title)
		.map((h) => `${h.abbr} = ${h.title.toLowerCase()}`)
		.join(', ');
</script>

<!-- Mobile -->
<div class="container mx-auto flex flex-col gap-2 pb-4 md:hidden">
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
					<td class="text-center">
						<div class="flex items-center justify-center gap-0.5 whitespace-nowrap">
							{index + 1}
							{#if team.officialStanding > index + 1}
								<UpIcon class="text-green-500" width="12" height="12" />
							{:else if team.officialStanding < index + 1}
								<DownIcon class="text-red-500" width="12" height="12" />
							{/if}
						</div>
					</td>
					<td class="px-2 text-left">
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
	<div class="block text-xs text-gray-500 italic md:hidden">
		{mobileAbbrDescriptions}
	</div>
	<div class="text-xs text-gray-500 italic">
		Kilde: <a class="" href="https://www.eliteserien.no/tabell" target="_blank"
			>https://www.eliteserien.no/tabell</a
		>
	</div>
</div>
<!-- Desktop -->
<div class="container mx-auto hidden rounded-md p-4 md:block">
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
						<td class="px-1 py-2">
							{index + 1}
						</td>
						<td class="pl-0 text-center">
							({team.officialStanding})
						</td>
						<td class="text-center">
							<div class="flex justify-center">
								{#if team.officialStanding > index + 1}
									<UpIcon class="text-green-800" width="16" height="16" />
								{:else if team.officialStanding < index + 1}
									<DownIcon class="text-red-800" width="16" height="16" />
								{:else}
									<RightIcon class="text-gray-800" width="16" height="16" />
								{/if}
							</div>
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

	<div class="pt-1 text-right text-xs text-gray-500 italic">
		Kilde: <a class="" href="https://www.eliteserien.no/tabell" target="_blank"
			>https://www.eliteserien.no/tabell</a
		>
	</div>
</div>
