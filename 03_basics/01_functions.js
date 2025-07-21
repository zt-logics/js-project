function addTwoNumbers(num1, num2) {
    return num1 + num2
}

const result = addTwoNumbers(7,9)
// console.log("Result: ", result);

// function userLoggedIn(username) {
//     if (!username) {
//         console.log("Please enter a User Name");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(userLoggedIn());


function userLogged(username) {
    if(username) {
        console.log(`Hurray! ${username} just logged In`);
    } else {
        console.log("Please enter a valid User Name");
    }
}

// console.log(userLogged());



// *****************************************using rest operator******************************
//  ...num using with 3 dots
function calCartPrice(val1, val2, ...num){
    return num
}

// console.log(calCartPrice(200,900,1000,13000,50000));






// ************************ Functions with Object ******************************

const product = {
    productname: "Dairy Milk",
    price: 500
}

function handleProduct(anyobject){
    // console.log(`${anyobject.productname} price is ${anyobject.price}`);
    
}

// handleProduct(product);
handleProduct({
    productname: "Icecream",
    price: 399
})



const myArray = [202, 330, 440, 500]

function returnArrayValue(getArray){
    return getArray[2]
}

// console.log(returnArrayValue(myArray));

console.log(returnArrayValue([700, 800, 1200, 3000]));

