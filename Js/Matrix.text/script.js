const para= document.querySelector("p");
const characters= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvywxyz";
const text= para.innerText;


para.addEventListener('mouseenter',()=>{

    setInterval(()=>{
        const str= text.split('').map((characters,index)=>{
            return characters.split("")[Math.floor(Math.random()*53)]
        }).join("")

        para.innerText = str;
    },30);
    
    
})

