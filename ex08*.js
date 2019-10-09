function swapCase(str = ""){
  isUpperCase = false
  isLowerCase = false
  newStr = ""
  let i = ""
  for (i in str){
    if (i == i.toLowerCase()){
      isLowerCase = true
    }else{
      isUpperCase = true
    }
    return `${isLowerCase} ${isUpperCase}`
  }
}

console.log(swapCase("One Code"))
