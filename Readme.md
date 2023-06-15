# README - Plotly SDET Code Challenge #

This is the code challenge for SDET's at Plotly.


### How do I get set up? ###

* Clone the repo
* Ensure Node.js (for `npm` commands) is installed
* Install required packages for the repo 
    * Run `npm install` from source folder "playwrightPlotly"

### Run Modes:
UI (My Favourite):
* As of version 1.32 there is a UI Mode (Preview)
    * To run in this mode update to that version or higher and run command `npx playwright test --ui`

Console:
* `npx playwright test --project=chromium`
        * This will run it headless for all files in the tests folder

Headed:        
* To run headed `npx playwright test --headed`




### Who do I talk to? ###
* For questions or concerns reach out to Skan at skanrav@outlook.com
* Documentation for playwright can be found [here](https://playwright.dev/docs)


### TroubleShooting ###
* On the first run of tests if you see failures, you may need to execute the following command to pull down all respective browsers `npx playwright install`

### Standards ###
All test case should be tagged with a JIRA ticket number for traceability.
E.g. "Verify a user is able to create new items on the page [JIRA-1234]"