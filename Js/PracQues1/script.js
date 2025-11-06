// //Ques1:
// let age = prompt("Enter your age:");

// if (age === null) {
//     console.error("User cancelled the prompt.");
// } else {
//     age = age.trim(); // Always trim early

//     if (age === "") {
//         console.error("No age entered.");
//     } else {
//         age = Number(age);

//         if (isNaN(age)) {
//             console.error("Please enter a number!");
//         } else if (age < 0) {
//             console.error("Age cannot be negative!");
//         } else if (age >= 18) {
//             console.log("You can vote!");
//         } else {
//             console.log("You're a minor!");
//         }
//     }
// }
// Ques 2:
// let attempts=0;
// let pass= 'Naitik@123';
// let userPass = prompt("Enter your password:");
// attempts++;
// let passed=false;
// while(userPass!==pass){
//     if(attempts===3){
//         console.error("Account locked!");
//         break;
//     }
//    userPass = prompt("Enter your password:");
//    attempts++;
//    if(userPass === pass){
//     passed= true;
//     break;
//    }
   
// }
// if(passed===true){
//     console.log("Login successful!");
// }

//Another way:

let attempts=0;
let pass= 'NAITIK';
let userPass=prompt("Enter your password:");
attempts++;
while(userPass!==pass && attempts<3){
    userPass= prompt("Enter your password:");
    attempts++;
}
if(userPass!==pass&& attempts===3){
    console.error("Account locked!");
}
else console.log("Login successful!");


