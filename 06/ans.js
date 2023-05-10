var reduce = function (nums, fn, init) {
    //完成此處
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
