# 21Done application testing using cypress and cucumber (Gherkin syntax) -RunBook

The test was conducted on web browser ( Chrome v91  and Electron v89)

## Pre-Condition 
Install node.js and npm on the system
* Windows https://phoenixnap.com/kb/install-node-js-npm-on-windows
* Mac https://www.newline.co/@Adele/how-to-install-nodejs-and-npm-on-macos--22782681
* Linux(ubantu) https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/

## Tech Stack 
- javaScript 
- cypress
- cypress-cucumber-preprocessor 

## UseCase which is  automated 
1. Become a Patner


## Setup

* Must have NodeJS and NPM installed (https://nodejs.org/en/)
* Install dependencies by running `npm install`

## Running Tests

* To run all  or  indiviual tests, run `npm run cy:open` 
* To run individual tests from command prompt , run `npm run cy:tests --glob 'cypress/integration/**/login.feature'`

## Enhancement
  * Integration with CI tool i.e. Jenkins
  * Element identification when application is in DE Language
  * Alternative way to find elemnet if could not be located.
