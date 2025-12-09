//js-single threaded
//ek kam ek bar me karegi
//synchronous approach
//asynchronous approach-> asynchrony nature

//callback-> ek function jo turant nhi chalega, ye tb chalega jab koi kaam complete hoga
//cb -> function mein pass krte ho

// setTimeout(function(){
//     console.log('heyy Naitik!!');
// },2000)


// function abcd(fn){
//     fn(function(fn3){
//         fn3(function(fn5){
//             fn5();
//         });
//     });


// }

// abcd(function(fn2){
//     fn2(function(fn4){
//         fn4(function(){
//             console.log('Hey, Naitik you did callback! Easy peasyyy:)')
//         });
//     });
// });

//callback hell

// 

function amitSeDetailsLao(address, cb){
    console.log('Fetching details, please wait...')
    setTimeout(function(){
        cb({lati:123.11, long: 23.23});
    },3000)
}
amitSeDetailsLao('23xyz',function(details){
    console.log(details);
});