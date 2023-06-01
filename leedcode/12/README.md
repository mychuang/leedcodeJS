# Promise : Promise Time Limit

建構一個非同步函式(time limited function), 可接收一個 function fn 和 time t in milliseconds

若傳入的函示超過運行時間, 則顯示 "Time Limit Exceeded"

```javascript
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
	return async function(...args) {
        return new Promise((resolve, reject)=>{
            const id = setTimeout(()=>reject("Time Limit Exceeded"), t);
            fn(...args)
                .then((res)=>resolve(res))
                .catch((err)=>reject(err))
                .finally(()=>clearTimeout(id))
        })     
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
```

```typescript
type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
	return async function(...args) {
        
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
```