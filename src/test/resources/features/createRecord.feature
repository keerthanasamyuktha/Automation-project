@test
Feature: Create Record

  Scenario: create a record and delete it

    Given User logs into the application using valid username and password
    And navigate to the module
    And hover over 'Environment' and select 'release To Water'
    When user clicks on new record button and enter sample date and description fields
    And clicks on Click Save and Close button
    And user creates another record using different date and description
    When user navigates to the first record
    And delete the record
    Then validate the first record doesn't exist anymore before logging out


