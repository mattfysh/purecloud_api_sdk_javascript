# Contributing
## Building the Documentation

1. Execute `jsdoc src -r -a all -d jsdoc` to generate the JSDoc documentation and put it in the `jsdoc` folder.
2. Copy the output from the `jsdoc` folder to the root of the `gh-pages` branch. This will publish the documentation to the github pages site.

## Building the Library

1. Execute `gulp`
2. Use `purecloud-api.js` from the `dist` folder

## Folders
- `dist` - destination directory for the built javascript
- `doc` - documentation folder
- `examples` - small example pages showing usage
- `src` - additional src files that will be merged with the generated files
- `templates` - mustache templates that are used to generate the code
- `tutorials` - markdown examples that explain core concepts.  These get merged into the generated doc.
- `spec` - unit and integration tests

## Running the tests
There are a series of integrations tests built using Phantom.js and are located in the `spec/phantomjs` folder.
The `authenticationModule` is used to script the login using OAuth in Phantom.js.
`pageHandlerMondule` is a simple module that handles a lot of the heavy lifting of operating a Phantom.js script, this leaves the actual page test scripts to be as simple as possible.

When creating a new integration test for an example, start off with this basic template, replace the url parameter and fill out the `validationCallback` function with your asserts and checks.

~~~js
var url = 'http://localhost:8085/user_me.html';

function validationCallback() {
  //this method is called in the context of the page and should return true if the page is valid
}

var pageHandler = require('./pageHandlerModule');

pageHandler.execute(url, validationCallback);
~~~
