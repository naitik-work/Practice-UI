//Debouncing and throttling
//jab koi insan type krra ho toh kuch fixed limited time ke baad hee suggestions show kre, i.e debouncing.


// function debounce(fn,delay){
//     let timer;
//     return function(){
//         clearTimeout(timer);
//         timer= setTimeout(fn,delay);
//     };
// };

// document.querySelector('#search').addEventListener('input', debounce(function(){
//     console.log('chala');
// },2000));


//throttling
//for any event, kuch fixed interval me ek baar function update hoga. for eg. mouse move wala scenario yaad kro, har 2 sec me e.ClientX aur ClientY ki position console pe print krwa rhe the...

function throttle(fn, delay){
    let last=0;
    return function(){
        const now= Date.now();
        if(now-last>=delay){
            last=now;
            fn();
        }
    };
};

window.addEventListener('mousemove', throttle(function(){
    console.log('Hey NaitiK!'),20})
);