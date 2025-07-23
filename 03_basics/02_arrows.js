 const user = {
    username: "zahaib",
    designation: "Front-End Developer",
    age: 25,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to coding world`);
        console.log(this);
        
    }
 }

//  user.welcomeMessage()
//  user.username = 'umer'
//  user.welcomeMessage()
//  console.log(this);
 

// Note: "this" keyword only works in objects*********************** Important **


// ***************************** Arrow Functions **************************************

// const addTow = (num1,num2) => {        
    //  return num1 + num2                                       
// }
                             /* Note:  "if we are using "{}" in function we must use "return" keyword 
                                       if you are using "()" in function then we dont use "return" keyword"
                                                        */


// ************************** Implicit Return *********************************

const addTow = (num1,num2) => (num1 + num2)
console.log(addTow(5, 6));

