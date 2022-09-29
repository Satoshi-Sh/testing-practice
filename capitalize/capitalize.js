function capitalize(string){
    let first = string.at(0);
    const rest = string.slice(1)
    if (isAlpha(first)){
        return first.toUpperCase() +rest
    }
    return first+rest;
}


const isAlpha = function(ch){
    return /[A-Za-z]/.test(ch)
}

module.exports = capitalize