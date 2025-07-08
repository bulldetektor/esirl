<script lang="ts">
	// import { createTeam } from '$lib/types/team';
	import type { Team } from '$lib/types/team';
	export let standings: Team[];
	// let standings: Team[] = [
	// 	createTeam({
	// 		name: 'Viking',
	// 		wins: 11,
	// 		draws: 3,
	// 		losses: 1
	// 	}),
	// 	createTeam({
	// 		name: 'Brann',
	// 		wins: 8,
	// 		draws: 3,
	// 		losses: 3
	// 	}),
	// 	createTeam({
	// 		name: 'Tromsø',
	// 		wins: 8,
	// 		draws: 1,
	// 		losses: 3
	// 	}),
	// 	createTeam({
	// 		name: 'Rosenborg',
	// 		wins: 6,
	// 		draws: 5,
	// 		losses: 3
	// 	}),
	// 	createTeam({
	// 		name: 'Strømsgodset',
	// 		wins: 2,
	// 		draws: 0,
	// 		losses: 10
	// 	}),
	// 	createTeam({
	// 		name: 'Haugesund',
	// 		wins: 0,
	// 		draws: 2,
	// 		losses: 11
	// 	}),
	// 	createTeam({
	// 		name: 'Kristiansund',
	// 		wins: 5,
	// 		draws: 3,
	// 		losses: 6
	// 	}),
	// ];

	// standings = standings.sort((a, b) => b.averagePoints - a.averagePoints);
</script>

<div class="container mx-auto rounded-md p-2 sm:p-4 dark:bg-gray-50 dark:text-gray-800">
	<h2 class="mb-3 text-2xl leading-tight font-semibold">Tabell</h2>
	<div class="overflow-x-auto">
		<table class="min-w-full text-xs">
			<thead class="rounded-t-lg dark:bg-gray-300">
				<tr class="text-right">
					<th title="Plassering" class="p-3 text-left">#</th>
					<th title="Lag" class="p-3 text-left">Lag</th>
					<th title="Spilt" class="p-3 text-left">Spilt</th>
					<th title="Vunnet" class="p-3 text-left">Vunnet</th>
					<th title="Uavgjort" class="p-3 text-left">Uavgjort</th>
					<th title="Tapt" class="p-3 text-left">Tapt</th>
					<th title="Scoret" class="p-3 text-left">Scoret</th>
					<th title="Sluppet Inn" class="p-3 text-left">Sluppet Inn</th>
					<th title="Målforskjell" class="p-3 text-left">Målforskjell</th>
					<th title="Poeng" class="p-3 text-left">Poeng</th>
					<th title="Snitt" class="p-3 text-left">Snitt</th>
				</tr>
			</thead>
			<tbody>
				{#each standings as team, index}
					<tr class="border-opacity-20 border-b text-right dark:border-gray-300 dark:bg-gray-100">
						<td class="px-3 py-2 text-left">
							<span>{index + 1}</span>
						</td>
						<td class="px-3 py-2 text-left">
							<span>{team.name}</span>
						</td>
						<td class="px-3 py-2 text-left">
							<span>{team.gamesPlayed}</span>
						</td>
						<td class="px-3 py-2 text-left">
							<span>{team.wins}</span>
						</td>
						<td class="px-3 py-2 text-left">
							<span>{team.draws}</span>
						</td>
						<td class="px-3 py-2 text-left">
							<span>{team.losses}</span>
						</td>
						<td class="px-3 py-2 text-left">
							<span>{team.goalsFor}</span>
						</td>
						<td class="px-3 py-2 text-left">
							<span>{team.goalsAgainst}</span>
						</td>
						<td class="px-3 py-2 text-left">
							<span>{team.goalDifference}</span>
						</td>
						<td class="px-3 py-2 text-left">
							<span>{team.points}</span>
						</td>
						<td class="px-3 py-2 text-left">
							<span>{team.averagePoints.toFixed(2)}</span>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
