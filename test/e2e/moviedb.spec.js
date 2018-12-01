const imdb = require('imdb-api');

const IMDB_API_KEY = process.IMDB_API_KEY || '';

describe('imdb-api test', () => {
    it('Does movie name search', async () => {
        const test = await imdb.get({name: 'The Toxic Avenger'}, {apiKey: IMDB_API_KEY, timeout: 30000});
        console.log(JSON.stringify(test));
    });

    it('Does get work', async () => {
        const results = await imdb.search({name: 'movie'}, {apiKey: IMDB_API_KEY, timeout: 30000}, 1);
        console.log(JSON.stringify(results));
        for (const result of results.results) {
           console.log(result.title);
          }
    });
});