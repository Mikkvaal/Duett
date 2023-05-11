// @ts-check
const { test, expect } = require('@playwright/test');

export class TopMenu {
    constructor(page){
        this.page = page;
        this.topMenu = page.locator('#topmenu');
        this.menuIcon = page.locator('#topMenuSettingsIcon');
        this.meldinger = page.locator('#topMenuMessageContainer > div.ddMessagesText');

        this.instillinger = page.locator('#storMenyContent > div > div > div > div:nth-child(8) > a');
    }
}
