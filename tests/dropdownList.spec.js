/**
 * Arquivo: dropdownList.spec.js
 * Data: 28/09/2021
 * Descrição: Interagindo com elementos do tipo select
 * Autor: Fernando Borlone
 * LinkedIn: <https://www.linkedin.com/in/fernandoborlone/>
 */

const { test, expect } = require('@playwright/test')

test.describe('Lista de opções', () => {

    test('Deve selecionar 2 tickets via label', async ({ page }) => {

        // navegar até a página
        await page.goto('/2XSuwCW')

        // label
        await page.selectOption('#ticket-quantity', { label: '2' })

        // verifica que o elemento contem o texto 'tickets', visto que foi selecionado opções diferentes de '1'
        await expect(page.locator('fieldset p')).toContainText('Admission tickets')
    })

    test('Deve selecionar 1 ticket via index', async ({ page }) => {

        // navegar até a página
        await page.goto('/2XSuwCW')

        // index
        await page.selectOption('#ticket-quantity', { index: 0 })

        // verifica que o elemento contem o texto 'tickets', visto que foi selecionado opções diferentes de '1'
        await expect(page.locator('fieldset p')).toContainText('Admission ticket')
    })

    test('Deve selecionar a opção 2 via label', async ({ page }) => {

        // navega para a página
        await page.goto('https://the-internet.herokuapp.com/dropdown')

        // label
        await page.selectOption('#dropdown', { label: 'Option 2' })
    })

    test('Deve selecionar a opção 2 via value', async ({ page }) => {

        // navega para a página
        await page.goto('https://the-internet.herokuapp.com/dropdown')

        // value
        await page.selectOption('#dropdown', { value: '2' })
    })

    test('Deve selecionar a opção 1 via index', async ({ page }) => {

        // navega para a página
        await page.goto('https://the-internet.herokuapp.com/dropdown')

        // index
        await page.selectOption('#dropdown', { index: 1 })

    })
})