# Closure : Counter

設計一個 function , 接收一個整數n, 並回傳內部函式: counter function. 內部函式會對傳入的整數n做累加

```javascript
var createCounter = function(n) {
    return function() {
        //完成此處
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
```