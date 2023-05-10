// @ts-check
const { test, expect } = require('@playwright/test');
import { Login } from '../POM/login';
import { Home } from '../POM/Home';

test.beforeEach(async ({page}) => {
  const login = new Login(page);
  await login.login('29998mikkva_du','ImponerendeFredag62');
});

test('has url', async ({ page }) => {
  
  await expect(page).toHaveURL('https://rf-systest.duett.no/Duett/Core/FrontEnd/WebApplications/Dashboard/Home');
});

test('click masse', async ({page}) => {
  const home = new Home(page);
  await home.bankTrans.click();
  await home.attestasjon.click();
  await home.autoTrans.click();
  await home.lonn.click();
});
