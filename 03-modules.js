// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./04-names')
const sayHello = require('./05-utils')
const data = require('./06-alternative-flavor')
require('./07-mind-grenade')
console.log(data);
sayHello('Susan')
sayHello(names.john)
sayHello(names.peter)
