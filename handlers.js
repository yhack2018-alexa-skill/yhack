'use strict';

const imdb = require('imdb-api');

const IMDB_API_KEY = process.env.IMDB_API_KEY;

module.exports.movieTitles = (event, context, callback) => {
  const searchString = event.request.intent.slots.MovieString.value || 'movie';
  const results = await imdb.search({name: 'movie'}, {apiKey: IMDB_API_KEY, timeout: 30000}, 1);
  // console.log(JSON.stringify(results));
  let movieList = '';
  for (const result of results.results) {
     movieList += `${result}, `;
    }
  const response = {
    version: '1.0',
    response: {
      outputSpeech: {
        type: 'PlainText',
        text: `Your lucky number is ${movieList}`,
      },
      shouldEndSession: false,
    },
  };

  callback(null, response);
};