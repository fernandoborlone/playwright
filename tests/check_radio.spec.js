/**
 * Arquivo: check_radio.spec.js
 * Data: 10/10/2021
 * Descrição: Interagir com elementos do tipo checkBoxes e radioButtons
 * Autor: Fernando Borlone
 * LinkedIn: <https://www.linkedin.com/in/fernandoborlone/>
 */

const { test, expect } = require('@playwright/test')

test.describe('Interagir com elementos do tipo checkBox e radioButton', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('/2XSuwCW')
    })

    test('Deve selecionar o radionButton ticket vip', async ({ page }) => {

        await page.locator('#vip').check()

        // verifica que o texto é alterado após o check no elemento
        await expect(page.locator('fieldset p')).toContainText('wish to buy 1 VIP ticket')
    })

    test('Deve selecionar o checkBox Social Media', async ({ page }) => {

        const checks = await page.$$('fieldset div [type="checkbox"]')
        await checks[2].check()

        // verifica que a opção 'Social Media' está marcada
        await expect(page.locator('#social-media')).toBeChecked()
    })
})

