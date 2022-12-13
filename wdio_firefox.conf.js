const { config } = require("./wdio.conf");

const firefoxConfig = {
    ...config,
    services: [['selenium-standalone', {firefox: 'latest'}]],
    capabilities: [{
        maxInstances: 2,
        browserName: "firefox",
        acceptInsecureCerts: true,
        'moz:firefoxOptions': {
            args: [
                '--no-sandbox',
                '--disable-infobars',
                '--headless',
                '--disable-gpu',
                '--window-size=1440,735'
            ],
        }
    }],
};

exports.config = firefoxConfig;