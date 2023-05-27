# JSON / Recursion / Important Utilities : Differences Between Two Objects

Write a function that accepts two deeply nested objects or arrays obj1 and obj2 and returns a new object representing their differences.

The function should compare the properties of the two objects and identify any changes. The returned object should only contains keys where the value is different from obj1 to obj2. For each changed key, the value should be represented as an array [obj1 value, obj2 value]. Keys that exist in one object but not in the other should not be included in the returned object. When comparing two arrays, the indices of the arrays are considered to be their keys. The end result should be a deeply nested object where each leaf value is a difference array.

You may assume that both objects are the output of JSON.parse.

```javascript
/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */
function objDiff(obj1, obj2) {
    
};
```

```typescript
function objDiff(obj1: any, obj2: any): any {

};
```