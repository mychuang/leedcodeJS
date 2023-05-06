# Closures

# LeedCode 挑戰 : Counter

Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

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

需要的功能, 必須符合以下情境: 

1. Input: n = 10, Output: [10,11,12]
2. Input: n = -2, Output: [-2,-1,0,1,2]