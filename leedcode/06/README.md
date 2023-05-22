# Basic Array Transforms : Array Reduce Transformation

設置一個函式, 可接收一個整數陣列, callback reducer function, 和 initial value init, 回傳一個數值

- If the length of the array is 0, it should return init.

- Please solve it without using the built-in Array.reduce method.

```javascript
var reduce = function(nums, fn, init) {
   //完成此處
};
```

需要的功能, 必須符合以下情境: 

1. - Input: arr = [1,2,3,4], fn =  function sum(accum, curr) { return accum + curr; }, init = 0
   - Output: 10
2. - Input: arr = [1,2,3,4], fn = function sum(accum, curr) { return accum + curr * curr; }, init = 100
   - Output: 130