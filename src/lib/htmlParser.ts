import * as cheerio from 'cheerio';
import { createTeam, type Team } from './types/team';

export function parseHtml(html: string): Team[] {
    const standings: Team[] = [];
    const $ = cheerio.load(html);

    $('table.table--league-eliteserien tbody tr').each((_i, el) => {
        const cols = $(el).find('td');

        const name = $(cols[1]).find('span.table__typo--full').text().trim();
        const wins = parseInt($(cols[3]).text(), 10);
        const draws = parseInt($(cols[4]).text(), 10);
        const losses = parseInt($(cols[5]).text(), 10);
        const goalsFor = parseInt($(cols[6]).text(), 10);
        const goalsAgainst = parseInt($(cols[7]).text(), 10);

        if (name && !isNaN(wins) && !isNaN(draws) && !isNaN(losses)) {
            standings.push(createTeam({ name, wins, draws, losses, goalsFor, goalsAgainst }));
        }
    });

    return standings;
}