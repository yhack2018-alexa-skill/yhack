/**
 * Handler for `AMAZON.PopularMovieHandler` requests
 */
const imdb = require('imdb-api');

const IMDB_API_KEY = process.env.IMDB_API_KEY;

module.exports = {
    canHandle({ requestEnvelope }) {
      const {
        request: { type, intent },
      } = requestEnvelope;
      return type === 'IntentRequest' && intent.name === 'MovieSearch';
    },
  
    handle({ requestEnvelope, responseBuilder }) {
      const searchString = requestEnvelope.request.intent.slots.MovieString.value || 'movie';
      const results = await imdb.search({name: searchString}, {apiKey: IMDB_API_KEY, timeout: 30000}, 1);
      console.log(JSON.stringify(results));
      let movieList = '';
      for (const result of results.results) {
         movieList += `${result}, `;
        }
      console.log(movieList);  
      const response = {
        version: '1.0',
        response: {
          outputSpeech: {
            type: 'PlainText',
            text: `Your movie list is ${movieList}`,
          },
          shouldEndSession: false,
        },
      };
    
      callback(null, response);

      console.log(JSON.parse(response));  

      //const slotTask = requestEnvelope.request.intent.slots.TaskName.value;
      const output = `Yas! Your movie list is ${movieList}`;      
      return responseBuilder
        .speak(output)
        .reprompt(output)
        .getResponse();
    },
  };