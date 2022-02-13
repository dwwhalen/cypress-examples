# initial setup when creating this repo
```
npm init -y
npm install cypress --save-dev
npx cypress open
```

# setup after cloning this repo
```
npm install
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
npx cypress run --spec "cypress/integration/3-page-object-examples/todo-po-class.spec.js"
```

# run all the feature files
```
npx cypress run --spec "cypress/integration/**/*.feature"
```


# Updates made
The tests in the folders `integration/1-getting-started` and `integration/2-advanced-examples` are automatically created the first time `npx cypress open` is run.

I've added new folders and exampled:
1. integration/3-page-object-examples: added a new page object class and created `todo-new.po-class-spec.js` to demonstrate how to use page objects in a test spec.

2. integration/4-cucumber-examples: converted the tests from the /1-getting-started folder to feature files (and leverage page objects).  Most of this is based on https://github.com/TheBrainFamily/cypress-cucumber-example.git and https://www.npmjs.com/package/cypress-cucumber-preprocessor'  
(branch: 04-cucumber-examples)