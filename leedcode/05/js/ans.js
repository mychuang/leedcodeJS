var filter = function(arr, fn) {
    let res = [];
    
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i], i)){
            res.push(arr[i]);
        }
    }

    return res;
};

console.log(filter([0,10,20,30], function(n){
    return n > 10; 
})); //[ 20, 30 ]
console.log(filter([1, 2, 3], function(n, i){
    return i === 0;
})); //[1]