//Basic function format
// function abcd(g){
//     console.log(`My name is ${g}`);

// }
// abcd('Naitik');



//function stored in a variable

//vc();
// let vc= function abc(){
//     console.log(`Check working!`);
// }
// vc();

//fat arrow function or a arrow function

// let sum= ()=>{
//     console.log("Arrow funtion bolte;")
// }
// sum();

// //Q1
// function sayHello(){
//     console.log("HEY WORLD!");
// }
// sayHello();

// //Q2
// function greetings(guest="NAITIK"){
//     console.log(`HEY ${guest}`);
// }
// greetings("UNNATI");

//Q3
// function addUnlimited(...nums){
    // let sum=0;
    // console.log(nums);  //Array of numbers it acn be unlimited

    //forEach loop

    // nums.forEach(function (val) {
    //     sum+=val;
    // });
    // console.log(sum);

    //for loop

    // for(let i=0; i<nums.length; i++){
    //     sum+=nums[i];
    // }
    // console.log(`SUM IS: ${sum}`);

    //reduce function

    // let ans= nums.reduce(function (acc, val){
    //     return acc+val;
    // },0);
    // console.log(ans);


// }
// addUnlimited(1,2,3,4,5);


//IMMEDIATELY INVOKED FUNCTIONS

// (function iife(){
//     console.log("HEY EVERYONE!!");
// })();


// let obj = {
//     name: "NAITIK",
//     city: "PRAYAGRAJ",
// };
// for(let key in obj){
//     console.log(key);
// }


//High order function

function highOrder(fn){
    fn();
    fn();
    fn();

}
highOrder(function abc(){
    console.log("HEy NAitik")
});

