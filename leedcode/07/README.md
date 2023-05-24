# Function input and Output	 : Function Composition

創建一個函式物件陣列[f1, f2, f3, ..., fn], 傳入compose函式, 將函式物件陣列由右至左依序運算, 每一次運算的值, 傳給下一個函式, 最後回傳 Function Composition 運算結果<br>

The function composition of **[f(x), g(x), h(x)]** is **fn(x) = f(g(h(x)))**.

- The function composition of an empty list of functions is the identity function f(x) = x.

- You may assume each function in the array accepts one integer as input and returns one integer as output.

```javascript
var compose = function(functions) {
	return function(x) {
        //完成此處
    }
};
```