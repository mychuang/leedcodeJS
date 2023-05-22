var map = function<T, U>(arr: T[], fn: (value: T, index: number)=> U): U[] {
    const res: U[] = [];
    for(let i=0; i<arr.length; i++){
        res.push(fn(arr[i], i))
    }
    return res;
};


console.log(map([1, 2, 3], function(n: number): number{
    return n + 1;
}));
console.log(map([1, 2, 3], function(): number{
    return 42;
}));
console.log(map([1, 2, 3], function(n: number, i: number): number{
    return n + i;
}));