var reduce = function (nums, fn, init) {
    let res = init;
    for (let i = 0; i < nums.length; i++) {
        res = fn(res, nums[i]);
    }
    return res;
};

//Example 1:
var fn1 = function sum(accum, curr) { return accum + curr; }
console.log(
    reduce([1, 2, 3, 4], fn1, 0) 
); //10

//Example 2:
var fn2 = function sum(accum, curr) { return accum + curr * curr; }
console.log(
    reduce([1, 2, 3, 4], fn2, 100) 
); //130


// ************  箭頭函式 *************
var reduce2 = function (nums, fn, init) {
    nums.forEach(element => init = fn(init, element));
    return init;
};

//Example 1:
console.log(
    reduce2([1, 2, 3, 4], fn1, 0) 
); //10

//Example 2:
console.log(
    reduce2([1, 2, 3, 4], fn2, 100) 
); //130