import { test, expect } from '@playwright/test';
import { MenuPicker } from '../Helpers/TopMenuHelpers/menuPicker';
import { Login } from '../Helpers/login';
import { Home } from '../POM/Home';
import { TopMenu } from '../POM/TopMenu';
import { CompanyPicker } from '../Helpers/TopMenuHelpers/companyPicker';
import { Instillinger } from '../POM/Menu/Instillinger';

test.beforeEach(async ({page}) => {
  const login = new Login(page);
  await login.login();
});

test('Pick favorite', async ({page}) => {
  const menuPicker = new MenuPicker(page);
  const companyPicker = new CompanyPicker(page);
  const topMenu = new TopMenu(page);
  const instillinger = new Instillinger(page);

  await test.step('Navigate to settings tab', async () => {
    await menuPicker.menuPicker('Innstillinger');
  })

  await test.step('choose company', async () => {
    await companyPicker.companyPicker('HENFIL2');
  })

  await test.step('Use settings as favourite', async () => {
    if(await topMenu.topMenuFavourite.isVisible()){
      await instillinger.favouriteStar.click();
      await page.waitForTimeout(200);
    }
    await instillinger.favouriteStar.click();
    await page.waitForTimeout(200);
    await expect(topMenu.topMenuFavourite).toBeVisible();

  })

  await test.step('Remove favourite', async () => {
    await instillinger.favouriteStar.click();
    await page.waitForTimeout(200);
    await expect(topMenu.topMenuFavourite).not.toBeVisible();
  })
})
