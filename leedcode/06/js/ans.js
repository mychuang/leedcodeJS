/* 一般解 */
var reduce = function (nums, fn, init) {
    let res = init;
    for (let i = 0; i < nums.length; i++) {
        res = fn(res, nums[i]);
    }
    return res;
};

console.log(
    reduce([1, 2, 3, 4], function(accum, curr){
        return accum + curr;
    }, 0) 
); //10

console.log(
    reduce([1, 2, 3, 4], function(accum, curr){
        return accum + curr * curr;
    }, 100) 
); //130


/* 箭頭函式解 */
var reduce2 = function (nums, fn, init) {
    nums.forEach(element => init = fn(init, element));
    return init;
};

console.log(
    reduce2([1, 2, 3, 4], function(accum, curr){
        return accum + curr * curr;
    }, 0) 
); //10

console.log(
    reduce2([1, 2, 3, 4], function(accum, curr){
        return accum + curr * curr;
    }, 100) 
); //130