var box= document.querySelector("#box");
var btn= document.querySelector("button");

btn.addEventListener("click", function(){
    var a= Math.floor(Math.random()*266);
    var b= Math.floor(Math.random()*266);
    var c= Math.floor(Math.random()*266);
    box.style.backgroundColor= `rgb(${a},${b},${c})`;
})