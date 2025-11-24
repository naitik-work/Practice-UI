var h3= document.querySelector('#bheem');

var img= document.querySelector('img');

var body= document.querySelector('body');

img.addEventListener('mouseenter', function(){

    h3.innerHTML= "Meri Chutki se duur reh!!!!";
    h3.style.color = 'yellow';
    body.style.backgroundColor= 'red';

})

img.addEventListener('mouseleave', function(){

    h3.innerHTML= "......";
    h3.style.color = 'blue';
    body.style.backgroundColor= 'black';

})

