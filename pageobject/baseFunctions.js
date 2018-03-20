const webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until,
  chrome = require('selenium-webdriver/chrome'),
  findTimeout = 2000;

module.exports = () => {
  return {

    driver: new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build(),

    visit: function(url) {
      return this.driver.get(url);
    },

    quit: function() {
      return this.driver.quit();
    },

    findById: function(el) {
      return this.driver.wait(until.elementLocated(By.id(el)), findTimeout)
    },

    find: function(el) {
      return this.driver.wait(until.elementLocated(By.css(el)), findTimeout)
    },

    findByName: function(el) {
      return this.driver.wait(until.elementLocated(By.name(el)), findTimeout)
    },

    findAll: function(el) {
      return this.driver.wait(until.elementsLocated(By.css(el)), findTimeout)
    },

    findAllInElement: function (elementParent, elementChild){
      return elementParent.findElements(By.css(elementChild))
    },

    writeById: async function(el, txt) {
      const element = await this.findById(el);
      return element.sendKeys(txt);
    },

    writeByName: async function(el, txt) {
      const element = await this.findByName(el);
      return element.sendKeys(txt);
    },

    write: async function(el, txt) {
      const element = await this.find(el);
      return element.sendKeys(txt);
    },

    findByPartialLink: async function(el) {
      return this.driver.findElement(By.partialLinkText(el));
    },

    findByLinkText: async function(el) {
      return this.driver.findElement(By.linkText(el));
    }

  }
}
