#!/bin/bash
DIR=$(dirname $0)

node "$DIR/node_modules/requirejs/bin/r.js" -o "$DIR/app.build.js"
