import { test, expect } from '@playwright/test';
import { MenuPicker } from '../Helpers/TopMenuHelpers/menuPicker';
import { Login } from '../Helpers/login';
import { TopMenu } from '../POM/TopMenu';
import { CompanyPicker } from '../Helpers/TopMenuHelpers/companyPicker';
import { Instillinger } from '../POM/Menu/Instillinger/Instillinger';
import { OpprettNyttFirma } from '../POM/Menu/Instillinger/NyttFirma/opprettNyttFirma';
import { Firmaer } from '../POM/Menu/Instillinger/Firmaer';

test.beforeEach(async ({page}) => {
  const login = new Login(page);
  await login.login();
});

test('Create company', async ({page}) => {
  const menuPicker = new MenuPicker(page);
  const companyPicker = new CompanyPicker(page);
  const instillinger = new Instillinger(page);
  const opprettNyttFirma = new OpprettNyttFirma(page);
  const firmaer = new Firmaer(page);

  await test.step('Navigate to settings tab', async () => {
    await menuPicker.menuPicker('Innstillinger');
  })

  await test.step('choose company', async () => {
    await companyPicker.companyPicker('HENFIL2');
  })

  await test.step('Navigate to company creation', async () => {
    await page.waitForTimeout(1000);
    await page.waitForSelector('#FirmaerGoTo');
    await instillinger.firmaer.click();
    await page.waitForSelector('#clientsGrid > div.k-pager-wrap.k-grid-pager.k-widget.k-floatwrap > div > ul > li:nth-child(1) > span');
    //await page.waitForTimeout(3000);
    await firmaer.nyttFirma.click();
    await page.waitForSelector('#BRregisterAutoSearch');
    expect(await page.locator('body > div.ddtitle > h1').textContent()).toBe('Opprett nytt firma');
  })
  
  await test.step('Begin company creation', async() => {
    await opprettNyttFirma.finnesIRegister.check();
    await opprettNyttFirma.startOpprettelseNyttFirma.click();
  })

  await test.step('Step 1: Firma', async () => {
    await opprettNyttFirma.firmaNavn.fill('testfirma');
    await opprettNyttFirma.firmaInitialer.fill('tft');
    await opprettNyttFirma.adresse.fill('firmavegen');
    await opprettNyttFirma.postnummer.fill('7070');
    await opprettNyttFirma.poststed.fill('der');
    await opprettNyttFirma.epost.fill('epost@asd.no');
    await opprettNyttFirma.orgNr.fill('659642247')
    await opprettNyttFirma.mvaPliktig.click();
    await opprettNyttFirma.regnskapstype.click();

    await page.getByRole('option', { name: 'Forretning' }).click();
    await opprettNyttFirma.foretaksform.click();
    await page.getByRole('option', {name: 'Borettslag'}).click();

    await opprettNyttFirma.nesteKnapp.click();
    
  })

  await test.step('Step2: Kopier fra firma', async () => {
    await opprettNyttFirma.standardfirma.click();
    await opprettNyttFirma.baerere.click();
    await opprettNyttFirma.baerereUtvidet.click();
    await opprettNyttFirma.oppgave.click();
    await opprettNyttFirma.aktivitet.click();
    await opprettNyttFirma.avdeling.click();
    await opprettNyttFirma.frieBaerere.click();
    await opprettNyttFirma.kunder.click();

    await opprettNyttFirma.nesteKnapp.click();
  })
})
