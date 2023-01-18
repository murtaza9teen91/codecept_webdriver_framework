@google
Feature: Amazon Console Errors

    As a user

    Scenario: visit amazon url and validate console errors
    Given I visit 'https://www.amazon.com/' URL
    Then I validate validate that the current page has less than 2 console errors
    