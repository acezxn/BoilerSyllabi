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
            print(gpa.replace(" ", ""))
            
            chart_block = await row.querySelector('div[class="col-sm-8 col-md-7 col-7"]')
            await chart_block.hover()

            await page.waitForSelector('div[class="v-data-table__wrapper"]')
            table = await page.querySelector('div[class="v-data-table__wrapper"] table')

            print(len(await table.querySelectorAll('th[class="text-center"]')))

            for grade in await table.querySelectorAll('th[class="text-center"]'):
                tmp = await page.evaluate('(element) => element.textContent', grade)
                print(tmp.replace(' ', ''))

            for percentage in await table.querySelectorAll('td[class="text-center"]'):
                tmp = await page.evaluate('(element) => element.textContent', percentage)   
                print(tmp.replace(' ', '').replace('%', ''))
            
            await browser.close()
            return 0

    await browser.close()
    return -1

asyncio.run(scraper(sys.argv[1], sys.argv[2], sys.argv[3]))