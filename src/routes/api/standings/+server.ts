import { KV_REST_API_URL, KV_REST_API_TOKEN } from "$env/static/private";
import { parseHtml } from "$lib/htmlParser";
import { json } from '@sveltejs/kit';
import { Redis } from '@upstash/redis';

export const prerender = false;

const CACHE_KEY = "standings-2025";
const SOURCE_URL = "https://www.eliteserien.no/tabell";

// Initialize Redis
const redis = new Redis({
    url: KV_REST_API_URL || "",
    token: KV_REST_API_TOKEN || ""
});

export async function GET() {
    // Fetch data from Redis
    const cached = await redis.get(CACHE_KEY);

    if (cached) {
        console.log("Returning cached standings");
        return json(cached);
    }

    console.log("Fetching standings from", SOURCE_URL);
    const response = await fetch(SOURCE_URL);
    if (!response.ok) {
        throw new Error(`Failed to fetch standings from ${SOURCE_URL}: ${response.status} ${response.statusText}`);
    }
    
    const html = await response.text();
    const standings = parseHtml(html);

    standings.sort((a, b) => {
        if (a.averagePoints !== b.averagePoints) {
            return b.averagePoints - a.averagePoints;
        }
        if (a.goalDifference !== b.goalDifference) {
            return b.goalDifference - a.goalDifference;
        }
        return a.gamesPlayed - b.gamesPlayed;
    });

    // Store the result in Redis
    const expirationInSeconds = 60 * 10;
    await redis.set(CACHE_KEY, standings, { ex: expirationInSeconds });
   
    // Return the result in the response
    return json(standings);
};

export async function DELETE() {
    // Delete the cached data
    await redis.del(CACHE_KEY);

    return json({ message: `Cache cleared for ${CACHE_KEY}` }); 
};