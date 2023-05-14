//本質上是一個closure 問題
//function 即物件, 將物件陣列傳入compose() 做for loop 遞減處理

var once = function(fn) {
    let called = false;

    return function newFunction(...args){
        if(called){
            return undefined;
        }else{
            called = true;
            return fn(...args);
        }
    }
};

/*
Example 1:
Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
Output: [{"calls":1,"value":6}]
Explanation:
const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined, fn was not called
*/
let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)
console.log(onceFn(1,2,3)); // 6
console.log(onceFn(2,3,6)); // returns undefined without calling fn




