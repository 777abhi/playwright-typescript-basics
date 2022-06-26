const { Given, When, Then } = require('@cucumber/cucumber')
const { LoginPage } = require('../page-object/LoginPage')

const loginPage = new LoginPage()

Given('I visit a login page', async function () {
  await loginPage.navigateToLoginScreen()
  //await page.goto('https://www.saucedemo.com/')
})

When('I fill the login form with valid credentials', async function () {
  await loginPage.submitLoginForm()

  //   await page.fill('#user-name', 'standard_user')
  //   await page.fill('#password', 'secret_sauce')
  //   await page.click('#login-button')
})

Then('I should see the home page', async function () {
  await loginPage.assertUserIsLoggedIn()
  //   await page.waitForSelector('.inventory_list')
})
