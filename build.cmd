@echo off

del build\*.* /Q
copy src\*.js build /Y
copy README.md build /Y
copy package.json build /Y

node .\node_modules\webpack\bin\webpack.js --optimize-minimize --mode production