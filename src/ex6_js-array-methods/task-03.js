function every(array,Callback){
    for (var i = 0; i < array.length; i++){
        if (Callback(array[i], i, array) === false){
            return false;
        }
     }
     
        return true;
}

module.exports = every;
