function addTwoNumbers(number1, number2) {
    let result = number1 + number2;
    console.log(number1+ number2);
    return result;//after return the function stops //return stores the value but does not print it
    //console.log("Hitesh");//this is an error
}
//refernce()
addTwoNumbers(3, 5);
console.log(addTwoNumbers(3, 5));
//return is useful for stroing function values for example. i made a
 //function which returns the result so i can store that result into a variable
let r= addTwoNumbers(3,5);
console.log(r); 




const result = addTwoNumbers(3, 5);
console.log("Result: ", result);





// sayMyName()
function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}

addTwoNumbers(3, "4");
