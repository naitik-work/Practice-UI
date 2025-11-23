//DOM- DOCUMENT OBJECT MODEL(fRONTEND KI js)

// 4 PILLARS OF DOM

//1. Selection of element
//2. Changing html
//3. Changing CSS
//4. Adding event listeners


// var a= document.querySelector('h1');
// var btn= document.querySelector('button');
// //console.log(a);

// btn.addEventListener('click', function(){
//     a.innerHTML='I am a full-stack web developer! :)'
//     a.style.color = 'pink';
// })


var h2= document.querySelector('h2');
var btn1= document.querySelector('#inc');
var btn2= document.querySelector('#dec');
let a=0;
btn1.addEventListener('click', function(){
    a++;
    h2.innerHTML= a;
})

btn2.addEventListener('click', function(){
    a--;
    h2.innerHTML= a;
})


