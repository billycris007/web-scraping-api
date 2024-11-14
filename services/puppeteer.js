const puppeteer = require('puppeteer')

class Scraper {
    async scrapeUrl(url) {
        try {
            if(!url){
                return 'Url should not be empty';
            }

            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.setViewport({ width: 1280, height: 720 });
            await page.goto(url, { waitUntil: 'networkidle0' });
            const description = await page.$eval("head > meta[name='description']", element => element.content)
            await browser.close();

            return description;

        } catch (e) {
            return e;
        }
    }
}

module.exports = new Scraper();