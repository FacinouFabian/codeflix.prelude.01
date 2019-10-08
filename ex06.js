module.exports = function kebabCase(str = ''){
  const lowerCase = require('./ex01.js')
  const upperCase = require('./ex02.js')
  // if the text contains space
  if(str.indexOf(' ')){
    return str.replace(/ /g, '-')
  }
  // if the text contains capital characters
  if (str.toUpperCase()){

  }
}
