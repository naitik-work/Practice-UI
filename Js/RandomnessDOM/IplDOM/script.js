    var arr = [
      {
        team: "CSK",
        primary: "yellow",
        secondary: "crimson",
        trophies: 4
      },
      {
        team: "KKR",
        primary: "blue",
        secondary: "brown",
        trophies: 2
      },
      {
        team: "RCB",
        primary: "red",
        secondary: "yellow",
        trophies: 6
      },
      {
        team: "MI",
        primary: "blue",
        secondary: "grey",
        trophies: 3
      },
      {
        team: "SRH",
        primary: "orange",
        secondary: "purple",
        trophies: 7
      }
    ];
var m= document.querySelector("main");
var b= document.querySelector("#box");
var btn= document.querySelector("button");
var h= document.querySelector("#team");

btn.addEventListener("click", function(){
    var x= Math.floor(Math.random()*arr.length);
    b.style.backgroundColor= arr[x].primary; 
    h.innerHTML= arr[x].team;
    m.style.backgroundColor= arr[x].secondary;
})