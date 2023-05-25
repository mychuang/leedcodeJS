/* Function composition 
 * 函式的一個輸出, 可以做為另一個函式的輸入
 */
var f = (x: number)=>x+2;
var g = (x: number)=>x*3;
var composedFunc = (x: number)=>f(g(x)); //f(g(x)) = f(3x) = 3x + 2

console.log(composedFunc(2)); //8

/* 函式物件陣列
 * 可以將函式物件陣列, 傳入一個closure
 * 透過closure, 來將函式組合
 * 組合時, 請記得由右至左運算
 */
var composedFunc2 = function(functions: any[]){
    return function(x: number){
        let res1 = functions[1](x); //3x
        let res2 = functions[0](res1); //3x+2
        return res2;
    }
}
const fn = [f, g]; //創建函式物件陣列
var composed = composedFunc2(fn); // composed 指向 composedFunc2
console.log(composed(4)); //14

/* memoization
 * 記憶函式 ( Memoization ) 是一種優化程式技巧，
 * 把需要大量計算 ( 長遞歸、長迭代操作 ) 的函式將其參數與結果緩存 ( Cache )，
 * 若調用記憶函式且給予相同參數時，不須經過計算程序，直接回傳相同結果。 
 */
// 這是一個沒有記憶緩存的例子
const add = function(){
    let callCount = 0;
    return function(a: number, b: number){
        callCount += 1;
        console.log("call count: ", callCount);
        return a+b;
    }
}

const f_add = add(); 

console.log( f_add(2, 2)) //call count:  1; 4
console.log( f_add(2, 2)) //call count:  2; 4
console.log( f_add(2, 2)) //call count:  3; 4

//看看使用  memoization 方法
const add2 = function(){
    let callCount = 0;
    let cache: {[key: string]: any} = {}; //用以存儲緩存計算結果

    return function(a: number, b: number){
        const key = a + "_" + b; // 将输入参数, 组合成唯一的键
        //檢查緩存是否有結果
        if (cache[key] !== undefined){
            return cache[key];
        }else{
            callCount += 1;
            console.log("call count: ", callCount);
            cache[key] = a + b; //將結果存到緩存
            return cache[key];
        }
    }
}

const f_add2 = add2(); 

console.log(f_add2(2, 2)) //call count:  1; 4
console.log(f_add2(2, 2)) //4
console.log(f_add2(2, 2)) //4

// 設計一個 Momoized Function
const memoize = function(func: any){
    const cache: {[key: string]: any} = {} //用以存儲緩存計算結果
    let callCount = 0;

    return function(...args: any[]){
        const key = JSON.stringify(args) 
        if (cache[key] === undefined) {
            callCount += 1;
            cache[key] = func(...args)
        }
        console.log("call count: ", callCount);
        return cache[key]
    }
}

var memoizedAdd = memoize((a: number, b: number)=>a+b); 

console.log(memoizedAdd(5, 2)); // call count: 1; 7
console.log(memoizedAdd(5, 2)); // call count: 1; 7
console.log(memoizedAdd(5, 2)); // call count: 1; 7