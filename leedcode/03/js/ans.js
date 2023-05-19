//基本解法: Runtime 69 ms; Memory: 44.6 MB
/* 
var createCounter = function(init) {
    let count = init;

    function increment(){
        return ++count;
    }

    function reset(){
        count = init;
        return count;
    }

    function decrement(){
        return --count;
    }

    return {increment, reset, decrement};
};

const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
*/

//箭頭函式解法: Runtime 75 ms; Memory: 45.3 MB
/*
var createCounter = function(init) {
    let count = init;

    const increment = () => {
        return ++count;
    }


    const reset= () => {
        count = init;
        return count;
    }

    const decrement = () => {
        return --count;
    }

    return {increment, reset, decrement};
};

const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
*/

//箭頭+匿名函式解法: Runtime 70 ms; Memory: 45MB
var createCounter = function(init) {
    let count = init;

    return {
        increment: () => {
            return ++count;
        },

        reset: () => {
            count = init;
            return count;
        },

        decrement: () => {
            return --count;
        }
    }
};

const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4