function once<T extends (...args: any[]) => any>(fn: T): ((...args: Parameters<T>) => ReturnType<T> | undefined) {
    let called = false;
    return function (...args) {
        if(called){
            return undefined
        }else{
            called = true;
            return fn(...args);
        }
    };
}


let fn = (a: number, b: number, c: number) => (a + b + c)
let onceFn = once(fn)
console.log(onceFn(1,2,3)); // 6
console.log(onceFn(2,3,6)); // returns undefined without calling fn