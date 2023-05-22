var map = function(arr, fn) {
    const res = [];
    for(let i=0; i<arr.length; i++){
        res.push(fn(arr[i], i))
    }
    return res;
};


console.log(map([1, 2, 3], function(n){
    return n + 1;
}));
console.log(map([1, 2, 3], function(){
    return 42;
}));
console.log(map([1, 2, 3], function(n, i){
    return n + i;
}));