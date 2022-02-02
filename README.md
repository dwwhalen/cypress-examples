# initial setup when creating this
```
npm init -y
npm install cypress --save-dev
npx cypress open
```

# start the test runner 
```
npx cypress open
```

# run all tests
```
npx cypress run
```

# run all tests in a single spec file
```
npx cypress run --spec cypress/integration/3-page-objects/todo-new.spec.js
```

# Updates made
The tests in the folders `integration/1-getting-started` and `integration/2-advanced-examples` are automatically created the first time `npx cypress open` is run.

Updates include:
1. Using page objects - added a new page object class and created `todo-new.spec.js` to demonstrate how to use page objects in a test spec.

2. Cucumber example, based on https://github.com/TheBrainFamily/cypress-cucumber-example.git and https://www.npmjs.com/package/cypress-cucumber-preprocessor'