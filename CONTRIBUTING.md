
# Contributing
## Building the Documentation

1. Execute ````jsdoc src -r -a all -d jsdoc```` to generate the JSDoc documentation and put it in the _jsdoc_ folder.
2. Copy the output from the _jsdoc_ folder to the root of the ````gh-pages```` branch. This will publish the documentation to the github pages site.

## Building the Library

1. Execute ````gulp````
2. Use ````purecloud-api.js```` from the _dist_ folder

## Folders
dist - destination directory for the built javascript
doc - documentation folder
examples - small example pages showing usage
src - additional src files that will be merged with the generated files
templates - mustache templates that are used to generate the code
tutorials - markdown examples that explain core concepts.  These get merged into the generated doc.
spec - unit and integration tests

## Running the tests
There are a series of integrations tests built using phantomjs and are located in the spec/phantomjs folder.  The authenticationModule is used to script the login using OAuth in phantomjs.  pageHandlerMondule is a simple module that handles a lot of the heavy lifting of operating a phantomjs script, this leaves the actual page test scripts to be as simple as possible.

When creating a new integration test for an example, start off with this basic template, replace the url parameter and fill out the validationCallback function with your asserts and checks.

```
var url = 'http://localhost:8085/user_me.html';

//this method is called in the context of the page and should return true if the page is valid
function validationCallback(){

}

var pageHandler = require('./pageHandlerModule');

pageHandler.execute(url, validationCallback);

```
