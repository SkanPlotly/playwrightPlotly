import { expect, Locator, Page } from '@playwright/test';


export class AboutUsPage {
  readonly page: Page;
  readonly aboutUsTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.aboutUsTitle = page.getByRole('heading', { name: 'About us' })
  
  }

  async verifyAboutUsTitle() {
    await expect(this.aboutUsTitle).toHaveText('About us')
  }
}
