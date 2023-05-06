# javascript 函式

## Basic Syntax

又稱為 **Function Statements**, 它在程式執行的最開始, 該函式就會先被儲存在記憶體中

```javascript
function f(a, b) {
  const sum = a + b;
  return sum;
}
console.log(f(3, 4)); // 7
```

## Anonymous Function (匿名函式)

在 JavaScript 中 Function 就是物件的一種，所以我們可以把它存在一個變數中, 又稱為 **Function Expressions**, 把這個函式表達式的值存在某個變數內

```javascript
var f = function(a, b) {
  const sum = a + b;
  return sum;
}
console.log(f(3, 4)); // 7
```

## 函式中的函式

A powerful feature of JavaScript is you can actually create functions within other functions and even return them!

```javascript
function createFunction() {
  function f(a, b) {
    const sum = a + b;
    return sum;
  }
  return f;
}
const f = createFunction();
console.log(f(3, 4)); // 7
```

## Immediately Invoked Functions Expressions (IIFEs)

IIFEs 指的就是透過 function expression 的方式來建立函式，並且立即執行它

```javascript
const result = (function(a, b) {
  const sum = a + b;
  return sum;
})(3, 4);
console.log(result); // 7
```

## Closures

利用閉包（closure）的作法，讓函式有自己私有變數

```javascript
function dogHouse() {
  var count = 0;
  function countDogs() {
    count += 1;
    console.log(count + ' dogs');
  }
  return countDogs;
}

const countDogs = dogHouse();
countDogs(); // "1 dogs"
countDogs(); // "2 dogs"
countDogs(); // "3 dogs"
```

當你看到一個 function 內 return 了另一個 function，通常就是有用到閉包的概念

```javascript
function createAdder(a) {
  function f(b) {
    const sum = a + b;
    return sum;
  }
  return f;
}
const f = createAdder(3);
console.log(f(4)); // 7
```

## Arrow Syntax

```javascript
const f = (a, b) => {
  const sum = a + b;
  return sum;
};
console.log(f(3, 4)); // 7
```

## Rest Arguments

```javascript
function f(...args) {
  const sum = args[0] + args[1];
  return sum;
}
console.log(f(3, 4)); // 7
```

# LeedCode 挑戰 : Create Hello World Function

Write a function createHelloWorld. It should return a new function that always returns "Hello World".

```javascript
var createHelloWorld = function() {
    return function(...args) {
        //完成此處
    }
}; 

const f = createHelloWorld();
console.log(f()); // "Hello World"
```

需要的功能, 必須符合以下情境: 

1. 輸入 args = [], 輸出 "Hello World"
2. 輸入 args = [{},null,42], 也是輸出 "Hello World"
3. 限制條件: 0 <= args.length <= 10