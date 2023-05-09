const { test, expect } = require('@playwright/test');

export class Login {
    constructor(page) {
      this.page = page;
    }
  
    async login(username, password) {
      // Navigate to the login page
      await this.page.goto("https://rf-systest.duett.no/Duett/Core/FrontEnd/WebApplications/Dashboard");

      this.usertxt = this.page.locator("#usrText");
      this.userpwd = this.page.locator("#pwdText");

      await this.usertxt.fill(username);
      await this.userpwd.fill(password);
  
      // Submit the login form
      await Promise.all([
        this.page.click("#loginBtn")
      ]);
  
      await this.page.waitForSelector("#topMenuSettingsIcon");
    }
  }