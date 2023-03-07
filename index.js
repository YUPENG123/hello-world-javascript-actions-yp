const core = require("@actions/core");
const github = require("@actions/github");

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput("who-to-greet");
  console.log(`Hello ${nameToGreet}!`);
  var env = process.env;
  //console.log(env);
  //console.log("HELLO WORLD!!!");
  //const time = new Date().toTimeString();
  //core.setOutput("time", time);

  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  //const payload = JSON.stringify(github.context.payload, undefined, 2);
  //console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}

const myInput = core.getInput("input");
try {
  core.debug("Inside try block");

  if (!myInput) {
    core.warning("myInput was not set");
  }

  if (core.isDebug()) {
    // curl -v https://github.com
  } else {
    // curl https://github.com
  }

  // Do stuff
  core.info("Output to the actions build log");

  core.notice("This is a message that will also emit an annotation");
} catch (err) {
  core.error(`Error ${err}, action may still succeed though`);
}
