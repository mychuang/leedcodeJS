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