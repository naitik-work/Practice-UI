let arr=[1,2,3,4,5];

let arr2=arr;

arr2.push(7);
console.log(arr); //original array bhi change ho gya because arr2 is pointing to the same reference in memory as arr

//to avoid this, we use destructuring
let arr3=[...arr]; //spread operator se humne arr ke sare elements ko naya array me copy kr liya
arr3.push(8);
console.log(arr); //original array abhi bhi same hai
console.log(arr3); //new array with 8 added

let obj={a:1,b:2,c:3};
let obj2={...obj}; //spread operator to copy properties to new object
obj2.b=4;
console.log(obj);
console.log(obj2);