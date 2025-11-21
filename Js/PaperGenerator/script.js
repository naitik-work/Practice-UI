var main= document.querySelector("main");
var btn= document.querySelector("button");

btn.addEventListener('click',()=>{
    // console.log("HEYI, Winner!")
    var div= document.createElement('div');
    div.style.height= 100+'px';
    div.style.width= 100+'px';
    div.style.position='absolute';

    var x= Math.floor(Math.random()*100);
    var y= Math.floor(Math.random()*100);

    div.style.top = y+"%";
    div.style.left = x+"%";

    var r= Math.floor(Math.random()*256);
    var g= Math.floor(Math.random()*256);
    var b= Math.floor(Math.random()*256);

    div.style.backgroundColor=`rgb(${r},${g},${b})`;

    main.appendChild(div);


});