
# Contributing
## Building the Documentation

1. Execute ````jsdoc src -r -a all -d jsdoc```` to generate the JSDoc documentation and put it in the _jsdoc_ folder.
2. Copy the output from the _jsdoc_ folder to the root of the ````gh-pages```` branch. This will publish the documentation to the github pages site.

## Building the Library

1. Execute ````gulp````
2. Use ````pure-cloud-api.js```` from the _dist_ folder


## Folders
dist - destination directory for the built javascript
doc - documentation folder
examples - small example pages showing usage
src - additional src files that will be merged with the generated files
templates - mustache templates that are used to generate the code
tutorials - markdown examples that explain core concepts.  These get merged into the generated doc. 
