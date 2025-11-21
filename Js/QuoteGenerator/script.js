var main= document.querySelector("main");
var btn= document.querySelector("button");

btn.addEventListener('click',()=>{
    // console.log("HEYI, Winner!")
    var arr= ["Dream big. Start small. Act now.","Progress, not perfection.","Your vibe attracts your tribe.","Stay hungry, stay humble.","Do it scared, but do it anyway."];

    var idx= Math.floor(Math.random()*arr.length);

    var h1= document.createElement('h1');
    

    var x= (Math.random()*100);
    var y= (Math.random()*100);
    var rotate= (Math.random()*360);
    h1.style.position= 'absolute';

    h1.style.top= y+"%";
    h1.style.left= x+"%";
    h1.style.rotate= rotate+'deg';
    h1.style.color = 'white';
    h1.style.fontSize = '3rem';
    h1.style.transition = '0.3s';
    h1.innerHTML= arr[idx];

    main.appendChild(h1);
















    // var div= document.createElement('div');
    // div.style.height= 100+'px';
    // div.style.width= 100+'px';
    // div.style.position='absolute';

    // var x= Math.floor(Math.random()*100);
    // var y= Math.floor(Math.random()*100);

    // div.style.top = y+"%";
    // div.style.left = x+"%";

    // var r= Math.floor(Math.random()*256);
    // var g= Math.floor(Math.random()*256);
    // var b= Math.floor(Math.random()*256);

    // div.style.backgroundColor=`rgb(${r},${g},${b})`;

    // main.appendChild(div);


});