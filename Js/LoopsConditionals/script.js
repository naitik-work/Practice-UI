//0 "" false NaN null undefined document.all are all falsy values
//1 Everything else is truthy values including "0" " " [] {}
// if("0"){
//     console.log("Hello World");
// }
// else{
//     console.log("Hello Universe");
// }
// 13>14?console.log("hey!!"):console.log("hiee!!"); //ternary operator
// //for loop
// for(let i =1; i<9; i++){
//     console.log(i);
// }
// for(let i=1; i<=25;i++){
//     if(i%2===0){
//         console.log(i);
//     }
//     else
//         continue;
// }
// for(let i=5; i<10;i++){
//     console.log("hello NAITIK!");
// }
//jab bhi hum prompt se koi bhi user input lete hai wo humesha string ke form me hota hai. The ways to convert sttring to number are:
//1 Using Number() function
//2 Using unary + operator
//3 Using parseInt() or parseFloat() function
// let userInput= prompt("Enter a number: ");
// console.log(typeof userInput); //string
// let convertedNumber= Number(userInput); //method 1
// console.log(typeof convertedNumber); //number
// let convertedNumber2= +userInput; //method 2
// console.log(typeof convertedNumber2); //number
// let convertedNumber3= parseInt(userInput); //method 3
// console.log(typeof convertedNumber3); //number

// let age= +prompt("Enter you age: ");
// if(age>=18){
//     console.log("You can vote!");
// }
// else{
//     console.log("You're a minor!");
// }

//Something really special of what i Learned today!

let age= prompt("Enter your age: ");
if(age===null){
    console.log("User cancelled the prompt.");
if(age.trim()===""){
    console.log("No age entered.");
}
else{
    age= Number(age);
    if(isNaN(age)) console,log("Please enter a number!");
    else console.log("Number entered!");
}
}
