import { createTeam, type Team } from '$lib/types/team';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const res = await fetch('/api/standings');

	if (!res.ok) {
		throw new Error('Failed to load standings');
	}

	const raw = await res.json();

	const standings: Team[] = raw.map((team: any) => {
        return createTeam(team);

		// const gamesPlayed = team.all.played;
		// const points = team.points;
		// const averagePoints = gamesPlayed === 0 ? 0 : points / gamesPlayed;

		// return {
		// 	name: team.team.name,
		// 	wins: team.all.win,
		// 	draws: team.all.draw,
		// 	losses: team.all.lose,
		// 	points,
		// 	gamesPlayed,
		// 	averagePoints
		// };
	});

	// Sorter etter snitt
	standings.sort((a, b) => b.averagePoints - a.averagePoints);

	return {
		standings
	};
};
