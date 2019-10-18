// CommonJS规范导入CSS模块
require('../css/main.css')
require('../css/minor.css')

// CommonJS规范导入show.js
const show = require('./show.js')
const minor = require('./minor.js')

show('Webpack')
minor('Minor')