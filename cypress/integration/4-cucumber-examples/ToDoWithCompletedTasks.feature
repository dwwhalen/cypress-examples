Feature: To Do page with a completed task

  Background:
    Given I open the to-do page
    And I mark to-do item "Pay electric bill" as complete

  Scenario: can filter for uncompleted tasks
    When I click the "Active" link
    Then 1 to-do items are displayed
    And to-do item 1 is "Walk the dog"
    And to-do item "Pay electric bill" is not displayed

  Scenario: can filter for completed tasks
    When I click the "Completed" link
    Then 1 to-do items are displayed
    And to-do item 1 is "Pay electric bill"
    And to-do item "Walk the dog" is not displayed

  Scenario: can delete all completed tasks
    When I click the "Clear completed" button
    Then 1 to-do items are displayed
    And to-do item 1 is "Walk the dog"
    And to-do item "Pay electric bill" is not displayed
    When I click the "All" link
    Then 1 to-do items are displayed
    And to-do item 1 is "Walk the dog"
    When I click the "Completed" link
    Then 0 to-do items are displayed