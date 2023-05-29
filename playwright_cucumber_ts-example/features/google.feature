@foo
Feature: Google Search

  Background: Navigation
    Given Go to the google website

  Scenario: Search BDD
    When search is performed for BDD
    Then BDD search results are displayed

