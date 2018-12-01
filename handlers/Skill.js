/**
 * Handler for `AMAZON.PopularMovieHandler` requests
 */
const imdb = require("imdb-api");

const IMDB_API_KEY = process.env.IMDB_API_KEY;

module.exports = {
  canHandle({ requestEnvelope }) {
    const {
      request: { type, intent }
    } = requestEnvelope;
    return type === "IntentRequest" && intent.name === "MovieSearch";
  },

  async handle({ requestEnvelope, responseBuilder }) {
    const searchString = requestEnvelope.request.intent.slots.movie.value;
    const results = await imdb.search(
      { name: searchString },
      { apiKey: IMDB_API_KEY, timeout: 30000 },
      1
    );

    let movieList = "";
    for (const result of results.results) {
      movieList += `${result.name}, `;
    }

    const output = `Your movie list is: ${movieList}`;
    return responseBuilder
      .speak(output)
      .reprompt(output)
      .getResponse();
  }
};
