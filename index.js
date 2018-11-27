const Alexa = require('ask-sdk-core');
const LaunchRequestHandler = require('./src/handlers/Launch');
const Skill = require('./src/handlers/Skill');

/* Replace with skill id from Alexa developer console */
const alexAppId = 'amzn1.ask.skill.e1b177a9-871b-4ff2-8d20-a3cbbdd56c24';

let skill;

/**
 * Main function for handling Alexa requests
 *
 * @param {object} event Alexa request object
 * @param {object} context Optional context
 *
 * @return {Promise<ASKResponse>|Function}
 */
exports.handler = async (event, context) => {
  if (!skill) {
    skill = Alexa.SkillBuilders.custom()
      .addRequestHandlers(
        /* Add custom handlers above these */
        LaunchRequestHandler,
      )
      .addErrorHandlers(ErrorHandler)
      .withSkillId(alexAppId)
      .create();
  }
  console.log("incoming event is", event);
  return skill.invoke(event, context);
};