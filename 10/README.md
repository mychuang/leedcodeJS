# LeedCode 挑戰 : Curry

Curry function 是一種將接受多個參數的函式轉換為接受單一參數的函式，並回傳一個新函式的技巧。這個新函式可以接受剩餘的參數，或回傳結果，或繼續接受更多參數。

Currying 的基本思想是將一個多參數的函式，轉換成接受一個參數的函式，該函式回傳一個新函式，該函式也接受一個參數，並重複這個過程直到所有參數都被傳遞。通常使用箭頭函式或匿名函式來實現。

以下是一個簡單的範例，展示了如何使用 currying 技巧來實現一個加法函式：

```javascript
// 一個接受多個參數的加法函式
function add(a, b, c) {
    return a + b + c;
}

// 使用 currying 技巧轉換為接受單一參數的函式
function curryAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

// 使用 currying 函式來進行加法運算
const curriedAdd = curryAdd(1);
console.log(curriedAdd(2)(3)); // 6
```

Given a function **fn**, return a curried version of that function.

A curried function is a function that accepts fewer or an equal number of parameters as the original function and returns either another curried function or the same value the original function would have returned.

In practical terms, if you called the original function like **sum(1,2,3)**, you would call the curried version like **csum(1)(2)(3)**, **csum(1)(2,3)**, **csum(1,2)(3)**, or **csum(1,2,3)**. All these methods of calling the curried function should return the same value as the original.

```javascript
var curry = function(fn) {
    return function curried() {

    };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
```