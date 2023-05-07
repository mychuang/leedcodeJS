var createCounter = function(init) {
    var count = init;
    
    function increment(){
        return ++count
    }

    function reset(){
        count = init;
        return count;
    }

    function decrement(){
        return --count
    }

    return {increment, reset, decrement}
};


const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
