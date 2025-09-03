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


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Zahaib Tariq", password: "1118"})
        }else{
            reject('ERROR: Something went wrong')
        }
    })
})

promiseFour.then((user) => {
    console.log(user)
    return user.username;
}).then((myUsername) => {
    console.log(myUsername);
    
}).catch(function(error) {
    console.log(error);
}).finally(() => console.log('The promise is either resolved or rejected'));


const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "JS", password: "1118"})
        }else{
            reject('ERROR: JS went wrong')
        }
    })
})

async function consumePromiseFrive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}

consumePromiseFrive()




// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
        
//     } catch (error) {
//         console.log("E: ", error);
        
//     }
// }

// getAllUsers()




fetch('https://api.github.com/users/zt-logics')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => {
    console.log(error);
    
})