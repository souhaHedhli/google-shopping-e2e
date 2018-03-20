const { Given, When, Then } = require('cucumber')
var assert = chai.assert;

Given(/^I am on the google shopping page$/, function() {
 this.baseFunctions.driver.visit(homeUrl);
})
And(/^I search for "([^"]*)"$/, async function (arg) {
   this.baseFunctions.driver.writeByName('q', arg);
   const searchBtn = await this.baseFunctions.driver.findById('gbqfb');
   searchBtn.click();
})
Then(/^I get "([^"]*)" results$/, async function (arg) {
    const elements = await this.baseFunctions.driver.findAll('.sh-dlr__list-result .eIuuYe a');
    elements.map(function (element) {
      assert.include(await element.getText(), arg);
    })
})
When(/^I click on up to \$40$/, async function () {
    const radio = await this.baseFunctions.driver.find('.sh-dr__g span.JcqPK');
    radio.click();
})
Then(/^None of the results are more than \$40$/, async function () {
  const prices = await this.baseFunctions.driver.findAll('.sh-dlr__list-result .ZGFjDb .mQ35Be span.O8U6h');
    prices.map(function (price) {
      assert.isAtMost(price, '$40');
    })
})

When(/^I click on books$/, async function () {
  const more = await this.baseFunctions.driver.find('g-header-menu');
  more.click();
  const books = await this.baseFunctions.driver.findByLinkText('Books');
  books.click();
})

Then(/^the results are all books$/, async function () {
  const parentElement = await this.baseFunctions.driver.findAll('.bkWMgd')[0];
  const childElements = await this.baseFunctions.driver.findAllInElement(parentElement, 'cite');
  childElements.map(function (childElement) {
    assert.include(await childElement.getText(), 'https://books.google');
  })
})

When(/^I click on BritishCornerShop\.co\.uk$/, async function () {
  const btn = await this.baseFunctions.driver.find('[title="BritishCornerShop.co.uk"]');
  btn.click();
})
Then(/^the results are for BritishCornerShop\.co\.uk$/, async function () {
  const elements = await this.baseFunctions.driver.findAll('.mQ35Be div:not(.vq3ore)');
  elements.map( function(element) {
    assert.include( await element.getText(), 'from BritishCornerShop.co.uk');
  })
})

When(/^I click more$/, async function () {
  const moreBtn = await this.baseFunctions.driver.find('.ZI2vDe');
  moreBtn.click();
})
And(/^I click on Wayfair\.ca$/, async function (arg) {
  const btn = await this.baseFunctions.driver.find('[title="Wayfair.ca"]');
  btn.click();
})
Then(/^the results are for Wayfair\.ca$/, async function () {
  const elements = await this.baseFunctions.driver.findAll('.mQ35Be div:not(.vq3ore)');
  elements.map( function(element) {
    assert.include( await element.getText(), 'Wayfair.ca');
  })
})

When(/^I enter \$20$/, async function () {
  this.baseFunctions.driver.writeByName('lower', '20');
})

And(/^I enter \$30$/, async function () {
  this.baseFunctions.driver.writeByName('upper', '30');
})

And(/^I click go$/, async function () {
  const btn = await this.baseFunctions.driver.find('.LfUe1b');
  btn.click();
})

Then(/^the results are all between \$20 and \$30$/, async function () {
  const elements = await this.baseFunctions.driver.findAll('.mQ35Be div span');
  elements.map(function (element) {
    const price = await parseFloat(element.getText().replace(',', '.'));
    assert.isAtLeast(price, 20)
    assert.isAtMost(price, 30);
  })
})
