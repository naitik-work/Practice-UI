//Inheritance

//jab ek class ki properties dusri class me extend hoti hai toh inheritance ka concept use krte hai for ex Animal class, and horse, hen etc are all extention of Animal class.

//q1

// let user = {
//     name: 'Naitik',
//     email: 'naitikchs16@gmail.com',

//     func: function login(){
//         console.log("User logged in!");
//     }
// }
// user.func();


//q2

// let user1 = {
//     name: 'Naitik',
//     email: 'naitikchs16@gmail.com',

//     func: function login(){
//         console.log("User logged in!");
//     }
// }
// user1.func();

// let user2 = {
//     name: 'Naitik',
//     email: 'naitikchs16@gmail.com',

//     func: function login(){
//         console.log("User logged in!");
//     }
// }
// user2.func();

// let user3 = {
//     name: 'Naitik',
//     email: 'naitikchs16@gmail.com',

//     func: function login(){
//         console.log("User logged in!");
//     }
// }
// user3.func();

//q3

// class User{
//     constructor(name,email){
//         this.name= name;
//         this.email= email;
//     }

//     loggedIn(){
//         console.log('logged IN!!');
//     }
// }  

// let user1= new User('Naitik','hgfsa@jhfnd');

// let user2= new User('Unnati','hgfsa@jhfnd');

//constructor function

function User(){
    this.name= 'Naitik';
    
}
User.prototype.loggedIN= function(){
    return 'HEYIII!';
}
let user1= new User();   
console.log(user1.loggedIN());