### Cypress Automation Setup Guide   
This project demonstrates the cypress + Javascript framework project setup.

### Features
* Time Travel - Cypress takes snapshots as your tests run. Simply hover over commands in the Command Log to see exactly what happened at each step.
* Real time reloads - Cypress automatically reloads whenever you make changes to your tests. See commands execute in real time in your app.
* Spies, stubs, and clocks - Verify and control the behavior of functions, server responses, or timers.
* Consistent results - architecture doesn’t use Selenium or WebDriver. Say hello to fast, consistent and reliable tests that are flake-free
* Debuggability - Stop guessing why your tests are failing. Debug directly from familiar tools like Chrome DevTools. Cypress readable errors and stack traces make debugging lightning fast.
* Automatic Waiting - Cypress automatically waits for commands and assertions before moving on. No more async hell.
* Screenshots and videos - View screenshots taken automatically on failure, or videos of your entire test suite when run headlessly.

### To Get Started

#### Pre-requisites
1.NodeJS installed globally in the system.
https://nodejs.org/en/download/

2.Chrome or Firefox browsers installed.

3.Text Editor(Optional) installed-->Sublime/Visual Studio Code/Brackets.

#### Setup Scripts
* Clone the repository into a folder
* Go inside the folder and run following command from terminal/command prompt
```
   npm install 

```
* All the dependencies from package.json and ambient typings would be installed in node_modules folder.

* After installing Cypress, User needs to open Cypress once in GUI Mode by using following Command and then you are good to go !

```
   npx cypress open
```


#### Run Scripts

* Headless Mode
```
   npm run test
```

* GUI Mode
```
   npx cypress open
```

* Headless Mode Only selected folder or Selected file within a folder
```
   npm run cy-run-specs --specpath=cypress/e2e/<PATH_TO_YOUR_SPECS> 
```
* Examples: "npm run cy-run-specs --specpath=cypress/e2e/sample"
npx
* "npm run cy-run-specs --specpath=cypress/e2e/sample/sampleTest2.cy.js"

#### Write Your First Test

* Open up your favorite IDE and add the code below to our sample_spec.js test file and store the following code in 'cypress/e2e'

```
    describe('My First Test', () => {
     it('Does not do much!', () => {
       expect(true).to.equal(true)
      })
    })
```

* Open cypress in GUI Mode and go to Test Runner.
* Select the browser from the list dropdown on which you want to run your test
* Currently Cypress supports following browsers - edge,chrome,electron(default),firefox,brave
* From Test Runner Click on the spec that you may want to run.
