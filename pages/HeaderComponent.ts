import { expect, Locator, Page } from '@playwright/test';


export class HeaderComponent {
 readonly page: Page;
 readonly companyDropdown: Locator;
 readonly aboutCypress: Locator;
 readonly pricing: Locator;
 readonly npmInstallCypress: Locator;
 readonly install: Locator;
 readonly product: Locator;
 readonly visualReview: Locator;
 readonly smartOrchestration: Locator;

  constructor(page: Page) {
    this.companyDropdown = page.getByRole('button', { name: 'Company' });
    this.aboutCypress = page.getByRole('link', { name: 'About Cypress A new generation of testing' });
    this.pricing = page.getByRole('link', { name: 'Pricing' })
    this.npmInstallCypress = page.getByRole('button', { name: 'npm install cypress' })
    this.install = page.getByRole('button', { name: 'Install' })
    this.product = page.getByRole('button', { name: 'Product' })
    this.visualReview = page.getByRole('link').filter({ hasText: 'Visual Reviews' })
    this.smartOrchestration = page.getByRole('link').filter({ hasText: 'Smart Orchestration' })
  }

  async clickCompany() {
    await this.companyDropdown.click();
  }

  async clickAboutCypress() {
    await this.aboutCypress.click();
  }

  async clickPricing() {
    await this.pricing.click();
  }

  async clickInstall() {
    await this.install.click();
  }

  async clickNpmInstallCypress() {
    await this.npmInstallCypress.click();
  }
  
  async clickProduct() {
    await this.product.click();
  }

  async clickVisualReview() {
    await this.visualReview.click();
  }

  async clickSmartOrchestration() {
    await this.smartOrchestration.click();
  }
}
