var curry = function (fn) {
    return function curried(...args) {
        //根據傳入的參數數量來決定要返回新函式還是直接呼叫傳入的函式
        if (args.length < fn.length) {
            /*
            當傳入的參數數量不足時，返回一個新函式，
            這個新函式將之前傳入的參數與新傳入的參數合併起來
            */
            return function (...args2) {
                return curried(...args, ...args2);
            }
        }
        return fn(...args);
    };
};

function sum(a, b) { return a + b; }
const csum = curry(sum);
console.log(csum(1)(2)) // 3







