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

function getUser(username, cb){
    console.log('Getting user details...');
    setTimeout(()=>{
        cb({id:'231b192',username:'Naitik Chitransh'});
    },2000)
}
function getUserPosts(id, cb){
    console.log('Fetching posts...');
    setTimeout(()=>{
        cb(['img1','img2','img3']);
    },2000)
}

getUser('Naitik', function(details){
    getUserPosts(123, function(posts){
        console.log(details.username, posts);
    })
})

 