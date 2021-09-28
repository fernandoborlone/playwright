
/** @type {import('@playwright/test').PlaywrightTestConfig} */

const config = {
    reporter: [
      ['./my-awesome-reporter.js',],
      ['list'],
      ['junit', { outputFile: 'results.xml' }],
      ['json', {  outputFile: 'test-results.json' }]
    ],
    use: {
      headless: false,
      viewport: { width: 1280, height: 720 },
      ignoreHTTPSErrors: true,
      video: 'on',
      baseURL: 'https://www.argoit.com.br/',
      browserName: 'firefox',
      screenshot: 'on',
  
    }
  }
  
  module.exports = config;