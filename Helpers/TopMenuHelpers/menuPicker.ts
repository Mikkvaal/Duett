import { TopMenu } from '../../POM/TopMenu';
import { test, expect, Page } from '@playwright/test';

export class MenuPicker {
    page: Page;

    constructor(page) {
      this.page = page;
    }
    async menuPicker(menuChoice) {
      
      const topmenu = new TopMenu(this.page);

      await topmenu.topMenu.click();

        switch (menuChoice) {
            case 'Innstillinger' :
                await topmenu.instillinger.click();
                break;
            default :
                throw new Error(`Invalid menu choice: ${menuChoice}`);
        }
        
      await this.page.waitForSelector("#ddSettingsThemePageContainer > div.rightContainer > div.carriers > div > div.themeCarriersLabel > div");
    }
  }