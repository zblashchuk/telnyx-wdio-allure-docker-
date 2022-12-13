   
  const { config } = require("./wdio.conf");

  const chromeConfig = {
      ...config,
      services: [['selenium-standalone', {chrome: 'latest'}]],
      capabilities: [{
          maxInstances: 2,
          browserName: "chrome",
          acceptInsecureCerts: true,
          'goog:chromeOptions': {
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
  
  exports.config = chromeConfig;
    