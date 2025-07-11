export type Team = {
    name: string;
    wins: number;
    draws: number;
    losses: number;
    gamesPlayed: number;
    points: number;
    averagePoints: number;
    estimatedPoints: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
};

export function createTeam(data: Omit<Team, 'gamesPlayed' | 'points' | 'averagePoints' | 'estimatedPoints' | 'goalDifference'>): Team {
    const gamesPlayed = data.wins + data.draws + data.losses;
    const points = data.wins * 3 + data.draws;
    const averagePoints = gamesPlayed === 0 ? 0 : round(points / gamesPlayed, 2);
    const estimatedPoints = round(averagePoints * 30, 0); 
    const goalDifference = data.goalsFor - data.goalsAgainst;

    return {
        ...data,
        gamesPlayed,
        points,
        averagePoints,
        estimatedPoints,
        goalDifference
    };
}

function round(value: number, decimals: number = 2): number {
	const factor = 10 ** decimals;
	return Math.round(value * factor) / factor;
}