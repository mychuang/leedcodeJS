
// step 1: 輸入任意args, 應該都能返回 "Hello World"
var createHelloWorld1 = function () {
    return function (...args) {
        console.log(args)
        return "Hello World";
    }
};

const f1 = createHelloWorld1();
console.log(f1({},null,42)); 

// step 2: 限制 args.length, 應該都能返回 "Hello World"
var createHelloWorld = function () {
    return function (...args) {
        if(args.length === 0){
            return "Hello World";
        }else if (args.length <= 10){
            return "Hello World";
        }
    }
};

const f = createHelloWorld();
console.log(f({}, null, 42)); 