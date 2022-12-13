const { config } = require("./wdio.conf");

const edgeConfig = {
    ...config,
    services: [['selenium-standalone', {chromiumedge: 'latest'}]],
    capabilities: [{
        maxInstances: 2,
        browserName: "MicrosoftEdge",
        acceptInsecureCerts: true,
        'ms:edgeOptions': {
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

exports.config = edgeConfig;
