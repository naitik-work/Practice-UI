//syntax error-> apne code likhne me kuch galti krdi
// leat a=12;

//runtime error->likhte waqt error nhi aata hia(compile time), jab chalta hai toh error aata hai(runtime).

// function abxcd(){
//     let a=12;
//     console.log(a.name);
// }
// abxcd();

//logical error-> apke code ko kuch karna chahiye th apar wo kr kuch aur raha hai

     // function add(a,b){
//     return a-b;
// }
// console.log(add(1,3)); 

//Understanding try,catch block and the error object -[`message`,`name`,`stack`];
//try and catch error handlers hotey hai, agr kbhi code me error aaya toh ocde rukega nahi, pura chalega aur error catch ke err me save ho jayegi which we canlter use to debugg the code.

try{   
        let a=12;
        console.log(a.name.first);
}
catch(err){
    throw Error('Something went wrong!!');
    // console.log(err.stack);
}
finally{
    console.log('HIE, I AM NAITIK!');
}
