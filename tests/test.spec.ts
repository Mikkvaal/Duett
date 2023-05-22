import { test, expect } from '@playwright/test';
import { MenuPicker } from '../Helpers/TopMenuHelpers/menuPicker';
import { Login } from '../Helpers/login';
import { Home } from '../POM/Home';
import { TopMenu } from '../POM/TopMenu';
import { CompanyPicker } from '../Helpers/TopMenuHelpers/companyPicker';

test.beforeEach(async ({page}) => {
  const login = new Login(page);
  await login.login('29998mikkva_du','ImponerendeFredag62');
});

test('has url', async ({ page }) => {

  const menuPicker = new MenuPicker(page);
  const companyPicker = new CompanyPicker(page);

  await menuPicker.menuPicker('Innstillinger');

  await companyPicker.companyPicker('HENFIL2');

  
  
});

