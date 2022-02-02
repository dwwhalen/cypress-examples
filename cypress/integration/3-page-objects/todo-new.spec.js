/// <reference types="cypress" />

import { TodoPage } from "../../page-objects/todo-page"

describe('example to-do app', () => {

  const todoPage = new TodoPage()

  beforeEach(() => {
    todoPage.navigateToHome();
  })

  it('displays two todo items by default', () => {
    todoPage.validateTodoCount(2)
    todoPage.validateTodoText(1, 'Pay electric bill')
    todoPage.validateTodoText(2, 'Walk the dog')
  })

  it('can add new todo items', () => {
    const newItem = 'Feed the cat'
    todoPage.addTodo(newItem)
    todoPage.validateTodoCount(3)
    todoPage.validateTodoText(3, newItem)
  })

  it('can check off an item as completed', () => {
    todoPage.validateTodoCount(2)
    todoPage.checkTodo('Pay electric bill')
    todoPage.verifyTodoIsChecked('Pay electric bill')
  })

  context('with a checked task', () => {
    beforeEach(() => {
      todoPage.checkTodo('Pay electric bill')
    })

    it('can filter for uncompleted tasks', () => {
      todoPage.clickAnchorByText('Active')
      todoPage.validateTodoCount(1)
      todoPage.validateTodoText(1, 'Walk the dog')
      todoPage.verifyTextExistence('Pay electric bill', false)
    })

    it('can filter for completed tasks', () => {
      todoPage.clickAnchorByText('Completed')
      todoPage.validateTodoCount(1)
      todoPage.validateTodoText(1, 'Pay electric bill')
      todoPage.verifyTextExistence('Walk the dog', false)
    })

    it('can delete all completed tasks', () => {
      todoPage.clickButtonByText('Clear completed')
      todoPage.validateTodoCount(1)
      todoPage.validateTodoText(1, 'Walk the dog')
      todoPage.verifyTextExistence('Pay electric bill', false)

      // Finally, make sure that the clear button no longer exists.
      todoPage.verifyTextExistence('Clear completed', false)
    })
  })
})
