/**
 * Handler for `LaunchRequestHandler` requests
 */
module.exports = {
    canHandle({ requestEnvelope }) {
      const {
        request: { type, intent },
      } = requestEnvelope;
      return type === 'LaunchRequest';
    },
  
    handle({ responseBuilder }) {
      const output = 'Movies! Let\'s get it. You can ask about a movie or search for movies';
      return responseBuilder
        .speak(output)
        .reprompt(output)
        .getResponse();
    },
  };
