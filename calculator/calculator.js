const calculator = function (){
    return {
        add:function(a,b){
            return a + b
        },
        subtract:function(a,b){
            return a-b
        },
        divide:function(a,b){
            if (b==0){
                console.log('Division Error...')
                return;
            }
            return a/b
        },
        multiply:function(a,b){
            return a * b
        }
    }
}

module.exports = calculator