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
      await topmenu.searchCompanyFirstMatch.click();
        
    }
  }