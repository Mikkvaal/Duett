import { test, Page, expect, Locator } from '@playwright/test';

export class Home {
    page: Page;

    readonly firmaOppsettFaktura: Locator;
    
    constructor(page){
        this.page = page;

        this.firmaOppsettFaktura = page.locator('#FirmaFakturaGoTo > div.linkText');
    }
}