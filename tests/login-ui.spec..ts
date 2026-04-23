import { test, expect } from '../fixtures/base.js'

test.describe('OrangeHRM Login UI Tests',()=>{
 test('verify title', async ({page})=>{
  await page.goto('/');
  await expect(page).toHaveTitle('OrangeHRM')
 }
)
 test('verify title', async ({page})=>{
  await page.goto('/');
  await expect(page.locator("xpath=//h5[text()='Lgin']")).toHaveText('Login')
 }
)


})