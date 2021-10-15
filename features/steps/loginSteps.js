const {When, Then, Given,} = require ('cucumber');
const {Builder, By, until} = require ('selenium-webdriver');
require('chromedriver');
const assert = require ('assert');

Given ('I am on the {String} page', async function (string) {
    this.driver = new Builder()
    .forBrowser('chrome')
    .build();
    await this.driver.get(`https://the-internet.herokuapp.com/${string}`); // para pruebas -agregar el local host 2 |ionic|
});

When ('I login with {string} and {string}', function (string, string2){
    this.driver,findElement(By.id("username")),senKeys(string);
    this.driver,findElement(By.id("password")),senKeys(string);
    this.driver.findElement(By.className('radius')).click();
    return 'pending';
});

Then ('I should see a message saying {string}', async function (String){
    await this.driver.wait(until.elementLocated(By.id('flash')));
    let message = await this.driver.findElement(By.id('flash')).getText();
    assert.equal(string, message,substring(0, message.indexOf("!") + 1));
});