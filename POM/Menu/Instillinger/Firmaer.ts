import { test, Page, expect, Locator } from '@playwright/test';

export class Firmaer {
    page: Page;

    readonly nyttFirma: Locator;
    
    constructor(page){
        this.page = page;

        this.nyttFirma = page.locator('#gotoNewFirmWizard')
    }
}