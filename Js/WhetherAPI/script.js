//API -> ek url hota hai jaha pe jane pe data milta hai, jiss jagah ka url uss jagah ka data milta hai

// let url= `https://api.openweathermap.org/data/2.5/whether?q=${city}&exclude={part}&appid=${apikey}`

// function whethercheck(city){
//     let apikey=`1ddbc6e263034e0a81ee6bf6f4b4408d`;
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&exclude={part}&appid=${apikey}`)
//     .then((raw)=>raw.json())
//     .then((result)=>{
//         console.log(result);
//     });

// }
// whethercheck('London');

// .then(function(raw) {
//     return raw.json();
// })

//using async await


async function whethercheck(city){
    try{
        let apikey=`1ddbc6e263034e0a81ee6bf6f4b4408d`;
        let raw =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&exclude={part}&appid=${apikey}`)
        if(!raw.ok){
            throw new Error('The city name is incorrect. SOMETHING WENT WRONG!');
        }
        let realData= await raw.json();
        console.log(realData);
        if((realData.main.temp-273)>32){
            console.warn(`TOO hot to handle....${Math.floor(realData.main.temp-273)}°C`)
        }
        if((realData.main.temp-273)<0){
            console.warn(`TOO Cold to handle....${Math.floor(realData.main.temp-273)}°C`)
        }
        console.log(`The temperature of the city ${city} is: ${Math.floor(realData.main.temp-273)}°C `)
    }
    catch(err){
        console.log(err.message);
    }

}
whethercheck('Allahabad');