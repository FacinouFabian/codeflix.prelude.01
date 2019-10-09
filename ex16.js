function countWords(str = ''){
    if (str.match(/[A-Z]/g)){
        str = str.replace(/([A-Z])/g," $1")
        str = str.replace(/(^' '|' '$)/g, "")
    }
    return str.match(/\w+/g).length
}