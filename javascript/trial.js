// 1. Function Statements
// 在程式執行的最開始, 該函式就會先被儲存在記憶體中
function f1(a,b){
    return a+b
}
console.log(f1(10, 20)) //30

// 2. Anonymous Function
/* (匿名函式) 
 *  在 JavaScript 中,  Function 是物件
 *  建立一個名為 f2 的變數，該變數指向一個函式物件
 */
var f2 = function(a, b){
    return a+b
}
console.log(f2(10, 20)) //30

// 3. function with function
/* 建立一個名為 f3 的變數，該變數指向一個函式物件
 * 函式物件內定義了一個內部函式 add，並回傳a+b的結果。
 * add 函式作為 f3 函式的回傳值。
 * 換句話說，當我們呼叫 f3() 時，會取得 add 函式本身，而不是執行它
 * 這種做法稱為「函式工廠」，
 * 因為 f3 函式將一個函式作為值回傳。這樣的設計模式可以讓我們在程式中建立並回傳多個函式
 */
var f3 = function(){
    function add(a, b){
        return a+b;
    }
    return add;
}
var result3 = f3(); // 呼叫 f3 函式，取得回傳的 add 函式
var sum = result3(2, 3); // 使用回傳的 add 函式計算 2 + 3
console.log(sum); // 輸出結果：5

// 4. Closures
// 當一個 function 內 return 了另一個 function，通常就是有用到closure的概念
var f4 = function(){
    var count = 0;
    return function counter(){
        return count++;
    }
}
var result4 = f4(); // 呼叫 f4 函式，取得回傳的 counter 函式
console.log(result4()); // 使用回傳的 count = 0
console.log(result4()); // 使用回傳的 count = 1
console.log(result4()); // 使用回傳的 count = 2

// 5. return multiple function
var f5 = function(){
    var count = 100;
    return{
        increment: function(){
            return ++count
        },
        decrement: function(){
            return --count
        },
        reset: function(){
            count = 100;
            return count
        }
    }
}
var result5 = f5();
console.log(result5.increment()); //101
console.log(result5.increment()); //102
console.log(result5.decrement()); //101

//6.Rest Arguments
var f6 = function(...args){
    const sum = args[0] + args[1] + args[2];
    return sum;
} 
console.log(f6(3, 4, 6)); // 13
