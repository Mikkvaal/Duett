import { test, Page, expect, Locator } from '@playwright/test';

export class Instillinger {
    page: Page;

    readonly favouriteStar: Locator;
    readonly firmaOppsettFaktura: Locator;
    
    constructor(page){
        this.page = page;

        this.favouriteStar = page.locator('#titleFavouriteStar');
        this.firmaOppsettFaktura = page.locator('#FirmaFakturaGoTo > div.linkText');
    }
}