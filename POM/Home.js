// @ts-check
const { test, expect } = require('@playwright/test');

export class Home {
    constructor(page){
        this.page = page;
        this.bankTrans = page.locator('#ddActionCenterContentPortfolio > div.ddActionCenterTiles > div:nth-child(1) > div.ddActionCenterTileLabel');
        this.bilagsKontroll = page.locator('#ddActionCenterContentPortfolio > div.ddActionCenterTiles > div:nth-child(2) > div.ddActionCenterTileLabel');
        this.lonn = page.locator('#ddActionCenterContentPortfolio > div.ddActionCenterTiles > div:nth-child(3) > div.ddActionCenterTileLabel');
        this.utgFaktura = page.locator('#ddActionCenterContentPortfolio > div.ddActionCenterTiles > div:nth-child(4) > div.ddActionCenterTileLabel');
        this.attestasjon = page.locator('#ddActionCenterContentPortfolio > div.ddActionCenterTiles > div:nth-child(5) > div.ddActionCenterTileLabel');
        this.autoTrans = page.locator('#ddActionCenterContentPortfolio > div.ddActionCenterTiles > div:nth-child(6) > div.ddActionCenterTileLabel');
        this.dataFlyt = page.locator('#ddActionCenterContentPortfolio > div.ddActionCenterTiles > div:nth-child(7) > div.ddActionCenterTileLabel');
        this.meldinger = page.locator('#ddActionCenterContentPortfolio > div.ddActionCenterTiles > div:nth-child(8) > div.ddActionCenterTileLabel');
        this.reiseUtlegg = page.locator('#ddActionCenterContentPortfolio > div.ddActionCenterTiles > div:nth-child(9) > div.ddActionCenterTileLabel');
        this.velgFirma = page.locator('#clName');
        this.userIcon = page.locator('#topMenuSettingsIcon');
    }
}