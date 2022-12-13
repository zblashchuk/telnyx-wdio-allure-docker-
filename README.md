# telnyx-wdio-allure-docker-
Clone this repository by using command in "Git":
git clone https://github.com/zblashchuk/telnyx-wdio-allure-docker-
Install all requirement packages by using command:
npm install
Run tests on Google Chrome, Mozilla Firefox, or Docker:
# Run on Google Chrome
npm run wdio                                                         

# Run on Mozilla Firefox
npm run test:firefox

# Run on Microsoft Edge
npm run test:edge

# Run on Docker
npm run test:docker

Generate and open Allure HTML report:
npm run allure:report