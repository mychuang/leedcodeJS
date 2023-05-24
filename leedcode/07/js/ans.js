var compose = function(functions) {
	return function(x) {
        if(functions.length === 0){
            return x;
        }else{
            input = x;
            for(let i=functions.length-1; i>=0; i--){
                input = functions[i](input);
            }
            return input;
        }
    }
};

//Example 1:
const fn = compose(
    [x => x + 1, x => x * x, x => 2 * x]
);
console.log(fn(4)) //65

//Example 2:
const fn2 = compose(
    [x => 10 * x, x => 10 * x, x => 10 * x]
);
console.log(fn2(1)) //1000

//Example 3:
const fn3 = compose(
    []
);
console.log(fn3(42)) //42