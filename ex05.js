module.exports = function decapitalize(str = ''){
  const lowerCase = require('./ex01.js')
  const upperCase = require('./ex02.js')
  if (str.charAt(0).toUpperCase()) {
    return str.charAt(0).toLowerCase() + str.slice(1).toLowerCase()
  }
}
