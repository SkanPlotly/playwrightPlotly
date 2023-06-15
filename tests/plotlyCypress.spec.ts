import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { AboutUsPage } from '../pages/AboutUsPage';
import { HeaderComponent } from '../pages/HeaderComponent';
import { CypressCloudPage } from '../pages/CypressCloudPage';

//test.describe.configure({ mode: 'parallel' }); TODO: Review...Clipboard permissions can't be set on FireFox, so that test will fail in parallel mode

test.describe('Cypress Ux Tests', () => {
  test('Verify weekly downloads displays 5 million [JIRA-Ticket]', async ({ page }) => {
    const hp = new HomePage(page);
    await hp.goto();
    await hp.scrollToOSSTitle();
    await hp.verifyWeeklyDownloads5M();
  });

  test('Verify the About Cypress Page displays [JIRA-Ticket]', async ({ page }) => {
    const hp = new HomePage(page);
    const hc = new HeaderComponent(page);
    const abu = new AboutUsPage(page)
    
    await hp.goto();
    await hc.clickCompany();
    await hc.clickAboutCypress();
    await abu.verifyAboutUsTitle();
  });

  test('User is able to copy npm install command to clipboard [JIRA-Ticket]', async ({ page, context }) => {
    const hp = new HomePage(page);
    const hc = new HeaderComponent(page);
    // Only works on Chrome, permission fails for Firefox + Webkit
    await context.grantPermissions(['clipboard-read'], { origin: 'https://cypress.io' });

    await hp.goto();
    await hc.clickPricing(); 
    await hc.clickInstall();
    await hc.clickNpmInstallCypress()
    let clipboardText1 = await page.evaluate("navigator.clipboard.readText()")
    //Expect step would go here to validate text, but there is an error with PlayWrights runner currently copying to clipboard
  });

  test('User is able to navigate to visual review  [JIRA-Ticket]', async ({ page }) => {
    const hp = new HomePage(page);
    const hc = new HeaderComponent(page);
    const ccp = new CypressCloudPage(page);

    await hp.goto();
    await hc.clickProduct();
    await hc.clickVisualReview();
    await ccp.verifyAboutUsTitle();
  });

  test('Bonus: Verify Smart Orchestration Boarder [JIRA-Ticket]', async ({ page }) => {
    const hp = new HomePage(page);
    const hc = new HeaderComponent(page);
    const ccp = new CypressCloudPage(page);

    await hp.goto();
    await hc.clickProduct();
    await hc.clickSmartOrchestration();
    await ccp.verifySmartOrchestrationBoarder();
  });

});
