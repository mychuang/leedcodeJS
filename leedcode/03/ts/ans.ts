type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): ReturnObj {
    let count = init;

    return {
        increment: (): number => {
            return ++count;
        },

        reset: (): number => {
            count = init;
            return count;
        },

        decrement: (): number => {
            return --count;
        }
    };
};

const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4