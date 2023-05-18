var filter = function(arr, fn) {
    let res = [];
    
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i], i)){
            res.push(arr[i]);
        }
    }

    return res;
};

var fn1 = function greaterThan10(n) { 
    return n > 10; 
}

var fn2 = function firstIndex(n, i) { 
    return i === 0; 
}

console.log(filter([0,10,20,30], fn1));
console.log(filter([1, 2, 3], fn2));