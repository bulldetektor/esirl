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
    });

    return {
        standings
    };
};
