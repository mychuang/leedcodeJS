/* callback: 回呼, 回調
 * 一個超長任務需要時間處理, 無法立即知道結果, 程式會繼續處理下一個任務, 當超長任務完成後, 才通知程式超長任務完成
 */

/* 同步執行: 一個任務接著一個任務執行
 *     example: console.log('HELLO'); console.log('WORLD');
 *              會依序顯示HELLO, WORLD
 * 異步執行: 可以不等待一個超長任務, 先執行下一個任務
 *     example: 下載圖片(檔案很大) -> 顯示圖片 -> 其他任務, 若是同步執行, 可能會卡在下載檔案很久
 *              異步執行下, 可以先不等待"下載檔案", 而將"顯示圖片"放在callback queue中, 
 *              先執行"其他任務", 等到"下載檔案"完成後, 再執行"顯示圖片"
 */

console.log('下載圖片');
setTimeout(() => { console.log('圖片顯示'); }, 3000);
console.log('其他任務');
// 會依序顯示下載圖片->其他任務->圖片顯示 
// 由於setTimeout需要等待, 所以先執行了console.log('其他任務');

// 自製 Callback function 
function doSomething(callback: ()=>void) {
    
    setTimeout(function () {
        console.log("Do somthing");
    }, 3000);

    callback();
}

function successCallback() {
    console.log("I'm back");
}

doSomething(successCallback);

/* callback hell
 * 當使用多個callback function, 會變得難以維護
*/
function asyncFunction1(callback: ()=>void) {
    setTimeout(function () {
        console.log("Async Function 1");
        callback();
    }, 1000);
}

function asyncFunction2(callback: ()=>void) {
    setTimeout(function () {
        console.log("Async Function 2");
        callback();
    }, 1000);
}

function asyncFunction3(callback: ()=>void) {
    setTimeout(function () {
        console.log("Async Function 3");
        callback();
    }, 1000);
}

// 回调地狱
asyncFunction1(function () {
    asyncFunction2(function () {
        asyncFunction3(function () {
            console.log("All async functions completed");
        });
    });
});

/* promise
 * 為解決 callback hell, 引入了promise 概念
 * 字面上的意思, 承諾做一件事, 會有兩個結果, 履行承諾 or 反悔不履行承諾
 * 想像你叫uber, 此時你的請求是待定狀態, 
 *   接著, 你的請求會有兩種可能: 
 *   1. 司機接收訂單, 並把你送去目的地 => 履行承諾
 *   2. 司機接收訂單, 但基於某些原因取消訂單 => 不履行承諾
*/

let send2port = false;
let p = new Promise<void>(function (resolve, reject) {
    if (send2port) {
        console.log('send to airport');
        resolve();
    } else {
        console.log('cannot send to airport');
        reject();
    }
})
p
    .then(function () { console.log('promise sucess') })
    .catch(function () { console.log('promise reject') });

/* 執行結果: 
 * 當 send2port = true
 * 1.send to airport
 * 2.promise sucess  => 因為此承諾有被履行, 執行resolve() 回到then()
 * 當 send2port = false
 * 1.cannot send to airport
 * 2.promise reject  => 因為此承諾沒有履行, 執行reject() 回到catch()
*/

//一般使用promise 都是為了從網路獲取資料, 如下範例
/* 僅能在client 端運行, node.js 不能使用fetch
let f = fetch("https://jsonplaceholder.typicode.com/users");

f
    .then(function (userDate) {
        //fetch 若 resolve, 回傳的資料會給userDate
        return userDate.json();
    })
    .then(function (jsonData) {
        //前一個then()執行完, return 的資料會給jsonData
        console.log(jsonData);
    })
*/

//最後我們用promise 來改寫 callback hell
function PromiseFunction1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Promise Function 1");
            // 如果要觸發錯誤，可以调用 reject
            reject(new Error("Error in Promise Function 1"));
            // resolve();
        }, 1000);
    });
}

function PromiseFunction2() {
    return new Promise<void>(function (resolve, reject) {
        setTimeout(function () {
            console.log("Promise Function 2");
            resolve();
        }, 1000);
    });
}

function PromiseFunction3() {
    return new Promise<void>(function (resolve, reject) {
        setTimeout(function() {
            console.log("Async Function 3");
            // 模擬一個錯誤
            resolve();
        }, 1000);
    });
}

PromiseFunction1()
    .then(function () {
        return PromiseFunction2();
    })
    .then(function () {
        return PromiseFunction3();
    })
    .then(function () {
        console.log("All Promise functions completed");
    })
    .catch(function (error) {
        console.error("Error:", error);
    });