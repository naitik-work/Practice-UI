//promises-> ek kam jake kro
//pending state
//hojayega->resolved
//nahi hoga-> reject

// const prm= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve();
//     },3000);
// });

// prm.then(function(){
//     console.log('heyheyhey')
// });
// prm.catch(function(){
//     console.log('hiehiheih')
// });

fetch(`https://randomuser.me/api/`)
.then(function(nonReadableData){
     return nonReadableData.json();
})
.then(function(realData){
    console.log(realData.results[0].name.first);

})
.catch(function(err){
    console.log(err);
})