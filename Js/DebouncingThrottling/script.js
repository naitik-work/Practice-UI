//Debouncing and throttling
//jab koi insan type krra ho toh kuch fixed limited time ke baad hee suggestions show kre, i.e debouncing.


function debounce(fn,delay){
    let timer;
    return function(){
        clearTimeout(timer);
        timer= setTimeout(fn,delay);
    };
};

document.querySelector('#search').addEventListener('input', debounce(function(){
    console.log('chala');
},2000));