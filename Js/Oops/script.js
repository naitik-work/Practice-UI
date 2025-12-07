//ek kamra bana skte hai
//naksha ->nahi
//architect->nahi

//building bana skte hai
//naksha ->yes
//architect->yes ofc

// jab bhi bada s/w banta hai waise code nahi likhte jaise dom mein likha hai, aur dekha hai.

//code-> object classes and functions
//modular,scalable,manageable,promise,reuse,easy to use;

//classes object ki factory hai, classes banate hai taaki hame har baar ek naya obj mil jaye

//har baar new word ke sath class run karge to ek naya object milega


class BiscuitMaker{

    constructor(name, price){
        this.name= name;
        this.price= price;
    }

    //constructor ke bahr kuch bhi banao automatically wo prototype(Shared memory me add hota hai!!)

    speak(){
        console.log('hey');
    }

    walk(){
        console.log('hie!');
    }
}

BiscuitMaker.prototype.breath = function(){
    console.log('hieee');
    //shared memory
}

let biscuit1= new BiscuitMaker('ParleG',10);
let biscuit2= new BiscuitMaker('GoodDay',50);
let biscuit3= new BiscuitMaker('2020',100);



