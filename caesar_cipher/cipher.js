function cipher(string){
   let answer =''
   for (let i of string){
      answer += ci(i)
   }
   return answer;
}

// with one character 

function ci(character){
    const characters = 'abcdefghijklmnopqrstuvwxyza'
    let isCapital = isUpper(character);
    if (isAlpha(character)){
    character = character.toLowerCase()
    const index = characters.indexOf(character)+1 
    if (isCapital){
        return characters.at(index).toUpperCase()
    }   
    return characters.at(index)
    }
    return character
}


const isAlpha = function(ch){
    return /[A-Za-z]/.test(ch)
}

const isUpper = function(ch){
    return ch == ch.toUpperCase()
}

module.exports = cipher