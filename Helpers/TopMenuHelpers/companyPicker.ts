import { TopMenu } from '../../POM/TopMenu';
import { test, expect, Page } from '@playwright/test';

export class CompanyPicker {
    page: Page;

    constructor(page) {
      this.page = page;
    }
    async companyPicker(companyChoice) {
      
      const topmenu = new TopMenu(this.page);

      await topmenu.company.click();
      await topmenu.clearCompany.click();

      await topmenu.searchCompany.fill(companyChoice);
      // check the company switch works
      //let companyName;
      //companyName = await this.page.locator('#ClientSearchResultGrid > div.k-grid-content.k-auto-scrollable > div.k-virtual-scrollable-wrap > table > tbody > tr > td.ddColumnWidthName').textContent();        
      await topmenu.searchCompanyFirstMatch.click();

      //await this.page.waitForSelector('#clName', {state: 'visible'});
      //let currentCompany; 
      //currentCompany = await topmenu.company.textContent();
      //await expect(currentCompany).toEqual(companyName);
    
    }
  }