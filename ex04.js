module.exports = function capitalize(str = '', restToLoweropt = false){
  const lowerCase = require('./ex01.js')
  const upperCase = require('./ex02.js')
  if (restToLoweropt === true) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }
}
