# Closure : Counter II

類似 Counter I 題目, 此時需要設置三個內部函式

The three functions are:<br>

- increment() increases the current value by 1 and then returns it.
- decrement() reduces the current value by 1 and then returns it.
- reset() sets the current value to init and then returns it.

```javascript
var createCounter = function(init) {
    //完成此處
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
```

需要的功能, 必須符合以下情境: 

1. Input: init = 5, Output: [6,5,4]
2. Input: init = 0, Output: [1,2,1,0,0]