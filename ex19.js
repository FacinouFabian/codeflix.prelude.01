// function test(str = '', indexToInsert, RemoveElement, text){
//     str.splice(indexToInsert, RemoveElement, text)
//     return str
// }
// console.log(test('tst', 1, 0, 'e'))
str = 'tst'
str = str.replace(/([a-z])/g," $1")
str = str.replace(/(^' ')/g, "")
console.log(str.split(/ /g))