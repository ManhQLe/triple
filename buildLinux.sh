#!/bin/bash
# Building 

rm build/*.* -rf
cp src/*.js build -rf
cp README.md build -rf
cp package.json build -rf

node ./node_modules/webpack/bin/webpack.js --optimize-minimize --mode production