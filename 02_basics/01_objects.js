
// const obj1 = {
//     name: "zahaib",
//     age: 28,
//     email: "zahaib@gmail.com",
//     isLoggedIn: false
// }
// const obj2 = {
//     name: "fatima",
//     age: 22,
//     email: "fatima@gmail.com",
//     isLoggedIn: false
// }
// console.log(obj1, obj2);

const instaUser = {}

instaUser.id = "zahaibtariq__"
instaUser.name = "zahaib"
instaUser.email = "zahaib@gmail.com"

// console.log(instaUser.id);


const regularUser = {
    email: "zz@gmail.com",
    fullname: {                                     
        userfullname: {                        // nested object
            firstname: "zahaib",
            lastname: "tariq"
        }
    }
}

// console.log(regularUser.fullname.userfullname);


const obj1 = {1: 'a', 2: 'b'}  //******* */ 1 is key and a is the value*********
const obj2 = {3: 'a', 4: 'b'}
const obj3 = {5: 'a', 6: 'b'}


const obj4 = {...obj1, ...obj2, ...obj3};

// console.log(obj4);

console.log(instaUser);

// console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));

console.log(instaUser.hasOwnProperty("email2"));




