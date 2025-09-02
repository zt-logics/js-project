const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task is complete");
        resolve() 
    },1000)
})

promiseOne.then(function(){
    console.log('promise consumed');
    
})





new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('Async Task 2 resolved');
    
})





const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Zahaib", email: "zahaib@example.com"})
    },1000)
    
})

promiseThree.then(function(user){
    console.log(user);
    
})