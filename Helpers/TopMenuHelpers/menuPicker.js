import { TopMenu } from '../../POM/TopMenu';
const { test, expect } = require('@playwright/test');

export class MenuPicker {
    constructor(page) {
      this.page = page;
    }
    async menuPicker(menuChoice) {

        await Promise.all([
            this.page.waitForSelector('#topmenu'),
            this.page.locator('#topmenu').click()
          ]);
        

        switch (menuChoice) {
            case 'Innstillinger' :
                menuChoice = TopMenu.instillinger;
        }
        
        await 
        await this.menuChoice.click();
  
      await this.page.waitForSelector("#topMenuSettingsIcon");
    }
  }