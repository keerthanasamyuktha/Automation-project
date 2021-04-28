$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createRecord.feature");
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
formatter.before({
  "duration": 4309807400,
  "status": "passed"
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
formatter.step({
  "line": 11,
  "name": "user creates another record using different date and description",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user navigates to the first record",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "delete the record",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "validate the first record doesn\u0027t exist anymore before logging out",
  "keyword": "Then "
});
formatter.match({
  "location": "createRecordSteps.userLoginToTheApplicationUsingTheCredentials()"
});
formatter.result({
  "duration": 6045884500,
  "status": "passed"
});
formatter.match({
  "location": "createRecordSteps.navigateToTheModule()"
});
formatter.result({
  "duration": 207874600,
  "status": "passed"
});
formatter.match({
  "location": "createRecordSteps.hoverOverEnvironmentAndSelectReleaseToWater()"
});
formatter.result({
  "duration": 2311781700,
  "status": "passed"
});
formatter.match({
  "location": "createRecordSteps.userClicksOnNewRecordButtonAndEnterSampleDateAndDescriptionFields()"
});
formatter.result({
  "duration": 3814667000,
  "status": "passed"
});
formatter.match({
  "location": "createRecordSteps.clicksOnClickSaveAndCloseButton()"
});
formatter.result({
  "duration": 4890821600,
  "status": "passed"
});
formatter.match({
  "location": "createRecordSteps.userCreatsAnotherRecordUsingDifferentDateAndDescription()"
});
formatter.result({
  "duration": 11404952700,
  "status": "passed"
});
formatter.match({
  "location": "createRecordSteps.userNavigatesToSettingsForTheFirstRecord()"
});
formatter.result({
  "duration": 2124756400,
  "status": "passed"
});
formatter.match({
  "location": "createRecordSteps.clicksOnDelete()"
});
formatter.result({
  "duration": 3715564400,
  "status": "passed"
});
formatter.match({
  "location": "createRecordSteps.theRecordGetsDeleted()"
});
formatter.result({
  "duration": 985994400,
  "status": "passed"
});
formatter.after({
  "duration": 58100,
  "status": "passed"
});
});