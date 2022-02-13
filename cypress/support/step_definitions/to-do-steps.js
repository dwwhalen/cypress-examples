import { TodoPage } from "../../page-objects/todo-page"
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const todoPage = new TodoPage()

Given('I open the to-do page', () => {
  todoPage.navigateToHome();
})

Then('{int} to-do items are displayed', (expectedCount) => {
  todoPage.validateTodoCount(expectedCount)
})

And('to-do item {int} is {string}', (index, expectedText) => {
  todoPage.validateTodoText(index, expectedText)
})

When('I add to-do item {string}', (newItemText) => {
  todoPage.addTodo(newItemText)
})

When('I mark to-do item {string} as complete', (itemToCheck) => {
  todoPage.checkTodo(itemToCheck)
})

Then('to-do item {string} is checked', (expectedItemToBeChecked) => {
  todoPage.verifyTodoIsChecked(expectedItemToBeChecked)
})

When('I click the {string} link', (linkTextToClick) => {
  todoPage.clickAnchorByText(linkTextToClick)
})

When('I click the {string} button', (buttonTextToClick) => {
  todoPage.clickButtonByText(buttonTextToClick)
})

Then('to-do item {string} is not displayed', (itemText) => {
  todoPage.verifyTextExistence(itemText, false)
})
