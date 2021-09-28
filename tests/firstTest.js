/**
 * Arquivo: firstTest.spec.js
 * Data: 27/09/2021
 * Descrição: Primeiro teste com playwright
 * Autor: Fernando Borlone
 * LinkedIn: <https://www.linkedin.com/in/fernandoborlone/>
 */

const { test, expect } = require('@playwright/test')

test('Primeiro teste com playwright', async ({ page }) => {
  
  
  await page.goto('https://playwright.dev/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/)

  // Expect an attribute "to be strictly equal" to the value.
  await expect(page.locator('.getStarted_1iQB').first()).toHaveAttribute('href', '/docs/intro')

  // Expect an element "to be visible".
  await expect(page.locator('text=Learn more').first()).toBeVisible()

  await page.click('text=Get Started');
  // Expect some text to be visible on the page.
  await expect(page.locator('text=System requirements').first()).toBeVisible()

})