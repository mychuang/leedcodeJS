# Classes: Array Wrapper

Create a class ArrayWrapper that accepts an array of integers in it's constructor. This class should have two features:

- When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.

- When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].

```javascript
/**
 * @param {number[]} nums
 */
var ArrayWrapper = function(nums) {
    
};

ArrayWrapper.prototype.valueOf = function() {
    
}

ArrayWrapper.prototype.toString = function() {
    
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
```

```typescript
class ArrayWrapper {
	constructor(nums: number[]) {
        
    }

	valueOf() {
        
    }

	toString() {
        
    }
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
```