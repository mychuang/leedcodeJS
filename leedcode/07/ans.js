//本質上是一個closure 問題
//function 即物件, 將物件陣列傳入compose() 做for loop 遞減處理

var compose = function(functions) {
	return function(x) {
        // The function composition of an empty list of functions is the identity function f(x) = x.
        if(functions.length == 0){ return x; }

        let input = x;
        for(let i=functions.length-1; i>=0; i-- ){
            input = functions[i](input);
        }

        return input;
    }
};

/*
Example 1:
Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65
Explanation:
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65
 */
var functions = [x => x + 1, x => x * x, x => 2 * x];
const fn = compose(functions);
console.log(fn(4)) //65

/*
Example 2:
Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
Output: 1000
Explanation:
Evaluating from right to left ...
10 * (1) = 10
10 * (10) = 100
10 * (100) = 1000
 */
functions = [x => 10 * x, x => 10 * x, x => 10 * x];
const fn2 = compose(functions);
console.log(fn2(1)) //1080




