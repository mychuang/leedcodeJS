function memoize(fn) {
    var cache = {};

    return function(...args) {
        let key = String(args); 
        
        if(key in cache){
            return cache[key];
        }else{
            cache[key] = fn(...args);
            return cache[key];
        }
    }
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})

memoizedFn(2, 3) // 5
memoizedFn(2, 3) // 5
console.log(callCount) // 1 
memoizedFn(2, 3) // 5
console.log(callCount) // 1 
memoizedFn(2, 5) // 7
console.log(callCount) // 2





