const lowerCase = require('./ex01.js')
const upperCase = require('./ex02.js')
const length = require('./ex03.js')
const capitalize = require('./ex04.js')
const decapitalize = require('./ex05.js')
const kebabCase = require('./ex06.js')
const snakeCase = require('./ex07.js')
const charAt = require('./ex09.js')
const first = require('./ex10.js')
const last = require('./ex11.js')
const substr = require('./ex12.js')
const slice = require('./ex13.js')
const count = require('./ex14.js')
const countSubstrings = require('./ex15.js')
const countWords = require('./ex16')
const indexOf = require('./ex17.js')
const lastIndexOf = require('./ex18.js')

console.log(lowerCase("Chopper"))
console.log(lowerCase("TONY TONY"))

console.log(upperCase("Chopper"))
console.log(upperCase("tony tony"))

console.log("LENGTH")
console.log(length("Chopper"))

console.log("capitalize")
console.log(capitalize("one code", true))

console.log("decapitalize")
console.log(decapitalize("One CODE"))

// console.log(kebabcase("love one code"))
// console.log(kebabcase("LoveOneCode"))
// console.log(kebabcase("-Love-One-Code-"))

console.log(snakeCase("gold d roger"))
console.log(snakeCase("GoldDRoger"))
console.log(snakeCase("-Gold-D-Roger-"))

console.log(charAt('Oui',1))

console.log(first("test", 3))

console.log(last("test"))

console.log(substr('tony tony chopper', 10))
console.log(substr('Ch0pper', 2, 4))

console.log(slice('chopper', 1))
console.log(slice('chopper', -4))
console.log(slice('chopper', 1, 4))

console.log(count('chopper'))

console.log(countSubstrings('tony tony', 'tony'))

console.log(countWords('Tony Tony Chopper'))
console.log(countWords('TonyTonyChopperTonyTonyChopper'))
console.log(countWords('Tony - TonyChopper - TonyTonyChopper'))

console.log(indexOf('chOpper', 'O'))
console.log(indexOf('chOpper', 'o'))

console.log(lastIndexOf('chOpper', 'p'))
console.log(lastIndexOf('chOpper', 'o'))
