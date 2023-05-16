import { test, expect, Page, Locator } from '@playwright/test';

export class TopMenu {
    page: Page;
    
    readonly topMenu: Locator;
    readonly menuIcon: Locator;
    readonly meldinger: Locator;
    readonly instillinger: Locator;
    
    constructor(page){
        this.page = page;
        this.topMenu = page.locator('#topmenu');
        this.menuIcon = page.locator('#topMenuSettingsIcon');
        this.meldinger = page.locator('#topMenuMessageContainer > div.ddMessagesText');
        

        this.instillinger = page.locator('#storMenyContent > div > div > div > div:nth-child(8) > a');
    }
}
