/**
 * Handler for `AMAZON.PopularMovieHandler` requests
 */
module.exports = {
    canHandle({ requestEnvelope }) {
      const {
        request: { type, intent },
      } = requestEnvelope;
      return type === 'IntentRequest' && intent.name === 'AboutTask';
    },
  
    handle({ requestEnvelope, responseBuilder }) {
       const slotTask = requestEnvelope.request.intent.slots.TaskName.value;
      const output = `Yas! Let me tell you about your ${slotTask} task`;      
      return responseBuilder
        .speak(output)
        .reprompt(output)
        .getResponse();
    },
  };