//0 "" false NaN null undefined document.all are all falsy values
//1 Everything else is truthy values including "0" " " [] {}
if("0"){
    console.log("Hello World");
}
else{
    console.log("Hello Universe");
}
13>14?console.log("hey!!"):console.log("hiee!!"); //ternary operator
//for loop
for(let i =1; i<9; i++){
    console.log(i);
}