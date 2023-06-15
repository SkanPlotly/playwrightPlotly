import { expect, Locator, Page } from '@playwright/test';


export class HomePage {
  readonly page: Page;
  readonly ossTitle: Locator;
  readonly downloadCount: Locator;

  readonly todoInputTextBox: Locator;
  readonly toggleAllCheckbox: Locator;
  readonly firstTodoToggleButton: Locator;
  
 
  constructor(page: Page) {
    this.page = page;
    this.ossTitle = page.getByRole('heading', { name: 'Loved by OSS, trusted by Enterprise' })
    this.downloadCount = page.getByText('5.0M+');

    this.todoInputTextBox = page.getByPlaceholder('What needs to be done?');
    this.toggleAllCheckbox = page.locator('[for="toggle-all"]')
    this.firstTodoToggleButton = page.locator('[aria-label="Toggle Todo"]').first();
  }

  async goto() {
    await this.page.goto('https://www.cypress.io/');
  }

  async scrollToOSSTitle(){
    await this.ossTitle.scrollIntoViewIfNeeded();
  }

  async verifyWeeklyDownloads5M(){
    //To be refactored into generic method
    const text = await this.downloadCount.textContent();
    expect(text).toBe("5.0M+");
  }



 

  

  async clickToggleAllTodosCheckbox(){
   await this.toggleAllCheckbox.click();
  }

  async completeFirstTodo(){
    await this.firstTodoToggleButton.setChecked(true);
  }
  
  

  

  async verifyLastTodo(todo: string){
    //The locator below is a one off, so opted to keep it in the method
    const lastTodo = await this.page.locator("[data-testid='todo-title']").last();
    const lastTodoText = await lastTodo.textContent();
    expect(lastTodoText).toBe(todo);
  }

}
