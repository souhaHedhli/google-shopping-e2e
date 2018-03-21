const { setWorldConstructor } = require('cucumber')
const baseFunctions = require('../../pageobject/baseFunctions')
const config = require('../../pageobject/config')
const baseElements = require('../../pageobject/baseElements')

function CustomFunctions () {
  this.baseFunctions = baseFunctions();
  this.config = config;
  this.baseElements = baseElements;
}


setWorldConstructor(CustomFunctions)
