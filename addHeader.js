/**
 * add headers, you can edit headers in header.js
 */
const fs = require('fs')
const app = fs.readFileSync('./dist/app.vue.js', 'utf8')
const header = fs.readFileSync('./header.js', 'utf8')
fs.writeFileSync('./dist/app.vue.js', header + '\n' + app)
console.log('build complete!')
