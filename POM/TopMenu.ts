import { test, expect, Page, Locator } from '@playwright/test';

export class TopMenu {
    page: Page;
    
    readonly topMenu: Locator;
    readonly menuIcon: Locator;
    readonly meldinger: Locator;
    readonly instillinger: Locator;
    readonly company: Locator;
    readonly clearCompany: Locator;
    readonly searchCompany: Locator;
    readonly searchCompanyFirstMatch: Locator;
    
    constructor(page){
        this.page = page;
        
        this.menuIcon = page.locator('#topMenuSettingsIcon');
        this.meldinger = page.locator('#topMenuMessageContainer > div.ddMessagesText');

        this.company = page.locator('#clName');
        this.clearCompany = page.locator('#ClientSearchClear');
        this.searchCompany = page.locator('#ClientSearch');
        this.searchCompanyFirstMatch = page.locator('#ClientSearchResultGrid > div.k-grid-content.k-auto-scrollable > div.k-virtual-scrollable-wrap > table > tbody > tr > td.ddColumnWidthClientKey')


        this.topMenu = page.locator('#topmenu');
        this.instillinger = page.locator('#storMenyContent > div > div > div > div:nth-child(8) > a');
    }
}
