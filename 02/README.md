# Closures

## 不使用閉胞的函式困境

- 假設我們現在要做一個計數的程式, 一開始我們想要先寫一個給狗的計數函式：

  ```javascript
  var count = 0;

  function countDogs() {
    count += 1;
    console.log(count + ' dog(s)');
  }

  countDogs(); // 1 dog(s)
  countDogs(); // 2 dog(s)
  countDogs(); // 3 dog(s)
  ```

- 我發現我也需要寫貓的計數程式，於是我又開始寫了貓的計數程式：

  ```javascript
  var count = 0;

  function countCats() {
    count += 1;
    console.log(count + ' cat(s)');
  }

  countCats(); // 1 cat(s)
  countCats(); // 2 cat(s)
  countCats(); // 3 cat(s)
  ```

- 然而問題在於把 counter 這個變數建立在了全域的環境底下時, 論是執行 countDogs() 或是 countCats() 時，都是用到了全域的 count 變數

## 透過閉包讓 function 能夠有 private 變數

```javascript
function countHouse() {
    var count = 0;
    function counter(){
        count++;
        console.log(count)
    }
    return counter;
}

var countDogs = countHouse();
var countCats = countHouse();

countDogs(); //1
countCats(); //1

countDogs(); //2
countCats(); //2

countDogs(); //3
countCats(); //3
```

## 進一步調整閉包: 傳參與return function

```javascript
function countHouse(name) {
    var count = 0;
    return function counter(){
        count++;
        console.log(count + ' ' + name + '(s)');
    }
}

var countDogs = countHouse('dog');
var countCats = countHouse('cat');

countDogs(); //1 dog(s)
countCats(); //1 cat(s)

countDogs(); //2 dog(s)
countCats(); //2 cat(s)

countDogs(); //3 dog(s)
countCats(); //3 cat(s)
```

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