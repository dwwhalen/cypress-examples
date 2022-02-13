Feature: To Do page

  Background:
    Given I open the to-do page

  Scenario: displays two todo items by default
    Then 2 to-do items are displayed
    And to-do item 1 is "Pay electric bill"
    And to-do item 2 is "Walk the dog"

  Scenario: can add new todo items
    When I add to-do item "Feed the cat"
    Then 3 to-do items are displayed
    And to-do item 3 is "Feed the cat"

  Scenario: can check off an item as completed
    When I mark to-do item "Pay electric bill" as complete
    Then to-do item "Pay electric bill" is checked