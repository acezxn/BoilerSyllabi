import asyncio
from pyppeteer import launch
import sys

async def scraper(firstname, lastname, classname):
    browser =await launch(
      executablePath='C:/Program Files/Google/Chrome/Application/chrome.exe',
      headless=True)
    page = await browser.newPage()
    await page.goto('https://www.boilergrades.com/', {'waitUntil': 'networkidle0'})

    await page.waitForSelector('input[id="input-7"]')
    await page.type('input[id="input-7"]', lastname + ', ' + firstname)

    await page.waitForSelector('div.v-menu__content')
    await page.click('div.v-menu__content')

    await page.waitForSelector('div[class="row align-center px-1 no-gutters"]')
    rows = await page.querySelectorAll('div[class="row align-center px-1 no-gutters"]')

    for row in rows:
        name_block = await row.querySelector('div[class="col-sm-3 col-md-2 col-4"]')
        class_name = await page.evaluate('(element) => element.textContent', name_block)
        
        if (class_name.find(classname)):
            gpa_block = await row.querySelector('div[class="d-flex justify-end col-md-1 col-1"]')
            gpa = await page.evaluate('(element) => element.textContent', gpa_block)
            await browser.close()
            print(gpa)
            return 0

    await browser.close()
    return -1

asyncio.run(scraper(sys.argv[1], sys.argv[2], sys.argv[3]))