export type Team = {
    name: string;
    gamesPlayed: number;
    wins: number;
    draws: number;
    losses: number;
    points: number;
    averagePoints: number;
};

export function createTeam(data: Omit<Team, 'gamesPlayed' | 'points' | 'averagePoints'>): Team {
    const gamesPlayed = data.wins + data.draws + data.losses;
    const points = data.wins * 3 + data.draws;
    const averagePoints = gamesPlayed === 0 ? 0 : points / gamesPlayed;

    return {
        ...data,
        gamesPlayed,
        points,
        averagePoints
    };
}