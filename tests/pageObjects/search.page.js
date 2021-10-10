class SearchPage {

  constructor(page) {
    this.page = page
    this.searchField = page.locator('[aria-label="Enter your search term"]')
  }
  async visitaPagina(url) {
    await this.page.goto(url);
  }
  async search(text) {
    await this.searchField.type(text)
    await this.searchField.press('Enter')
  }
}

module.exports = SearchPage