function countSubstrings(str = '', substring){
  str = str.split(" ")
  size = str.length
  x = 0
  for (let i = 0; i < size; i++){
    if (str[i] === substring) {
      x++
    }
  }
  return x
}
