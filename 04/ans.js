var map = function(arr, fn) {
    let res = [];
    
    for(let i=0; i<arr.length; i++){
        res.push(fn(arr[i], i))
    }

    return res;
};

var fn1 = function plusone(n) { 
    return n + 1; 
}

var fn2 = function plusI(n, i) { 
    return n + i;
}

var fn3 = function constant() { 
    return 42;
}

console.log(map([1, 2, 3], fn1));
console.log(map([1, 2, 3], fn2));
console.log(map([1, 2, 3], fn3));