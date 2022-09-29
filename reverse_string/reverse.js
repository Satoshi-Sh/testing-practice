function reverse(string){
    let array = string.split('')
    array.reverse()
    return array.join('')
}

module.exports = reverse