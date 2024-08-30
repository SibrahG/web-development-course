
//  function Userinformation(obj){
//     console.log(`username is ${obj.username} and price is ${obj.price} $`);
//     console.log("this is my file");

// }

// Userinformation({ username: "zarina", price:300});





// //  //array in functions
//  arr=[1,2,3]
//  function returnsecondvalue(getArray){
//     return getArray[1]
//  }
// console.log(returnsecondvalue([1,2,3]));
// console.log(returnsecondvalue(arr));

//function -1
// const add = function(a, b) {
//    return a + b;
//  }//expression function
 

 // Execute the function with arguments
 //console.log(add(2, 3)); // Output: 5
 //console.log(function name( arguments ))
// console.log( function name())

//arrow functions
//short and reduce method to write a function

// const add = (a,...b)// this object is an array like function => a+b;
// console.log(add(2, 3, 4, 5)); // Output: 5


//map  filter and reduce
//create a new aray and will store that value or answer in the new array

//reduce method
//these are performed on arrays
arr=[1,2,3,4,5]
console.log( arr.reduce( (a,b)=> a+b ))
//  node index.js
// arrayname.reduce
const items = [
   { name: 'Apple', price: 1 },
   { name: 'Orange', price: 2 },
   { name: 'Mango', price: 3 },
 ];
 
 let totalPrice = 0;
 
 items.forEach(item => {
   totalPrice += item.price;
 })
 
 
 console.log(totalPrice); // 6