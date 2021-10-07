const { test, expect } = require('@playwright/test')
const SearchPage = require('./pageObjects/search.page.js')

test.describe('Search', () => {

    test.beforeEach(async ({ page }) => {

        const searchPage = new SearchPage(page);

        // acessa a página
        await searchPage.visitaPagina('https://bing.com')
    })

    test('Deve pesquisar no bing', async ({ page }) => {

        const searchPage = new SearchPage(page);

        await searchPage.search('Playwright.dev')

        // verificações
        await expect(page.locator('#b_results')).toBeVisible()
        await expect(page.locator('li.b_algo')).toHaveCount(10)
    })

})


