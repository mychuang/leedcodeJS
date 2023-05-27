/* Function composition 
 * 函式的一個輸出, 可以做為另一個函式的輸入
 */
var f = (x)=>x+2;
var g = (x)=>x*3;
var composedFunc = (x)=>f(g(x)); //f(g(x)) = f(3x) = 3x + 2

console.log(composedFunc(2)); //8

/* 函式物件陣列
 * 可以將函式物件陣列, 傳入一個closure
 * 透過closure, 來將函式組合
 * 組合時, 請記得由右至左運算
 */
var composedFunc2 = function(functions){
    return function(x){
        res1 = functions[1](x); //3x
        res2 = functions[0](res1); //3x+2
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
var add = function(){
    let callCount = 0;
    return function(a, b){
        callCount += 1;
        console.log("call count: ", callCount);
        return a+b;
    }
}

var f = add(); 

console.log(f(2, 2)) //call count:  1; 4
console.log(f(2, 2)) //call count:  2; 4
console.log(f(2, 2)) //call count:  3; 4

//看看使用  memoization 方法
var add2 = function(){
    let callCount = 0;
    let cache = {}; //用以存儲緩存計算結果

    return function(a, b){
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

var f = add2(); 

console.log(f(2, 2)) //call count:  1; 4
console.log(f(2, 2)) //4
console.log(f(2, 2)) //4

// 設計一個 Momoized Function
var memoize = function(func){
    const cache = {} //用以存儲緩存計算結果
    let callCount = 0;

    return function(...args){
        const key = JSON.stringify(args) 
        if (cache[key] === undefined) {
            callCount += 1;
            cache[key] = func(...args)
        }
        console.log("call count: ", callCount);
        return cache[key]
    }
}

var memoizedAdd = memoize((a,b)=>a+b); 

console.log(memoizedAdd(5, 2)); // call count: 1; 7
console.log(memoizedAdd(5, 2)); // call count: 1; 7
console.log(memoizedAdd(5, 2)); // call count: 1; 7

/* Currying
 * 將一個接受 n 個參數的 function，轉變成 n 個只接受一個參數的 function
 * 白話文: 本來f(a, b, c ...) 改成 f1(a), f(b), f(c) ..., 
 * 這些 function 會形成一個鏈（chain），待最後參數傳入，完成運算。
 */
// 假設如下function
function multiply(x, y){
    return x * y;
}
console.log(multiply(3, 5)); // 15

// Currying
function curriedMultiply(x) {
    return function(y) {
      return x * y;
    }
}
var multipleOfThreeAndNumberY = curriedMultiply(3);

console.log(multipleOfThreeAndNumberY(5)); // 3*5 = 15
console.log(multipleOfThreeAndNumberY(10)); // 3*10 = 30

// curriedMultiply 並沒有計算結果，而是回傳一個 function 作為未來計算結果之用
// multiply(x, y) 等於 curriedMultiply(x)(y)
console.log(curriedMultiply(3)(5)) //15


