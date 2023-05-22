/*
 * callback 是一種可以當作是函式參數一樣被帶進其他函式的函式
 * Callback function 的用途就在於可以讓我們的程式在不論同步或是非同步執行的狀況下都還是可以依序執行函式
 */

// 一般代入參數
function sayHi(name){
    console.log(`hi ${name}`);
}
sayHi('Miller');

// Callback function 
function sayHi2(callback){ //接收一個Callback function
    callback();
}

function call(){
    console.log(`I'm back`);
}
sayHi2(call); //函式參數帶進sayHi2

/*
 * setTimeout 是JS 原生提供的Callback function
 * 寫法: setTimeout(Callback function , 毫秒)
 * 錯誤用法: setTimeout(sayHi('Dear'), 1000); //這樣是直接调用 sayHi 函数
 */
setTimeout(function(){
    sayHi('Dear')
}, 1000);

setTimeout(call, 1000);

/* map()
 * 會透過函式內所回傳的值組合成一個新的陣列, 
 * 並不會改變原陣列, 
 * 回傳數量會等於原始陣列的長度, 不回傳則是 undefined
 * 寫法: 
 * const newArr = arr.map(function (value, index, array){
 *  value: 正在處理的元素
 *  index: 正在處理的索引(可省略)
 *  array: 舊陣列(可省略)
 * });
 */
let A1 = [9000, 8500, 5500, 6500];
let A2 = A1.map(function (value) {
    return value*2;
});

console.log(A1) // [9000, 8500, 5500, 6500] - 原陣列不會被修改
console.log(A2) // [18000, 17000, 11000, 13000]

//也能用來處理object 轉 array
let B1 = [
    {item: 10}, {item: 11}, {item: 12}, {item: 13}, {item: 14}, {item: 15}
]
let B2 = B1.map(function(value){
    return value.item
})
console.log(B2); //[ 10, 11, 12, 13, 14, 15 ]

//也可以寫成匿名函式
let A3 = A1.map(value => value*2);
console.log(A3); //[18000, 17000, 11000, 13000]

let B3 = B1.map(value=>value.item);
console.log(B3); //[ 10, 11, 12, 13, 14, 15 ]

/* filter()
 * 會透過函式內所回傳的值組合成一個新的陣列, 
 * 並不會改變原陣列, 
 * 回傳數量會<=原始陣列的長度, 不回傳則是 undefined
 * 寫法: 
 * const newArr = arr.filter(function (value, index, array){
 *  value: 正在處理的元素
 *  index: 正在處理的索引(可省略)
 *  array: 舊陣列(可省略)
 * });
 */
let C1 = [9000, 8500, 5500, 6500];
let C2 = C1.filter(function (value) {
    return value>8000;
});

console.log(C1) // [ 9000, 8500, 5500, 6500 ] - 原陣列不會被修改
console.log(C2) // [ 9000, 8500 ]

/* reduce()
 * reduce( ) 方法會對每一個 Array 元素執行一個特定方法，並回傳值。該回傳值將繼續延續至下一個元素執行特定方法時調用。
 * const newArr = arr.filter(function (accumulator, currentValue, currentIndex, array){
 *  accumulator：經由個別 currentValue 加總的累計值
 *  currentValue：Array 的個別 item
 *  currentIndex：Array item 的索引
 *  array：呼叫該 Array method 的陣列
 *  initialValue：預設值，放在 function 的最後方，非必填
 * }, initialValue);
 */

//  未提供 initialValue
const arr = [1, 2, 3, 4, 5];
const reduceArr = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
});
//提供預設值，accumulator（累計值）就會取陣列的第一個元素也就是 1
console.log(reduceArr); // 15

// 有提供 initialValue
const arr2 = [1, 2, 3, 4, 5];
const reduceArr2 = arr2.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 10); 
//提供預設值10，accumulator（累計值）從10開始累加
console.log(reduceArr2); // 25

// 合併陣列
const arr3 = [['a', 'b'], ['c', 'd'], ['e', 'f']];
const reduceArr3 = arr3.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
}, []);
console.log(reduceArr3); // ['a', 'b', 'c', 'd', 'e', 'f'];

//計算相同字串的數量並以物件呈現
const arr4 = ['a', 'a', 'b', 'c', 'c', 'c', 'e'];
const reduceArr4 = arr4.reduce((accumulator, currentValue) => {
    if(accumulator[currentValue]) {
        accumulator[currentValue] ++;
    } else {
        accumulator[currentValue] = 1;
    }
    return accumulator;
}, {});
console.log(reduceArr4); // { a: 2, b: 1, c: 3, e: 1 }

