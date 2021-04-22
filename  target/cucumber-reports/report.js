$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Create Record",
  "description": "",
  "id": "create-record",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "create a record and delete it",
  "description": "",
  "id": "create-record;create-a-record-and-delete-it",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User logs into the application using valid username and password",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigate to the module",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "hover over \u0027Environment\u0027 and select \u0027release To Water\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks on new record button and enter sample date and description fields",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "clicks on Click Save and Close button",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.userLoginToTheApplicationUsingTheCredentials()"
});
formatter.result({
  "duration": 8397864500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.navigateToTheModule()"
});
formatter.result({
  "duration": 133292400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.hoverOverEnvironmentAndSelectReleaseToWater()"
});
formatter.result({
  "duration": 1565610800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnNewRecordButtonAndEnterSampleDateAndDescriptionFields()"
});
formatter.result({
  "duration": 5430156600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clicksOnClickSaveAndCloseButton()"
});
formatter.result({
  "duration": 1362888000,
  "status": "passed"
});
});