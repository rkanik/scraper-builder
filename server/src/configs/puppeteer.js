'use strict'
const PROD = process.env.NODE_ENV === 'production'

const config = {
    headless: PROD ? true : false,
    args: PROD ? [] : ["--no-sandbox"],
}
if (!PROD) config.executablePath = process.env.CHROME_PATH

exports.LAUNCH_CONFIG = config

exports.WAIT_UTIL_IDLE = {
    waitUntil: 'networkidle2'
}