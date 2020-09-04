'use strict'
const puppeteer = require('puppeteer')
const { 
    LAUNCH_CONFIG, 
    WAIT_UTIL_IDLE
} = require('../configs/puppeteer')

class Scraper {

    constructor() {

    }

    async launch(url) {
        this.browser = await puppeteer.launch(LAUNCH_CONFIG)
        this.page = await this.browser.newPage();
        url && await this.page.goto(url, WAIT_UTIL_IDLE)
        return { page: this.page, browser: this.browser }
    }

    async goto(url) {
        await this.page.goto(url, WAIT_UTIL_IDLE)
        return this.page
    }

    async close() {
        await this.browser.close()
    }
}

module.exports = Scraper