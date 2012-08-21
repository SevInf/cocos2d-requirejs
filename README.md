# Cocos2d-html5 + require.js template project


## Purpose
The goal of this project is to integrate [cocos2d-html5](https://github.com/cocos2d/cocos2d-html5) and [requirejs](http://requirejs.org/).
RequireJS has the following advantages comparing to cocos's built in js loader:

* lazy load of a modules at run time. Dependencies of each modules will be resolved automatically, developer doesn't need to list script files in right order.
* built in optimization tool that allows to combine all modules in one single js file.

## Bundled verions of a library

Currently the versions are following:

* cocos2d-html5 0.5.0-alpha2;
* requirejs 2.0.6
* [domReady plugin](http://requirejs.org/docs/download.html#domReady) 2.0.1

## Additional helper scripts

Project also contains two helper utilities:

* server.js - runs static HTTP server on 8888 port. Requires [NodeJS](http://nodejs.org/);
* build.sh - optimizes all JS and CSS files. Ready for deployment version of the app will be saved at `./build` directory.

