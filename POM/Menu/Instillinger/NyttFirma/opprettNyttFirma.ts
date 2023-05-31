import { test, Page, expect, Locator } from '@playwright/test';

export class OpprettNyttFirma {
    page: Page;

    readonly startOpprettelseNyttFirma: Locator;
    readonly sokFirma: Locator;
    readonly finnesIRegister: Locator;

    //Firma
    readonly firmaNavn: Locator;
    readonly firmaInitialer: Locator;
    readonly adresse: Locator;
    readonly postnummer: Locator;
    readonly poststed: Locator;
    readonly epost: Locator;
    readonly orgNr: Locator;
    readonly foretaksregisteret: Locator;
    readonly regnskapstype: Locator;
    readonly foretaksform: Locator;
    
    constructor(page){
        this.page = page;

        this.startOpprettelseNyttFirma = page.locator('#startBtn');
        this.sokFirma = page.locator('#BRregisterAutoSearch');
        this.finnesIRegister = page.locator('#notInBRreg');

        //Firma
        this.firmaNavn = page.locator('#FirmNameRef');
        this.firmaInitialer = page.locator('#FirmInitialsRef');
        this.adresse = page.locator('#FirmAddressRef');
        this.postnummer = page.locator('#FirmPostalZipRef');
        this.poststed = page.locator('#FirmPostalCityRef');
        this.epost = page.locator('#FirmEpostRef');
        this.orgNr = page.locator('#FirmOrganizationNumberRef');
        this.foretaksregisteret = page.locator('#FirmForetaksregisteretRef');
        this.regnskapstype = page.locator('#FirmRegnskapstypeRefUpperDiv > span > button');
        this.foretaksform = page.locator('#brForm > div:nth-child(2) > div:nth-child(4) > span > button');

    }
}