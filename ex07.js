module.exports = function snakeCase(str = ""){
  // case 1
  if (str.match(/-/)){
    str = str.replace(/-/g,"_")
    str = str.replace(/(^_|_$)/g, "")
  }
  // case 2
  else if (str.match(/[A-Z]/g)){
    str = str.replace(/([A-Z])/g," $1")
    str = str.replace(/ /g, "_")
    str = str.replace(/_/, "")
  }
  // case 3
  else{
    str = str.replace(/ /g,"_")
  }
  str = str.toLowerCase()
  return str
}
