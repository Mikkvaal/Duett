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

  
    async login() {
      // Navigate to the login page
      await this.page.goto("https://devteam8.duett.no/Duett/Core/FrontEnd/WebApplications/Dashboard/Home");
      await this.usertxt.fill('29998mikkva_du');
      await this.userpwd.fill('ImponerendeFredag62');
  
      // Submit the login form
      await Promise.all([
        this.page.click("#loginBtn")
      ]);
  
      await this.page.waitForSelector("#topMenuSettingsIcon");
    }
  }