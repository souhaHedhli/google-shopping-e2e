const { setWorldConstructor } = require('cucumber')
const baseFunctions = require('../../pageobject/baseFunctions')

function CustomFunctions () {
  this.baseFunctions = baseFunctions()
}


setWorldConstructor(CustomFunctions)
