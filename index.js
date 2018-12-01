const Alexa = require('ask-sdk-core');
const LaunchRequestHandler = require('./src/handlers/Launch');
const Skill = require('./src/handlers/Skill');

/* Replace with skill id from Alexa developer console */
const alexAppId = 'amzn1.ask.skill.a63b7eee-40c5-4e0a-9707-5b8248f68483';

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