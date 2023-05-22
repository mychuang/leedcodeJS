# Basic Array Transforms : Apply Transform Over Each Element in Array

設置一個函式, 可接收一個整數陣列和一個callback function,  回傳一個新陣列

- The returned array should be created such that returnedArray[i] = fn(arr[i], i).

- Please solve it without the built-in Array.map method.

```javascript
var map = function(arr, fn) {
    //完成此處
};
```

需要的功能, 必須符合以下情境: 

1. - Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }, 
   - Output: [2,3,4]
2. - Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }, 
   - Output: [1,3,5]
3. - Input: arr = [10,20,30], fn = function constant() { return 42; }
   - Output: [42,42,42]