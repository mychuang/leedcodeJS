type Fn = (...params: any) => any

function memoize(fn: Fn): Fn {
    var cache: {[key: string]: any} = {}; //用以存儲緩存計算結果

    return function(...args) {
        const key = JSON.stringify(args) 

        if (cache[key] === undefined) {
            cache[key] = fn(...args)
        }
        return cache[key];
    }
}


let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})
console.log(memoizedFn(2, 3)) // 5
console.log(memoizedFn(2, 3)) // 5
console.log(callCount) // 1 