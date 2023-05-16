import { test, Page, Locator } from '@playwright/test';

export class Login {
    readonly usertxt: Locator;
    readonly userpwd: Locator;

    page: Page;
    constructor(page) {
      this.page = page;
      this.usertxt = this.page.locator("#usrText");
      this.userpwd = this.page.locator("#pwdText");
    }

  
    async login(username, password) {
      // Navigate to the login page
      await this.page.goto("https://devteam8.duett.no/Duett/Core/FrontEnd/WebApplications/Dashboard/Home");

      await this.usertxt.fill(username);
      await this.userpwd.fill(password);
  
      // Submit the login form
      await Promise.all([
        this.page.click("#loginBtn")
      ]);
  
      await this.page.waitForSelector("#topMenuSettingsIcon");
    }
  }