heroku buildpacks:add jontewks/puppeteer -a app-name

npm install --ignore-scripts

export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=false
npm config delete PUPPETEER_SKIP_CHROMIUM_DOWNLOAD
unset PUPPETEER_SKIP_CHROMIUM_DOWNLOAD

const Downloader = require('puppeteer/utils/ChromiumDownloader');
const {chromium_revision} = require('puppeteer/package.json').puppeteer;
const info = Downloader.revisionInfo(Downloader.currentPlatform(), chromium_revision);
console.log(info);

"config": {
        "PUPPETEER_SKIP_CHROMIUM_DOWNLOAD": true
    }