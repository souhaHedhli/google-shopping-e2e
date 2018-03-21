const { Given, When, Then, After } = require('cucumber');
const { assert } = require('chai');
const config = require('../../pageobject/config')

After(function () {
  this.baseFunctions.quit();
})

Given(/^I am on the google shopping page$/, function() {
  this.baseFunctions.visit(config.homeUrl);
})
When(/^I search for "([^"]*)"$/, async function (arg) {
  this.baseFunctions.writeByName('q', arg);
   const searchBtn = await this.baseFunctions.findById('gbqfb');
   searchBtn.click();
})
Then(/^I get "([^"]*)" results$/, async function (arg) {
  const elements = await this.baseFunctions.findAll('.sh-dlr__list-result .eIuuYe a');
  elements.map(async function (element) {
    assert.include(await element.getText(), arg);
    })
})
When(/^I click on up to \$25$/, async function () {
  const radio = await this.baseFunctions.find('.sh-dr__g span.JcqPK');
  radio.click();
})
Then(/^None of the results are more than \$25$/, async function () {
  const prices = await this.baseFunctions.findAll('.sh-dlr__list-result .ZGFjDb .mQ35Be span.O8U6h');
    prices.map(function (price) {
      assert.isAtMost(price, '$25');
    })
})

When(/^I click on books$/, async function () {
  const more = await this.baseFunctions.find('g-header-menu');
  more.click();
  const books = await this.baseFunctions.findByLinkText('Books');
  books.click();
})

Then(/^the results are all books$/, async function () {
  const parentElement = await this.baseFunctions.findAll('.bkWMgd')[0];
  const childElements = await this.baseFunctions.findAllInElement(parentElement, 'cite');
  childElements.map(async function (childElement) {
    assert.include(await childElement.getText(), 'https://books.google');
  })
})

When(/^I click on BritishCornerShop\.co\.uk$/, async function () {
  const btn = await this.baseFunctions.find('[title="BritishCornerShop.co.uk"]');
  btn.click();
})
Then(/^the results are for BritishCornerShop\.co\.uk$/, async function () {
  const elements = await this.baseFunctions.findAll('.mQ35Be div:not(.vq3ore)');
  elements.map(async function(element) {
    assert.include( await element.getText(), 'from BritishCornerShop.co.uk');
  })
})

When(/^I click more$/, async function () {
  const moreBtn = await this.baseFunctions.find('.ZI2vDe');
  moreBtn.click();
})
When(/^I click on Wayfair\.ca$/, async function (arg) {
  const btn = await this.baseFunctions.find('[title="Wayfair.ca"]');
  btn.click();
})
Then(/^the results are for Wayfair\.ca$/, async function () {
  const elements = await this.baseFunctions.findAll('.mQ35Be div:not(.vq3ore)');
  elements.map(async function(element) {
    assert.include( await element.getText(), 'Wayfair.ca');
  })
})

When(/^I enter \$20$/, async function () {
  this.baseFunctions.writeByName('lower', '20');
})

When(/^I enter \$30$/, async function () {
  this.baseFunctions.writeByName('upper', '30');
})

When(/^I click go$/, async function () {
  const btn = await this.baseFunctions.find('.LfUe1b');
  btn.click();
})

Then(/^the results are all between \$20 and \$30$/, async function () {
  const elements = await this.baseFunctions.findAll('.mQ35Be div span');
  elements.map(async function (element) {
    const price = await parseFloat(element.getText().replace(',', '.'));
    assert.isAtLeast(price, 20);
    assert.isAtMost(price, 30);
  })
})
