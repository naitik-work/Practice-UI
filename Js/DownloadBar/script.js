var btn = document.querySelector('button');
var inner= document.querySelector('.inner');
var h2= document.querySelector('h2');
var grow=0;
btn.addEventListener('click',()=>{

    btn.style.pointerEvents= 'none';

    var num= Math.random()*100;
    var int=setInterval(()=>{
        grow++;
        h2.innerHTML=grow+'%';
        inner.style.width= grow+'%';

    },50)
    
    setTimeout(()=>{
        clearInterval(int);
        btn.innerHTML= 'Downloaded';
        btn.style.opacity= 0.5;
        

    },5000)


})

