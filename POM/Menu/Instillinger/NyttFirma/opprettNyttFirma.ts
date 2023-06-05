import { test, Page, expect, Locator } from '@playwright/test';

export class OpprettNyttFirma {
    page: Page;

    readonly startOpprettelseNyttFirma: Locator;
    readonly sokFirma: Locator;
    readonly finnesIRegister: Locator;
    readonly nesteKnapp: Locator;

    //Firma
    readonly firmaNavn: Locator;
    readonly firmaInitialer: Locator;
    readonly adresse: Locator;
    readonly postnummer: Locator;
    readonly poststed: Locator;
    readonly epost: Locator;
    readonly orgNr: Locator;
    readonly mvaPliktig: Locator;
    readonly foretaksregisteret: Locator;
    readonly regnskapstype: Locator;
    readonly foretaksform: Locator;
    
    //Kopier fra firma
    readonly systemfirma: Locator;
    readonly standardfirma: Locator;
    readonly annetFirma: Locator;
    readonly velgFirma: Locator;
    readonly baerere: Locator;
    readonly baerereUtvidet: Locator;
    readonly oppgave: Locator;
    readonly aktivitet: Locator;
    readonly avdeling: Locator;
    readonly frieBaerere: Locator;
    readonly kunder: Locator;
    readonly leverandorer: Locator;
    readonly varer: Locator;
    readonly rapportoppsett: Locator;

    constructor(page){
        this.page = page;

        this.startOpprettelseNyttFirma = page.locator('#startBtn');
        this.sokFirma = page.locator('#BRregisterAutoSearch');
        this.finnesIRegister = page.locator('#notInBRreg');
        this.nesteKnapp = page.locator('#nextBtn');

        //Firma
        this.firmaNavn = page.locator('#FirmNameRef');
        this.firmaInitialer = page.locator('#FirmInitialsRef');
        this.adresse = page.locator('#FirmAddressRef');
        this.postnummer = page.locator('#FirmPostalZipRef');
        this.poststed = page.locator('#FirmPostalCityRef');
        this.epost = page.locator('#FirmEpostRef');
        this.orgNr = page.locator('#FirmOrganizationNumberRef');
        this.mvaPliktig = page.locator('#FirmIsRequiredMVARef');
        this.foretaksregisteret = page.locator('#FirmForetaksregisteretRef');
        this.regnskapstype = page.locator('#FirmRegnskapstypeRefUpperDiv');
        this.foretaksform = page.locator('#brForm > div:nth-child(2) > div:nth-child(4) > span > button');

        //Kopier fra firma
        this.systemfirma = page.locator('#ctSystem');
        this.standardfirma = page.locator('#ctStandard');
        this.annetFirma = page.locator('#ctAnnet');
        this.velgFirma = page.locator('#companySearch');
        this.baerere = page.locator('div').filter({ hasText: /^Bærere$/ }).locator('input[type="checkbox"]');
        this.baerereUtvidet = page.locator('div').filter({ hasText: /^Bærere$/ }).locator('span').nth(1);
        this.oppgave = page.getByRole('treeitem', { name: 'Oppgave' }).locator('input[type="checkbox"]');
        this.aktivitet = page.getByRole('treeitem', { name: 'Aktivitet' }).locator('input[type="checkbox"]');
        this.avdeling = page.getByRole('treeitem', { name: 'Avdeling' }).locator('input[type="checkbox"]');
        this.frieBaerere = page.getByRole('treeitem', { name: 'Frie bærere' }).locator('input[type="checkbox"]');
        this.kunder = page.getByRole('treeitem', { name: 'Kunder' }).locator('input[type="checkbox"]');
        this.leverandorer = page.getByRole('treeitem', { name: 'Leverandører' }).locator('input[type="checkbox"]');
        this.varer = page.getByRole('treeitem', { name: 'Varer' }).locator('input[type="checkbox"]');
        this.rapportoppsett = page.locator('#reportConfig');
       
    }
}