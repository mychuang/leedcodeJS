/* 一般解 */
type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let res = init;
    for (let i = 0; i < nums.length; i++) {
        res = fn(res, nums[i]);
    }
    return res;
};

console.log(
    reduce([1, 2, 3, 4], function(accum: number, curr: number){
        return accum + curr;
    }, 0) 
); //10

console.log(
    reduce([1, 2, 3, 4], function(accum: number, curr: number){
        return accum + curr * curr;
    }, 100) 
); //130

/* 箭頭函式解 */
function reduce2(nums: number[], fn: Fn, init: number): number {
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