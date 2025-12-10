//q1

// function afterDelay(time, cb){
//     setTimeout(()=>{
//         cb();
//     },time)
// }

// afterDelay(2000, function(){
//     console.log("Function executed!");
// })

//q2

// function getUser(username, cb){
//     console.log('Getting user details...');
//     setTimeout(()=>{
//         cb({id:'231b192',username:'Naitik Chitransh'});
//     },2000)
// }
// function getUserPosts(id, cb){
//     console.log('Fetching posts...');
//     setTimeout(()=>{
//         cb(['img1','img2','img3']);
//     },2000)
// }

// getUser('Naitik', function(details){
//     getUserPosts(123, function(posts){
//         console.log(details.username, posts);
//     })
// })

 //q3

 function loginUser(username, cb){
    console.log('logging in user...')
    setTimeout(()=>{
        cb({id:231, name:'Naitik'});
    },2000);
 }

function fetchPermissions(userID, cb){
    console.log('fetching permissions...')
    setTimeout(()=>{
        cb(['read','write','delete']);
    },2000);
 }

 function loadDashboard(permissions, cb){
    console.log('loadingDashboard...')
    setTimeout(()=>{
        cb('Dashboard loaded!');
    },2000);
 }

 loginUser('Unnati', function(obj){
    fetchPermissions(obj.id,function(arr){
        loadDashboard(arr, function(hehe){
            console.log(obj.name, arr, hehe);
        });
    });
 });

 //callback hell

 