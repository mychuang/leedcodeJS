# LeedCode 挑戰 : Create Hello World Function

Write a function createHelloWorld. It should return a new function that always returns "Hello World".

```javascript
var createHelloWorld = function() {
    return function(...args) {
        //完成此處
    }
}; 
```

需要的功能, 必須符合以下情境: 

1. 輸入 args = [], 輸出 "Hello World"
2. 輸入 args = [{},null,42], 也是輸出 "Hello World"