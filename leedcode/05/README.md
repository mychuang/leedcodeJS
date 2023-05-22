# Basic Array Transforms : Filter Elements from Array

設置一個函式, 可接收一個整數陣列和一個callback function,  回傳一個新陣列必須少於或等於傳入的整數陣列

- The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.

- Please solve it without the built-in Array.filter method.

```javascript
var filter = function(arr, fn) {
    //完成此處
};
```

需要的功能, 必須符合以下情境: 

1. - Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }, 
   - Output: [20,30]
2. - Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }, 
   - Output: [1]