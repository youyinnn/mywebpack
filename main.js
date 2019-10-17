// CommonJS规范导入CSS模块
require('./main.css')
require('./minor.css')

// CommonJS规范导入show.js
const show = require('./show.js')
const minor = require('./minor.js')

show('Webpack')
minor('Minor')