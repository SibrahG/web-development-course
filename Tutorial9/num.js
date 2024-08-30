let a = 123;

let num= Number("123");// returns the number 123 // to change anything into a number
console.log(typeof num)
console.log(num)
Number(undefined); // NaN
//- Numbers are returned as-is. 
//null will turn into 0
//true-1 and false-0
let x = Number.parseInt(2.3)// 2
console.log(Number)

let balance= new Number(100)
console.log(balance); 
//to string
console.log(balance.toString().length);
console.log(balance.toFixed(2)); ///1234.67896 round off to two decimal plac es
//to precision
let another_num= 22230000.456;
console.log(another_num.toPrecision(5));
console.log(another_num.toLocaleString('en-IN'));