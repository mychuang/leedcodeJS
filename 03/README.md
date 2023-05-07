# Closures

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

## 透過閉包創建多個function功能

```javascript
function countHouse() {
    var count = 0;

    function increase(){
        return ++count;
    }

    function decrease(){
        return --count;
    }

    return {increase, decrease};
}

var countDogs = countHouse();
var countCats = countHouse();

console.log(countDogs.increase()); //1
console.log(countCats.increase()); //1

console.log(countDogs.increase()); //2
console.log(countCats.increase()); //2

console.log(countDogs.decrease()); //1
console.log(countCats.decrease()); //1
```

# LeedCode 挑戰 : Counter II

Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.<br>

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