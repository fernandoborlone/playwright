/**
 * Arquivo: preencherFormulario.spec.js
 * Data: 28/09/2021
 * Descrição: Interagir com campos do tipo texto
 * Autor: Fernando Borlone
 * LinkedIn: <https://www.linkedin.com/in/fernandoborlone/>
 */

const { test, expect } = require('@playwright/test')

const firstName = 'Fernando'
const lastName = 'Borlone'
const fullName = `${firstName} ${lastName}`
const email = 'fernandoborlone@gmail.com'

test.describe('Preencher formulário', () => {
    test('Digitando em campos de texto', async ({ page }) => {

      await page.goto('https://bit.ly/2XSuwCW')

      await page.type('#first-name', firstName)
      await page.type('#last-name', lastName)
      await page.type('#email', email)
      await page.fill('#requests', 'Comida Vegetariana')
      await page.fill('.signature', `${fullName}`)
    })
})
