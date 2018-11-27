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
      const output = 'Movies! Let\'s get it. You can create a goal, add a step to a goal, add a task to a step, or finish a step or task. You can also ask me about your goal, step, or task.';
      return responseBuilder
        .speak(output)
        .reprompt(output)
        .getResponse();
    },
  };