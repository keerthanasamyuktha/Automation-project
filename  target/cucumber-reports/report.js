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
  "duration": 4900599600,
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
  "duration": 6153148000,
  "status": "passed"
});
formatter.match({
  "location": "createRecordSteps.navigateToTheModule()"
});
formatter.result({
  "duration": 223316800,
  "status": "passed"
});
formatter.match({
  "location": "createRecordSteps.hoverOverEnvironmentAndSelectReleaseToWater()"
});
formatter.result({
  "duration": 2396806500,
  "status": "passed"
});
formatter.match({
  "location": "createRecordSteps.userClicksOnNewRecordButtonAndEnterSampleDateAndDescriptionFields()"
});
formatter.result({
  "duration": 4243553500,
  "status": "passed"
});
formatter.match({
  "location": "createRecordSteps.clicksOnClickSaveAndCloseButton()"
});
formatter.result({
  "duration": 4937946000,
  "status": "passed"
});
formatter.match({
  "location": "createRecordSteps.userCreatsAnotherRecordUsingDifferentDateAndDescription()"
});
formatter.result({
  "duration": 11452964300,
  "status": "passed"
});
formatter.match({
  "location": "createRecordSteps.userNavigatesToSettingsForTheFirstRecord()"
});
formatter.result({
  "duration": 2101137300,
  "status": "passed"
});
formatter.match({
  "location": "createRecordSteps.clicksOnDelete()"
});
formatter.result({
  "duration": 4944359100,
  "status": "passed"
});
formatter.match({
  "location": "createRecordSteps.theRecordGetsDeleted()"
});
formatter.result({
  "duration": 69334400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@title\u003d\u0027\" + firstRecordValue + \"\u0027]\"}\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027CPX-H8JJZIFSN1U\u0027, ip: \u0027192.168.1.136\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\KRAVI~1.LAK\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:64395}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 83829c7043d2b2a8b93ed81256a2ea27\n*** Element info: {Using\u003dxpath, value\u003d//a[@title\u003d\u0027\" + firstRecordValue + \"\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat steps.createRecordSteps.theRecordGetsDeleted(createRecordSteps.java:114)\r\n\tat ✽.Then validate the first record doesn\u0027t exist anymore before logging out(createRecord.feature:14)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 146572000,
  "status": "passed"
});
});