const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber')
const { chromium } = require('playwright')

BeforeAll(async () => {
  console.log('Launch Browser')
  global.browser = await chromium.launch({ headless: false })
})

AfterAll(async () => {
  console.log('Close Browser')
  await global.browser.close()
})

Before(async () => {
  console.log('create new context and page')
  global.context = await global.browser.newContext()
  global.page = await global.context.newPage()
})

After (async()=>{
    console.log("close context and page")
    await global.page.close();
    await global.context.close();

})
