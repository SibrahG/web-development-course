//object 
// let c = new Object({
//     //object constructor -singleton
// });
// //object literal not singleton
// console.log(a,b);
// console.log(typeof a);
// console.log(typeof b);

// Number("123.63") === 123; // true
// console.log(Number.parseInt(123.63))//123 doesnot even rounds off
// //5e3 5x10^3

// Number("unicorn"); // NaN
// Number(undefined); // NaN null-0 true-1 false-0


// let a= Number("23000000");
// let b = new Number(1400000.52);
// //to string
// console.log(a.toString());
// //to fixed
// console.log(b.toFixed(2))// rounds off to the given digits
// //to precision
// console.log(b.toPrecision());
// console.log(a.toLocaleString('en-IN'))// way to write the numbers from countrey to country 
// let d=Number.EPSILON;
let num= Math.round(10%3);
console.log(num);

console.log(Math.round(10%3));


const greet = name => `Hello, ${name}!`;
greet("sibrah") //wrong way
console.log(greet("sibrah")) //right way

// arr=[1,2,3,4,5,6,7]
// function sum(arr){
//     return arr.reduce((a,b) => a+b,0);
    
// }
// sum()
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((a, b) => accumulator + currentValue, 0);
// console.log(sum); // Output: 15

function random(){
    let num= Math.random()*100 +1;
    console.log(num);
}
random();