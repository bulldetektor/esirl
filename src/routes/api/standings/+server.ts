import { KV_REST_API_URL, KV_REST_API_TOKEN, API_FOOTBALL_API_KEY, API_FOOTBALL_LEAGUE_ID, API_FOOTBALL_SEASON } from "$env/static/private";
import { json } from '@sveltejs/kit';
import { Redis } from '@upstash/redis';


const CACHE_KEY = "standings-2025";

// Initialize Redis
const redis = new Redis({
    url: KV_REST_API_URL || "",
    token: KV_REST_API_TOKEN || ""
});

export async function GET() {
    // Fetch data from Redis
    const cached = await redis.get(CACHE_KEY);

    if (cached) {
        // Return the cached data
        return json(cached);
    }

    const response = await fetch(`https://v3.football.api-sports.io/standings?league=${API_FOOTBALL_LEAGUE_ID}&season=${API_FOOTBALL_SEASON}`, {
        headers: {
            'x-apisports-key': API_FOOTBALL_API_KEY
        }
    });
    if (!response.ok) {
        throw new Error(`API call failed: ${response.status} ${response.statusText}`);
    }
    
    const result = await response.json();
    console.log("api-football response", result);
    const standings = result.response[0].league.standings[0];

    // Store the result in Redis
    const expirationInSeconds = 60 * 10;
    await redis.set(CACHE_KEY, standings, { ex: expirationInSeconds });
   
    // Return the result in the response
    return json({ standings });
};