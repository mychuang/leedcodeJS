var promisePool = async function (functions, n) {
    return new Promise((resolve, reject) => {
        let i = 0; //函式索引
        let inProgress = 0; //當前正在處理的函式數量

        function callBack() {
            //檢查是否處理完所有函式
            if (i === functions.length && inProgress === 0) {
                resolve();
                return;
            }

            // 若正在處理的函式數量小於限制, 且還有函式要執行, 則繼續
            while (i < functions.length && inProgress < n) {
                inProgress++; //遞增正在處理的函式數量
                const promise = functions[i](); //調用函式
                i++;

                promise
                    .then(() => {
                        inProgress--; //處理完一個promis, 將正在處理的函式數量減少
                        callBack(); //遞迴, 繼續處理下一個
                    })
                    .catch((error) => {
                        inProgress--; // 處理完一個promis, 將正在處理的函式數量減少
                        reject(error); // 捕獲錯誤
                    });
            }
        }

        callBack();
    })
};

function asyncFunction1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Async Function 1 executed');
            resolve();
        }, 1000);
    });
}

function asyncFunction2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Async Function 2 executed');
            resolve();
        }, 2000);
    });
}

function asyncFunction3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Async Function 3 executed');
            resolve();
        }, 1500);
    });
}

const functionsToExecute = [asyncFunction1, asyncFunction2, asyncFunction3];
const concurrencyLimit = 2; // 限制同時執行的函式數量

promisePool(functionsToExecute, concurrencyLimit)
.then(() => {
    console.log('All functions executed successfully');
})
.catch((error) => {
    console.error('Error occurred:', error);
});
