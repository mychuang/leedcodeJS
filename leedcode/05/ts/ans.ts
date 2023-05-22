var filter = function<T>(arr: T[], fn: (value: T, index: number)=>boolean): T[] {
    let res: T[] = [];
    
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i], i)){
            res.push(arr[i]);
        }
    }
    return res;
};

console.log(filter([0,10,20,30], function(n: number){
    return n > 10; 
})); //[ 20, 30 ]
console.log(filter([1, 2, 3], function(n: number, i: number){
    return i === 0;
})); //[1]