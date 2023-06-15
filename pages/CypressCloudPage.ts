import { expect, Locator, Page } from '@playwright/test';


export class CypressCloudPage {
  readonly page: Page;
  readonly visualReviewTitle: Locator;
  readonly smartOrchestrationLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.visualReviewTitle = page.locator('#visual_reviews').getByText('Visual Reviews');
    this.smartOrchestrationLink = page.getByRole('link', { name: 'Smart Orchestration' })
  
  }

  async verifyAboutUsTitle() {
    await expect(this.visualReviewTitle).toHaveText('Visual Reviews')
  }

  //TODO: Refactor into generic border method
  async verifySmartOrchestrationBoarder() {
    await expect(this.smartOrchestrationLink).toHaveClass(/border-jade-200/)
  }
}
