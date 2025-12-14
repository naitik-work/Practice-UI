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


// async function whethercheck(city){
//     try{
//         let apikey=`1ddbc6e263034e0a81ee6bf6f4b4408d`;
//         let raw =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&exclude={part}&appid=${apikey}`)
//         if(!raw.ok){
//             throw new Error('The city name is incorrect. SOMETHING WENT WRONG!');
//         }
//         let realData= await raw.json();
//         console.log(realData);
//         if((realData.main.temp-273)>32){
//             console.warn(`TOO hot to handle....${Math.floor(realData.main.temp-273)}°C`)
//         }
//         if((realData.main.temp-273)<0){
//             console.warn(`TOO Cold to handle....${Math.floor(realData.main.temp-273)}°C`)
//         }
//         console.log(`The temperature of the city ${city} is: ${Math.floor(realData.main.temp-273)}°C `)
//     }
//     catch(err){
//         console.log(err.message);
//     }

// }
// whethercheck('Allahabad');

const users=['naitik12@gmail.com',
            'ajfh@gmail.com',
            'fahouoh@gmail.com',
            'aadadw@gmail.com'];

function sendEmail(email){
    return new Promise((resolve,reject)=>{
        let time= Math.floor(Math.random()*5);
        setTimeout(()=>{
            let probability= Math.floor(Math.random()*10);
            if(probability<=5){
                resolve('Email sent successfully!');
            }
            else{
                reject('Email not sent!')
            }
        },time*1000)
    })
}


async function sendEmails(users){
    let allresponses= users.map(function(email){
        return sendEmail(email)
        .then(function(abs){
            console.log(abs);
        })
        .catch(function(err){
            console.log(err);
        });
    })
    let ans= await Promise.all(allresponses);
    ans.forEach(function(result){
        console.log(result);
    })
}

sendEmails(users);