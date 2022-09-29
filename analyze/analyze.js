function analyze(array){
    let length=0;
    let sum = 0;
    let min = 1000000;
    let max = -10000000;
    for (let i of array){
        length++;
        sum+=i;
        if (min>i){
            min =i
        }
        if (max<i){
            max=i
        }
    }
    return {
        average: sum/length,
        min:min,
        max:max,
        length: length
    }
}

module.exports = analyze