# 函式介紹

- Function Statements 

  ```javascript
  /*  Function Statements 
  *  又稱為 Function Statements, 它在程式執行的最開始, 該函式就會先被儲存在記憶體中
  */
  function f1(a, b) {
      const sum = a + b;
      return sum;
  }
  console.log(f1(3, 4)); // 7
  ```

- Anonymous Function

  ```javascript
  /*  Anonymous Function (匿名函式) 
   *  在 JavaScript 中,  Function 可視為類別
   *  所以我們可以把它存在一個變數中, 又稱為 Function Expressions
   */
  var f2 = function(a, b) {
      const sum = a + b;
      return sum; 
  }
  console.log(f2(3, 4)) //7
  ```

- 函式中的函式

  ```javascript
  /*  函式中的函式 I
   *  Function 中可以呼叫另一個function
   */
  function callOtherFunction() {
      return f1(3,4)
  }
  console.log(callOtherFunction()); // 7

  /*  函式中的函式 II
   *  在 JavaScript 中,  Function 可視為類別, 
   *  那我們當然可以在類別中定義另一個function
   */
  function createFunction() {
      function f(a,b){
          return a + b;
      }
      return f;
  }
  var f3 = createFunction();
  console.log(f3(3, 4)) //7

  /*  函式中的函式 III
   *  我們可以結合Anonymous Function, 
   *  在該Function中創建新的Function
   */
  var createFunction2 = function() {
      return function f(a, b) {
          return a + b;
      } 
  }
  const counter = createFunction2();
  console.log(counter(5, 6));// 11
  ```

- Closures

  當一個 function 內 return 了另一個 function，通常就是有用到closure的概念

  ```javascript
  /*  閉包（closure）I
   *  在 JavaScript 中,  Function 可視為類別,  
   *  也能讓函式有自己私有變數
   */
  var createCounter = function() {
      var count = 0
      function counter(){
          count = count + 1;
          return count;
      }
     return counter;
  }
  const countObj_1 = createCounter();
  console.log(countObj_1()); //1
  console.log(countObj_1()); //2
  const countObj_2 = createCounter();
  console.log(countObj_2()); //1
  console.log(countObj_2()); //2

  /*  閉包（closure）II
   *  當要回傳多個方法, 使用 {}
   */

  var createCounter2 = function() {
      var count = 0
    
      function add(){
          count = count + 1;
          return count;
      }

     function minus(){
          count = count - 1;
          return count;
      }
     
    return {add, minus}
  }

  const countObj_3 = createCounter2();
  console.log(countObj_3.add()); //1
  console.log(countObj_3.minus()); //0
  ```

- Rest Arguments

  ```javascript
  /* Rest Arguments
   * Function 有不確定數量的參數時，
   * Rest Arguments就可以幫助我們很容易 取得剩餘的所有參數
   */
  function f4(...args) {
      const sum = args[0] + args[1];
      return sum;
  }
  console.log(f4(3, 4)); // 7
  ```

# leedcodeJS

## Day 1: 2667. Create Hello World Function

## Day 2: 2620. Counter 

## Day 3: 2665. Counter II

## Day 4: 2635. Apply Transform Over Each Element in Array

## Day 5: 2634. Filter Elements from Array

## Day 6: 2626. Array Reduce Transformation

## Day 7: 2629. Function Composition

## Day 8: 2666. Allow One Function Call

## Day 9: 2623. Memoize

## Day 10: 2632. Curry