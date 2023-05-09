// @ts-check
const { test, expect } = require('@playwright/test');
import { Login } from '../POM/login';




test('has url', async ({ page }) => {
  const login = new Login(page);
  await login.login('29998mikkva_du','ImponerendeFredag62');
  await expect(page).toHaveURL('https://rf-systest.duett.no/Duett/Core/FrontEnd/WebApplications/Dashboard/Home');
});
