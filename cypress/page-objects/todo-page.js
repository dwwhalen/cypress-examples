export class TodoPage {

    navigateToHome() {
        cy
            .visit('https://example.cypress.io/todo')
    }

    addTodo(newTodoText) {
        cy
            .get('[data-test=new-todo]')
            .type(`${newTodoText}{enter}`)
    }

    validateTodoCount(expectedLength) {
        cy
            .get('.todo-list li')
            .should('have.length', expectedLength)
    }

    validateTodoText(toDoIndex, expectedTodoText) {
        cy
            .get('.todo-list li')
            .eq(toDoIndex - 1)
            .should('have.text', expectedTodoText)
    }

    checkTodo(todoText) {
        cy.contains(todoText)
            .parent()
            .find('input[type=checkbox]')
            .check()
    }

    verifyTodoIsChecked(todoText) {
        cy.contains(todoText)
            .parents('li')
            .should('have.class', 'completed')
    }

    clickAnchorByText(anchorText) {
        cy
            .get(`a:contains("${anchorText}")`)
            .should('have.length', 1)
            .click()
    }

    clickButtonByText(buttonText) {
        cy
            .get(`button:contains("${buttonText}")`)
            .should('have.length', 1)
            .click()
    }

    verifyTextExistence(text, doesExist = true) {
        if (doesExist) {
            cy
                .contains(text)
                .should('exist')
        }
        else {
            cy
                .contains(text)
                .should('not.exist')
        }

    }
}